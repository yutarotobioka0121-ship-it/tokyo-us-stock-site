import { Metadata } from 'next';
import Image from "next/image";
import { buildEventSchedule } from "@/lib/utils";
import { getCFGSchedule, CFGEvent } from "@/lib/microcms";
import CfgApplyForm from "@/components/CfgApplyForm";
import { CheckCircle2 } from "lucide-react";

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'キャッシュフローゲーム会｜川崎・新宿で開催・参加費1,000円',
  description: 'ボードゲームで遊びながらお金の流れと投資の基本を学ぶ2時間の体験会。川崎駅前・新宿駅前で開催、参加費1,000円。日程とお申し込みはこちら。',
  alternates: {
    canonical: 'https://www.tokyo-us-stock.com/seminar/cashflow-game',
  },
  openGraph: {
    title: 'キャッシュフローゲーム会｜川崎・新宿で開催・参加費1,000円',
    description: 'ボードゲームで遊びながらお金の流れと投資の基本を学ぶ2時間の体験会。川崎駅前・新宿駅前で開催、参加費1,000円。日程とお申し込みはこちら。',
    url: 'https://www.tokyo-us-stock.com/seminar/cashflow-game',
    siteName: '東京米国株クラブ',
    images: [
      {
        url: 'https://www.tokyo-us-stock.com/images/cfg/cfg-hero.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'キャッシュフローゲーム会｜川崎・新宿で開催・参加費1,000円',
    description: 'ボードゲームで遊びながらお金の流れと投資の基本を学ぶ2時間の体験会。川崎駅前・新宿駅前で開催、参加費1,000円。日程とお申し込みはこちら。',
    images: ['https://www.tokyo-us-stock.com/images/cfg/cfg-hero.jpg'],
  },
};




function getJapaneseDayOfWeek(dateString: string): string {
  if (!dateString) return '';
  const dateMatch = dateString.match(/(\d{4})年(\d{1,2})月(\d{1,2})日/);
  if (dateMatch) {
    const y = parseInt(dateMatch[1], 10);
    const m = parseInt(dateMatch[2], 10) - 1;
    const d = parseInt(dateMatch[3], 10);
    const date = new Date(y, m, d);
    if (!isNaN(date.getTime())) {
      const weekday = new Intl.DateTimeFormat('ja-JP', { weekday: 'short', timeZone: 'Asia/Tokyo' }).format(date);
      return `${dateMatch[1]}年${dateMatch[2]}月${dateMatch[3]}日(${weekday})`;
    }
  }
  
  const cleanDateStr = dateString.replace(/\([^)]+\)/g, '').trim();
  const normalizedStr = cleanDateStr.replace(/\./g, '/').replace(/-/g, '/');
  const date = new Date(normalizedStr);
  if (isNaN(date.getTime())) return dateString;
  const weekday = new Intl.DateTimeFormat('ja-JP', { weekday: 'short', timeZone: 'Asia/Tokyo' }).format(date);
  return `${cleanDateStr} (${weekday})`;
}

