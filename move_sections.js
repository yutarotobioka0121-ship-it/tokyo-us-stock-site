const fs = require('fs');

function moveDefinitionToEnd(file) {
  let content = fs.readFileSync(file, 'utf-8');
  
  // The Definition Paragraph block starts with {/* Definition Paragraph */}
  // and ends with </div> right before {/* Summary */} or <div className="seminar-hero-image"
  
  const startMarker = '{/* Definition Paragraph */}';
  let startIdx = content.indexOf(startMarker);
  if (startIdx === -1) return;
  
  let endIdx = content.indexOf('</div>', content.indexOf('</p>', startIdx)) + 6;
  
  // Extract the block including the newline after it
  const defBlockFull = content.substring(startIdx, endIdx);
  
  // Find where to insert it at the end.
  // The user said "ページ最後尾へ移動".
  // Let's place it right before </main> or at the end of the page.
  // The best place is before the footer, which means right before </main>
  
  let targetIdx = content.lastIndexOf('</main>');
  if (targetIdx === -1) return;
  
  // Remove the block from original position
  content = content.substring(0, startIdx) + content.substring(endIdx);
  
  // We need to adjust targetIdx since we just shortened the string
  targetIdx = content.lastIndexOf('</main>');
  
  // Wrap the definition in a section to make it look good at the bottom
  const wrappedBlock = `
      <section style={{ padding: '4rem 0', background: 'white' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          ${defBlockFull}
        </div>
      </section>
`;
  
  content = content.substring(0, targetIdx) + wrappedBlock + content.substring(targetIdx);
  fs.writeFileSync(file, content, 'utf-8');
}

function moveScheduleUp(file) {
  let content = fs.readFileSync(file, 'utf-8');
  
  const scheduleStartMarker = '<section id="schedule"';
  let startIdx = content.indexOf(scheduleStartMarker);
  if (startIdx === -1) return;
  
  // Find the end of the schedule section. It ends before {/* FAQ Section */}
  const faqMarker = '{/* FAQ Section */}';
  let endIdx = content.indexOf(faqMarker);
  if (endIdx === -1) return;
  
  const scheduleBlock = content.substring(startIdx, endIdx);
  
  // Remove the block from original position
  content = content.substring(0, startIdx) + content.substring(endIdx);
  
  // Find the insertion point: right below the hero image section.
  // The hero section ends with:
  //       </section>
  //
  //       {/* Summary Section */}
  const insertMarker = '{/* Summary Section */}';
  let insertIdx = content.indexOf(insertMarker);
  if (insertIdx === -1) return;
  
  content = content.substring(0, insertIdx) + scheduleBlock + '\n      ' + content.substring(insertIdx);
  fs.writeFileSync(file, content, 'utf-8');
}

// 1. Move Definition to bottom for all 3 pages
['src/app/seminar/page.tsx', 'src/app/seminar/nisa/page.tsx', 'src/app/seminar/cashflow-game/page.tsx'].forEach(file => {
  moveDefinitionToEnd(file);
});

// 2. Move Schedule up in cashflow game page
moveScheduleUp('src/app/seminar/cashflow-game/page.tsx');

