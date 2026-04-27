import Link from 'next/link';
import { getPosts } from '@/lib/notion';
import { Calendar, ArrowRight } from 'lucide-react';

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div className="blog-page">
      <section className="blog-hero">
        <div className="container">
          <span className="section-tag">OUR KNOWLEDGE</span>
          <h1 className="section-title">実戦ナレッジ・ニュース解説</h1>
          <p className="blog-intro">
            ５年で1300%以上の実績を支える、お金の考え方やその理由など私のお金に対する考え方や視点を共有しています。長期投資を成功させるための「思考」をアップしていきます
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          {posts.length === 0 ? (
            <div className="no-posts glass-card" style={{ textAlign: 'center', padding: '4rem 2rem' }}>
              <h3 style={{ marginBottom: '1rem' }}>記事は現在準備中です</h3>
              <p style={{ color: 'var(--text-muted)' }}>
                最新の市場分析やニュース解説を順次公開予定です。今しばらくお待ちください。
              </p>
              {!process.env.NOTION_DATABASE_ID && (
                <div className="setup-guide" style={{ marginTop: '3rem', textAlign: 'left', background: 'rgba(0,0,0,0.05)', padding: '1.5rem', borderRadius: '12px', fontSize: '0.9rem' }}>
                  <h4 style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>管理者向け設定:</h4>
                  <p style={{ marginBottom: '0.5rem' }}>ブログを表示するには、`.env.local` に以下の環境変数を設定してください：</p>
                  <code style={{ display: 'block', padding: '0.5rem', background: '#eee', borderRadius: '4px', marginBottom: '0.5rem' }}>
                    NOTION_TOKEN=あなたのトークン<br />
                    NOTION_DATABASE_ID=あなたのデータベースID
                  </code>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    ※ データベースには `Title`, `Slug`, `Published` (Checkbox), `Date`, `Summary` のプロパティが必要です。
                  </p>
                </div>
              )}
            </div>
          ) : (
            <div className="blog-grid">
              {posts.map((post) => (
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
          )}
        </div>
      </section>
    </div>
  );
}
