const fs = require('fs');
let content = fs.readFileSync('src/app/knowledge/page.tsx', 'utf-8');

const injection = `
          {/* CTA セミナー案内 (C2対応) */}
          <div className="glass-card" style={{ marginTop: '2rem', marginBottom: '2rem', padding: '1.5rem', background: 'var(--bg-white)', borderRadius: '12px', border: '2px solid var(--primary)' }}>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 'bold', color: 'var(--primary-dark)', marginBottom: '1rem', marginTop: 0 }}>
              まずは基礎から学びたい方へ
            </h4>
            <Link href="/seminar" style={{ display: 'inline-flex', alignItems: 'center', color: 'var(--primary)', fontWeight: 'bold', textDecoration: 'underline' }}>
              東京・川崎の初心者向け米国株セミナー（無料） <ArrowRight size={16} style={{ marginLeft: '4px' }} />
            </Link>
          </div>
`;

// Insert it right before {/* 免責事項 */}
content = content.replace('{/* 免責事項 */}', injection + '\n          {/* 免責事項 */}');
fs.writeFileSync('src/app/knowledge/page.tsx', content, 'utf-8');
