import { NextResponse } from 'next/server';
import { client, getSessions } from '@/lib/microcms';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const hasDomain = !!process.env.MICROCMS_SERVICE_DOMAIN;
    const hasKey = !!process.env.MICROCMS_API_KEY;
    const hasClient = !!client;
    
    let sessions = null;
    let fetchError = null;
    
    let rawData = null;
    try {
      rawData = await client?.get({ endpoint: 'usstock' });
      sessions = await getSessions();
    } catch (e: any) {
      fetchError = e.message;
    }
    
    return NextResponse.json({
      env: { 
        hasDomain, 
        hasKey,
        domainPrefix: process.env.MICROCMS_SERVICE_DOMAIN ? process.env.MICROCMS_SERVICE_DOMAIN.substring(0, 3) : null
      },
      hasClient,
      sessionsCount: sessions ? sessions.length : 0,
      rawData,
      fetchError,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
