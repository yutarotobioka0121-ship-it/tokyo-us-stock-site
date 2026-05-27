import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, MapPin, MessageCircle, HelpCircle, Users, Target, BookOpen, Coffee, Zap, PieChart, ShieldCheck } from "lucide-react";
import { getSessions } from "@/lib/microcms";
import { formatSessionDate, formatSessionTime, getSessionStartDateTime } from "@/lib/utils";

export const dynamic = 'force-dynamic';

function formatSessionTimeRange(timeStr: string) {
  if (!timeStr) return '';
  
  let startHour = 0;
  let startMinute = 0;

  if (/^\d{2}:\d{2}$/.test(timeStr)) {
    const parts = timeStr.split(':');
    startHour = parseInt(parts[0], 10);
    startMinute = parseInt(parts[1], 10);
  } else {
    try {
      const dateObj = new Date(timeStr);
      if (isNaN(dateObj.getTime())) return timeStr;
      
      const formatted = new Intl.DateTimeFormat('ja-JP', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
        timeZone: 'Asia/Tokyo',
      }).format(dateObj);
      const parts = formatted.split(':');
      startHour = parseInt(parts[0], 10);
      startMinute = parseInt(parts[1], 10);
    } catch (e) {
      return timeStr;
    }
  }

  const endHour = (startHour + 1) % 24;
  const pad = (num: number) => num.toString().padStart(2, '0');
  
  return `${pad(startHour)}:${pad(startMinute)}〜${pad(endHour)}:${pad(startMinute)}`;
}

