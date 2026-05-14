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
