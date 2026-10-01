const fs = require('fs');

const file = 'src/app/seminar/page.tsx';
let content = fs.readFileSync(file, 'utf-8');

content = content.replace(/当日の流れ（約1時間）/g, '当日の流れ');
content = content.replace(/自己紹介（アイスブレイク）/g, '自己紹介');

fs.writeFileSync(file, content, 'utf-8');
