export function formatSessionDate(dateStr: string) {
  const dateObj = new Date(dateStr);
  return new Intl.DateTimeFormat('ja-JP', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'short',
  }).format(dateObj).replace(/\((.+)\)/, '($1)');
}

export function formatSessionTime(dateStr: string) {
  const dateObj = new Date(dateStr);
  return new Intl.DateTimeFormat('ja-JP', {
    hour: '2-digit',
    minute: '2-digit',
  }).format(dateObj);
}
