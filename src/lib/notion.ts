import { Client, isNotionClientError } from '@notionhq/client';
import { cache } from 'react';

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

const DATABASE_ID = process.env.NOTION_DATABASE_ID;

/**
 * 429 Rate Limit Error などの際に再試行するヘルパー関数
 */
async function fetchWithRetry<T>(operation: () => Promise<T>, maxRetries = 3): Promise<T> {
  let attempt = 0;
  let waitTime = 350; // 初期待機時間 (ms)

  while (attempt < maxRetries) {
    try {
      return await operation();
    } catch (error) {
      if (
        isNotionClientError(error) &&
        error.code === 'rate_limited' // Notion SDK uses 'rate_limited' for 429
      ) {
        attempt++;
        console.warn(`Notion API rate limited. Retrying ${attempt}/${maxRetries} after ${waitTime}ms...`);
        await new Promise((resolve) => setTimeout(resolve, waitTime));
        waitTime *= 2; // 指数バックオフ
      } else {
        throw error;
      }
    }
  }
  // maxRetries回失敗したら最後の試行としてもう1度実行し、ダメならエラーを投げる
  return await operation();
}

// 特定のNotion Page IDに対して、指定したSEOフレンドリーなスラッグを強制するマッピング
// Notion側でSlugが一括変更されたため現在は空。今後新たなマッピングが必要になった場合に使用。
export const SLUG_MAP: Record<string, string> = {
  // Notion側でSlugが未変更の記事に対して、SEOフレンドリーなスラッグを強制する
  '369e9ee8-b70b-80c5-af6d-df84d33f1adf': 'rich-vs-poor-kiyosaki',       // richorpoor → rich-vs-poor-kiyosaki
  '34ae9ee8-b70b-8033-94d8-dc931024f54e': 'money-management-tips',       // Money-tips → money-management-tips
};

// SEOフレンドリースラッグからNotion Page IDへの逆引きマッピング（直接取得用）
// Notion側でSlugが一括変更されたため現在は空。今後新たなマッピングが必要になった場合に使用。
export const REVERSE_SLUG_MAP: Record<string, string> = {
  'rich-vs-poor-kiyosaki': '369e9ee8-b70b-80c5-af6d-df84d33f1adf',
  'money-management-tips': '34ae9ee8-b70b-8033-94d8-dc931024f54e',
};

export async function getPosts() {
  if (!DATABASE_ID) {
    console.warn('Notion Database ID is not configured.');
    return [];
  }

  try {
    const results = [];
    let cursor: string | undefined = undefined;
    let hasMore = true;

    while (hasMore) {
      const response = await fetchWithRetry(() =>
        notion.databases.query({
          database_id: DATABASE_ID,
          start_cursor: cursor,
          page_size: 100,
          filter: {
            property: 'Published',
            checkbox: {
              equals: true,
            },
          },
          sorts: [
            {
              property: 'Date',
              direction: 'descending',
            },
          ],
        })
      );
      results.push(...response.results);
      hasMore = response.has_more;
      cursor = response.next_cursor ?? undefined;
    }

    if (results.length === 100) {
      console.warn('WARNING: Exactly 100 posts fetched! Pagination might have failed, or it is exactly 100.');
    }
    console.log('Fetched ' + results.length + ' posts from Notion');

    return results.map((page: any) => {
      const props = page.properties;
      const rawSlug = props.Slug?.rich_text?.[0]?.plain_text || page.id;
      const mappedSlug = SLUG_MAP[page.id] || rawSlug;

      return {
        id: page.id,
        title: props.Title?.title?.[0]?.plain_text || 'Untitled',
        slug: mappedSlug,
        date: props.Date?.date?.start || '',
        summary: props.Summary?.rich_text?.[0]?.plain_text || '',
        cover: page.cover?.external?.url || page.cover?.file?.url || null,
      };
    });
  } catch (error) {
    console.error('Failed to fetch posts from Notion:', error);
    return [];
  }
}

