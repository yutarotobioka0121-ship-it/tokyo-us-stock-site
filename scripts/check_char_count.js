const fs = require('fs');
const path = require('path');

const files = [
  'us-stock-screening-guide',
  'us-stock-tokutei-koza-guide',
  'us-stock-tax-guide',
  'us-stock-kakutei-shinkoku',
  'us-stock-gaikoku-zei-kojo',
  'nisa-us-stock-tax-free',
];

const basePath = '/Users/tobiokayuutaakira/.gemini/antigravity/scratch/business-site-red/src/app/blog';

files.forEach(slug => {
  const filePath = path.join(basePath, slug, 'page.tsx');
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf8');
    // タグを除去して文字数を大まかに算出
    const textOnly = content
      .replace(/import[\s\S]*?export default/g, '')
      .replace(/<[^>]+>/g, '')
      .replace(/\s+/g, '');
    console.log(`${slug}: ${textOnly.length}文字`);
  } else {
    console.log(`${slug}: ファイルなし`);
  }
});
