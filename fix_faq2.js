const fs = require('fs');
let file = 'src/app/seminar/cashflow-game/page.tsx';
let content = fs.readFileSync(file, 'utf-8');

// Update flow steps
content = content.replace(/1\. ルール説明（.*?）/g, '1. ルール説明（約10分）');
content = content.replace(/2\. ゲーム（.*?）/g, '2. ゲーム（約1時間30分・ルールは進めながら説明）');
content = content.replace(/3\. 振り返り（.*?）/g, '3. 振り返り（約20分）');

fs.writeFileSync(file, content, 'utf-8');
