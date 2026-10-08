const fs = require('fs');
let file = 'src/app/seminar/cashflow-game/guide/page.tsx';
let content = fs.readFileSync(file, 'utf-8');

// Update detailed flow times in guide
content = content.replace(/自己紹介・ゲームルールの説明（約10分）/g, '自己紹介・ゲームルールの説明（約10分）');
content = content.replace(/ゲーム開始（約1時間40分）/g, 'ゲーム開始（約1時間30分・ルールは進めながら説明）');
content = content.replace(/振り返り・感想の共有（約10分）/g, '振り返り・感想の共有（約20分）');

fs.writeFileSync(file, content, 'utf-8');