function generateEventSchema(events: CFGEvent[]) {
  if (!events || events.length === 0) return [];
  
  return events.map(ev => {
    
    const schedule = buildEventSchedule(ev.date, ev.time, 2);
    if (!schedule) return null;
    const { startDateStr, endDateStr } = schedule;

    const locName = (ev.location || '').includes('川崎') ? '神奈川県川崎駅前 貸し会議室' : '新宿駅前 貸し会議室';
    const locCity = (ev.location || '').includes('川崎') ? '川崎市' : '新宿区';
    const locPref = (ev.location || '').includes('川崎') ? '神奈川県' : '東京都';

    return {
      "@context": "https://schema.org",
      "@type": "EducationEvent",
      "name": "キャッシュフローゲーム会",
      "description": "ボードゲームで遊びながら、お金の流れと投資の基本が身につく2時間の体験会です。",
      "startDate": startDateStr,
      "endDate": endDateStr,
      "organizer": { 
        "@type": "Organization", 
        "@id": "https://www.tokyo-us-stock.com/#organization",
        "name": "東京米国株クラブ",
        "url": "https://www.tokyo-us-stock.com/",
        "description": "東京米国株クラブとは、投資初心者向けに米国株・新NISAを活用した長期・積立・分散投資の基礎をわかりやすく教える少人数制の勉強会コミュニティです。5年で1300%以上の運用実績を持つ現役投資家（とびー）が主催しており、金融商品の販売や勧誘を一切行わない純粋な学びの場を提供しています。東京（新宿・川崎）での対面形式やオンライン（Zoom）にて、参加費無料のセミナーやキャッシュフローゲーム会を定期的に開催し、これまで延べ300名以上の初心者が受講しています。ギャンブルではない堅実な資産形成を通じて、参加者の将来の不安解消や経済的自立をサポートする活動を行っています。"
      },
      
      "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
      "eventStatus": "https://schema.org/EventScheduled",
      "location": {
        "@type": "Place",
        "name": locName,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": locCity,
          "addressRegion": locPref,
          "addressCountry": "JP"
        }
      },
      "offers": {
        "@type": "Offer",
        "price": "1000",
        "priceCurrency": "JPY",
        "availability": "https://schema.org/InStock",
        "url": "https://www.tokyo-us-stock.com/seminar/cashflow-game"
      }
    };
  });
}

const faqData = [
  {
    question: "投資の知識が全くなくても参加できますか？",
    answer: "はい、全く問題ありません。ゲームを通じて投資の基本から学べるように設計されているため、初心者の方でも安心してご参加いただけます。"
  },
  {
    question: "持ち物は何か必要ですか？",
    answer: "筆記用具、電卓（スマホのアプリで可）、消しゴムをお持ちください。"
  },
  {
    question: "ゲームのルールを知らなくても参加できますか？",
    answer: "はい、初めての方でも大丈夫です。最初の約10分で基本のルールを説明し、細かいルールはゲームを進めながらその都度説明します。事前の準備はいりません。"
  }
];

function generateFaqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(f => ({
      "@type": "Question",
      "name": f.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.answer
      }
    }))
  };
}

