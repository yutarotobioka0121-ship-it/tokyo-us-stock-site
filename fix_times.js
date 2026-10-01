const fs = require('fs');

function updateTimes(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');

  // Regexes to catch various formats they might be written in
  content = content.replace(/ルール説明（約20分）/g, 'ルール説明（約10分）');
  content = content.replace(/ゲーム（約1時間20分）/g, 'ゲーム（約1時間40分）');
  content = content.replace(/振り返り（約20分）/g, '振り返り（約10分）');
  
  fs.writeFileSync(filePath, content, 'utf-8');
}

updateTimes('src/app/seminar/cashflow-game/page.tsx');
updateTimes('src/app/seminar/cashflow-game/guide/page.tsx');

