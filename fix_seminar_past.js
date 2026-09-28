const fs = require('fs');

const fixPage = (file, isCfg = false) => {
  let content = fs.readFileSync(file, 'utf-8');
  
  if (isCfg) {
    // Instead of mapping over 'schedule', map over a filtered array
    content = content.replace(/const schedule = await getCFGSchedule\(\);/, `const scheduleAll = await getCFGSchedule();
  // JST現在時刻
  const now = new Date();
  const jstOffset = 9 * 60 * 60 * 1000;
  const nowJst = new Date(now.getTime() + now.getTimezoneOffset() * 60000 + jstOffset);

  // 終了時刻を過ぎた日程は除外
  const schedule = scheduleAll.filter(ev => {
    let endHour = 12, endMin = 0;
    const timeParts = (ev.time || '').split('〜');
    if (timeParts[1]) {
      const cleanEnd = timeParts[1].trim().replace(':', '');
      if (cleanEnd.length >= 3) {
        endHour = parseInt(cleanEnd.slice(0, cleanEnd.length - 2), 10) || 12;
        endMin = parseInt(cleanEnd.slice(-2), 10) || 0;
      }
    }
    const dateMatch = ev.date.match(/(\\d{4})年(\\d{1,2})月(\\d{1,2})日/);
    if (dateMatch) {
      const y = parseInt(dateMatch[1], 10);
      const m = parseInt(dateMatch[2], 10) - 1;
      const d = parseInt(dateMatch[3], 10);
      const eventEndJst = new Date(y, m, d, endHour, endMin);
      if (nowJst > eventEndJst) return false;
    }
    return true;
  });
`);
  } else {
    // For /seminar/page.tsx and /seminar/nisa/page.tsx
    // The sessions are stored in `sortedSessions`.
    content = content.replace(/const sortedSessions = sessions\n?\s*\.filter[\s\S]*?\]\)\;/g, `
    const sortedSessions = sessions
      .filter((session) => {
        const type = Array.isArray(session.type) ? session.type.join(' ').toLowerCase() : (session.type || '').toLowerCase();
        // nisaの場合は nisa 含む、通常の場合は nisa 含まない
        const isNisaRoute = ${file.includes('nisa') ? 'true' : 'false'};
        const hasNisa = type.includes('nisa') || type.includes('ニーサ');
        if (isNisaRoute && !hasNisa) return false;
        if (!isNisaRoute && hasNisa) return false;
        return true;
      })
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
      .filter(session => {
        // 終了時刻（開始時刻＋1時間）を過ぎたものは除外（JST判定）
        const now = new Date();
        const startDateTime = getSessionStartDateTime(session.date, session.time || session.date);
        const endDateTime = new Date(startDateTime.getTime() + 60 * 60 * 1000);
        return endDateTime > now;
      });
    `);
    
    // We also need to fix `const sortedSessions = ` matching above because my regex might be slightly off.
    // Let me just replace the exact line.
  }
  
  fs.writeFileSync(file, content, 'utf-8');
};

fixPage('src/app/seminar/cashflow-game/page.tsx', true);
// I need to be careful with the other two files. Let me do them manually using a smarter replace.
