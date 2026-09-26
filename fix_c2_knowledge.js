const fs = require('fs');
let content = fs.readFileSync('src/app/knowledge/nisa/page.tsx', 'utf-8');
content = content.replace(
  'セミナーの詳細・開催スケジュールはこちら',
  '東京・川崎で新NISAを学べる初心者セミナー'
).replace(
  'セミナーの詳細を見る',
  '東京・川崎で新NISAを学べる初心者セミナー'
).replace(
  /href="\/seminar"/g,
  'href="/seminar/nisa"'
);
fs.writeFileSync('src/app/knowledge/nisa/page.tsx', content, 'utf-8');
