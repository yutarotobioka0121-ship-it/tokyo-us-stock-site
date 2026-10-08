const fs = require('fs');
let file = 'src/app/blog/[slug]/page.tsx';
let content = fs.readFileSync(file, 'utf-8');

if (!content.includes('INVESTING_SINCE')) {
  content = content.replace(
    /import Link from 'next\/link';/,
    `import Link from 'next/link';\n\nconst INVESTING_SINCE = 2020;\nconst currentYear = Number(new Intl.DateTimeFormat('en', { year: 'numeric', timeZone: 'Asia/Tokyo' }).format(new Date()));\nconst yearsCount = currentYear - INVESTING_SINCE + 1;\n`
  );
}

fs.writeFileSync(file, content, 'utf-8');
