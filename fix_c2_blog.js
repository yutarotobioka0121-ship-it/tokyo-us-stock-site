const fs = require('fs');
const file = 'src/app/blog/[slug]/page.tsx';
let content = fs.readFileSync(file, 'utf-8');

const injection = `
            {/* CTA セミナー案内 (C2対応) */}
            {(() => {
              const s = slug.toLowerCase();
              let bannerHref = '';
              let bannerText = '';
              
              if (s === 'us-stock-beginners-guide' || s === 'sp500-beginners-guide') {
                bannerHref = '/seminar';
                bannerText = '東京・川崎の初心者向け米国株セミナー（無料）';
              } else if (post.title.includes('企業分析') || post.title.includes('銘柄分析')) {
                // Assuming corporate analysis series has '企業分析' in the title or we just show CFG
                bannerHref = '/seminar/cashflow-game';
                bannerText = '遊びながらお金の考え方を学ぶキャッシュフローゲーム会';
              }
              
              if (bannerHref) {
                return (
                  <div className="glass-card" style={{ marginTop: '2rem', padding: '1.5rem', background: 'var(--bg-white)', borderRadius: '12px', border: '2px solid var(--primary)' }}>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: 'bold', color: 'var(--primary-dark)', marginBottom: '1rem', marginTop: 0 }}>
                      おすすめの勉強会・体験会
                    </h4>
                    <Link href={bannerHref} style={{ display: 'inline-flex', alignItems: 'center', color: 'var(--primary)', fontWeight: 'bold', textDecoration: 'underline' }}>
                      {bannerText} <ArrowRight size={16} style={{ marginLeft: '4px' }} />
                    </Link>
                  </div>
                );
              }
              return null;
            })()}
`;

// Insert it right before {/* 知識ページ案内バナー */}
content = content.replace('{/* 知識ページ案内バナー */}', injection + '\n            {/* 知識ページ案内バナー */}');
fs.writeFileSync(file, content, 'utf-8');
