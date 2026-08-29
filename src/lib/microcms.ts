import { createClient } from 'microcms-js-sdk';

export const client = process.env.MICROCMS_SERVICE_DOMAIN && process.env.MICROCMS_API_KEY 
  ? createClient({
      serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
      apiKey: process.env.MICROCMS_API_KEY,
    })
  : null;

export interface StudySession {
  id: string;
  date: string;       // ISO string from Date/Time field
  time: string;       // ISO string from Date/Time field
  type: string | string[];
  status: string | string[];
  location?: string;  // Approximate station name for offline sessions
  zoomUrl?: string;
  zoomId?: string;
  zoomPassword?: string;
  isFeatured?: boolean;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
}

export async function getSessions() {
  if (!client) {
    console.warn('MicroCMS client is not initialized. Check environment variables.');
    return [];
  }
  
  try {
    const data = await client.get({
      endpoint: 'usstock',
      queries: { orders: '-publishedAt' },
      customRequestInit: {
        cache: 'no-store',
      },
    });
    return data.contents as StudySession[];
  } catch (error) {
    console.error('Failed to fetch sessions from MicroCMS:', error);
    return [];
  }
}

export interface CFGEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  capacity: number;
  fee: string;
  status: string;
}

export async function getCFGSchedule(): Promise<CFGEvent[]> {
  if (!client) {
    console.warn('MicroCMS client is not initialized.');
    return [];
  }
  
  try {
    const data = await client.get({
      endpoint: 'eventschedule',
      queries: { orders: 'date', limit: 20 },
      customRequestInit: { cache: 'no-store' },
    });

    const now = new Date();

    const calculateDeadline = (displayDateStr: string) => {
      const match = displayDateStr.match(/(\d+)年(\d+)月(\d+)日/);
      if (!match) return null;
      
      const year = match[1];
      const month = match[2].padStart(2, '0');
      const day = match[3].padStart(2, '0');
      
      // JSTでのイベント当日0時
      const eventDate = new Date(`${year}-${month}-${day}T00:00:00+09:00`);
      
      // 24時間前（前日）を計算し、JSTでフォーマット
      const prevDay = new Date(eventDate.getTime() - 24 * 60 * 60 * 1000);
      const prevDayFormatted = new Intl.DateTimeFormat('ja-JP', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        timeZone: 'Asia/Tokyo'
      }).format(prevDay).replace(/\//g, '-');
      
      // 前日の21:00:00 JSTを期限とする
      return new Date(`${prevDayFormatted}T21:00:00+09:00`);
    };

    const formattedData = data.contents.map((item: any) => {
      let status = item.status?.length > 0 ? item.status[0] : "open";
      
      if (status === 'open') {
        const deadline = calculateDeadline(item.displayDate || "");
        if (deadline && now > deadline) {
          status = 'closed';
        }
      }

      return {
        id: item.id,
        title: item.title || "キャッシュフローゲーム体験会",
        date: item.displayDate,
        time: item.time,
        location: item.location,
        capacity: item.capacity,
        fee: item.fee,
        status: status,
      };
    });

    const sortedData = formattedData.sort((a: any, b: any) => {
      const getMs = (dateStr: string) => {
        if (!dateStr) return 0;
        const match = dateStr.match(/(\d+)年(\d+)月(\d+)日/);
        if (!match) return 0;
        return new Date(parseInt(match[1]), parseInt(match[2])-1, parseInt(match[3])).getTime();
      };
      return getMs(a.date) - getMs(b.date);
    });

    return sortedData;
  } catch (error) {
    console.error('Failed to fetch CFG schedule from MicroCMS:', error);
    return [];
  }
}
