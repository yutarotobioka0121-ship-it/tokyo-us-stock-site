/** 時間の区切り文字（~ / ～）を全ページ共通で「〜」にそろえる */
export function formatTimeDisplay(timeStr?: string | null): string {
  if (!timeStr) return '';
  return String(timeStr)
    .replace(/\s*[~～〜]\s*/g, '〜')
    .trim();
}

/** 金額表記を3桁カンマ区切り（例: 1000円 → 1,000円）にそろえる。「無料」はそのまま返す */
export function formatFeeDisplay(fee?: string | number | null): string {
  if (fee === undefined || fee === null || fee === '') return '無料';
  if (typeof fee === 'number') {
    return fee === 0 ? '無料' : `${fee.toLocaleString('ja-JP')}円`;
  }
  const trimmed = String(fee).trim();
  if (trimmed === '無料' || trimmed === '0' || trimmed === '0円') return '無料';
  if (/^\d+$/.test(trimmed)) {
    return `${Number(trimmed).toLocaleString('ja-JP')}円`;
  }
  return trimmed.replace(/\d{4,}/g, (match) => Number(match).toLocaleString('ja-JP'));
}

/** 1時間のセミナーの時間帯（例: 19:00〜20:00）を共通フォーマットで返す */
export function formatSessionTimeRange(timeStr?: string | null): string {
  if (!timeStr) return '';

  if (/[~～〜]/.test(timeStr)) {
    return formatTimeDisplay(timeStr);
  }

  let startHour = 0;
  let startMinute = 0;

  if (/^\d{1,2}:\d{2}$/.test(timeStr)) {
    const parts = timeStr.split(':');
    startHour = parseInt(parts[0], 10);
    startMinute = parseInt(parts[1], 10);
  } else {
    try {
      const dateObj = new Date(timeStr);
      if (isNaN(dateObj.getTime())) return formatTimeDisplay(timeStr);

      const formatted = new Intl.DateTimeFormat('ja-JP', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
        timeZone: 'Asia/Tokyo',
      }).format(dateObj);
      const parts = formatted.split(':');
      startHour = parseInt(parts[0], 10);
      startMinute = parseInt(parts[1], 10);
    } catch {
      return formatTimeDisplay(timeStr);
    }
  }

  const endHour = (startHour + 1) % 24;
  const pad = (num: number) => num.toString().padStart(2, '0');

  return `${pad(startHour)}:${pad(startMinute)}〜${pad(endHour)}:${pad(startMinute)}`;
}

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

/** 米国株セミナー・NISA初心者セミナーの申込締切（開催日時の何時間前か） */
export const APPLY_DEADLINE_HOURS = 6;

/** Date オブジェクトを日本時間（+09:00）の ISO 8601 文字列にフォーマットする */
export function formatJstIsoString(date: Date): string {
  const parts = new Intl.DateTimeFormat('ja-JP', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
    timeZone: 'Asia/Tokyo',
  }).formatToParts(date);
  const get = (type: string) => parts.find((p) => p.type === type)?.value || '00';
  const hour = get('hour') === '24' ? '00' : get('hour');
  return `${get('year')}-${get('month')}-${get('day')}T${hour}:${get('minute')}:${get('second')}+09:00`;
}

/** 米国株・NISAセミナーの申込締切日時（日本時間基準で開催日時の APPLY_DEADLINE_HOURS 時間前）を返す */
export function getSessionDeadlineDateTime(session: { date: string; time?: string }): Date {
  const startDateTime = getSessionStartDateTime(session.date, session.time || session.date);
  return new Date(startDateTime.getTime() - APPLY_DEADLINE_HOURS * 60 * 60 * 1000);
}

export function isSessionDeadlinePassed(
  session: { date: string; time?: string; type?: string | string[] },
  now: Date = new Date()
): boolean {
  const deadline = getSessionDeadlineDateTime(session);
  return now > deadline;
}



/** セッションがオンライン開催かどうかを判定する */
export function isOnlineSession(session: { type?: string | string[] }): boolean {
  const typeArr = Array.isArray(session.type) ? session.type : [session.type || ''];
  const typeStr = typeArr.join(' ').toLowerCase();
  return typeStr.includes('online') || typeStr.includes('オンライン');
}

export const PAID_OFFLINE_START_MS = new Date('2026-11-22T00:00:00+09:00').getTime();

