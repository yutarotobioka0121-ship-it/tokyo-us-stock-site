import { Client } from '@notionhq/client';
import { cache } from 'react';

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

const DATABASE_ID = process.env.NOTION_DATABASE_ID;

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
    const response = await notion.databases.query({
      database_id: DATABASE_ID,
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
    });

    return response.results.map((page: any) => {
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

  // 2. マップで見つからない場合は通常通り全件からSlugで検索
  if (!page) {
    const response = await notion.databases.query({
      database_id: DATABASE_ID,
    });

    page = response.results.find((p: any) => {
      const s = p.properties.Slug?.rich_text?.[0]?.plain_text;
      if (!s) return false;
      const normalizedS = s.normalize().trim();
      
      // Notion側の元々のSlugを、SLUG_MAPで変換された値と比較できるように考慮
      const mappedS = SLUG_MAP[p.id] || normalizedS;
      return mappedS === decodedSlug;
    });
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
    const response = await notion.blocks.children.list({
      block_id: page.id,
      start_cursor: cursor,
    });
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
  seminarType?: string;
  subject: string;
  message: string;
}) {
  const CUSTOMER_DB_ID = process.env.NOTION_CUSTOMER_DB_ID;
  if (!CUSTOMER_DB_ID) {
    console.warn('NOTION_CUSTOMER_DB_ID is not configured. Customer will not be saved to Notion.');
    return null;
  }

  const seminarTypeValue = data.seminarType || data.type;

  const baseProperties: Record<string, any> = {
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
  };

  // 勉強会の種別プロパティを含めた登録を試行
  try {
    const response = await notion.pages.create({
      parent: { database_id: CUSTOMER_DB_ID },
      properties: {
        ...baseProperties,
        '勉強会の種別': {
          select: {
            name: seminarTypeValue,
          },
        },
      },
    });
    return response;
  } catch (error) {
    // もしNotion DBに「勉強会の種別」プロパティが作成されていない場合、ベースプロパティのみで登録
    console.warn('Failed with "勉強会の種別" property, falling back to base properties:', error);
    try {
      const fallbackResponse = await notion.pages.create({
        parent: { database_id: CUSTOMER_DB_ID },
        properties: baseProperties,
      });
      return fallbackResponse;
    } catch (fallbackError) {
      console.error('Failed to add customer to Notion:', fallbackError);
      return null;
    }
  }
}
