import { getPostBySlug, getPosts } from '@/lib/notion';
import RelatedPosts from '@/components/RelatedPosts';
import { Calendar, ArrowLeft, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

export const dynamic = 'force-dynamic';

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
    title: `${post.title} | 東京米国株クラブ`,
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
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
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
          <h1 className="post-title slide-up delay-1">{post.title}</h1>
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
            {post.content
              .filter((block: any, index: number) => {
                // 先頭のheading_1/heading_2がページタイトルと同じテキストの場合はスキップ
                // （Notion本文の先頭にタイトルと同じ見出しが入っている旧記事への対応）
                if (index === 0 && (block.type === 'heading_1' || block.type === 'heading_2')) {
                  const headingText = block[block.type]?.rich_text?.map((t: any) => t.plain_text).join('') || '';
                  if (headingText.trim() === post.title.trim()) {
                    return false;
                  }
                }
                return true;
              })
              .map((block: any) => {
              const { type } = block;
              const value = block[type];

              // Helper to render rich text
              const renderRichText = (richText: any[]) => {
                return richText.map((t: any, i: number) => {
                  const { annotations, text, href } = t;
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
            })}

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
                  投資歴5年以上の米国株長期投資家。「東京米国株クラブ」の主宰。投資＝ギャンブルだと思い大損する失敗を経験するも、企業分析（財務諸表の徹底的な読み解き）に基づいた長期投資へシフトし、5年間で+1300%超（約13倍）の実績を達成。2026年7月にはサイドFIRE（経済的自立）を達成。現在はサラリーマン・事業主として多忙な日々を送りつつ、初心者向けの投資セミナーを東京・オンラインで開催中。
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
