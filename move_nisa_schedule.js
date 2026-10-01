const fs = require('fs');
const file = 'src/app/seminar/nisa/page.tsx';
let content = fs.readFileSync(file, 'utf-8');

const sectionStartStr = '      {/* イベント詳細 Section */}';
const scheduleStartStr = '      {/* Schedule Section */}';
const scheduleEndStr = '      {/* Course Details */}';

const sectionStartIdx = content.indexOf(sectionStartStr);
const scheduleStartIdx = content.indexOf(scheduleStartStr);
const scheduleEndIdx = content.indexOf(scheduleEndStr);

if (sectionStartIdx !== -1 && scheduleStartIdx !== -1 && scheduleEndIdx !== -1) {
  // Extract schedule
  const scheduleContent = content.substring(scheduleStartIdx, scheduleEndIdx);
  
  // Remove schedule from its original position
  let newContent = content.substring(0, scheduleStartIdx) + content.substring(scheduleEndIdx);
  
  // Insert schedule before sectionStartStr
  const newSectionStartIdx = newContent.indexOf(sectionStartStr);
  newContent = newContent.substring(0, newSectionStartIdx) + scheduleContent + newContent.substring(newSectionStartIdx);
  
  fs.writeFileSync(file, newContent, 'utf-8');
  console.log("Moved successfully in NISA page!");
} else {
  console.log("Could not find sections in NISA page");
}
