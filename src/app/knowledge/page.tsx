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

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '米国株（米国株式）とは？5つの大きな特徴や日本株との違い・始め方を徹底解説',
    description: '初心者向けに米国株（米国株式）とは何か、5つの大きな特徴やメリット、日本株との比較、代表セクター、3大指数（S&P500・NYダウ・ナスダック）、1株購入・年4回配当・新NISA活用からリスク対策・FAQまで完全網羅。',
    image: 'https://www.tokyo-us-stock.com/ogp.png',
    author: {
      '@type': 'Organization',
      name: '東京米国株クラブ',
    },
    publisher: {
      '@type': 'Organization',
      name: '東京米国株クラブ',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.tokyo-us-stock.com/logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://www.tokyo-us-stock.com/knowledge',
    },
  };

  return (
    <div className="knowledge-page" style={{ overflowWrap: 'break-word' }}>
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
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
              <p style={{ fontSize: '1rem', lineHeight: '1.8', margin: 0, color: 'var(--text-main)' }}>
                米国株（米国株式）市場の最大の特徴は、その圧倒的な規模と流動性の高さにあります。全世界の株式市場の合計時価総額のうち、アメリカの株式市場だけで約60%という驚異的なシェアを占めています。対して、日本市場のシェアはわずか5%前後に過ぎません。この圧倒的な規模の違いは、投資家にとって非常に大きな意味を持ちます。市場規模が大きいということは、世界中から巨額の投資資金が集まるだけでなく、最も優秀な人材や最先端のテクノロジー企業が米国市場を目指して上場することを意味します。例えば、AI（人工知能）、クラウドコンピューティング、バイオテクノロジーなどの次世代を担うイノベーションは、ほとんどが米国企業から生まれています。また、取引参加者が世界中に存在するため、「流動性」が極めて高く、買いたい時に買い、売りたい時に売ることができるという安心感もあります。機関投資家から個人投資家まで、あらゆる層が参加する米国市場は、まさに世界の経済成長のエンジンそのものと言えるでしょう。この巨大でダイナミックな市場に直接投資できることこそが、米国株（米国株式）の最大の魅力です。
              </p>
            </div>

            <div style={{ background: 'var(--bg-warm)', padding: '1.5rem', borderRadius: '16px', borderLeft: '4px solid var(--primary)' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '900', color: 'var(--primary-dark)', margin: '0 0 0.5rem 0' }}>
                ② 株主還元（配当金増額・自社株買い）の意識が世界一高い
              </h3>
              <p style={{ fontSize: '1rem', lineHeight: '1.8', margin: 0, color: 'var(--text-main)' }}>
                アメリカの企業経営において最も重要視されているのが「株主価値の最大化」です。米国の経営者は、利益を社内にため込むのではなく、配当金の支払いや自社株買いを通じて積極的に株主に還元することが求められます。実際、経営陣の報酬の多くは自社の株価パフォーマンスと連動しているため、彼らは株価を上げ、株主に利益をもたらすことに非常に強いインセンティブを持っています。この株主第一主義を象徴するのが「配当貴族」や「配当王」と呼ばれる企業群です。米国株（米国株式）市場には、25年以上連続して配当金を増やし続けている「配当貴族」が100社以上存在し、さらに50年以上連続増配の「配当王」も多数存在します。これに対し、日本企業で長期連続増配を行っている企業は極めて少数です。また、配当だけでなく「自社株買い」も頻繁に行われます。企業が自らの利益で市場から自社の株式を買い戻すことで、発行済株式総数が減少し、1株あたりの価値（利益）が向上するため、結果的に株価の上昇に直結します。このように、配当と自社株買いの両輪で投資家に報いる姿勢こそが、米国株の大きな特徴です。
              </p>
            </div>

            <div style={{ background: 'var(--bg-warm)', padding: '1.5rem', borderRadius: '16px', borderLeft: '4px solid var(--primary)' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '900', color: 'var(--primary-dark)', margin: '0 0 0.5rem 0' }}>
                ③ 1株単位から少額で購入でき、分散投資が簡単
              </h3>
              <p style={{ fontSize: '1rem', lineHeight: '1.8', margin: 0, color: 'var(--text-main)' }}>
                投資を始める際のハードルの低さも、米国株（米国株式）の大きな特徴です。日本株の場合、原則として「100株単位（単元株）」での取引となるため、有名企業の株を購入しようとすると、数十万円から数百万円といったまとまった初期資金が必要になるケースがほとんどです。これでは、資金の少ない初心者が複数の銘柄に分散投資することは困難です。しかし、米国株（米国株式）はすべての銘柄が「1株単位」から自由に購入可能です。AppleやMicrosoft、Amazonといった世界を代表する超巨大企業であっても、数千円から数万円という非常に少額から株主になることができます。この「1株から買える」という仕組みのおかげで、少額の資金でもIT、ヘルスケア、消費財など異なるセクターの企業を少しずつ買い集め、自分だけのリスク分散されたポートフォリオを簡単に構築することができます。毎月のお小遣いの範囲でコツコツと優良企業の株を買い増していくスタイルが可能になるため、時間を味方につけた長期投資を無理なく実践できるのは、初心者にとって非常に大きなメリットと言えるでしょう。
              </p>
            </div>

            <div style={{ background: 'var(--bg-warm)', padding: '1.5rem', borderRadius: '16px', borderLeft: '4px solid var(--primary)' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '900', color: 'var(--primary-dark)', margin: '0 0 0.5rem 0' }}>
                ④ S&P500など長期で最高値を更新し続ける最強の代表指数がある
              </h3>
              <p style={{ fontSize: '1rem', lineHeight: '1.8', margin: 0, color: 'var(--text-main)' }}>
                米国株（米国株式）市場には、長期投資の王道と呼ばれる優れた株価指数が存在します。その筆頭が「S&P500（エスアンドピー500）」です。S&P500は、米国の主要産業を代表する優良企業500社で構成されており、米国株式市場全体の時価総額の約80%をカバーしています。驚くべきことに、S&P500は過去数十年にわたり、ITバブルの崩壊、リーマンショック、コロナショックなど幾多の歴史的な大暴落を経験しながらも、その都度力強く回復し、長期的な視点では常に過去最高値を更新し続けてきました。この強さの秘密は、指数の構成銘柄が定期的に入れ替えられる「新陳代謝」の仕組みにあります。成長が鈍化した企業は指数から外され、代わりに急成長を遂げている新たな企業が組み込まれるため、常に時代を牽引する最強の500社パックが維持されるのです。個別株の選定が難しい初心者でも、このS&P500に連動するインデックスファンドを一本購入するだけで、米国経済全体の成長の恩恵を丸ごと享受できます。その他にも、ハイテク企業中心の「ナスダック100」など、投資家の目的を満たす魅力的な指数が豊富に揃っています。
              </p>
            </div>

            <div style={{ background: 'var(--bg-warm)', padding: '1.5rem', borderRadius: '16px', borderLeft: '4px solid var(--primary)' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '900', color: 'var(--primary-dark)', margin: '0 0 0.5rem 0' }}>
                ⑤ 日本の「新NISA」制度を使って非課税で運用できる
              </h3>
              <p style={{ fontSize: '1rem', lineHeight: '1.8', margin: 0, color: 'var(--text-main)' }}>
                米国株（米国株式）投資を行う上で、日本の個人投資家にとって最大の追い風となっているのが「新NISA」制度の存在です。通常、株式投資で得た利益（値上がり益や配当金）には日本国内で約20.315%の税金がかかります。しかし、新NISA口座を通じて投資を行えば、これらの利益に対する国内の税金が完全に非課税（ゼロ）となります。新NISAには、毎月定額を積み立てる「つみたて投資枠」（年間120万円まで）と、一括投資や個別株も買える「成長投資枠」（年間240万円まで）があり、生涯で最大1,800万円まで非課税で運用可能です。例えば、米国株のインデックスファンドをつみたて投資枠で長期運用し、大きく成長した資産を老後に引き出す際にも、利益をまるまる受け取ることができます。また、成長投資枠を使って米国の高配当個別株を購入し、非課税で配当金を受け取り続ける戦略も人気です。（※ただし、米国株の配当金に対しては米国現地で10%の源泉徴収がされる点には注意が必要です。詳しくは<Link href="/knowledge/tax" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>米国株の税金ガイド</Link>をご参照ください）。このように、米国株の強力な成長力と新NISAの非課税メリットを掛け合わせることで、極めて効率的な資産形成が可能になります。
              </p>
            </div>
          </div>

          {/* 3章: 米国株（米国株式）の特徴まとめ */}
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.3rem, 3.5vw, 1.6rem)', fontWeight: '900', color: 'var(--primary-dark)', borderBottom: '2px solid var(--bg-warm)', paddingBottom: '0.8rem', marginTop: '3rem', marginBottom: '1.5rem' }}>
            3. 米国株（米国株式）の特徴まとめ
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
            米国株（米国株式）がなぜ世界中の投資家から選ばれ続けているのか、その特徴とは何なのかを分かりやすくまとめました。
          </p>
          <div style={{ background: '#fdfefe', border: '1px solid rgba(176,58,46,0.15)', borderRadius: '14px', padding: '1.5rem', marginBottom: '2.5rem' }}>
            <ul style={{ lineHeight: '1.9', color: 'var(--text-main)', paddingLeft: '1.2rem', marginBottom: 0 }}>
              <li style={{ marginBottom: '0.8rem' }}><strong>世界最大の市場規模：</strong>世界中の投資マネーが集まり、流動性が極めて高い。イノベーションの震源地。</li>
              <li style={{ marginBottom: '0.8rem' }}><strong>圧倒的な株主還元：</strong>年4回配当が基本。25年・50年連続増配企業が多数存在し、自社株買いも活発。</li>
              <li style={{ marginBottom: '0.8rem' }}><strong>少額投資が可能：</strong>1株単位（数千円〜数万円）で世界的大企業に投資でき、分散投資が簡単。</li>
              <li style={{ marginBottom: '0.8rem' }}><strong>右肩上がりの株価指数：</strong>S&P500など、長期で最高値を更新し続ける最強の代表指数がある。</li>
              <li><strong>新NISAとの相性抜群：</strong>日本の非課税制度を活用し、米国経済の成長を税制優遇を受けながら効率よく取り込める。</li>
            </ul>
          </div>

          {/* 4章: 初心者が米国株（米国株式）を始めるための3ステップ */}
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.3rem, 3.5vw, 1.6rem)', fontWeight: '900', color: 'var(--primary-dark)', borderBottom: '2px solid var(--bg-warm)', paddingBottom: '0.8rem', marginTop: '3rem', marginBottom: '1.5rem' }}>
            4. 初心者が米国株（米国株式）を始めるための3ステップ
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
            米国株（米国株式）の魅力や特徴とは何かを理解したところで、実際に投資を始めるための具体的な手順を3つのステップで解説します。初心者でも迷わず始められるよう、重要なポイントを押さえておきましょう。
          </p>

          <div style={{ marginBottom: '2.5rem' }}>
            <h3 style={{ fontSize: '1.15rem', fontWeight: '800', color: 'var(--primary-dark)', margin: '0 0 1rem 0', display: 'flex', alignItems: 'center' }}>
              <span style={{ display: 'inline-block', background: 'var(--primary)', color: 'white', padding: '0.2rem 0.8rem', borderRadius: '20px', marginRight: '0.8rem', fontSize: '0.9rem' }}>ステップ1</span>
              米国株を取り扱う証券会社で口座を開設する
            </h3>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem', paddingLeft: '1rem', borderLeft: '3px solid var(--bg-warm)' }}>
              まずは投資の窓口となる証券口座を開設します。米国株投資においては、手数料が圧倒的に安く、取扱銘柄数が豊富な「ネット証券」を選ぶのが鉄則です。中でも、SBI証券や楽天証券、マネックス証券は、取引画面が使いやすく、日本語での情報提供も充実しているため、英語が苦手な方でも安心して利用できます。口座開設はスマートフォンから最短数分で申し込みが完了します。<Link href="/knowledge/stock-investment" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>株式投資の基礎</Link>も併せて確認し、自分に合った証券会社を選びましょう。
            </p>

            <h3 style={{ fontSize: '1.15rem', fontWeight: '800', color: 'var(--primary-dark)', margin: '0 0 1rem 0', display: 'flex', alignItems: 'center' }}>
              <span style={{ display: 'inline-block', background: 'var(--primary)', color: 'white', padding: '0.2rem 0.8rem', borderRadius: '20px', marginRight: '0.8rem', fontSize: '0.9rem' }}>ステップ2</span>
              口座の種類を選び、投資資金を入金する
            </h3>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem', paddingLeft: '1rem', borderLeft: '3px solid var(--bg-warm)' }}>
              口座開設時に重要になるのが口座の種類です。初心者の方は、面倒な確定申告を証券会社が代行してくれる「特定口座（源泉徴収あり）」を選ぶのが最も無難です。詳しくは<Link href="/knowledge/tokutei-koza" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>特定口座とは？</Link>をご覧ください。また、非課税メリットを最大限に活かすために「新NISA口座」の同時開設も忘れないようにしましょう。口座の準備ができたら、日本円を証券口座に入金します。米国株を買う際は、日本円のまま決済する「円貨決済」と、事前に米ドルに両替する「外貨決済」が選べます。
            </p>

            <h3 style={{ fontSize: '1.15rem', fontWeight: '800', color: 'var(--primary-dark)', margin: '0 0 1rem 0', display: 'flex', alignItems: 'center' }}>
              <span style={{ display: 'inline-block', background: 'var(--primary)', color: 'white', padding: '0.2rem 0.8rem', borderRadius: '20px', marginRight: '0.8rem', fontSize: '0.9rem' }}>ステップ3</span>
              銘柄を選んで実際に購入する
            </h3>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem', paddingLeft: '1rem', borderLeft: '3px solid var(--bg-warm)' }}>
              資金の準備ができたら、いよいよ米国株の購入です。初心者の方には、個別の企業リスクを避けられる「S&P500」や「全世界株式（オール・カントリー）」などに連動するインデックスファンド（投資信託またはETF）から始めることを強くおすすめします。これらは新NISAのつみたて投資枠を利用して月100円から自動積立が可能です。少し慣れてきて個別企業に投資したくなったら、自分がよく知っているAppleやAmazonなどの身近な企業の株を1株から買ってみるのも良いでしょう。
            </p>
          </div>

          {/* 5章: 米国株と日本株の比較表 */}
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.3rem, 3.5vw, 1.6rem)', fontWeight: '900', color: 'var(--primary-dark)', borderBottom: '2px solid var(--bg-warm)', paddingBottom: '0.8rem', marginTop: '3rem', marginBottom: '1.5rem' }}>
            5. 米国株と日本株の比較表
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

          {/* 6章: 初心者が知っておくべき米国株の代表セクター */}
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.3rem, 3.5vw, 1.6rem)', fontWeight: '900', color: 'var(--primary-dark)', borderBottom: '2px solid var(--bg-warm)', paddingBottom: '0.8rem', marginTop: '3rem', marginBottom: '1.5rem' }}>
            6. 初心者が知っておくべき米国株の主要セクター（業種）
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

          {/* 7章: 米国株の代表的3大指数 */}
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.3rem, 3.5vw, 1.6rem)', fontWeight: '900', color: 'var(--primary-dark)', borderBottom: '2px solid var(--bg-warm)', paddingBottom: '0.8rem', marginTop: '3rem', marginBottom: '1.5rem' }}>
            7. 米国株の代表的3大指数（S&P500・NYダウ・ナスダック100）
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

          {/* 8章: 米国株のリスク（デメリット）と失敗しない対策 */}
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.3rem, 3.5vw, 1.6rem)', fontWeight: '900', color: 'var(--primary-dark)', borderBottom: '2px solid var(--bg-warm)', paddingBottom: '0.8rem', marginTop: '3rem', marginBottom: '1.5rem' }}>
            8. 米国株のリスク（デメリット）と失敗しない対策
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

          {/* 9章: よくある質問（FAQ） */}
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.3rem, 3.5vw, 1.6rem)', fontWeight: '900', color: 'var(--primary-dark)', borderBottom: '2px solid var(--bg-warm)', paddingBottom: '0.8rem', marginTop: '3rem', marginBottom: '1.5rem' }}>
            9. 米国株についてよくある質問（FAQ）
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
            
            <div style={{ background: '#fdfefe', border: '1px solid #e5e7e9', borderRadius: '14px', padding: '1.3rem 1.5rem' }}>
              <h3 style={{ fontSize: '1.05rem', fontWeight: '800', color: 'var(--primary-dark)', margin: '0 0 0.5rem 0' }}>
                Q. 英語が話せなくても米国株（米国株式）投資はできますか？
              </h3>
              <p style={{ fontSize: '0.95rem', lineHeight: '1.8', margin: 0, color: 'var(--text-main)' }}>
                はい、全く問題ありません。SBI証券や楽天証券などの国内主要ネット証券を利用すれば、すべての取引画面、銘柄検索、注文、決算情報の日本語要約などを完全な日本語で行うことができます。
              </p>
            </div>

            <div style={{ background: '#fdfefe', border: '1px solid #e5e7e9', borderRadius: '14px', padding: '1.3rem 1.5rem' }}>
              <h3 style={{ fontSize: '1.05rem', fontWeight: '800', color: 'var(--primary-dark)', margin: '0 0 0.5rem 0' }}>
                Q. 米国株の配当金にかかる「二重課税」とは何ですか？
              </h3>
              <p style={{ fontSize: '0.95rem', lineHeight: '1.8', margin: 0, color: 'var(--text-main)' }}>
                米国株の配当金は、まず米国内で10%の税金が源泉徴収され、その後、残りの金額に対して日本国内で約20.315%の税金が課されます。確定申告時に「外国税額控除」を申請することで、米国内で引かれた分を取り戻すことができます。詳しくは<Link href="/knowledge/tax" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>米国株の税金ガイド</Link>も併せてご確認ください。
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
              <Link href="/knowledge/stock-investment" className="btn btn-outline" style={{ borderRadius: '30px', fontSize: '0.9rem' }}>
                株式投資の基礎
              </Link>
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
