export const INDEXNOW_HOST = 'www.tokyo-us-stock.com';
export const BASE_URL = `https://${INDEXNOW_HOST}`;
export const DEFAULT_INDEXNOW_KEY = '8782a225c50c4bb7a33edb2ff82ff2b0';

export function getIndexNowKey(): string {
  return process.env.INDEXNOW_KEY || DEFAULT_INDEXNOW_KEY;
}

export function normalizeSiteUrl(raw: string): string | null {
  const trimmed = raw.trim();
  if (!trimmed) return null;

  if (trimmed.startsWith('/')) {
    return `${BASE_URL}${trimmed}`;
  }

  try {
    const parsed = new URL(trimmed);
    if (
      parsed.hostname === INDEXNOW_HOST ||
      parsed.hostname === 'tokyo-us-stock.com'
    ) {
      parsed.protocol = 'https:';
      parsed.hostname = INDEXNOW_HOST;
      return parsed.toString();
    }
    return null;
  } catch {
    return null;
  }
}

export async function submitUrlsToIndexNow(rawUrls: string[]): Promise<{
  ok: boolean;
  status: number;
  submittedCount: number;
  urls: string[];
}> {
  const seen = new Set<string>();
  const urlList: string[] = [];

  for (const raw of rawUrls) {
    if (typeof raw !== 'string') continue;
    const normalized = normalizeSiteUrl(raw);
    if (normalized && !seen.has(normalized)) {
      seen.add(normalized);
      urlList.push(normalized);
    }
  }

  if (urlList.length === 0) {
    console.log('[IndexNow] No valid URLs to submit (count: 0)');
    return {
      ok: true,
      status: 200,
      submittedCount: 0,
      urls: [],
    };
  }

  const key = getIndexNowKey();
  const keyLocation = `${BASE_URL}/${key}.txt`;

  const response = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
    body: JSON.stringify({
      host: INDEXNOW_HOST,
      key,
      keyLocation,
      urlList,
    }),
  });

  console.log(
    `[IndexNow] Submitted ${urlList.length} URLs to IndexNow, status: ${response.status}`
  );

  return {
    ok: response.ok,
    status: response.status,
    submittedCount: urlList.length,
    urls: urlList,
  };
}
