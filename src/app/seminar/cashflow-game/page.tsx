import { Metadata } from 'next';
import Image from "next/image";
import { getCFGSchedule, CFGEvent } from "@/lib/microcms";
import CfgApplyForm from "@/components/CfgApplyForm";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: 'キャッシュフローゲーム会｜遊びながらお金の知識を学ぶ体験会（川崎・新宿）',
  description: '世界中で愛される「キャッシュフローゲーム」で、ラットレースから抜け出すための第一歩を踏み出しましょう。遊びながらお金の知識を身につける体験会です。',
  alternates: {
    canonical: 'https://www.tokyo-us-stock.com/seminar/cashflow-game',
  },
  openGraph: {
    title: 'キャッシュフローゲーム会｜遊びながらお金の知識を学ぶ体験会（川崎・新宿）',
    description: '世界中で愛される「キャッシュフローゲーム」で、ラットレースから抜け出すための第一歩を踏み出しましょう。遊びながらお金の知識を身につける体験会です。',
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
    title: 'キャッシュフローゲーム会｜遊びながらお金の知識を学ぶ体験会（川崎・新宿）',
    description: '世界中で愛される「キャッシュフローゲーム」で、ラットレースから抜け出すための第一歩を踏み出しましょう。遊びながらお金の知識を身につける体験会です。',
    images: ['https://www.tokyo-us-stock.com/images/cfg/cfg-hero.jpg'],
  },
};

