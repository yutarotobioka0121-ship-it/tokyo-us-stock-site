import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: '米国株（アメリカ株）とは？特徴や日本株との違い・始め方を解説 | 東京 米国株 勉強会 - 東京米国株クラブ',
  description: '東京の初心者向け米国株勉強会「東京米国株クラブ」が、米国株の基礎知識を3,000字以上で徹底解説。日本株との詳細比較、1株購入のメリット、配当金（年4回）、二重課税対策、FAQまで網羅。',
  alternates: {
    canonical: 'https://www.tokyo-us-stock.com/knowledge',
  },
};

export default function KnowledgePage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: '英語が話せなくても米国株投資はできますか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'はい、全く問題ありません。SBI証券や楽天証券などの国内主要ネット証券を利用すれば、すべての取引画面、銘柄検索、注文、決算情報の日本語要約などを完全な日本語で行うことができます。米国の現地口座を開設する必要はなく、通常の日本株と同じような感覚で日本語だけで取引が完結します。',
        },
      },
      {
        '@type': 'Question',
        name: '米国株の配当金にかかる「二重課税」とは何ですか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '米国株の配当金は、まず米国内で10%の税金が源泉徴収され、その後、残りの金額に対して日本国内で約20.315%の税金が課されます。このように両国で課税されることを二重課税と呼びます。ただし、確定申告時に「外国税額控除」を申請することで、米国内で引かれた10%分の一部または全部を所得税・住民税から控除し、取り戻すことができます。なお、NISA口座で運用している場合は国内の約20%分は非課税になります（米国での10%のみ徴収）。',
        },
      },
      {
        '@type': 'Question',
        name: '米国株の取引時間は日本時間の何時からですか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '通常時間（11月第1日曜日〜3月第2土曜日）は日本時間の「23:30〜翌6:00」、サマータイム（3月第2日曜日〜11月第1日曜日）は日本時間の「22:30〜翌5:00」がメインの取引時間（市場の立会時間）です。日本国内のサラリーマンの方でも、仕事が終わって帰宅した夜間の時間にリアルタイムで落ち着いて市場を確認しながら取引することができます。',
        },
      },
      {
        '@type': 'Question',
        name: '米国株にも「株主優待」はありますか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '米国株には、日本の株式市場にあるような自社商品や割引券などを送る「株主優待制度」は原則として存在しません。アメリカの企業は株主への還元手段として、優待を配るのではなく、「配当金を増やす（増配）」ことや、市場から自社の株を買い戻して1株の価値を高める「自社株買い」を圧倒的に重視します。そのため、お金（現金）での還元率が非常に高いのが米国株の大きな特徴です。',
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
          <Link href="/" className="btn-link" style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', fontFamily: 'var(--font-body)', fontWeight: '700' }}>
            <ArrowLeft size={18} style={{ marginRight: '0.5rem' }} /> トップへ戻る
          </Link>
          <h1 className="post-title" style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.8rem, 6vw, 2.8rem)', fontWeight: '900', textAlign: 'left', marginLeft: '0', marginRight: 'auto', maxWidth: 'none', marginBottom: '0.5rem', color: 'var(--primary-dark)', lineHeight: '1.3' }}>
            米国株（アメリカ株）とは？特徴や魅力・始め方を徹底解説
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section style={{ background: 'white', padding: 'clamp(3rem, 8vw, 5rem) 0' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'left' }}>

          {/* プロローグ */}
          <div style={{ marginBottom: '3rem' }}>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
              私たちが日々使用しているiPhone（Apple）、検索エンジンやYouTube（Google / Alphabet）、日用品から仕事のインフラまで支えるクラウド（AmazonやMicrosoft）、SNS（Meta）などは、すべて<strong>アメリカ（米国）を代表する超一流企業</strong>が提供しています。
            </p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
              <strong>米国株（アメリカ株）投資とは、これらのアメリカ市場に上場している企業の株を購入し、世界規模でビジネスを展開する企業のオーナーの一員になること</strong>です。
            </p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: 0 }}>
              世界の経済・金融の中心地である米国株式市場は、過去100年以上にわたり、数々の暴落や危機を乗り越えて右肩上がりに成長を遂げてきました。投資初心者にとって、なぜ米国株が最強の投資先と言われるのか、その基礎知識と日本株との決定的な違い、リスクの防ぎ方を分かりやすく解説します。
            </p>
          </div>

          {/* 1章: 世界の時価総額に占める米国の割合と市場の魅力 */}
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.3rem, 3.5vw, 1.6rem)', fontWeight: '900', color: 'var(--primary-dark)', borderBottom: '2px solid var(--bg-warm)', paddingBottom: '0.8rem', marginTop: '3rem', marginBottom: '1.5rem' }}>
            1. なぜ世界中の投資家が「米国株」にお金を投じるのか？
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
            米国株投資の最大の魅力は、圧倒的な<strong>「市場の成長力」</strong>と<strong>「厚い信頼性」</strong>です。
          </p>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
            全世界の株式市場の時価総額（全上場企業の価値の合計）のうち、<strong>アメリカ市場だけで全体の約60%</strong>を占めています（日本市場は約5%程度）。世界中のお金がニューヨーク証券取引所（NYSE）やNASDAQなどの米国市場に集まり、常に高い流動性と経済成長のエネルギーを供給し続けています。
          </p>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '2.5rem' }}>
            また、米国市場には「人口増加し続ける先進国」という強力なマインドと、世界中から超優秀な人材が集まって新たなイノベーションを生み出し続ける文化があります。かつてのコカ・コーラやP&Gのような日用品大手から、現代のNVIDIAのようなAI半導体の王者まで、世界を牛耳るトップ企業へ直接出資できるのが米国株の唯一無二 of 魅力です。
          </p>

          {/* 2章: 日本株と米国株の5つの決定的な違い */}
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.3rem, 3.5vw, 1.6rem)', fontWeight: '900', color: 'var(--primary-dark)', borderBottom: '2px solid var(--bg-warm)', paddingBottom: '0.8rem', marginTop: '3rem', marginBottom: '1.5rem' }}>
            2. 日本株と米国株の5つの違い（比較表）
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
            日本の株取引しか知らない人からすると、米国株の仕組みにはいくつかの衝撃的な違いがあります。比較表をベースに主要な違いを見ていきましょう。
          </p>

          <div style={{ overflowX: 'auto', marginBottom: '2.5rem', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.08)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '480px', fontSize: '0.95rem', fontFamily: 'var(--font-body)' }}>
              <thead>
                <tr style={{ backgroundColor: 'var(--bg-warm)', borderBottom: '2px solid rgba(0,0,0,0.08)' }}>
                  <th style={{ padding: '0.9rem 1rem', fontWeight: '800', color: 'var(--primary-dark)' }}>比較項目</th>
                  <th style={{ padding: '0.9rem 1rem', fontWeight: '800', color: 'var(--primary-dark)' }}>日本株</th>
                  <th style={{ padding: '0.9rem 1rem', fontWeight: '800', color: 'var(--primary-dark)' }}>米国株</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                  <td style={{ padding: '0.9rem 1rem', fontWeight: '700', backgroundColor: 'rgba(0,0,0,0.01)' }}>購入単位</td>
                  <td style={{ padding: '0.9rem 1rem' }}>原則「100株単位」でしか買えない</td>
                  <td style={{ padding: '0.9rem 1rem', fontWeight: '700', color: 'var(--primary)' }}>「1株単位」から自由に買える</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                  <td style={{ padding: '0.9rem 1rem', fontWeight: '700', backgroundColor: 'rgba(0,0,0,0.01)' }}>配当回数</td>
                  <td style={{ padding: '0.9rem 1rem' }}>年1〜2回が一般的</td>
                  <td style={{ padding: '0.9rem 1rem', fontWeight: '700', color: 'var(--primary)' }}>「年4回」の支払いが主流（四半期ごと）</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                  <td style={{ padding: '0.9rem 1rem', fontWeight: '700', backgroundColor: 'rgba(0,0,0,0.01)' }}>主な取引時間（日本時間）</td>
                  <td style={{ padding: '0.9rem 1rem' }}>日中の仕事中（9:00〜15:00）</td>
                  <td style={{ padding: '0.9rem 1rem' }}>夜間の帰宅後（23:30〜翌6:00 / 冬時間）</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                  <td style={{ padding: '0.9rem 1rem', fontWeight: '700', backgroundColor: 'rgba(0,0,0,0.01)' }}>値幅制限（ストップ高・安）</td>
                  <td style={{ padding: '0.9rem 1rem' }}>あり（急激な変動を防ぐ）</td>
                  <td style={{ padding: '0.9rem 1rem' }}>なし（需給に応じた適正価格へ即座に収束）</td>
                </tr>
                <tr>
                  <td style={{ padding: '0.9rem 1rem', fontWeight: '700', backgroundColor: 'rgba(0,0,0,0.01)' }}>主な還元手段</td>
                  <td style={{ padding: '0.9rem 1rem' }}>株主優待（自社製品や優待券など）</td>
                  <td style={{ padding: '0.9rem 1rem', fontWeight: '700', color: 'var(--primary)' }}>「増配（現金）」および「自社株買い」</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2.5rem' }}>
            <div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.5rem' }}>
                ・1株から買える（超少額投資）のメリット
              </h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', lineHeight: '1.7', color: 'var(--text-main)', margin: 0 }}>
                日本株では1株1万円の会社でも100株単位（最低10万円）からしか購入できず、初心者には資金の壁があります。しかし、米国株は1株単位で購入できるため、世界トップ企業のアップルやコカ・コーラなどの株が、数千円〜数万円という超低資金から手軽に購入して株主になれます。
              </p>
            </div>
            <div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.5rem' }}>
                ・年4回配当による「不労所得の複利システム」
              </h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', lineHeight: '1.7', color: 'var(--text-main)', margin: 0 }}>
                米国株の多くの企業は3ヶ月（四半期）に1度、配当金を支払います。異なる支払月の銘柄（例えば1・4・7・10月払い、2・5・8・11月払いなど）を3つ組み合わせるだけで、<strong>「毎月配当金が自分の口座に振り込まれる」</strong>という夢のキャッシュフローを簡単に設計できます。
              </p>
            </div>
          </div>
          <div className="knowledge-banner glass-card" style={{ padding: '1.5rem', background: 'var(--bg-warm)', borderRadius: '16px', border: '1px solid var(--glass-border)', marginBottom: '3rem' }}>
            <span className="featured-tag" style={{ margin: 0 }}>もっと知りたい</span>
            <p style={{ fontSize: '0.95rem', fontWeight: '800', margin: '0.5rem 0' }}>
              日本株と米国株のよりデータに基づいた徹底比較や、投資初心者におけるメリット・デメリットはコラム記事でも比較・解説しています。
            </p>
            <Link href="/blog/investment-comparison-02" style={{ fontSize: '0.9rem', fontWeight: '800', color: 'var(--primary)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
              日本株 vs 米国株｜それぞれのメリット・デメリットを徹底比較 <ArrowRight size={14} />
            </Link>
          </div>

          {/* 3章: 米国個別株とETFの選び方 */}
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.3rem, 3.5vw, 1.6rem)', fontWeight: '900', color: 'var(--primary-dark)', borderBottom: '2px solid var(--bg-warm)', paddingBottom: '0.8rem', marginTop: '3rem', marginBottom: '1.5rem' }}>
            3. 米国個別株とETFの選び方の基本
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
            米国株投資をスタートする際、何を購入するかは非常に重要です。大きく分けて「個別株」と「ETF（上場投資信託）」の2つのアプローチがあります。
          </p>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
            個別株を狙う場合は、強固なビジネスモデル、圧倒的なブランド力、そして強固な財務体質（高いフリーキャッシュフロー）を持つビッグテック（マイクロソフト、アップル、エヌビディア等）を徹底的な企業分析のもとで長期保有するのが原則です。
          </p>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '2.5rem' }}>
            一方、複数の企業に安全に分散したい場合は、<strong>米国ETF</strong>がおすすめです。例えば「VYM（バンガード・米国高配当株式ETF）」や「HDV（iシェアーズ・コア米国高配当株ETF）」を購入すれば、それだけで米国の優良高配当企業数百社に一括で分散投資ができ、かつ約3%前後の分配金を毎年安定して非課税枠（NISA等）で受け取ることができます。
          </p>
          <div className="knowledge-banner glass-card" style={{ padding: '1.5rem', background: 'var(--bg-warm)', borderRadius: '16px', border: '1px solid var(--glass-border)', marginBottom: '3rem' }}>
            <span className="featured-tag" style={{ margin: 0 }}>もっと知りたい</span>
            <p style={{ fontSize: '0.95rem', fontWeight: '800', margin: '0.5rem 0' }}>
              NISAの成長投資枠や通常口座での個別株とETFの正しい選び方、取引を始める際の重要なルールはこちら。
            </p>
            <Link href="/blog/nisa-series-04" style={{ fontSize: '0.9rem', fontWeight: '800', color: 'var(--primary)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
              成長投資枠の活用法｜個別株とETFの選び方 <ArrowRight size={14} />
            </Link>
          </div>

          {/* 4章: 米国株投資のリスク管理（為替と二重課税） */}
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.3rem, 3.5vw, 1.6rem)', fontWeight: '900', color: 'var(--primary-dark)', borderBottom: '2px solid var(--bg-warm)', paddingBottom: '0.8rem', marginTop: '3rem', marginBottom: '1.5rem' }}>
            4. 米国株投資で絶対に知っておくべき2つのリスクと対策
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
            米国株投資はリターンの期待値が高い非常に魅力的な投資ですが、国内の投資にはない特有のリスクが存在します。正しく対策を理解しておきましょう。
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2.5rem' }}>
            <div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.5rem' }}>
                ・為替リスク（円高・円安の影響）とドル・コスト平均法
              </h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', lineHeight: '1.7', color: 'var(--text-main)', margin: 0 }}>
                米国株は米ドルで取引されるため、為替の変動（為替差損益）が生じます。株価自体が上昇していても、急激な円高が進行すると円ベースでの評価額が下がる場合があります。この対策として、一度に全額を投資するのではなく、毎月決まった日に決まった額を購入する<strong>「積立投資（ドル・コスト平均法）」</strong>を行うことで、為替レートを平準化（平均化）して安全に運用できます。
              </p>
            </div>
            <div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.5rem' }}>
                ・「二重課税」のペナルティと外国税額控除の計算例
              </h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', lineHeight: '1.7', color: 'var(--text-main)', marginBottom: '0.8rem' }}>
                特定口座などの課税口座で米国株の配当金を受け取る場合、まずアメリカ現地で10%が課税され、その残りの90%に対して日本国内で約20.315%が課税されます。この「二重課税」を防ぐため、確定申告時に<strong>「外国税額控除」</strong>を適用することで、米国内で徴収された10%分を所得税等から取り戻すことができます。
              </p>
              <div style={{ background: 'var(--bg-warm)', padding: '1.2rem 1.5rem', borderRadius: '12px', fontSize: '0.95rem', lineHeight: '1.7', color: 'var(--text-main)' }}>
                <strong>【具体例：米国株から年間10万円の配当金が出た場合】</strong><br />
                1. 米国現地で10%（1万円）が源泉徴収される ➔ 残り9万円<br />
                2. 日本国内で残り9万円に対し約20.315%（約1万8,283円）が課税される ➔ 手取り約7万1,717円<br />
                3. 確定申告で「外国税額控除」を申請 ➔ 米国で支払った1万円分の一定額が日本の所得税から還付されます。<br />
                ※なお、NISA口座で運用している場合は国内の約20.315%分が完全非課税になるため、二重課税の手続きの手間も大幅に削減されます。
              </div>
            </div>
          </div>

          {/* 5章: 米国株の主要セクターと選び方のコツ */}
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.3rem, 3.5vw, 1.6rem)', fontWeight: '900', color: 'var(--primary-dark)', borderBottom: '2px solid var(--bg-warm)', paddingBottom: '0.8rem', marginTop: '3rem', marginBottom: '1.5rem' }}>
            5. 知っておくべき米国株の主要セクター（産業分類）
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
            米国市場（S&P500など）はGICS（世界産業分類基準）によって11のセクターに分類されています。初心者が個別の銘柄を選ぶ際や、ポートフォリオのリスクを分散させる際には、セクターごとの性質を理解しておくことが不可欠です。
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.2rem', marginBottom: '2.5rem' }}>
            <div style={{ padding: '1.2rem', border: '1px solid rgba(0,0,0,0.08)', borderRadius: '12px', background: 'white' }}>
              <h3 style={{ fontSize: '1.05rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.4rem' }}>
                ・情報技術（IT・ハイテク）セクター
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', margin: 0, lineHeight: '1.7' }}>
                Apple、Microsoft、NVIDIAなどの世界を牽引する巨大イノベーション企業が属します。高い売上成長率と世界シェアを誇り、株価の値上がり益（キャピタルゲイン）を最も期待できるセクターです。
              </p>
            </div>
            <div style={{ padding: '1.2rem', border: '1px solid rgba(0,0,0,0.08)', borderRadius: '12px', background: 'white' }}>
              <h3 style={{ fontSize: '1.05rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.4rem' }}>
                ・生活必需品セクター
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', margin: 0, lineHeight: '1.7' }}>
                Procter & Gamble（P&G）、Coca-Cola、Walmartなど、不況期であっても消費者が買い続ける日用品・食品企業が含まれます。景気変動に強く（ディフェンシブ株）、長年にわたる連続増配と高い配当利回りが魅力です。
              </p>
            </div>
            <div style={{ padding: '1.2rem', border: '1px solid rgba(0,0,0,0.08)', borderRadius: '12px', background: 'white' }}>
              <h3 style={{ fontSize: '1.05rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.4rem' }}>
                ・ヘルスケアセクター
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', margin: 0, lineHeight: '1.7' }}>
                Johnson & Johnson、Eli Lilly、Pfizerなど、医薬品や医療機器を手掛ける企業です。世界的な高齢化の進展と医療需要の高まりを背景に、景気に左右されにくい安定した成長と高水準の配当を両立しています。
              </p>
            </div>
            <div style={{ padding: '1.2rem', border: '1px solid rgba(0,0,0,0.08)', borderRadius: '12px', background: 'white' }}>
              <h3 style={{ fontSize: '1.05rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.4rem' }}>
                ・金融・エネルギー・一般消費財セクター
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', margin: 0, lineHeight: '1.7' }}>
                JPMorgan ChaseやVisaなどの決済・金融機関、ExxonMobilなどのエネルギー大手、AmazonやTeslaなどの消費財企業が含まれます。金利の動きや景気循環（ビジネスサイクル）に合わせて業績が変動する特徴があります。
              </p>
            </div>
          </div>

          {/* 6章: 初心者が犯しやすい3つの失敗と回避策 */}
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.3rem, 3.5vw, 1.6rem)', fontWeight: '900', color: 'var(--primary-dark)', borderBottom: '2px solid var(--bg-warm)', paddingBottom: '0.8rem', marginTop: '3rem', marginBottom: '1.5rem' }}>
            6. 初心者が犯しやすい3つの失敗パターンと回避策
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
            米国株投資で成果を上げるためには、「素晴らしい銘柄を買うこと」と同じくらい「致命的な失敗を避けること」が大切です。特に初心者が陥りがちな3つの罠を把握しておきましょう。
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', marginBottom: '2.5rem' }}>
            <div style={{ padding: '1.2rem 1.5rem', background: '#fff5f5', borderLeft: '4px solid #e53e3e', borderRadius: '8px' }}>
              <h3 style={{ fontSize: '1.05rem', fontWeight: '800', color: '#c53030', marginBottom: '0.4rem' }}>
                失敗①：株価暴落時の「狼狽売り（ろうばいうり）」
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', margin: 0, lineHeight: '1.7' }}>
                市場が〇〇ショックなどで大きく値下がりした際、恐怖に耐えきれず保有株を底値で売却してしまう失敗です。米国市場は過去すべての暴落を数年以内に乗り越えて最高値を更新してきました。暴落期こそ安く買い増せるチャンスと捉え、売らずに保有し続ける「握力」を鍛えましょう。
              </p>
            </div>
            <div style={{ padding: '1.2rem 1.5rem', background: '#fff5f5', borderLeft: '4px solid #e53e3e', borderRadius: '8px' }}>
              <h3 style={{ fontSize: '1.05rem', fontWeight: '800', color: '#c53030', marginBottom: '0.4rem' }}>
                失敗②：流行のテーマ株・ハイリスクな1銘柄への「一括集中投資」
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', margin: 0, lineHeight: '1.7' }}>
                SNSで話題になっている流行の銘柄や急上昇株に、手元の資金を一度に全て投入する行為です。トレンドが終焉した途端に株価が半値以下になり取り返しのつかない打撃を受けます。まずはS&P500や全米株式などの広範なインデックスやETFを中心にポートフォリオの土台を作りましょう。
              </p>
            </div>
            <div style={{ padding: '1.2rem 1.5rem', background: '#fff5f5', borderLeft: '4px solid #e53e3e', borderRadius: '8px' }}>
              <h3 style={{ fontSize: '1.05rem', fontWeight: '800', color: '#c53030', marginBottom: '0.4rem' }}>
                失敗③：為替手数料や取引手数料の意識不足
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', margin: 0, lineHeight: '1.7' }}>
                日本円から米ドルに換金する際の為替手数料や、ネット証券ごとの取引手数料を考慮せずに頻繁に買戻しを繰り返すと、手数料負けが発生します。主要ネット証券（SBI証券や楽天証券）の「米国株NISA手数料無料化」サービスや、安い為替スプレッドを活用して賢く取引しましょう。
              </p>
            </div>
          </div>
          <div className="knowledge-banner glass-card" style={{ padding: '1.5rem', background: 'var(--bg-warm)', borderRadius: '16px', border: '1px solid var(--glass-border)', marginBottom: '3rem' }}>
            <span className="featured-tag" style={{ margin: 0 }}>もっと知りたい</span>
            <p style={{ fontSize: '0.95rem', fontWeight: '800', margin: '0.5rem 0' }}>
              米国株の二重課税を解決するための手順や、SBI証券・楽天証券などネット証券会社でのNISA口座設定手順はこちら。
            </p>
            <Link href="/blog/nisa-series-02" style={{ fontSize: '0.9rem', fontWeight: '800', color: 'var(--primary)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
              新NISAの口座開設の手順｜SBI証券・楽天証券での始め方 <ArrowRight size={14} />
            </Link>
          </div>

          {/* 5章: 米国株に関するFAQ */}
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.3rem, 3.5vw, 1.6rem)', fontWeight: '900', color: 'var(--primary-dark)', borderBottom: '2px solid var(--bg-warm)', paddingBottom: '0.8rem', marginTop: '3rem', marginBottom: '1.5rem' }}>
            5. 米国株（アメリカ株）に関するよくある質問 (FAQ)
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginBottom: '3rem' }}>
            <div>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.5rem' }}>
                Q. 英語が話せなくても米国株投資はできますか？
              </h4>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', lineHeight: '1.7', color: 'var(--text-muted)', margin: 0 }}>
                A. はい、全く問題なく取引できます。SBI証券や楽天証券、マネックス証券などの国内大手ネット証券口座を使用すれば、銘柄検索、取引注文の入力、現在の資産評価状況の確認など、すべての画面を完全な日本語で行うことができます。決算データの要約や業績ニュースなども日本語で配信されているため、英語力は一切不要です。
              </p>
            </div>
            <div>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.5rem' }}>
                Q. 米国株の配当金にかかる「二重課税」とは何ですか？
              </h4>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', lineHeight: '1.7', color: 'var(--text-muted)', margin: 0 }}>
                A. 米国個別株や米国ETFの配当金が支払われる際、まず米国内で10%が源泉徴収されます。そして、残りの90%の金額に対して日本国内で約20.315%の税金が差し引かれます。これを二重課税と呼びます。対策として、確定申告時に「外国税額控除」を行うことで、現地徴収分の10%を取り戻すことができます。また、NISA口座であれば日本国内分（約20%）は完全に非課税となります。
              </p>
            </div>
            <div>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.5rem' }}>
                Q. 米国株の取引時間は日本時間の何時からですか？
              </h4>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', lineHeight: '1.7', color: 'var(--text-muted)', margin: 0 }}>
                A. 通常期間（冬時間・11月上旬〜3月中旬）は日本時間の「23:30〜翌6:00」、夏時間（サマータイム・3月中旬〜11月上旬）は日本時間の「22:30〜翌5:00」です。日本のビジネスパーソンが退社して帰宅し、夜落ち着いたプライベートな時間にリアルタイムで株取引ができるため、非常に会社員向けのライフスタイルに適した市場です。
              </p>
            </div>
            <div>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.5rem' }}>
                Q. 米国株にも「株主優待」はありますか？
              </h4>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', lineHeight: '1.7', color: 'var(--text-muted)', margin: 0 }}>
                A. アメリカの株式市場には、日本独自の「株主優待（クオカードや自社商品等）」という制度は原則ありません。その代わりに、米国の経営陣は株主への最も確実な利益還元として「配当金の支払い（増配）」や「自社株の買い戻し（自社株買い）」を徹底的に優先します。そのため、キャッシュ（配当金）での株主還元姿勢は日本企業よりもはるかに進んでいます。
              </p>
            </div>
          </div>

          {/* ナレッジ・関連コンテンツへの誘導バナー */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem', marginTop: '4rem' }}>
            <div className="knowledge-banner glass-card" style={{ padding: '2rem 1.5rem', background: 'var(--bg-warm)', borderRadius: '20px', border: '1px solid var(--glass-border)', textAlign: 'center' }}>
              <span className="featured-tag" style={{ margin: '0 auto 0.8rem auto', display: 'table' }}>初心者向けガイド</span>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.15rem, 3vw, 1.35rem)', fontWeight: '900', color: 'var(--primary-dark)', marginBottom: '0.6rem' }}>
                米国株（アメリカ株）の買い方・始め方完全ガイド！
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '1.2rem', maxWidth: '600px', margin: '0 auto 1.2rem auto' }}>
                口座開設の4ステップ、指値・成行注文の違い、円貨決済vs外貨決済、NISA成長投資枠での購入手順、おすすめの最初に買うべき銘柄・ETFを徹底解説。
              </p>
              <Link href="/knowledge/how-to-buy" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 2rem', borderRadius: '30px', fontWeight: '800', textDecoration: 'none', fontSize: '0.95rem' }}>
                買い方ガイドを見る <ArrowRight size={16} />
              </Link>
            </div>

            <div className="glass-card" style={{ padding: '2rem 1.5rem', background: 'white', borderRadius: '20px', border: '1px solid rgba(0,0,0,0.08)', textAlign: 'center' }}>
              <span className="featured-tag" style={{ margin: '0 auto 0.8rem auto', display: 'table' }}>取引時間・サマータイム</span>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.15rem, 3vw, 1.35rem)', fontWeight: '900', color: 'var(--primary-dark)', marginBottom: '0.6rem' }}>
                米国株の取引時間は日本時間の何時？夏時間・祝日解説
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '1.2rem', maxWidth: '600px', margin: '0 auto 1.2rem auto' }}>
                日本時間でのサマータイム（22:30〜）や冬時間（23:30〜）、プレマーケット・アフターマーケット等の時間外取引、年間祝日（休場日）、放置注文ルーティンを解説。
              </p>
              <Link href="/knowledge/trading-hours" className="btn btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 2rem', borderRadius: '30px', fontWeight: '800', textDecoration: 'none', fontSize: '0.95rem' }}>
                取引時間の詳細を見る <ArrowRight size={16} />
              </Link>
            </div>

            <div className="glass-card" style={{ padding: '2rem 1.5rem', background: 'white', borderRadius: '20px', border: '1px solid rgba(0,0,0,0.08)', textAlign: 'center' }}>
              <span className="featured-tag" style={{ margin: '0 auto 0.8rem auto', display: 'table' }}>重要用語集</span>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.15rem, 3vw, 1.35rem)', fontWeight: '900', color: 'var(--primary-dark)', marginBottom: '0.6rem' }}>
                よく調べられる米国株の重要キーワード解説集
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '1.2rem', maxWidth: '600px', margin: '0 auto 1.2rem auto' }}>
                「高配当」「取引時間」「時間外取引」「おすすめ」「モメンタム」など、検索で頻出する重要単語9選を初心者向けに分かりやすく解説。
              </p>
              <Link href="/knowledge/keywords" className="btn btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 2rem', borderRadius: '30px', fontWeight: '800', textDecoration: 'none', fontSize: '0.95rem' }}>
                重要キーワード解説を見る <ArrowRight size={16} />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section - 勉強会への誘導 */}
      <section style={{ background: 'var(--bg-warm)', color: 'var(--text-main)', position: 'relative', overflow: 'hidden', textAlign: 'center', padding: 'clamp(3rem, 8vw, 5rem) 0' }}>
        <div style={{ position: 'absolute', top: '-50px', right: '-50px', width: '200px', height: '200px', borderRadius: '50%', background: 'rgba(176, 58, 46, 0.03)' }} />
        <div style={{ position: 'absolute', bottom: '-80px', left: '-80px', width: '300px', height: '300px', borderRadius: '50%', background: 'rgba(176, 58, 46, 0.02)' }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '700px', margin: '0 auto' }}>

            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.4rem, 4vw, 2.2rem)', fontWeight: '900', lineHeight: '1.5', marginBottom: '1.5rem', color: 'var(--text-main)' }}>
              では、何からスタートすれば<br />いいのでしょうか？
            </h2>

            <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(0.95rem, 2.5vw, 1.1rem)', lineHeight: '1.8', color: 'var(--text-muted)', marginBottom: '1rem' }}>
              口座の選び方、最初に何を買えばいいのか、<br className="sp-hide" />
              どのくらいの金額から始めるのが良いのか。
            </p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(0.95rem, 2.5vw, 1.1rem)', lineHeight: '1.8', color: 'var(--text-muted)', marginBottom: '2.5rem' }}>
              ネットの情報だけでは不安な方のために、<br className="sp-hide" />
              東京米国株クラブでは<strong>少人数制（限定4名）の米国株勉強会</strong>を東京で開催しています。<br className="sp-hide" />
              カフェでお茶を飲むような気軽な雰囲気で、初心者の方でも安心してご参加いただけます。
            </p>

            <div className="glass-card" style={{ background: 'var(--bg-white)', borderRadius: '24px', padding: '2rem 1.5rem', border: '1px solid var(--glass-border)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <p style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1rem, 3vw, 1.2rem)', fontWeight: '800', lineHeight: '1.7', marginBottom: '1.5rem', color: 'var(--primary-dark)' }}>
                勉強会の詳細・開催スケジュールはこちら
              </p>

              <Link href="/seminar" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '1rem 2.5rem', borderRadius: '30px', fontWeight: '800', fontSize: '1.05rem', transition: 'all 0.3s ease', textDecoration: 'none' }}>
                勉強会の詳細を見る <ArrowRight size={18} style={{ marginLeft: '0.5rem' }} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
