const fs = require('fs');
let content = fs.readFileSync('next.config.ts', 'utf-8');

const newRedirects = `
      // === 削除済みブログ記事の301転送 (1-2) ===
      { source: '/blog/savings-vs-sp500-simulation', destination: '/blog/sp500-beginners-guide', permanent: true },
      { source: '/blog/index-fund-vs-etf', destination: '/blog/sp500-beginners-guide', permanent: true },
      { source: '/blog/what-is-index-investing', destination: '/blog/sp500-beginners-guide', permanent: true },
      { source: '/blog/long-term-investing-and-us-stocks', destination: '/blog/us-stock-beginners-guide', permanent: true },
      { source: '/blog/how-to-choose-a-brokerage', destination: '/blog/us-stock-beginners-guide', permanent: true },
      { source: '/blog/investment-comparison-08', destination: '/blog/us-stock-beginners-guide', permanent: true },
      { source: '/blog/index-investing-and-investment-scams', destination: '/blog/us-stock-beginners-guide', permanent: true },
      { source: '/blog/inflation-and-tax-trap', destination: '/blog/us-stock-tax-complete-guide', permanent: true },
      { source: '/blog/financial-statements-02', destination: '/blog/financial-statements-01', permanent: true },
      { source: '/blog/financial-statements-04', destination: '/blog/financial-statements-03', permanent: true },
      { source: '/blog/minimalism-and-money', destination: '/blog/esbi-four-income-types', permanent: true },
      { source: '/blog/robert-kiyosaki-labor-trap', destination: '/blog/esbi-four-income-types', permanent: true },
      { source: '/blog/retirement-pension-crisis', destination: '/knowledge/nisa', permanent: true },
      { source: '/blog/japan-salary-stagnation-30-years', destination: '/knowledge/nisa', permanent: true },
      { source: '/blog/picketty-r-greater-than-g', destination: '/blog/sp500-beginners-guide', permanent: true },

      // === 税金記事の統合 (1-6) ===
      { source: '/blog/us-stock-tax-guide', destination: '/blog/us-stock-tax-complete-guide', permanent: true },
`;

// Insert after `// === 旧Slug → 新Slug 301リダイレクト`
content = content.replace('// === 旧Slug → 新Slug 301リダイレクト（Notion側Slug一括変更に伴う） ===', '// === 旧Slug → 新Slug 301リダイレクト（Notion側Slug一括変更に伴う） ===\n' + newRedirects);

fs.writeFileSync('next.config.ts', content, 'utf-8');
