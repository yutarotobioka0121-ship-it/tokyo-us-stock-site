const fs = require('fs');
const file = 'src/app/seminar/cashflow-game/page.tsx';
let content = fs.readFileSync(file, 'utf-8');

// Find all occurrences of "export const revalidate = 3600;"
const regex = /export const revalidate = 3600;\n/g;
const matches = [...content.matchAll(regex)];

if (matches.length > 1) {
  // Keep the first one, remove the rest
  let newContent = content.substring(0, matches[1].index);
  newContent += content.substring(matches[1].index).replace(regex, '');
  fs.writeFileSync(file, newContent, 'utf-8');
  console.log("Fixed duplicate revalidate");
} else {
  console.log("No duplicate found");
}
