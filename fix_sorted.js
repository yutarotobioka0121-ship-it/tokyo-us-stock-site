const fs = require('fs');
const files = ['src/app/seminar/page.tsx', 'src/app/seminar/nisa/page.tsx'];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf-8');
  content = content.replace(/const sortedSessions = \[\.\.\.([^\]]+)\]\.sort\(\(a, b\) => \{\n\s*return new Date\(a\.date\)\.getTime\(\) - new Date\(b\.date\)\.getTime\(\);\n\s*\}\);/, `const sortedSessions = [...$1].sort((a, b) => {
    return new Date(a.date).getTime() - new Date(b.date).getTime();
  }).filter(s => {
    const startDateTime = getSessionStartDateTime(s.date, s.time || s.date);
    const endDateTime = new Date(startDateTime.getTime() + 60 * 60 * 1000);
    return endDateTime > new Date();
  });`);
  fs.writeFileSync(file, content, 'utf-8');
});
