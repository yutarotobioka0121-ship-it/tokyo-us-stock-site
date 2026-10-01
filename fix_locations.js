const fs = require('fs');

function fixLocations(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');

  // Add wordBreak: 'keep-all' and fix wrapping for titles by doing replace on the H3 style
  content = content.replace(
    /h3 style=\{\{ fontSize: '1.1rem', fontWeight: '800', color: 'var\(--primary-dark\)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' \}\}/g,
    "h3 style={{ fontSize: '1.1rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', wordBreak: 'keep-all' }}"
  );

  // Update text
  content = content.replace(/新宿駅周辺（東京）/g, '東京エリア（新宿など）');
  content = content.replace(/新宿駅近くの落ち着いたカフェで開催します。お仕事帰りや休日のお買い物ついでにも便利です。/g, '都内のアクセスしやすいカフェ（主に新宿駅周辺など）で開催します。お仕事帰りや休日のお出かけついでにも便利です。');

  content = content.replace(/川崎駅周辺（神奈川）/g, '神奈川エリア（川崎など）');
  content = content.replace(/川崎駅周辺のカフェで開催します。神奈川方面の方におすすめです。/g, '神奈川県内のカフェ（主に川崎駅周辺など）で開催します。横浜・川崎方面の方におすすめです。');
  
  // also add word-break to the p tags? Wait, they shouldn't wrap awkwardly in standard text, but just in case, I'll add wordBreak: 'keep-all' to the description p tag of the section.
  content = content.replace(
    /p style=\{\{ fontSize: '0.95rem', color: 'var\(--text-muted\)', marginBottom: '1.5rem', lineHeight: '1.8' \}\}/g,
    "p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: '1.8', wordBreak: 'keep-all' }}"
  );

  fs.writeFileSync(filePath, content, 'utf-8');
}

fixLocations('src/app/seminar/page.tsx');
fixLocations('src/app/seminar/nisa/page.tsx');

