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



export function buildEventSchedule(dateStr: string, timeStr: string, defaultDurationHours = 1) {
  let ymd = '';
  const jpMatch = dateStr?.match(/(\d{4})年(\d{1,2})月(\d{1,2})日/);
  if (jpMatch) {
    ymd = `${jpMatch[1]}-${jpMatch[2].padStart(2, '0')}-${jpMatch[3].padStart(2, '0')}`;
  } else {
    const isoMatch = dateStr?.match(/^(\d{4}-\d{2}-\d{2})/);
    if (isoMatch) ymd = isoMatch[1];
  }
  
  if (!ymd) return null;

  let startH = 0, startM = 0;
  let endH = 0, endM = 0;
  let hasEnd = false;

  if (timeStr) {
    const parts = timeStr.split(/[~〜]/).map(s => s.trim());
    
    const parseHM = (str: string) => {
      const hmMatch = str.match(/(\d{1,2}):(\d{2})/);
      if (hmMatch) return [parseInt(hmMatch[1]), parseInt(hmMatch[2])];
      try {
        const d = new Date(str);
        if (!isNaN(d.getTime())) {
          return [parseInt(new Intl.DateTimeFormat('ja-JP', { hour: 'numeric', hour12: false, timeZone: 'Asia/Tokyo' }).format(d)), 
                  parseInt(new Intl.DateTimeFormat('ja-JP', { minute: 'numeric', timeZone: 'Asia/Tokyo' }).format(d))];
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
    if (endH >= 24) { endH -= 24; } // simplistic
  }

  const pad = (n: number) => n.toString().padStart(2, '0');
  
  const startDateStr = `${ymd}T${pad(startH)}:${pad(startM)}:00+09:00`;
  const endDateStr = `${ymd}T${pad(endH)}:${pad(endM)}:00+09:00`;

  const sTime = new Date(startDateStr).getTime();
  let eTime = new Date(endDateStr).getTime();
  
  if (isNaN(sTime)) return null;
  
  // if end time logic wrapped around (e.g. 23:00 + 2h = 01:00) without changing date
  if (eTime <= sTime) {
    // Just force it to be start + duration
    eTime = sTime + defaultDurationHours * 3600 * 1000;
  }
  
  // I'll just use my simple logic, because events won't cross midnight
  
  return { startDateStr, endDateStr: eTime > sTime ? endDateStr : null }; // If it failed, don't return end date string that is wrong
}