export default async function SeminarPage() {
  const sessions = await getSessions();
  const sortedSessions = [...sessions].sort((a, b) => {
    return new Date(a.date).getTime() - new Date(b.date).getTime();
  });

  return (
    <div className="seminar-page" style={{ overflowWrap: 'break-word' }}>
      {/* Hero Section */}
      <section className="seminar-hero" style={{ background: 'var(--bg-warm)', padding: '120px 0 60px', textAlign: 'left' }}>
        <div className="container">
          <span className="section-tag" style={{ display: 'inline-block', textAlign: 'left' }}>
            <span className="sr-only">初心者向け米国株投資勉強会：</span>
            BEGINNER'S SEMINAR
          </span>
          <h1 className="post-title" style={{ marginBottom: '1.5rem', fontSize: 'clamp(1.5rem, 6vw, 2.8rem)', textAlign: 'left', lineHeight: '1.3' }}>
            <span className="segment">初心者から基礎を学ぶ、</span>
            <span className="segment">一生モノの米国株 投資勉強会</span>
          </h1>
          <p className="hero-subtitle" style={{ maxWidth: '600px', marginBottom: '3rem', color: 'var(--text-muted)', textAlign: 'left', fontSize: 'clamp(0.95rem, 3.5vw, 1.1rem)' }}>
            <span className="segment">カフェでお茶を飲むようにリラックスした雰囲気で、</span>
            <span className="segment">投資の「わからない」を「わかった」に変えませんか？</span>
          </p>
          <div className="seminar-hero-image" style={{ borderRadius: '24px', overflow: 'hidden', boxShadow: 'var(--shadow-soft)', maxWidth: '800px', margin: '0 auto', aspectRatio: '16/9', position: 'relative' }}>
            <Image
              src="/workshop.png"
              alt="勉強会の様子"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="section-padding schedule-section" style={{ background: 'white' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag" style={{ fontSize: '1.1rem', letterSpacing: '1px' }}>初心者向け米国株式投資 勉強会</span>
            <h2 className="section-title">開催スケジュール</h2>
            <p className="section-subtitle">
              次回の開催日程はこちらです。<br className="sp-hide" />少人数制のため、お早めにお申し込みください。
            </p>
          </div>

          {/* Desktop schedule table */}
          <div className="schedule-table-container schedule-desktop-only" style={{ width: '100%', overflowX: 'auto', WebkitOverflowScrolling: 'touch', paddingBottom: '1rem' }}>
            <table className="schedule-table" style={{ width: '100%', minWidth: '700px', borderCollapse: 'collapse', textAlign: 'center', background: 'white', borderRadius: '16px', overflow: 'hidden', boxShadow: 'var(--shadow-soft)', margin: '0 auto' }}>
              <thead style={{ background: 'var(--primary)', color: 'white' }}>
                <tr>
                  <th style={{ padding: '1.2rem 0.5rem', fontWeight: '800' }}>開催日</th>
                  <th style={{ padding: '1.2rem 0.5rem', fontWeight: '800' }}>開催時間</th>
                  <th style={{ padding: '1.2rem 0.5rem', fontWeight: '800' }}>開催形式</th>
                  <th style={{ padding: '1.2rem 0.5rem', fontWeight: '800' }}>開催場所</th>
                  <th style={{ padding: '1.2rem 0.5rem', fontWeight: '800' }}>参加費</th>
                  <th style={{ padding: '1.2rem 0.5rem', fontWeight: '800' }}>お申し込み</th>
                </tr>
              </thead>
              <tbody>
                {sortedSessions && sortedSessions.length > 0 ? (
                  sortedSessions.map((session, index) => {
                    const status = Array.isArray(session.status) ? session.status[0] : session.status;
                    const type = Array.isArray(session.type) ? session.type[0] : session.type;
                    const formattedDate = formatSessionDate(session.date);
                    const formattedTime = formatSessionTimeRange(session.time || session.date);
                    
                    const now = new Date();
                    const startDateTime = getSessionStartDateTime(session.date, session.time || session.date);
                    const isPast = startDateTime < now;

                    // 申込期限判定
                    let isDeadlinePassed = false;
                    if (type === 'online' || type === 'オンライン') {
                      // オンライン：開催時間の1時間前まで
                      const deadline = new Date(startDateTime.getTime() - 60 * 60 * 1000);
                      isDeadlinePassed = now > deadline;
                    } else {
                      // 対面：開催日前日の21時まで
                      const prevDay = new Date(startDateTime.getTime() - 24 * 60 * 60 * 1000);
                      const prevDayFormatted = new Intl.DateTimeFormat('ja-JP', {
                        year: 'numeric',
                        month: '2-digit',
                        day: '2-digit',
                        timeZone: 'Asia/Tokyo'
                      }).format(prevDay).replace(/\//g, '-');
                      const deadline = new Date(`${prevDayFormatted}T21:00:00+09:00`);
                      isDeadlinePassed = now > deadline;
                    }

                    const isFull = status === 'full' || status === '満席';
                    const isEnded = isPast || status === '受付終了' || isDeadlinePassed;

                    return (
                      <tr key={session.id} style={{ borderBottom: index === sortedSessions.length - 1 ? 'none' : '1px solid var(--border)', background: isPast ? '#f9fafb' : 'white', opacity: isPast ? 0.6 : 1 }}>
                        <td style={{ padding: '1.2rem 0.5rem', fontWeight: '800', color: 'var(--primary-dark)', wordBreak: 'keep-all' }}>{formattedDate}</td>
                        <td style={{ padding: '1.2rem 0.5rem', fontWeight: '700', wordBreak: 'keep-all' }}>{formattedTime}</td>
                        <td style={{ padding: '1.2rem 0.5rem' }}>
                          <span className="badge badge-type" style={{ fontSize: '0.85rem', padding: '0.3rem 0.8rem', wordBreak: 'keep-all', background: type === 'online' || type === 'オンライン' ? 'var(--bg-warm)' : 'var(--primary)', color: type === 'online' || type === 'オンライン' ? 'var(--text-main)' : 'white' }}>
                            {type === 'online' || type === 'オンライン' ? 'オンライン' : '対面開催'}
                          </span>
                        </td>
                        <td style={{ padding: '1.2rem 0.5rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                          {type === 'online' || type === 'オンライン' ? 'Zoom (URL別途案内)' : `${session.location || '都内近郊'}`}
                        </td>
                        <td style={{ padding: '1.2rem 0.5rem', fontWeight: '800', color: 'var(--primary)' }}>無料</td>
                        <td style={{ padding: '1.2rem 0.5rem' }}>
                          {isEnded ? (
                            <button disabled className="btn btn-outline cursor-not-allowed" style={{ width: '100%', padding: '0.6rem 1rem', fontSize: '0.9rem', background: '#f3f4f6', color: '#9ca3af', borderColor: '#d1d5db', whiteSpace: 'nowrap' }}>
                              受付終了
                            </button>
                          ) : isFull ? (
                            <button disabled className="btn btn-outline cursor-not-allowed" style={{ width: '100%', padding: '0.6rem 1rem', fontSize: '0.9rem', opacity: 0.5, whiteSpace: 'nowrap' }}>
                              満席
                            </button>
                          ) : (
                            <Link href={`/apply?session=${session.id}`} className="btn btn-primary" style={{ width: '100%', padding: '0.6rem 1rem', fontSize: '0.9rem', whiteSpace: 'nowrap', justifyContent: 'center' }}>
                              申し込む
                            </Link>
                          )}
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td colSpan={5} style={{ padding: '3rem', textAlign: 'center', color: 'var(--text-muted)' }}>
                      現在、予定されている勉強会はありません。
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Mobile schedule cards */}
          <div className="schedule-mobile-only">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {sortedSessions && sortedSessions.length > 0 ? (
                sortedSessions.map((session) => {
                  const status = Array.isArray(session.status) ? session.status[0] : session.status;
                  const type = Array.isArray(session.type) ? session.type[0] : session.type;
                  const formattedDate = formatSessionDate(session.date);
                  const formattedTime = formatSessionTimeRange(session.time || session.date);
                  
                  const now = new Date();
                  const startDateTime = getSessionStartDateTime(session.date, session.time || session.date);
                  const isPast = startDateTime < now;

                  // 申込期限判定
                  let isDeadlinePassed = false;
                  if (type === 'online' || type === 'オンライン') {
                    // オンライン：開催時間の1時間前まで
                    const deadline = new Date(startDateTime.getTime() - 60 * 60 * 1000);
                    isDeadlinePassed = now > deadline;
                  } else {
                    // 対面：開催日前日の21時まで
                    const prevDay = new Date(startDateTime.getTime() - 24 * 60 * 60 * 1000);
                    const prevDayFormatted = new Intl.DateTimeFormat('ja-JP', {
                      year: 'numeric',
                      month: '2-digit',
                      day: '2-digit',
                      timeZone: 'Asia/Tokyo'
                    }).format(prevDay).replace(/\//g, '-');
                    const deadline = new Date(`${prevDayFormatted}T21:00:00+09:00`);
                    isDeadlinePassed = now > deadline;
                  }

                  const isFull = status === 'full' || status === '満席';
                  const isEnded = isPast || status === '受付終了' || isDeadlinePassed;

                  return (
                    <div 
                      key={session.id} 
                      className="glass-card" 
                      style={{ 
                        padding: '1.5rem', 
                        borderRadius: '16px', 
                        border: '1px solid rgba(176, 58, 46, 0.15)',
                        background: isPast ? '#f9fafb' : 'white', 
                        opacity: isPast ? 0.7 : 1,
                        boxShadow: 'var(--shadow-soft)',
                        textAlign: 'left'
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.2rem' }}>
                        <span className="badge badge-type" style={{ fontSize: '0.8rem', padding: '0.3rem 0.8rem', background: type === 'online' || type === 'オンライン' ? 'var(--bg-warm)' : 'var(--primary)', color: type === 'online' || type === 'オンライン' ? 'var(--text-main)' : 'white', borderRadius: '20px', fontWeight: '800' }}>
                          {type === 'online' || type === 'オンライン' ? 'オンライン' : '対面開催'}
                        </span>
                        {isEnded ? (
                          <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: '700' }}>受付終了</span>
                        ) : isFull ? (
                          <span style={{ fontSize: '0.85rem', color: 'var(--primary)', fontWeight: '700' }}>満席</span>
                        ) : (
                          <span style={{ fontSize: '0.85rem', color: 'var(--accent)', fontWeight: '700' }}>受付中</span>
                        )}
                      </div>

                      <h3 style={{ fontSize: '1.3rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.8rem', fontFamily: 'var(--font-serif)' }}>
                        {formattedDate}
                      </h3>
                      
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
                        <div style={{ display: 'flex', gap: '0.5rem', color: 'var(--text-main)' }}>
                          <span style={{ color: 'var(--primary)', fontWeight: '800', minWidth: '60px' }}>時間：</span>
                          <span>{formattedTime}</span>
                        </div>
                        <div style={{ display: 'flex', gap: '0.5rem', color: 'var(--text-main)' }}>
                          <span style={{ color: 'var(--primary)', fontWeight: '800', minWidth: '60px' }}>場所：</span>
                          <span style={{ color: 'var(--text-muted)' }}>
                            {type === 'online' || type === 'オンライン' ? 'Zoom (URL別途案内)' : `${session.location || '都内近郊'}`}
                          </span>
                        </div>
                        <div style={{ display: 'flex', gap: '0.5rem', color: 'var(--text-main)' }}>
                          <span style={{ color: 'var(--primary)', fontWeight: '800', minWidth: '60px' }}>参加費：</span>
                          <span style={{ fontWeight: '800', color: 'var(--primary)' }}>無料</span>
                        </div>
                      </div>

                      {isEnded ? (
                        <button disabled className="btn btn-outline cursor-not-allowed" style={{ width: '100%', padding: '0.8rem', fontSize: '0.95rem', background: '#f3f4f6', color: '#9ca3af', borderColor: '#d1d5db', justifyContent: 'center' }}>
                          受付終了
                        </button>
                      ) : isFull ? (
                        <button disabled className="btn btn-outline cursor-not-allowed" style={{ width: '100%', padding: '0.8rem', fontSize: '0.95rem', opacity: 0.5, justifyContent: 'center' }}>
                          満席
                        </button>
                      ) : (
                        <Link href={`/apply?session=${session.id}`} className="btn btn-primary" style={{ width: '100%', padding: '0.8rem', fontSize: '0.95rem', justifyContent: 'center', fontWeight: '800' }}>
                          申し込む
                        </Link>
                      )}
                    </div>
                  );
                })
              ) : (
                <div className="glass-card" style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-muted)' }}>
                  現在、予定されている勉強会はありません。
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="section-padding" style={{ background: 'white' }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">こんなお悩み、ありませんか？</h2>
          </div>
          <div className="problems-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', maxWidth: '900px', margin: '0 auto' }}>
            <div className="problem-card glass-card seminar-center" style={{ padding: '2rem' }}>
              <HelpCircle size={40} color="var(--primary)" style={{ margin: '0 auto 1rem' }} />
              <p style={{ fontWeight: '700', fontSize: '1.1rem' }}>
                <span className="segment">投資に興味はあるけど、</span>
                <span className="segment">何から始めればいいか分からない…</span>
              </p>
            </div>
            <div className="problem-card glass-card seminar-center" style={{ padding: '2rem' }}>
              <Target size={40} color="var(--primary)" style={{ margin: '0 auto 1rem' }} />
              <p style={{ fontWeight: '700', fontSize: '1.1rem' }}>
                <span className="segment">独学で始めてみたけど、</span>
                <span className="segment">ギャンブルみたいになってしまって不安…</span>
              </p>
            </div>
            <div className="problem-card glass-card seminar-center" style={{ padding: '2rem' }}>
              <Users size={40} color="var(--primary)" style={{ margin: '0 auto 1rem' }} />
              <p style={{ fontWeight: '700', fontSize: '1.1rem' }}>
                <span className="segment">同世代で投資について、</span>
                <span className="segment">気軽に話せる仲間がいない…</span>
              </p>
            </div>
          </div>
          <p className="text-center mt-10" style={{ fontSize: '1.2rem', fontWeight: '800', color: 'var(--primary-dark)' }}>
            <span className="segment">そのお悩み、</span>
            <span className="segment">東京米国株クラブの勉強会で</span>
            <span className="segment">解決できます！</span>
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding" style={{ background: 'white', paddingTop: '0' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag" style={{ fontSize: '1.1rem', letterSpacing: '1px' }}>BENEFITS</span>
            <h2 className="section-title">米国株投資勉強会で得られること</h2>
            <p className="section-subtitle">
              投資初心者の方でも、当クラブの勉強会に参加することで<br className="sp-hide" />
              以下のような確かなメリットと変化を得ることができます。
            </p>
          </div>

          <div className="benefit-list">
            <div className="benefit-item">
              <div className="benefit-icon"><Zap size={24} /></div>
              <div className="benefit-text">
                <h4>20代・30代からの着実な資産形成</h4>
                <p>大きな資金は必要ありません。「少額から始めて、時間を味方につけて複利で育てる」長期投資の本質を教えます。</p>
              </div>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon"><Target size={24} /></div>
              <div className="benefit-text">
                <h4>なぜ「米国株」なのかをシンプルに解説</h4>
                <p>AppleやAmazonなど、私たちの身近にある世界の超優良企業に投資するメリットと、「米国の圧倒的な強さ」を明快に伝えます。</p>
              </div>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon"><PieChart size={24} /></div>
              <div className="benefit-text">
                <h4>「損する恐怖」をなくす考え方</h4>
                <p>独学で挫折する一番の原因は「日々の値動きでのストレス」です。統計データから「負けないための確率」を学び、心のゆとりを手に入れます。</p>
              </div>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon"><ShieldCheck size={24} /></div>
              <div className="benefit-text">
                <h4>質問しやすい、温かな少人数カフェ勉強会</h4>
                <p>一方的な講義ではなく、カフェでお茶を飲むような和やかな雰囲気。少人数制なので、分からないことはその場でなんでも質問できます。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding" style={{ background: 'var(--bg-warm)' }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">当クラブの勉強会の特徴</h2>
          </div>
          <div className="features-grid" style={{ display: 'grid', gap: '3rem', maxWidth: '800px', margin: '0 auto' }}>
            <div className="feature-item" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'center' }}>
              <div className="feature-icon" style={{ background: 'var(--primary)', color: 'white', padding: '1rem', borderRadius: '16px' }}>
                <Coffee size={32} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', color: 'var(--primary-dark)' }}>リラックスして学べる少人数制の環境</h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>
                  <span className="segment">カフェでお茶をするような</span>
                  <span className="segment">気軽な雰囲気で進行します。</span>
                  <span className="segment">少人数制なので、</span>
                  <span className="segment">分からないことがあれば</span>
                  <span className="segment">その場ですぐに質問できます。</span>
                  <span className="segment">一人で参加される方も多いので</span>
                  <span className="segment">ご安心ください。</span>
                </p>
              </div>
            </div>
            <div className="feature-item" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'center' }}>
              <div className="feature-icon" style={{ background: 'var(--primary)', color: 'white', padding: '1rem', borderRadius: '16px' }}>
                <BookOpen size={32} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', color: 'var(--primary-dark)' }}>超初心者向けのカリキュラム</h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>
                  <span className="segment">難しい専門用語や</span>
                  <span className="segment">複雑なチャート分析は極力使いません。</span>
                  <span className="segment">投資の「キホン」から、</span>
                  <span className="segment">ギャンブルにならない</span>
                  <span className="segment">堅実な資産形成の考え方まで、</span>
                  <span className="segment">ステップ・バイ・ステップで</span>
                  <span className="segment">丁寧に解説します。</span>
                </p>
              </div>
            </div>
            <div className="feature-item" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'center' }}>
              <div className="feature-icon" style={{ background: 'var(--primary)', color: 'white', padding: '1rem', borderRadius: '16px' }}>
                <Target size={32} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', color: 'var(--primary-dark)' }}>5年で1300%の実績に基づく「投資哲学」</h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>
                  <span className="segment">小手先のテクニックではなく、</span>
                  <span className="segment">長く勝ち続けるための</span>
                  <span className="segment">「マインドセット（考え方）」を</span>
                  <span className="segment">お伝えします。</span>
                  <span className="segment">相場に一喜一憂せず、</span>
                  <span className="segment">安心して資産を増やしていくための</span>
                  <span className="segment">土台を作ります。</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instructor Section */}
      <section className="section-padding" style={{ background: 'white' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">
              <span className="sr-only">米国株長期投資サークル講師紹介：</span>
              INSTRUCTOR
            </span>
            <h2 className="section-title">講師紹介</h2>
          </div>
          <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem', width: '100%' }}>
              {/* Profile Image */}
              <div style={{ width: '160px', height: '160px', borderRadius: '50%', overflow: 'hidden', border: '4px solid var(--primary)', boxShadow: 'var(--shadow-soft)', flexShrink: 0 }}>
                <Image
                  src="/profile.png"
                  alt="講師 トビー"
                  width={160}
                  height={160}
                  style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                />
              </div>
              {/* Name & Title */}
              <div style={{ textAlign: 'center' }}>
                <h3 style={{ fontSize: '1.6rem', fontWeight: '900', color: 'var(--primary-dark)', marginBottom: '0.3rem' }}>トビー</h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', fontWeight: '700' }}>サラリーマン ／ 事業主 ／ 個人投資家</p>
              </div>
            </div>

            {/* Bio */}
            <div className="glass-card seminar-bio-card seminar-center" style={{ padding: '2.5rem 2rem', width: '100%' }}>
              <p style={{ color: 'var(--text-muted)', lineHeight: '2', fontSize: '1rem', marginBottom: '1.5rem' }}>
                <span className="segment">2020年に投資をスタート。</span>
                <span className="segment">しかし当初は投資とギャンブルの区別がつかず、</span>
                <span className="segment">数十万円の損失を出す手痛い失敗を経験しました。</span>
              </p>
              <p style={{ color: 'var(--text-muted)', lineHeight: '2', fontSize: '1rem', marginBottom: '1.5rem' }}>
                <span className="segment">「このままではいけない」と</span>
                <span className="segment">投資を基礎から真剣に学び直し、</span>
                <span className="segment">長期投資の本質を理解してからは</span>
                <span className="segment">成績が一変。</span>
                <span className="segment" style={{ fontWeight: '800', color: 'var(--primary)' }}>現在の投資成績は1300%以上。</span>
              </p>
              <p style={{ color: 'var(--text-muted)', lineHeight: '2', fontSize: '1rem', marginBottom: '1.5rem' }}>
                <span className="segment">サラリーマンとして働きながら</span>
                <span className="segment">事業も営む多忙な日々の中で、</span>
                <span className="segment">1日の投資にかける時間は</span>
                <span className="segment">平均1時間未満。</span>
                <span className="segment">長期投資のスタイルにより、</span>
                <span className="segment">時間的にも経済的にも</span>
                <span className="segment">余裕のある生活を実現しています。</span>
              </p>
              <p style={{ color: 'var(--text-muted)', lineHeight: '2', fontSize: '1rem' }}>
                <span className="segment">「かつての自分のように、</span>
                <span className="segment">投資で痛い思いをする人を一人でも減らしたい。」</span>
                <span className="segment">その想いから、勉強会やSNSを通じて</span>
                <span className="segment">初心者の方に向けた情報発信を続けています。</span>
              </p>
            </div>

            {/* Stats */}
            <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <div style={{ background: 'var(--bg-warm)', borderRadius: '16px', padding: '1.5rem 2rem', textAlign: 'center', minWidth: '140px' }}>
                <p style={{ fontSize: '1.8rem', fontWeight: '900', color: 'var(--primary)', marginBottom: '0.3rem' }}>1300%+</p>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: '700' }}>投資成績</p>
              </div>
              <div style={{ background: 'var(--bg-warm)', borderRadius: '16px', padding: '1.5rem 2rem', textAlign: 'center', minWidth: '140px' }}>
                <p style={{ fontSize: '1.8rem', fontWeight: '900', color: 'var(--primary)', marginBottom: '0.3rem' }}>5年</p>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: '700' }}>投資歴</p>
              </div>
              <div style={{ background: 'var(--bg-warm)', borderRadius: '16px', padding: '1.5rem 2rem', textAlign: 'center', minWidth: '140px' }}>
                <p style={{ fontSize: '1.8rem', fontWeight: '900', color: 'var(--primary)', marginBottom: '0.3rem' }}>&lt;1h</p>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: '700' }}>1日の投資時間</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="section-padding" style={{ background: 'white' }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">当日の流れ・カリキュラム例</h2>
            <p className="section-subtitle">※約60分のプログラムを予定しています</p>
          </div>
          <div className="timeline" style={{ maxWidth: '600px', margin: '0 auto', position: 'relative' }}>
            <div style={{ padding: '2rem 1.5rem', borderTop: '4px solid var(--primary)', marginBottom: '1.5rem', background: 'var(--bg-warm)', borderRadius: '16px' }}>
              <h4 style={{ color: 'var(--primary)', fontWeight: '800', marginBottom: '0.8rem' }}>1. 自己紹介</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                <span className="segment">まずは緊張をほぐすため、</span>
                <span className="segment">参加者同士で簡単な自己紹介を</span>
                <span className="segment">行います。</span>
              </p>
            </div>
            <div style={{ padding: '2rem 1.5rem', borderTop: '4px solid var(--primary)', marginBottom: '1.5rem', background: 'var(--bg-warm)', borderRadius: '16px' }}>
              <h4 style={{ color: 'var(--primary)', fontWeight: '800', marginBottom: '0.8rem' }}>2. 投資とギャンブルの違いとは？</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                <span className="segment">なぜ多くの人が投資で</span>
                <span className="segment">失敗してしまうのか？</span>
                <span className="segment">資産形成において最も重要な</span>
                <span className="segment">「マインドセット」について</span>
                <span className="segment">解説します。</span>
              </p>
            </div>
            <div style={{ padding: '2rem 1.5rem', borderTop: '4px solid var(--primary)', marginBottom: '1.5rem', background: 'var(--bg-warm)', borderRadius: '16px' }}>
              <h4 style={{ color: 'var(--primary)', fontWeight: '800', marginBottom: '0.8rem' }}>3. なぜ「米国株」なのか？</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                <span className="segment">世界経済の中心である</span>
                <span className="segment">米国の強さと、</span>
                <span className="segment">過去のデータに基づいた</span>
                <span className="segment">長期投資の優位性について</span>
                <span className="segment">分かりやすく説明します。</span>
              </p>
            </div>
            <div style={{ padding: '2rem 1.5rem', borderTop: '4px solid var(--primary)', background: 'var(--bg-warm)', borderRadius: '16px' }}>
              <h4 style={{ color: 'var(--primary)', fontWeight: '800', marginBottom: '0.8rem' }}>4. 質疑応答・交流タイム</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                <span className="segment">疑問に思ったことや、</span>
                <span className="segment">これから投資を始める上での</span>
                <span className="segment">不安など、</span>
                <span className="segment">何でも気軽にご質問ください。</span>
              </p>
            </div>
          </div>
        </div>
      </section>



      {/* FAQ Section */}
      <section className="section-padding" style={{ background: 'white' }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">よくある質問</h2>
          </div>
          <div className="faq-container" style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div className="faq-item glass-card seminar-center" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <h4 style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center', fontSize: '1.1rem', color: 'var(--primary-dark)', marginBottom: '1rem' }}>
                <span style={{ background: 'var(--primary)', color: 'white', padding: '0.2rem 0.8rem', borderRadius: '8px', fontWeight: '800' }}>Q</span>
                投資経験が全くない初心者ですが参加できますか？
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center' }}>
                <span style={{ color: 'var(--text-muted)', padding: '0.2rem 0.8rem', fontWeight: '800', fontSize: '1.1rem' }}>A</span>
                <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', margin: 0 }}>
                  <span className="segment">もちろんです！</span>
                  <span className="segment">本勉強会は「これから投資を始めたい」</span>
                  <span className="segment">「基礎から学び直したい」という方を</span>
                  <span className="segment">主な対象としています。</span>
                  <span className="segment">専門用語は極力使わず、</span>
                  <span className="segment">分かりやすく丁寧にお伝えします。</span>
                </p>
              </div>
            </div>
            <div className="faq-item glass-card seminar-center" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <h4 style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center', fontSize: '1.1rem', color: 'var(--primary-dark)', marginBottom: '1rem' }}>
                <span style={{ background: 'var(--primary)', color: 'white', padding: '0.2rem 0.8rem', borderRadius: '8px', fontWeight: '800' }}>Q</span>
                参加費以外に何か料金はかかりますか？（何か売りつけられませんか？）
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center' }}>
                <span style={{ color: 'var(--text-muted)', padding: '0.2rem 0.8rem', fontWeight: '800', fontSize: '1.1rem' }}>A</span>
                <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', margin: 0 }}>
                  <span className="segment">参加費は無料です</span>
                  <span className="segment">（対面の場合はご自身のカフェ代のみ</span>
                  <span className="segment">ご負担ください）。</span>
                  <span className="segment">強引な勧誘や金融商品の販売は</span>
                  <span className="segment">一切行っておりませんので、</span>
                  <span className="segment">安心してご参加ください。</span>
                </p>
              </div>
            </div>
            <div className="faq-item glass-card seminar-center" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <h4 style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center', fontSize: '1.1rem', color: 'var(--primary-dark)', marginBottom: '1rem' }}>
                <span style={{ background: 'var(--primary)', color: 'white', padding: '0.2rem 0.8rem', borderRadius: '8px', fontWeight: '800' }}>Q</span>
                一人で参加しても大丈夫ですか？
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center' }}>
                <span style={{ color: 'var(--text-muted)', padding: '0.2rem 0.8rem', fontWeight: '800', fontSize: '1.1rem' }}>A</span>
                <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', margin: 0 }}>
                  <span className="segment">はい、参加者の多くが</span>
                  <span className="segment">お一人での参加です。</span>
                  <span className="segment">少人数で和やかな雰囲気ですので、</span>
                  <span className="segment">安心してご参加いただけます。</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local SEO Section */}
      <section className="local-seo-section" style={{ background: 'var(--bg-warm)', padding: '5rem 0' }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="section-tag" style={{ display: 'inline-block', background: 'var(--primary-light)', color: 'var(--primary-dark)', padding: '0.2rem 1rem', borderRadius: '50px', fontSize: '0.85rem', fontWeight: '800', marginBottom: '1rem', letterSpacing: '2px' }}>REAL COMMUNITY</span>
            <h2 className="section-title" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.3rem)', fontWeight: '800', color: 'var(--text-main)', marginBottom: '1.2rem', textWrap: 'balance' }}>
              都内・神奈川近郊での「リアル対面」勉強会
            </h2>
            <p className="section-subtitle" style={{ fontSize: 'clamp(0.95rem, 2.5vw, 1.1rem)', color: 'var(--text-muted)', lineHeight: '1.8', maxWidth: '700px', margin: '0 auto' }}>
              <span className="segment">ネットの情報だけでは不安な方へ。</span>
              <span className="segment">川崎、新宿、渋谷、品川などのカフェやレンタルスペースで、</span>
              <span className="segment">顔を合わせてアットホームに学べる環境を用意しています。</span>
            </p>
          </div>

          <div className="location-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
            <div className="location-card glass-card seminar-center" style={{ padding: '2rem', background: 'white', borderRadius: '16px', boxShadow: 'var(--shadow-soft)' }}>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--primary-dark)', fontWeight: '800', marginBottom: '1rem' }}>川崎エリア</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: '1.6', margin: 0 }}>
                <span className="segment">川崎駅周辺の落ち着いたカフェや</span>
                <span className="segment">レンタルスペースにて定期開催。</span>
                <span className="segment">少人数で質問しやすい環境が</span>
                <span className="segment">大変好評です。</span>
              </p>
            </div>

            <div className="location-card glass-card seminar-center" style={{ padding: '2rem', background: 'white', borderRadius: '16px', boxShadow: 'var(--shadow-soft)' }}>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--primary-dark)', fontWeight: '800', marginBottom: '1rem' }}>新宿・渋谷エリア</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: '1.6', margin: 0 }}>
                <span className="segment">アクセス抜群の主要駅周辺で開催。</span>
                <span className="segment">お仕事帰りや土日の隙間時間に</span>
                <span className="segment">効率よく学びたい20代・30代の</span>
                <span className="segment">会社員の方に人気です。</span>
              </p>
            </div>

            <div className="location-card glass-card seminar-center" style={{ padding: '2rem', background: 'white', borderRadius: '16px', boxShadow: 'var(--shadow-soft)' }}>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--primary-dark)', fontWeight: '800', marginBottom: '1rem' }}>品川エリア</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: '1.6', margin: 0 }}>
                <span className="segment">落ち着いた雰囲気のスペースで開催。</span>
                <span className="segment">将来に備えて堅実に米国株やNISAの</span>
                <span className="segment">勉強を始めたい、</span>
                <span className="segment">志の高いビジネスパーソンが集まります。</span>
              </p>
            </div>
          </div>

          {/* Local Schema.org Structure (JSON-LD) */}
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            "name": "東京米国株クラブ",
            "description": "20代〜30代の初心者に向けた米国株・長期投資の対面勉強会・サークル",
            "address": {
              "@type": "PostalAddress",
              "addressRegion": "東京都",
              "addressLocality": "港区・新宿区・渋谷区・川崎市"
            },
            "areaServed": ["東京都", "神奈川県"],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "投資勉強会・キャッシュフローゲーム会",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "初心者向け米国株投資勉強会"
                  }
                }
              ]
            }
          })}} />
        </div>
      </section>

      {/* Dream Vision Section */}
      <section className="section-padding" style={{ background: 'linear-gradient(135deg, var(--primary-dark) 0%, var(--primary) 50%, #c0392b 100%)', color: 'white', position: 'relative', overflow: 'hidden', textAlign: 'center' }}>
        {/* Decorative background elements */}
        <div style={{ position: 'absolute', top: '-50px', right: '-50px', width: '200px', height: '200px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)' }} />
        <div style={{ position: 'absolute', bottom: '-80px', left: '-80px', width: '300px', height: '300px', borderRadius: '50%', background: 'rgba(255,255,255,0.03)' }} />
        
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '750px', margin: '0 auto' }}>
            <p style={{ fontSize: '1rem', letterSpacing: '3px', fontWeight: '700', opacity: 0.8, marginBottom: '1.5rem', textTransform: 'uppercase' }}>
              Your Future Starts Here
            </p>
            
            <h2 style={{ fontSize: 'clamp(1.8rem, 4.5vw, 2.8rem)', fontWeight: '900', lineHeight: '1.4', marginBottom: '2rem' }}>
              <span className="segment">投資を学んで、</span>
              <span className="segment">あなたの人生に</span><br />
              <span className="segment" style={{ color: '#ffd700' }}>ワクワクしよう。</span>
            </h2>

            <div style={{ width: '60px', height: '3px', background: '#ffd700', margin: '0 auto 2.5rem', borderRadius: '2px' }} />

            <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', lineHeight: '2', opacity: 0.95, marginBottom: '1.5rem' }}>
              <span className="segment">もし、お金の不安がなくなったら</span>
              <span className="segment">あなたは何をしたいですか？</span>
            </p>

            <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.15rem)', lineHeight: '2', opacity: 0.9, marginBottom: '2rem' }}>
              <span className="segment">家族との時間、好きな場所への旅、</span>
              <span className="segment">夢だったあのチャレンジ ——</span><br />
              <span className="segment">資産を育てることは、</span>
              <span className="segment">未来の選択肢を増やすこと。</span>
            </p>

            <div style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', borderRadius: '20px', padding: '2.5rem 2rem', marginBottom: '2.5rem', border: '1px solid rgba(255,255,255,0.15)' }}>
              <p style={{ fontSize: 'clamp(1.1rem, 3vw, 1.4rem)', fontWeight: '800', lineHeight: '1.8', margin: 0 }}>
                <span className="segment">あなたの夢を叶えるための</span>
                <span className="segment">「はじめの一歩」を、</span><br />
                <span className="segment" style={{ color: '#ffd700' }}>一緒に踏み出しませんか？</span>
              </p>
            </div>

            <p style={{ fontSize: '1rem', opacity: 0.85, marginBottom: '2.5rem', lineHeight: '1.8' }}>
              <span className="segment">難しいことは何もありません。</span>
              <span className="segment">まずは気軽に、仲間と一緒に考えることから始めましょう。</span>
            </p>

            <Link href="#schedule" className="btn" style={{ background: '#ffd700', color: 'var(--primary-dark)', fontSize: '1.15rem', padding: '1.2rem 3rem', fontWeight: '900', borderRadius: '50px', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', boxShadow: '0 4px 20px rgba(255, 215, 0, 0.3)', transition: 'transform 0.2s ease, box-shadow 0.2s ease' }}>
              開催スケジュールを見る <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
