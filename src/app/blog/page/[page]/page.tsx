import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import BlogList from '@/components/BlogList';
import { getPosts } from '@/lib/notion';

export const dynamic = 'force-dynamic';

type Props = {
  params: Promise<{ page: string }>;
};

// 動的メタデータの生成
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { page } = await params;
  const pageNum = parseInt(page, 10);

  if (isNaN(pageNum) || pageNum < 1) {
    return {
      title: 'ページが見つかりません | 東京米国株クラブ',
    };
  }

  return {
    title: `投資ブログ（${pageNum}ページ目）| 東京米国株クラブ`,
    description: `東京米国株クラブの投資ブログ。初心者の方が長期投資を成功させるための考え方やコツを公開しています。（${pageNum}ページ目）`,
    alternates: {
      canonical: `https://www.tokyo-us-stock.com/blog/page/${pageNum}`,
    },
  };
}

export default async function BlogPaginationPage({ params }: Props) {
  const { page } = await params;
  const pageNum = parseInt(page, 10);

  if (isNaN(pageNum) || pageNum < 1) {
    notFound();
  }

  // 実際のデータ件数を取得して、存在しないページ数の場合は 404 とする
  const posts = await getPosts();
  const POSTS_PER_PAGE = 10;
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);

  if (pageNum > totalPages && totalPages > 0) {
    notFound();
  }

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
          <BlogList currentPage={pageNum} />
        </div>
      </section>
    </div>
  );
}
