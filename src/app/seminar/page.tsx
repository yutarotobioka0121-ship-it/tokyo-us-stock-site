import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, MapPin, MessageCircle, HelpCircle, Users, Target, BookOpen, Coffee, Zap, PieChart, ShieldCheck } from "lucide-react";
import { getSessions } from "@/lib/microcms";
import { formatSessionDate, formatSessionTime, getSessionStartDateTime } from "@/lib/utils";
import ApplyForm from "@/components/ApplyForm";

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

  const availableSessions = sortedSessions.filter(s => {
    const status = Array.isArray(s.status) ? s.status[0] : s.status;
    return status === 'open' || status === '募集開始' || status === '受付中';
  });

  return (
    <div className="seminar-page" style={{ overflowWrap: 'break-word' }}>
      {/* Hero Section */}
      <section className="seminar-hero" style={{ background: 'var(--bg-warm)', padding: '120px 0 60px', textAlign: 'left' }}>
        <div className="container">
          <span className="section-tag" style={{ display: 'inline-block', textAlign: 'left' }}>
            <span className="sr-only">初心者向け米国株投資勉強会：</span>
            おすすめ勉強会
          </span>
          <h1 className="post-title" style={{ marginBottom: '1rem', fontSize: 'clamp(1.5rem, 6vw, 2.8rem)', textAlign: 'left', lineHeight: '1.3' }}>
            <span className="segment">米国株長期投資勉強会</span>
          </h1>
          <p style={{ fontSize: 'clamp(1.1rem, 4vw, 1.4rem)', fontWeight: '800', color: 'var(--primary)', marginBottom: '1.5rem', textAlign: 'left', lineHeight: '1.5' }}>
            <span className="segment">投資初心者に向けた内容で、</span>
            <span className="segment">難しい専門用語などは無しでわかりやすくお話しします。</span>
          </p>
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
                            <Link href="#apply-form-section" className="btn btn-primary" style={{ width: '100%', padding: '0.6rem 1rem', fontSize: '0.9rem', whiteSpace: 'nowrap', justifyContent: 'center' }}>
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
                        <Link href="#apply-form-section" className="btn btn-primary" style={{ width: '100%', padding: '0.8rem', fontSize: '0.95rem', justifyContent: 'center', fontWeight: '800' }}>
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



      {/* Details Sections based on Jimdo LP */}
      <section className="section-padding" style={{ background: 'white' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          
          {/* 1. 主催・講師 */}
          <div className="glass-card" style={{ padding: '2.5rem 2rem' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '1.2rem', borderBottom: '2px solid var(--primary-light)', paddingBottom: '0.4rem', display: 'inline-block' }}>【主催・講師】</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
                <div style={{ width: '100px', height: '100px', borderRadius: '50%', overflow: 'hidden', border: '3px solid var(--primary)', boxShadow: 'var(--shadow-soft)' }}>
                  <Image
                    src="/profile.png"
                    alt="講師 トビー"
                    width={100}
                    height={100}
                    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                  />
                </div>
                <div>
                  <p style={{ fontSize: '1.1rem', color: 'var(--text-main)', margin: 0, fontWeight: '700' }}>
                    トビー
                  </p>
                  <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', margin: 0, fontWeight: '600', marginTop: '0.2rem' }}>
                    サラリーマン ／ 事業主 ／ 個人投資家
                  </p>
                </div>
              </div>
              <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem', color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6', fontWeight: '500' }}>
                <li>・2020年に投資をスタート、当初は数十万円の損失を出す失敗を経験</li>
                <li>・その後、投資を基礎から真剣に学び直し、長期投資の本質を習得</li>
                <li>・現在の投資成績は1300%以上（投資歴5年）</li>
                <li>・サラリーマンと事業を並行しながら、1日の投資時間は平均1時間未満</li>
                <li>・時間的・経済的なゆとりを生み出す堅実な資産形成スタイルを確立</li>
                <li>・「投資で痛い思いをする人を一人でも減らしたい」との想いから初心者向けに発信中</li>
              </ul>
            </div>
          </div>

          {/* 2. 会場情報 */}
          <div className="glass-card" style={{ padding: '2.5rem 2rem' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '1.2rem', borderBottom: '2px solid var(--primary-light)', paddingBottom: '0.4rem', display: 'inline-block' }}>【会場情報】</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', marginTop: '0.5rem' }}>
              <div>
                <h4 style={{ fontSize: '1.05rem', fontWeight: '700', color: 'var(--text-main)', marginBottom: '0.4rem' }}>● リアル会場（対面）</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', margin: 0, paddingLeft: '0.5rem', lineHeight: '1.6' }}>
                  駅近郊の落ち着いたカフェやミーティングスペースにて開催いたします。<br />
                  ※お申込み完了後、詳細な開催場所をメールにてご連絡いたします。
                </p>
              </div>
              <div>
                <h4 style={{ fontSize: '1.05rem', fontWeight: '700', color: 'var(--text-main)', marginBottom: '0.4rem' }}>● オンライン会場（Zoom）</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', margin: 0, paddingLeft: '0.5rem' }}>
                  ご自宅などからご参加いただけるZoomウェビナー形式です。<br />
                  お申込み後、専用の入室用URLをお送りいたします。
                </p>
              </div>
            </div>
          </div>

          {/* 3. 参加費 & 定員 */}
          <div className="glass-card" style={{ padding: '2.5rem 2rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.8rem', borderBottom: '2px solid var(--primary-light)', paddingBottom: '0.4rem', display: 'inline-block' }}>【参加費】</h3>
                <p style={{ fontSize: '1.4rem', fontWeight: '800', color: 'var(--primary)', margin: 0, marginTop: '0.5rem' }}>
                  無料
                </p>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0, marginTop: '0.3rem' }}>
                  ※対面の場合はご自身のカフェ代のみご負担ください
                </p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.8rem', borderBottom: '2px solid var(--primary-light)', paddingBottom: '0.4rem', display: 'inline-block' }}>【定員】</h3>
                <p style={{ fontSize: '1.4rem', fontWeight: '800', color: 'var(--text-main)', margin: 0, marginTop: '0.5rem' }}>
                  限定 4 名
                </p>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0, marginTop: '0.3rem' }}>
                  ※少人数制のため、質問がしやすい環境です
                </p>
              </div>
            </div>
          </div>

          {/* 4. 内容 & アジェンダ */}
          <div className="glass-card" style={{ padding: '2.5rem 2rem' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '1.2rem', borderBottom: '2px solid var(--primary-light)', paddingBottom: '0.4rem', display: 'inline-block' }}>【内容・流れ】</h3>
            <ol style={{ paddingLeft: '1.2rem', margin: '0 0 2rem 0', color: 'var(--text-muted)', fontSize: '0.95rem', display: 'flex', flexDirection: 'column', gap: '0.6rem', lineHeight: '1.6' }}>
              <li><strong>講師自己紹介：</strong> 投資を始めたきっかけと失敗・成功体験の共有</li>
              <li><strong>金持ち父さんから学ぶ投資の基本：</strong> 資産形成における最重要マインドセット</li>
              <li><strong>初心者向け米国株長期投資勉強会：</strong> 米国株の強みと具体的な長期投資の手法</li>
              <li><strong>質疑応答・相談タイム：</strong> 個別の疑問や不安に丁寧にお答えします</li>
            </ol>

            <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '1.2rem', borderBottom: '2px solid var(--primary-light)', paddingBottom: '0.4rem', display: 'inline-block' }}>【米国株長期投資勉強会のアジェンダ】</h3>
            <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem', color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.6' }}>
              <li><strong style={{ color: 'var(--text-main)' }}>第1章：</strong> なぜ今「米国株」なのか？他の投資との決定的な違い</li>
              <li><strong style={{ color: 'var(--text-main)' }}>第2章：</strong> 買ってはいけない「罠銘柄」の特徴と見分け方</li>
              <li><strong style={{ color: 'var(--text-main)' }}>第3章：</strong> 初心者に最適なインデックスファンドの選び方</li>
              <li><strong style={{ color: 'var(--text-main)' }}>第4章：</strong> 複利の魔法 — 時間を味方につけて資産を育てるシミュレーション</li>
              <li><strong style={{ color: 'var(--text-main)' }}>第5章：</strong> ドルコスト平均法の実践と賢い活用方法</li>
              <li><strong style={{ color: 'var(--text-main)' }}>第6章：</strong> おすすめ証券口座の比較と新NISA制度の満額活用ロードマップ</li>
              <li><strong style={{ color: 'var(--text-main)' }}>第7章：</strong> 相場の暴落にも一喜一憂しない、一生モノの投資マインドセット</li>
            </ul>
          </div>

          {/* 5. こんな方にお勧めします */}
          <div className="glass-card" style={{ padding: '2.5rem 2rem' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '1.2rem', borderBottom: '2px solid var(--primary-light)', paddingBottom: '0.4rem', display: 'inline-block' }}>【こんな方にお勧めします】</h3>
            <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem', color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>
              <li>・株投資や新NISAについて一から分かりやすく学びたい方</li>
              <li>・将来に備え、働かなくても困らない堅実な資産・収入源をつくりたい方</li>
              <li>・最近の物価高・インフレに対して不安を感じている方</li>
              <li>・投資の基礎をしっかり身につけて、ギャンブルではない堅実な資産形成をしたい方</li>
              <li>・自分のやりたい夢やライフプランを実現するための不労所得を育てたい方</li>
            </ul>
          </div>

        </div>
      </section>

      {/* 7. 講座の予約 (お申し込みフォーム) */}
      <section id="apply-form-section" className="section-padding" style={{ background: 'var(--bg-warm)', padding: '5rem 0' }}>
        <div className="container" style={{ maxWidth: '600px', margin: '0 auto' }}>
          <div className="glass-card" style={{ padding: '3rem 2rem', borderRadius: '24px', border: '1px solid rgba(176, 58, 46, 0.15)', boxShadow: 'var(--shadow-soft)', background: 'white' }}>
            <span className="section-tag" style={{ display: 'block', textAlign: 'center', marginBottom: '1rem', fontWeight: '800' }}>APPLICATION</span>
            <h2 className="section-title" style={{ textAlign: 'center', fontSize: '1.8rem', fontWeight: '900', marginBottom: '2rem', color: 'var(--primary-dark)' }}>講座の予約</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', textAlign: 'center', marginBottom: '2rem', lineHeight: '1.6' }}>
              現在募集中の勉強会の日程を選択し、必要事項をご入力の上お申し込みください。<br />
              （※少人数制のため、満席になり次第受付終了となります）
            </p>
            <ApplyForm sessions={availableSessions} />
          </div>
        </div>
      </section>

    </div>
  );
}
