import { NextResponse } from 'next/server';
import { revalidatePath, revalidateTag } from 'next/cache';
import { submitUrlsToIndexNow } from '@/lib/indexnow';

export const dynamic = 'force-dynamic';

function isAuthorizedAdmin(request: Request): boolean {
  const adminSecret = process.env.INDEXNOW_ADMIN_SECRET;
  if (!adminSecret) return false;
  const authHeader = request.headers.get('authorization');
  return authHeader === `Bearer ${adminSecret}`;
}

export async function POST(request: Request) {
  if (!isAuthorizedAdmin(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const body = await request.json().catch(() => null);
    const rawUrls: unknown[] = Array.isArray(body)
      ? body
      : body && Array.isArray(body.urls)
        ? body.urls
        : [];

    const stringUrls = rawUrls.filter(
      (item): item is string => typeof item === 'string' && item.trim().length > 0
    );

    if (stringUrls.length === 0) {
      return NextResponse.json(
        { error: 'urls array is required' },
        { status: 400 }
      );
    }

    try {
      revalidateTag('sitemap-posts', 'max');
      revalidatePath('/sitemap.xml');
      revalidatePath('/blog');
    } catch (revalErr) {
      console.warn('[IndexNow Submit] Revalidate warning:', revalErr);
    }

    const result = await submitUrlsToIndexNow(stringUrls);

    console.log(
      `[IndexNow Submit] Submitted ${result.submittedCount} URLs, IndexNow status: ${result.status}`
    );

    return NextResponse.json({
      success: result.ok,
      submittedCount: result.submittedCount,
      indexNowStatus: result.status,
      urls: result.urls,
    });
  } catch (error) {
    console.error('[IndexNow Submit] Error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
}
