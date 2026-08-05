import { Metadata } from 'next';
import Link from 'next/link';
import BlogList from '@/components/BlogList';
import { ArrowRight, Search, FileText, Calculator, Landmark } from 'lucide-react';

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

export default async function BlogPage() {
  return (
    <div className="blog-page">
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
