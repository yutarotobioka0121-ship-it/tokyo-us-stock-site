const fs = require('fs');

function moveRevalidate(file) {
  let content = fs.readFileSync(file, 'utf-8');
  if (content.startsWith('export const revalidate = 3600;\n')) {
    content = content.replace('export const revalidate = 3600;\n', '');
    // Insert after imports
    const importEnd = content.lastIndexOf('import ');
    if (importEnd !== -1) {
      const nextLine = content.indexOf('\n', importEnd) + 1;
      content = content.slice(0, nextLine) + '\nexport const revalidate = 3600;\n' + content.slice(nextLine);
    } else {
      content = 'export const revalidate = 3600;\n\n' + content;
    }
    fs.writeFileSync(file, content, 'utf-8');
  }
}

moveRevalidate('src/app/seminar/page.tsx');
moveRevalidate('src/app/seminar/nisa/page.tsx');
moveRevalidate('src/app/seminar/cashflow-game/page.tsx');
