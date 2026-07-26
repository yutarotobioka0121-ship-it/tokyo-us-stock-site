import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, Users, TrendingUp, Heart, BookOpen } from "lucide-react";
import { Metadata } from "next";
import { getPosts } from "@/lib/notion";

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: '東京米国株クラブ｜初心者が基礎から学ぶ米国株の投資勉強会',
  description: '東京の米国株・初心者向け投資勉強会なら「東京米国株クラブ」。5年で1300%以上の実績を持つ講師が、ギャンブルにならない堅実な長期投資の基礎をわかりやすく解説。株式投資の第一歩を踏み出しませんか？',
  alternates: {
    canonical: 'https://www.tokyo-us-stock.com',
  },
  openGraph: {
    title: '東京米国株クラブ｜初心者が基礎から学ぶ米国株の投資勉強会',
    description: '東京の米国株・初心者向け投資勉強会なら「東京米国株クラブ」。5年で1300%以上の実績を持つ講師が、ギャンブルにならない堅実な長期投資の基礎をわかりやすく解説。',
    url: 'https://www.tokyo-us-stock.com',
    siteName: '東京米国株クラブ',
    images: [
      {
        url: 'https://www.tokyo-us-stock.com/ogp.png',
        width: 1200,
        height: 630,
        alt: '東京米国株クラブ｜初心者向け米国株投資勉強会',
      },
    ],
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '東京米国株クラブ｜初心者が基礎から学ぶ米国株の投資勉強会',
    description: '東京の米国株・初心者向け投資勉強会なら「東京米国株クラブ」。ギャンブルにならない堅実な長期投資の基礎をわかりやすく解説。',
    images: ['https://www.tokyo-us-stock.com/ogp.png'],
  },
};

