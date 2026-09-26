import { Metadata } from 'next';
import Image from "next/image";
import { getCFGSchedule, CFGEvent } from "@/lib/microcms";
import CfgApplyForm from "@/components/CfgApplyForm";
import { MapPin, Target, BookOpen, ArrowRight, CheckCircle2 } from "lucide-react";

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

export const dynamic = 'force-dynamic';

function getJapaneseDayOfWeek(dateString: string): string {
  if (!dateString) return '';
  const cleanDateStr = dateString.replace(/\([^)]+\)/g, '').trim();
  const normalizedStr = cleanDateStr.replace(/\./g, '/').replace(/-/g, '/');
  const date = new Date(normalizedStr);
  if (isNaN(date.getTime())) return dateString;
  const days = ['日', '月', '火', '水', '木', '金', '土'];
  return `${cleanDateStr} (${days[date.getDay()]})`;
}

function generateEventSchema(events: CFGEvent[]) {
  if (!events || events.length === 0) return [];
  
  return events.map(ev => {
    let startDateStr = '';
    const cleanDateStr = ev.date.replace(/\([^)]+\)/g, '').trim().replace(/\./g, '-');
    const startTimeStr = ev.time ? ev.time.split('〜')[0].trim().replace(':', '') : '1000';
    const formattedStartTime = startTimeStr.length === 4 ? `${startTimeStr.slice(0,2)}:${startTimeStr.slice(2,4)}` : (ev.time ? ev.time.split('〜')[0].trim() : '10:00');
    
    if (cleanDateStr && formattedStartTime) {
      startDateStr = `${cleanDateStr}T${formattedStartTime}:00+09:00`;
    }

    const locName = (ev.location || '').includes('川崎') ? '神奈川県川崎駅前 貸し会議室' : '新宿駅前 貸し会議室';
    const locCity = (ev.location || '').includes('川崎') ? '川崎市' : '新宿区';
    const locPref = (ev.location || '').includes('川崎') ? '神奈川県' : '東京都';

    return {
      "@context": "https://schema.org",
      "@type": "EducationEvent",
      "name": "キャッシュフローゲーム会",
      "startDate": startDateStr,
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
  const schedule = await getCFGSchedule();
  const availableEvents = schedule.filter(ev => ev.status === 'open' || ev.status === 'full');
  
  const eventSchemas = generateEventSchema(schedule.filter(ev => ev.status === 'open'));
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
              キャッシュフローゲーム会は、ベストセラー書籍『金持ち父さん 貧乏父さん』の著者ロバート・キヨサキ氏が考案したボードゲームを通じて、お金の知識（ファイナンシャル・リテラシー）を実践的に学ぶことができる体験型の勉強会です。
            </p>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-main)', lineHeight: '1.8' }}>
              座学だけでは身につきにくい「資産と負債の違い」や「投資の考え方」を、ゲームの仮想世界で失敗を経験しながら安全に楽しく学べます。投資初心者の方から、投資を始めているけれどうまくいっていない方まで、多くの方におすすめのイベントです。
            </p>
          </div>
        </div>
      </section>

      {/* About CFG Section */}
      <section className="about-cfg" style={{ padding: '3rem 0', background: 'var(--bg-light)' }}>
        <div className="container" style={{ maxWidth: '1000px' }}>
          <div style={{ marginBottom: '3rem', textAlign: 'center', width: '100%' }}>
            <h2 style={{ fontSize: 'clamp(1.5rem, 5vw, 2rem)', fontWeight: '900', marginBottom: '1rem', color: 'var(--primary-dark)' }}>キャッシュフローゲームとは</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.8', maxWidth: '800px', margin: '0 auto' }}>
              給料のために働き続ける「ラットレース」から抜け出し、お金がお金を生み出す「ファーストトラック」へ移行するための考え方を、ボード上でリアルに体験できるシミュレーションゲームです。
            </p>
          </div>
        </div>
      </section>
      
      {/* 学べること Section */}
      <section style={{ padding: '4rem 0', background: 'white' }}>
        <div className="container" style={{ maxWidth: '1000px' }}>
          <div style={{ marginBottom: '3rem', textAlign: 'center', width: '100%' }}>
            <h2 style={{ fontSize: 'clamp(1.5rem, 5vw, 2rem)', fontWeight: '900', marginBottom: '1rem', color: 'var(--primary-dark)' }}>学べること</h2>
          </div>

          <div className="features-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            <div className="feature-card" style={{ background: 'var(--bg-warm)', padding: '2.5rem 2rem', borderRadius: '16px', textAlign: 'center' }}>
              <div className="feature-icon" style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <Image src="/images/cfg/rat-race.png" alt="ラットレース" width={120} height={120} style={{ objectFit: 'contain' }} />
              </div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '1rem', color: 'var(--primary-dark)' }}>ラットレースからの脱出</h3>
              <p style={{ color: 'var(--text-main)', lineHeight: '1.8', fontSize: '0.95rem', wordBreak: 'keep-all' }}>
                給料をもらって支払いをする「ラットレース」。そこから抜け出して「ファーストトラック」に乗るための具体的なプロセスとマインドを学びます。
              </p>
            </div>
            
            <div className="feature-card" style={{ background: 'var(--bg-warm)', padding: '2.5rem 2rem', borderRadius: '16px', textAlign: 'center' }}>
              <div className="feature-icon" style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <Image src="/images/cfg/financial-statement.png" alt="財務諸表" width={120} height={120} style={{ objectFit: 'contain' }} />
              </div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '1rem', color: 'var(--primary-dark)' }}>財務諸表の書き方</h3>
              <p style={{ color: 'var(--text-main)', lineHeight: '1.8', fontSize: '0.95rem', wordBreak: 'keep-all' }}>
                ゲームを通じて、自分自身の「損益計算書」と「貸借対照表」のつけ方を実践的に身につけ、お金の流れを客観的に把握する力を養います。
              </p>
            </div>

            <div className="feature-card" style={{ background: 'var(--bg-warm)', padding: '2.5rem 2rem', borderRadius: '16px', textAlign: 'center' }}>
              <div className="feature-icon" style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <Image src="/images/cfg/investment.png" alt="投資" width={120} height={120} style={{ objectFit: 'contain' }} />
              </div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '1rem', color: 'var(--primary-dark)' }}>投資のチャンスとリスク</h3>
              <p style={{ color: 'var(--text-main)', lineHeight: '1.8', fontSize: '0.95rem', wordBreak: 'keep-all' }}>
                不動産、株、ビジネスなど、様々な投資機会に直面し、安全な環境でリスクとリターンを体験。良い借金と悪い借金の違いも理解できます。
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
            <p style={{ color: 'var(--text-muted)' }}>初心者の方でも安心して楽しめるよう、丁寧にサポートいたします。</p>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div className="glass-card" style={{ padding: '1.5rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <div style={{ background: 'var(--primary)', color: 'white', padding: '0.5rem 1rem', borderRadius: '8px', fontWeight: 'bold' }}>1</div>
              <div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--primary-dark)', marginBottom: '0.5rem' }}>自己紹介・ゲームルールの説明（約20分）</h3>
                <p style={{ color: 'var(--text-main)', fontSize: '0.95rem', lineHeight: '1.8' }}>初めての方にもわかりやすく、ゲームの目的と基本的な進め方、財務諸表の書き方を解説します。</p>
              </div>
            </div>
            <div className="glass-card" style={{ padding: '1.5rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <div style={{ background: 'var(--primary)', color: 'white', padding: '0.5rem 1rem', borderRadius: '8px', fontWeight: 'bold' }}>2</div>
              <div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--primary-dark)', marginBottom: '0.5rem' }}>ゲーム開始（約1時間20分）</h3>
                <p style={{ color: 'var(--text-main)', fontSize: '0.95rem', lineHeight: '1.8' }}>実際にサイコロを振り、給料をもらい、投資をして不労所得を増やしていきます。途中、リストラや無駄遣いなどのアクシデントも発生します。</p>
              </div>
            </div>
            <div className="glass-card" style={{ padding: '1.5rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <div style={{ background: 'var(--primary)', color: 'white', padding: '0.5rem 1rem', borderRadius: '8px', fontWeight: 'bold' }}>3</div>
              <div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--primary-dark)', marginBottom: '0.5rem' }}>振り返り・感想のシェア（約20分）</h3>
                <p style={{ color: 'var(--text-main)', fontSize: '0.95rem', lineHeight: '1.8' }}>ゲーム終了後、各自の気づきや学びを共有します。現実の投資にどう活かせるかを考える重要な時間です。</p>
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
          </div>
          
          <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <li className="glass-card" style={{ padding: '1rem 1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <CheckCircle2 color="var(--primary)" />
              <span style={{ fontSize: '1.05rem', fontWeight: '600' }}>投資に興味はあるが、何から始めればいいかわからない方</span>
            </li>
            <li className="glass-card" style={{ padding: '1rem 1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <CheckCircle2 color="var(--primary)" />
              <span style={{ fontSize: '1.05rem', fontWeight: '600' }}>『金持ち父さん 貧乏父さん』を読んで感銘を受けた方</span>
            </li>
            <li className=" আর্থিক状況を改善し、将来の不安をなくしたい方" style={{ padding: '1rem 1.5rem', display: 'flex', alignItems: 'center', gap: '1rem', background: 'white', borderRadius: '16px', border: '1px solid var(--border)' }}>
              <CheckCircle2 color="var(--primary)" />
              <span style={{ fontSize: '1.05rem', fontWeight: '600' }}>財務諸表（B/S・P/L）の基礎的な読み方を実践的に学びたい方</span>
            </li>
            <li className="glass-card" style={{ padding: '1rem 1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <CheckCircle2 color="var(--primary)" />
              <span style={{ fontSize: '1.05rem', fontWeight: '600' }}>同じようにお金の勉強をしている前向きな仲間と交流したい方</span>
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
          <div className="glass-card" style={{ padding: '2rem', background: 'white' }}>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-main)', lineHeight: '1.8', marginBottom: '1.5rem' }}>
              当会が別途開催している「米国株セミナー」は、より実践的で具体的な銘柄分析やポートフォリオ構築、投資戦略を学ぶための座学中心の講座です。
            </p>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-main)', lineHeight: '1.8' }}>
              一方で、こちらの「キャッシュフローゲーム会」は、ボードゲームを通して<strong>投資の基礎的な考え方やマインドセット</strong>を身につけることを目的としています。これから投資を始める方は、まずキャッシュフローゲーム会でお金の基本を学び、その後に米国株セミナーで具体的な手法を学ぶ、というステップアップをおすすめしています。
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
          <div className="schedule-table-container schedule-desktop-only" style={{ width: '100%', overflowX: 'auto', WebkitOverflowScrolling: 'touch' as any, paddingBottom: '1rem' }}>
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
      
      <div style={{ textAlign: 'center', padding: '2rem 1rem', background: 'var(--bg-light)', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
        ※当会は東京米国株クラブが主催する個人の勉強会で、キャッシュフローゲームの開発元・販売元とは関係ありません。
      </div>

    </div>
  );
}
