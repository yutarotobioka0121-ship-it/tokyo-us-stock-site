import { NextResponse } from 'next/server';
import { client, getSessions } from '@/lib/microcms';
import { isSessionDeadlinePassed, getSessionStartDateTime } from '@/lib/utils';

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
    const testSession = sessions?.find(s => s.id === 'cf4-6j886');
    const testDeadlinePassed = testSession ? isSessionDeadlinePassed(testSession) : null;
    const testStartDt = testSession ? getSessionStartDateTime(testSession.date, testSession.time || testSession.date) : null;

    return NextResponse.json({
      version: "v2-deadline-fix",
      testSession: {
        id: testSession?.id,
        type: testSession?.type,
        date: testSession?.date,
        startDt: testStartDt?.toISOString(),
        deadlinePassed: testDeadlinePassed,
        now: new Date().toISOString(),
      },
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
