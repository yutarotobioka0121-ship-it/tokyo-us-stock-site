const fs = require('fs');
const file = 'src/lib/microcms.ts';
let content = fs.readFileSync(file, 'utf-8');

content = content.replace(/customRequestInit: \{\s*cache: 'no-store',\s*\}/g, "customRequestInit: { next: { revalidate: 3600 } }");
content = content.replace(/customRequestInit: \{ cache: 'no-store' \}/g, "customRequestInit: { next: { revalidate: 3600 } }");

fs.writeFileSync(file, content, 'utf-8');