export const revalidate = 3600;

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
    
    let startDateStr = '';
    let endDateStr = '';
    
    // Convert 2026年10月1日 -> 2026-10-01
    let ymd = '2026-01-01';
    const dateMatch = ev.date.match(/(\d{4})年(\d{1,2})月(\d{1,2})日/);
    if (dateMatch) {
      const y = dateMatch[1];
      const m = dateMatch[2].padStart(2, '0');
      const d = dateMatch[3].padStart(2, '0');
      ymd = `${y}-${m}-${d}`;
    } else {
      ymd = ev.date.replace(/\([^)]+\)/g, '').trim().replace(/\./g, '-');
    }

    const timeStr = ev.time || '10:00〜12:00';
    let startHour = 10, startMin = 0, endHour = 12, endMin = 0;
    
    const timeParts = timeStr.split('〜');
    if (timeParts[0]) {
      const cleanStart = timeParts[0].trim().replace(':', '');
      if (cleanStart.length >= 3) {
        startHour = parseInt(cleanStart.slice(0, cleanStart.length - 2), 10) || 10;
        startMin = parseInt(cleanStart.slice(-2), 10) || 0;
      }
    }
    if (timeParts[1]) {
      const cleanEnd = timeParts[1].trim().replace(':', '');
      if (cleanEnd.length >= 3) {
        endHour = parseInt(cleanEnd.slice(0, cleanEnd.length - 2), 10) || 12;
        endMin = parseInt(cleanEnd.slice(-2), 10) || 0;
      }
    } else {
      endHour = startHour + 2; // CFG is about 2 hours
      endMin = startMin;
    }

    const pad = (num: number) => num.toString().padStart(2, '0');
    startDateStr = `${ymd}T${pad(startHour)}:${pad(startMin)}:00+09:00`;
    endDateStr = `${ymd}T${pad(endHour)}:${pad(endMin)}:00+09:00`;

    const locName = (ev.location || '').includes('川崎') ? '神奈川県川崎駅前 貸し会議室' : '新宿駅前 貸し会議室';
    const locCity = (ev.location || '').includes('川崎') ? '川崎市' : '新宿区';
    const locPref = (ev.location || '').includes('川崎') ? '神奈川県' : '東京都';

    return {
      "@context": "https://schema.org",
      "@type": "EducationEvent",
      "name": "キャッシュフローゲーム会",
      "startDate": startDateStr,
      "endDate": endDateStr,
      "organizer": { 
        "@type": "Organization", 
        "@id": "https://www.tokyo-us-stock.com/#organization",
        "name": "東京米国株クラブ",
        "url": "https://www.tokyo-us-stock.com/",
        "description": "東京米国株クラブとは、投資初心者向けに米国株・新NISAを活用した長期・積立・分散投資の基礎をわかりやすく教える少人数制の勉強会コミュニティです。5年で1300%以上の運用実績を持つ現役投資家（とびー）が主催しており、金融商品の販売や勧誘を一切行わない純粋な学びの場を提供しています。東京（新宿・川崎）での対面形式やオンライン（Zoom）にて、参加費無料のセミナーやキャッシュフローゲーム会を定期的に開催し、これまで延べ多数の初心者が受講しています。ギャンブルではない堅実な資産形成を通じて、参加者の将来の不安解消や経済的自立をサポートする活動を行っています。"
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

function generateFaqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "投資の知識が全くなくても参加できますか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "はい、問題ありません。参加者の多くが投資初心者です。ゲームのルールは当日丁寧に説明しますので、安心してご参加ください。"
        }
      },
      {
        "@type": "Question",
        "name": "一人で参加しても浮きませんか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "お一人での参加が大半です。ゲームを通じて自然と会話が生まれるため、すぐに打ち解けることができます。"
        }
      },
      {
        "@type": "Question",
        "name": "ネットワークビジネスや怪しい商品の勧誘はありますか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "一切ありません。純粋なお金の勉強を目的としており、そういった勧誘目的での参加も固くお断りしております。"
        }
      },
      {
        "@type": "Question",
        "name": "持ち物は何か必要ですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "鉛筆（シャーペン）と消しゴム、電卓（スマホアプリ可）をお持ちください。ゲーム盤や用紙はこちらで用意いたします。"
        }
      },
      {
        "@type": "Question",
        "name": "参加費はいつ支払いますか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "当日、現金またはPayPayでお支払いをお願いしております。"
        }
      },
      {
        "@type": "Question",
        "name": "遅れての参加は可能ですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ゲームの性質上、ルールの説明を行う最初の30分が非常に重要です。そのため、原則として遅刻でのご参加はご遠慮いただいております。"
        }
      },
      {
        "@type": "Question",
        "name": "年齢制限はありますか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "特に制限は設けておりませんが、成人以上（18歳以上）の方を対象とした内容となっております。"
        }
      }
    ]
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

  
  
  const eventSchemas = generateEventSchema(availableEvents.filter(ev => ev.status === 'open'));

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
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(1rem, 4vw, 1.4rem)', fontWeight: '800', color: 'var(--primary)', marginBottom: '1.5rem', textAlign: 'left', lineHeight: '1.8' }}>
            お金の知識を、遊びながら身につける。
          </p>
          <p className="hero-subtitle" style={{ fontFamily: 'var(--font-body)', maxWidth: '600px', marginBottom: '2.5rem', color: 'var(--text-muted)', textAlign: 'left', fontSize: 'clamp(0.95rem, 3.5vw, 1.1rem)', lineHeight: '1.8' }}>
            世界中で愛される「キャッシュフローゲーム」で、<br className="sp-hide" />
            ラットレースから抜け出すための第一歩を踏み出しましょう。
          </p>

          {/* Definition Paragraph */}
          <div style={{
            background: 'white',
            padding: '1.5rem',
            borderRadius: '12px',
            border: '1px solid rgba(0,0,0,0.1)',
            marginBottom: '2rem'
          }}>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1rem',
              color: 'var(--text-main)',
              lineHeight: '1.8',
              margin: 0
            }}>
              <strong>東京米国株クラブとは</strong>、投資初心者向けに米国株・新NISAを活用した長期・積立・分散投資の基礎をわかりやすく教える少人数制の勉強会コミュニティです。5年で1300%以上の運用実績を持つ現役投資家（とびー）が主催しており、金融商品の販売や勧誘を一切行わない純粋な学びの場を提供しています。東京（新宿・川崎）での対面形式やオンライン（Zoom）にて、参加費無料のセミナーやキャッシュフローゲーム会を定期的に開催し、これまで延べ多数の初心者が受講しています。ギャンブルではない堅実な資産形成を通じて、参加者の将来の不安解消や経済的自立をサポートする活動を行っています。
            </p>
          </div>

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

      {/* Summary Section */}
      <section style={{ padding: '3rem 0', background: 'white' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="glass-card" style={{ padding: '2rem', background: '#fff', border: '1px solid var(--primary-light)' }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              📌 キャッシュフローゲーム会について
            </h2>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-main)', lineHeight: '1.8', marginBottom: '1rem' }}>
              キャッシュフローゲーム会は、世界的ベストセラー書籍『金持ち父さん 貧乏父さん』（ロバート・キヨサキ著）の中で提唱されている「お金の哲学」を、実際のボードゲームを通じて体感し、実践的に学ぶことができる体験型の勉強会です。学校教育では決して教わらないお金の知識、すなわち「ファイナンシャル・リテラシー」を、安全な環境で楽しく身につけることができます。
            </p>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-main)', lineHeight: '1.8', marginBottom: '1rem' }}>
              多くの人が日常的に抱える「いくら働いてもお金が貯まらない」「将来の老後資金が不安だ」という悩みの根本には、資産と負債の違いを正しく理解していないこと、そして自分のお金の流れ（キャッシュフロー）を管理できていないことがあります。本勉強会では、ゲームを通じて仮想の人生を歩みながら、収入・支出・資産・負債という4つの要素を自ら計算し、お金がどのように動くのかを可視化します。
            </p>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-main)', lineHeight: '1.8' }}>
              座学だけではなかなか腹落ちしにくい「投資の考え方」や「不労所得の作り方」を、ゲーム上の失敗や成功体験を通じてリアルに学べるのが最大の魅力です。投資初心者の方はもちろんのこと、「すでに投資を始めているけれどうまくいっていない」「改めて基礎から学び直したい」という方まで、幅広い方々に新しい気づきを提供できるイベントとなっています。
            </p>
          </div>

          <div style={{ marginTop: '2rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem' }}>
            <div className="glass-card" style={{ padding: '1.5rem', textAlign: 'center', background: 'var(--bg-warm)' }}>
              <div style={{ color: 'var(--primary)', fontWeight: '900', fontSize: '1.1rem', marginBottom: '0.5rem' }}>少人数制</div>
              <div style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>定員4名</div>
            </div>
            <div className="glass-card" style={{ padding: '1.5rem', textAlign: 'center', background: 'var(--bg-warm)' }}>
              <div style={{ color: 'var(--primary)', fontWeight: '900', fontSize: '1.1rem', marginBottom: '0.5rem' }}>開催時間</div>
              <div style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>所要時間2時間</div>
            </div>
            <div className="glass-card" style={{ padding: '1.5rem', textAlign: 'center', background: 'var(--bg-warm)' }}>
              <div style={{ color: 'var(--primary)', fontWeight: '900', fontSize: '1.1rem', marginBottom: '0.5rem' }}>アクセス</div>
              <div style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>川崎駅から徒歩5分</div>
            </div>
            <div className="glass-card" style={{ padding: '1.5rem', textAlign: 'center', background: 'var(--bg-warm)' }}>
              <div style={{ color: 'var(--primary)', fontWeight: '900', fontSize: '1.1rem', marginBottom: '0.5rem' }}>参加者層</div>
              <div style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>参加者の9割が初心者</div>
            </div>
          </div>
        </div>
      </section>

      {/* About CFG Section */}
      <section className="about-cfg" style={{ padding: '4rem 0', background: 'var(--bg-light)' }}>
        <div className="container" style={{ maxWidth: '1000px' }}>
          <div style={{ marginBottom: '3rem', textAlign: 'center', width: '100%' }}>
            <h2 style={{ fontSize: 'clamp(1.5rem, 5vw, 2rem)', fontWeight: '900', marginBottom: '1rem', color: 'var(--primary-dark)' }}>キャッシュフローゲームとは</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.8', maxWidth: '800px', margin: '0 auto' }}>
              給料のために働き続ける「ラットレース」から抜け出し、お金がお金を生み出す「ファーストトラック」へ移行するための考え方を、ボード上でリアルに体験できるシミュレーションゲームです。
            </p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', maxWidth: '800px', margin: '0 auto' }}>
            <div className="glass-card" style={{ padding: '2rem', background: 'white' }}>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 'bold', color: 'var(--primary)', marginBottom: '1rem' }}>
                ラットレースとファーストトラック
              </h3>
              <p style={{ color: 'var(--text-main)', lineHeight: '1.8', fontSize: '1rem', marginBottom: '1rem' }}>
                ゲーム盤には、円状の内側のコース「ラットレース」と、外側のコース「ファーストトラック」の2つが描かれています。ラットレースとは、「給料をもらっては請求書の支払いに追われ、また給料のために働く」という、多くの人が現実世界で送っている生活を表現したものです。
              </p>
              <p style={{ color: 'var(--text-main)', lineHeight: '1.8', fontSize: '1rem' }}>
                このラットレースから抜け出すための条件はただ一つ、「不労所得（自分が働かなくても入ってくる収入）が総支出（生活費）を上回ること」です。ゲームの中では、株や不動産、ビジネスなどに投資を行い、不労所得を増やしていきます。見事この条件を満たすと、ファーストトラックと呼ばれるお金持ちの世界に移動します。
              </p>
            </div>
            <div className="glass-card" style={{ padding: '2rem', background: 'white' }}>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 'bold', color: 'var(--primary)', marginBottom: '1rem' }}>
                疑似体験による「失敗」から学ぶ
              </h3>
              <p style={{ color: 'var(--text-main)', lineHeight: '1.8', fontSize: '1rem', marginBottom: '1rem' }}>
                現実世界で投資の失敗をすれば、大切なお金を失うリスクがあります。しかし、ゲームの世界であれば、いくら失敗しても実際のお金が減ることはありません。株価の暴落、不動産の空室、突然のリストラなど、人生で起こり得る様々な経済的イベントを疑似体験することができます。
              </p>
              <p style={{ color: 'var(--text-main)', lineHeight: '1.8', fontSize: '1rem' }}>
                ゲームの中で試行錯誤を繰り返すことで、現実の投資に直面した時の判断力やリスク管理能力が自然と養われていきます。何度失敗してもやり直せる安全な環境だからこそ、思い切った投資戦略を試すことができるのです。
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* 学べること Section */}
      <section style={{ padding: '4rem 0', background: 'white' }}>
        <div className="container" style={{ maxWidth: '1000px' }}>
          <div style={{ marginBottom: '3rem', textAlign: 'center', width: '100%' }}>
            <h2 style={{ fontSize: 'clamp(1.5rem, 5vw, 2rem)', fontWeight: '900', marginBottom: '1rem', color: 'var(--primary-dark)' }}>学べること</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.8', maxWidth: '800px', margin: '0 auto' }}>
              このゲーム会を通じて、参加者の皆さまは以下の3つの重要なスキルと知識を身につけることができます。
            </p>
          </div>

          <div className="features-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            <div className="feature-card" style={{ background: 'var(--bg-warm)', padding: '2.5rem 2rem', borderRadius: '16px', textAlign: 'center' }}>
              <div className="feature-icon" style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <Image src="/images/cfg/rat-race.png" alt="ラットレース" width={120} height={120} style={{ objectFit: 'contain' }} />
              </div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '1rem', color: 'var(--primary-dark)' }}>ラットレースからの脱出法</h3>
              <p style={{ color: 'var(--text-main)', lineHeight: '1.8', fontSize: '0.95rem', wordBreak: 'keep-all', textAlign: 'left' }}>
                ただ闇雲に貯金をするだけでは、ラットレースから抜け出すことはできません。給料などの「勤労所得」を、株や不動産といった「資産」に変え、そこから生まれる「不労所得」を最大化していくという、具体的なプロセスとマインドセットを学びます。
              </p>
            </div>
            
            <div className="feature-card" style={{ background: 'var(--bg-warm)', padding: '2.5rem 2rem', borderRadius: '16px', textAlign: 'center' }}>
              <div className="feature-icon" style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <Image src="/images/cfg/financial-statement.png" alt="財務諸表" width={120} height={120} style={{ objectFit: 'contain' }} />
              </div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '1rem', color: 'var(--primary-dark)' }}>財務諸表の生きた知識</h3>
              <p style={{ color: 'var(--text-main)', lineHeight: '1.8', fontSize: '0.95rem', wordBreak: 'keep-all', textAlign: 'left' }}>
                ゲーム中は、常に自分自身の「損益計算書（P/L）」と「貸借対照表（B/S）」を更新し続けます。収入が入れば書き込み、支出があれば減らし、資産を買えば計算する。この作業を繰り返すことで、お金の流れを数字で客観的に把握する力が自然と身につきます。
              </p>
            </div>

            <div className="feature-card" style={{ background: 'var(--bg-warm)', padding: '2.5rem 2rem', borderRadius: '16px', textAlign: 'center' }}>
              <div className="feature-icon" style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <Image src="/images/cfg/investment.png" alt="投資" width={120} height={120} style={{ objectFit: 'contain' }} />
              </div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '1rem', color: 'var(--primary-dark)' }}>投資のチャンスとリスク</h3>
              <p style={{ color: 'var(--text-main)', lineHeight: '1.8', fontSize: '0.95rem', wordBreak: 'keep-all', textAlign: 'left' }}>
                ゲーム内では、株、不動産、ビジネスなど、現実世界に即した様々な投資の機会（ディール）が舞い込んできます。手元の資金や市場の状況を見極め、時には銀行から借金をしてレバレッジをかけるなど、「良い借金」と「悪い借金」の違いも理解できます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 当日の流れ Section */}
      <section style={{ padding: '4rem 0', background: 'var(--bg-light)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ marginBottom: '2rem', textAlign: 'center', width: '100%' }}>
            <h2 style={{ fontSize: 'clamp(1.5rem, 5vw, 2rem)', fontWeight: '900', marginBottom: '1rem', color: 'var(--primary-dark)' }}>当日の流れ（約2時間）</h2>
            <p style={{ color: 'var(--text-muted)' }}>初心者の方でも迷わず安心して楽しめるよう、主催者が丁寧にサポート・ファシリテートいたします。</p>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div className="glass-card" style={{ padding: '1.5rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <div style={{ background: 'var(--primary)', color: 'white', padding: '0.5rem 1rem', borderRadius: '8px', fontWeight: 'bold' }}>1</div>
              <div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--primary-dark)', marginBottom: '0.5rem' }}>自己紹介・ゲームルールの説明（約20分）</h3>
                <p style={{ color: 'var(--text-main)', fontSize: '0.95rem', lineHeight: '1.8' }}>
                  まずは参加者同士で簡単な自己紹介を行います。その後、初めての方にもわかりやすく、ゲームの最終目的、盤面の進み方、職業カードの見方、そして最も重要な「財務諸表（損益計算書と貸借対照表）」の書き方を解説します。専門用語はできるだけ使わず、平易な言葉で説明しますのでご安心ください。
                </p>
              </div>
            </div>
            <div className="glass-card" style={{ padding: '1.5rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <div style={{ background: 'var(--primary)', color: 'white', padding: '0.5rem 1rem', borderRadius: '8px', fontWeight: 'bold' }}>2</div>
              <div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--primary-dark)', marginBottom: '0.5rem' }}>ゲーム開始（約1時間20分）</h3>
                <p style={{ color: 'var(--text-main)', fontSize: '0.95rem', lineHeight: '1.8' }}>
                  実際にサイコロを振り、ラットレースからの脱出を目指してゲームを進行します。給料日を通過してキャッシュフローを得たり、投資案件（スモールディールやビッグディール）に挑戦したりして不労所得を増やしていきます。途中、リストラに遭ったり、子供が生まれて支出が増えたりといったアクシデントも発生し、大いに盛り上がります。ゲーム中は随時、計算の仕方や投資判断についてのアドバイスを行います。
                </p>
              </div>
            </div>
            <div className="glass-card" style={{ padding: '1.5rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <div style={{ background: 'var(--primary)', color: 'white', padding: '0.5rem 1rem', borderRadius: '8px', fontWeight: 'bold' }}>3</div>
              <div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--primary-dark)', marginBottom: '0.5rem' }}>振り返り・感想のシェア（約20分）</h3>
                <p style={{ color: 'var(--text-main)', fontSize: '0.95rem', lineHeight: '1.8' }}>
                  ゲーム終了後、各自の成績や気づき、学びをシェアする時間を設けます。「あの時の投資がうまくいった」「無駄遣いが響いて脱出できなかった」など、他の参加者の視点を聞くことでさらに学びが深まります。そして最後に、ゲームの世界で学んだことを、現実世界の資産形成（実際の株や不動産投資など）にどう活かしていくかを考える、非常に重要なフィードバックの時間となります。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* こんな方におすすめ Section */}
      <section style={{ padding: '4rem 0', background: 'white' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ marginBottom: '2rem', textAlign: 'center', width: '100%' }}>
            <h2 style={{ fontSize: 'clamp(1.5rem, 5vw, 2rem)', fontWeight: '900', marginBottom: '1rem', color: 'var(--primary-dark)' }}>こんな方におすすめ</h2>
            <p style={{ color: 'var(--text-muted)' }}>以下のような悩みや目標を持つ方に、特に効果的です。</p>
          </div>
          
          <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
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
            <li className="glass-card" style={{ padding: '1.2rem 1.5rem', display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
              <CheckCircle2 color="var(--primary)" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
              <div>
                <span style={{ fontSize: '1.1rem', fontWeight: '700', color: 'var(--primary-dark)', display: 'block', marginBottom: '0.3rem' }}>同じようにお金の勉強をしている前向きな仲間と交流したい方</span>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', lineHeight: '1.6', margin: 0 }}>職場や学校ではお金の話はしづらいものです。ここでは、投資や資産形成に前向きな参加者同士で情報交換ができ、モチベーションも高まります。</p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* 米国株セミナーとの違い Section */}
      <section style={{ padding: '4rem 0', background: 'var(--bg-light)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ marginBottom: '2rem', textAlign: 'center', width: '100%' }}>
            <h2 style={{ fontSize: 'clamp(1.5rem, 5vw, 2rem)', fontWeight: '900', marginBottom: '1rem', color: 'var(--primary-dark)' }}>米国株セミナーとの違い</h2>
          </div>
          <div className="glass-card" style={{ padding: '2.5rem', background: 'white' }}>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-main)', lineHeight: '1.8', marginBottom: '1.5rem' }}>
              当会が別途開催している「米国株セミナー」は、実際の株式市場を対象とした、より実践的で具体的な銘柄分析やポートフォリオ構築、投資戦略（テクニカル分析やファンダメンタルズ分析など）を学ぶための座学中心の講座です。すでに証券口座を持っており、具体的な投資手法を知りたい方に適しています。
            </p>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-main)', lineHeight: '1.8', marginBottom: '1.5rem' }}>
              一方で、こちらの「キャッシュフローゲーム会」は、ボードゲームを通して<strong>投資の基礎的な考え方やマインドセット、お金の全体像</strong>を身につけることを目的としています。個別銘柄の選び方などのテクニックではなく、「なぜ投資が必要なのか」「資産とは何か」という根源的な問いに対する答えを見つけるための場所です。
            </p>
            <p style={{ fontSize: '1.05rem', lineHeight: '1.8', fontWeight: 'bold', color: 'var(--primary-dark)', background: 'var(--bg-warm)', padding: '1rem', borderRadius: '8px', margin: 0 }}>
              これから投資を始める方は、まずキャッシュフローゲーム会でお金の基本とルールを学び、その後に米国株セミナーで具体的な手法を学ぶ、というステップアップを強くおすすめしています。
            </p>
          </div>
        </div>
      </section>

      {/* 講師について */}
      <section style={{ background: 'white', padding: '4rem 0' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          
          <div className="glass-card" style={{ padding: '2rem' }}>
            <h2 style={{ fontSize: 'clamp(1.5rem, 5vw, 2rem)', fontWeight: '900', color: 'var(--primary-dark)', marginBottom: '1.5rem', textAlign: 'center' }}>講師について</h2>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '1.2rem', borderBottom: '2px solid var(--primary-light)', paddingBottom: '0.4rem', display: 'inline-block' }}>【主催・ファシリテーター】</h3>
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
              <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem', color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.8', fontWeight: '500' }}>
                <li>・2020年に投資をスタート、当初は数十万円の損失を出す失敗を経験</li>
                <li>・その後、投資を基礎から真剣に学び直し、長期投資の本質を習得</li>
                <li>・現在の投資成績は1300%以上（投資歴5年）</li>
                <li>・サラリーマンと事業を並行しながら、1日の投資時間は平均1時間未満</li>
                <li>・2026年7月、経済的自立とセミリタイアを両立する「サイドFIRE」を達成</li>
                <li>・「投資で痛い思いをする人を一人でも減らしたい」との想いから初心者向けに発信・教育活動中</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
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
        <div className="glass-card" style={{ padding: '1.5rem', background: '#fff3f3', border: '2px solid #ffa5a5', borderRadius: '12px', textAlign: 'center' }}>
          <p style={{ color: '#d32f2f', fontWeight: 'bold', fontSize: '0.95rem', margin: 0 }}>
            ※当会は東京米国株クラブが主催する個人の勉強会で、キャッシュフローゲームの開発元・販売元とは関係ありません。
          </p>
        </div>
      </div>

    </div>
  );
}
