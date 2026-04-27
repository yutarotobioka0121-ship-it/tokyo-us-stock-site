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
    
    try {
      sessions = await getSessions();
    } catch (e: any) {
      fetchError = e.message;
    }
    
    return NextResponse.json({
      env: { hasDomain, hasKey },
      hasClient,
      sessionsCount: sessions ? sessions.length : 0,
      fetchError,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
