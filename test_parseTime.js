function buildEventSchedule(dateStr, timeStr, defaultDurationHours = 1) {
  let ymd = '';
  // Try YYYY年MM月DD日
  const jpMatch = dateStr?.match(/(\d{4})年(\d{1,2})月(\d{1,2})日/);
  if (jpMatch) {
    ymd = `${jpMatch[1]}-${jpMatch[2].padStart(2, '0')}-${jpMatch[3].padStart(2, '0')}`;
  } else {
    // Try YYYY-MM-DD from ISO string
    const isoMatch = dateStr?.match(/^(\d{4}-\d{2}-\d{2})/);
    if (isoMatch) ymd = isoMatch[1];
  }
  
  if (!ymd) return null;

  let startH = 0, startM = 0;
  let endH = 0, endM = 0;
  let hasEnd = false;

  if (timeStr) {
    // Look for a range like 13:00~15:00, 13:00〜15:00, 10:00 ~ 12:00
    const parts = timeStr.split(/[~〜]/).map(s => s.trim());
    
    const parseHM = (str) => {
      const hmMatch = str.match(/(\d{1,2}):(\d{2})/);
      if (hmMatch) return [parseInt(hmMatch[1]), parseInt(hmMatch[2])];
      // Try to parse ISO date string if not matching HH:mm
      try {
        const d = new Date(str);
        if (!isNaN(d.getTime())) {
          return [d.getHours(), d.getMinutes()];
        }
      } catch (e) {}
      return null;
    };
    
    if (parts.length >= 2) {
      const startParts = parseHM(parts[0]);
      const endParts = parseHM(parts[1]);
      if (startParts && endParts) {
        [startH, startM] = startParts;
        [endH, endM] = endParts;
        hasEnd = true;
      } else if (startParts) {
        [startH, startM] = startParts;
      }
    } else {
      const single = parseHM(timeStr);
      if (single) {
        [startH, startM] = single;
      }
    }
  }

  if (!hasEnd) {
    endH = startH + defaultDurationHours;
    endM = startM;
    if (endH >= 24) { endH -= 24; }
  }

  const pad = (n) => n.toString().padStart(2, '0');
  
  const startDateStr = `${ymd}T${pad(startH)}:${pad(startM)}:00+09:00`;
  const endDateStr = `${ymd}T${pad(endH)}:${pad(endM)}:00+09:00`;

  // check valid output and end > start
  const sTime = new Date(startDateStr).getTime();
  const eTime = new Date(endDateStr).getTime();
  if (isNaN(sTime) || isNaN(eTime) || eTime <= sTime) {
    return null;
  }
  
  return { startDateStr, endDateStr };
}

console.log(buildEventSchedule("2026年10月09日(金)", "19:00~21:00", 2));
console.log(buildEventSchedule("2026年10月09日", "13:00〜15:00", 2));
console.log(buildEventSchedule("2026-10-09T00:00:00Z", "10:00 ~ 12:00", 2));
console.log(buildEventSchedule("2026-10-09T00:00:00Z", "2026-10-09T10:00:00.000Z", 1));
