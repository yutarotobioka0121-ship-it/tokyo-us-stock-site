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
