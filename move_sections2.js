const fs = require('fs');

function moveDefinitionToEnd(file) {
  let content = fs.readFileSync(file, 'utf-8');
  
  const startMarker = '{/* Definition Paragraph */}';
  let startIdx = content.indexOf(startMarker);
  if (startIdx === -1) return;
  
  let endIdx = content.indexOf('</div>', content.indexOf('</p>', startIdx)) + 6;
  const defBlockFull = content.substring(startIdx, endIdx);
  
  // Remove the block
  content = content.substring(0, startIdx) + content.substring(endIdx);
  
  // Find the last section
  const insertMarker = '    </div>\n  );\n}';
  let insertIdx = content.lastIndexOf(insertMarker);
  
  if (insertIdx === -1) {
    insertIdx = content.lastIndexOf('</div>\n  );\n}');
    if (insertIdx === -1) return;
  }
  
  const wrappedBlock = `
      <section style={{ padding: '4rem 0', background: 'white' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          ${defBlockFull}
        </div>
      </section>
`;
  
  content = content.substring(0, insertIdx) + wrappedBlock + content.substring(insertIdx);
  fs.writeFileSync(file, content, 'utf-8');
}

['src/app/seminar/page.tsx', 'src/app/seminar/nisa/page.tsx', 'src/app/seminar/cashflow-game/page.tsx'].forEach(file => {
  moveDefinitionToEnd(file);
});
