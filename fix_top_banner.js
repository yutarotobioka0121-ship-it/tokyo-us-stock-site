const fs = require('fs');
const file = 'src/app/blog/[slug]/page.tsx';
let content = fs.readFileSync(file, 'utf-8');

// Find the map loop
const target = `            {post.content.map((block: any) => {
              const value = block[block.type];`;

const replacement = `            {post.content.map((block: any, blockIndex: number) => {
              const value = block[block.type];
              
              // 2-4: 企業分析シリーズの「この記事の要点」直下にバナーを挿入
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
              }
`;

content = content.replace(target, replacement);

// Now I need to inject `banner` right after the block.
// The map loop returns the block jsx. I should return a Fragment.
// But wait, the current code just has a giant switch statement returning JSX.
// Let's replace `return (` with a wrapper. Wait, there are multiple returns in the switch!
