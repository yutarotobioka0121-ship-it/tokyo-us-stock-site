import SeminarStickyBar from '@/components/SeminarStickyBar';
import { getNextSessionMap } from '@/lib/next-seminar';

// /blog 配下の共通レイアウト：記事ページ（/blog/[slug]）でスマホ用のセミナー固定バーを出す
// （表示するページの判定は SeminarStickyBar 側で行う。一覧ページには出さない）
export default async function BlogLayout({ children }: { children: React.ReactNode }) {
  const nextMap = await getNextSessionMap();
  return (
    <>
      {children}
      <SeminarStickyBar nextMap={nextMap} />
    </>
  );
}
