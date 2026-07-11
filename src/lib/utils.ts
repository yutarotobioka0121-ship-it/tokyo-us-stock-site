export function formatSessionDate(dateStr: string) {
  const dateObj = new Date(dateStr);
  return new Intl.DateTimeFormat('ja-JP', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'short',
    timeZone: 'Asia/Tokyo',
  }).format(dateObj).replace(/\((.+)\)/, '($1)');
}

export function formatSessionTime(timeStr: string) {
  if (!timeStr) return '';
  
  // HH:mm 形式（例: "19:00"）ならそのまま返す
  if (/^\d{2}:\d{2}$/.test(timeStr)) {
    return timeStr;
  }

  // ISO形式（例: "2024-04-28T10:00:00Z"）ならフォーマットする
  try {
    const dateObj = new Date(timeStr);
    if (isNaN(dateObj.getTime())) return timeStr;
    
    return new Intl.DateTimeFormat('ja-JP', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
      timeZone: 'Asia/Tokyo',
    }).format(dateObj);
  } catch (e) {
    return timeStr;
  }
}

export function getSessionStartDateTime(dateStr: string, timeStr: string): Date {
  const dateObj = new Date(dateStr);
  // Get YYYY-MM-DD formatted string in JST
  const jstDateFormatted = new Intl.DateTimeFormat('ja-JP', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    timeZone: 'Asia/Tokyo'
  }).format(dateObj).replace(/\//g, '-');
  
  // Extract "HH:mm" from timeStr (which can be a simple "19:00" or ISO format)
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
            hour12: false,
            timeZone: 'Asia/Tokyo'
          }).format(tObj);
        }
      } catch (e) {
        // ignore
      }
    }
  }
  
  // Parse with +09:00 offset to represent exact JST
  return new Date(`${jstDateFormatted}T${timePart}:00+09:00`);
}

export function isSessionDeadlinePassed(
  session: { date: string; time?: string; type: string | string[] }, 
  now: Date = new Date()
): boolean {
  const startDateTime = getSessionStartDateTime(session.date, session.time || session.date);
  const type = Array.isArray(session.type) ? session.type[0] : session.type;
  
  if (type === 'online' || type === 'オンライン') {
    // オンライン：開催時間の1時間前まで
    const deadline = new Date(startDateTime.getTime() - 60 * 60 * 1000);
    return now > deadline;
  } else {
    // 対面：開催日前日の21時まで
    const prevDay = new Date(startDateTime.getTime() - 24 * 60 * 60 * 1000);
    const prevDayFormatted = new Intl.DateTimeFormat('ja-JP', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      timeZone: 'Asia/Tokyo'
    }).format(prevDay).replace(/\//g, '-');
    const deadline = new Date(`${prevDayFormatted}T21:00:00+09:00`);
    return now > deadline;
  }
}


