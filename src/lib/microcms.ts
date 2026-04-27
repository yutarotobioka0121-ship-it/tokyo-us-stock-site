import { createClient } from 'microcms-js-sdk';

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
  throw new Error('MICROCMS_SERVICE_DOMAIN is required');
}

if (!process.env.MICROCMS_API_KEY) {
  throw new Error('MICROCMS_API_KEY is required');
}

export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
});

export interface StudySession {
  id: string;
  date: string;       // ISO string from Date/Time field
  time: string;       // ISO string from Date/Time field
  type: string | string[];
  status: string | string[];
  location?: string;  // Approximate station name for offline sessions
  isFeatured?: boolean;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
}

export async function getSessions() {
  const data = await client.get({
    endpoint: 'usstock',
    queries: { orders: '-publishedAt' },
  });
  
  return data.contents as StudySession[];
}
