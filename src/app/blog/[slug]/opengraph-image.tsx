import { ImageResponse } from 'next/og';
import { getPostBySlug } from '@/lib/notion';

export const runtime = 'edge';
export const alt = '東京米国株クラブ';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  const title = post?.title || '記事';

  // Noto Sans JP のフォントファイルを GitHub から動的にフェッチして適用
  let fontData: ArrayBuffer;
  try {
    fontData = await fetch(
      new URL('https://raw.githubusercontent.com/googlefonts/noto-fonts/master/hinted/ttf/NotoSansJP/NotoSansJP-Bold.ttf')
    ).then((res) => {
      if (!res.ok) throw new Error('Font fetch failed');
      return res.arrayBuffer();
    });
  } catch (error) {
    console.error('Failed to fetch font, falling back to empty font buffer', error);
    fontData = new ArrayBuffer(0);
  }

  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          padding: '80px',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              color: '#38bdf8',
              fontSize: '28px',
              fontWeight: 700,
              letterSpacing: '2px',
              marginBottom: '32px',
            }}
          >
            TOKYO US STOCK CLUB / 投資コラム
          </div>
          <div
            style={{
              color: '#f8fafc',
              fontSize: '56px',
              fontWeight: 700,
              lineHeight: 1.4,
              maxWidth: '1000px',
            }}
          >
            {title}
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            borderTop: '2px solid rgba(255, 255, 255, 0.1)',
            paddingTop: '32px',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ color: '#94a3b8', fontSize: '20px' }}>著者：とびー</div>
            <div style={{ color: '#cbd5e1', fontSize: '22px', fontWeight: 600, marginTop: '8px' }}>東京米国株クラブ</div>
          </div>
          {post?.date && (
            <div style={{ color: '#64748b', fontSize: '20px' }}>
              {post.date}
            </div>
          )}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: fontData.byteLength > 0 ? [
        {
          name: 'Noto Sans JP',
          data: fontData,
          style: 'normal',
          weight: 700,
        },
      ] : [],
    }
  );
}
