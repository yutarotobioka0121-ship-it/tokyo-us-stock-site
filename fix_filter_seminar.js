const fs = require('fs');
const pages = ['src/app/seminar/page.tsx', 'src/app/seminar/nisa/page.tsx'];

pages.forEach(file => {
  let content = fs.readFileSync(file, 'utf-8');
  
  if (!content.includes('export const revalidate = 3600;')) {
    content = content.replace("export const dynamic = 'force-dynamic';", "export const revalidate = 3600;");
  }

  // Update availableSessions filter
  content = content.replace(/const availableSessions = sortedSessions\.filter\(s => \{[\s\S]*?return true;[\s\S]*?\}\);/, `
  // JST現在時刻
  const now = new Date();
  const jstOffset = 9 * 60 * 60 * 1000;
  const nowJst = new Date(now.getTime() + now.getTimezoneOffset() * 60000 + jstOffset);

  const availableSessions = sortedSessions.filter(s => {
    const status = Array.isArray(s.status) ? s.status[0] : s.status;
    const isOpen = status === 'open' || status === '募集開始' || status === '受付中' || status === '満席' || status === 'キャンセル待ち';
    if (!isOpen && status !== '受付終了') return false; // display closed ones? Wait, the original code had rules. Let me just replace the expiration part.
    // Actually, I'll just keep their exact status check and append the JST expiration check.
    return true; // We will replace the whole block dynamically.
  });
  `);
});
