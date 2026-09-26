const fs = require('fs');

const targets = [
  { file: 'src/components/ApplyForm.tsx', type: 'us_stock' },
  { file: 'src/components/NisaApplyForm.tsx', type: 'nisa' },
  { file: 'src/components/CfgApplyForm.tsx', type: 'cashflow_game' },
  { file: 'src/components/ConsultationApplyForm.tsx', type: 'consultation' },
];

for (const { file, type } of targets) {
  let content = fs.readFileSync(file, 'utf-8');
  
  // Find where response.ok is handled
  if (content.includes("setStatus('success');") && !content.includes("generate_lead")) {
    const replacement = `setStatus('success');
        
        // GA4 tracking
        let eventDate = 'unknown';
        if (data.event === 'other') {
          eventDate = 'other';
        } else {
          // Depending on the form, we might have sessions, schedule, or nothing
          const arr = typeof sessions !== 'undefined' ? sessions : (typeof schedule !== 'undefined' ? schedule : []);
          const selected = arr.find(s => s.id === data.event);
          if (selected && selected.date) {
            eventDate = selected.date.substring(0, 10);
          } else if (data.date) {
            eventDate = typeof data.date === 'string' ? data.date.substring(0, 10) : 'unknown';
          }
        }

        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'generate_lead', {
            seminar_type: '${type}',
            event_date: eventDate,
          });
        }`;
    
    content = content.replace(/setStatus\('success'\);/g, replacement);
    fs.writeFileSync(file, content, 'utf-8');
    console.log(`Updated ${file}`);
  } else {
    console.log(`Skipped ${file}`);
  }
}
