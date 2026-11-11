import { NextResponse } from 'next/server';
import { revalidatePath, revalidateTag } from 'next/cache';
import { getPosts } from '@/lib/notion';
import { BASE_URL, submitUrlsToIndexNow } from '@/lib/indexnow';

export const dynamic = 'force-dynamic';

function isAuthorizedCron(request: Request): boolean {
  const cronSecret = process.env.CRON_SECRET;
  if (!cronSecret) return false;
  const authHeader = request.headers.get('authorization');
  return authHeader === `Bearer ${cronSecret}`;
}

function parsePostPublishTimestampMs(dateStr: string): number {
  if (!dateStr) return 0;
  // Date-only string YYYY-MM-DD in Notion represents publication date in JST
  if (/^\d{4}-\d{2}-\d{2}$/.test(dateStr)) {
    return new Date(`${dateStr}T07:00:00+09:00`).getTime();
  }
  const t = new Date(dateStr).getTime();
  return Number.isFinite(t) ? t : 0;
}

export async function GET(request: Request) {
  if (!isAuthorizedCron(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { searchParams } = new URL(request.url);
    const sinceParam = searchParams.get('since');
    const hoursParam = Number(searchParams.get('hours'));
    const lookbackHours =
      Number.isFinite(hoursParam) && hoursParam > 0 ? hoursParam : 26;

    const nowMs = Date.now();
    let cutoffMs = nowMs - lookbackHours * 60 * 60 * 1000;

    if (sinceParam) {
      const parsedSince = /^\d{4}-\d{2}-\d{2}$/.test(sinceParam)
        ? new Date(`${sinceParam}T00:00:00+09:00`).getTime()
        : new Date(sinceParam).getTime();
      if (Number.isFinite(parsedSince) && parsedSince > 0) {
        cutoffMs = parsedSince;
      }
    }

    const posts = await getPosts();

    const recentPosts = posts.filter((post) => {
      const editedMs = post.lastEditedTime
        ? new Date(post.lastEditedTime).getTime()
        : 0;
      const createdMs = post.createdTime
        ? new Date(post.createdTime).getTime()
        : 0;
      const publishedMs = parsePostPublishTimestampMs(post.date);

      return (
        editedMs >= cutoffMs ||
        createdMs >= cutoffMs ||
        (publishedMs >= cutoffMs && publishedMs <= nowMs + 24 * 60 * 60 * 1000)
      );
    });

    const articleUrls = recentPosts.map(
      (post) => `${BASE_URL}/blog/${post.slug}`
    );
    const urlsToSubmit = [
      ...articleUrls,
      `${BASE_URL}/blog`,
      `${BASE_URL}/sitemap.xml`,
    ];

    try {
      revalidateTag('sitemap-posts', 'max');
      revalidatePath('/sitemap.xml');
      revalidatePath('/blog');
    } catch (revalErr) {
      console.warn('[IndexNow Daily] Revalidate warning:', revalErr);
    }

    const result = await submitUrlsToIndexNow(urlsToSubmit);

    console.log(
      `[IndexNow Daily] Matched ${recentPosts.length} articles, submitted ${result.submittedCount} URLs, IndexNow status: ${result.status}`
    );

    return NextResponse.json({
      success: result.ok,
      matchedArticlesCount: recentPosts.length,
      submittedCount: result.submittedCount,
      indexNowStatus: result.status,
      urls: result.urls,
    });
  } catch (error) {
    console.error('[IndexNow Daily] Error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  return GET(request);
}
