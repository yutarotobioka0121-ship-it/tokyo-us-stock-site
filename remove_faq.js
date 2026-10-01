const fs = require('fs');

const file = 'src/app/seminar/cashflow-game/page.tsx';
let content = fs.readFileSync(file, 'utf-8');

// Find the block to remove
const blockStart = content.indexOf('      {\n        "@type": "Question",\n        "name": "ネットワークビジネスや怪しい商品の勧誘はありますか？",');
if (blockStart !== -1) {
  // Find the end of this object
  const blockEnd = content.indexOf('      },', blockStart) + 8; // length of '      },'
  content = content.substring(0, blockStart) + content.substring(blockEnd);
  
  // also handle the case where it might be the last element (no comma)
  // actually it's easier with regex
}

fs.writeFileSync(file, content, 'utf-8');
