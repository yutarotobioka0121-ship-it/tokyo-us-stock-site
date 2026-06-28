import { MetadataRoute } from 'next';
import { getPosts } from '@/lib/notion';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.tokyo-us-stock.com';

  // 1. 静的ページ
  const routes = [
    '',
    '/about',
    '/mission',
    '/knowledge',
    '/knowledge/stock-investment',
    '/knowledge/nisa',
    '/seminar',
    '/blog',
    '/apply',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // 2. ブログ記事ページをNotionから取得して追加
  try {
    const posts = await getPosts();
    const blogRoutes = posts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }));

    return [...routes, ...blogRoutes];
  } catch (error) {
    console.error('Sitemap error fetching posts:', error);
    return routes;
  }
}
