const fs = require('fs');
let file = 'src/app/blog/[slug]/page.tsx';
let content = fs.readFileSync(file, 'utf-8');

if (!content.includes('INVESTING_SINCE')) {
  content = content.replace(
    /export default async function BlogPost\(\{[^\}]+\}: \{[^\}]+\}\) \{/,
    `const INVESTING_SINCE = 2020;\nconst currentYear = Number(new Intl.DateTimeFormat('en', { year: 'numeric', timeZone: 'Asia/Tokyo' }).format(new Date()));\nconst yearsCount = currentYear - INVESTING_SINCE + 1;\n\n$&`
  );
}

content = content.replace(
  /投資歴5年以上の米国株長期投資家。/g,
  `2020年から投資を始め、今年で{yearsCount}年目となる米国株長期投資家。`
);

content = content.replace(
  /5年間で\+1300%超（約13倍）の実績を達成。/g,
  `5年で1300%以上の運用実績を達成。`
);

fs.writeFileSync(file, content, 'utf-8');
