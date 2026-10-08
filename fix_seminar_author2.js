const fs = require('fs');

function fixSeminar(file) {
  let content = fs.readFileSync(file, 'utf-8');

  if (!content.includes('INVESTING_SINCE')) {
    content = content.replace(
      /export default async function [^\(]+\(\) \{/,
      `const INVESTING_SINCE = 2020;\n  const currentYear = Number(new Intl.DateTimeFormat('en', { year: 'numeric', timeZone: 'Asia/Tokyo' }).format(new Date()));\n  const yearsCount = currentYear - INVESTING_SINCE + 1;\n\n$&`
    );
  }

  fs.writeFileSync(file, content, 'utf-8');
}

fixSeminar('src/app/seminar/page.tsx');
fixSeminar('src/app/seminar/nisa/page.tsx');
