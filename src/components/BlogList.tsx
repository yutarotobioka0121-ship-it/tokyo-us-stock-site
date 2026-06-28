import Link from 'next/link';
import { getPosts } from '@/lib/notion';
import { Calendar, ArrowRight } from 'lucide-react';

const POSTS_PER_PAGE = 10;

type Props = {
  currentPage: number;
};

export default async function BlogList({ currentPage }: Props) {
  const posts = await getPosts();
  const totalPosts = posts.length;
  
  if (totalPosts === 0) {
    return (
      <div className="no-posts glass-card" style={{ textAlign: 'center', padding: '4rem 2rem' }}>
        <h3 style={{ marginBottom: '1rem' }}>記事は現在準備中です</h3>
        <p style={{ color: 'var(--text-muted)' }}>
          最新の市場分析やニュース解説を順次公開予定です。今しばらくお待ちください。
        </p>
      </div>
    );
  }

  const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const displayPosts = posts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  return (
    <div>
      <div className="blog-grid">
        {displayPosts.map((post) => (
          <Link href={`/blog/${post.slug}`} key={post.id} className="blog-card glass-card fade-in">
            {post.cover && (
              <div className="blog-card-image">
                <img src={post.cover} alt={post.title} />
              </div>
            )}
            <div className="blog-card-content">
              <div className="blog-card-meta">
                <Calendar size={14} />
                <span>{post.date}</span>
              </div>
              <h3 className="blog-card-title">{post.title}</h3>
              <p className="blog-card-desc">{post.summary}</p>
              <span className="blog-card-link">
                続きを読む <ArrowRight size={16} />
              </span>
            </div>
          </Link>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="pagination" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', marginTop: '4rem' }}>
          {currentPage > 1 ? (
            <Link
              href={currentPage === 2 ? '/blog' : `/blog/page/${currentPage - 1}`}
              className="btn btn-outline"
              style={{ padding: '0.6rem 1.2rem', borderRadius: '30px', fontSize: '0.9rem', textDecoration: 'none' }}
            >
              前へ
            </Link>
          ) : (
            <span className="btn btn-outline disabled" style={{ padding: '0.6rem 1.2rem', borderRadius: '30px', fontSize: '0.9rem', opacity: 0.5, cursor: 'not-allowed' }}>
              前へ
            </span>
          )}

          <div style={{ display: 'flex', gap: '0.3rem', alignItems: 'center' }}>
            {Array.from({ length: totalPages }, (_, i) => {
              const pageNum = i + 1;
              const isCurrent = pageNum === currentPage;
              const href = pageNum === 1 ? '/blog' : `/blog/page/${pageNum}`;

              return (
                <Link
                  href={href}
                  key={pageNum}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    textDecoration: 'none',
                    fontWeight: isCurrent ? '800' : '500',
                    background: isCurrent ? 'var(--primary)' : 'transparent',
                    color: isCurrent ? 'white' : 'var(--text-main)',
                    border: isCurrent ? 'none' : '1px solid rgba(0,0,0,0.06)',
                    transition: 'all 0.2s ease',
                  }}
                >
                  {pageNum}
                </Link>
              );
            })}
          </div>

          {currentPage < totalPages ? (
            <Link
              href={`/blog/page/${currentPage + 1}`}
              className="btn btn-outline"
              style={{ padding: '0.6rem 1.2rem', borderRadius: '30px', fontSize: '0.9rem', textDecoration: 'none' }}
            >
              次へ
            </Link>
          ) : (
            <span className="btn btn-outline disabled" style={{ padding: '0.6rem 1.2rem', borderRadius: '30px', fontSize: '0.9rem', opacity: 0.5, cursor: 'not-allowed' }}>
              次へ
            </span>
          )}
        </div>
      )}
    </div>
  );
}
