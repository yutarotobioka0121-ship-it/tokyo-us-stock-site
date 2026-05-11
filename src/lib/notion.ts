import { Client } from '@notionhq/client';

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

const DATABASE_ID = process.env.NOTION_DATABASE_ID;

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
      return {
        id: page.id,
        title: props.Title?.title?.[0]?.plain_text || 'Untitled',
        slug: props.Slug?.rich_text?.[0]?.plain_text || page.id,
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

export async function getPostBySlug(slug: string) {
  if (!DATABASE_ID) return null;

  // URLエンコードされている可能性があるのでデコードし、日本語の正規化も行う
  const decodedSlug = decodeURIComponent(slug).normalize().trim();
  console.log('--- getPostBySlug DEBUG ---');
  console.log('Original slug:', slug);
  console.log('Decoded slug:', decodedSlug);

  let page;

  // 1. データベース全件からSlugで検索（正規化して比較）
  const response = await notion.databases.query({
    database_id: DATABASE_ID,
  });

  page = response.results.find((p: any) => {
    const s = p.properties.Slug?.rich_text?.[0]?.plain_text;
    if (!s) return false;
    const normalizedS = s.normalize().trim();
    return normalizedS === decodedSlug;
  });

  // 2. Slugで見つからない場合、かつslugがUUID形式の場合のみID検索を試みる
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
    cover: (page as any).cover?.external?.url || (page as any).cover?.file?.url || null,
    content: blocks,
  };
}
