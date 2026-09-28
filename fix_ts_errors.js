const fs = require('fs');

// Fix blog banner
let blogFile = 'src/app/blog/[slug]/page.tsx';
let blogContent = fs.readFileSync(blogFile, 'utf-8');

blogContent = blogContent.replace(`              const renderBlockContent = () => {`, `
              let banner = null;
              if (post.title.includes('企業分析') && (type === 'quote' || type === 'callout' || type === 'paragraph')) {
                const text = value?.rich_text?.map(t => t.plain_text).join('') || '';
                if (text.includes('この記事の要点') || text.includes('要点')) {
                  banner = (
                    <div key={\`banner-\${block.id}\`} style={{ marginTop: '1rem', marginBottom: '2rem', padding: '1rem', background: '#eef2ff', borderLeft: '4px solid var(--primary)', borderRadius: '4px' }}>
                      <Link href="/seminar" style={{ fontWeight: 'bold', color: 'var(--primary-dark)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span style={{ fontSize: '1.2rem' }}>💡</span>
                        米国株を基礎から学ぶ少人数セミナーを東京で開催中 → 日程を見る
                      </Link>
                    </div>
                  );
                }
              }
              const renderBlockContent = () => {`);
fs.writeFileSync(blogFile, blogContent, 'utf-8');

// Fix CFG offers duplicate
let cfgFile = 'src/app/seminar/cashflow-game/page.tsx';
let cfgContent = fs.readFileSync(cfgFile, 'utf-8');
cfgContent = cfgContent.replace(/"offers": \{ "@type": "Offer", "price": "1000", "priceCurrency": "JPY", "availability": "https:\/\/schema\.org\/InStock", "url": "https:\/\/www\.tokyo-us-stock\.com\/seminar\/cashflow-game" \},/g, "");

fs.writeFileSync(cfgFile, cfgContent, 'utf-8');
