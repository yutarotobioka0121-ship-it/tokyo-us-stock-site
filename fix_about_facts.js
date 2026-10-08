const fs = require('fs');
let file = 'src/app/about/page.tsx';
let content = fs.readFileSync(file, 'utf-8');

if (!content.includes('INVESTING_SINCE')) {
  content = content.replace(
    /export default function AboutPage\(\) \{/,
    `const INVESTING_SINCE = 2020;\nconst currentYear = Number(new Intl.DateTimeFormat('en', { year: 'numeric', timeZone: 'Asia/Tokyo' }).format(new Date()));\nconst yearsCount = currentYear - INVESTING_SINCE + 1;\n\nexport default function AboutPage() {`
  );
}

content = content.replace(
  /<span style=\{\{ fontFamily: 'var\(--font-body\)', fontSize: '0.95rem', lineHeight: '1.8' \}\}>投資歴：7年<\/span>/,
  `<span style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', lineHeight: '1.8' }}>2020年から投資を始め、今年で{yearsCount}年目</span>`
);

content = content.replace(
  /運用資産：1300%以上増加/g,
  `運用実績：5年で1300%以上`
);

content = content.replace(
  /セミナー受講者延べ：300名以上/g,
  `セミナー受講者の延べ人数：延べ300名以上`
);

fs.writeFileSync(file, content, 'utf-8');