export default async function Home() {
  const posts = await getPosts();
  const recentPosts = posts.slice(0, 3);

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: '東京米国株クラブ',
    url: 'https://www.tokyo-us-stock.com',
    logo: 'https://www.tokyo-us-stock.com/icon.png',
    description: '東京で開催する初心者向け米国株・NISA・長期投資の学習コミュニティ。カフェスタイルの少人数勉強会を定期開催。',
    sameAs: [
      'https://www.instagram.com/yutaro_tokyo_us_stock',
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: '東京都',
      addressCountry: 'JP',
    },
  };

  return (
    <div className="home-page" style={{ overflowWrap: 'break-word' }}>
      {/* JSON-LD Organization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content-left slide-up">
              {/* 最重要キーワード入りのH1タグ */}
              <h1 className="hero-title" style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.5rem, 4.5vw, 2.5rem)', color: 'var(--primary-dark)', lineHeight: '1.3', fontWeight: '900', marginBottom: '1.5rem' }}>
                東京の米国株投資勉強会｜初心者から始められる長期投資コミュニティ
              </h1>

              {/* スマホ用Hero画像：タイトルの直下に配置 */}
              <div className="hero-image-mobile hero-peek-container">
                <div className="hero-peek-character">
                  <Image
                    src="/character-peek.png"
                    alt="東京米国株クラブの公式キャラクター とびー"
                    width={100}
                    height={144}
                    style={{ objectFit: 'contain', width: '100%', height: '100%' }}
                  />
                </div>
                <div className="hero-peek-image">
                  <Image
                    src="/hero.png"
                    alt="東京米国株クラブの初心者向け米国株投資勉強会"
                    width={600}
                    height={450}
                    style={{ objectFit: 'cover', width: '100%', height: 'auto', display: 'block', borderRadius: '24px' }}
                    priority
                    className="hero-image"
                  />
                </div>
              </div>

              <p className="hero-subtitle-text" style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(0.95rem, 2.2vw, 1.15rem)', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '2rem' }}>
                「米国株や新NISAを始めたいけれど何から手をつければいいか分からない」「本やSNSの情報だけでは不安」という方のための、ゆるくて温かい学習コミュニティです。<br className="sp-hide" />
                難しい専門用語を使わず、知識ゼロから安全に資産を育てる長期・分散投資の基礎を楽しく学べます。
              </p>

              <div className="hero-actions" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link href="/seminar" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                  勉強会の詳細を見る <ArrowRight size={20} />
                </Link>
                <Link href="/about" className="btn btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                  当クラブについて
                </Link>
              </div>
            </div>

            {/* PC用Hero画像 */}
            <div className="hero-image-right hero-image-desktop slide-up delay-1 hero-peek-container">
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
                  alt="東京米国株クラブの初心者向け米国株投資勉強会"
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

      {/* Featured Study Session Section */}
      <section className="featured-section section-padding" style={{ background: 'var(--bg-warm)' }}>
        <div className="container">
          <div className="featured-grid">
            <div className="featured-content slide-up">
              <span className="featured-tag">おすすめ勉強会</span>

              <h2 className="featured-title" style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.6rem, 4.5vw, 2.5rem)', color: 'var(--primary-dark)', lineHeight: '1.3', fontWeight: '900', marginBottom: '0.75rem' }}>
                東京開催の米国株・NISA初心者勉強会
              </h2>
              <h3 className="featured-subtitle-line" style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.05rem, 3vw, 1.4rem)', color: 'var(--primary-light)', marginBottom: '1.5rem', fontWeight: '900', lineHeight: '1.3' }}>
                カフェでお茶を飲むような雰囲気で質問しながら楽しく学べます
              </h3>

              {/* スマホ用Featured画像：タイトルの直下に配置 */}
              <div className="featured-image-mobile" style={{ margin: '2rem auto', width: '100%' }}>
                <div className="featured-image-wrapper glass-card">
                  <Image
                    src="/workshop.jpg"
                    alt="東京で開催されている初心者向け米国株投資勉強会の様子"
                    width={600}
                    height={450}
                    style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
                    className="featured-image"
                  />
                </div>
              </div>
              <p className="featured-desc" style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(0.95rem, 2.2vw, 1.15rem)', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '2rem' }}>
                「証券口座の作り方が分からない」「指値と成行の違いは？」「配当金（不労所得）を受け取るには？」といった基本的な疑問から丁寧に解説します。<br className="sp-hide" />
                対面だけでなくオンライン開催も選べますので、ご都合に合わせて気軽にご参加いただけます。
              </p>
              <div style={{ marginTop: '2rem' }}>
                <Link href="/seminar" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '1rem', padding: '0.8rem 2.2rem', borderRadius: '50px', fontWeight: '800' }}>
                  勉強会の開催日程と詳細はこちら <ArrowRight size={20} />
                </Link>
              </div>
            </div>
            
            {/* PC用Featured画像 */}
            <div className="featured-image-container featured-image-desktop slide-up delay-1">
              <div className="featured-image-wrapper glass-card">
                <Image
                  src="/workshop.jpg"
                  alt="東京で開催されている初心者向け米国株投資勉強会の様子"
                  width={600}
                  height={450}
                  style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
                  className="featured-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 最新ブログコラム（新追加：鮮度シグナル ＆ 内部リンク強化） */}
      {recentPosts.length > 0 && (
        <section style={{ background: 'white', padding: 'clamp(3rem, 6vw, 5rem) 0' }}>
          <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <span className="featured-tag">最新コラム</span>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.5rem, 4vw, 2.2rem)', fontWeight: '900', color: 'var(--primary-dark)', margin: '0.5rem 0' }}>
                米国株投資の知恵袋・最新ブログ記事
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                初心者の方が知っておくべき投資のコツや最新トピックを発信しています。
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '2.5rem' }}>
              {recentPosts.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <div className="glass-card" style={{ padding: '1.5rem', borderRadius: '16px', border: '1px solid rgba(0,0,0,0.08)', background: 'white', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', transition: 'all 0.3s ease' }}>
                    <div>
                      {post.date && (
                        <span style={{ fontSize: '0.8rem', color: 'var(--primary)', fontWeight: '700', display: 'block', marginBottom: '0.4rem' }}>
                          {post.date}
                        </span>
                      )}
                      <h3 style={{ fontSize: '1.1rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.6rem', lineHeight: '1.4', fontFamily: 'var(--font-heading)' }}>
                        {post.title}
                      </h3>
                      {post.summary && (
                        <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: '1.6', margin: 0, display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                          {post.summary}
                        </p>
                      )}
                    </div>
                    <div style={{ marginTop: '1rem', paddingTop: '0.8rem', borderTop: '1px solid #f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', fontSize: '0.85rem', fontWeight: '800', color: 'var(--primary)' }}>
                      読む <ArrowRight size={14} style={{ marginLeft: '0.2rem' }} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div style={{ textAlign: 'center' }}>
              <Link href="/blog" className="btn btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', borderRadius: '30px', padding: '0.75rem 2rem', fontWeight: '800' }}>
                ブログ記事一覧を見る <BookOpen size={16} />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Dream Vision Section */}
      <section className="section-padding" style={{ background: 'var(--bg-warm)', color: 'var(--text-main)', position: 'relative', overflow: 'hidden', textAlign: 'center', padding: '3.5rem 0' }}>
        <div style={{ position: 'absolute', top: '-50px', right: '-50px', width: '200px', height: '200px', borderRadius: '50%', background: 'rgba(176, 58, 46, 0.03)' }} />
        <div style={{ position: 'absolute', bottom: '-80px', left: '-80px', width: '300px', height: '300px', borderRadius: '50%', background: 'rgba(176, 58, 46, 0.02)' }} />
        
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '750px', margin: '0 auto' }}>
            <p style={{ fontFamily: 'var(--font-accent)', fontSize: '0.95rem', letterSpacing: '3px', fontWeight: '800', color: 'var(--primary)', marginBottom: '1rem', textTransform: 'uppercase' as const }}>
              Your Future Starts Here
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
                勉強会の詳細・お申し込みはこちら <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
