const fs = require('fs');

const file = 'src/app/seminar/page.tsx';
const content = fs.readFileSync(file, 'utf-8');

// I will just use string manipulation by finding the start indices of the sections
const sectionStartStr = '          {/* 米国株セミナーとは */}';
const scheduleStartStr = '          {/* 開催スケジュール */}';
const scheduleEndStr = '          {/* 開催エリア */}';

const sectionStartIdx = content.indexOf(sectionStartStr);
const scheduleStartIdx = content.indexOf(scheduleStartStr);
const scheduleEndIdx = content.indexOf(scheduleEndStr);

if (sectionStartIdx !== -1 && scheduleStartIdx !== -1 && scheduleEndIdx !== -1) {
  // Extract schedule
  const scheduleContent = content.substring(scheduleStartIdx, scheduleEndIdx);
  
  // Remove schedule from its original position
  let newContent = content.substring(0, scheduleStartIdx) + content.substring(scheduleEndIdx);
  
  // Insert schedule before sectionStartStr
  // The new index might have shifted, so we recalculate
  const newSectionStartIdx = newContent.indexOf(sectionStartStr);
  newContent = newContent.substring(0, newSectionStartIdx) + scheduleContent + newContent.substring(newSectionStartIdx);
  
  fs.writeFileSync(file, newContent, 'utf-8');
  console.log("Moved successfully!");
} else {
  console.log("Could not find sections");
}
