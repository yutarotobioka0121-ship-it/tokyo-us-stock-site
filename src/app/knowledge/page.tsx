import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, ShieldCheck, CheckCircle2, TrendingUp, Layers, HelpCircle, DollarSign, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: '米国株（米国株式）とは？5つの大きな特徴や日本株との違い・始め方を徹底解説 | 東京米国株クラブ',
  description: '初心者向けに米国株（米国株式）とは何か、5つの大きな特徴やメリット、日本株との比較、代表セクター、3大指数（S&P500・NYダウ・ナスダック）、1株購入・年4回配当・新NISA活用からリスク対策・FAQまで完全網羅。',
  alternates: {
    canonical: 'https://www.tokyo-us-stock.com/knowledge',
  },
  openGraph: {
    title: '米国株（米国株式）とは？5つの大きな特徴や日本株との違い・始め方を徹底解説 | 東京米国株クラブ',
    description: '初心者向けに米国株（米国株式）とは何か、5つの大きな特徴やメリット、日本株との比較、代表セクター、3大指数（S&P500・NYダウ・ナスダック）、新NISA活用からリスク対策・FAQまで完全網羅。',
    url: 'https://www.tokyo-us-stock.com/knowledge',
    siteName: '東京米国株クラブ',
    images: [
      {
        url: 'https://www.tokyo-us-stock.com/ogp.png',
        width: 1200,
        height: 630,
        alt: '米国株（米国株式）とは？特徴と初心者向け解説',
      },
    ],
    locale: 'ja_JP',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: '米国株（米国株式）とは？5つの大きな特徴や日本株との違い・始め方を徹底解説 | 東京米国株クラブ',
    description: '初心者向けに米国株（米国株式）とは何か、5つの大きな特徴やメリット、日本株との比較、代表セクター、3大指数（S&P500・NYダウ・ナスダック）、新NISA活用からリスク対策・FAQまで完全網羅。',
    images: ['https://www.tokyo-us-stock.com/ogp.png'],
  },
};

