import { Metadata } from 'next';
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'キャッシュフローゲーム会とは｜ゲームの内容・学べること・当日の流れ',
  description: '「金持ち父さん」で知られるキャッシュフローゲームを使った勉強会の内容を解説。ラットレースの仕組み、学べること、当日の流れ、講師紹介まで。',
  alternates: {
    canonical: 'https://www.tokyo-us-stock.com/seminar/cashflow-game/guide',
  },
  openGraph: {
    title: 'キャッシュフローゲーム会とは｜ゲームの内容・学べること・当日の流れ',
    description: '「金持ち父さん」で知られるキャッシュフローゲームを使った勉強会の内容を解説。ラットレースの仕組み、学べること、当日の流れ、講師紹介まで。',
    url: 'https://www.tokyo-us-stock.com/seminar/cashflow-game/guide',
    siteName: '東京米国株クラブ',
    images: [
      {
        url: 'https://www.tokyo-us-stock.com/images/cfg/cfg-hero.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'ja_JP',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'キャッシュフローゲーム会とは｜ゲームの内容・学べること・当日の流れ',
    description: '「金持ち父さん」で知られるキャッシュフローゲームを使った勉強会の内容を解説。ラットレースの仕組み、学べること、当日の流れ、講師紹介まで。',
    images: ['https://www.tokyo-us-stock.com/images/cfg/cfg-hero.jpg'],
  },
};

export const revalidate = 3600;

function generateArticleSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "キャッシュフローゲーム会とは｜ゲームの内容・学べること・当日の流れ",
    "description": "「金持ち父さん」で知られるキャッシュフローゲームを使った勉強会の内容を解説。ラットレースの仕組み、学べること、当日の流れ、講師紹介まで。",
    "author": {
      "@type": "Person",
      "name": "とびー",
      "url": "https://www.tokyo-us-stock.com/about"
    },
    "publisher": {
      "@type": "Organization",
      "name": "東京米国株クラブ",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.tokyo-us-stock.com/icon.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.tokyo-us-stock.com/seminar/cashflow-game/guide"
    }
  };
}

function generateFaqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
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

