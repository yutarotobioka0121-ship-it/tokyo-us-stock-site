const fs = require('fs');
const glob = require('glob');

const files = glob.sync('src/app/**/page.tsx');
let changedCount = 0;

for (const file of files) {
  let content = fs.readFileSync(file, 'utf-8');
  let original = content;

  // Replace " | 東京米国株クラブ" or "｜東京米国株クラブ" in title strings
  // but only inside metadata object
  content = content.replace(/title:\s*['"](.*?)(\s*[|｜]\s*東京米国株クラブ)+['"]/g, "title: '$1'");
  
  if (content !== original) {
    fs.writeFileSync(file, content, 'utf-8');
    changedCount++;
    console.log(`Updated title in ${file}`);
  }
}
console.log(`Done. Changed ${changedCount} files.`);