export default function KnowledgePage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: '米国株（米国株式）はいくらから始められますか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '米国株（米国株式）は証券会社によって異なりますが、SBI証券・楽天証券などのネット証券では1株から購入できます。人気銘柄のAppleであれば数万円から投資できます。新NISAのつみたて投資枠を使えば月100円から始めることも可能です。',
        },
      },
      {
        '@type': 'Question',
        name: '米国株と日本株どちらがおすすめですか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '長期投資を目的とする初心者には、過去100年以上成長し続けているS&P500への分散投資（米国株インデックス）がおすすめです。一方、日本株は日本語で情報収集しやすく、身近な企業に投資しやすいメリットがあります。両方を組み合わせるのも有効です。',
        },
      },
      {
        '@type': 'Question',
        name: '米国株（米国株式）の主な特徴を教えてください',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '米国株（米国株式）の主な特徴は①世界最大規模の株式市場（シェア約60%）、②配当文化が強く年4回配当や増配企業が多い、③1株から購入可能、④S&P500など右肩上がりの代表指数がある、⑤新NISAで非課税投資ができる、の5点です。',
        },
      },
      {
        '@type': 'Question',
        name: '英語が話せなくても米国株（米国株式）投資はできますか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'はい、全く問題ありません。SBI証券や楽天証券などの国内主要ネット証券を利用すれば、すべての取引画面、銘柄検索、注文、決算情報の日本語要約などを完全な日本語で行うことができます。',
        },
      },
      {
        '@type': 'Question',
        name: '米国株の配当金にかかる「二重課税」とは何ですか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '米国株の配当金は、まず米国内で10%の税金が源泉徴収され、その後、残りの金額に対して日本国内で約20.315%の税金が課されます。確定申告時に「外国税額控除」を申請することで、米国内で引かれた10%分の一部または全部を控除し、取り戻すことができます。',
        },
      },
    ],
  };

  return (
    <div className="knowledge-page" style={{ overflowWrap: 'break-word' }}>
      {/* JSON-LD FAQPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Header Section */}
      <section className="post-header" style={{ background: 'var(--bg-warm)', padding: '100px 0 2.5rem 0', textAlign: 'left' }}>
        <div className="container">
          <Link href="/" className="btn-link" style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', fontFamily: 'var(--font-body)', fontWeight: '700', textDecoration: 'none' }}>
            <ArrowLeft size={18} style={{ marginRight: '0.5rem' }} /> トップへ戻る
          </Link>
          <h1 className="post-title" style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.8rem, 6vw, 2.8rem)', fontWeight: '900', textAlign: 'left', marginLeft: '0', marginRight: 'auto', maxWidth: 'none', marginBottom: '0.5rem', color: 'var(--primary-dark)', lineHeight: '1.3' }}>
            米国株（米国株式）とは？5つの大きな特徴や日本株との違い・始め方を徹底解説
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section style={{ background: 'white', padding: 'clamp(3rem, 8vw, 5rem) 0' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'left' }}>

          {/* プロローグ */}
          <div style={{ marginBottom: '3rem' }}>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
              私たちが日々使用しているiPhone（Apple）、検索エンジンやYouTube（Google / Alphabet）、日常の買い物からクラウドインフラまで支えるAmazonやMicrosoft、SNS（Meta）などは、すべて<strong>アメリカ（米国）を代表する世界最高峰のメガ企業</strong>が提供しています。
            </p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
              <strong>米国株（米国株式）とは何か？一言で言えば、これらのアメリカ市場に上場している優秀な企業の株式を購入し、世界経済の成長に乗って共に資産を育てる投資手法のこと</strong>です。
            </p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: 0 }}>
              世界の経済・金融の中心地である米国株式市場は、過去100年以上にわたり、数々の世界恐慌やITバブル崩壊、リーマンショック、コロナショックなどの試練を乗り越え、力強い右肩上がりの成長を更新し続けてきました。本ページでは、初心者の方が米国株投資を安心して始めるための基礎知識、日本株との決定的な違い、5つの魅力、代表指数やセクターの解説、失敗しないリスク管理まで徹底解説します。
            </p>
          </div>

          {/* 1章: 米国株（米国株式）とは何か？日本株との根本的な違い */}
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.3rem, 3.5vw, 1.6rem)', fontWeight: '900', color: 'var(--primary-dark)', borderBottom: '2px solid var(--bg-warm)', paddingBottom: '0.8rem', marginTop: '3rem', marginBottom: '1.5rem' }}>
            1. 米国株（米国株式）とは何か？日本株との根本的な違い
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
            米国株（米国株式）は、私たちが普段耳にする日本の東証（東京証券取引所）に上場する日本株とは、投資家にとって大きなメリットとなる仕組みの違いが存在します。
          </p>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
            日本株の場合、原則として「100株単位（単元株）」で購入する必要があるため、有名企業の株を買うためには数十万円から数百万円というまとまった初期資金が必要になります。しかし、米国株（米国株式）は<strong>すべての銘柄が「1株単位」から自由に購入可能</strong>です。例えば、AppleやCoca-Colaなどの世界的大企業でも、数千円〜数万円という少額から気軽に購入できます。
          </p>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '2.5rem' }}>
            さらに、日本株の企業の多くが配当金を「年1回または年2回」しか支払わないのに対し、米国企業の多くは<strong>「年4回（四半期ごと）」に現金配当金を支払う</strong>文化が定着しています。3ヶ月ごとに配当収入が得られるため、インカムゲイン（配当金収入）を実感しやすい点も投資家にとって魅力的なポイントです。
          </p>

          {/* 2章: 米国株（米国株式）の5つの大きな特徴 */}
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.3rem, 3.5vw, 1.6rem)', fontWeight: '900', color: 'var(--primary-dark)', borderBottom: '2px solid var(--bg-warm)', paddingBottom: '0.8rem', marginTop: '3rem', marginBottom: '1.5rem' }}>
            2. 米国株（米国株式）の5つの大きな特徴
          </h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2.5rem' }}>
            <div style={{ background: 'var(--bg-warm)', padding: '1.5rem', borderRadius: '16px', borderLeft: '4px solid var(--primary)' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '900', color: 'var(--primary-dark)', margin: '0 0 0.5rem 0' }}>
                ① 世界最大の株式市場（全世界の時価総額シェア約60%）
              </h3>
              <p style={{ fontSize: '0.975rem', lineHeight: '1.8', margin: 0, color: 'var(--text-main)' }}>
                全世界の株式市場の合計時価総額のうち、アメリカ市場だけで約60%を占めます。日本市場（約5%前後）と比較しても桁違いの規模を誇り、世界中から巨額の投資資金と最優秀な頭脳が集中しています。
              </p>
            </div>

            <div style={{ background: 'var(--bg-warm)', padding: '1.5rem', borderRadius: '16px', borderLeft: '4px solid var(--primary)' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '900', color: 'var(--primary-dark)', margin: '0 0 0.5rem 0' }}>
                ② 株主還元（配当金増額・自社株買い）の意識が世界一高い
              </h3>
              <p style={{ fontSize: '0.975rem', lineHeight: '1.8', margin: 0, color: 'var(--text-main)' }}>
                アメリカの企業経営者は「株主価値の最大化」が命題とされており、25年以上連続して配当金を増やし続ける「配当貴族」企業が100社以上、50年以上連続増配の「配当王」も多数存在します。
              </p>
            </div>

            <div style={{ background: 'var(--bg-warm)', padding: '1.5rem', borderRadius: '16px', borderLeft: '4px solid var(--primary)' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '900', color: 'var(--primary-dark)', margin: '0 0 0.5rem 0' }}>
                ③ 1株単位から少額で購入でき、分散投資が簡単
              </h3>
              <p style={{ fontSize: '0.975rem', lineHeight: '1.8', margin: 0, color: 'var(--text-main)' }}>
                1株数千円〜数万円で買えるため、少額から複数の優良企業に資金を分散して購入できます。初心者でも大きなリスクを取らずに自分だけのポートフォリオを構築できます。
              </p>
            </div>

            <div style={{ background: 'var(--bg-warm)', padding: '1.5rem', borderRadius: '16px', borderLeft: '4px solid var(--primary)' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '900', color: 'var(--primary-dark)', margin: '0 0 0.5rem 0' }}>
                ④ S&P500など長期で最高値を更新し続ける最強の代表指数がある
              </h3>
              <p style={{ fontSize: '0.975rem', lineHeight: '1.8', margin: 0, color: 'var(--text-main)' }}>
                米国を代表する優良500社で構成される「S&P500」や、ハイテク・イノベーション企業が集まる「ナスダック100」など、長期で保有するだけで資産が増えてきた歴史ある指数に簡単に投資できます。
              </p>
            </div>

            <div style={{ background: 'var(--bg-warm)', padding: '1.5rem', borderRadius: '16px', borderLeft: '4px solid var(--primary)' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '900', color: 'var(--primary-dark)', margin: '0 0 0.5rem 0' }}>
                ⑤ 日本の「新NISA」制度を使って非課税で運用できる
              </h3>
              <p style={{ fontSize: '0.975rem', lineHeight: '1.8', margin: 0, color: 'var(--text-main)' }}>
                新NISA（つみたて投資枠・成長投資枠）を活用することで、米国株インデックスファンドの運用益や個別の米国株で得た利益（国内分約20%）を全額非課税で受け取ることができます。
              </p>
            </div>
          </div>

          {/* 3章: 米国株と日本株の比較表 */}
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.3rem, 3.5vw, 1.6rem)', fontWeight: '900', color: 'var(--primary-dark)', borderBottom: '2px solid var(--bg-warm)', paddingBottom: '0.8rem', marginTop: '3rem', marginBottom: '1.5rem' }}>
            3. 米国株と日本株の比較表
          </h2>

          <div style={{ overflowX: 'auto', marginBottom: '2.5rem', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.08)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '500px', fontSize: '0.95rem', fontFamily: 'var(--font-body)' }}>
              <thead>
                <tr style={{ backgroundColor: 'var(--bg-warm)', borderBottom: '2px solid rgba(0,0,0,0.08)' }}>
                  <th style={{ padding: '0.9rem 1rem', fontWeight: '800', color: 'var(--primary-dark)' }}>比較項目</th>
                  <th style={{ padding: '0.9rem 1rem', fontWeight: '800', color: 'var(--primary-dark)' }}>日本株</th>
                  <th style={{ padding: '0.9rem 1rem', fontWeight: '800', color: 'var(--primary-dark)' }}>米国株（米国株式）</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                  <td style={{ padding: '0.9rem 1rem', fontWeight: '700', backgroundColor: 'rgba(0,0,0,0.01)' }}>購入最低単位</td>
                  <td style={{ padding: '0.9rem 1rem' }}>原則「100株単位」</td>
                  <td style={{ padding: '0.9rem 1rem', fontWeight: '700', color: 'var(--primary)' }}>「1株単位」から購入可能</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                  <td style={{ padding: '0.9rem 1rem', fontWeight: '700', backgroundColor: 'rgba(0,0,0,0.01)' }}>配当回数</td>
                  <td style={{ padding: '0.9rem 1rem' }}>年1〜2回が主流</td>
                  <td style={{ padding: '0.9rem 1rem', fontWeight: '700', color: 'var(--primary)' }}>年4回（四半期ごと）が主流</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                  <td style={{ padding: '0.9rem 1rem', fontWeight: '700', backgroundColor: 'rgba(0,0,0,0.01)' }}>25年連続増配企業数</td>
                  <td style={{ padding: '0.9rem 1rem' }}>花王などごく一部</td>
                  <td style={{ padding: '0.9rem 1rem', fontWeight: '700', color: 'var(--primary)' }}>100社以上存在（配当貴族）</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                  <td style={{ padding: '0.9rem 1rem', fontWeight: '700', backgroundColor: 'rgba(0,0,0,0.01)' }}>市場時価総額シェア</td>
                  <td style={{ padding: '0.9rem 1rem' }}>約5〜6%</td>
                  <td style={{ padding: '0.9rem 1rem', fontWeight: '700', color: 'var(--primary)' }}>約60%（世界圧倒的1位）</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                  <td style={{ padding: '0.9rem 1rem', fontWeight: '700', backgroundColor: 'rgba(0,0,0,0.01)' }}>取引時間（日本時間）</td>
                  <td style={{ padding: '0.9rem 1rem' }}>9:00〜15:30（日中）</td>
                  <td style={{ padding: '0.9rem 1rem' }}>23:30〜翌6:00（夜間・帰宅後）</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* 4章: 初心者が知っておくべき米国株の代表セクター */}
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.3rem, 3.5vw, 1.6rem)', fontWeight: '900', color: 'var(--primary-dark)', borderBottom: '2px solid var(--bg-warm)', paddingBottom: '0.8rem', marginTop: '3rem', marginBottom: '1.5rem' }}>
            4. 初心者が知っておくべき米国株の主要セクター（業種）
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
            米国株はGICS（世界産業分類基準）により11のセクター（業種）に分類されます。初心者の方が特に押さえておきたい主要4大セクターの特徴を紹介します。
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.2rem', marginBottom: '2.5rem' }}>
            <div style={{ background: '#fdfefe', border: '1px solid #e5e7e9', borderRadius: '14px', padding: '1.3rem' }}>
              <h3 style={{ fontSize: '1.05rem', fontWeight: '800', color: 'var(--primary-dark)', margin: '0 0 0.4rem 0' }}>
                💻 情報技術（テクノロジー）
              </h3>
              <p style={{ fontSize: '0.9rem', lineHeight: '1.7', margin: 0, color: 'var(--text-main)' }}>
                Apple、Microsoft、NVIDIAなど。高い売上成長力と世界シェアを誇り、株価の値上がり益（キャピタルゲイン）を強力に牽引するセクターです。
              </p>
            </div>

            <div style={{ background: '#fdfefe', border: '1px solid #e5e7e9', borderRadius: '14px', padding: '1.3rem' }}>
              <h3 style={{ fontSize: '1.05rem', fontWeight: '800', color: 'var(--primary-dark)', margin: '0 0 0.4rem 0' }}>
                🛒 生活必需品（ディフェンシブ）
              </h3>
              <p style={{ fontSize: '0.9rem', lineHeight: '1.7', margin: 0, color: 'var(--text-main)' }}>
                Procter & Gamble（P&G）、Coca-Cola、Walmartなど。不況下でも売上が落ちにくく、安定した配当金を長年出し続ける安全性の高いセクターです。
              </p>
            </div>

            <div style={{ background: '#fdfefe', border: '1px solid #e5e7e9', borderRadius: '14px', padding: '1.3rem' }}>
              <h3 style={{ fontSize: '1.05rem', fontWeight: '800', color: 'var(--primary-dark)', margin: '0 0 0.4rem 0' }}>
                🏥 ヘルスケア（医薬品・医療機器）
              </h3>
              <p style={{ fontSize: '0.9rem', lineHeight: '1.7', margin: 0, color: 'var(--text-main)' }}>
                Johnson & Johnson、Eli Lilly、Pfizerなど。高齢化社会に伴い需要が拡大し続け、成長性と高配当の両立が期待できるセクターです。
              </p>
            </div>

            <div style={{ background: '#fdfefe', border: '1px solid #e5e7e9', borderRadius: '14px', padding: '1.3rem' }}>
              <h3 style={{ fontSize: '1.05rem', fontWeight: '800', color: 'var(--primary-dark)', margin: '0 0 0.4rem 0' }}>
                💳 金融・サービス
              </h3>
              <p style={{ fontSize: '0.9rem', lineHeight: '1.7', margin: 0, color: 'var(--text-main)' }}>
                JPMorgan Chase、Visa、Mastercardなど。世界中で利用される決済ネットワークや銀行サービスを提供し、強固な収益基盤を持ちます。
              </p>
            </div>
          </div>

          {/* 5章: 米国株の代表的3大指数 */}
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.3rem, 3.5vw, 1.6rem)', fontWeight: '900', color: 'var(--primary-dark)', borderBottom: '2px solid var(--bg-warm)', paddingBottom: '0.8rem', marginTop: '3rem', marginBottom: '1.5rem' }}>
            5. 米国株の代表的3大指数（S&P500・NYダウ・ナスダック100）
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
            米国株全体の値動きを把握したり、インデックス投資を行う際によく使われる3つの代表的な株式指数を紹介します。
          </p>

          <ul style={{ lineHeight: '1.9', marginBottom: '2.5rem' }}>
            <li style={{ marginBottom: '1rem' }}>
              <strong>S&P500（エスアンドピー500）</strong><br />
              米国市場の主要優良企業500社で構成される時価総額加重型の株価指数。米国株式全体の時価総額の約80%をカバーしており、全世界のプロ投資家が指標として最も重視します。
            </li>
            <li style={{ marginBottom: '1rem' }}>
              <strong>NYダウ（ダウ工業株30種平均）</strong><br />
              アメリカを代表する超優良企業30社で構成される歴史ある指数。McDonald&apos;sやCoca-Colaなど、日本でも馴染みの深い一流企業が名を連ねています。
            </li>
            <li style={{ marginBottom: '1rem' }}>
              <strong>ナスダック100（NASDAQ100）</strong><br />
              IT新興企業向け市場「NASDAQ」に上場する、金融を除く時価総額上位100社で構成される指数。Apple、Google、Microsoft、NVIDIAなどが含まれ、高い成長性が期待できます。
            </li>
          </ul>

          {/* 6章: 米国株のリスク（デメリット）と失敗しない対策 */}
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.3rem, 3.5vw, 1.6rem)', fontWeight: '900', color: 'var(--primary-dark)', borderBottom: '2px solid var(--bg-warm)', paddingBottom: '0.8rem', marginTop: '3rem', marginBottom: '1.5rem' }}>
            6. 米国株のリスク（デメリット）と失敗しない対策
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
            米国株投資には数多くのメリットがありますが、投資である以上リスクも存在します。あらかじめリスクを正しく理解し対策を立てておきましょう。
          </p>

          <ol style={{ lineHeight: '1.9', marginBottom: '2.5rem' }}>
            <li style={{ marginBottom: '1rem' }}>
              <strong>為替変動リスク（円高リスク）</strong><br />
              米国株は米ドル建てで購入するため、株価が変わらなくても円高（例: 1ドル150円→130円）が進むと、円換算した際の資産額が減少します。<br />
              <span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>対策：</span>一括で購入せず、毎月一定額をコツコツ買い付ける「ドル・コスト平均法（積立投資）」を行うことで為替リスクを平滑化できます。
            </li>
            <li style={{ marginBottom: '1rem' }}>
              <strong>配当金の二重課税</strong><br />
              配当金に対して米国現地で10%、日本国内で約20%が徴収される二重課税が発生します。<br />
              <span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>対策：</span>確定申告で「外国税額控除」を申請するか、「新NISA口座」を活用して日本の税金をゼロに抑えるのが効果的です。
            </li>
            <li style={{ marginBottom: '1rem' }}>
              <strong>株価暴落時の心理的ショック</strong><br />
              市場全体が下落する局面では、一時的に保有資産がマイナス表示になることがあります。<br />
              <span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>対策：</span>過去100年の歴史上、米国株市場はどの暴落も数年で克服して高値を更新してきました。「長期保有」の姿勢を保ち、慌てて狼狽売り（投げ売り）しないことが一番の成功法則です。
            </li>
          </ol>

          {/* 7章: よくある質問（FAQ） */}
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.3rem, 3.5vw, 1.6rem)', fontWeight: '900', color: 'var(--primary-dark)', borderBottom: '2px solid var(--bg-warm)', paddingBottom: '0.8rem', marginTop: '3rem', marginBottom: '1.5rem' }}>
            7. 米国株についてよくある質問（FAQ）
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', marginBottom: '3rem' }}>
            <div style={{ background: '#fdfefe', border: '1px solid #e5e7e9', borderRadius: '14px', padding: '1.3rem 1.5rem' }}>
              <h3 style={{ fontSize: '1.05rem', fontWeight: '800', color: 'var(--primary-dark)', margin: '0 0 0.5rem 0' }}>
                Q. 米国株はいくらから始められますか？
              </h3>
              <p style={{ fontSize: '0.95rem', lineHeight: '1.8', margin: 0, color: 'var(--text-main)' }}>
                米国株は証券会社によって異なりますが、SBI証券・楽天証券などのネット証券では1株から購入できます。人気銘柄のAppleであれば数万円から投資できます。新NISAのつみたて投資枠を使えば月100円から始めることも可能です。
              </p>
            </div>

            <div style={{ background: '#fdfefe', border: '1px solid #e5e7e9', borderRadius: '14px', padding: '1.3rem 1.5rem' }}>
              <h3 style={{ fontSize: '1.05rem', fontWeight: '800', color: 'var(--primary-dark)', margin: '0 0 0.5rem 0' }}>
                Q. 米国株と日本株どちらがおすすめですか？
              </h3>
              <p style={{ fontSize: '0.95rem', lineHeight: '1.8', margin: 0, color: 'var(--text-main)' }}>
                長期投資を目的とする初心者には、過去100年以上成長し続けているS&P500への分散投資（米国株インデックス）がおすすめです。一方、日本株は日本語で情報収集しやすく身近な企業に投資しやすいメリットがあります。
              </p>
            </div>

            <div style={{ background: '#fdfefe', border: '1px solid #e5e7e9', borderRadius: '14px', padding: '1.3rem 1.5rem' }}>
              <h3 style={{ fontSize: '1.05rem', fontWeight: '800', color: 'var(--primary-dark)', margin: '0 0 0.5rem 0' }}>
                Q. 米国株の特徴を教えてください
              </h3>
              <p style={{ fontSize: '0.95rem', lineHeight: '1.8', margin: 0, color: 'var(--text-main)' }}>
                米国株の主な特徴は①世界最大規模の株式市場、②配当文化が強く年4回配当が多い、③1株から購入可能、④S&P500など代表的な指数がある、⑤新NISAで非課税投資ができる、の5点です。
              </p>
            </div>
          </div>

          {/* ナレッジナビゲーションリンク */}
          <div style={{ background: 'var(--bg-warm)', padding: '2rem', borderRadius: '20px', textAlign: 'center', border: '1px solid rgba(176,58,46,0.12)' }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.8rem' }}>
              もっと詳しく米国株を学びたい方へ
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: '1.7' }}>
              初心者向けの口座開設手順から特定口座・新NISA活用法、税金の知識まで各テーマ別に詳しくまとめています。
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Link href="/knowledge/tokutei-koza" className="btn btn-outline" style={{ borderRadius: '30px', fontSize: '0.9rem' }}>
                特定口座とは？
              </Link>
              <Link href="/knowledge/nisa" className="btn btn-outline" style={{ borderRadius: '30px', fontSize: '0.9rem' }}>
                NISAの活用ガイド
              </Link>
              <Link href="/knowledge/tax" className="btn btn-outline" style={{ borderRadius: '30px', fontSize: '0.9rem' }}>
                米国株の税金ガイド
              </Link>
              <Link href="/seminar" className="btn btn-primary" style={{ borderRadius: '30px', fontSize: '0.9rem' }}>
                初心者セミナーを見る
              </Link>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
