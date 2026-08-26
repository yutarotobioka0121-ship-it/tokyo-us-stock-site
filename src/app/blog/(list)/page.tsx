import { Metadata } from 'next';
import Link from 'next/link';
import BlogList from '@/components/BlogList';
import { ArrowRight, Search, FileText, Calculator, Landmark, BookOpen, TrendingUp, Shield, Lightbulb } from 'lucide-react';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: '米国株ブログ｜初心者向け米国株・NISA投資コラム｜東京米国株クラブ',
  description:
    '東京米国株クラブの公式米国株ブログ。新NISA・S&P500・ETF・米国株の税金・確定申告・スクリーニング・特定口座など、初心者が知りたいテーマを分かりやすく解説。資産13倍の実績を持つ投資家とびーによる投資コラム。',
  alternates: {
    canonical: 'https://www.tokyo-us-stock.com/blog',
  },
  openGraph: {
    title: '米国株ブログ｜初心者向け米国株・NISA投資コラム｜東京米国株クラブ',
    description:
      '新NISA・S&P500・ETF・米国株の税金・確定申告・スクリーニング・特定口座など、初心者向けテーマを分かりやすく解説。',
    url: 'https://www.tokyo-us-stock.com/blog',
  },
};

const blogJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: '東京米国株クラブ 米国株ブログ',
  description: '初心者向けに米国株・新NISA・S&P500・ETFの投資知識を解説する米国株ブログ。税金・確定申告・スクリーニング・特定口座など実践的なテーマを網羅。',
  url: 'https://www.tokyo-us-stock.com/blog',
  inLanguage: 'ja',
  publisher: {
    '@type': 'Organization',
    name: '東京米国株クラブ',
    url: 'https://www.tokyo-us-stock.com',
  },
  author: {
    '@type': 'Person',
    name: 'とびー',
    description: '5年で資産13倍を達成した個人投資家。東京米国株クラブ主催。',
  },
};

