import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/privacy', // プライバシーポリシーなどは検索から除外する場合
    },
    sitemap: 'https://tokyo-us-stock.com/sitemap.xml',
  };
}
