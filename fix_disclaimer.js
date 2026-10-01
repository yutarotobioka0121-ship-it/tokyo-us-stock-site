const fs = require('fs');

const files = [
  'src/app/seminar/cashflow-game/page.tsx',
  'src/app/seminar/cashflow-game/guide/page.tsx'
];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf-8');
  
  // The block looks like this:
  /*
        <div className="glass-card" style={{ padding: '1.5rem', background: '#fff3f3', border: '2px solid #ffa5a5', borderRadius: '12px', textAlign: 'center' }}>
          <p style={{ color: '#d32f2f', fontWeight: 'bold', fontSize: '0.95rem', margin: 0 }}>
            ※当会は東京米国株クラブが主催する個人の勉強会で、キャッシュフローゲームの開発元・販売元とは関係ありません。
          </p>
        </div>
  */
  // I will just use a regex to replace the wrapper and the styling.
  
  const regex = /<div className="glass-card" style=\{\{ padding: '1.5rem', background: '#fff3f3', border: '2px solid #ffa5a5', borderRadius: '12px', textAlign: 'center' \}\}>\s*<p style=\{\{ color: '#d32f2f', fontWeight: 'bold', fontSize: '0.95rem', margin: 0 \}\}>\s*※当会は東京米国株クラブが主催する個人の勉強会で、キャッシュフローゲームの開発元・販売元とは関係ありません。\s*<\/p>\s*<\/div>/;
  
  const replacement = `<div style={{ textAlign: 'center' }}>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.75rem', opacity: 0.7, margin: 0 }}>
            ※当会は東京米国株クラブが主催する個人の勉強会で、キャッシュフローゲームの開発元・販売元とは関係ありません。
          </p>
        </div>`;
        
  content = content.replace(regex, replacement);
  fs.writeFileSync(file, content, 'utf-8');
});
