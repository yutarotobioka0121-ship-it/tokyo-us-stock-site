import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/_next/',     // Next.jsのビルド・ハッシュアセット（woff2フォント, js, css等）をインデックス対象から除外
        '/privacy',   // プライバシーポリシー
      ],
    },
    sitemap: 'https://www.tokyo-us-stock.com/sitemap.xml',
  };
}
