import { Metadata } from 'next';
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, MapPin, MessageCircle, HelpCircle, Users, Target, BookOpen, Coffee, Zap, UserCheck, ShieldCheck, ArrowLeft } from "lucide-react";
import { getSessions } from "@/lib/microcms";
import { formatSessionDate, formatSessionTime, getSessionStartDateTime, isSessionDeadlinePassed } from "@/lib/utils";
import ApplyForm from "@/components/ApplyForm";

export const metadata: Metadata = {
  title: 'マンツーマン個別相談受付・申し込み日程 | 東京米国株クラブ',
  description: '東京で開催中の初心者向け1対1個別投資相談のご案内。周りを気にせず自分のペースで質問したい方へ、投資の始め方や学習計画をマンツーマンで丁寧にサポートします。',
  alternates: {
    canonical: 'https://www.tokyo-us-stock.com/seminar/consultation',
  },
  openGraph: {
    title: 'マンツーマン個別相談受付・申し込み日程 | 東京米国株クラブ',
    description: '1対1で自分のペースで学べる個別相談枠。初心者目線での進め方相談や不安解消をマンツーマンで丁寧にサポートします。',
    url: 'https://www.tokyo-us-stock.com/seminar/consultation',
    siteName: '東京米国株クラブ',
    images: [
      {
        url: 'https://www.tokyo-us-stock.com/ogp.png',
        width: 1200,
        height: 630,
        alt: '東京米国株クラブ マンツーマン個別相談',
      },
    ],
    locale: 'ja_JP',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'マンツーマン個別相談受付・申し込み日程 | 東京米国株クラブ',
    description: '1対1で自分のペースで学べる個別相談枠。初心者目線での進め方相談や不安解消をマンツーマンで丁寧にサポートします。',
    images: ['https://www.tokyo-us-stock.com/ogp.png'],
  },
};

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

