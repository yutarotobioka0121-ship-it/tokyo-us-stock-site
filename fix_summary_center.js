const fs = require('fs');

function fixSummary(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');

  // For seminar/page.tsx
  content = content.replace(
    /marginTop: '2rem', padding: '1.5rem'/g,
    "margin: '2rem auto 0 auto', padding: '1.5rem'"
  );

  // For nisa/page.tsx
  content = content.replace(
    /background: 'white', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba\\(0,0,0,0.1\\)', marginBottom: '2rem'/g,
    "background: 'white', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.1)', margin: '0 auto 2rem auto'"
  );

  fs.writeFileSync(filePath, content, 'utf-8');
}

fixSummary('src/app/seminar/page.tsx');
fixSummary('src/app/seminar/nisa/page.tsx');

