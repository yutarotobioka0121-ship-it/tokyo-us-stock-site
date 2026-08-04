import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, LineChart, TrendingUp, Layers, CheckCircle2, ShieldCheck, DollarSign, HelpCircle, BarChart3 } from 'lucide-react';

export const metadata: Metadata = {
  title: '株式投資の指数（インデックス）とは？S&P500・ダウ平均・NASDAQ・日経平均の違いを徹底解説 | 東京米国株クラブ',
  description: '株価指数（インデックス）の基礎知識を初心者向けに徹底解説。米国の3大指数（S&P500、NYダウ、NASDAQ100）や日本の代表的指数（日経平均、TOPIX）の違い、算出方法（時価総額加重型 vs 株価平均型）、インデックス投資の選び方まで網羅。',
  alternates: {
    canonical: 'https://www.tokyo-us-stock.com/knowledge/indices',
  },
};

export default function IndicesKnowledgePage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: '初心者が投資するなら「S&P500」と「全世界株式（オルカン）」のどちらの指数がおすすめですか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'アメリカの圧倒的な経済成長とイノベーションを信じるなら「S&P500」、米国に依存せず世界中の国々へ均等に分散したいなら「全世界株式（オルカン）」がおすすめです。どちらも世界最高峰の優れた株価指数であり、長期積立投資で確かな実績を残しています。',
        },
      },
      {
        '@type': 'Question',
        name: '株価指数（インデックス）そのものを直接買うことはできますか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'いいえ、株価指数はあくまで「数値（計算結果）」であるため、指数そのものを直接購入することはできません。しかし、その指数の構成銘柄と同じ比率で株を買い集めて作られた「インデックスファンド（投資信託）」や「ETF（上場投資信託）」を購入することで、指数と全く同じ値動き（リターン）を得ることができます。',
        },
      },
      {
        '@type': 'Question',
        name: '「S&P500」と「NYダウ」の決定的な違いは何ですか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'S&P500は米国の代表的企業「500社」を対象とし、企業の時価総額の大きさに応じて比率を決める「時価総額加重型」です。一方、NYダウは米国の超一流企業「30社」のみを厳選し、株価の単純平均で算出する「株価平均型」です。市場全体の傾向をより正確に反映しているのはS&P500です。',
        },
      },
      {
        '@type': 'Question',
        name: '「日経平均株価」と「TOPIX（東証株価指数）」の違いは何ですか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '日経平均株価は日本を代表する「225社」の株価平均であり、ファーストリテイリングや東京エレクトロンなど単価が高い値がさ株の影響を強く受けます。一方、TOPIXは東証プライム市場に上場する全企業の時価総額を元に算出してあり、日本市場全体の体温をより正確に表しています。',
        },
      },
      {
        '@type': 'Question',
        name: '「インデックスファンド」と「アクティブファンド」はどちらが良いですか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '圧倒的に「インデックスファンド」が推奨されます。プロの運用者が銘柄を選定するアクティブファンドは手数料（信託報酬）が高く、長期的な成績データでは過去80%以上のアクティブファンドがシンプルなインデックスファンドの成績を下回っているためです。',
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
          <Link href="/knowledge/stock-investment" className="btn-link" style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', fontFamily: 'var(--font-body)', fontWeight: '700', textDecoration: 'none' }}>
            <ArrowLeft size={18} style={{ marginRight: '0.5rem' }} /> 株式投資とはへ戻る
          </Link>
          <h1 className="post-title" style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.8rem, 6vw, 2.8rem)', fontWeight: '900', textAlign: 'left', marginLeft: '0', marginRight: 'auto', maxWidth: 'none', marginBottom: '0.5rem', color: 'var(--primary-dark)', lineHeight: '1.3' }}>
            株式投資の指数（インデックス）とは？S&P500・ダウ・NASDAQ・日経平均の違いを徹底解説
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section style={{ background: 'white', padding: 'clamp(3rem, 8vw, 5rem) 0' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'left' }}>

          {/* プロローグ */}
          <div style={{ marginBottom: '3rem' }}>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
              ニュースやラジオで毎日耳にする「今日のNYダウは〇〇ドル上昇」「S&P500が最高値を更新」「日経平均株価が反落」という言葉。これらはすべて**「株価指数（インデックス）」**と呼ばれる指標です。
            </p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
              株価指数とは、**特定の株式市場や企業グループ全体の「平均的な値動きや体力（体温）」を一目で分かる数値にまとめたもの**です。
            </p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: 0 }}>
              投資の世界において、株価指数を理解することは非常に重要です。なぜなら、積立投資（NISA等）で大人気の「インデックスファンド」は、これらの株価指数とまったく同じ成果を出すように設計されているからです。本ページでは、主要な株価指数の違いや仕組み、選び方を初心者向けに分かりやすく解説します。
            </p>
          </div>

          {/* 1章: 株価指数（インデックス）とは何か？基本的な仕組み */}
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.3rem, 3.5vw, 1.6rem)', fontWeight: '900', color: 'var(--primary-dark)', borderBottom: '2px solid var(--bg-warm)', paddingBottom: '0.8rem', marginTop: '3rem', marginBottom: '1.5rem' }}>
            1. 株価指数（インデックス）とは何か？基本的な役割
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
            一言で言えば、株価指数は**「株式市場の体温計」**です。
          </p>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
            例えば、アメリカには何千もの上場企業が存在します。それら1社1社の株価を個別にチェックして「今日の米国経済は好調か？」を判断するのは不可能です。そこで、代表的な企業をピックアップして計算し、「市場全体が上がっているのか、下がる傾向にあるのか」を1つの数字で表示したのが株価指数です。
          </p>

          <div style={{ padding: '1.5rem', background: 'var(--bg-warm)', borderRadius: '16px', border: '1px solid var(--glass-border)', marginBottom: '2.5rem' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.8rem' }}>
              💡 株価指数を知る3つのメリット
            </h3>
            <ol style={{ paddingLeft: '1.2rem', margin: 0, color: 'var(--text-main)', fontSize: '0.95rem', display: 'flex', flexDirection: 'column', gap: '0.6rem', lineHeight: '1.7' }}>
              <li><strong>世界経済の動向が瞬時に把握できる</strong>: 指数を見るだけで、米国や日本の市場が元気かどうかが分かります。</li>
              <li><strong>プロの投資家の「基準（ベンチマーク）」になる</strong>: プロのファンドマネージャーも、自分の運用成績がS&P500などの指数に勝っているか負けているかを評価します。</li>
              <li><strong>誰でも平均点以上の高リターンが得られる</strong>: 指数に連動するファンドを購入するだけで、世界の成長の波に乗ることができます。</li>
            </ol>
          </div>

          {/* 2章: 米国の3大株価指数の比較と特徴（S&P500・NYダウ・NASDAQ100） */}
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.3rem, 3.5vw, 1.6rem)', fontWeight: '900', color: 'var(--primary-dark)', borderBottom: '2px solid var(--bg-warm)', paddingBottom: '0.8rem', marginTop: '3rem', marginBottom: '1.5rem' }}>
            2. 米国の3大株価指数の特徴と徹底比較
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
            世界最大の株式市場であるアメリカには、世界中の投資家が注視する**「米国3大株価指数」**が存在します。
          </p>

          {/* 米国3大指数比較表 */}
          <div style={{ overflowX: 'auto', marginBottom: '2.5rem', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.08)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '520px', fontSize: '0.95rem', fontFamily: 'var(--font-body)' }}>
              <thead>
                <tr style={{ backgroundColor: 'var(--bg-warm)', borderBottom: '2px solid rgba(0,0,0,0.08)' }}>
                  <th style={{ padding: '0.8rem 1rem', fontWeight: '800' }}>指数名</th>
                  <th style={{ padding: '0.8rem 1rem', fontWeight: '800' }}>対象銘柄数</th>
                  <th style={{ padding: '0.8rem 1rem', fontWeight: '800' }}>算出方式</th>
                  <th style={{ padding: '0.8rem 1rem', fontWeight: '800', color: 'var(--primary)' }}>特徴と代表銘柄</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                  <td style={{ padding: '0.8rem 1rem', fontWeight: '800', color: 'var(--primary)' }}>S&P500</td>
                  <td style={{ padding: '0.8rem 1rem' }}>主要500社</td>
                  <td style={{ padding: '0.8rem 1rem', fontWeight: '700' }}>時価総額加重型</td>
                  <td style={{ padding: '0.8rem 1rem' }}><strong>【資産運用の王道】</strong>米国の株式市場全体の時価総額の約80%をカバー。アップル、マイクロソフト、NVIDIA等。</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                  <td style={{ padding: '0.8rem 1rem', fontWeight: '800' }}>NYダウ（ダウ平均）</td>
                  <td style={{ padding: '0.8rem 1rem' }}>厳選30社</td>
                  <td style={{ padding: '0.8rem 1rem' }}>株価平均型</td>
                  <td style={{ padding: '0.8rem 1rem' }}><strong>【歴史と伝統】</strong>米国を代表する老舗大企業30社。コカ・コーラ、マクドナルド、JPMorgan等。</td>
                </tr>
                <tr>
                  <td style={{ padding: '0.8rem 1rem', fontWeight: '800' }}>NASDAQ100</td>
                  <td style={{ padding: '0.8rem 1rem' }}>新興ハイテク100社</td>
                  <td style={{ padding: '0.8rem 1rem', fontWeight: '700' }}>時価総額加重型</td>
                  <td style={{ padding: '0.8rem 1rem' }}><strong>【高成長・ハイテク】</strong>ハイテク・IT企業中心（金融除く）。Amazon、Alphabet、Meta、Tesla等。</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2.5rem' }}>
            <div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.5rem' }}>
                ・なぜS&P500が世界中で「最強」と評価されるのか？
              </h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', lineHeight: '1.7', color: 'var(--text-main)', margin: 0 }}>
                S&P500は単なる上位500社ではなく、厳しい採用条件（連続黒字、高い流動性など）をクリアした企業だけが入れる精鋭グループです。業績が悪化した企業は自動的に除外され、伸びている新興企業が自動的に追加される**「自動の自浄作用（銘柄入れ替え機能）」**を持っているため、半永久的に強い成長を維持できるのです。
              </p>
            </div>
          </div>

          {/* 3章: 日本の代表的な2大株価指数（日経平均 vs TOPIX） */}
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.3rem, 3.5vw, 1.6rem)', fontWeight: '900', color: 'var(--primary-dark)', borderBottom: '2px solid var(--bg-warm)', paddingBottom: '0.8rem', marginTop: '3rem', marginBottom: '1.5rem' }}>
            3. 日本の代表的な2大株価指数（日経平均株価 vs TOPIX）
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
            日本市場における2大指標である**「日経平均株価」**と**「TOPIX（東証株価指数）」**には、決定的な仕組みの違いがあります。
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.2rem', marginBottom: '2.5rem' }}>
            <div style={{ padding: '1.2rem 1.5rem', border: '1px solid rgba(0,0,0,0.08)', borderRadius: '12px', background: 'white' }}>
              <h3 style={{ fontSize: '1.05rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.4rem' }}>
                ① 日経平均株価（日経225）
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', margin: 0, lineHeight: '1.7' }}>
                東証プライム市場に上場する代表的な225社の株価を単純平均して算出する指数（株価平均型）です。ファーストリテイリング（ユニクロ）や東京エレクトロン、ソフトバンクグループといった「1株あたりの値段が高い銘柄（値がさ株）」の値動きに強く左右される特徴があります。
              </p>
            </div>

            <div style={{ padding: '1.2rem 1.5rem', border: '1px solid rgba(0,0,0,0.08)', borderRadius: '12px', background: 'white' }}>
              <h3 style={{ fontSize: '1.05rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.4rem' }}>
                ② TOPIX（東証株価指数）
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', margin: 0, lineHeight: '1.7' }}>
                東証プライム市場に上場する全企業の時価総額をもとに算出する指数（時価総額加重型）です。特定企業の株価に偏らず、日本市場全体の体温を最も正確に表しているため、機関投資家のプロはTOPIXを重視します。
              </p>
            </div>
          </div>

          {/* 4章: 指数の算出方法（時価総額加重型 vs 株価平均型） */}
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.3rem, 3.5vw, 1.6rem)', fontWeight: '900', color: 'var(--primary-dark)', borderBottom: '2px solid var(--bg-warm)', paddingBottom: '0.8rem', marginTop: '3rem', marginBottom: '1.5rem' }}>
            4. 指数の2つの算出方法（時価総額加重型 vs 株価平均型）
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
            株価指数の計算方法には大きく分けて2つのタイプがあります。この違いを理解すると指数への理解が一気に深まります。
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', marginBottom: '2.5rem' }}>
            <div style={{ padding: '1.2rem 1.5rem', background: 'var(--bg-warm)', borderRadius: '12px', borderLeft: '4px solid var(--primary)' }}>
              <h3 style={{ fontSize: '1.05rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.4rem' }}>
                タイプA：時価総額加重型（S&P500、NASDAQ100、TOPIX、オルカンなど）
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', margin: 0, lineHeight: '1.7' }}>
                企業の「時価総額（会社の価値の合計）」の大きさに応じて指数への影響度（構成比率）を決める方式です。世界中の資産運用で圧倒的に主流の方式であり、市場全体の経済規模をそのまま反映できる合理的な仕組みです。
              </p>
            </div>

            <div style={{ padding: '1.2rem 1.5rem', background: 'var(--bg-warm)', borderRadius: '12px', borderLeft: '4px solid var(--primary-dark)' }}>
              <h3 style={{ fontSize: '1.05rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.4rem' }}>
                タイプB：株価平均型（NYダウ、日経平均株価など）
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', margin: 0, lineHeight: '1.7' }}>
                対象企業の株価を単純に足して銘柄数で割る方式です。分かりやすい反面、会社の規模が小さくても「1株の単価が高い企業」の値動きによって指数の値が大きく振り回されるという欠点があります。
              </p>
            </div>
          </div>

          {/* 5章: 株価指数を活用したインデックス投資の選び方 */}
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.3rem, 3.5vw, 1.6rem)', fontWeight: '900', color: 'var(--primary-dark)', borderBottom: '2px solid var(--bg-warm)', paddingBottom: '0.8rem', marginTop: '3rem', marginBottom: '1.5rem' }}>
            5. 株価指数を活用したインデックスファンド・ETFの活用法
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
            株価指数そのものは計算数値であるため直接購入することはできませんが、**金融商品（インデックスファンドやETF）を買うことで指数の成長を手に入れることができます。**
          </p>

          <div style={{ padding: '1.5rem', background: 'var(--bg-warm)', borderRadius: '16px', border: '1px solid var(--glass-border)', marginBottom: '2.5rem' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.8rem' }}>
              🎯 初心者におすすめの指数連動ファンドの選び方
            </h3>
            <ul style={{ paddingLeft: '1.2rem', margin: 0, color: 'var(--text-main)', fontSize: '0.95rem', display: 'flex', flexDirection: 'column', gap: '0.6rem', lineHeight: '1.7' }}>
              <li><strong>王道・米国の成長をまるごと手に入れたい場合</strong>: 「S&P500」に連動する投資信託（eMAXIS Slim 米国株式など）やETF（VOO）。</li>
              <li><strong>安全・全世界に究極の分散投資をしたい場合</strong>: 「MSCI ACWI（全世界株式）」に連動する投資信託（通称オルカン）。</li>
              <li><strong>ハイテク成長を強気で狙いたい場合</strong>: 「NASDAQ100」に連動する投資信託やETF（QQQ）。</li>
            </ul>
          </div>

          {/* 6章: テーマ別・セクター別指数（SOX指数等）と歴史的背景 */}
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.3rem, 3.5vw, 1.6rem)', fontWeight: '900', color: 'var(--primary-dark)', borderBottom: '2px solid var(--bg-warm)', paddingBottom: '0.8rem', marginTop: '3rem', marginBottom: '1.5rem' }}>
            6. セクター別指数（SOX等）と100年の成長実績
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
            S&P500やダウ平均のような市場全体の指数のほかに、特定の産業分野に特化した**「セクター別株価指数」**も存在します。
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', marginBottom: '2.5rem' }}>
            <div style={{ padding: '1.2rem 1.5rem', border: '1px solid rgba(0,0,0,0.08)', borderRadius: '12px', background: 'white' }}>
              <h3 style={{ fontSize: '1.05rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.4rem' }}>
                ・SOX指数（フィラデルフィア半導体株指数）
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', margin: 0, lineHeight: '1.7' }}>
                NVIDIAやAMD、TSMC、インテルなど、世界を代表する主要半導体企業30社で構成される指数です。AI時代において世界経済を動かす「先端テクノロジーの先行き指標」として、投資家から大きな注目を集めています。
              </p>
            </div>

            <div style={{ padding: '1.2rem 1.5rem', border: '1px solid rgba(0,0,0,0.08)', borderRadius: '12px', background: 'white' }}>
              <h3 style={{ fontSize: '1.05rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.4rem' }}>
                ・株価指数が過去100年以上右肩上がりに成長してきた理由
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', margin: 0, lineHeight: '1.7' }}>
                米国S&P500などの指数は、過去100年間に大恐慌、世界大戦、オイルショック、リーマンショック、コロナショックなどの数々の大暴落を経験しながらも、毎回それを乗り越えて過去最高値を更新し続けてきました。理由は「米国の人口増加」「新イノベーションの誕生」そして何よりも「新陳代謝による銘柄の自動入替えルール」が機能し続けているためです。
              </p>
            </div>
          </div>

          {/* 7章: 指数が一時的に暴落したときの考え方とNG行動 */}
          <div style={{ padding: '1.2rem 1.5rem', background: '#fff5f5', borderLeft: '4px solid #e53e3e', borderRadius: '12px', marginBottom: '2.5rem' }}>
            <h3 style={{ fontSize: '1.05rem', fontWeight: '800', color: '#c53030', marginBottom: '0.4rem' }}>
              ⚠️ 株価指数が急落したときに絶対にやってはいけない「NG行動」
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', margin: 0, lineHeight: '1.7' }}>
              経済ショックなどでS&P500や日経平均が20%〜30%急落した際、最も避けるべきなのは恐怖でインデックスファンドを売却してしまう「狼狽売り」です。指数は倒産しない優良企業の集合体であり、暴落期こそ「同じ指数を安く大量に買えるボーナス期」です。積立を解約せず淡々と買い続けることが、将来の爆発的なリターンを生む鍵となります。
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginBottom: '3rem' }}>
            <div>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.5rem' }}>
                Q. 初心者が投資するなら「S&P500」と「全世界株式（オルカン）」のどちらの指数がおすすめですか？
              </h4>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', lineHeight: '1.7', color: 'var(--text-muted)', margin: 0 }}>
                A. アメリカの圧倒的な経済成長とイノベーションを信じるなら「S&P500」、米国に依存せず世界中の国々へ均等に分散したいなら「全世界株式（オルカン）」がおすすめです。どちらも世界最高峰の優れた株価指数であり、長期積立投資で確かな実績を残しています。
              </p>
            </div>
            <div>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.5rem' }}>
                Q. 株価指数（インデックス）そのものを直接買うことはできますか？
              </h4>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', lineHeight: '1.7', color: 'var(--text-muted)', margin: 0 }}>
                A. いいえ、株価指数はあくまで「数値（計算結果）」であるため、指数そのものを直接購入することはできません。しかし、その指数の構成銘柄と同じ比率で株を買い集めて作られた「インデックスファンド（投資信託）」や「ETF（上場投資信託）」を購入することで、指数と全く同じ値動き（リターン）を得ることができます。
              </p>
            </div>
            <div>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.5rem' }}>
                Q. 「S&P500」と「NYダウ」の決定的な違いは何ですか？
              </h4>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', lineHeight: '1.7', color: 'var(--text-muted)', margin: 0 }}>
                A. S&P500は米国の代表的企業「500社」を対象とし、企業の時価総額の大きさに応じて比率を決める「時価総額加重型」です。一方、NYダウは米国の超一流企業「30社」のみを厳選し、株価の単純平均で算出する「株価平均型」です。市場全体の傾向をより正確に反映しているのはS&P500です。
              </p>
            </div>
            <div>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.5rem' }}>
                Q. 「日経平均株価」と「TOPIX（東証株価指数）」の違いは何ですか？
              </h4>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', lineHeight: '1.7', color: 'var(--text-muted)', margin: 0 }}>
                A. 日経平均株価は日本を代表する「225社」の株価平均であり、ファーストリテイリングや東京エレクトロンなど単価が高い値がさ株の影響を強く受けます。一方、TOPIXは東証プライム市場に上場する全企業の時価総額を元に算出してあり、日本市場全体の体温をより正確に表しています。
              </p>
            </div>
            <div>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.5rem' }}>
                Q. 「インデックスファンド」と「アクティブファンド」はどちらが良いですか？
              </h4>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', lineHeight: '1.7', color: 'var(--text-muted)', margin: 0 }}>
                A. 圧倒的に「インデックスファンド」が推奨されます。プロの運用者が銘柄を選定するアクティブファンドは手数料（信託報酬）が高く、長期的な成績データでは過去80%以上のアクティブファンドがシンプルなインデックスファンドの成績を下回っているためです。
              </p>
            </div>
            <div>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.5rem' }}>
                Q. 株価指数はスマホやニュースのどこでリアルタイムで確認できますか？
              </h4>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', lineHeight: '1.7', color: 'var(--text-muted)', margin: 0 }}>
                A. Google検索で「S&P500」「NYダウ」「日経平均」と検索するだけで、最新の株価チャートが画面トップに即座に表示されます。また、SBI証券や楽天証券のスマホアプリ、Yahoo!ファイナンス、TradingViewなどの無料アプリでもリアルタイムで確認できます。
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section style={{ background: 'var(--bg-warm)', color: 'var(--text-main)', position: 'relative', overflow: 'hidden', textAlign: 'center', padding: 'clamp(3rem, 8vw, 5rem) 0' }}>
        <div style={{ position: 'absolute', top: '-50px', right: '-50px', width: '200px', height: '200px', borderRadius: '50%', background: 'rgba(176, 58, 46, 0.03)' }} />
        <div style={{ position: 'absolute', bottom: '-80px', left: '-80px', width: '300px', height: '300px', borderRadius: '50%', background: 'rgba(176, 58, 46, 0.02)' }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '700px', margin: '0 auto' }}>

            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.4rem, 4vw, 2.2rem)', fontWeight: '900', lineHeight: '1.5', marginBottom: '1.5rem', color: 'var(--text-main)' }}>
              指数の違いは理解できたけれど、<br />実際のファンド選びや積立設定に迷っていませんか？
            </h2>

            <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(0.95rem, 2.5vw, 1.1rem)', lineHeight: '1.8', color: 'var(--text-muted)', marginBottom: '1rem' }}>
              S&P500とオルカンの組み合わせ方、<br className="sp-hide" />
              NISA枠を使った具体的なファンド購入操作。
            </p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(0.95rem, 2.5vw, 1.1rem)', lineHeight: '1.8', color: 'var(--text-muted)', marginBottom: '2.5rem' }}>
              ネットの情報だけでは不安な方のために、<br className="sp-hide" />
              東京米国株クラブでは<strong>少人数制（限定4名）の米国株セミナー</strong>を東京で開催しています。<br className="sp-hide" />
              カフェでお茶を飲むような気軽な雰囲気で、初心者の方でも安心してご参加いただけます。
            </p>

            <div className="glass-card" style={{ background: 'var(--bg-white)', borderRadius: '24px', padding: '2rem 1.5rem', border: '1px solid var(--glass-border)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <p style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1rem, 3vw, 1.2rem)', fontWeight: '800', lineHeight: '1.7', marginBottom: '1.5rem', color: 'var(--primary-dark)' }}>
                セミナーの詳細・開催スケジュールはこちら
              </p>

              <Link href="/seminar" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '1rem 2.5rem', borderRadius: '30px', fontWeight: '800', fontSize: '1.05rem', transition: 'all 0.3s ease', textDecoration: 'none' }}>
                セミナーの詳細を見る <ArrowRight size={18} style={{ marginLeft: '0.5rem' }} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
