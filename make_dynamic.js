const fs = require('fs');

function makeDynamic(file) {
  let content = fs.readFileSync(file, 'utf-8');
  content = content.replace('export const revalidate = 3600;', "export const dynamic = 'force-dynamic';");
  fs.writeFileSync(file, content, 'utf-8');
}

makeDynamic('src/app/seminar/page.tsx');
makeDynamic('src/app/seminar/nisa/page.tsx');
makeDynamic('src/app/seminar/cashflow-game/page.tsx');

let microcms = fs.readFileSync('src/lib/microcms.ts', 'utf-8');
microcms = microcms.replace(/customRequestInit: \{ next: \{ revalidate: 3600 \} \}/g, "customRequestInit: { cache: 'no-store' }");
fs.writeFileSync('src/lib/microcms.ts', microcms, 'utf-8');
