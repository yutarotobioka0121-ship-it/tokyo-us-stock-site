import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = '東京米国株クラブ';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

// Edge Runtime では @notionhq/client が使えないため、fetch API で直接 Notion を叩く
async function getPostTitleBySlug(slug: string): Promise<{ title: string; date: string }> {
  const NOTION_TOKEN = process.env.NOTION_TOKEN;
  const DATABASE_ID = process.env.NOTION_DATABASE_ID;

  if (!NOTION_TOKEN || !DATABASE_ID) {
    console.error('OGP: Missing env vars', { NOTION_TOKEN: !!NOTION_TOKEN, DATABASE_ID: !!DATABASE_ID });
    return { title: slug, date: '' };
  }

  try {
    const response = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${NOTION_TOKEN}`,
        'Notion-Version': '2022-06-28',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        filter: {
          property: 'Slug',
          rich_text: {
            equals: slug,
          },
        },
        page_size: 1,
      }),
    });

    if (!response.ok) {
      console.error('OGP: Notion API error:', response.status, await response.text());
      return { title: slug, date: '' };
    }

    const data = await response.json();
    const page = data.results?.[0];

    if (!page) {
      return { title: slug, date: '' };
    }

    const title = page.properties?.Title?.title?.[0]?.plain_text || slug;
    const date = page.properties?.Date?.date?.start || '';
    return { title, date };
  } catch (error) {
    console.error('OGP: Failed to fetch from Notion:', error);
    return { title: slug, date: '' };
  }
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  try {
    const { slug } = await params;
    const { title, date } = await getPostTitleBySlug(slug);

    // タイトルの長さに応じてフォントサイズを調整
    const fontSize = title.length > 40 ? 40 : title.length > 25 ? 48 : 56;

    return new ImageResponse(
      (
        <div
          style={{
            background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #312e81 100%)',
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            padding: '80px',
          }}
        >
          {/* 上部：カテゴリラベル＋タイトル */}
          <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '1040px' }}>
            <div
              style={{
                color: '#38bdf8',
                fontSize: '26px',
                fontWeight: 700,
                letterSpacing: '2px',
                marginBottom: '28px',
              }}
            >
              TOKYO US STOCK CLUB
            </div>
            <div
              style={{
                color: '#f8fafc',
                fontSize: `${fontSize}px`,
                fontWeight: 700,
                lineHeight: 1.4,
                display: 'flex',
                flexWrap: 'wrap',
              }}
            >
              {title}
            </div>
          </div>

          {/* 下部：著者情報＋日付 */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              borderTop: '2px solid rgba(255, 255, 255, 0.12)',
              paddingTop: '28px',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ color: '#cbd5e1', fontSize: '22px', fontWeight: 600 }}>
                東京米国株クラブ
              </div>
            </div>
            {date && (
              <div style={{ color: '#64748b', fontSize: '20px' }}>
                {date}
              </div>
            )}
          </div>
        </div>
      ),
      {
        ...size,
      }
    );
  } catch (error) {
    console.error('OGP: ImageResponse generation failed:', error);
    // エラー時はシンプルなフォールバック画像を返す
    return new ImageResponse(
      (
        <div
          style={{
            background: '#0f172a',
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div style={{ color: '#f8fafc', fontSize: '48px', fontWeight: 700 }}>
            東京米国株クラブ
          </div>
        </div>
      ),
      {
        ...size,
      }
    );
  }
}
