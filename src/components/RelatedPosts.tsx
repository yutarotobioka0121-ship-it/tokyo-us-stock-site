import { getPosts } from "@/lib/notion";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";

type Props = {
  currentSlug: string;
  currentTitle: string;
};

function getCategory(title: string): string {
  const t = title.toLowerCase();
  if (t.includes('nisa')) return 'nisa';
  if (t.includes('配当株') || t.includes('配当金') || t.includes('高配当')) return 'dividend';
  if (t.includes('比較') || t.includes('vs')) return 'comparison';
  if (t.includes('財務諸表') || t.includes('balance') || t.includes('貸借対照表') || t.includes('損益計算書') || t.includes('キャッシュフロー')) return 'finance';
  return 'general';
}

export default async function RelatedPosts({ currentSlug, currentTitle }: Props) {
  const posts = await getPosts();
  const currentCategory = getCategory(currentTitle);

  // 同じカテゴリの記事をフィルタリング
  let related = posts.filter(
    (post) => post.slug !== currentSlug && getCategory(post.title) === currentCategory
  );

  // 3件に満たない場合は、最新の他の記事で補填する
  if (related.length < 3) {
    const extra = posts.filter(
      (post) => post.slug !== currentSlug && !related.some((r) => r.id === post.id)
    );
    related = [...related, ...extra].slice(0, 3);
  } else {
    related = related.slice(0, 3);
  }

  if (related.length === 0) return null;

  return (
    <div className="related-posts" style={{ marginTop: '4rem', paddingTop: '3rem', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
      <h2 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '2rem', color: 'var(--primary-dark)', fontFamily: 'var(--font-heading)' }}>
        関連記事
      </h2>
      <div className="related-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '1.5rem' }}>
        {related.map((post) => (
          <Link href={`/blog/${post.slug}`} key={post.id} className="related-card glass-card" style={{ display: 'block', textDecoration: 'none', color: 'inherit', height: '100%', transition: 'all 0.3s ease' }}>
            {post.cover && (
              <div style={{ height: '140px', overflow: 'hidden', borderTopLeftRadius: '12px', borderTopRightRadius: '12px' }}>
                <img src={post.cover} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            )}
            <div style={{ padding: '1.2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
                <Calendar size={12} />
                <span>{post.date}</span>
              </div>
              <h3 style={{ fontSize: '1rem', fontWeight: '800', lineHeight: '1.4', margin: '0 0 0.8rem 0', color: 'var(--text-main)', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                {post.title}
              </h3>
              <span className="btn-link" style={{ fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.2rem', color: 'var(--primary)', fontWeight: '700' }}>
                続きを読む <ArrowRight size={14} />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
