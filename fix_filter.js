const fs = require('fs');

const file = 'src/app/seminar/cashflow-game/page.tsx';
let content = fs.readFileSync(file, 'utf-8');

// Replace the getJapaneseDayOfWeek function body
content = content.replace(/function getJapaneseDayOfWeek\(dateString: string\): string \{[\s\S]*?\}/, `function getJapaneseDayOfWeek(dateString: string): string {
  if (!dateString) return '';
  const dateMatch = dateString.match(/(\\d{4})年(\\d{1,2})月(\\d{1,2})日/);
  if (dateMatch) {
    const y = parseInt(dateMatch[1], 10);
    const m = parseInt(dateMatch[2], 10) - 1;
    const d = parseInt(dateMatch[3], 10);
    const date = new Date(y, m, d);
    if (!isNaN(date.getTime())) {
      const weekday = new Intl.DateTimeFormat('ja-JP', { weekday: 'short', timeZone: 'Asia/Tokyo' }).format(date);
      return \`\${dateMatch[1]}年\${dateMatch[2]}月\${dateMatch[3]}日(\${weekday})\`;
    }
  }
  
  const cleanDateStr = dateString.replace(/\\([^)]+\\)/g, '').trim();
  const normalizedStr = cleanDateStr.replace(/\\./g, '/').replace(/-/g, '/');
  const date = new Date(normalizedStr);
  if (isNaN(date.getTime())) return dateString;
  const weekday = new Intl.DateTimeFormat('ja-JP', { weekday: 'short', timeZone: 'Asia/Tokyo' }).format(date);
  return \`\${cleanDateStr} (\${weekday})\`;
}`);

// Add JST filter logic
content = content.replace(/const availableEvents = schedule\.filter\(ev => ev\.status === 'open' \|\| ev\.status === 'full'\);/, `
  // JST現在時刻
  const now = new Date();
  const jstOffset = 9 * 60 * 60 * 1000;
  const nowJst = new Date(now.getTime() + now.getTimezoneOffset() * 60000 + jstOffset);

  const availableEvents = schedule.filter(ev => {
    if (ev.status !== 'open' && ev.status !== 'full') return false;
    // 終了時刻をパース
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

content = content.replace(/const eventSchemas = generateEventSchema\(schedule\.filter\(ev => ev\.status === 'open'\)\);/, `
  const eventSchemas = generateEventSchema(availableEvents.filter(ev => ev.status === 'open'));
`);

// Also add revalidate to the page
if (!content.includes('export const revalidate = 3600;')) {
  content = content.replace("export const dynamic = 'force-dynamic';", "export const revalidate = 3600;");
}

fs.writeFileSync(file, content, 'utf-8');
