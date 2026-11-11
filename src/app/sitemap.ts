import { MetadataRoute } from 'next';
import { connection } from 'next/server';
import { unstable_cache } from 'next/cache';
import { getPosts } from '@/lib/notion';

export const revalidate = 3600; // 1時間

const getCachedPostsForSitemap = unstable_cache(
  async () => getPosts(),
  ['sitemap-posts'],
  { revalidate: 3600, tags: ['sitemap-posts'] }
);

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  await connection();

  const baseUrl = 'https://www.tokyo-us-stock.com';

  // 1. 静的ページおよび固定ブログ記事
  const routes = [
    '',
    '/about',
    '/mission',
    '/knowledge',
    '/knowledge/how-to-start',
    '/knowledge/account-setup',
    '/knowledge/tax',
    '/knowledge/returns',
    '/knowledge/yutai',
    '/knowledge/indices',
    '/knowledge/how-to-buy',
    '/knowledge/trading-hours',
    '/knowledge/keywords',
    '/knowledge/stock-investment',
    '/knowledge/nisa',
    '/knowledge/tokutei-koza',
    '/seminar',
    '/seminar/nisa',
    '/seminar/consultation',
    '/seminar/cashflow-game',
    '/seminar/cashflow-game/guide',
    '/blog',
    '/blog/us-stock-screening-guide',
    '/blog/us-stock-tokutei-koza-guide',
    '/blog/us-stock-tax-complete-guide',
    '/blog/us-stock-kakutei-shinkoku',
    '/blog/us-stock-gaikoku-zei-kojo',
    '/blog/nisa-us-stock-tax-free',
    '/apply',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : route.startsWith('/blog/') || route.startsWith('/knowledge/') ? 0.9 : 0.8,
  }));

  // 2. Notion CMSの動的ブログ記事ページを追加
  try {
    const posts = await getCachedPostsForSitemap();
    const blogRoutes = posts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.lastEditedTime || post.date),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }));

    return [...routes, ...blogRoutes];
  } catch (error) {
    console.error('Sitemap error fetching posts:', error);
    return routes;
  }
}
