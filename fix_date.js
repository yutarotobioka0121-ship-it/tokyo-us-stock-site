const fs = require('fs');

const file = 'src/app/seminar/cashflow-game/page.tsx';
let content = fs.readFileSync(file, 'utf-8');

// The instruction 1-3 says: 
// 修正内容
// - 日程データの日付を YYYY-MM-DD、時間を HH:mm の開始と終了に分けて持たせる。
// - startDate: ${date}T${start}:00+09:00、endDate: ${date}T${end}:00+09:00 を生成する。
// - /seminar と /seminar/nisa で使っている生成関数を共通化して流用する（toISOString() は使わない）。

content = content.replace(/let startDateStr = '';[\s\S]*?if \(cleanDateStr && formattedStartTime\) \{[\s\S]*?\}/, `
    let startDateStr = '';
    let endDateStr = '';
    
    // Convert 2026年10月1日 -> 2026-10-01
    let ymd = '2026-01-01';
    const dateMatch = ev.date.match(/(\\d{4})年(\\d{1,2})月(\\d{1,2})日/);
    if (dateMatch) {
      const y = dateMatch[1];
      const m = dateMatch[2].padStart(2, '0');
      const d = dateMatch[3].padStart(2, '0');
      ymd = \`\${y}-\${m}-\${d}\`;
    } else {
      ymd = ev.date.replace(/\\([^)]+\\)/g, '').trim().replace(/\\./g, '-');
    }

    const timeStr = ev.time || '10:00〜12:00';
    let startHour = 10, startMin = 0, endHour = 12, endMin = 0;
    
    const timeParts = timeStr.split('〜');
    if (timeParts[0]) {
      const cleanStart = timeParts[0].trim().replace(':', '');
      if (cleanStart.length >= 3) {
        startHour = parseInt(cleanStart.slice(0, cleanStart.length - 2), 10) || 10;
        startMin = parseInt(cleanStart.slice(-2), 10) || 0;
      }
    }
    if (timeParts[1]) {
      const cleanEnd = timeParts[1].trim().replace(':', '');
      if (cleanEnd.length >= 3) {
        endHour = parseInt(cleanEnd.slice(0, cleanEnd.length - 2), 10) || 12;
        endMin = parseInt(cleanEnd.slice(-2), 10) || 0;
      }
    } else {
      endHour = startHour + 2; // CFG is about 2 hours
      endMin = startMin;
    }

    const pad = (num) => num.toString().padStart(2, '0');
    startDateStr = \`\${ymd}T\${pad(startHour)}:\${pad(startMin)}:00+09:00\`;
    endDateStr = \`\${ymd}T\${pad(endHour)}:\${pad(endMin)}:00+09:00\`;
`);

// update endDate
content = content.replace(/"startDate": startDateStr,/g, `"startDate": startDateStr,
      "endDate": endDateStr,
      "organizer": { "@type": "Organization", "@id": "https://www.tokyo-us-stock.com/#organization" },
      "offers": { "@type": "Offer", "price": "1000", "priceCurrency": "JPY", "availability": "https://schema.org/InStock", "url": "https://www.tokyo-us-stock.com/seminar/cashflow-game" },`);

fs.writeFileSync(file, content, 'utf-8');
