import { Metadata } from 'next';
import BlogList from '@/components/BlogList';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: '投資ブログ｜東京米国株クラブ',
  description: '東京米国株クラブの運営代表者「とびー」による投資ブログ。米国高配当株シリーズ、新NISAシリーズ、財務諸表入門コラムなど、初心者の方が長期投資を成功させるための考え方やコツを公開しています。',
  alternates: {
    canonical: 'https://www.tokyo-us-stock.com/blog',
  },
};

export default async function BlogPage() {
  return (
    <div className="blog-page">
      <section className="blog-hero">
        <div className="container">
          <span className="section-tag">OUR KNOWLEDGE</span>
          <h1 className="section-title">ブログ</h1>
          <p className="blog-intro">
            ５年で1300%以上の実績を支える、お金の考え方やその理由など私のお金に対する考え方や視点を共有しています。長期投資を成功させるための「思考」をアップしていきます
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <BlogList currentPage={1} />
        </div>
      </section>
    </div>
  );
}
