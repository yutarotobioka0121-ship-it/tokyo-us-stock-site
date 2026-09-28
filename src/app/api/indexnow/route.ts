import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const urlToSubmit = searchParams.get('url');

  if (!urlToSubmit) {
    return NextResponse.json({ error: 'URL parameter is required' }, { status: 400 });
  }

  const key = '8782a225c50c4bb7a33edb2ff82ff2b0';
  const indexNowUrl = `https://api.indexnow.org/indexnow?url=${encodeURIComponent(urlToSubmit)}&key=${key}`;

  try {
    const res = await fetch(indexNowUrl, {
      method: 'GET',
    });

    if (res.ok) {
      return NextResponse.json({ success: true, message: `Submitted ${urlToSubmit} to IndexNow successfully.` });
    } else {
      return NextResponse.json({ success: false, error: `IndexNow API returned ${res.status}` }, { status: res.status });
    }
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to submit to IndexNow' }, { status: 500 });
  }
}
