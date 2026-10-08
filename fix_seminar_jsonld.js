const fs = require('fs');

function fixFile(file) {
  let content = fs.readFileSync(file, 'utf-8');

  // import buildEventSchedule
  if (!content.includes('buildEventSchedule')) {
    content = content.replace('formatSessionDate,', 'formatSessionDate, buildEventSchedule,');
  }

  // remove toJstIso block
  content = content.replace(/function toJstIso[\s\S]*?return `\$\{ymd\}T\$\{pad\(h\)\}:\$\{pad\(startMinute\)\}:00\+09:00`;\n}\n/s, '');

  // replace inside eventSchemas map
  // we need to return null if schedule fails
  content = content.replace(
    /const isOnline = typeStr\.includes\('online'\) \|\| typeStr\.includes\('オンライン'\);/g,
    `const isOnline = typeStr.includes('online') || typeStr.includes('オンライン');\n    const schedule = buildEventSchedule(session.date, session.time || session.date, 1);\n    if (!schedule) return null;`
  );

  content = content.replace(
    /startDate: toJstIso\(session\.date, session\.time \|\| session\.date, 0\),\n\s*endDate: toJstIso\(session\.date, session\.time \|\| session\.date, 1\),/g,
    `startDate: schedule.startDateStr,\n      endDate: schedule.endDateStr,`
  );

  // filter nulls when rendering
  content = content.replace(
    /\{eventSchemas\.map\(\(schema, idx\)/g,
    `{eventSchemas.filter(Boolean).map((schema, idx)`
  );

  fs.writeFileSync(file, content, 'utf-8');
}

fixFile('src/app/seminar/page.tsx');
fixFile('src/app/seminar/nisa/page.tsx');
