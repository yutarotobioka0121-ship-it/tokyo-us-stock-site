const fs = require('fs');
const file = 'src/app/seminar/cashflow-game/page.tsx';
let content = fs.readFileSync(file, 'utf-8');

// import buildEventSchedule
if (!content.includes('buildEventSchedule')) {
  content = content.replace('formatSessionDate,', 'formatSessionDate, buildEventSchedule,');
}

// remove toJstIso block entirely
content = content.replace(/function toJstIso.*?return `\$\{ymd\}T\$\{hh\}:\$\{mm\}:00\+09:00`;\n}\n/s, '');

// replace usage of toJstIso inside eventSchemas map
content = content.replace(
  /const startDateStr = toJstIso\(ev\.date, ev\.time, 0\);\n\s*const endDateStr = toJstIso\(ev\.date, ev\.time, 2\);/g,
  `const schedule = buildEventSchedule(ev.date, ev.time, 2);
    if (!schedule) return null;
    const { startDateStr, endDateStr } = schedule;`
);

// we also need to filter out nulls from eventSchemas
content = content.replace(
  /const eventSchemas = futureEvents\.map\(\(ev, idx\) => \{/g,
  `const eventSchemas = futureEvents.map((ev, idx) => {`
);

// and at the end of the map:
// eventSchemas is used directly as JSON stringify. We need to filter nulls.
content = content.replace(
  /JSON\.stringify\(eventSchemas\)/g,
  `JSON.stringify(eventSchemas.filter(Boolean))`
);

fs.writeFileSync(file, content, 'utf-8');
