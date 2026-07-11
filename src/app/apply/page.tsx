import { Metadata } from 'next';
import { getSessions } from "@/lib/microcms";
import ApplyForm from "@/components/ApplyForm";
import { isSessionDeadlinePassed } from "@/lib/utils";

export const metadata: Metadata = {
  title: '勉強会お申し込み | 東京米国株クラブ',
  description: '東京米国株クラブが開催する初心者向け米国株投資勉強会への参加お申し込みページ。少人数制（定員4名）のため、日程を選んでお早めにお申し込みください。',
  alternates: {
    canonical: 'https://www.tokyo-us-stock.com/apply',
  },
};

export const dynamic = 'force-dynamic';

export default async function ApplyPage({ 
  searchParams 
}: { 
  searchParams: Promise<{ session?: string }> 
}) {
  const { session: selectedSessionId } = await searchParams;
  const allSessions = await getSessions();
  
  // 募集中、満席でない、かつ申し込み締め切り前のセッションのみを表示
  const now = new Date();
  const availableSessions = allSessions.filter(s => {
    const status = Array.isArray(s.status) ? s.status[0] : s.status;
    if (status !== 'open') return false;

    // 申し込み締め切りが過ぎていないか判定
    return !isSessionDeadlinePassed(s, now);
  });

  return (
    <div className="apply-page">
      <section className="form-section">
        <div className="container">
          <div className="form-container glass-card">
            <h1 className="section-title">勉強会申し込み</h1>
            <p className="about-desc">
              現在募集中の勉強会への参加申し込みはこちらから承っております。
            </p>

            <ApplyForm sessions={availableSessions} selectedSessionId={selectedSessionId} />
          </div>
        </div>
      </section>
    </div>
  );
}
