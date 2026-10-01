function getSessionStartDateTime(dateStr, timeStr) {
  const dateObj = new Date(dateStr);
  const jstDateFormatted = new Intl.DateTimeFormat('ja-JP', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    timeZone: 'Asia/Tokyo'
  }).format(dateObj).replace(/\//g, '-');
  
  let timePart = "00:00";
  if (timeStr) {
    if (/^\d{2}:\d{2}$/.test(timeStr)) {
      timePart = timeStr;
    } else {
      try {
        const tObj = new Date(timeStr);
        if (!isNaN(tObj.getTime())) {
          timePart = new Intl.DateTimeFormat('ja-JP', {
            hour: '2-digit',
            minute: '2-digit',
            timeZone: 'Asia/Tokyo'
          }).format(tObj);
        }
      } catch (e) { }
    }
  }
  
  return new Date(`${jstDateFormatted}T${timePart}:00+09:00`);
}

// Typical microcms string
const sDate = "2026-09-30T00:00:00.000Z";
const sTime = "2026-09-30T10:00:00.000Z"; // 19:00 JST
const start = getSessionStartDateTime(sDate, sTime);
console.log("Start:", start.toString());
console.log("End:", new Date(start.getTime() + 3600000).toString());
console.log("Is end > Oct 2?", new Date(start.getTime() + 3600000) > new Date("2026-10-02T00:00:00.000Z"));