/** セッションが有料の対面開催（11/22 00:00 JST以降の対面、または fee > 0）かどうかを判定する */
export function isPaidOfflineSession(session: {
  date: string;
  time?: string;
  type?: string | string[];
  fee?: string | number | null;
}): boolean {
  if (isOnlineSession(session)) return false;
  if (session.fee !== undefined && session.fee !== null && String(session.fee).trim() !== '') {
    return formatFeeDisplay(session.fee) !== '無料';
  }
  const startDt = getSessionStartDateTime(session.date, session.time || session.date);
  return !isNaN(startDt.getTime()) && startDt.getTime() >= PAID_OFFLINE_START_MS;
}

/** セッションの参加費表示を返す（microCMS の fee があればそれを優先、未設定時は11/22以降の対面を1,000円・オンラインを無料） */
export function getSessionFeeDisplay(session: {
  date: string;
  time?: string;
  type?: string | string[];
  fee?: string | number | null;
}): string {
  if (session.fee !== undefined && session.fee !== null && String(session.fee).trim() !== '') {
    return formatFeeDisplay(session.fee);
  }
  if (isPaidOfflineSession(session)) {
    return formatFeeDisplay(1000);
  }
  return '無料';
}

/** 構造化データ（EducationEvent）の offers.price 用に数値文字列（"1000" / "0"）を返す */
export function getSessionPriceValue(session: {
  date: string;
  time?: string;
  type?: string | string[];
  fee?: string | number | null;
}): string {
  const display = getSessionFeeDisplay(session);
  if (display === '無料') return '0';
  const digits = display.replace(/[^0-9]/g, '');
  return digits || '0';
}

export function buildEventSchedule(dateStr: string, timeStr: string, defaultDurationHours = 1) {
  let ymd = '';
  const jpMatch = dateStr?.match(/(\d{4})年(\d{1,2})月(\d{1,2})日/);
  if (jpMatch) {
    ymd = `${jpMatch[1]}-${jpMatch[2].padStart(2, '0')}-${jpMatch[3].padStart(2, '0')}`;
  } else if (dateStr && /[T\s]\d{2}:\d{2}/.test(dateStr)) {
    // ISO 8601 日時文字列（UTC 等）は必ず日本時間（Asia/Tokyo）に変換して日付を取得する
    const d = new Date(dateStr);
    if (!isNaN(d.getTime())) {
      ymd = new Intl.DateTimeFormat('ja-JP', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        timeZone: 'Asia/Tokyo',
      })
        .format(d)
        .replace(/\//g, '-');
    }
  } else {
    const isoMatch = dateStr?.match(/^(\d{4}-\d{2}-\d{2})/);
    if (isoMatch) ymd = isoMatch[1];
  }

  if (!ymd) return null;

  let startH = 0, startM = 0;
  let endH = 0, endM = 0;
  let hasEnd = false;

  if (timeStr) {
    const parts = timeStr.split(/[~～〜]/).map(s => s.trim());

    const parseHM = (str: string): [number, number] | null => {
      // ISO 8601 日時文字列（例: 2026-11-23T07:00:00.000Z）を先に判定し、日本時間（Asia/Tokyo）に変換する
      if (/^\d{4}-\d{2}-\d{2}[T\s]/.test(str)) {
        try {
          const d = new Date(str);
          if (!isNaN(d.getTime())) {
            const jstHM = new Intl.DateTimeFormat('ja-JP', {
              hour: '2-digit',
              minute: '2-digit',
              hour12: false,
              timeZone: 'Asia/Tokyo',
            }).format(d);
            const m = jstHM.match(/(\d{1,2}):(\d{2})/);
            if (m) return [parseInt(m[1], 10) % 24, parseInt(m[2], 10)];
          }
        } catch {
          // fall through
        }
      }
      const hmMatch = str.match(/(\d{1,2}):(\d{2})/);
      if (hmMatch) return [parseInt(hmMatch[1], 10), parseInt(hmMatch[2], 10)];
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

  const pad = (n: number) => n.toString().padStart(2, '0');

  const startDateStr = `${ymd}T${pad(startH)}:${pad(startM)}:00+09:00`;
  const endDateStr = `${ymd}T${pad(endH)}:${pad(endM)}:00+09:00`;

  const sTime = new Date(startDateStr).getTime();
  let eTime = new Date(endDateStr).getTime();

  if (isNaN(sTime)) return null;

  if (eTime <= sTime) {
    eTime = sTime + defaultDurationHours * 3600 * 1000;
  }

  return { startDateStr, endDateStr: eTime > sTime ? endDateStr : null };
}
