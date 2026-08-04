import { Metadata } from 'next';
import BlogList from '@/components/BlogList';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: '米国株ブログ｜初心者向け米国株・NISA投資コラム｜東京米国株クラブ',
  description:
    '東京米国株クラブの米国株投資ブログ。新NISA・S&P500・ETF・税金・スクリーニングなど、初心者が知りたいテーマを毎日更新。5年で資産13倍の投資家が実体験をもとに解説します。',
  alternates: {
    canonical: 'https://www.tokyo-us-stock.com/blog',
  },
  openGraph: {
    title: '米国株ブログ｜初心者向け米国株・NISA投資コラム',
    description:
      '新NISA・S&P500・ETF・税金など、米国株初心者が知りたいテーマを毎日更新。',
    url: 'https://www.tokyo-us-stock.com/blog',
  },
};

export default async function BlogPage() {
  return (
    <div className="blog-page">
      <section className="blog-hero" style={{ background: 'var(--bg-warm)', padding: '100px 0 40px' }}>
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <span className="section-tag">OUR KNOWLEDGE</span>
          <h1 className="section-title" style={{ fontSize: 'clamp(1.8rem, 5vw, 2.8rem)', fontWeight: '900', color: 'var(--primary-dark)', marginTop: '0.5rem', marginBottom: '1.2rem' }}>
            米国株投資ブログ
          </h1>
          <p className="blog-intro" style={{ fontSize: 'clamp(0.95rem, 2.2vw, 1.15rem)', lineHeight: '1.9', color: 'var(--text-main)', maxWidth: '780px', margin: '0 auto' }}>
            東京米国株クラブの米国株投資ブログへようこそ。<br />
            5年で資産13倍を達成した投資家「とびー」が、新NISA・S&P500・ETF・米国株の税金・スクリーニングなど、初心者が実際につまずくテーマを毎日わかりやすく解説しています。<br />
            難しい専門用語は使いません。コーヒー片手に読める投資コラムです。
          </p>
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
