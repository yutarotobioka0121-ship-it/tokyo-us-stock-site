import { getPostBySlug, getPosts } from '@/lib/notion';
import RelatedPosts from '@/components/RelatedPosts';
import BeginnerCta from "@/components/BeginnerCta";
import MetricsSeriesFooter from "@/components/MetricsSeriesFooter";
import SeminarInlineCta from '@/components/SeminarInlineCta';
import SeminarFooterCta from '@/components/SeminarFooterCta';
import { Calendar, ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

const INVESTING_SINCE = 2020;
const currentYear = Number(new Intl.DateTimeFormat('en', { year: 'numeric', timeZone: 'Asia/Tokyo' }).format(new Date()));
const yearsCount = currentYear - INVESTING_SINCE + 1;

import { notFound } from 'next/navigation';
import { Metadata } from 'next';

export const revalidate = 3600;
export const dynamicParams = true;

export async function generateStaticParams() {
  // Notion APIの429エラーを回避するため、ビルド時の静的生成は行わず
  // アクセス時にオンデマンドで生成（ISR）させる
  return [];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // 本文ブロックからプレーンテキストを抽出してディスクリプションにする
  const plainText = post.content
    .filter((block: any) => block.type === 'paragraph')
    .map((block: any) => block.paragraph.rich_text.map((t: any) => t.plain_text).join(''))
    .join(' ');

  const description = (post.summary || plainText || '')
    .replace(/<[^>]*>/g, '')
    .trim()
    .slice(0, 120) + '…';

  return {
    title: slug === 'us-stock-beginners-guide' && !post.title.includes('米国株の始め方') ? '米国株の始め方 完全ガイド（初心者向け）｜' + post.title : post.title,
    description,
    openGraph: {
      title: post.title,
      description,
      url: `https://www.tokyo-us-stock.com/blog/${slug}`,
      type: 'article',
      publishedTime: post.date,
      authors: ['とびー'],
      // images は指定しない → Next.js が opengraph-image.tsx を自動検出して使用する
    },
    alternates: {
      canonical: `https://www.tokyo-us-stock.com/blog/${slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
    return; // TypeScript に対して、これ以降 post は null でないことを保証
  }

  // 前後の記事を取得
  const allPosts = await getPosts();
  const currentIndex = allPosts.findIndex((p) => p.slug === slug || p.id === post.id);
  const nextPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null; // 新しい記事
  const prevPost = currentIndex !== -1 && currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null; // 古い記事

  // 知識ページ案内バナーの選定
  let knowledgeLink = '/knowledge';
  let knowledgeTitle = '米国株（アメリカ株）の基礎知識';
  let knowledgeDesc = '初心者でも安心！米国株の基本の仕組みや日本株との違いを比較表で徹底解説しています。';

  const titleLower = post.title.toLowerCase();
  if (titleLower.includes('nisa')) {
    knowledgeLink = '/knowledge/nisa';
    knowledgeTitle = 'NISA（ニーサ）の基本';
    knowledgeDesc = '税金がずっとゼロになるお得な非課税制度「NISA」の仕組みやつみたて投資枠の活用法を詳しく解説しています。';
  } else if (titleLower.includes('比較') || titleLower.includes('vs') || titleLower.includes('主要投資')) {
    knowledgeLink = '/knowledge/stock-investment';
    knowledgeTitle = '株式投資の基本';
    knowledgeDesc = '株式投資のメリット（配当金・値上がり益）から、インフレに負けないリスク管理法までわかりやすく解説しています。';
  }

  // Article Schema
  const articleSchema: any = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: slug === 'us-stock-beginners-guide' && !post.title.includes('米国株の始め方') ? '米国株の始め方 完全ガイド（初心者向け）｜' + post.title : post.title,
    description: (post.summary || '').slice(0, 120),
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Person',
      name: 'とびー',
      url: 'https://www.tokyo-us-stock.com/about',
    },
    publisher: {
      '@type': 'Organization',
      name: '東京米国株クラブ',
      url: 'https://www.tokyo-us-stock.com',
    },
    url: `https://www.tokyo-us-stock.com/blog/${slug}`,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://www.tokyo-us-stock.com/blog/${slug}`,
    },
    image: post.cover ? [post.cover] : ['https://www.tokyo-us-stock.com/og-image.png'],
  };

  if (slug.startsWith('valuation-metrics-series-')) {
    articleSchema.isPartOf = {
      "@type": "Series",
      "name": "投資指標シリーズ",
      "url": "https://www.tokyo-us-stock.com/blog"
    };
    articleSchema.about = {
      "@type": "Thing",
      "name": post.title.split(' ')[0] || post.title
    };
  }

  // Breadcrumb Schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'ホーム',
        item: 'https://www.tokyo-us-stock.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'ブログ',
        item: 'https://www.tokyo-us-stock.com/blog',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: `https://www.tokyo-us-stock.com/blog/${slug}`,
      },
    ],
  };

  return (
    <article className="post-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <header className="post-header">
        <div className="container">
          <Link href="/blog" className="btn-link" style={{ marginBottom: '3rem', justifyContent: 'center' }}>
            <ArrowLeft size={18} /> ブログ一覧へ戻る
          </Link>
          
          <div className="post-meta slide-up">
            <Calendar size={18} />
            <span>{post.date}</span>
          </div>
          <h1 className="post-title slide-up delay-1">{slug === 'us-stock-beginners-guide' && !post.title.includes('米国株の始め方') ? '米国株の始め方 完全ガイド（初心者向け）｜' + post.title : post.title}</h1>
        </div>
        
        {post.cover && (
          <div className="post-cover slide-up delay-2">
            <div className="container">
              <div className="post-cover-wrapper glass-card">
                <img src={post.cover} alt={post.title} />
              </div>
            </div>
          </div>
        )}
      </header>

      <section className="post-content slide-up delay-3">
        <div className="container">
          <div className="post-content-inner glass-card">
            {/* AIO対策用：自動生成される「この記事の要点」 */}
            {(() => {
              const headings = post.content
                .filter((b: any) => b.type === 'heading_1' || b.type === 'heading_2' || b.type === 'heading_3')
                .map((b: any) => b[b.type]?.rich_text?.map((t: any) => t.plain_text).join('') || '')
                .filter((text: string) => text && text.trim() !== post.title.trim())
                .slice(0, 5); // 最大5行の箇条書きを抽出

              if (headings.length > 0) {
                return (
                  <div className="aio-summary-box" style={{ background: 'var(--bg-light)', border: '1px solid var(--glass-border)', borderRadius: '12px', padding: '1.5rem', marginBottom: '2.5rem' }}>
                    <h2 style={{ fontSize: '1.1rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', borderBottom: 'none', paddingBottom: 0, marginTop: 0 }}>
                      <CheckCircle2 size={20} color="var(--primary)" /> この記事の要点
                    </h2>
                    <ul style={{ margin: 0, paddingLeft: '1.5rem', color: 'var(--text-main)', fontSize: '0.95rem', lineHeight: '1.8', fontWeight: '600' }}>
                      {headings.map((heading: string, i: number) => (
                        <li key={i} style={{ marginBottom: '0.4rem' }}>{heading}</li>
                      ))}
                    </ul>
                  </div>
                );
              }
              return null;
            })()}

            {(() => {
              const pathname = `/blog/${slug}`;
              const getBlockPlainText = (b: any) =>
                (b?.[b?.type]?.rich_text || []).map((t: any) => t.plain_text).join('');

              const filteredBlocks = post.content.filter((block: any, index: number) => {
                // 先頭のheading_1/heading_2がページタイトルと同じテキストの場合はスキップ
                // （Notion本文の先頭にタイトルと同じ見出しが入っている旧記事への対応）
                if (index === 0 && (block.type === 'heading_1' || block.type === 'heading_2')) {
                  const headingText = getBlockPlainText(block);
                  if (headingText.trim() === post.title.trim()) {
                    return false;
                  }
                }
                return true;
              });

              // 記事冒頭に「この記事の要点」ブロックがある場合は、それより後ろから数える
              let minStartIdx = 0;
              for (let i = 0; i < Math.min(filteredBlocks.length, 6); i++) {
                const b = filteredBlocks[i];
                if (b.type === 'quote' || b.type === 'callout' || b.type === 'code' || b.type === 'paragraph') {
                  const txt = getBlockPlainText(b);
                  if (txt.includes('この記事の要点')) {
                    minStartIdx = i + 1;
                  }
                }
              }

              // インライン案内の挿入位置：2つ目のH2（Notionのheading_2/heading_1）の直前、なければ3つ目の段落の後ろ
              const h2Indices: number[] = [];
              const paraIndices: number[] = [];
              filteredBlocks.forEach((b: any, idx: number) => {
                if (idx < minStartIdx) return;
                if (b.type === 'heading_1' || b.type === 'heading_2') {
                  h2Indices.push(idx);
                } else if (b.type === 'paragraph') {
                  paraIndices.push(idx);
                }
              });

              const inlineBeforeIdx = h2Indices.length >= 2 ? h2Indices[1] : -1;
              const inlineAfterIdx =
                inlineBeforeIdx === -1 && paraIndices.length > 0
                  ? paraIndices[Math.min(2, paraIndices.length - 1)]
                  : -1;

              // 末尾案内の挿入位置：本文後半にある免責事項の見出し・段落の直前（見つからなければ本文の最後）
              const halfIdx = Math.floor(filteredBlocks.length / 2);
              let disclaimerIdx = -1;
              for (let i = halfIdx; i < filteredBlocks.length; i++) {
                const txt = getBlockPlainText(filteredBlocks[i]);
                if (
                  txt.includes('免責事項') ||
                  txt.includes('免責') ||
                  txt.includes('本記事は情報提供を目的') ||
                  txt.includes('特定の金融商品への投資勧誘') ||
                  txt.includes('投資は自己責任のもとで')
                ) {
                  disclaimerIdx = i;
                  break;
                }
              }

              return (
                <>
                  {filteredBlocks.map((block: any, idx: number) => {
                    const { type } = block;
                    const value = block[type];

                    // Helper to render rich text
                    const renderRichText = (richText: any[]) => {
                      return richText.map((t: any, i: number) => {
                        const { annotations, href } = t;
                        const style: React.CSSProperties = {
                          fontWeight: annotations.bold ? 'bold' : 'normal',
                          fontStyle: annotations.italic ? 'italic' : 'normal',
                          textDecoration: annotations.strikethrough ? 'line-through' : (annotations.underline ? 'underline' : 'none'),
                          color: annotations.color !== 'default' ? annotations.color : 'inherit',
                        };

                        if (href) {
                          // Notionドメインを含む内部リンクを正規化
                          const normalizedHref = href.replace(/^https?:\/\/(?:app\.|www\.)?notion\.com/, '');
                          // 内部リンク判定（/blog/, /knowledge/ などサイト内パス）
                          const isInternal = /^\/(?:blog|knowledge|about|contact|privacy)\b/.test(normalizedHref);

                          if (isInternal) {
                            return <a key={i} href={normalizedHref} style={style}>{t.plain_text}</a>;
                          }
                          return <a key={i} href={normalizedHref} target="_blank" rel="noopener noreferrer" style={style}>{t.plain_text}</a>;
                        }
                        return <span key={i} style={style}>{t.plain_text}</span>;
                      });
                    };

                    const renderBlockContent = () => {
                      switch (type) {
                      case 'paragraph':
                        return (
                          <p key={block.id} className="notion-p notion-block">
                            {renderRichText(value.rich_text)}
                          </p>
                        );
                      case 'heading_1':
                        return (
                          <h2 key={block.id} className="notion-h1 notion-block">
                            {renderRichText(value.rich_text)}
                          </h2>
                        );
                      case 'heading_2':
                        return (
                          <h3 key={block.id} className="notion-h2 notion-block">
                            {renderRichText(value.rich_text)}
                          </h3>
                        );
                      case 'heading_3':
                        return (
                          <h4 key={block.id} className="notion-h3 notion-block">
                            {renderRichText(value.rich_text)}
                          </h4>
                        );
                      case 'bulleted_list_item':
                        return (
                          <ul key={block.id} className="notion-list notion-block">
                            <li className="notion-li">
                              {renderRichText(value.rich_text)}
                            </li>
                          </ul>
                        );
                      case 'numbered_list_item':
                        return (
                          <ol key={block.id} className="notion-list notion-block" style={{ listStyleType: 'decimal' }}>
                            <li className="notion-li">
                              {renderRichText(value.rich_text)}
                            </li>
                          </ol>
                        );
                      case 'quote':
                        return (
                          <blockquote key={block.id} className="notion-quote notion-block">
                            {renderRichText(value.rich_text)}
                          </blockquote>
                        );
                      case 'divider':
                        return <hr key={block.id} className="notion-divider" />;
                      case 'image':
                        const src = value.type === 'external' ? value.external.url : value.file.url;
                        return (
                          <figure key={block.id} className="notion-image-block notion-block">
                            <img src={src} alt="Post content" />
                            {value.caption?.length > 0 && (
                              <figcaption className="notion-caption">
                                {renderRichText(value.caption)}
                              </figcaption>
                            )}
                          </figure>
                        );
                      case 'code':
                        return (
                          <pre key={block.id} className="notion-code notion-block">
                            <code>
                              {value.rich_text.map((t: any) => t.plain_text).join('')}
                            </code>
                          </pre>
                        );
                      default:
                        return null;
                    }
                  };

                  return (
                    <div key={block.id} className="notion-block-wrapper">
                      {idx === inlineBeforeIdx && <SeminarInlineCta pathname={pathname} />}
                      {idx === disclaimerIdx && <SeminarFooterCta pathname={pathname} variant="notion" />}
                      {renderBlockContent()}
                      {idx === inlineAfterIdx && <SeminarInlineCta pathname={pathname} />}
                    </div>
                  );
                  })}

                  {inlineBeforeIdx === -1 && inlineAfterIdx === -1 && (
                    <SeminarInlineCta pathname={pathname} />
                  )}
                  {disclaimerIdx === -1 && (
                    <SeminarFooterCta pathname={pathname} variant="notion" />
                  )}
                </>
              );
            })()}

            
            {/* Beginner CTA for series posts (2-2) */}
            {(() => {
              if (slug.startsWith('valuation-metrics-series-')) {
                return <MetricsSeriesFooter currentSlug={slug} />;
              }
              const isSeries = post.title.includes('企業分析') || post.title.includes('セクター') || post.title.includes('ETF');
              if (isSeries) {
                return <BeginnerCta />;
              }
              return null;
            })()}

            {/* 知識ページ案内バナー */}
            <div className="knowledge-banner glass-card" style={{ marginTop: '3rem', padding: '2rem', background: 'var(--bg-warm)', borderRadius: '16px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '1rem', border: '1px solid var(--glass-border)' }}>
              <span className="featured-tag" style={{ margin: 0 }}>あわせて読みたい</span>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '900', color: 'var(--primary-dark)', margin: 0 }}>
                {knowledgeTitle}
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', margin: 0, lineHeight: '1.6' }}>
                {knowledgeDesc}
              </p>
              <Link href={knowledgeLink} className="btn btn-primary" style={{ fontSize: '0.9rem', padding: '0.6rem 1.8rem', borderRadius: '30px', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', marginTop: '0.5rem', textDecoration: 'none' }}>
                基礎知識を学び直す <ArrowRight size={16} />
              </Link>
            </div>

            {/* 著者情報（E-E-A-T対策） */}
            <div className="author-box glass-card" style={{ marginTop: '3rem', padding: '2rem', background: 'var(--bg-white)', borderRadius: '16px', border: '1px solid var(--glass-border)', display: 'flex', gap: '1.5rem', alignItems: 'flex-start', flexWrap: 'wrap' }}>
              <div style={{ width: '70px', height: '70px', borderRadius: '50%', overflow: 'hidden', border: '2px solid var(--primary)', flexShrink: 0 }}>
                <img src="/profile.png" alt="とびー" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ flex: 1, minWidth: '250px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
                  <span style={{ fontSize: '1.1rem', fontWeight: '900', color: 'var(--text-main)' }}>この記事の執筆者：とびー</span>
                  <span style={{ fontSize: '0.75rem', fontWeight: '700', padding: '0.2rem 0.6rem', borderRadius: '10px', background: 'rgba(176, 58, 46, 0.08)', color: 'var(--primary)' }}>米国株長期投資家</span>
                </div>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.6', margin: '0 0 1rem 0' }}>
                  2020年から投資を始め、今年で{yearsCount}年目となる米国株長期投資家。「東京米国株クラブ」の主宰。投資＝ギャンブルだと思い大損する失敗を経験するも、企業分析（財務諸表の徹底的な読み解き）に基づいた長期投資へシフトし、5年で1300%以上の運用実績を達成。2026年7月にはサイドFIRE（経済的自立）を達成。現在はサラリーマン・事業主として多忙な日々を送りつつ、初心者向けの投資セミナーを東京・オンラインで開催中。
                </p>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <Link href="/about" style={{ fontSize: '0.85rem', fontWeight: '800', color: 'var(--primary)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
                    詳しいプロフィールを見る <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>

            {/* 前後の記事ナビゲーション */}
            <div className="post-navigation" style={{ marginTop: '4rem', display: 'flex', justifyContent: 'space-between', gap: '1.5rem', borderTop: '1px solid rgba(0,0,0,0.06)', paddingTop: '2rem', flexWrap: 'wrap' }}>
              {prevPost ? (
                <Link href={`/blog/${prevPost.slug}`} className="nav-prev-link btn-link" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '0.3rem', maxWidth: '45%', textDecoration: 'none' }}>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>&lt;&lt; 前の記事</span>
                  <span style={{ fontSize: '0.95rem', color: 'var(--text-main)', fontWeight: '800', textAlign: 'left', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{prevPost.title}</span>
                </Link>
              ) : (
                <div style={{ width: '45%' }}></div>
              )}
              
              {nextPost ? (
                <Link href={`/blog/${nextPost.slug}`} className="nav-next-link btn-link" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.3rem', maxWidth: '45%', textDecoration: 'none' }}>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>次の記事 &gt;&gt;</span>
                  <span style={{ fontSize: '0.95rem', color: 'var(--text-main)', fontWeight: '800', textAlign: 'right', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{nextPost.title}</span>
                </Link>
              ) : (
                <div style={{ width: '45%' }}></div>
              )}
            </div>

            {/* 関連記事一覧 */}
            <RelatedPosts currentSlug={slug} currentTitle={post.title} />
          </div>
        </div>
      </section>
    </article>
  );
}
