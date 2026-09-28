const fs = require('fs');
const file = 'src/app/seminar/cashflow-game/page.tsx';
let content = fs.readFileSync(file, 'utf-8');

// Fix num: number
content = content.replace("const pad = (num) => num.toString().padStart(2, '0');", "const pad = (num: number) => num.toString().padStart(2, '0');");

// Fix duplicate "offers"
content = content.replace(/"offers": \{ "@type": "Offer", "price": "1000", "priceCurrency": "JPY", "availability": "https:\/\/schema\.org\/InStock", "url": "https:\/\/www\.tokyo-us-stock\.com\/seminar\/cashflow-game" \},\s*"offers": \{ "@type": "Offer", "price": "1000", "priceCurrency": "JPY", "availability": "https:\/\/schema\.org\/InStock", "url": "https:\/\/www\.tokyo-us-stock\.com\/seminar\/cashflow-game", "validFrom": "2026-09-01T00:00:00\+09:00" \},/g, 
`"offers": { "@type": "Offer", "price": "1000", "priceCurrency": "JPY", "availability": "https://schema.org/InStock", "url": "https://www.tokyo-us-stock.com/seminar/cashflow-game", "validFrom": "2026-09-01T00:00:00+09:00" },`);

// Fix duplicate block scoped vars
// Just remove one of the duplicated blocks
content = content.replace(/const now = new Date\(\);\n\s*const jstOffset = 9 \* 60 \* 60 \* 1000;\n\s*const nowJst = new Date\(now\.getTime\(\) \+ now\.getTimezoneOffset\(\) \* 60000 \+ jstOffset\);\n/g, "");

// and add it once at the top of the function
content = content.replace("export default async function CashflowGamePage() {", `export default async function CashflowGamePage() {
  const now = new Date();
  const jstOffset = 9 * 60 * 60 * 1000;
  const nowJst = new Date(now.getTime() + now.getTimezoneOffset() * 60000 + jstOffset);`);
  
fs.writeFileSync(file, content, 'utf-8');
