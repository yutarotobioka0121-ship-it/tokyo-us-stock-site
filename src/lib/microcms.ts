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
      const year = parseInt(match[1], 10);
      const month = parseInt(match[2], 10) - 1;
      const day = parseInt(match[3], 10);
      return new Date(year, month, day - 1, 21, 0, 0);
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

    return formattedData;
  } catch (error) {
    console.error('Failed to fetch CFG schedule from MicroCMS:', error);
    return [];
  }
}