export default function GuidePage() {
  const articleSchema = generateArticleSchema();
  const faqSchema = generateFaqSchema();

  return (
    <div className="seminar-page" style={{ overflowWrap: 'break-word', background: 'var(--bg-light)' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="container" style={{ padding: '1rem 0' }}>
        <nav aria-label="breadcrumb" style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
          <Link href="/" style={{ color: 'var(--primary)', textDecoration: 'none' }}>ホーム</Link> &gt;{' '}
          <Link href="/seminar" style={{ color: 'var(--primary)', textDecoration: 'none' }}>セミナー</Link> &gt;{' '}
          <Link href="/seminar/cashflow-game" style={{ color: 'var(--primary)', textDecoration: 'none' }}>キャッシュフローゲーム会</Link> &gt;{' '}
          <span>ゲームの内容と学べること</span>
        </nav>
      </div>

      <section style={{ padding: '3rem 0 2rem' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h1 className="post-title" style={{ fontSize: 'clamp(1.5rem, 5vw, 2.2rem)', fontWeight: '900', color: 'var(--primary-dark)', marginBottom: '1.5rem', lineHeight: '1.4' }}>
            キャッシュフローゲーム会とは｜ゲームの内容・学べること・当日の流れ
          </h1>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-main)', lineHeight: '1.8', marginBottom: '2rem' }}>
            本ページでは、世界中で愛される「キャッシュフローゲーム」を使った体験型の勉強会について、その目的やゲームの仕組み、学べる内容、そして当日の詳しい流れをご紹介します。ラットレースから抜け出すための第一歩として、投資初心者の方が安全に学べる環境をご用意しています。
          </p>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <Link href="/seminar/cashflow-game#schedule" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem', fontWeight: 'bold', textDecoration: 'none', display: 'inline-block', borderRadius: '30px' }}>
              日程を見て申し込む
            </Link>
          </div>
        </div>
      </section>

      {/* キャッシュフローゲーム会について */}
      <section style={{ padding: '2rem 0', background: 'white' }}>
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
            {/* Removed the stats as per instructions */}
          </div>
        </div>
      </section>

      {/* キャッシュフローゲームとは */}
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

      {/* 当日の流れ（詳細版） Section */}
      <section style={{ padding: '4rem 0', background: 'var(--bg-light)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ marginBottom: '2rem', textAlign: 'center', width: '100%' }}>
            <h2 style={{ fontSize: 'clamp(1.5rem, 5vw, 2rem)', fontWeight: '900', marginBottom: '1rem', color: 'var(--primary-dark)' }}>当日の流れ（詳細）</h2>
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

      {/* 米国株セミナーとの違い Section */}
      <section style={{ padding: '4rem 0', background: 'white' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ marginBottom: '2rem', textAlign: 'center', width: '100%' }}>
            <h2 style={{ fontSize: 'clamp(1.5rem, 5vw, 2rem)', fontWeight: '900', marginBottom: '1rem', color: 'var(--primary-dark)' }}>米国株セミナーとの違い</h2>
          </div>
          <div className="glass-card" style={{ padding: '2.5rem', background: 'var(--bg-light)' }}>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-main)', lineHeight: '1.8', marginBottom: '1.5rem' }}>
              当会が別途開催している「米国株セミナー」は、実際の株式市場を対象とした、より実践的で具体的な銘柄分析やポートフォリオ構築、投資戦略（テクニカル分析やファンダメンタルズ分析など）を学ぶための座学中心の講座です。すでに証券口座を持っており、具体的な投資手法を知りたい方に適しています。
            </p>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-main)', lineHeight: '1.8', marginBottom: '1.5rem' }}>
              一方で、こちらの「キャッシュフローゲーム会」は、ボードゲームを通して<strong>投資の基礎的な考え方やマインドセット、お金の全体像</strong>を身につけることを目的としています。個別銘柄の選び方などのテクニカルな知識ではなく、「そもそもなぜ投資が必要なのか」「資産と負債はどう違うのか」といった、より根源的なテーマを扱います。
            </p>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-main)', lineHeight: '1.8' }}>
              そのため、まだ投資を始めていない全くの初心者の方や、「投資は怖いもの」というイメージを持っている方にこそ、まずはキャッシュフローゲーム会にご参加いただくことをお勧めしています。ゲームを通じてマインドセットを整えた後に、米国株セミナーで具体的な手法を学ぶことで、よりスムーズに実践へと移ることができます。
            </p>
          </div>
        </div>
      </section>

      {/* 講師について */}
      <section style={{ padding: '4rem 0', background: 'var(--bg-light)' }}>
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

      {/* FAQ Section */}
      <section style={{ padding: '4rem 0', background: 'white' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ marginBottom: '3rem', textAlign: 'center', width: '100%' }}>
            <h2 style={{ fontSize: 'clamp(1.5rem, 5vw, 2rem)', fontWeight: '900', marginBottom: '1rem', color: 'var(--primary-dark)' }}>その他のよくあるご質問</h2>
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

      <section style={{ padding: '2rem 0', background: 'white' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
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
        </div>
      </section>

      <div className="container" style={{ maxWidth: '800px', paddingBottom: '3rem' }}>
        <div className="glass-card" style={{ padding: '1.5rem', background: '#fff3f3', border: '2px solid #ffa5a5', borderRadius: '12px', textAlign: 'center' }}>
          <p style={{ color: '#d32f2f', fontWeight: 'bold', fontSize: '0.95rem', margin: 0 }}>
            ※当会は東京米国株クラブが主催する個人の勉強会で、キャッシュフローゲームの開発元・販売元とは関係ありません。
          </p>
        </div>
      </div>

      <section style={{ padding: '3rem 0 5rem', background: 'var(--bg-light)' }}>
        <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
          <div className="glass-card" style={{ padding: '3rem 2rem', background: 'white', borderRadius: '16px', boxShadow: 'var(--shadow-lg)' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--primary-dark)', marginBottom: '1rem' }}>
              ラットレースから抜け出す第一歩を踏み出そう
            </h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
              少人数制の勉強会です。初めての方もお気軽にご参加ください。
            </p>
            <Link href="/seminar/cashflow-game#schedule" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem', fontWeight: 'bold', textDecoration: 'none', display: 'inline-block', borderRadius: '30px' }}>
              次回の開催日程を見る →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
