export interface StudySession {
  id: string;
  date: string;       // 開催日 (例: "2026年5月15日(金)")
  time: string;       // 時間 (例: "20:00 - 21:00")
  type: 'online' | 'offline';
  location?: string;  // オフラインの場合の場所
  status: 'open' | 'full' | 'ended';
  isFeatured?: boolean;
}

export const sessions: StudySession[] = [
  {
    id: 'session-1',
    date: '2026年5月20日(水)',
    time: '20:00 - 21:00',
    type: 'online',
    status: 'open',
    isFeatured: true
  },
  {
    id: 'session-2',
    date: '2026年6月05日(金)',
    time: '19:30 - 20:30',
    type: 'online',
    status: 'open'
  },
  {
    id: 'session-3',
    date: '2026年6月18日(木)',
    time: '20:00 - 21:00',
    type: 'online',
    status: 'full'
  }
];