export default async function CashflowGamePage() {
  const now = new Date();
  const jstOffset = 9 * 60 * 60 * 1000;
  const nowJst = new Date(now.getTime() + now.getTimezoneOffset() * 60000 + jstOffset);
  const scheduleAll = await getCFGSchedule();
  // JST現在時刻
  
  // 終了時刻を過ぎた日程は除外
  const schedule = scheduleAll.filter(ev => {
    let endHour = 12, endMin = 0;
    const timeParts = (ev.time || '').split('〜');
    if (timeParts[1]) {
      const cleanEnd = timeParts[1].trim().replace(':', '');
      if (cleanEnd.length >= 3) {
        endHour = parseInt(cleanEnd.slice(0, cleanEnd.length - 2), 10) || 12;
        endMin = parseInt(cleanEnd.slice(-2), 10) || 0;
      }
    }
    const dateMatch = ev.date.match(/(\d{4})年(\d{1,2})月(\d{1,2})日/);
    if (dateMatch) {
      const y = parseInt(dateMatch[1], 10);
      const m = parseInt(dateMatch[2], 10) - 1;
      const d = parseInt(dateMatch[3], 10);
      const eventEndJst = new Date(y, m, d, endHour, endMin);
      if (nowJst > eventEndJst) return false;
    }
    return true;
  });

  
  // JST現在時刻
  
  const availableEvents = schedule.filter(ev => {
    if (ev.status !== 'open' && ev.status !== 'full') return false;
    // 終了時刻をパース
    let endHour = 12, endMin = 0;
    const timeParts = (ev.time || '').split('〜');
    if (timeParts[1]) {
      const cleanEnd = timeParts[1].trim().replace(':', '');
      if (cleanEnd.length >= 3) {
        endHour = parseInt(cleanEnd.slice(0, cleanEnd.length - 2), 10) || 12;
        endMin = parseInt(cleanEnd.slice(-2), 10) || 0;
      }
    }
    const dateMatch = ev.date.match(/(\d{4})年(\d{1,2})月(\d{1,2})日/);
    if (dateMatch) {
      const y = parseInt(dateMatch[1], 10);
      const m = parseInt(dateMatch[2], 10) - 1;
      const d = parseInt(dateMatch[3], 10);
      const eventEndJst = new Date(y, m, d, endHour, endMin);
      if (nowJst > eventEndJst) return false;
    }
    return true;
  });

  
  
  const eventSchemas = generateEventSchema(availableEvents.filter(ev => ev.status === 'open')).filter(Boolean);

  const faqSchema = generateFaqSchema();

  return (
    <div className="seminar-page" style={{ overflowWrap: 'break-word' }}>
      
      {eventSchemas.map((schema, idx) => (
        <script key={`event-schema-${idx}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero Section */}
      <section className="seminar-hero" style={{ background: 'var(--bg-warm)', padding: '100px 0 0', textAlign: 'left' }}>
        <div className="container">
          <h1 className="post-title" style={{ marginBottom: '1rem', fontSize: 'clamp(1.5rem, 6vw, 2.8rem)', textAlign: 'left', lineHeight: '1.3', marginLeft: '0', marginRight: 'auto', maxWidth: 'none' }}>
            キャッシュフローゲーム会
          </h1>
          <p className="hero-subtitle" style={{ fontFamily: 'var(--font-body)', wordBreak: 'keep-all', marginBottom: '1.5rem', color: 'var(--text-main)', textAlign: 'left', fontSize: 'clamp(0.95rem, 3.5vw, 1.1rem)', lineHeight: '1.8', fontWeight: 'bold' }}>
            ボードゲームで遊びながら、お金の流れと投資の基本が身につく2時間の体験会です。
          </p>

          


          <div className="seminar-hero-image" style={{ borderRadius: '24px', overflow: 'hidden', boxShadow: 'var(--shadow-soft)', maxWidth: '800px', margin: '2rem auto 0 auto', aspectRatio: '21/9', position: 'relative' }}>
            <Image
              src="/images/cfg/cfg-hero.jpg"
              alt="キャッシュフローゲーム会の様子"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
        </div>
      </section>

      <section id="schedule" className="schedule-section" style={{ background: 'var(--bg-light)', padding: '4rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '2rem', width: '100%' }}>
            <h2 style={{ fontSize: 'clamp(1.5rem, 5vw, 2rem)', fontWeight: '900', color: 'var(--primary-dark)', margin: 0 }}>スケジュール</h2>
          </div>

          {/* Desktop schedule table */}
          <div className="schedule-table-container schedule-desktop-only" style={{ width: '100%', overflowX: 'auto', WebkitOverflowScrolling: 'touch', paddingBottom: '1rem' }}>
            <table className="schedule-table" style={{ width: '100%', minWidth: '700px', borderCollapse: 'collapse', textAlign: 'center', background: 'white', borderRadius: '16px', overflow: 'hidden', boxShadow: 'var(--shadow-soft)', margin: '0 auto' }}>
              <thead style={{ background: 'var(--primary)', color: 'white' }}>
                <tr>
                  <th style={{ padding: '1.2rem 0.5rem', fontWeight: '800' }}>開催日</th>
                  <th style={{ padding: '1.2rem 0.5rem', fontWeight: '800' }}>開催時間</th>
                  <th style={{ padding: '1.2rem 0.5rem', fontWeight: '800' }}>開催場所</th>
                  <th style={{ padding: '1.2rem 0.5rem', fontWeight: '800' }}>参加費</th>
                  <th style={{ padding: '1.2rem 0.5rem', fontWeight: '800' }}>定員</th>
                  <th style={{ padding: '1.2rem 0.5rem', fontWeight: '800' }}>お申し込み</th>
                </tr>
              </thead>
              <tbody>
                {schedule && schedule.length > 0 ? (
                  schedule.map((event, index) => {
                    const isFull = event.status === 'full';
                    const isEnded = event.status === 'closed';

                    return (
                      <tr key={event.id} style={{ borderBottom: index === schedule.length - 1 ? 'none' : '1px solid var(--border)', background: isEnded ? '#f9fafb' : 'white', opacity: isEnded ? 0.6 : 1 }}>
                        <td style={{ padding: '1.2rem 0.5rem', fontWeight: '800', color: 'var(--primary-dark)', wordBreak: 'keep-all' }}>{getJapaneseDayOfWeek(event.date)}</td>
                        <td style={{ padding: '1.2rem 0.5rem', fontWeight: '700', wordBreak: 'keep-all' }}>{event.time}</td>
                        <td style={{ padding: '1.2rem 0.5rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>{event.location}</td>
                        <td style={{ padding: '1.2rem 0.5rem', fontWeight: '800', color: 'var(--primary)' }}>{event.fee}</td>
                        <td style={{ padding: '1.2rem 0.5rem', color: 'var(--text-muted)' }}>{event.capacity}名</td>
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
                            <a href="#apply" className="btn btn-primary" style={{ width: '100%', padding: '0.6rem 1rem', fontSize: '0.9rem', whiteSpace: 'nowrap', justifyContent: 'center', display: 'inline-flex', textDecoration: 'none' }}>
                              申し込み
                            </a>
                          )}
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td colSpan={6} style={{ padding: '3rem', textAlign: 'center', color: 'var(--text-muted)' }}>
                      現在、予定されているイベントはありません。
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Mobile schedule cards */}
          <div className="schedule-mobile-only">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {schedule && schedule.length > 0 ? (
                schedule.map((event) => {
                  const isFull = event.status === 'full';
                  const isEnded = event.status === 'closed';

                  return (
                    <div
                      key={event.id}
                      className="glass-card"
                      style={{
                        padding: '1.5rem',
                        borderRadius: '16px',
                        border: '1px solid rgba(176, 58, 46, 0.15)',
                        background: isEnded ? '#f9fafb' : 'white',
                        opacity: isEnded ? 0.7 : 1,
                        boxShadow: 'var(--shadow-soft)',
                        textAlign: 'left'
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.2rem' }}>
                        <span className="badge badge-type" style={{ fontSize: '0.8rem', padding: '0.3rem 0.8rem', background: 'var(--primary)', color: 'white', borderRadius: '20px', fontWeight: '800' }}>
                          対面開催
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
                        {getJapaneseDayOfWeek(event.date)}
                      </h3>

                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
                        <div style={{ display: 'flex', gap: '0.5rem', color: 'var(--text-main)' }}>
                          <span style={{ color: 'var(--primary)', fontWeight: '800', minWidth: '60px' }}>時間：</span>
                          <span>{event.time}</span>
                        </div>
                        <div style={{ display: 'flex', gap: '0.5rem', color: 'var(--text-main)' }}>
                          <span style={{ color: 'var(--primary)', fontWeight: '800', minWidth: '60px' }}>場所：</span>
                          <span style={{ color: 'var(--text-muted)' }}>{event.location}</span>
                        </div>
                        <div style={{ display: 'flex', gap: '0.5rem', color: 'var(--text-main)' }}>
                          <span style={{ color: 'var(--primary)', fontWeight: '800', minWidth: '60px' }}>参加費：</span>
                          <span style={{ fontWeight: '800', color: 'var(--primary)' }}>{event.fee}</span>
                        </div>
                        <div style={{ display: 'flex', gap: '0.5rem', color: 'var(--text-main)' }}>
                          <span style={{ color: 'var(--primary)', fontWeight: '800', minWidth: '60px' }}>定員：</span>
                          <span>{event.capacity}名</span>
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
                        <a href="#apply" className="btn btn-primary" style={{ width: '100%', padding: '0.8rem', fontSize: '0.95rem', justifyContent: 'center', fontWeight: '800', display: 'inline-flex', textDecoration: 'none' }}>
                          申し込み
                        </a>
                      )}
                    </div>
                  );
                })
              ) : (
                <div className="glass-card" style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-muted)' }}>
                  現在、予定されているイベントはありません。
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      
            {/* おすすめ & 当日の流れ */}
      <section style={{ padding: '4rem 0', background: 'white' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ marginBottom: '2rem', textAlign: 'center', width: '100%' }}>
            <h2 style={{ fontSize: 'clamp(1.5rem, 5vw, 2rem)', fontWeight: '900', marginBottom: '1rem', color: 'var(--primary-dark)' }}>こんな方におすすめ</h2>
          </div>
          
          <ul style={{ listStyleType: 'none', padding: 0, margin: '0 0 4rem 0', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <li className="glass-card" style={{ padding: '1.2rem 1.5rem', display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
              <CheckCircle2 color="var(--primary)" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
              <div>
                <span style={{ fontSize: '1.1rem', fontWeight: '700', color: 'var(--primary-dark)', display: 'block', marginBottom: '0.3rem' }}>投資に興味はあるが、何から始めればいいかわからない方</span>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', lineHeight: '1.6', margin: 0 }}>いきなり証券口座を開設して自己流で始める前に、まずは投資のルールと基礎的なマインドセットを学ぶことで、大きな失敗を防ぐことができます。</p>
              </div>
            </li>
            <li className="glass-card" style={{ padding: '1.2rem 1.5rem', display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
              <CheckCircle2 color="var(--primary)" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
              <div>
                <span style={{ fontSize: '1.1rem', fontWeight: '700', color: 'var(--primary-dark)', display: 'block', marginBottom: '0.3rem' }}>『金持ち父さん 貧乏父さん』を読んで感銘を受けた方</span>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', lineHeight: '1.6', margin: 0 }}>本を読んで理解したつもりでも、実際に行動に移すのは難しいものです。ゲームを通じて著者の教えを実践し、腑に落とすことができます。</p>
              </div>
            </li>
            <li className="glass-card" style={{ padding: '1.2rem 1.5rem', display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
              <CheckCircle2 color="var(--primary)" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
              <div>
                <span style={{ fontSize: '1.1rem', fontWeight: '700', color: 'var(--primary-dark)', display: 'block', marginBottom: '0.3rem' }}>財務諸表（B/S・P/L）の基礎的な読み方を実践的に学びたい方</span>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', lineHeight: '1.6', margin: 0 }}>難しい会計用語を使わずに、お金の出入りと資産・負債の関係を、手を動かしながら視覚的に理解できるようになります。</p>
              </div>
            </li>
          </ul>

          <div style={{ marginBottom: '2rem', textAlign: 'center', width: '100%' }}>
            <h2 style={{ fontSize: 'clamp(1.5rem, 5vw, 2rem)', fontWeight: '900', marginBottom: '1rem', color: 'var(--primary-dark)' }}>当日の流れ</h2>
          </div>

          <style>{`
            .flow-container {
              display: flex;
              flex-direction: column;
              gap: 1.5rem;
              align-items: stretch;
              margin-bottom: 4rem;
              width: 100%;
            }
            .flow-arrow {
              color: var(--primary);
              font-weight: 900;
              font-size: 1.8rem;
              text-align: center;
              transform: rotate(90deg);
            }
            .flow-step {
              padding: 1.5rem;
              font-weight: 800;
              color: var(--primary-dark);
              text-align: center;
              font-size: 1.05rem; white-space: nowrap; word-break: keep-all;
              background: white;
              border: 2px solid var(--primary-light);
              border-radius: 12px;
              box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
            }
            @media (min-width: 768px) {
              .flow-container {
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                gap: 1rem;
              }
              .flow-arrow {
                transform: rotate(0deg);
                flex-shrink: 0;
              }
              .flow-step {
                flex: 1 1 0; display: flex; flex-direction: column; justify-content: center; align-items: center;
                padding: 1.2rem 0.5rem;
              }
            }
          `}</style>
          <div className="flow-container">
            <div className="flow-step">
              1. ルール説明（約10分）
            </div>
            <div className="flow-arrow">→</div>
            <div className="flow-step">
              2. ゲーム（約1時間30分・ルールは進めながら説明）
            </div>
            <div className="flow-arrow">→</div>
            <div className="flow-step">
              3. 振り返り（約20分）
            </div>
          </div>

        </div>
      </section>
      
{/* FAQ Section */}
      <section style={{ padding: '4rem 0', background: 'white' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ marginBottom: '3rem', textAlign: 'center', width: '100%' }}>
            <h2 style={{ fontSize: 'clamp(1.5rem, 5vw, 2rem)', fontWeight: '900', marginBottom: '1rem', color: 'var(--primary-dark)' }}>FAQ</h2>
            <p style={{ color: 'var(--text-muted)' }}>よくあるご質問</p>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {generateFaqSchema().mainEntity.map((faq, index) => (
              <div key={index} className="glass-card" style={{ padding: '1.5rem', background: 'var(--bg-warm)' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', color: 'var(--primary-dark)', marginBottom: '0.8rem', display: 'flex', gap: '0.8rem' }}>
                  <span style={{ color: 'var(--primary)', fontWeight: '900' }}>Q.</span>
                  {faq.name}
                </h3>
                <p style={{ color: 'var(--text-main)', fontSize: '0.95rem', lineHeight: '1.8', display: 'flex', gap: '0.8rem', margin: 0 }}>
                  <span style={{ color: 'var(--accent)', fontWeight: '900' }}>A.</span>
                  {faq.acceptedAnswer.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

            {/* Guide Link */}
      <section style={{ padding: '2rem 0', background: 'white' }}>
        <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
          <a href="/seminar/cashflow-game/guide" className="glass-card" style={{ padding: '2rem', display: 'block', textDecoration: 'none', borderRadius: '16px', border: '2px solid var(--primary-light)', transition: 'transform 0.2s', background: 'var(--bg-warm)' }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--primary)', marginBottom: '0.5rem' }}>
              キャッシュフローゲームの内容・学べること・講師について詳しく見る →
            </h3>
            <p style={{ color: 'var(--text-main)', margin: 0, fontSize: '0.95rem' }}>
              ゲームの仕組みや当日の詳しい流れなどはこちらをご覧ください。
            </p>
          </a>
        </div>
      </section>
      
{/* Application Form Section */}
      <section id="apply" className="form-section" style={{ padding: '5rem 0', background: 'var(--bg-light)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="section-header text-center" style={{ marginBottom: '3rem' }}>
            <h2 className="section-title" style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--primary-dark)' }}>申し込み</h2>
            <p className="section-subtitle" style={{ color: 'var(--text-muted)' }}>
              必要事項をご入力の上、「送信する」ボタンを押してください。<br />
              日程や空席状況を確認後、ご案内メールをお送りいたします。
            </p>
          </div>
          
          <div style={{ background: 'white', padding: '2.5rem', borderRadius: '24px', boxShadow: 'var(--shadow-lg)' }}>
            <CfgApplyForm events={availableEvents} />
          </div>
        </div>
      </section>
      
      <div className="container" style={{ maxWidth: '800px', paddingBottom: '3rem' }}>
        <div style={{ textAlign: 'center' }}>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.75rem', opacity: 0.7, margin: 0 }}>
            ※当会は東京米国株クラブが主催する個人の勉強会で、キャッシュフローゲームの開発元・販売元とは関係ありません。
          </p>
        </div>
      </div>


    </div>
  );
}
