const fs = require('fs');
const file = 'src/app/blog/[slug]/page.tsx';
let content = fs.readFileSync(file, 'utf-8');

// Replace the inner logic
content = content.replace(
  /\} else if \(post\.title\.includes\('企業分析'\) \|\| post\.title\.includes\('銘柄分析'\)\) \{[\s\S]*?\}/,
  `} else {
                bannerHref = '/seminar/cashflow-game';
                bannerText = '遊びながらお金の考え方を学ぶキャッシュフローゲーム会';
              }`
);
fs.writeFileSync(file, content, 'utf-8');
