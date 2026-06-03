import { getSessions } from "@/lib/microcms";
import ApplyForm from "@/components/ApplyForm";

export const dynamic = 'force-dynamic';

export default async function ApplyPage({ 
  searchParams 
}: { 
  searchParams: Promise<{ session?: string }> 
}) {
  const { session: selectedSessionId } = await searchParams;
  const allSessions = await getSessions();
  
  // 募集中、かつ満席でないセッションのみを表示
  const availableSessions = allSessions.filter(s => {
    const status = Array.isArray(s.status) ? s.status[0] : s.status;
    return status === 'open';
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
