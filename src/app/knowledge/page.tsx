import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: '米国株（米国株式）とは？5つの大きな特徴や日本株との違い・始め方を徹底解説 | 東京米国株クラブ',
  description: '初心者向けに米国株（米国株式）とは何か、5つの大きな特徴やメリット、日本株との比較、1株購入・S&P500・年4回配当・新NISA活用からリスク対策・FAQまで完全網羅。',
  alternates: {
    canonical: 'https://www.tokyo-us-stock.com/knowledge',
  },
  openGraph: {
    title: '米国株（米国株式）とは？5つの大きな特徴や日本株との違い・始め方を徹底解説 | 東京米国株クラブ',
    description: '初心者向けに米国株（米国株式）とは何か、5つの大きな特徴やメリット、日本株との比較、1株購入・S&P500・年4回配当・新NISA活用からリスク対策・FAQまで完全網羅。',
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
    description: '初心者向けに米国株（米国株式）とは何か、5つの大きな特徴やメリット、日本株との比較、1株購入・S&P500・年4回配当・新NISA活用からリスク対策・FAQまで完全網羅。',
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
          text: '米国株（米国株式）は証券会社によって異なりますが、SBI証券・楽天証券では1株から購入できます。人気銘柄のAppleであれば数万円から投資できます。新NISAのつみたて投資枠を使えば月100円から始めることも可能です。',
        },
      },
      {
        '@type': 'Question',
        name: '米国株と日本株どちらがおすすめですか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '長期投資を目的とする初心者には、過去100年以上成長し続けているS&P500への分散投資（米国株インデックス）がおすすめです。一方、日本株は日本語で情報収集しやすく、身近な企業に投資しやすいメリットがあります。',
        },
      },
      {
        '@type': 'Question',
        name: '米国株（米国株式）の主な特徴を教えてください',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '米国株（米国株式）の主な特徴は①世界最大規模の株式市場、②配当文化が強く年4回配当が多い、③1株から購入可能、④S&P500など代表的な指数がある、⑤新NISAで非課税投資ができる、の5点です。',
        },
      },
      {
        '@type': 'Question',
        name: '英語が話せなくても米国株（米国株式）投資はできますか？',
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
          <Link href="/" className="btn-link" style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', fontFamily: 'var(--font-body)', fontWeight: '700' }}>
            <ArrowLeft size={18} style={{ marginRight: '0.5rem' }} /> トップへ戻る
          </Link>
          <h1 className="post-title" style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.8rem, 6vw, 2.8rem)', fontWeight: '900', textAlign: 'left', marginLeft: '0', marginRight: 'auto', maxWidth: 'none', marginBottom: '0.5rem', color: 'var(--primary-dark)', lineHeight: '1.3' }}>
            米国株（米国株式）とは？5つの大きな特徴や日本株との違い・始め方を解説
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section style={{ background: 'white', padding: 'clamp(3rem, 8vw, 5rem) 0' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'left' }}>

          {/* プロローグ */}
          <div style={{ marginBottom: '3rem' }}>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
              私たちが日々使用しているiPhone（Apple）、検索エンジンやYouTube（Google / Alphabet）、日用品から仕事のインフレまで支えるクラウド（AmazonやMicrosoft）、SNS（Meta）などは、すべて<strong>アメリカ（米国）を代表する超一流企業</strong>が提供しています。
            </p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
              <strong>米国株（米国株式）とは何か？一言で言えば、これらのアメリカ市場に上場している企業の株（米国株式）を購入し、世界規模でビジネスを展開する企業のオーナーの一員になること</strong>です。
            </p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: 0 }}>
              世界の経済・金融の中心地である米国株式市場は、過去100年以上にわたり、数々の暴落や危機を乗り越えて右肩上がりに成長を遂げてきました。本ページでは、米国株・米国株式とは何か、日本株との根本的な違い、5つの大きな特徴、リスクやよくある質問まで分かりやすく解説します。
            </p>
          </div>

          {/* 1章: 米国株（米国株式）とは何か？日本株との根本的な違い */}
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.3rem, 3.5vw, 1.6rem)', fontWeight: '900', color: 'var(--primary-dark)', borderBottom: '2px solid var(--bg-warm)', paddingBottom: '0.8rem', marginTop: '3rem', marginBottom: '1.5rem' }}>
            1. 米国株（米国株式）とは何か？日本株との根本的な違い
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
            米国株（米国株式）は、日本の株式市場（東証など）とは異なる数多くの決定的なメリットと特徴を持っています。
          </p>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
            日本株の場合、原則として「100株単位」で購入する必要があるため、有名企業（任天堂やトヨタなど）の株を買うには数十万円〜百万円単位のまとまった元本が必要です。しかし米国株（米国株式）は<strong>すべての銘柄が「1株から」自由に購入できる</strong>ため、数千円〜数万円という少額から世界トップ企業への投資をスタートできます。
          </p>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '2.5rem' }}>
            また、日本株の多くが配当金を「年1回〜2回」しか支払わないのに対し、米国企業の多くは<strong>「年4回（3ヶ月ごと）」に配当金を支払う</strong>文化が定着しており、インカムゲイン（配当収入）を得やすい点も根本的な違いです。
          </p>

          {/* 2章: 米国株（米国株式）の5つの大きな特徴 */}
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.3rem, 3.5vw, 1.6rem)', fontWeight: '900', color: 'var(--primary-dark)', borderBottom: '2px solid var(--bg-warm)', paddingBottom: '0.8rem', marginTop: '3rem', marginBottom: '1.5rem' }}>
            2. 米国株（米国株式）の5つの大きな特徴
          </h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2.5rem' }}>
            <div style={{ background: 'var(--bg-warm)', padding: '1.5rem', borderRadius: '16px', borderLeft: '4px solid var(--primary)' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '900', color: 'var(--primary-dark)', margin: '0 0 0.5rem 0' }}>
                ① 世界最大の株式市場（時価総額シェア約60%）
              </h3>
              <p style={{ fontSize: '0.975rem', lineHeight: '1.8', margin: 0, color: 'var(--text-main)' }}>
                全世界の株式市場の合計時価総額のうち、アメリカ市場だけで約60%を占めます。世界中の優秀な人材と莫大な資金が集まり、圧倒的な流動性と経済成長力を誇ります。
              </p>
            </div>

            <div style={{ background: 'var(--bg-warm)', padding: '1.5rem', borderRadius: '16px', borderLeft: '4px solid var(--primary)' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '900', color: 'var(--primary-dark)', margin: '0 0 0.5rem 0' }}>
                ② 株主還元（配当・自社株買い）意識が極めて高い
              </h3>
              <p style={{ fontSize: '0.975rem', lineHeight: '1.8', margin: 0, color: 'var(--text-main)' }}>
                アメリカでは経営者の評価が株価に直結するため、25年以上連続で配当を増やし続ける「配当貴族」企業が100社以上存在します。現金還元（年4回配当）や自社株買いを通じた株主還元が徹底されています。
              </p>
            </div>

            <div style={{ background: 'var(--bg-warm)', padding: '1.5rem', borderRadius: '16px', borderLeft: '4px solid var(--primary)' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '900', color: 'var(--primary-dark)', margin: '0 0 0.5rem 0' }}>
                ③ 1株単位から少額で購入可能
              </h3>
              <p style={{ fontSize: '0.975rem', lineHeight: '1.8', margin: 0, color: 'var(--text-main)' }}>
                Apple、Microsoft、Amazonなどの超有名企業でも1株（数千円〜数万円）から購入できるため、初心者でも資金に合わせて分散投資を行いやすい環境が整っています。
              </p>
            </div>

            <div style={{ background: 'var(--bg-warm)', padding: '1.5rem', borderRadius: '16px', borderLeft: '4px solid var(--primary)' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '900', color: 'var(--primary-dark)', margin: '0 0 0.5rem 0' }}>
                ④ S&P500・ナスダックなど最強の代表指数がある
              </h3>
              <p style={{ fontSize: '0.975rem', lineHeight: '1.8', margin: 0, color: 'var(--text-main)' }}>
                米国を代表する優良500社で構成される「S&P500」やITハイテク企業の詰まった「ナスダック100」など、長期で右肩上がりを続ける優れた指数に連動するインデックスファンドが豊富です。
              </p>
            </div>

            <div style={{ background: 'var(--bg-warm)', padding: '1.5rem', borderRadius: '16px', borderLeft: '4px solid var(--primary)' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '900', color: 'var(--primary-dark)', margin: '0 0 0.5rem 0' }}>
                ⑤ 新NISAで非課税投資が可能
              </h3>
              <p style={{ fontSize: '0.975rem', lineHeight: '1.8', margin: 0, color: 'var(--text-main)' }}>
                日本の新NISA制度（つみたて投資枠・成長投資枠）を活用することで、米国株インデックスファンドや個別の米国株運用で得た売却益や配当金を全額非課税で運用できます。
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
                  <th style={{ padding: '0.9rem 1rem', fontWeight: '800', color: 'var(--primary-dark)' }}>米国株</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                  <td style={{ padding: '0.9rem 1rem', fontWeight: '700', backgroundColor: 'rgba(0,0,0,0.01)' }}>購入最低単位</td>
                  <td style={{ padding: '0.9rem 1rem' }}>原則「100株単位」</td>
                  <td style={{ padding: '0.9rem 1rem', fontWeight: '700', color: 'var(--primary)' }}>「1株単位」から可能</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                  <td style={{ padding: '0.9rem 1rem', fontWeight: '700', backgroundColor: 'rgba(0,0,0,0.01)' }}>配当回数</td>
                  <td style={{ padding: '0.9rem 1rem' }}>年1〜2回が主流</td>
                  <td style={{ padding: '0.9rem 1rem', fontWeight: '700', color: 'var(--primary)' }}>年4回（四半期ごと）が主流</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                  <td style={{ padding: '0.9rem 1rem', fontWeight: '700', backgroundColor: 'rgba(0,0,0,0.01)' }}>連続増配企業数</td>
                  <td style={{ padding: '0.9rem 1rem' }}>花王など一部のみ</td>
                  <td style={{ padding: '0.9rem 1rem', fontWeight: '700', color: 'var(--primary)' }}>25年以上連続が100社以上</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                  <td style={{ padding: '0.9rem 1rem', fontWeight: '700', backgroundColor: 'rgba(0,0,0,0.01)' }}>取引通貨</td>
                  <td style={{ padding: '0.9rem 1rem' }}>日本円（JPY）</td>
                  <td style={{ padding: '0.9rem 1rem' }}>米ドル（USD）</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                  <td style={{ padding: '0.9rem 1rem', fontWeight: '700', backgroundColor: 'rgba(0,0,0,0.01)' }}>主要取引時間（日本時間）</td>
                  <td style={{ padding: '0.9rem 1rem' }}>9:00〜15:30（日中）</td>
                  <td style={{ padding: '0.9rem 1rem' }}>23:30〜翌6:00（夜間）</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* 4章: 米国株のリスク（デメリット） */}
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.3rem, 3.5vw, 1.6rem)', fontWeight: '900', color: 'var(--primary-dark)', borderBottom: '2px solid var(--bg-warm)', paddingBottom: '0.8rem', marginTop: '3rem', marginBottom: '1.5rem' }}>
            4. 米国株のリスク（デメリット）
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
            米国株投資には多くのメリットがありますが、当然リスクや注意点も存在します。事前に理解してリスク管理を行いましょう。
          </p>

          <ul>
            <li style={{ marginBottom: '1rem', lineHeight: '1.8' }}>
              <strong>為替変動リスク</strong>：米国株は米ドル建てで取引するため、円高が進むと株価自体が上昇していても円換算での資産額が減少することがあります。
            </li>
            <li style={{ marginBottom: '1rem', lineHeight: '1.8' }}>
              <strong>配当金の二重課税</strong>：配当金に対して米国で10%、日本で約20%の計30%近くが課税されます（確定申告の外国税額控除で取り戻すことが可能）。
            </li>
            <li style={{ marginBottom: '1rem', lineHeight: '1.8' }}>
              <strong>言語（英語）の壁</strong>：企業の公式決算書類（10-K）や最新ニュースは英語になります（現在はネット証券の日本語解説や翻訳ツールで十分補えます）。
            </li>
          </ul>

          {/* 5章: よくある質問（FAQ） */}
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.3rem, 3.5vw, 1.6rem)', fontWeight: '900', color: 'var(--primary-dark)', borderBottom: '2px solid var(--bg-warm)', paddingBottom: '0.8rem', marginTop: '3rem', marginBottom: '1.5rem' }}>
            5. 米国株についてよくある質問（FAQ）
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', marginBottom: '3rem' }}>
            <div style={{ background: '#fdfefe', border: '1px solid #e5e7e9', borderRadius: '14px', padding: '1.3rem 1.5rem' }}>
              <h3 style={{ fontSize: '1.05rem', fontWeight: '800', color: 'var(--primary-dark)', margin: '0 0 0.5rem 0' }}>
                Q. 米国株はいくらから始められますか？
              </h3>
              <p style={{ fontSize: '0.95rem', lineHeight: '1.8', margin: 0, color: 'var(--text-main)' }}>
                米国株は証券会社によって異なりますが、SBI証券・楽天証券では1株から購入できます。人気銘柄のAppleであれば数万円から投資できます。新NISAのつみたて投資枠を使えば月100円から始めることも可能です。
              </p>
            </div>

            <div style={{ background: '#fdfefe', border: '1px solid #e5e7e9', borderRadius: '14px', padding: '1.3rem 1.5rem' }}>
              <h3 style={{ fontSize: '1.05rem', fontWeight: '800', color: 'var(--primary-dark)', margin: '0 0 0.5rem 0' }}>
                Q. 米国株と日本株どちらがおすすめですか？
              </h3>
              <p style={{ fontSize: '0.95rem', lineHeight: '1.8', margin: 0, color: 'var(--text-main)' }}>
                長期投資を目的とする初心者には、過去100年以上成長し続けているS&P500への分散投資（米国株インデックス）がおすすめです。一方、日本株は日本語で情報収集しやすく、身近な企業に投資しやすいメリットがあります。
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
              初心者向けの口座開設手順から新NISA活用法、税金の知識まで各テーマ別に詳しくまとめています。
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
