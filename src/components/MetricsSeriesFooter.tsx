import Link from 'next/link';
import { ArrowRight, Search, Users } from 'lucide-react';
import { getPosts } from '@/lib/notion';

export default async function MetricsSeriesFooter({ currentSlug }: { currentSlug: string }) {
  const allPosts = await getPosts();
  const seriesPosts = allPosts
    .filter(p => p.slug.startsWith('valuation-metrics-series-'))
    // Sort by slug or date. I'll sort by slug assuming they end with numbers like -1, -2
    .sort((a, b) => a.slug.localeCompare(b.slug, undefined, { numeric: true }));

  return (
    <div className="metrics-series-footer glass-card" style={{ marginTop: '3rem', padding: '2rem', background: 'var(--bg-white)', borderRadius: '16px', border: '2px solid var(--primary)' }}>
      <h3 style={{ fontSize: '1.2rem', fontWeight: '900', color: 'var(--primary-dark)', margin: '0 0 1rem 0' }}>
        投資指標シリーズ一覧
      </h3>
      <ul style={{ paddingLeft: '1.5rem', marginBottom: '2rem', lineHeight: '1.8' }}>
        {seriesPosts.map(post => (
          <li key={post.slug} style={{ marginBottom: '0.5rem' }}>
            {post.slug === currentSlug ? (
              <strong style={{ color: 'var(--primary-dark)' }}>{post.title}</strong>
            ) : (
              <Link href={`/blog/${post.slug}`} style={{ color: 'var(--primary)', textDecoration: 'underline' }}>
                {post.title}
              </Link>
            )}
          </li>
        ))}
      </ul>

      <h3 style={{ fontSize: '1.2rem', fontWeight: '900', color: 'var(--primary-dark)', margin: '0 0 1rem 0' }}>
        次に何を学ぶ？
      </h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <Link href="/blog/us-stock-screening-guide" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none', color: 'var(--text-main)', background: '#f8f9fa', padding: '1rem', borderRadius: '12px', transition: 'all 0.2s ease' }}>
          <Search size={20} color="var(--primary)" />
          <span style={{ fontWeight: 'bold' }}>この指標で銘柄を探すには → 米国株スクリーニングのやり方</span>
          <ArrowRight size={16} style={{ marginLeft: 'auto', color: 'var(--primary)' }} />
        </Link>
        <Link href="/seminar" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none', color: 'var(--text-main)', background: '#f8f9fa', padding: '1rem', borderRadius: '12px', transition: 'all 0.2s ease' }}>
          <Users size={20} color="var(--primary)" />
          <span style={{ fontWeight: 'bold' }}>指標の読み方を少人数で学ぶ → 米国株セミナーの日程</span>
          <ArrowRight size={16} style={{ marginLeft: 'auto', color: 'var(--primary)' }} />
        </Link>
      </div>
    </div>
  );
}
