import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, Users, TrendingUp, Heart, BookOpen, PieChart, UserCheck } from "lucide-react";
import { Metadata } from "next";
import { getPosts } from "@/lib/notion";
import BlogPreviewSection from "@/components/BlogPreviewSection";
import HomeFAQ from "@/components/HomeFAQ";

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: '東京米国株クラブ｜米国株の始め方・おすすめを学ぶ東京のセミナー',
  description: '「米国株の始め方がわからない」初心者向けの東京の投資セミナー。S&P500・新NISAのおすすめ活用法から口座開設まで、5年で資産13倍の講師が少人数制カフェスタイルで丁寧に解説。参加費無料。',
  alternates: {
    canonical: 'https://www.tokyo-us-stock.com',
  },
  openGraph: {
    title: '東京米国株クラブ｜米国株の始め方・おすすめを学ぶ東京のセミナー',
    description: '「米国株の始め方がわからない」初心者向けの東京の投資セミナー。S&P500・新NISAのおすすめ活用法から口座開設まで、5年で資産13倍の講師が少人数制カフェスタイルで丁寧に解説。',
    url: 'https://www.tokyo-us-stock.com',
    siteName: '東京米国株クラブ',
    images: [
      {
        url: 'https://www.tokyo-us-stock.com/ogp.png',
        width: 1200,
        height: 630,
        alt: '東京米国株クラブ',
      },
    ],
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '米国株の始め方・おすすめを学ぶ東京のセミナー｜東京米国株クラブ',
    description: '「米国株の始め方がわからない」初心者向けの東京の投資セミナー。S&P500・新NISAのおすすめ活用法から口座開設まで、5年で資産13倍の講師が少人数制カフェスタイルで丁寧に解説。',
    images: ['https://www.tokyo-us-stock.com/ogp.png'],
  },
};

