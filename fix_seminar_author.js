const fs = require('fs');

function fixSeminar(file) {
  let content = fs.readFileSync(file, 'utf-8');

  if (!content.includes('INVESTING_SINCE')) {
    content = content.replace(
      /export default function [^\(]+\(\) \{/,
      `const INVESTING_SINCE = 2020;\n  const currentYear = Number(new Intl.DateTimeFormat('en', { year: 'numeric', timeZone: 'Asia/Tokyo' }).format(new Date()));\n  const yearsCount = currentYear - INVESTING_SINCE + 1;\n\n  $&`
    );
  }

  content = content.replace(
    /<li>・現在の投資成績は1300%以上（投資歴5年）<\/li>/g,
    `<li>・運用実績：5年で1300%以上（2020年から投資を始め、今年で{yearsCount}年目）</li>`
  );

  fs.writeFileSync(file, content, 'utf-8');
}

fixSeminar('src/app/seminar/page.tsx');
fixSeminar('src/app/seminar/nisa/page.tsx'); // Just in case it's there
fixSeminar('src/app/seminar/cashflow-game/guide/page.tsx');