export default async function ConsultationPage() {
  const sessions = await getSessions();
  const sortedSessions = [...sessions].sort((a, b) => {
    return new Date(a.date).getTime() - new Date(b.date).getTime();
  });

  const now = new Date();

  const eventSchema = {
    '@context': 'https://schema.org',
    '@type': 'EducationEvent',
    name: 'マンツーマン個別相談受付',
    description: '1対1でじっくり相談できる個別投資カウンセリング枠。自分に合った投資の始め方や学習計画をサポート。',
    eventAttendanceMode: 'https://schema.org/MixedEventAttendanceMode',
    eventStatus: 'https://schema.org/EventScheduled',
    location: [
      {
        '@type': 'Place',
        name: '東京会場（渋谷・新宿等のカフェ・レンタルスペース）',
        address: {
          '@type': 'PostalAddress',
          addressLocality: '東京都',
          addressCountry: 'JP',
        },
      },
      {
        '@type': 'VirtualLocation',
        url: 'https://www.tokyo-us-stock.com/seminar/consultation',
      },
    ],
    organizer: {
      '@type': 'Organization',
      name: '東京米国株クラブ',
      url: 'https://www.tokyo-us-stock.com',
    },
    offers: {
      '@type': 'Offer',
      price: '3000',
      priceCurrency: 'JPY',
      availability: 'https://schema.org/InStock',
      url: 'https://www.tokyo-us-stock.com/seminar/consultation',
    },
  };

  const availableSessions = sortedSessions.filter(s => {
    const status = Array.isArray(s.status) ? s.status[0] : s.status;
    const isOpen = status === 'open' || status === '募集開始' || status === '受付中';
    if (!isOpen) return false;
    return !isSessionDeadlinePassed(s, now);
  });

  return (
    <div className="seminar-page" style={{ overflowWrap: 'break-word' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }}
      />

      {/* Hero Section */}
      <section className="seminar-hero" style={{ background: 'var(--bg-warm)', padding: '100px 0 0', textAlign: 'left' }}>
        <div className="container">
          <Link href="/" className="btn-link" style={{ marginBottom: '1.5rem', display: 'inline-flex', alignItems: 'center', fontFamily: 'var(--font-body)', fontSize: '0.95rem' }}>
            <ArrowLeft size={18} style={{ marginRight: '0.5rem' }} /> トップへ戻る
          </Link>

          <div style={{ marginBottom: '1rem' }}>
            <span className="featured-tag">マンツーマン対応</span>
          </div>

          <h1 className="post-title" style={{ marginBottom: '1rem', fontSize: 'clamp(1.5rem, 6vw, 2.8rem)', textAlign: 'left', lineHeight: '1.3', marginLeft: '0', marginRight: 'auto', maxWidth: 'none' }}>
            マンツーマン個別相談受付
          </h1>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(1rem, 4vw, 1.4rem)', fontWeight: '800', color: 'var(--primary)', marginBottom: '1.5rem', textAlign: 'left', lineHeight: '1.8' }}>
            「他の参加者を気にせず自分のペースでじっくり質問したい」「自分に合った投資の進め方や学習計画をマンツーマンで相談したい」という方のための1対1個別相談枠です。
          </p>
          <p className="hero-subtitle" style={{ fontFamily: 'var(--font-body)', maxWidth: '600px', marginBottom: '2.5rem', color: 'var(--text-muted)', textAlign: 'left', fontSize: 'clamp(0.95rem, 3.5vw, 1.1rem)', lineHeight: '1.8' }}>
            オンラインまたはカフェでの対面形式から選択可能。<br className="sp-hide" />
            疑問や不安をその場で解消しながら、第一歩の進め方を一緒に整理します。
          </p>
          <div className="seminar-hero-image" style={{ borderRadius: '24px', overflow: 'hidden', boxShadow: 'var(--shadow-soft)', maxWidth: '800px', margin: '2rem auto 0 auto', aspectRatio: '16/9', position: 'relative' }}>
            <Image
              src="/consultation.jpg"
              alt="対面での個別投資相談・カウンセリングの様子"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="schedule-section" style={{ background: 'white', padding: '3rem 0 2rem 0' }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">個別相談スケジュール</h2>
            <p className="section-subtitle">
              個別相談のお申し込み可能な枠一覧です。<br className="sp-hide" />1対1の対応となるため、枠が埋まり次第受付終了となります。
            </p>
          </div>

          {/* Schedule Table (Desktop) */}
          <div className="schedule-table-container schedule-desktop-only" style={{ width: '100%', overflowX: 'auto', paddingBottom: '1rem' }}>
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
                    
                    const startDateTime = getSessionStartDateTime(session.date, session.time || session.date);
                    const isPast = startDateTime < now;
                    const isDeadlinePassed = isSessionDeadlinePassed(session, now);
                    const isFull = status === 'full' || status === '満席';
                    const isEnded = isPast || status === '受付終了' || isDeadlinePassed;

                    return (
                      <tr key={session.id} style={{ borderBottom: index === sortedSessions.length - 1 ? 'none' : '1px solid var(--border)', background: isPast ? '#f9fafb' : 'white', opacity: isPast ? 0.6 : 1 }}>
                        <td style={{ padding: '1.2rem 0.5rem', fontWeight: '800', color: 'var(--primary-dark)' }}>{formattedDate}</td>
                        <td style={{ padding: '1.2rem 0.5rem', fontWeight: '700' }}>{formattedTime}</td>
                        <td style={{ padding: '1.2rem 0.5rem' }}>
                          <span className="badge badge-type" style={{ fontSize: '0.85rem', padding: '0.3rem 0.8rem', background: type === 'online' || type === 'オンライン' ? 'var(--bg-warm)' : 'var(--primary)', color: type === 'online' || type === 'オンライン' ? 'var(--text-main)' : 'white' }}>
                            {type === 'online' || type === 'オンライン' ? 'オンライン' : '対面相談'}
                          </span>
                        </td>
                        <td style={{ padding: '1.2rem 0.5rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                          {type === 'online' || type === 'オンライン' ? 'Zoom (URL別途案内)' : `${session.location || '都内近郊'}`}
                        </td>
                        <td style={{ padding: '1.2rem 0.5rem', fontWeight: '800', color: 'var(--primary)' }}>無料</td>
                        <td style={{ padding: '1.2rem 0.5rem' }}>
                          {isEnded ? (
                            <button disabled className="btn btn-outline cursor-not-allowed" style={{ width: '100%', padding: '0.6rem 1rem', fontSize: '0.9rem', background: '#f3f4f6', color: '#9ca3af' }}>受付終了</button>
                          ) : isFull ? (
                            <button disabled className="btn btn-outline cursor-not-allowed" style={{ width: '100%', padding: '0.6rem 1rem', fontSize: '0.9rem', opacity: 0.5 }}>満席</button>
                          ) : (
                            <Link href="#apply-form-section" className="btn btn-primary" style={{ width: '100%', padding: '0.6rem 1rem', fontSize: '0.9rem', justifyContent: 'center' }}>申し込み</Link>
                          )}
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td colSpan={6} style={{ padding: '3rem', textAlign: 'center', color: 'var(--text-muted)' }}>
                      現在、予定されている日程はありません。
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Schedule Mobile Cards */}
          <div className="schedule-mobile-only">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {sortedSessions && sortedSessions.length > 0 ? (
                sortedSessions.map((session) => {
                  const status = Array.isArray(session.status) ? session.status[0] : session.status;
                  const type = Array.isArray(session.type) ? session.type[0] : session.type;
                  const formattedDate = formatSessionDate(session.date);
                  const formattedTime = formatSessionTimeRange(session.time || session.date);
                  const startDateTime = getSessionStartDateTime(session.date, session.time || session.date);
                  const isPast = startDateTime < now;
                  const isDeadlinePassed = isSessionDeadlinePassed(session, now);
                  const isFull = status === 'full' || status === '満席';
                  const isEnded = isPast || status === '受付終了' || isDeadlinePassed;

                  return (
                    <div key={session.id} className="glass-card" style={{ padding: '1.5rem', borderRadius: '16px', border: '1px solid rgba(176, 58, 46, 0.15)', background: isPast ? '#f9fafb' : 'white', opacity: isPast ? 0.7 : 1 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.2rem' }}>
                        <span className="badge badge-type" style={{ fontSize: '0.8rem', padding: '0.3rem 0.8rem', background: type === 'online' || type === 'オンライン' ? 'var(--bg-warm)' : 'var(--primary)', color: type === 'online' || type === 'オンライン' ? 'var(--text-main)' : 'white', borderRadius: '20px', fontWeight: '800' }}>
                          {type === 'online' || type === 'オンライン' ? 'オンライン' : '対面相談'}
                        </span>
                        {isEnded ? <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: '700' }}>受付終了</span> : isFull ? <span style={{ fontSize: '0.85rem', color: 'var(--primary)', fontWeight: '700' }}>満席</span> : <span style={{ fontSize: '0.85rem', color: 'var(--accent)', fontWeight: '700' }}>受付中</span>}
                      </div>
                      <h3 style={{ fontSize: '1.3rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.8rem' }}>{formattedDate}</h3>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
                        <div><span style={{ color: 'var(--primary)', fontWeight: '800' }}>時間：</span>{formattedTime}</div>
                        <div><span style={{ color: 'var(--primary)', fontWeight: '800' }}>場所：</span>{type === 'online' || type === 'オンライン' ? 'Zoom (URL別途案内)' : `${session.location || '都内近郊'}`}</div>
                        <div><span style={{ color: 'var(--primary)', fontWeight: '800' }}>参加費：</span><span style={{ fontWeight: '800', color: 'var(--primary)' }}>無料</span></div>
                      </div>
                      {isEnded ? <button disabled className="btn btn-outline cursor-not-allowed" style={{ width: '100%', padding: '0.8rem' }}>受付終了</button> : isFull ? <button disabled className="btn btn-outline cursor-not-allowed" style={{ width: '100%', padding: '0.8rem' }}>満席</button> : <Link href="#apply-form-section" className="btn btn-primary" style={{ width: '100%', padding: '0.8rem', justifyContent: 'center', fontWeight: '800' }}>申し込み</Link>}
                    </div>
                  );
                })
              ) : (
                <div className="glass-card" style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-muted)' }}>現在、予定されている相談枠はありません。</div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Details & Features */}
      <section style={{ background: 'white', padding: '0 0 3rem 0' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          
          <div className="glass-card" style={{ padding: '2rem' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '1.2rem', borderBottom: '2px solid var(--primary-light)', paddingBottom: '0.4rem', display: 'inline-block' }}>【個別相談の特徴・メリット】</h3>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
              <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <CheckCircle2 color="var(--primary)" size={20} style={{ flexShrink: 0, marginTop: '2px' }} />
                <span><strong>完全1対1で気兼ねなく質問できる</strong>：他の参加者を気にせず、自分の理解度に合わせたスピードで何でも質問・相談いただけます。</span>
              </li>
              <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <CheckCircle2 color="var(--primary)" size={20} style={{ flexShrink: 0, marginTop: '2px' }} />
                <span><strong>オーダーメイドの進め方アドバイス</strong>：ご自身の知識レベルや目標に合わせた、無理のない投資の学習ロードマップをご案内します。</span>
              </li>
              <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <CheckCircle2 color="var(--primary)" size={20} style={{ flexShrink: 0, marginTop: '2px' }} />
                <span><strong>対面カフェ・オンライン選択自由</strong>：落ち着いたカフェでの対面面談、またはご自宅からのオンライン面談からお好みで選択可能です。</span>
              </li>
            </ul>
          </div>

          <div className="glass-card" style={{ padding: '2rem', borderLeft: '4px solid var(--primary)' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.8rem' }}>【ご注意・安心のお約束】</h3>
            <p style={{ lineHeight: '1.8', color: 'var(--text-main)', fontSize: '0.95rem' }}>
              ※当クラブの個別相談は、投資の学習進度や第一歩の始め方を相談するための学びの枠です。<strong>個別の銘柄売買指示、特定の金融商品の推奨、ならびに個人の口座画面の確認操作などは一切行いません。</strong>中立で安全な学習サポートをお約束します。
            </p>
          </div>
        </div>
      </section>

      {/* Apply Form Section */}
      <section id="apply-form-section" style={{ background: 'var(--bg-warm)', padding: '4rem 0' }}>
        <div className="container" style={{ maxWidth: '700px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span className="featured-tag">お申し込み</span>
            <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.2rem)', fontWeight: '900', color: 'var(--primary-dark)', margin: '0.5rem 0' }}>
              個別相談 お申し込みフォーム
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
              ご希望の日程を選択し、必要事項をご入力の上ご送信ください。
            </p>
          </div>

          <div className="glass-card" style={{ padding: '2rem', background: 'white', borderRadius: '24px' }}>
            <ApplyForm sessions={availableSessions} />
          </div>
        </div>
      </section>

    </div>
  );
}