export default async function BlogPage() {
  return (
    <div className="blog-page">
      {/* JSON-LD構造化データ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />

      <section className="blog-hero" style={{ background: 'var(--bg-warm)', padding: '100px 0 40px' }}>
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <span className="section-tag">OUR KNOWLEDGE BLOG</span>
          <h1 className="section-title" style={{ fontSize: 'clamp(1.8rem, 5vw, 2.8rem)', fontWeight: '900', color: 'var(--primary-dark)', marginTop: '0.5rem', marginBottom: '1.2rem' }}>
            米国株ブログ
          </h1>
          <p className="blog-intro" style={{ fontSize: 'clamp(0.95rem, 2.2vw, 1.15rem)', lineHeight: '1.9', color: 'var(--text-main)', maxWidth: '780px', margin: '0 auto' }}>
            東京米国株クラブの<strong>米国株ブログ</strong>へようこそ。<br />
            5年で資産13倍を達成した投資家「とびー」が、新NISA・S&P500・高配当ETF・米国株の税金・米国株式の確定申告・スクリーニング・特定口座の選び方など、初心者が知りたいおすすめテーマをわかりやすく解説する投資ブログコラムです。
          </p>
        </div>
      </section>

      {/* このブログで学べること（SEOテキスト拡充） */}
      <section style={{ background: 'white', padding: '3rem 0 1rem' }}>
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '1.3rem', fontWeight: '900', color: 'var(--primary-dark)', marginBottom: '1.5rem', textAlign: 'center' }}>
            この米国株ブログで学べること
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
            <div className="glass-card" style={{ padding: '1.5rem', borderTop: '3px solid var(--primary)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.8rem' }}>
                <BookOpen size={20} style={{ color: 'var(--primary)' }} />
                <h3 style={{ fontSize: '1.05rem', fontWeight: '800', color: 'var(--primary-dark)', margin: 0 }}>米国株の基礎知識</h3>
              </div>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: '1.8', margin: 0 }}>
                米国株とは何か、日本株との違い、代表的な銘柄やセクター、S&P500・NYダウ・ナスダック100などの主要指数まで、投資の土台となる基礎知識を体系的に解説しています。
              </p>
            </div>
            <div className="glass-card" style={{ padding: '1.5rem', borderTop: '3px solid var(--primary)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.8rem' }}>
                <TrendingUp size={20} style={{ color: 'var(--primary)' }} />
                <h3 style={{ fontSize: '1.05rem', fontWeight: '800', color: 'var(--primary-dark)', margin: 0 }}>銘柄選びとスクリーニング</h3>
              </div>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: '1.8', margin: 0 }}>
                PER・PBR・配当利回りなどの指標を使った米国株のスクリーニング方法、Finvizなどの無料ツールの使い方、初心者でもできる銘柄分析のコツを具体例付きで紹介します。
              </p>
            </div>
            <div className="glass-card" style={{ padding: '1.5rem', borderTop: '3px solid var(--primary)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.8rem' }}>
                <Calculator size={20} style={{ color: 'var(--primary)' }} />
                <h3 style={{ fontSize: '1.05rem', fontWeight: '800', color: 'var(--primary-dark)', margin: 0 }}>税金・確定申告・口座選び</h3>
              </div>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: '1.8', margin: 0 }}>
                米国株にかかる税金の仕組み（国内20.315%＋米国10%）、特定口座と一般口座の違い、外国税額控除、確定申告の手順など、お金に関わる重要テーマを初心者目線で丁寧に解説しています。
              </p>
            </div>
            <div className="glass-card" style={{ padding: '1.5rem', borderTop: '3px solid var(--primary)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.8rem' }}>
                <Shield size={20} style={{ color: 'var(--primary)' }} />
                <h3 style={{ fontSize: '1.05rem', fontWeight: '800', color: 'var(--primary-dark)', margin: 0 }}>新NISAの活用法</h3>
              </div>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: '1.8', margin: 0 }}>
                2024年から始まった新NISA制度を活用して、米国株やS&P500連動ETFに非課税で投資する方法、つみたて投資枠と成長投資枠の使い分けなどを実践的に解説します。
              </p>
            </div>
          </div>
          <div style={{ background: 'var(--bg-warm)', borderRadius: '16px', padding: '1.5rem 2rem', marginBottom: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
              <Lightbulb size={20} style={{ color: 'var(--primary)', flexShrink: 0, marginTop: '3px' }} />
              <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', lineHeight: '1.8', margin: 0 }}>
                <strong>この米国株ブログの特徴：</strong>すべての記事は、実際に5年以上の投資経験（資産13倍の実績）を持つ筆者「とびー」が執筆。書籍やネットの情報を寄せ集めただけではなく、自身の失敗や成功の経験に基づいたリアルな知見を初心者にもわかりやすい言葉でお伝えしています。米国株の始め方から税金対策まで、このブログだけで投資に必要な知識を一通り学ぶことができます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 注目テーマ・おすすめ記事セクション（SEO内部リンク集） */}
      <section style={{ background: 'white', padding: '30px 0 10px' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '1.2rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '1.2rem', textAlign: 'center' }}>
            🔥 人気の米国株ブログ解説記事
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
            
            <Link href="/blog/us-stock-screening-guide" style={{ background: 'var(--bg-warm)', padding: '1.2rem', borderRadius: '14px', textDecoration: 'none', border: '1px solid rgba(0,0,0,0.06)', transition: 'all 0.2s ease' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary)', fontWeight: 'bold', fontSize: '0.9rem', marginBottom: '0.4rem' }}>
                <Search size={16} /> 米国株 スクリーニング
              </div>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-main)', margin: 0, fontWeight: '700', lineHeight: '1.5' }}>
                銘柄スクリーニングのやり方と条件5選
              </p>
            </Link>

            <Link href="/blog/us-stock-tokutei-koza-guide" style={{ background: 'var(--bg-warm)', padding: '1.2rem', borderRadius: '14px', textDecoration: 'none', border: '1px solid rgba(0,0,0,0.06)', transition: 'all 0.2s ease' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary)', fontWeight: 'bold', fontSize: '0.9rem', marginBottom: '0.4rem' }}>
                <Landmark size={16} /> 米国株 特定口座
              </div>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-main)', margin: 0, fontWeight: '700', lineHeight: '1.5' }}>
                源泉あり・なしの違いとおすすめ口座
              </p>
            </Link>

            <Link href="/blog/us-stock-tax-guide" style={{ background: 'var(--bg-warm)', padding: '1.2rem', borderRadius: '14px', textDecoration: 'none', border: '1px solid rgba(0,0,0,0.06)', transition: 'all 0.2s ease' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary)', fontWeight: 'bold', fontSize: '0.9rem', marginBottom: '0.4rem' }}>
                <Calculator size={16} /> 米国株 税金
              </div>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-main)', margin: 0, fontWeight: '700', lineHeight: '1.5' }}>
                税金の仕組みと二重課税・節税ガイド
              </p>
            </Link>

            <Link href="/blog/us-stock-kakutei-shinkoku" style={{ background: 'var(--bg-warm)', padding: '1.2rem', borderRadius: '14px', textDecoration: 'none', border: '1px solid rgba(0,0,0,0.06)', transition: 'all 0.2s ease' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary)', fontWeight: 'bold', fontSize: '0.9rem', marginBottom: '0.4rem' }}>
                <FileText size={16} /> 米国株式 確定申告
              </div>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-main)', margin: 0, fontWeight: '700', lineHeight: '1.5' }}>
                確定申告が必要なケースと申告手順
              </p>
            </Link>

          </div>
        </div>
      </section>

      <section className="section-padding" style={{ padding: '40px 0 80px' }}>
        <div className="container">
          <BlogList currentPage={1} />
        </div>
      </section>
    </div>
  );
}
