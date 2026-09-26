import { Metadata } from 'next';
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, MapPin, MessageCircle, HelpCircle, Users, Target, BookOpen, Coffee, Zap, PieChart, ShieldCheck } from "lucide-react";
import { getSessions } from "@/lib/microcms";
import { formatSessionDate, formatSessionTime, getSessionStartDateTime, isSessionDeadlinePassed } from "@/lib/utils";
import ApplyForm from "@/components/ApplyForm";

export const metadata: Metadata = {
  title: '東京の初心者向け投資勉強会・米国株セミナー｜申し込み日程',
  description: '東京で開催中の初心者向け投資勉強会・米国株セミナーのご案内。5年で1300%以上の実績を持つ現役投資家が講師を務め、少人数制（定員4名）のカフェのような雰囲気で、米国株・新NISAの長期投資の基礎をわかりやすく解説する勉強会です。',
  alternates: {
    canonical: 'https://www.tokyo-us-stock.com/seminar',
  },
  openGraph: {
    title: '東京の初心者向け投資勉強会・米国株セミナー｜申し込み日程',
    description: '東京で開催の少人数制（定員4名）投資勉強会。知識ゼロから安全に始める米国株・新NISAの長期投資をわかりやすく解説します。',
    url: 'https://www.tokyo-us-stock.com/seminar',
    siteName: '東京米国株クラブ',
    images: [
      {
        url: 'https://www.tokyo-us-stock.com/ogp.png',
        width: 1200,
        height: 630,
        alt: '東京米国株クラブ 初心者向け投資勉強会・米国株セミナー',
      },
    ],
    locale: 'ja_JP',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: '東京の初心者向け投資勉強会・米国株セミナー',
    description: '東京で開催の少人数制（定員4名）投資勉強会。知識ゼロから安全に始める米国株・新NISAの長期投資をわかりやすく解説。',
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

function toJstIso(dateStr: string, timeStr: string, offsetHours = 0) {
  const dateMatch = dateStr?.match(/^\d{4}-\d{2}-\d{2}/);
  const ymd = dateMatch ? dateMatch[0] : '2026-01-01';

  let startHour = 19;
  let startMinute = 0;
  if (timeStr && /^\d{2}:\d{2}$/.test(timeStr)) {
    const parts = timeStr.split(':');
    startHour = parseInt(parts[0], 10);
    startMinute = parseInt(parts[1], 10);
  } else if (timeStr) {
    try {
      const dateObj = new Date(timeStr);
      if (!isNaN(dateObj.getTime())) {
        const formatted = new Intl.DateTimeFormat('ja-JP', {
          hour: '2-digit', minute: '2-digit', hour12: false, timeZone: 'Asia/Tokyo'
        }).format(dateObj);
        startHour = parseInt(formatted.split(':')[0], 10);
        startMinute = parseInt(formatted.split(':')[1], 10);
      }
    } catch (e) {}
  }

  const h = (startHour + offsetHours) % 24;
  const pad = (num: number) => num.toString().padStart(2, '0');
  return `${ymd}T${pad(h)}:${pad(startMinute)}:00+09:00`;
}

export default async function SeminarPage() {
  const sessions = await getSessions();

  // 米国株投資セミナー専用のセッション（MicroCMSでNISA指定されたセッションを除外）
  const usStockSessions = sessions.filter(s => {
    const typeArr = Array.isArray(s.type) ? s.type : [s.type];
    const categoryStr = String((s as any).category || (s as any).title || '');
    const fullText = (typeArr.join(' ') + ' ' + (s.location || '') + ' ' + categoryStr).toLowerCase();
    return !(fullText.includes('nisa') || fullText.includes('ニーサ'));
  });

  const sortedSessions = [...usStockSessions].sort((a, b) => {
    return new Date(a.date).getTime() - new Date(b.date).getTime();
  });

  const now = new Date();

  const futureEvents = sortedSessions.filter(s => {
    const status = Array.isArray(s.status) ? s.status[0] : s.status;
    const now = new Date();
    const startDateTime = getSessionStartDateTime(s.date, s.time || s.date);
    return startDateTime >= now && status !== '受付終了';
  });

  const eventSchemas = futureEvents.map(session => {
    const typeArr = Array.isArray(session.type) ? session.type : [session.type];
    const typeStr = typeArr.join(' ').toLowerCase();
    const isOnline = typeStr.includes('online') || typeStr.includes('オンライン');
    const locationStr = session.location || '';
    
    let addressLocality = '川崎市';
    let addressRegion = '神奈川県';
    let addressName = '川崎駅周辺のカフェ（詳細は申し込み後にメールでご案内）';
    let areaName = '川崎';
    
    if (locationStr.includes('新宿')) {
      addressLocality = '新宿区';
      addressRegion = '東京都';
      addressName = '新宿駅周辺のカフェ（詳細は申し込み後にメールでご案内）';
      areaName = '新宿';
    }

    return {
      '@context': 'https://schema.org',
      '@type': 'EducationEvent',
      name: `初心者向け米国株セミナー（${isOnline ? 'オンライン' : areaName}・${isOnline ? 'オンライン' : '対面'}）`,
      description: '米国株・新NISAの長期投資の基礎を、定員4名の少人数制で解説する初心者向けセミナーです。',
      startDate: toJstIso(session.date, session.time || session.date, 0),
      endDate: toJstIso(session.date, session.time || session.date, 1),
      eventStatus: 'https://schema.org/EventScheduled',
      eventAttendanceMode: isOnline ? 'https://schema.org/OnlineEventAttendanceMode' : 'https://schema.org/OfflineEventAttendanceMode',
      location: isOnline ? { '@type': 'VirtualLocation', url: 'https://zoom.us' } : {
        '@type': 'Place',
        name: addressName,
        address: { '@type': 'PostalAddress', addressLocality, addressRegion, addressCountry: 'JP' },
      },
      image: 'https://www.tokyo-us-stock.com/ogp.png',
      performer: { '@type': 'Person', name: 'とびー', url: 'https://www.tokyo-us-stock.com/about' },
      organizer: { '@type': 'Organization', name: '東京米国株クラブ', url: 'https://www.tokyo-us-stock.com/' },
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'JPY', availability: 'https://schema.org/InStock', url: 'https://www.tokyo-us-stock.com/seminar', validFrom: '2026-09-01T00:00:00+09:00' },
    };
  });

  const availableSessions = sortedSessions.filter(s => {
    const status = Array.isArray(s.status) ? s.status[0] : s.status;
    const isOpen = status === 'open' || status === '募集開始' || status === '受付中';
    if (!isOpen) return false;

    // 申し込み締め切りが過ぎていないか判定
    return !isSessionDeadlinePassed(s, now);
  });

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: '投資の知識が全くない初心者でも参加できますか？',
        acceptedAnswer: { '@type': 'Answer', text: 'もちろん大丈夫です。専門用語を使わず、基礎から丁寧にお話ししますので、事前知識は一切不要です。' }
      },
      {
        '@type': 'Question',
        name: '何か売り込まれたり、金融商品を勧められたりしませんか？',
        acceptedAnswer: { '@type': 'Answer', text: '金融商品の販売や特定の銘柄への勧誘は一切行いませんのでご安心ください。' }
      },
      {
        '@type': 'Question',
        name: '参加費は本当に無料ですか？',
        acceptedAnswer: { '@type': 'Answer', text: 'はい、セミナーの参加費は完全無料です。対面開催の場合のみ、ご自身の飲食代のご負担をお願いしております。' }
      },
      {
        '@type': 'Question',
        name: '持ち物は何が必要ですか？',
        acceptedAnswer: { '@type': 'Answer', text: '筆記用具やメモ帳をお持ちください。パソコンは不要です。' }
      },
      {
        '@type': 'Question',
        name: '当日キャンセルや日程変更は可能ですか？',
        acceptedAnswer: { '@type': 'Answer', text: 'はい、可能です。分かり次第、メールにてご連絡をお願いいたします。' }
      },
      {
        '@type': 'Question',
        name: '一人で参加しても大丈夫ですか？',
        acceptedAnswer: { '@type': 'Answer', text: '参加者のほとんどがお一人でのご参加です。少人数制でリラックスした雰囲気ですのでご安心ください。' }
      }
    ]
  };

  return (
    <div className="seminar-page" style={{ overflowWrap: 'break-word' }}>
      {/* JSON-LD Event Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchemas) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section & Summary */}
      <section className="seminar-hero" style={{ background: 'var(--bg-warm)', padding: '100px 0 2rem 0', textAlign: 'left' }}>
        <div className="container">
          <h1 className="post-title" style={{ marginBottom: '1rem', fontSize: 'clamp(1.5rem, 6vw, 2.8rem)', textAlign: 'left', lineHeight: '1.3', marginLeft: '0', marginRight: 'auto', maxWidth: 'none' }}>
            米国株セミナー
          </h1>
          
          {/* Summary */}
          <div style={{ marginTop: '2rem', padding: '1.5rem', background: 'rgba(255, 255, 255, 0.8)', borderRadius: '16px', border: '1px solid var(--primary-light)', boxShadow: 'var(--shadow-soft)', maxWidth: '800px' }}>
            <h2 style={{ fontSize: '1.3rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', borderBottom: 'none' }}>
              📌 このセミナーについて
            </h2>
            <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem', color: 'var(--text-main)', fontSize: '0.95rem', lineHeight: '1.8' }}>
              <li>・東京米国株クラブの米国株セミナーは、投資初心者向けの無料の勉強会です。</li>
              <li>・会場は東京（新宿駅周辺）・神奈川（川崎駅周辺）のカフェと、オンライン（Zoom）です。</li>
              <li>・定員は1回4名までの少人数制で、所要時間は約1時間です。</li>
              <li>・米国株・S&P500・新NISAを使った長期・積立・分散投資の基礎を学べます。</li>
              <li>・金融商品の販売や勧誘は行いません。</li>
            </ul>

            {/* Course comparison table */}
            <div style={{ marginTop: '1.5rem', overflowX: 'auto' }}>
              <table style={{ width: '100%', minWidth: '500px', borderCollapse: 'collapse', textAlign: 'center', fontSize: '0.9rem', background: 'white' }}>
                <thead>
                  <tr>
                    <th style={{ padding: '0.8rem', border: '1px solid var(--border)', background: 'var(--primary)', color: 'white', fontWeight: '800' }}>形式</th>
                    <th style={{ padding: '0.8rem', border: '1px solid var(--border)', background: 'var(--primary)', color: 'white', fontWeight: '800' }}>会場</th>
                    <th style={{ padding: '0.8rem', border: '1px solid var(--border)', background: 'var(--primary)', color: 'white', fontWeight: '800' }}>定員</th>
                    <th style={{ padding: '0.8rem', border: '1px solid var(--border)', background: 'var(--primary)', color: 'white', fontWeight: '800' }}>参加費</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ padding: '0.8rem', border: '1px solid var(--border)', fontWeight: '700' }}>対面</td>
                    <td style={{ padding: '0.8rem', border: '1px solid var(--border)' }}>新宿駅・川崎駅周辺のカフェ</td>
                    <td style={{ padding: '0.8rem', border: '1px solid var(--border)' }}>4名</td>
                    <td style={{ padding: '0.8rem', border: '1px solid var(--border)' }}>無料</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '0.8rem', border: '1px solid var(--border)', fontWeight: '700' }}>オンライン</td>
                    <td style={{ padding: '0.8rem', border: '1px solid var(--border)' }}>Zoom</td>
                    <td style={{ padding: '0.8rem', border: '1px solid var(--border)' }}>4名</td>
                    <td style={{ padding: '0.8rem', border: '1px solid var(--border)' }}>無料</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(1rem, 4vw, 1.4rem)', fontWeight: '800', color: 'var(--primary)', marginTop: '2.5rem', marginBottom: '1.5rem', textAlign: 'left', lineHeight: '1.8' }}>
            東京で開催する初心者向け投資勉強会。難しい専門用語を使わず、わかりやすくお話しします。
          </p>
          <p className="hero-subtitle" style={{ fontFamily: 'var(--font-body)', maxWidth: '600px', marginBottom: '2.5rem', color: 'var(--text-muted)', textAlign: 'left', fontSize: 'clamp(0.95rem, 3.5vw, 1.1rem)', lineHeight: '1.8' }}>
            カフェでお茶を飲むようにリラックスした雰囲気で、<br className="sp-hide" />
            投資の「わからない」を「わかった」に変えませんか？
          </p>

          <div className="seminar-hero-image" style={{ borderRadius: '24px', overflow: 'hidden', boxShadow: 'var(--shadow-soft)', maxWidth: '800px', margin: '2rem 0 0 0', aspectRatio: '16/9', position: 'relative' }}>
            <Image
              src="/workshop.jpg"
              alt="セミナーの様子"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <section style={{ background: 'white', padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          
          {/* 米国株セミナーとは */}
          <div>
            <h2 style={{ fontSize: '1.6rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.8rem', paddingLeft: '0.8rem', borderLeft: '5px solid var(--primary)' }}>米国株セミナーとは</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: '1.8' }}>東京米国株クラブが開催する、初心者向けの無料の勉強会です。</p>
            <div className="glass-card" style={{ padding: '1.5rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                <div>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: '700', color: 'var(--text-main)', marginBottom: '0.4rem' }}>● リアル会場（対面）</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', margin: 0, paddingLeft: '0.5rem', lineHeight: '1.8' }}>
                    駅近郊の落ち着いたカフェにて開催いたします。<br />
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
          </div>

          {/* このセミナーで学べること */}
          <div>
            <h2 style={{ fontSize: '1.6rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.8rem', paddingLeft: '0.8rem', borderLeft: '5px solid var(--primary)' }}>このセミナーで学べること</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: '1.8' }}>知識ゼロから安全に始められる米国株・新NISAの長期投資の基礎をわかりやすく解説します。</p>
            <div className="glass-card" style={{ padding: '1.5rem' }}>
              <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem', color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.8' }}>
                <li><strong style={{ color: 'var(--text-main)' }}>第1章：</strong> なぜ今「米国株」なのか？他の投資との決定的な違い</li>
                <li><strong style={{ color: 'var(--text-main)' }}>第2章：</strong> 買ってはいけない「罠銘柄」の特徴と見分け方</li>
                <li><strong style={{ color: 'var(--text-main)' }}>第3章：</strong> 初心者に最適なインデックスファンドの選び方</li>
                <li><strong style={{ color: 'var(--text-main)' }}>第4章：</strong> 複利の魔法 — 時間を味方につけて資産を育てるシミュレーション</li>
                <li><strong style={{ color: 'var(--text-main)' }}>第5章：</strong> ドルコスト平均法の実践と賢い活用方法</li>
                <li><strong style={{ color: 'var(--text-main)' }}>第6章：</strong> おすすめ証券口座の比較と新NISA制度の満額活用ロードマップ</li>
                <li><strong style={{ color: 'var(--text-main)' }}>第7章：</strong> 相場の暴落にも一喜一憂しない、一生モノの投資マインドセット</li>
              </ul>
            </div>
          </div>

          {/* 当日の流れ（約1時間） */}
          <div>
            <h2 style={{ fontSize: '1.6rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.8rem', paddingLeft: '0.8rem', borderLeft: '5px solid var(--primary)' }}>当日の流れ（約1時間）</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: '1.8' }}>自己紹介から始まり、投資の基本マインドから実践までステップバイステップで学びます。</p>
            <div className="glass-card" style={{ padding: '1.5rem' }}>
              <ol style={{ paddingLeft: '1.2rem', margin: 0, color: 'var(--text-muted)', fontSize: '0.95rem', display: 'flex', flexDirection: 'column', gap: '0.6rem', lineHeight: '1.8' }}>
                <li>自己紹介（アイスブレイク）</li>
                <li>投資の基本マインドセット</li>
                <li>米国株のメリット・デメリット</li>
                <li>質疑応答・シェアリング</li>
              </ol>
            </div>
          </div>

          {/* こんな方におすすめ */}
          <div>
            <h2 style={{ fontSize: '1.6rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.8rem', paddingLeft: '0.8rem', borderLeft: '5px solid var(--primary)' }}>こんな方におすすめ</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: '1.8' }}>投資を基礎から学びたい方や、将来のお金の不安を解消したい方に最適なセミナーです。</p>
            <div className="glass-card" style={{ padding: '1.5rem' }}>
              <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem', color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.8' }}>
                <li>・株投資や新NISAについて一から分かりやすく学びたい方</li>
                <li>・将来に備え、働かなくても困らない堅実な資産・収入源をつくりたい方</li>
                <li>・最近の物価高・インフレに対して不安を感じている方</li>
                <li>・投資の基礎をしっかり身につけて、ギャンブルではない堅実な資産形成をしたい方</li>
                <li>・自分のやりたい夢やライフプランを実現するための不労所得を育てたい方</li>
              </ul>
            </div>
          </div>

          {/* 講師について */}
          <div>
            <h2 style={{ fontSize: '1.6rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.8rem', paddingLeft: '0.8rem', borderLeft: '5px solid var(--primary)' }}>講師について</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: '1.8' }}>5年で1300%以上の実績を持つ現役投資家が、実体験をもとにわかりやすくお伝えします。</p>
            <div className="glass-card" style={{ padding: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
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
                    とびー（トビー）
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
                <li>・時間的・経済的なゆとりを生み出す堅実な資産形成スタイルを確立</li>
                <li>・「投資で痛い思いをする人を一人でも減らしたい」との想いから初心者向けに発信中</li>
              </ul>
            </div>
          </div>

          {/* 開催スケジュール */}
          <div id="schedule">
            <h2 style={{ fontSize: '1.6rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.8rem', paddingLeft: '0.8rem', borderLeft: '5px solid var(--primary)' }}>開催スケジュール</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: '1.8' }}>現在募集中の米国株セミナーの日程は以下の通りです。</p>
            
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
                      const typeArr = Array.isArray(session.type) ? session.type : [session.type];
                      const typeStr = typeArr.join(' ').toLowerCase();
                      const isOnline = typeStr.includes('online') || typeStr.includes('オンライン');
                      
                      const formattedDate = formatSessionDate(session.date);
                      const formattedTime = formatSessionTimeRange(session.time || session.date);
                      
                      const now = new Date();
                      const startDateTime = getSessionStartDateTime(session.date, session.time || session.date);
                      const isPast = startDateTime < now;

                      // 申込期限判定
                      const isDeadlinePassed = isSessionDeadlinePassed(session, now);

                      const isFull = status === 'full' || status === '満席';
                      const isEnded = isPast || status === '受付終了' || isDeadlinePassed;

                      return (
                        <tr key={session.id} style={{ borderBottom: index === sortedSessions.length - 1 ? 'none' : '1px solid var(--border)', background: isPast ? '#f9fafb' : 'white', opacity: isPast ? 0.6 : 1 }}>
                          <td style={{ padding: '1.2rem 0.5rem', fontWeight: '800', color: 'var(--primary-dark)', wordBreak: 'keep-all' }}>{formattedDate}</td>
                          <td style={{ padding: '1.2rem 0.5rem', fontWeight: '700', wordBreak: 'keep-all' }}>{formattedTime}</td>
                          <td style={{ padding: '1.2rem 0.5rem' }}>
                            <span className="badge badge-type" style={{ fontSize: '0.85rem', padding: '0.3rem 0.8rem', wordBreak: 'keep-all', background: isOnline ? 'var(--bg-warm)' : 'var(--primary)', color: isOnline ? 'var(--text-main)' : 'white' }}>
                              {isOnline ? 'オンライン' : '対面開催'}
                            </span>
                          </td>
                          <td style={{ padding: '1.2rem 0.5rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                            {isOnline ? 'Zoom (URL別途案内)' : `${session.location || '都内近郊'}`}
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
                                申し込み
                              </Link>
                            )}
                          </td>
                        </tr>
                      );
                    })
                  ) : (
                    <tr>
                      <td colSpan={6} style={{ padding: '3rem', textAlign: 'center', color: 'var(--text-muted)' }}>
                        現在、予定されているセミナーはありません。
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
                    const typeArr = Array.isArray(session.type) ? session.type : [session.type];
                    const typeStr = typeArr.join(' ').toLowerCase();
                    const isOnline = typeStr.includes('online') || typeStr.includes('オンライン');
                    const formattedDate = formatSessionDate(session.date);
                    const formattedTime = formatSessionTimeRange(session.time || session.date);
                    
                    const now = new Date();
                    const startDateTime = getSessionStartDateTime(session.date, session.time || session.date);
                    const isPast = startDateTime < now;

                    // 申込期限判定
                    const isDeadlinePassed = isSessionDeadlinePassed(session, now);

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
                          <span className="badge badge-type" style={{ fontSize: '0.8rem', padding: '0.3rem 0.8rem', background: isOnline ? 'var(--bg-warm)' : 'var(--primary)', color: isOnline ? 'var(--text-main)' : 'white', borderRadius: '20px', fontWeight: '800' }}>
                            {isOnline ? 'オンライン' : '対面開催'}
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
                              {isOnline ? 'Zoom (URL別途案内)' : `${session.location || '都内近郊'}`}
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
                            申し込み
                          </Link>
                        )}
                      </div>
                    );
                  })
                ) : (
                  <div className="glass-card" style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-muted)' }}>
                    現在、予定されているセミナーはありません。
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* よくある質問 */}
          <div>
            <h2 style={{ fontSize: '1.6rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.8rem', paddingLeft: '0.8rem', borderLeft: '5px solid var(--primary)' }}>よくある質問</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: '1.8' }}>米国株セミナーに関するよくある質問と回答をまとめました。</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {faqSchema.mainEntity.map((faq, idx) => (
                <div key={idx} className="glass-card" style={{ padding: '1.5rem' }}>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.8rem', display: 'flex', gap: '0.5rem' }}>
                    <span style={{ color: 'var(--primary)' }}>Q.</span>
                    {faq.name}
                  </h3>
                  <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', margin: 0, paddingLeft: '1.8rem', lineHeight: '1.8', display: 'flex', gap: '0.5rem' }}>
                    <span style={{ color: 'var(--text-main)', fontWeight: '800', position: 'absolute', marginLeft: '-1.8rem' }}>A.</span>
                    {faq.acceptedAnswer.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* お申し込み */}
      <section id="apply-form-section" style={{ background: 'var(--bg-warm)', padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.8rem', paddingLeft: '0.8rem', borderLeft: '5px solid var(--primary)' }}>お申し込み</h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '2rem', lineHeight: '1.8' }}>以下のお申し込みフォームより、ご希望の日程を選択してご予約ください。</p>
          <div className="glass-card" style={{ padding: '2rem 1.5rem', borderRadius: '24px', border: '1px solid rgba(176, 58, 46, 0.15)', boxShadow: 'var(--shadow-soft)', background: 'white', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left' }}>
            <div style={{ width: '100%' }}>
              <ApplyForm sessions={availableSessions} />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
