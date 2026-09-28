const fs = require('fs');

function moveDefParagraph(filePath, isCFG) {
  let content = fs.readFileSync(filePath, 'utf-8');
  
  // Find the exact div containing the definition paragraph
  // The pattern starts with <div style={{ background: 'rgba(255, 255, 255, 0.7)', ... and ends with </div>
  
  const defRegex = /<div style=\{\{\s*background: 'rgba\(255, 255, 255, 0.7\)',\s*padding: '1.5rem',[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/;
  
  // Actually, let's locate the opening and closing of that specific div.
  // We can search for <div style={{ background: 'rgba(255, 255, 255, 0.7)'
  let startIdx = content.indexOf("<div style={{ background: 'rgba(255, 255, 255, 0.7)'");
  if (startIdx === -1) {
    // maybe it has different styling?
    startIdx = content.indexOf("<div style={{ background: 'rgba(255, 255, 255, 0.7)");
    if (startIdx === -1) return;
  }
  
  let endIdx = -1;
  // It's just a single div with a <p> inside. Wait, let's check the structure:
  // <div style={{...}}>
  //   <p style={{...}}>
  //     <strong>東京米国株クラブとは</strong>...
  //   </p>
  // </div>
  // Let's find the closing div of this block.
  let pEnd = content.indexOf("</p>", startIdx);
  endIdx = content.indexOf("</div>", pEnd) + 6;
  
  const defBlock = content.substring(startIdx, endIdx);
  
  // Remove it from the original position
  content = content.replace(defBlock, '');
  
  // Insert it before the Application Form section
  // Look for `<section id="apply"` or `<section id="apply-form-section"`
  const applySectionIdx = content.indexOf('<section id="apply');
  if (applySectionIdx !== -1) {
    const wrappedBlock = `
      <section style={{ padding: '3rem 0', background: 'white' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          ${defBlock}
        </div>
      </section>
    `;
    content = content.slice(0, applySectionIdx) + wrappedBlock + content.slice(applySectionIdx);
  }
  
  fs.writeFileSync(filePath, content, 'utf-8');
}

moveDefParagraph('src/app/seminar/page.tsx', false);
moveDefParagraph('src/app/seminar/nisa/page.tsx', false);
moveDefParagraph('src/app/seminar/cashflow-game/page.tsx', true);

