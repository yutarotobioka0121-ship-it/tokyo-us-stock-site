const fs = require('fs');
const path = require('path');

const knowledgeDirs = [
  '',
  'stock-investment',
  'tokutei-koza',
  'tax',
  'nisa',
  'account-setup',
  'how-to-buy',
  'how-to-start',
  'indices',
  'keywords',
  'returns',
  'trading-hours',
  'yutai',
];

const basePath = '/Users/tobiokayuutaakira/.gemini/antigravity/scratch/business-site-red/src/app/knowledge';

knowledgeDirs.forEach(dir => {
  const filePath = dir ? path.join(basePath, dir, 'page.tsx') : path.join(basePath, 'page.tsx');
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf8');
    const textOnly = content
      .replace(/import[\s\S]*?export default/g, '')
      .replace(/<[^>]+>/g, '')
      .replace(/\s+/g, '');
    console.log(`/knowledge/${dir || 'main'}: ${textOnly.length}文字`);
  } else {
    console.log(`/knowledge/${dir}: ファイルなし`);
  }
});
