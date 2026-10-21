import SeminarStickyBar from '@/components/SeminarStickyBar';
import { getNextSessionMap } from '@/lib/next-seminar';

// /knowledge 配下の共通レイアウト：スマホ用のセミナー固定バーを出す
export default async function KnowledgeLayout({ children }: { children: React.ReactNode }) {
  const nextMap = await getNextSessionMap();
  return (
    <>
      {children}
      <SeminarStickyBar nextMap={nextMap} />
    </>
  );
}
