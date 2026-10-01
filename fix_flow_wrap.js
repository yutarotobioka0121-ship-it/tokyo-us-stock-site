const fs = require('fs');

const file = 'src/app/seminar/cashflow-game/page.tsx';
let content = fs.readFileSync(file, 'utf-8');

// The original CSS part for `.flow-step`
// We add `white-space: nowrap;` and `word-break: keep-all;`
content = content.replace(/font-size: 1.1rem;/g, 'font-size: 1.05rem; white-space: nowrap; word-break: keep-all;');

// At media query, reduce padding to ensure it fits without squishing
content = content.replace(/padding: 1.5rem 1rem;/g, 'padding: 1.2rem 0.5rem;');

fs.writeFileSync(file, content, 'utf-8');
