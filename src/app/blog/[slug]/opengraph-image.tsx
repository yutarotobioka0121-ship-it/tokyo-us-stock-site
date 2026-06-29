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
    return { title: slug, date: '' };
  }

  try {
    // Notion Database Query API を直接 fetch で呼び出す
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
      console.error('Notion API error:', response.status);
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
    console.error('Failed to fetch from Notion:', error);
    return { title: slug, date: '' };
  }
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { title, date } = await getPostTitleBySlug(slug);

  // Google Fonts の Noto Sans JP を CDN から取得（Edge Runtime 互換）
  let fontData: ArrayBuffer | null = null;
  try {
    // Google Fonts CSS API で Noto Sans JP Bold の URL を取得
    const cssResponse = await fetch(
      'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@700&display=swap',
      {
        headers: {
          // woff2 形式のフォントを取得するために User-Agent を指定
          'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
        },
      }
    );
    const cssText = await cssResponse.text();

    // CSS から woff2 の URL を抽出
    const fontUrlMatch = cssText.match(/src:\s*url\(([^)]+)\)/);
    if (fontUrlMatch?.[1]) {
      const fontResponse = await fetch(fontUrlMatch[1]);
      if (fontResponse.ok) {
        fontData = await fontResponse.arrayBuffer();
      }
    }
  } catch (error) {
    console.error('Failed to fetch font:', error);
  }

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
          fontFamily: fontData ? '"Noto Sans JP"' : 'sans-serif',
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
              textTransform: 'uppercase' as const,
            }}
          >
            TOKYO US STOCK CLUB / 投資コラム
          </div>
          <div
            style={{
              color: '#f8fafc',
              fontSize: title.length > 30 ? '44px' : '52px',
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
            <div style={{ color: '#94a3b8', fontSize: '20px' }}>著者：とびー</div>
            <div style={{ color: '#cbd5e1', fontSize: '22px', fontWeight: 600, marginTop: '6px' }}>
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
      fonts: fontData
        ? [
            {
              name: 'Noto Sans JP',
              data: fontData,
              style: 'normal' as const,
              weight: 700 as const,
            },
          ]
        : [],
    }
  );
}