export const getPostBySlug = cache(async (slug: string) => {
  if (!DATABASE_ID) return null;

  // URLエンコードされている可能性があるのでデコードし、日本語の正規化も行う
  const decodedSlug = decodeURIComponent(slug).normalize().trim();
  console.log('--- getPostBySlug DEBUG ---');
  console.log('Original slug:', slug);
  console.log('Decoded slug:', decodedSlug);

  let page;

  // 1. マップに存在するかチェックし、存在すれば直接 ID で取得
  const targetPageId = REVERSE_SLUG_MAP[decodedSlug];
  if (targetPageId) {
    try {
      console.log('Slug matched override map, retrieving by Page ID:', targetPageId);
      page = await notion.pages.retrieve({ page_id: targetPageId });
    } catch (e) {
      console.warn('Direct ID retrieval from map failed:', targetPageId);
    }
  }

  if (!page) {
    // 2. Query Notion directly filtering by Slug property
    const response = await fetchWithRetry(() =>
      notion.databases.query({
        database_id: DATABASE_ID,
        filter: {
          property: 'Slug',
          rich_text: {
            equals: decodedSlug
          }
        }
      })
    );
    
    if (response.results.length > 0) {
      page = response.results[0];
    } else {
      // For fallback or old slugs mapped via SLUG_MAP, we might need a full search,
      // but since REVERSE_SLUG_MAP handles overriding, we can just stop here.
    }
  }

  // 3. それでも見つからない場合、かつslugがUUID形式の場合のみID検索を試みる
  if (!page) {
    console.log('Slug match failed, trying ID match...');
    const uuidPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    const shortIdPattern = /^[0-9a-f]{32}$/i;

    if (uuidPattern.test(decodedSlug) || shortIdPattern.test(decodedSlug)) {
      try {
        page = await notion.pages.retrieve({ page_id: decodedSlug });
      } catch (e) {
        console.warn('ID retrieval failed:', decodedSlug);
        return null;
      }
    }
  }

  if (!page || !('properties' in page)) {
    console.warn('No page found for slug/id:', decodedSlug);
    return null;
  }

  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  const blocks: any[] = [];
  let hasMore = true;
  let cursor: string | undefined = undefined;

  while (hasMore) {
    const response = await fetchWithRetry(() =>
      notion.blocks.children.list({
        block_id: page.id,
        start_cursor: cursor,
      })
    );
    blocks.push(...response.results);
    hasMore = response.has_more;
    cursor = response.next_cursor ?? undefined;
  }

  const props = (page as any).properties;

  return {
    id: page.id,
    title: props.Title?.title?.[0]?.plain_text || 'Untitled',
    date: props.Date?.date?.start || '',
    summary: props.Summary?.rich_text?.[0]?.plain_text || '',
    cover: (page as any).cover?.external?.url || (page as any).cover?.file?.url || null,
    content: blocks,
  };
});

export async function addCustomerToNotion(data: {
  name: string;
  email: string;
  type: string;
  subject: string;
  message: string;
}) {
  const CUSTOMER_DB_ID = process.env.NOTION_CUSTOMER_DB_ID || process.env.NOTION_DATABASE_ID;
  if (!CUSTOMER_DB_ID) {
    console.warn('NOTION_CUSTOMER_DB_ID or NOTION_DATABASE_ID is not configured. Customer will not be saved to Notion.');
    return null;
  }

  try {
    const response = await notion.pages.create({
      parent: { database_id: CUSTOMER_DB_ID },
      properties: {
        'お名前': {
          title: [
            {
              text: {
                content: data.name,
              },
            },
          ],
        },
        'メールアドレス': {
          email: data.email,
        },
        '種別': {
          select: {
            name: data.type,
          },
        },
        '希望日程・件名': {
          rich_text: [
            {
              text: {
                content: data.subject,
              },
            },
          ],
        },
        'メッセージ': {
          rich_text: [
            {
              text: {
                content: data.message.substring(0, 2000), // Notion has a 2000 char limit per text block
              },
            },
          ],
        },
      },
    });
    return response;
  } catch (error) {
    console.error('Failed to add customer to Notion:', error);
    return null;
  }
}
