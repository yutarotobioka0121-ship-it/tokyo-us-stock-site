const fs = require('fs');
const file = 'src/app/blog/[slug]/page.tsx';
let content = fs.readFileSync(file, 'utf-8');

content = content.replace("const value = block[block.type];", `const value = block[block.type];
              let banner = null;
              if (post.title.includes('企業分析') && (block.type === 'quote' || block.type === 'callout' || block.type === 'paragraph')) {
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
              }`);
fs.writeFileSync(file, content, 'utf-8');
