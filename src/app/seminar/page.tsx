import { Metadata } from 'next';
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, MapPin, MessageCircle, HelpCircle, Users, Target, BookOpen, Coffee, Zap, PieChart, ShieldCheck, Monitor } from "lucide-react";
import { getSessions } from "@/lib/microcms";
import { formatSessionDate, buildEventSchedule, formatSessionTime, formatSessionTimeRange, formatFeeDisplay, getSessionStartDateTime, isSessionDeadlinePassed, getSessionFeeDisplay, getSessionPriceValue, getSessionDeadlineDateTime, formatJstIsoString } from "@/lib/utils";
import ApplyForm from "@/components/ApplyForm";
import SeminarScheduleList, { type ScheduleCardItem } from "@/components/SeminarScheduleList";

export const dynamic = 'force-dynamic';

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


const INVESTING_SINCE = 2020;
  const currentYear = Number(new Intl.DateTimeFormat('en', { year: 'numeric', timeZone: 'Asia/Tokyo' }).format(new Date()));
  const yearsCount = currentYear - INVESTING_SINCE + 1;

export default async function SeminarPage({ searchParams }: { searchParams?: Promise<{ event?: string }> }) {
  const resolvedSearchParams = searchParams ? await searchParams : undefined;
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
  }).filter(s => {
    const startDateTime = getSessionStartDateTime(s.date, s.time || s.date);
    const endDateTime = new Date(startDateTime.getTime() + 60 * 60 * 1000);
    return endDateTime > new Date();
  });

  const now = new Date();

  const futureEvents = sortedSessions.filter(s => {
    const status = Array.isArray(s.status) ? s.status[0] : s.status;
    const now = new Date();
    const startDateTime = getSessionStartDateTime(s.date, s.time || s.date);
    return startDateTime >= now && status !== '受付終了';
  });

  const eventSchemas = futureEvents.map(session => {
    const status = Array.isArray(session.status) ? session.status[0] : session.status;
    const typeArr = Array.isArray(session.type) ? session.type : [session.type];
    const typeStr = typeArr.join(' ').toLowerCase();
    const isOnline = typeStr.includes('online') || typeStr.includes('オンライン');
    const schedule = buildEventSchedule(session.date, session.time || session.date, 1);
    if (!schedule) return null;
    const deadlineDt = getSessionDeadlineDateTime(session);
    const isSoldOut =
      status === 'full' ||
      status === '満席' ||
      status === 'ended' ||
      status === 'closed' ||
      status === '受付終了' ||
      isSessionDeadlinePassed(session, now);
    const locationStr = session.location || '';
    
    let addressLocality = '東京都・神奈川県';
    let addressRegion = '東京都';
    let addressName = session.location ? `${session.location}（詳細は申し込み後にメールでご案内）` : '東京都内・神奈川県内のカフェ（詳細は申し込み後にメールでご案内）';
    let areaName = session.location || '東京・神奈川';
    
    if (locationStr.includes('神奈川') || locationStr.includes('川崎') || locationStr.includes('横浜')) {
      addressLocality = '神奈川県';
      addressRegion = '神奈川県';
    }

    return {
      '@context': 'https://schema.org',
      '@type': 'EducationEvent',
      name: `初心者向け米国株セミナー（${isOnline ? 'オンライン' : areaName}・${isOnline ? 'オンライン' : '対面'}）`,
      description: '米国株・新NISAの長期投資の基礎を、定員4名の少人数制で解説する初心者向けセミナーです。',
      startDate: schedule.startDateStr,
      endDate: schedule.endDateStr,
      eventStatus: 'https://schema.org/EventScheduled',
      eventAttendanceMode: isOnline ? 'https://schema.org/OnlineEventAttendanceMode' : 'https://schema.org/OfflineEventAttendanceMode',
      location: isOnline ? { '@type': 'VirtualLocation', url: 'https://zoom.us' } : {
        '@type': 'Place',
        name: addressName,
        address: { '@type': 'PostalAddress', addressLocality, addressRegion, addressCountry: 'JP' },
      },
      image: 'https://www.tokyo-us-stock.com/ogp.png',
      performer: { '@type': 'Person', name: 'とびー', url: 'https://www.tokyo-us-stock.com/about' },
      organizer: { 
        '@type': 'Organization', 
        name: '東京米国株クラブ', 
        url: 'https://www.tokyo-us-stock.com/',
        description: '東京米国株クラブとは、投資初心者向けに米国株・新NISAを活用した長期・積立・分散投資の基礎をわかりやすく教える少人数制の勉強会コミュニティです。5年で1300%以上の運用実績を持つ現役投資家（とびー）が主催しており、金融商品の販売や勧誘を一切行わない純粋な学びの場を提供しています。東京・神奈川での対面形式やオンライン（Zoom）にて、少人数制のセミナー（オンラインは無料）やキャッシュフローゲーム会を定期的に開催し、これまで延べ300名以上の初心者が受講しています。ギャンブルではない堅実な資産形成を通じて、参加者の将来の不安解消や経済的自立をサポートする活動を行っています。'
      },
      offers: {
        '@type': 'Offer',
        price: getSessionPriceValue(session),
        priceCurrency: 'JPY',
        availability: isSoldOut ? 'https://schema.org/SoldOut' : 'https://schema.org/InStock',
        url: 'https://www.tokyo-us-stock.com/seminar',
        validFrom: '2026-09-01T00:00:00+09:00',
        validThrough: formatJstIsoString(deadlineDt),
      },
    };
  }).filter(Boolean);

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
        name: '参加費はいくらですか？',
        acceptedAnswer: { '@type': 'Answer', text: '対面開催は1,000円、オンライン（Zoom）開催は無料です。対面の場合、ご自身の飲食代は別途ご負担ください。お支払いは「事前振込」「PayPay」「当日現地払い」からお選びいただけます。お支払い先は、お申し込み後のご案内メールでお知らせします。キャンセルされる場合、事前にお支払いいただいた参加費は返金いたします。' }
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

  const scheduleItems: ScheduleCardItem[] = sortedSessions
    .map((session) => {
      const status = Array.isArray(session.status) ? session.status[0] : session.status;
      const typeArr = Array.isArray(session.type) ? session.type : [session.type];
      const typeStr = typeArr.join(' ').toLowerCase();
      const isOnline = typeStr.includes('online') || typeStr.includes('オンライン');
      const schedule = buildEventSchedule(session.date, session.time || session.date, 1);
      if (!schedule) return null;

      const startDateTime = getSessionStartDateTime(session.date, session.time || session.date);
      const isPast = startDateTime < now;
      const isDeadlinePassed = isSessionDeadlinePassed(session, now);
      const isFull = status === 'full' || status === '満席';
      const isEnded = isPast || status === '受付終了' || isDeadlinePassed;

      return {
        id: session.id,
        formattedDate: formatSessionDate(session.date),
        formattedTime: formatSessionTimeRange(session.time || session.date),
        isOnline,
        locationLabel: isOnline ? 'Zoom (URL別途案内)' : `${session.location || '都内近郊'}`,
        feeDisplay: getSessionFeeDisplay(session),
        isPast,
        isFull,
        isEnded,
      };
    })
    .filter((item): item is ScheduleCardItem => item !== null);

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

      {/* Hero Section (First View: H1 -> キャッチコピー -> 写真) */}
      <section className="seminar-hero seminar-hero-fv" style={{ background: 'var(--bg-warm)', textAlign: 'left' }}>
        <div className="container">
          <h1 className="post-title" style={{ marginBottom: '0.75rem', fontSize: 'clamp(1.5rem, 6vw, 2.8rem)', textAlign: 'left', lineHeight: '1.3', marginLeft: '0', marginRight: 'auto', maxWidth: 'none' }}>
            <span style={{ fontSize: 'clamp(0.95rem, 3.5vw, 1.6rem)', color: 'var(--primary)', display: 'block', marginBottom: '0.35rem', fontWeight: '800' }}>東京の初心者向け</span>
            米国株セミナー
          </h1>

          <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(0.98rem, 3.8vw, 1.35rem)', fontWeight: '800', color: 'var(--primary)', marginTop: '0.5rem', marginBottom: '0.65rem', textAlign: 'left', lineHeight: '1.6' }}>
            東京で開催する初心者向け投資勉強会。難しい専門用語を使わず、わかりやすくお話しします。
          </p>
          <p className="hero-subtitle" style={{ fontFamily: 'var(--font-body)', maxWidth: '600px', marginBottom: '1rem', color: 'var(--text-muted)', textAlign: 'left', fontSize: 'clamp(0.9rem, 3.3vw, 1.08rem)', lineHeight: '1.65' }}>
            カフェでリラックスした雰囲気で、<br className="sp-hide" />
            投資の「わからない」を「わかった」に変えませんか？
          </p>

          <div className="seminar-hero-fv-image">
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

      {/* Main Content Sections (2. 日程 -> 3. こんな方におすすめ -> 4. 学べること -> 5. 当日の流れ -> 6. 講師について) */}
      <section style={{ background: 'white', padding: '2.5rem 0 3rem 0' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '3rem' }}>

          {/* 2. 開催スケジュール */}
          <div id="schedule">
            <h2 style={{ fontSize: '1.6rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.8rem', paddingLeft: '0.8rem', borderLeft: '5px solid var(--primary)' }}>開催スケジュール</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '1.25rem', lineHeight: '1.8' }}>現在募集中の米国株セミナーの日程は以下の通りです。</p>
            <SeminarScheduleList
              items={scheduleItems}
              seminarType="us_stock"
              applyButtonLabel="申し込み"
              emptyMessage="現在、予定されているセミナーはありません。"
            />
          </div>

          {/* 3. こんな方におすすめ */}
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

          {/* 4. このセミナーで学べること */}
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

          {/* 5. 当日の流れ */}
          <div>
            <h2 style={{ fontSize: '1.6rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.8rem', paddingLeft: '0.8rem', borderLeft: '5px solid var(--primary)' }}>当日の流れ</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: '1.8' }}>自己紹介から始まり、投資の基本マインドから実践までステップバイステップで学びます。</p>
            <div className="glass-card" style={{ padding: '1.5rem' }}>
              <ol style={{ paddingLeft: '1.2rem', margin: 0, color: 'var(--text-muted)', fontSize: '0.95rem', display: 'flex', flexDirection: 'column', gap: '0.6rem', lineHeight: '1.8' }}>
                <li>自己紹介</li>
                <li>投資の基本マインドセット</li>
                <li>米国株のメリット・デメリット</li>
                <li>質疑応答・シェアリング</li>
              </ol>
            </div>
          </div>

          {/* 6. 講師について */}
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
                <li>・運用実績：5年で1300%以上（2020年から投資を始め、今年で{yearsCount}年目）</li>
                <li>・サラリーマンと事業を並行しながら、1日の投資時間は平均1時間未満</li>
                <li>・2026年7月、経済的自立とセミリタイアを両立する「サイドFIRE」を達成</li>
                <li>・時間的・経済的なゆとりを生み出す堅実な資産形成スタイルを確立</li>
                <li>・「投資で痛い思いをする人を一人でも減らしたい」との想いから初心者向けに発信中</li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* 7. お申し込み */}
      <section id="apply-form-section" style={{ background: 'var(--bg-warm)', padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.8rem', paddingLeft: '0.8rem', borderLeft: '5px solid var(--primary)' }}>お申し込み</h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '2rem', lineHeight: '1.8' }}>以下のお申し込みフォームより、ご希望の日程を選択してご予約ください。</p>
          <div className="glass-card" style={{ padding: '2rem 1.5rem', borderRadius: '24px', border: '1px solid rgba(176, 58, 46, 0.15)', boxShadow: 'var(--shadow-soft)', background: 'white', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left' }}>
            <div style={{ width: '100%' }}>
              <ApplyForm sessions={availableSessions} selectedSessionId={resolvedSearchParams?.event} />
            </div>
          </div>
        </div>
      </section>

      {/* 8. このセミナーについて -> 9. 開催エリア -> 10. よくある質問 -> 定義文 */}
      <section style={{ background: 'white', padding: '3rem 0 4rem 0' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '3rem' }}>

          {/* 8. 📌 このセミナーについて（条件のまとめ） */}
          <div style={{ padding: '1.5rem', background: 'rgba(255, 255, 255, 0.8)', borderRadius: '16px', border: '1px solid var(--primary-light)', boxShadow: 'var(--shadow-soft)' }}>
            <h2 style={{ fontSize: '1.3rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', borderBottom: 'none' }}>
              📌 このセミナーについて
            </h2>
            <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem', color: 'var(--text-main)', fontSize: '0.95rem', lineHeight: '1.8' }}>
              <li>・東京米国株クラブの米国株セミナーは、投資初心者向けの少人数制の勉強会です（対面1,000円／オンライン無料）。</li>
              <li>・会場は東京都内・神奈川県内のカフェと、オンライン（Zoom）です。</li>
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
                    <td style={{ padding: '0.8rem', border: '1px solid var(--border)', fontWeight: '700', whiteSpace: 'nowrap' }}>対面</td>
                    <td style={{ padding: '0.8rem', border: '1px solid var(--border)', textAlign: 'left' }}>駅近くの落ち着いたカフェ（詳しい場所は、お申し込み後にメールでお知らせします）</td>
                    <td style={{ padding: '0.8rem', border: '1px solid var(--border)', whiteSpace: 'nowrap' }}>4名</td>
                    <td style={{ padding: '0.8rem', border: '1px solid var(--border)', whiteSpace: 'nowrap' }}>1,000円（ご自身の飲食代は別）</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '0.8rem', border: '1px solid var(--border)', fontWeight: '700', whiteSpace: 'nowrap' }}>オンライン</td>
                    <td style={{ padding: '0.8rem', border: '1px solid var(--border)', textAlign: 'left' }}>Zoomウェビナー（お申し込み後に、入室用のURLをお送りします）</td>
                    <td style={{ padding: '0.8rem', border: '1px solid var(--border)', whiteSpace: 'nowrap' }}>4名</td>
                    <td style={{ padding: '0.8rem', border: '1px solid var(--border)', whiteSpace: 'nowrap' }}>無料</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* 9. 開催エリア */}
          <div>
            <h2 style={{ fontSize: '1.6rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.8rem', paddingLeft: '0.8rem', borderLeft: '5px solid var(--primary)' }}>開催エリア</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: '1.8' }}>
              東京・神奈川のアクセスしやすいカフェ、またはオンラインでご参加いただけます。これまで300名以上の方にご参加いただきました。
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
              <div className="glass-card" style={{ padding: '1.5rem', borderRadius: '16px' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', wordBreak: 'keep-all', whiteSpace: 'nowrap' }}>
                  <MapPin size={20} color="var(--primary)" /> 東京エリア
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: 0, lineHeight: '1.6' }}>都内のアクセスしやすい駅周辺のカフェで開催します。お仕事帰りや休日のお出かけついでにも便利です。</p>
              </div>
              <div className="glass-card" style={{ padding: '1.5rem', borderRadius: '16px' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', wordBreak: 'keep-all', whiteSpace: 'nowrap' }}>
                  <MapPin size={20} color="var(--primary)" /> 神奈川エリア
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: 0, lineHeight: '1.6' }}>神奈川県内のアクセスしやすい駅周辺のカフェで開催します。お仕事帰りや休日のお出かけついでにも便利です。</p>
              </div>
              <div className="glass-card" style={{ padding: '1.5rem', borderRadius: '16px' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', wordBreak: 'keep-all', whiteSpace: 'nowrap' }}>
                  <Monitor size={20} color="var(--primary)" /> オンライン（Zoom）
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: 0, lineHeight: '1.6' }}>全国どこからでもご参加いただけるZoom開催も随時行っております。顔出しでリラックスしてご参加ください。</p>
              </div>
            </div>
          </div>

          {/* 10. よくある質問 */}
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

          {/* Definition Paragraph */}
          <div style={{
            background: 'white',
            padding: '1.5rem',
            borderRadius: '12px',
            border: '1px solid rgba(0,0,0,0.1)',
          }}>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1rem',
              color: 'var(--text-main)',
              lineHeight: '1.8',
              margin: 0
            }}>
              <strong>東京米国株クラブとは</strong>、投資初心者向けに米国株・新NISAを活用した長期・積立・分散投資の基礎をわかりやすく教える少人数制の勉強会コミュニティです。5年で1300%以上の運用実績を持つ現役投資家（とびー）が主催しており、金融商品の販売や勧誘を一切行わない純粋な学びの場を提供しています。東京・神奈川での対面形式やオンライン（Zoom）にて、少人数制のセミナー（オンラインは無料）やキャッシュフローゲーム会を定期的に開催し、これまで延べ300名以上の初心者が受講しています。ギャンブルではない堅実な資産形成を通じて、参加者の将来の不安解消や経済的自立をサポートする活動を行っています。
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
