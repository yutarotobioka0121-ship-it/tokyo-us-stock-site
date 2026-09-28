const fs = require('fs');

const fixSeminarPage = (file) => {
  let content = fs.readFileSync(file, 'utf-8');
  const regex = /\{\/\*\s*外部サイト掲載\s*\*\/\}[\s\S]*?<\/ul>\s*<\/div>\s*<\/div>/;
  content = content.replace(regex, '');
  fs.writeFileSync(file, content, 'utf-8');
}

fixSeminarPage('src/app/seminar/page.tsx');
fixSeminarPage('src/app/seminar/nisa/page.tsx');
