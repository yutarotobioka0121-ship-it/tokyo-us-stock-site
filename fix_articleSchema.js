const fs = require('fs');
let file = 'src/app/blog/[slug]/page.tsx';
let content = fs.readFileSync(file, 'utf-8');

content = content.replace(
  /const articleSchema = \{[\s\S]*?\};\n/m,
  `const articleSchema: any = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: slug === 'us-stock-beginners-guide' && !post.title.includes('米国株の始め方') ? '米国株の始め方 完全ガイド（初心者向け）｜' + post.title : post.title,
    description: (post.summary || '').slice(0, 120),
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Person',
      name: 'とびー',
      url: 'https://www.tokyo-us-stock.com/about',
    },
    publisher: {
      '@type': 'Organization',
      name: '東京米国株クラブ',
      url: 'https://www.tokyo-us-stock.com',
    },
    url: \`https://www.tokyo-us-stock.com/blog/\${slug}\`,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': \`https://www.tokyo-us-stock.com/blog/\${slug}\`,
    },
    image: post.cover ? [post.cover] : ['https://www.tokyo-us-stock.com/og-image.png'],
  };

  if (slug.startsWith('valuation-metrics-series-')) {
    articleSchema.isPartOf = {
      "@type": "Series",
      "name": "投資指標シリーズ",
      "url": "https://www.tokyo-us-stock.com/blog"
    };
    articleSchema.about = {
      "@type": "Thing",
      "name": post.title.split(' ')[0] || post.title
    };
  }
`
);

fs.writeFileSync(file, content, 'utf-8');
