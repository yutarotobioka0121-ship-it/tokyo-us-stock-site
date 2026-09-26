const fs = require('fs');

const targets = [
  'src/components/ApplyForm.tsx',
  'src/components/NisaApplyForm.tsx',
  'src/components/CfgApplyForm.tsx',
  'src/components/ConsultationApplyForm.tsx',
];

for (const file of targets) {
  let content = fs.readFileSync(file, 'utf-8');
  
  // Replace the faulty TS logic with any safe fallback
  content = content.replace(/typeof sessions !== 'undefined' \? sessions : \(typeof schedule !== 'undefined' \? schedule : \[\]\)/g, "(typeof (window as any) !== 'undefined' ? [] : []) /* TS hack avoiding unbound variable error */");
  
  // Actually, we can just extract the event string from 'data' directly or pass it safely.
  // Wait, let me just rewrite that block properly by checking if `sessions` or `schedule` exist in the file.
  
  const hasSessions = content.includes('const { sessions } =') || content.includes('sessions: StudySession[]') || content.includes('sessions:');
  const hasSchedule = content.includes('schedule: CFGEvent[]') || content.includes('schedule:');
  
  const replacementArray = file.includes('CfgApplyForm') ? 'schedule' : (file.includes('Consultation') ? '[]' : 'sessions');
  
  content = content.replace(/\(typeof \(window as any\) !== 'undefined' \? \[\] : \[\]\) \/\* TS hack avoiding unbound variable error \*\//g, replacementArray);
  content = content.replace(/const arr = typeof sessions !== 'undefined' \? sessions : \(typeof schedule !== 'undefined' \? schedule : \[\]\);/g, `const arr = ${replacementArray};`);
  
  fs.writeFileSync(file, content, 'utf-8');
}
