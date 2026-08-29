import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, ShieldCheck, CheckCircle2, TrendingUp, Layers, HelpCircle, DollarSign, Award, Globe, Building, Clock, Coins, BookOpen } from 'lucide-react';
import Script from 'next/script';

export const metadata: Metadata = {
  title: '米国株とは？初心者向けにわかりやすく解説｜特徴・始め方・NISA',
  description: '米国株とは何かを初心者向けに徹底解説。日本株との違い・5つの特徴・S&P500の始め方・新NISAとの組み合わせ・税金の仕組みまでわかりやすく説明。東京米国株クラブが運営する米国株の入門ガイド。',
  alternates: {
    canonical: 'https://www.tokyo-us-stock.com/knowledge',
  },
  openGraph: {
    title: '米国株とは？初心者向けにわかりやすく解説｜特徴・始め方・NISA',
    description: '米国株とは何かを初心者向けに徹底解説。日本株との違い・5つの特徴・S&P500の始め方・新NISAとの組み合わせ・税金の仕組みまでわかりやすく説明。東京米国株クラブが運営する米国株の入門ガイド。',
    url: 'https://www.tokyo-us-stock.com/knowledge',
    siteName: '東京米国株クラブ',
    images: [
      {
        url: 'https://www.tokyo-us-stock.com/ogp.png',
        width: 1200,
        height: 630,
        alt: '米国株とは？初心者向けにわかりやすく解説',
      },
    ],
    locale: 'ja_JP',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: '米国株とは？初心者向けにわかりやすく解説｜特徴・始め方・NISA',
    description: '米国株とは何かを初心者向けに徹底解説。日本株との違い・5つの特徴・S&P500の始め方・新NISAとの組み合わせ・税金の仕組みまでわかりやすく説明。',
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
        name: '米国株はいくらから始められますか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'SBI証券・楽天証券では1株から購入でき、S&P500インデックスファンドなら月100円からでも積立投資が可能です。新NISAのつみたて投資枠を使えば月3〜5万円程度から堅実に始められます。',
        },
      },
      {
        '@type': 'Question',
        name: '米国株と日本株どちらがおすすめですか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '長期投資を目的とする初心者には、過去100年以上成長し続けているS&P500への分散投資がおすすめです。日本株は身近な企業に投資しやすいメリットがありますが、長期リターンの実績では米国株が上回る傾向があります。',
        },
      },
      {
        '@type': 'Question',
        name: '米国株の税金はどうなりますか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '特定口座（源泉徴収あり）では譲渡益・配当に約20.315%が課税されます。新NISA口座で購入した場合は税金がゼロです。米国配当には現地で10%課税されますが、確定申告で外国税額控除を申請することで取り戻せます。',
        },
      },
      {
        '@type': 'Question',
        name: 'NISAで米国株に投資できますか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'はい、新NISAのつみたて投資枠（年間120万円）と成長投資枠（年間240万円）の両方で米国株・S&P500連動ファンドを購入できます。合計年間360万円・生涯1,800万円まで非課税で運用できます。',
        },
      },
      {
        '@type': 'Question',
        name: '初心者におすすめの米国株・投資方法は？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '初心者にはS&P500連動インデックスファンドへの積立投資が最もおすすめです。eMAXIS Slim 米国株式（S&P500）を新NISAのつみたて投資枠で毎月積立購入するだけで、米国優良企業500社に自動的に分散投資できます。',
        },
      },
    ],
  };

  return (
    <div className="knowledge-page" style={{ overflowWrap: 'break-word', paddingBottom: '4rem' }}>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      {/* ヒーローセクション */}
      <section className="knowledge-hero" style={{ background: 'var(--bg-warm)', padding: '120px 0 4rem', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
            <span className="badge badge-primary" style={{ fontSize: '0.9rem', padding: '0.5rem 1.2rem', background: 'white', color: 'var(--primary)', border: '2px solid var(--primary)', borderRadius: '30px', fontWeight: 'bold' }}>
              米国株入門ガイド
            </span>
          </div>
          <h1 style={{ fontSize: 'clamp(1.8rem, 4.5vw, 2.5rem)', fontWeight: '900', color: 'var(--primary-dark)', lineHeight: '1.4', marginBottom: '1.5rem', fontFamily: 'var(--font-heading)' }}>
            米国株とは？初心者向けにわかりやすく解説｜特徴・始め方・NISAとの違い
          </h1>
          <p style={{ fontSize: 'clamp(1rem, 3vw, 1.15rem)', lineHeight: '1.8', color: 'var(--text-muted)', marginBottom: '2rem' }}>
            「米国株って難しそう…」と感じていませんか？実は、AppleやAmazonなど私たちが毎日使うサービスを生み出している企業ばかりです。本記事では、米国株の5つの特徴から日本株との決定的な違い、新NISAを使った始め方まで、投資初心者の方に向けて徹底的にわかりやすく解説します。
          </p>
        </div>
      </section>

      {/* 本文セクション */}
      <section style={{ background: 'white', padding: '4rem 0' }}>
        <div className="container" style={{ maxWidth: '840px' }}>
          
          <div className="glass-card" style={{ padding: '2rem', background: 'var(--bg-white)', borderRadius: '16px', border: '1px solid var(--glass-border)', marginBottom: '3rem' }}>
            <p style={{ margin: 0, fontWeight: '700', color: 'var(--primary-dark)' }}>【この記事でわかること】</p>
            <ul style={{ margin: '1rem 0 0 0', paddingLeft: '1.5rem', lineHeight: '1.8', color: 'var(--text-main)' }}>
              <li>米国株の基本的な定義と、日本株との根本的な違い</li>
              <li>世界中の投資家が米国株を選ぶ5つの大きな理由</li>
              <li>新NISAを使った米国株・S&P500の始め方（3ステップ）</li>
              <li>米国株投資のメリットと、事前に知っておくべきデメリット（リスク）</li>
            </ul>
          </div>

          <p style={{ fontSize: '1.05rem', lineHeight: '1.9', color: 'var(--text-main)', marginBottom: '3rem' }}>
            これから投資を始めようとする多くの方が、「どの国の株を買えばいいの？」と悩みます。その答えとして、現在世界中のプロ投資家から一般の個人投資家まで、最も多くの資金が集まっているのが「米国株（アメリカ株）」です。<br/><br/>
            まずは、<Link href="/knowledge/stock-investment" style={{ color: 'var(--primary)', textDecoration: 'underline', fontWeight: 'bold' }}>株式投資の基礎</Link>を踏まえつつ、なぜ米国株がこれほどまでに注目されているのか、その基本から一緒に紐解いていきましょう。
          </p>

          {/* 見出し2: 米国株とは何か？基本をわかりやすく解説 */}
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.4rem, 4vw, 1.8rem)', fontWeight: '900', color: 'var(--primary-dark)', borderBottom: '3px solid var(--primary)', paddingBottom: '0.8rem', marginTop: '4rem', marginBottom: '2rem' }}>
            米国株とは何か？基本をわかりやすく解説
          </h2>

          <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--text-main)', marginTop: '2.5rem', marginBottom: '1.2rem', paddingLeft: '1rem', borderLeft: '4px solid var(--accent)' }}>
            米国株の定義と日本株との根本的な違い
          </h3>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.9', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
            米国株（アメリカ株式）とは、その名の通りアメリカの証券取引所（ニューヨーク証券取引所やナスダックなど）に上場している企業の株式のことです。日本に住んでいると「なんだか遠い世界の話」と感じるかもしれませんが、実は私たちの生活に深く根付いています。
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.9', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
            例えば、スマートフォンでお馴染みの<strong>「Apple」</strong>、ネットショッピングの<strong>「Amazon」</strong>、検索エンジンの<strong>「Google (Alphabet)」</strong>、そしてエクセルやウィンドウズの<strong>「Microsoft」</strong>など、世界的に有名な巨大企業がほぼすべて米国株に該当します。
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.9', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
            日本株（国内株）との主な違いとして、以下の4点をまずは押さえておきましょう。
          </p>
          <ul style={{ background: '#fdfefe', padding: '1.5rem 1.5rem 1.5rem 2.5rem', borderRadius: '12px', border: '1px solid #e5e7e9', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '2.5rem' }}>
            <li style={{ marginBottom: '0.8rem' }}><strong>取引通貨：</strong>日本円ではなく「米ドル（USD）」建てで取引を行います。そのため、為替（円高・円安）の影響を受けます。</li>
            <li style={{ marginBottom: '0.8rem' }}><strong>取引時間：</strong>時差があるため、日本時間の「夜から深夜」にかけて市場が開きます（夏時間は22:30〜翌5:00）。</li>
            <li style={{ marginBottom: '0.8rem' }}><strong>配当の回数：</strong>日本株は年1〜2回が多いですが、米国株は「年4回（四半期ごと）」に配当金を支払う企業が主流です。</li>
            <li><strong>株主還元：</strong>米国企業は「利益は株主のもの」という意識が非常に強く、積極的な配当増額や自社株買いを行う文化が根付いています。</li>
          </ul>

          <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--text-main)', marginTop: '2.5rem', marginBottom: '1.2rem', paddingLeft: '1rem', borderLeft: '4px solid var(--accent)' }}>
            なぜ世界中の投資家が米国株を選ぶのか
          </h3>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.9', color: 'var(--text-main)', marginBottom: '2.5rem' }}>
            一言で言えば、<strong>「長期的に見て圧倒的な成長を続けているから」</strong>です。アメリカは世界最大の経済大国であり、IT、AI、ヘルスケアなど、あらゆる最先端技術が生まれる土壌があります。さらに、世界中から優秀な人材と莫大な投資マネーが集まる仕組みが出来上がっているため、アメリカ一国の株式市場だけで、世界の株式時価総額の過半数を占めるほどの規模を誇っています。
          </p>


          {/* 見出し2: 米国株の5つの特徴 */}
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.4rem, 4vw, 1.8rem)', fontWeight: '900', color: 'var(--primary-dark)', borderBottom: '3px solid var(--primary)', paddingBottom: '0.8rem', marginTop: '4rem', marginBottom: '2.5rem' }}>
            米国株の5つの特徴
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {/* 特徴1 */}
            <div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '800', color: 'var(--primary)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Globe size={24} /> ① 世界最大規模の株式市場
              </h3>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.9', color: 'var(--text-main)', margin: 0 }}>
                米国の株式市場の時価総額は、なんと世界全体の<strong>約60%</strong>を占めています（日本の東証は約5〜6%）。これは、世界中の投資マネーがアメリカに集中していることを意味します。後述する米国の代表的な株価指数「S&P500」は、ITバブル崩壊やリーマンショックなどの幾多の暴落を乗り越え、過去100年以上にわたって右肩上がりで成長し続けてきた確固たる実績があります。
              </p>
            </div>

            {/* 特徴2 */}
            <div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '800', color: 'var(--primary)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <DollarSign size={24} /> ② 株主還元（配当・自社株買い）文化が強い
              </h3>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.9', color: 'var(--text-main)', margin: 0 }}>
                米国企業は経営陣に対する株主のプレッシャーが強く、「株主のために利益を還元する」という文化が深く根付いています。そのため、業績が上がれば積極的に配当を増やし、配当を毎年増やし続ける「連続増配企業」が多数存在します。例えば、コカ・コーラは64年連続、ジョンソン・エンド・ジョンソンは62年連続で配当金を増やし続けており、投資家に大きな恩恵をもたらしています。
              </p>
            </div>

            {/* 特徴3 */}
            <div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '800', color: 'var(--primary)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Layers size={24} /> ③ 1株単位で購入できる
              </h3>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.9', color: 'var(--text-main)', margin: 0 }}>
                日本株を購入する場合、多くは「100株単位」での取引となるため、数十万円のまとまった資金が必要になることが少なくありません。しかし、<strong>米国株は「1株」から購入が可能</strong>です。例えば、Appleの株であれば1株約3万円程度（為替・株価により変動）から世界最高峰の企業の株主になることができます。さらに、投資信託（S&P500インデックスファンドなど）を利用すれば、100円からでも積立投資が可能です。
              </p>
            </div>

            {/* 特徴4 */}
            <div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '800', color: 'var(--primary)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <TrendingUp size={24} /> ④ S&P500・ナスダックなど代表指数がある
              </h3>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.9', color: 'var(--text-main)', margin: 0 }}>
                米国株を語る上で欠かせないのが強力な「株価指数」の存在です。代表的なものは以下の2つです。<br/>
                ・<strong>S&P500指数：</strong>米国の優良企業500社を時価総額の割合に応じて均等に分散した指数。長期投資のベンチマークとして世界標準となっており、この指数に連動するインデックスファンドを買うだけで、アメリカの主要企業全体に投資するのと同じ効果が得られます。<br/>
                ・<strong>ナスダック100指数：</strong>Apple、Microsoft、NVIDIAなど、世界を変えるテクノロジー企業を中心に構成された指数で、近年凄まじい成長を遂げています。
              </p>
            </div>

            {/* 特徴5 */}
            <div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '800', color: 'var(--primary)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <ShieldCheck size={24} /> ⑤ 新NISAで非課税投資ができる
              </h3>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.9', color: 'var(--text-main)', margin: 0 }}>
                2024年から始まった<Link href="/knowledge/nisa" style={{ color: 'var(--primary)', textDecoration: 'underline', fontWeight: 'bold' }}>新NISA制度</Link>を使えば、米国株やS&P500インデックスファンドから得られる利益が「永久に非課税」になります。通常、投資の利益には約20%の税金がかかりますが、新NISA枠（年間360万円、生涯1,800万円まで）の中で米国株を運用すれば、利益を丸ごと自分の手元に残すことができ、資産形成のスピードが劇的に加速します。
              </p>
            </div>
          </div>


          {/* 見出し2: 米国株と日本株の比較表 */}
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.4rem, 4vw, 1.8rem)', fontWeight: '900', color: 'var(--primary-dark)', borderBottom: '3px solid var(--primary)', paddingBottom: '0.8rem', marginTop: '4.5rem', marginBottom: '2rem' }}>
            米国株と日本株の比較表
          </h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.9', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
            米国株と日本株の特徴をわかりやすく表にまとめました。スマートフォンでご覧の方は表を横にスクロールしてご確認ください。
          </p>

          <div style={{ overflowX: 'auto', marginBottom: '3rem', borderRadius: '12px', boxShadow: 'var(--shadow-soft)' }}>
            <table style={{ width: '100%', minWidth: '700px', borderCollapse: 'collapse', background: 'white' }}>
              <thead>
                <tr>
                  <th style={{ padding: '1.2rem', background: 'var(--primary)', color: 'white', fontWeight: 'bold', textAlign: 'left', border: '1px solid var(--glass-border)', width: '25%' }}>項目</th>
                  <th style={{ padding: '1.2rem', background: 'var(--primary)', color: 'white', fontWeight: 'bold', textAlign: 'left', border: '1px solid var(--glass-border)', width: '37.5%' }}>米国株</th>
                  <th style={{ padding: '1.2rem', background: '#4b5563', color: 'white', fontWeight: 'bold', textAlign: 'left', border: '1px solid var(--glass-border)', width: '37.5%' }}>日本株</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ padding: '1rem', border: '1px solid #e5e7e9', fontWeight: 'bold', background: '#f9fafb' }}>取引通貨</td>
                  <td style={{ padding: '1rem', border: '1px solid #e5e7e9', color: 'var(--primary-dark)', fontWeight: 'bold' }}>米ドル</td>
                  <td style={{ padding: '1rem', border: '1px solid #e5e7e9' }}>日本円</td>
                </tr>
                <tr>
                  <td style={{ padding: '1rem', border: '1px solid #e5e7e9', fontWeight: 'bold', background: '#f9fafb' }}>取引時間</td>
                  <td style={{ padding: '1rem', border: '1px solid #e5e7e9' }}>日本時間 夜〜深夜</td>
                  <td style={{ padding: '1rem', border: '1px solid #e5e7e9' }}>日本時間 午前〜午後</td>
                </tr>
                <tr>
                  <td style={{ padding: '1rem', border: '1px solid #e5e7e9', fontWeight: 'bold', background: '#f9fafb' }}>配当頻度</td>
                  <td style={{ padding: '1rem', border: '1px solid #e5e7e9' }}>年4回が多い</td>
                  <td style={{ padding: '1rem', border: '1px solid #e5e7e9' }}>年2回が多い</td>
                </tr>
                <tr>
                  <td style={{ padding: '1rem', border: '1px solid #e5e7e9', fontWeight: 'bold', background: '#f9fafb' }}>購入単位</td>
                  <td style={{ padding: '1rem', border: '1px solid #e5e7e9', color: 'var(--primary-dark)', fontWeight: 'bold' }}>1株から</td>
                  <td style={{ padding: '1rem', border: '1px solid #e5e7e9' }}>100株単位が多い</td>
                </tr>
                <tr>
                  <td style={{ padding: '1rem', border: '1px solid #e5e7e9', fontWeight: 'bold', background: '#f9fafb' }}>市場規模</td>
                  <td style={{ padding: '1rem', border: '1px solid #e5e7e9' }}>世界の約60%</td>
                  <td style={{ padding: '1rem', border: '1px solid #e5e7e9' }}>世界の約5〜6%</td>
                </tr>
                <tr>
                  <td style={{ padding: '1rem', border: '1px solid #e5e7e9', fontWeight: 'bold', background: '#f9fafb' }}>新NISAとの相性</td>
                  <td style={{ padding: '1rem', border: '1px solid #e5e7e9', color: 'var(--primary)', fontWeight: 'bold' }}>◎ 非常に良い</td>
                  <td style={{ padding: '1rem', border: '1px solid #e5e7e9' }}>○ 良い</td>
                </tr>
                <tr>
                  <td style={{ padding: '1rem', border: '1px solid #e5e7e9', fontWeight: 'bold', background: '#f9fafb' }}>情報収集</td>
                  <td style={{ padding: '1rem', border: '1px solid #e5e7e9' }}>△ 英語情報が多い</td>
                  <td style={{ padding: '1rem', border: '1px solid #e5e7e9', color: '#4b5563', fontWeight: 'bold' }}>◎ 日本語で豊富</td>
                </tr>
                <tr>
                  <td style={{ padding: '1rem', border: '1px solid #e5e7e9', fontWeight: 'bold', background: '#f9fafb' }}>為替リスク</td>
                  <td style={{ padding: '1rem', border: '1px solid #e5e7e9' }}>あり（ドル円の影響）</td>
                  <td style={{ padding: '1rem', border: '1px solid #e5e7e9' }}>なし</td>
                </tr>
              </tbody>
            </table>
          </div>


          {/* 見出し2: 米国株の始め方3ステップ */}
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.4rem, 4vw, 1.8rem)', fontWeight: '900', color: 'var(--primary-dark)', borderBottom: '3px solid var(--primary)', paddingBottom: '0.8rem', marginTop: '4.5rem', marginBottom: '2.5rem' }}>
            米国株の始め方3ステップ
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div className="glass-card" style={{ padding: '2rem', background: '#fdfefe', borderRadius: '16px', border: '1px solid var(--glass-border)', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '32px', height: '32px', background: 'var(--primary)', color: 'white', borderRadius: '50%', fontSize: '1rem' }}>1</span>
                ステップ①：ネット証券で口座を開設する
              </h3>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.9', color: 'var(--text-main)', margin: 0 }}>
                まずは投資を始めるための専用口座を作ります。ここで最も重要なのは、<strong>必ず「ネット証券（SBI証券、楽天証券、マネックス証券など）」を選ぶこと</strong>です。窓口型の銀行や総合証券会社は、購入手数料や維持手数料が非常に高額なため避けてください。ネット証券の口座開設はスマートフォンから完全オンラインで完結し、最短翌日〜3日程度で完了します。
              </p>
            </div>

            <div className="glass-card" style={{ padding: '2rem', background: '#fdfefe', borderRadius: '16px', border: '1px solid var(--glass-border)', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '32px', height: '32px', background: 'var(--primary)', color: 'white', borderRadius: '50%', fontSize: '1rem' }}>2</span>
                ステップ②：新NISA口座を設定する
              </h3>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.9', color: 'var(--text-main)', margin: 0 }}>
                証券口座を開設する際、同時に「新NISA口座」の申し込みも行いましょう。新NISA口座はすべての金融機関を通して「1人1口座」しか作ることができません。米国株の手数料の安さや取扱銘柄の多さ、ポイント還元などを考慮すると、SBI証券か楽天証券でNISA口座を開設するのが圧倒的に使い勝手が良くおすすめです。
              </p>
            </div>

            <div className="glass-card" style={{ padding: '2rem', background: '#fdfefe', borderRadius: '16px', border: '1px solid var(--glass-border)', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '32px', height: '32px', background: 'var(--primary)', color: 'white', borderRadius: '50%', fontSize: '1rem' }}>3</span>
                ステップ③：S&P500インデックスファンドを積立購入する
              </h3>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.9', color: 'var(--text-main)', margin: 0 }}>
                初心者の方には、いきなり個別の米国株（Appleなど）を買うよりも、<Link href="/blog/us-stock-screening-guide" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>S&P500連動のインデックスファンド</Link>を購入することが最適解です。代表的な商品として「eMAXIS Slim 米国株式（S&P500）」や「SBI・V・S&P500インデックス・ファンド」があります。これらを新NISAのつみたて投資枠を使って、毎月3万円など無理のない範囲で「自動積立設定」をするのが、失敗しにくい最も王道な始め方です。
              </p>
            </div>
          </div>
          <div style={{ marginTop: '2rem', textAlign: 'center' }}>
            <Link href="/seminar" className="btn btn-primary" style={{ display: 'inline-flex', padding: '1rem 2rem', fontSize: '1.1rem', borderRadius: '30px', fontWeight: 'bold' }}>
              より実践的な始め方を米国株セミナーで学ぶ
            </Link>
          </div>


          {/* 見出し2: 米国株のメリット・デメリット（リスク） */}
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.4rem, 4vw, 1.8rem)', fontWeight: '900', color: 'var(--primary-dark)', borderBottom: '3px solid var(--primary)', paddingBottom: '0.8rem', marginTop: '4.5rem', marginBottom: '2.5rem' }}>
            米国株のメリット・デメリット（リスク）
          </h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.9', color: 'var(--text-main)', marginBottom: '2rem' }}>
            投資の世界に「絶対」はありません。大きなメリットの裏には必ず知っておくべきデメリット（リスク）が存在します。
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
            {/* メリット */}
            <div style={{ background: '#f0f9ff', padding: '2rem', borderRadius: '16px', border: '1px solid #bae6fd' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: '#0369a1', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <CheckCircle2 size={24} /> メリット
              </h3>
              <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.9', color: 'var(--text-main)', margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <li>過去100年以上の長期成長実績がある</li>
                <li>世界最大の市場規模で流動性が極めて高い</li>
                <li>少額（1株）から手軽に分散投資できる</li>
                <li>新NISAを利用すれば利益を非課税運用できる</li>
                <li>配当金が年4回と頻度が高く、モチベーションが維持しやすい</li>
              </ul>
            </div>

            {/* デメリット */}
            <div style={{ background: '#fff5f5', padding: '2rem', borderRadius: '16px', border: '1px solid #fecaca' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: '#b91c1c', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <HelpCircle size={24} /> デメリット・注意点
              </h3>
              <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.9', color: 'var(--text-main)', margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <li>為替リスクがある（円高になると日本円での評価額が下がる）</li>
                <li>税金の扱いが日本株より複雑になる場合がある（<Link href="/blog/us-stock-tokutei-koza-guide" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>特定口座の仕組み</Link>や外国税額控除の知識が必要）</li>
                <li>日本語の情報が英語情報より少ない傾向がある</li>
                <li>取引時間が日本の夜間〜深夜のため、リアルタイムで確認しにくい</li>
                <li>元本保証はなく、投資元本が割れるリスクが常にある</li>
              </ul>
            </div>
          </div>


          {/* 見出し2: 米国株でよくある質問（FAQ） */}
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.4rem, 4vw, 1.8rem)', fontWeight: '900', color: 'var(--primary-dark)', borderBottom: '3px solid var(--primary)', paddingBottom: '0.8rem', marginTop: '4.5rem', marginBottom: '2.5rem' }}>
            米国株でよくある質問（FAQ）
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '4rem' }}>
            <div style={{ background: '#fdfefe', border: '1px solid #e5e7e9', borderRadius: '14px', padding: '1.5rem' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '800', color: 'var(--primary-dark)', margin: '0 0 0.8rem 0' }}>
                Q. 米国株はいくらから始められますか？
              </h3>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.8', margin: 0, color: 'var(--text-main)' }}>
                A: SBI証券・楽天証券では1株から購入でき、S&P500インデックスファンドなら月100円からでも積立投資が可能です。新NISAのつみたて投資枠を使えば月3〜5万円程度から堅実に始められます。
              </p>
            </div>

            <div style={{ background: '#fdfefe', border: '1px solid #e5e7e9', borderRadius: '14px', padding: '1.5rem' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '800', color: 'var(--primary-dark)', margin: '0 0 0.8rem 0' }}>
                Q. 米国株と日本株どちらがおすすめですか？
              </h3>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.8', margin: 0, color: 'var(--text-main)' }}>
                A: 長期投資を目的とする初心者には、過去100年以上成長し続けているS&P500への分散投資（米国株インデックス）がおすすめです。日本株は日本語で情報収集しやすく身近な企業に投資しやすいメリットがありますが、米国株と比べると長期リターンの実績は低い傾向があります。どちらか一方ではなく、両方に分散することも選択肢です。
              </p>
            </div>

            <div style={{ background: '#fdfefe', border: '1px solid #e5e7e9', borderRadius: '14px', padding: '1.5rem' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '800', color: 'var(--primary-dark)', margin: '0 0 0.8rem 0' }}>
                Q. 米国株の税金はどうなりますか？
              </h3>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.8', margin: 0, color: 'var(--text-main)' }}>
                A: 特定口座（源泉徴収あり）で購入した場合、譲渡益・配当に対して約20.315%の税金が自動的に差し引かれます。新NISA口座で購入した場合は税金がゼロになります。米国株の配当には米国側で10%の現地課税がかかりますが、確定申告で「外国税額控除」を申請することで取り戻せる場合があります。詳しくは<Link href="/blog/us-stock-tax-guide" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>米国株の税金を詳しく解説</Link>をご覧ください。
              </p>
            </div>
            
            <div style={{ background: '#fdfefe', border: '1px solid #e5e7e9', borderRadius: '14px', padding: '1.5rem' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '800', color: 'var(--primary-dark)', margin: '0 0 0.8rem 0' }}>
                Q. NISAで米国株に投資できますか？
              </h3>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.8', margin: 0, color: 'var(--text-main)' }}>
                A: はい、新NISAの「つみたて投資枠（年間120万円）」と「成長投資枠（年間240万円）」の両方で米国株・S&P500連動ファンドを購入できます。合計年間360万円・生涯1,800万円まで非課税で運用できるため、長期の米国株投資との相性は最高です。
              </p>
            </div>

            <div style={{ background: '#fdfefe', border: '1px solid #e5e7e9', borderRadius: '14px', padding: '1.5rem' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '800', color: 'var(--primary-dark)', margin: '0 0 0.8rem 0' }}>
                Q. 初心者におすすめの米国株・投資方法は？
              </h3>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.8', margin: 0, color: 'var(--text-main)' }}>
                A: 初心者には個別株よりもS&P500連動インデックスファンドへの積立投資が最もおすすめです。代表的な商品は「eMAXIS Slim 米国株式（S&P500）」で、新NISAのつみたて投資枠で毎月一定額を積立購入するだけで、米国の優良企業500社に自動的に分散投資できます。
              </p>
            </div>
          </div>

          {/* 免責事項 */}
          <div style={{ background: 'var(--bg-light)', padding: '1.5rem', borderRadius: '8px', fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.7', border: '1px solid #e5e7e9' }}>
            ※ 本ページの内容は一般的な情報提供および学習を目的としており、特定の金融商品への投資を勧誘・推奨するものではありません。金融商品は市場動向により価格が変動し、元本割れのリスクが伴います。最終的な投資判断は、必ずご自身の自己責任のもとで行ってください。
          </div>

        </div>
      </section>
    </div>
  );
}