export default async function Home() {
  // 最新ブログ記事を最大3件取得
  let latestPosts: { id: string; title: string; slug: string; date: string; summary: string; cover: string | null }[] = [];
  try {
    const allPosts = await getPosts();
    latestPosts = allPosts.slice(0, 3);
  } catch (e) {
    latestPosts = [];
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: '米国株の始め方がわかりません。何から始めればいいですか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '米国株投資の始め方は大きく3ステップです。①SBI証券・楽天証券などのネット証券で口座を開設する、②新NISA口座を設定する、③S&P500などのインデックスファンドを毎月一定額で積立購入する、という流れが初心者におすすめです。当クラブの少人数制セミナーで一つひとつ丁寧に解説しています。',
        },
      },
      {
        '@type': 'Question',
        name: '初心者に米国株のおすすめ銘柄・商品を教えてください',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '投資初心者には、米国の優良企業500社に分散投資できる「S&P500連動インデックスファンド」が最もおすすめです。代表的な商品は「eMAXIS Slim 米国株式（S&P500）」で、新NISAのつみたて投資枠で購入すれば利益に対する税金が永久にゼロになります。',
        },
      },
      {
        '@type': 'Question',
        name: 'NISAで米国株・S&P500に投資できますか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'はい、新NISAの「つみたて投資枠（年間120万円）」と「成長投資枠（年間240万円）」の両方で米国株・S&P500連動ファンドを購入できます。合計年間360万円・生涯1,800万円まで非課税で運用できます。',
        },
      },
    ],
  };

  return (
    <div className="home-page" style={{ overflowWrap: 'break-word' }}>
      {/* JSON-LD FAQPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content-left slide-up">
              {/* 最重要キーワード入りのH1タグ */}
              <h1 className="hero-title" style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.5rem, 5vw, 2.8rem)', color: 'var(--primary-dark)', lineHeight: '1.3', fontWeight: '900', marginBottom: '1.5rem' }}>
                東京米国株クラブへようこそ
              </h1>

              <p className="hero-subtitle-text" style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(0.95rem, 2.2vw, 1.15rem)', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '2rem' }}>
                「米国株や新NISAを始めたいけれど何から手をつければいいか分からない」「本やSNSの情報だけでは不安」という方のための、ゆるくて温かい学習コミュニティです。<br className="sp-hide" />
                難しい専門用語を使わず、知識ゼロから安全に資産を育てる長期・分散投資の基礎を楽しく学べます。
              </p>

              <div className="hero-actions" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link href="/seminar" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                  セミナーの詳細を見る <ArrowRight size={20} />
                </Link>
                <Link href="/about" className="btn btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                  当クラブについて
                </Link>
              </div>
            </div>

            {/* Hero画像（スマホ・PC共通でHTML上に1回のみ出力） */}
            <div className="hero-peek-container slide-up delay-1">
              <div className="hero-peek-character hero-peek-character-desktop">
                <Image
                  src="/character-peek.png"
                  alt="東京米国株クラブの公式キャラクター とびー"
                  width={140}
                  height={202}
                  style={{ objectFit: 'contain', width: '100%', height: '100%' }}
                />
              </div>
              <div className="hero-peek-image">
                <Image
                  src="/hero.png"
                  alt="東京米国株クラブの初心者向け米国株投資セミナー"
                  width={600}
                  height={450}
                  style={{ objectFit: 'cover', width: '100%', height: 'auto', display: 'block', borderRadius: '24px' }}
                  priority
                  className="hero-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature / Concept Section（本文テキスト増強セクション） */}
      <section style={{ background: 'white', padding: 'clamp(2rem, 4vw, 3rem) 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
        <div className="container" style={{ maxWidth: '860px', margin: '0 auto', textAlign: 'left' }}>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(0.95rem, 2vw, 1.1rem)', color: 'var(--text-main)', lineHeight: '2', margin: 0 }}>
            「米国株に興味はあるけれど、始め方がわからない」「S&P500やNISAを活用したいが、何を買えばいいかわからない」という方のために、
            東京米国株クラブでは<strong>米国株投資の始め方をゼロから解説</strong>しています。<br className="sp-hide" />
            初心者におすすめのS&P500・ETF・新NISAを使った積立投資の具体的なやり方を、難しい専門用語を使わず、
            カフェでお茶を飲みながら話すような気軽な雰囲気で学べます。
          </p>
        </div>
      </section>

      {/* Feature / Concept Section（本文テキスト増強セクション） */}
      <section style={{ background: 'white', padding: 'clamp(3rem, 6vw, 5rem) 0' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <span className="featured-tag">東京米国株クラブの特徴</span>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.5rem, 4vw, 2.4rem)', fontWeight: '900', color: 'var(--primary-dark)', marginBottom: '1.2rem', lineHeight: '1.4' }}>
            なぜ初心者でも安心して米国株とNISAを学べるのか？
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(0.95rem, 2vw, 1.1rem)', color: 'var(--text-muted)', lineHeight: '1.8', maxWidth: '800px', margin: '0 auto 3rem auto' }}>
            東京米国株クラブでは、ギャンブルのような短期売買（短期トレード）ではなく、世界経済の成長に乗る「長期・積立・分散」による堅実な資産形成を提案しています。店舗型金融機関のような高額手数料や強引な商品勧誘は一切ありません。
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.8rem', textWrap: 'pretty' }}>
            <div className="glass-card" style={{ padding: '2rem 1.5rem', borderRadius: '20px', border: '1px solid rgba(0,0,0,0.08)', background: 'var(--bg-warm)', textAlign: 'left' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem', color: 'var(--primary)' }}>
                <Users size={26} />
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.6rem', fontFamily: 'var(--font-heading)' }}>
                少人数制カフェスタイル（定員4名）
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', lineHeight: '1.7', margin: 0 }}>
                100人規模の大規模セミナーとは異なり、定員4名までのアットホームな雰囲気で開催。疑問に思ったその場で気軽に質問できます。
              </p>
            </div>

            <div className="glass-card" style={{ padding: '2rem 1.5rem', borderRadius: '20px', border: '1px solid rgba(0,0,0,0.08)', background: 'var(--bg-warm)', textAlign: 'left' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem', color: 'var(--primary)' }}>
                <TrendingUp size={26} />
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.6rem', fontFamily: 'var(--font-heading)' }}>
                S&P500 ✕ 新NISAの活用法
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', lineHeight: '1.7', margin: 0 }}>
                AppleやMicrosoft、S&P500指数など、過去100年成長し続ける米国企業の強みと、新NISA制度（非課税枠）を最大限活かす具体的なやり方が理解できます。
              </p>
            </div>

            <div className="glass-card" style={{ padding: '2rem 1.5rem', borderRadius: '20px', border: '1px solid rgba(0,0,0,0.08)', background: 'var(--bg-warm)', textAlign: 'left' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem', color: 'var(--primary)' }}>
                <ShieldCheck size={26} />
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.6rem', fontFamily: 'var(--font-heading)' }}>
                中立な立場 ＆ 勧誘なしの安心感
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', lineHeight: '1.7', margin: 0 }}>
                特定の証券会社や保険商品、投資ファンドの売込みは一切行いません。投資家目線でのリアルな体験談（5年で+1300%達成）に基づいた失敗しない知識をお伝えします。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Column Study Session Section */}
      <section className="featured-section section-padding" style={{ background: 'var(--bg-warm)' }}>
        <div className="container" style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="featured-tag">選べる学び方・ご相談</span>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.6rem, 4.5vw, 2.5rem)', color: 'var(--primary-dark)', lineHeight: '1.3', fontWeight: '900', margin: '0.5rem 0 1rem 0' }}>
              東京開催のセミナー ＆ 個別相談コース
            </h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(0.95rem, 2vw, 1.1rem)', color: 'var(--text-muted)', lineHeight: '1.8', maxWidth: '750px', margin: '0 auto' }}>
              ご自身の目的やご都合に合わせて、3つのスタイルからお選びいただけます。<br className="sp-hide" />
              知識ゼロの方でも、カフェでお茶を飲むようなリラックスした雰囲気でご参加いただけます。
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.8rem', alignItems: 'stretch' }}>
            {/* カラム1: 米国株式セミナー (Image embedded) */}
            <div className="glass-card" style={{ padding: '1.5rem', borderRadius: '24px', background: 'white', border: '1px solid rgba(0,0,0,0.08)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', overflow: 'hidden' }}>
              <div>
                <div style={{ position: 'relative', width: '100%', height: '180px', borderRadius: '16px', overflow: 'hidden', marginBottom: '1.2rem' }}>
                  <Image
                    src="/workshop.jpg"
                    alt="米国株投資セミナーの様子"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <span className="featured-tag" style={{ margin: '0 0 0.8rem 0' }}>米国株基礎コース</span>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', fontWeight: '900', color: 'var(--primary-dark)', marginBottom: '0.8rem', lineHeight: '1.4' }}>
                  米国株式セミナー
                </h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: 'var(--text-main)', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                  S&P500や主要個別株、年4回の配当金（不労所得）を受け取る仕組みなど、過去100年成長し続ける米国市場へ投資するための基礎知識を少人数（定員4名）で楽しく学びます。
                </p>
              </div>
              <div style={{ marginTop: 'auto', paddingTop: '1rem' }}>
                <Link href="/seminar" className="btn btn-primary" style={{ width: '100%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', padding: '0.85rem 1.5rem', borderRadius: '30px', fontWeight: '800', textDecoration: 'none', fontSize: '0.95rem' }}>
                  米国株セミナーの詳細 <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            {/* カラム2: NISA初心者セミナー */}
            <div className="glass-card" style={{ padding: '1.5rem', borderRadius: '24px', background: 'white', border: '1px solid rgba(0,0,0,0.08)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', overflow: 'hidden' }}>
              <div>
                <div style={{ position: 'relative', width: '100%', height: '180px', borderRadius: '16px', overflow: 'hidden', marginBottom: '1.2rem' }}>
                  <Image
                    src="/hero.jpg"
                    alt="NISA初心者セミナーの様子"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <span className="featured-tag" style={{ margin: '0 0 0.8rem 0' }}>新NISA特化コース</span>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', fontWeight: '900', color: 'var(--primary-dark)', marginBottom: '0.8rem', lineHeight: '1.4' }}>
                  NISA初心者セミナー
                </h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: 'var(--text-main)', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                  「つみたて投資枠」と「成長投資枠」の正しい活用法、非課税メリットの最大化、SBI・楽天証券での設定手順まで、失敗しないNISAの始め方を丁寧に解説します。
                </p>
              </div>
              <div style={{ marginTop: 'auto', paddingTop: '1rem' }}>
                <Link href="/seminar/nisa" className="btn btn-primary" style={{ width: '100%', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'center', padding: '0.85rem 1.5rem', borderRadius: '30px', fontWeight: '800', textDecoration: 'none', fontSize: '0.95rem' }}>
                  NISAセミナーの詳細 <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            {/* カラム3: 個別相談受付 */}
            <div className="glass-card" style={{ padding: '1.5rem', borderRadius: '24px', background: 'white', border: '1px solid rgba(0,0,0,0.08)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', overflow: 'hidden' }}>
              <div>
                <div style={{ position: 'relative', width: '100%', height: '180px', borderRadius: '16px', overflow: 'hidden', marginBottom: '1.2rem' }}>
                  <Image
                    src="/consultation.jpg"
                    alt="対面での個別投資相談・カウンセリングの様子"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <span className="featured-tag" style={{ margin: '0 0 0.8rem 0' }}>マンツーマン対応</span>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', fontWeight: '900', color: 'var(--primary-dark)', marginBottom: '0.8rem', lineHeight: '1.4' }}>
                  個別相談受付
                </h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: 'var(--text-main)', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                  「他の参加者を気にせず自分のペースでじっくり質問したい」「自分に合った投資の進め方や学習計画をマンツーマンで相談したい」という方のための1対1個別相談枠です。
                </p>
              </div>
              <div style={{ marginTop: 'auto', paddingTop: '1rem' }}>
                <Link href="/seminar/consultation" className="btn btn-outline" style={{ width: '100%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', padding: '0.85rem 1.5rem', borderRadius: '30px', fontWeight: '800', textDecoration: 'none', fontSize: '0.95rem' }}>
                  個別相談を申し込む <ArrowRight size={18} />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>


      <BlogPreviewSection posts={latestPosts} />

      {/* Dream Vision Section */}
      <section className="section-padding" style={{ background: 'var(--bg-warm)', color: 'var(--text-main)', position: 'relative', overflow: 'hidden', textAlign: 'center', padding: '3.5rem 0' }}>
        <div style={{ position: 'absolute', top: '-50px', right: '-50px', width: '200px', height: '200px', borderRadius: '50%', background: 'rgba(176, 58, 46, 0.03)' }} />
        <div style={{ position: 'absolute', bottom: '-80px', left: '-80px', width: '300px', height: '300px', borderRadius: '50%', background: 'rgba(176, 58, 46, 0.02)' }} />
        
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '750px', margin: '0 auto' }}>
            <p style={{ fontFamily: 'var(--font-accent)', fontSize: '0.95rem', letterSpacing: '3px', fontWeight: '800', color: 'var(--primary)', marginBottom: '1rem', textTransform: 'uppercase' as const }}>
              未来への第一歩
            </p>
            
            <h2 style={{ fontSize: 'clamp(1.5rem, 4.5vw, 2.8rem)', fontWeight: '900', lineHeight: '1.4', marginBottom: '2rem', color: 'var(--text-main)' }}>
              投資を学んで、あなたの人生に<br className="sp-hide" />
              ワクワクしよう。
            </h2>

            <p className="responsive-center-left" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', lineHeight: '2', color: 'var(--text-main)', fontWeight: '700', marginBottom: '1.5rem' }}>
              もし、お金の不安がなくなったら、あなたは何をしたいですか？
            </p>

            <p className="responsive-center-left" style={{ fontSize: 'clamp(0.95rem, 2.5vw, 1.15rem)', lineHeight: '2', color: 'var(--text-muted)', marginBottom: '2rem' }}>
              家族との時間、好きな場所への旅、夢だったあのチャレンジ ——<br className="sp-hide" />
              資産を育てることは、未来の選択肢を増やすこと。
            </p>

            <div className="glass-card dream-vision-card">
              {/* ちびキャラ: 枠外左下に配置 */}
              <div className="chibi-character-container">
                <Image
                  src="/chibi-character.png"
                  alt="東京米国株クラブの公式キャラクター とびーちびキャラ"
                  width={125}
                  height={168}
                  style={{ objectFit: 'contain', width: '100%', height: '100%' }}
                />
              </div>
              <p className="responsive-center-left" style={{ fontSize: 'clamp(1.1rem, 3vw, 1.4rem)', fontWeight: '800', lineHeight: '1.8', margin: 0, color: 'var(--primary-dark)' }}>
                あなたの夢を叶えるための「はじめの一歩」を、<br className="sp-hide" />
                一緒に踏み出しませんか？
              </p>
            </div>

            <p className="responsive-center-left" style={{ fontSize: 'clamp(0.95rem, 2.5vw, 1.15rem)', color: 'var(--text-muted)', margin: '1.5rem 0 2rem 0', lineHeight: '2' }}>
              難しいことは何もありません。まずは気軽に、<br className="sp-hide" />
              仲間と一緒に考えることから始めましょう。
            </p>

            <div style={{ marginTop: '2rem' }}>
              <Link href="/seminar" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '1rem 2.5rem', borderRadius: '50px', fontSize: '1.05rem', fontWeight: '800' }}>
                セミナーの詳細・お申し込みはこちら <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* タスク1: FAQ Section - ページ末尾（フッター直前・CTAボタンの後） */}
      <HomeFAQ />
    </div>
  );
}
