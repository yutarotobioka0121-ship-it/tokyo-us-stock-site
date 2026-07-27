import { Metadata } from 'next';
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, MapPin, MessageCircle, HelpCircle, Users, Target, BookOpen, Coffee, Zap, PieChart, ShieldCheck, ArrowLeft } from "lucide-react";
import { getSessions } from "@/lib/microcms";
import { formatSessionDate, formatSessionTime, getSessionStartDateTime, isSessionDeadlinePassed } from "@/lib/utils";
import NisaApplyForm from "@/components/NisaApplyForm";

export const metadata: Metadata = {
  title: 'NISA初心者勉強会・申し込み日程 | 東京米国株クラブ',
  description: '東京で開催中の初心者向け新NISA活用勉強会。「つみたて投資枠」と「成長投資枠」の違いや、非課税メリットを活かす設定方法まで、定員4名の少人数カフェスタイルで丁寧に解説します。',
  alternates: {
    canonical: 'https://www.tokyo-us-stock.com/seminar/nisa',
  },
  openGraph: {
    title: 'NISA初心者勉強会・申し込み日程 | 東京米国株クラブ',
    description: '少人数制（定員4名）のカフェスタイル勉強会。知識ゼロから安全に始める新NISAの活用法をわかりやすく解説します。',
    url: 'https://www.tokyo-us-stock.com/seminar/nisa',
    siteName: '東京米国株クラブ',
    images: [
      {
        url: 'https://www.tokyo-us-stock.com/ogp.png',
        width: 1200,
        height: 630,
        alt: '東京米国株クラブ NISA初心者勉強会',
      },
    ],
    locale: 'ja_JP',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NISA初心者勉強会・申し込み日程 | 東京米国株クラブ',
    description: '少人数制（定員4名）のカフェスタイル勉強会。知識ゼロから安全に始める新NISAの活用法をわかりやすく解説。',
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

export default async function NisaSeminarPage() {
  const sessions = await getSessions();
  
  // NISA初心者勉強会専用セッションのみフィルタリング（type等に 'nisa' や 'NISA' が含まれるもの）
  const nisaSessions = sessions.filter(s => {
    const typeArr = Array.isArray(s.type) ? s.type : [s.type];
    const typeStr = (typeArr.join(' ') + ' ' + (s.location || '')).toLowerCase();
    return typeStr.includes('nisa') || typeStr.includes('ニーサ');
  });

  const sortedSessions = [...nisaSessions].sort((a, b) => {
    return new Date(a.date).getTime() - new Date(b.date).getTime();
  });

  const now = new Date();

  const eventSchema = {
    '@context': 'https://schema.org',
    '@type': 'EducationEvent',
    name: 'NISA初心者勉強会',
    description: '定員4名の少人数制カフェスタイル勉強会。新NISAの活用法と始め方をやさしく解説。',
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
        url: 'https://www.tokyo-us-stock.com/seminar/nisa',
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
      url: 'https://www.tokyo-us-stock.com/seminar/nisa',
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
            <span className="featured-tag">新NISA特化コース</span>
          </div>

          <h1 className="post-title" style={{ marginBottom: '1rem', fontSize: 'clamp(1.5rem, 6vw, 2.8rem)', textAlign: 'left', lineHeight: '1.3', marginLeft: '0', marginRight: 'auto', maxWidth: 'none' }}>
            NISA初心者勉強会
          </h1>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(1rem, 4vw, 1.4rem)', fontWeight: '800', color: 'var(--primary)', marginBottom: '1.5rem', textAlign: 'left', lineHeight: '1.8' }}>
            「つみたて投資枠」と「成長投資枠」の活用法から、証券口座の選び方・非課税設定まで。初心者目線でわかりやすく解説します。
          </p>
          <p className="hero-subtitle" style={{ fontFamily: 'var(--font-body)', maxWidth: '600px', marginBottom: '2.5rem', color: 'var(--text-muted)', textAlign: 'left', fontSize: 'clamp(0.95rem, 3.5vw, 1.1rem)', lineHeight: '1.8' }}>
            カフェでお茶を飲むようにリラックスした雰囲気で、<br className="sp-hide" />
            NISAの基礎から失敗しない資産運用の始め方を学びませんか？
          </p>
          <div className="seminar-hero-image" style={{ borderRadius: '24px', overflow: 'hidden', boxShadow: 'var(--shadow-soft)', maxWidth: '800px', margin: '2rem auto 0 auto', aspectRatio: '16/9', position: 'relative' }}>
            <Image
              src="/hero.jpg"
              alt="NISA初心者勉強会の様子"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="schedule-section" style={{ background: 'white', padding: '2rem 0 1.5rem 0' }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">開催スケジュール</h2>
            <p className="section-subtitle">
              NISA初心者勉強会の開催日程一覧です。<br className="sp-hide" />少人数制のため、お早めにお申し込みください。
            </p>
          </div>

          {/* Desktop Schedule Table */}
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
                            {type === 'online' || type === 'オンライン' ? 'オンライン' : '対面開催'}
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
                      現在、固定スケジュールの指定はありません。下部のフォームよりご希望日時をご指定ください。
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Mobile Schedule Cards */}
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
                          {type === 'online' || type === 'オンライン' ? 'オンライン' : '対面開催'}
                        </span>
                        {isEnded ? <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: '700' }}>受付終了</span> : isFull ? <span style={{ fontSize: '0.85rem', color: 'var(--primary)', fontWeight: '700' }}>満席</span> : <span style={{ fontSize: '0.85rem', color: 'var(--accent)', fontWeight: '700' }}>受付中</span>}
                      </div>
                      <h3 style={{ fontSize: '1.3rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.8rem' }}>{formattedDate}</h3>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
                        <div><span style={{ color: 'var(--primary)', fontWeight: '800' }}>時間：</span>{formattedTime}</div>
                        <div><span style={{ color: 'var(--primary)', fontWeight: '800' }}>場所：</span>{type === 'online' || type === 'オンライン' ? 'Zoom (URL別途案内)' : `${session.location || '都内近郊'}`}</div>
                        <div><span style={{ color: 'var(--primary)', fontWeight: '800' }}>参加費：</span><span style={{ fontWeight: '800', color: 'var(--primary)' }}>無料</span></div>
                      </div>
                      {isEnded ? <button disabled className="btn btn-outline cursor-not-allowed" style={{ width: '100%', padding: '0.8rem' }}>受付終了</button> : isFull ? <button disabled className="btn btn-outline cursor-not-allowed" style={{ width: '100%', padding: '0.8rem' }}>満席</button> : <Link href="#apply-form-section" className="btn btn-primary" style={{ width: '100%', padding: '0.8rem', justifyContent: 'center', fontWeight: '800' }}>この日程で申し込む</Link>}
                    </div>
                  );
                })
              ) : (
                <div className="glass-card" style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-muted)' }}>
                  現在、固定スケジュールの指定はありません。下部のフォームよりご希望日時をご指定ください。
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Course Details */}
      <section style={{ background: 'white', padding: '0 0 3rem 0' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          
          <div className="glass-card" style={{ padding: '2rem' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '1.2rem', borderBottom: '2px solid var(--primary-light)', paddingBottom: '0.4rem', display: 'inline-block' }}>【NISA勉強会で学べること】</h3>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
              <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <CheckCircle2 color="var(--primary)" size={20} style={{ flexShrink: 0, marginTop: '2px' }} />
                <span><strong>新NISA制度の全体像</strong>：「つみたて投資枠（年間120万円）」と「成長投資枠（年間240万円）」の違いと賢い使い分け。</span>
              </li>
              <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <CheckCircle2 color="var(--primary)" size={20} style={{ flexShrink: 0, marginTop: '2px' }} />
                <span><strong>証券口座の比較＆開設</strong>：SBI証券・楽天証券などのネット証券の選び方と非課税口座の開設手順。</span>
              </li>
              <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <CheckCircle2 color="var(--primary)" size={20} style={{ flexShrink: 0, marginTop: '2px' }} />
                <span><strong>長期積立のコツ</strong>：S&P500や全米株式など、非課税メリットを最大化するリスク分散の組み方。</span>
              </li>
            </ul>
          </div>

          <div className="glass-card" style={{ padding: '2rem' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '1.2rem', borderBottom: '2px solid var(--primary-light)', paddingBottom: '0.4rem', display: 'inline-block' }}>【当クラブの安心の約束】</h3>
            <p style={{ lineHeight: '1.8', color: 'var(--text-main)' }}>
              特定の商品や金融サービスの強引な勧誘、高額セミナーの販売などは一切行いません。投資初心者の方が知識を付け、安全に第一歩を踏み出せるよう、中立な立場から分かりやすく解説いたします。
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
              NISA初心者勉強会 お申し込みフォーム
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
              ご希望の日程を選択し、必要事項をご入力の上ご送信ください。
            </p>
          </div>

          <div className="glass-card" style={{ padding: '2rem', background: 'white', borderRadius: '24px' }}>
            <NisaApplyForm sessions={availableSessions} />
          </div>
        </div>
      </section>

    </div>
  );
}
