const fs = require('fs');

const file = 'src/app/seminar/cashflow-game/page.tsx';
let content = fs.readFileSync(file, 'utf-8');

// The block to remove
const blockStartStr = "<ul style={{ listStyleType: 'none', padding: 0, margin: '0 0 2rem 0', display: 'flex', flexDirection: 'column', gap: '0.8rem', fontSize: '1.05rem', fontWeight: '600', color: 'var(--primary-dark)' }}>";
const blockStartIndex = content.indexOf(blockStartStr);

if (blockStartIndex !== -1) {
  const blockEndIndex = content.indexOf('</ul>', blockStartIndex) + 5;
  content = content.substring(0, blockStartIndex) + content.substring(blockEndIndex);
}

fs.writeFileSync(file, content, 'utf-8');
