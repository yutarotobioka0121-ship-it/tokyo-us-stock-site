import { getSessions } from "@/lib/microcms";
import { formatSessionDate, formatSessionTime } from "@/lib/utils";

export default async function ApplyPage({ 
  searchParams 
}: { 
  searchParams: Promise<{ session?: string }> 
}) {
  const { session: selectedSessionId } = await searchParams;
  const allSessions = await getSessions();
  
  // 募集中、かつ満席でないセッションのみを表示（または全て表示してステータスを表示）
  const availableSessions = allSessions.filter(s => {
    const status = Array.isArray(s.status) ? s.status[0] : s.status;
    return status === 'open';
  });

  return (
    <div className="apply-page">
      <section className="form-section">
        <div className="container">
          <div className="form-container glass-card">
            <span className="section-tag">APPLICATION</span>
            <h1 className="section-title">勉強会申し込み</h1>
            <p className="about-desc">
              現在募集中の勉強会への参加申し込みはこちらから承っております。
            </p>

            <form name="apply" method="POST" data-netlify="true" className="apply-form">
              <input type="hidden" name="form-name" value="apply" />
              
              <div className="form-group">
                <label htmlFor="event" className="form-label">参加希望の日程</label>
                <select 
                  id="event" 
                  name="event" 
                  required 
                  className="form-select"
                  defaultValue={selectedSessionId || ""}
                >
                  <option value="">日程を選択してください</option>
                  {availableSessions.map((session) => {
                    const type = Array.isArray(session.type) ? session.type[0] : session.type;
                    const isOffline = type !== 'online' && type !== 'オンライン';
                    return (
                      <option key={session.id} value={session.id}>
                        {formatSessionDate(session.date)} {formatSessionTime(session.date)}〜
                        {isOffline && session.location ? ` (${session.location}付近)` : ''}
                        {isOffline ? ' [対面]' : ' [オンライン]'}
                      </option>
                    );
                  })}
                  <option value="other">その他（メッセージ欄に詳細をご記入ください）</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="name" className="form-label">お名前</label>
                <input type="text" id="name" name="name" required className="form-input" placeholder="山田 太郎" />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">メールアドレス</label>
                <input type="email" id="email" name="email" required className="form-input" placeholder="example@mail.com" />
              </div>

              <div className="form-group">
                <label htmlFor="reason" className="form-label">参加動機・期待すること</label>
                <textarea id="message" name="message" className="form-textarea" placeholder="この勉強会で学びたいことなどを自由にご記入ください"></textarea>
              </div>

              <button type="submit" className="btn btn-primary form-submit">
                申し込みを確定する
              </button>
              
              <p className="form-helper">
                ※申し込み後、詳細をメールにてお送りいたします。<br />
                ドメイン指定受信などの設定をご確認ください。
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
