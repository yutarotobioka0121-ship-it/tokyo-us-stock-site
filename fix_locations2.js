const fs = require('fs');

function enforceNowrap(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');

  content = content.replace(
    /wordBreak: 'keep-all' \}\}/g,
    "wordBreak: 'keep-all', whiteSpace: 'nowrap' }}"
  );

  fs.writeFileSync(filePath, content, 'utf-8');
}

enforceNowrap('src/app/seminar/page.tsx');
enforceNowrap('src/app/seminar/nisa/page.tsx');

