import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, CheckCircle2, DollarSign, ShieldCheck, ShoppingCart, HelpCircle, Layers, Award, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: '米国株（アメリカ株）の買い方・始め方完全ガイド！初心者向けの4ステップと注文方法を解説 | 東京米国株クラブ',
  description: '米国株（アメリカ株）の買い方・始め方を初心者向けに分かりやすく解説。証券口座の開設手順、指値・成行注文の違い、円貨決済と外貨決済の選び方、NISA口座での購入方法、最初に買うべきおすすめ銘柄・ETFまで網羅。',
  alternates: {
    canonical: 'https://www.tokyo-us-stock.com/knowledge/how-to-buy',
  },
};

export default function HowToBuyPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: '米国株は日本株のように100株単位で買う必要がありますか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'いいえ、米国株は原則として「1株単位」から購入することができます。日本株のように100株単位（数十万円〜）のまとまった資金を用意する必要はなく、アップルやコカ・コーラなどの超有名企業でも数千円〜数万円程度から手軽に購入できます。',
        },
      },
      {
        '@type': 'Question',
        name: '「円貨決済」と「外貨決済」はどちらを選べばいいですか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '初心者の方で手軽に買いたい場合は「円貨決済（日本円で直接購入）」がおすすめです。口座にある日本円から自動的に換算して注文できます。一方、米国株の配当金を米ドルのまま保持して再投資したい場合や、安い為替レートで一括両替しておきたい場合は「外貨決済」がコスト面で有利になります。',
        },
      },
      {
        '@type': 'Question',
        name: '米国株を購入する際、注文方法は「成行」と「指値」のどちらが良いですか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '基本的には「指値注文（希望する上限価格を指定して買う）」を強くおすすめします。米国株は値幅制限（ストップ高・ストップ安）がないため、成行注文を出すと思いがけない高値で約定してしまうリスクがあるためです。',
        },
      },
      {
        '@type': 'Question',
        name: '新NISA口座で米国株を購入できますか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'はい、新NISAの「成長投資枠（年間最大240万円）」を活用して米国個別株や米国ETFを購入することができます。NISA口座内で購入すれば、本来約20.315%かかる国内の譲渡益・配当金への税金が完全非課税になります。',
        },
      },
      {
        '@type': 'Question',
        name: '米国株を買った後の配当金はどこに入金されますか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '利用している証券会社（SBI証券や楽天証券など）の口座に、米ドル建てで自動的に入金されます。入金された米ドルは、そのまま別の米国株の購入資金として使うことも、日本円に為替振替して銀行口座へ引き出すことも可能です。',
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
          <Link href="/knowledge" className="btn-link" style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', fontFamily: 'var(--font-body)', fontWeight: '700', textDecoration: 'none' }}>
            <ArrowLeft size={18} style={{ marginRight: '0.5rem' }} /> 基礎知識へ戻る
          </Link>
          <h1 className="post-title" style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.8rem, 6vw, 2.8rem)', fontWeight: '900', textAlign: 'left', marginLeft: '0', marginRight: 'auto', maxWidth: 'none', marginBottom: '0.5rem', color: 'var(--primary-dark)', lineHeight: '1.3' }}>
            米国株（アメリカ株）の買い方・始め方完全ガイド！初心者向けの4ステップ
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section style={{ background: 'white', padding: 'clamp(3rem, 8vw, 5rem) 0' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'left' }}>

          {/* プロローグ */}
          <div style={{ marginBottom: '3rem' }}>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
              「世界を引っ張るアップルやマイクロソフト、アマゾンの株を買ってみたいけれど、外国の株ってどうやって買うの？手続きが難しそう…」と感じていませんか？
            </p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
              実は、<strong>米国株の買い方は日本の株を買う手順とほとんど変わりません。</strong> SBI証券や楽天証券などの国内主要ネット証券を使えば、スマホアプリから日本語だけで、わずか数タップで1株（数千円〜）から購入することができます。
            </p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: 0 }}>
              本ページでは、初心者の方が迷わずに米国株投資をスタートできるよう、口座開設から注文手順、円貨・外貨決済の選び方、指値と成行の違い、最初におすすめの銘柄まで分かりやすく徹底解説します。
            </p>
          </div>

          {/* 1章: 米国株の買い方 4ステップ（全体フロー） */}
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.3rem, 3.5vw, 1.6rem)', fontWeight: '900', color: 'var(--primary-dark)', borderBottom: '2px solid var(--bg-warm)', paddingBottom: '0.8rem', marginTop: '3rem', marginBottom: '1.5rem' }}>
            1. 米国株の買い方・始め方 4つのステップ（全体像）
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
            米国株を購入するまでの全体的な流れは以下の4ステップです。スマホ1台あれば全てオンラインで完結します。
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2.5rem' }}>
            <div style={{ padding: '1.2rem 1.5rem', background: 'var(--bg-warm)', borderRadius: '16px', borderLeft: '5px solid var(--primary)' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.4rem' }}>
                STEP 1：証券会社で口座を開設する（無料）
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', margin: 0, lineHeight: '1.7' }}>
                SBI証券や楽天証券などの大手ネット証券の公式サイトから口座開設を申し込みます。身分証明書（マイナンバーカード等）をスマホで撮影してアップロードすれば、数日〜1週間程度で取引口座が開設できます。同時に「NISA口座」も申し込んでおくのがおすすめです。
              </p>
            </div>

            <div style={{ padding: '1.2rem 1.5rem', background: 'var(--bg-warm)', borderRadius: '16px', borderLeft: '5px solid var(--primary)' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.4rem' }}>
                STEP 2：口座へ資金（日本円）を入金する
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', margin: 0, lineHeight: '1.7' }}>
                開設した証券口座へ、自分の銀行口座から投資用の日本円を入金します。即時入金サービスを利用すれば、手数料無料で一瞬で反映されます。米ドルへの事前両替は必須ではなく、日本円のままでも購入可能です。
              </p>
            </div>

            <div style={{ padding: '1.2rem 1.5rem', background: 'var(--bg-warm)', borderRadius: '16px', borderLeft: '5px solid var(--primary)' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.4rem' }}>
                STEP 3：欲しい銘柄を検索する（ティッカーシンボル）
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', margin: 0, lineHeight: '1.7' }}>
                証券会社の検索画面で、買いたい銘柄の企業名（例：アップル）や銘柄コードである「ティッカーシンボル（例：AAPL, NVDA, VYMなど）」を入力して銘柄ページを開きます。
              </p>
            </div>

            <div style={{ padding: '1.2rem 1.5rem', background: 'var(--bg-warm)', borderRadius: '16px', borderLeft: '5px solid var(--primary)' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.4rem' }}>
                STEP 4：買付数量・注文方法を入力して発注
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', margin: 0, lineHeight: '1.7' }}>
                「買付」ボタンを押し、購入株数（1株〜）、注文方法（指値推奨）、決済方法（円貨または外貨）、口座区分（NISA成長投資枠または特定口座）を選択して注文を送信します。
              </p>
            </div>
          </div>

          {/* 2章: おすすめの証券会社の選び方 */}
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.3rem, 3.5vw, 1.6rem)', fontWeight: '900', color: 'var(--primary-dark)', borderBottom: '2px solid var(--bg-warm)', paddingBottom: '0.8rem', marginTop: '3rem', marginBottom: '1.5rem' }}>
            2. 米国株を買うならどの証券会社が良い？比較とおすすめ
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
            米国株を取り扱う金融機関は多数ありますが、**「対面型の銀行や店舗型証券会社」は絶対に使ってはいけません。** 売買手数料が高く、選べる銘柄数が非常に少ないためです。
          </p>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
            手数料が格安で、取り扱い銘柄数が数千種類にのぼる**「SBI証券」**または**「楽天証券」**のネット証券2大手のどちらかを選ぶのが圧倒的な正解です。
          </p>

          <div style={{ overflowX: 'auto', marginBottom: '2.5rem', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.08)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '500px', fontSize: '0.95rem', fontFamily: 'var(--font-body)' }}>
              <thead>
                <tr style={{ backgroundColor: 'var(--bg-warm)', borderBottom: '2px solid rgba(0,0,0,0.08)' }}>
                  <th style={{ padding: '0.8rem 1rem', fontWeight: '800' }}>証券会社</th>
                  <th style={{ padding: '0.8rem 1rem', fontWeight: '800' }}>米国株 取扱銘柄数</th>
                  <th style={{ padding: '0.8rem 1rem', fontWeight: '800', color: 'var(--primary)' }}>NISAでの売買手数料</th>
                  <th style={{ padding: '0.8rem 1rem', fontWeight: '800' }}>特徴・強み</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                  <td style={{ padding: '0.8rem 1rem', fontWeight: '700' }}>SBI証券</td>
                  <td style={{ padding: '0.8rem 1rem' }}>約6,000銘柄以上</td>
                  <td style={{ padding: '0.8rem 1rem', fontWeight: '800', color: 'var(--primary)' }}>売買手数料【無料】</td>
                  <td style={{ padding: '0.8rem 1rem' }}>業界最高水準の銘柄数・住信SBIネット銀行連携で為替コスト最安級</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                  <td style={{ padding: '0.8rem 1rem', fontWeight: '700' }}>楽天証券</td>
                  <td style={{ padding: '0.8rem 1rem' }}>約5,000銘柄以上</td>
                  <td style={{ padding: '0.8rem 1rem', fontWeight: '800', color: 'var(--primary)' }}>売買手数料【無料】</td>
                  <td style={{ padding: '0.8rem 1rem' }}>画面が非常に見やすく初心者向け・楽天ポイントが貯まる・使える</td>
                </tr>
                <tr>
                  <td style={{ padding: '0.8rem 1rem', fontWeight: '700' }}>マネックス証券</td>
                  <td style={{ padding: '0.8rem 1rem' }}>約5,000銘柄以上</td>
                  <td style={{ padding: '0.8rem 1rem', fontWeight: '800', color: 'var(--primary)' }}>売買手数料【全額キャッシュバック】</td>
                  <td style={{ padding: '0.8rem 1rem' }}>銘柄分析ツール「銘柄スカウター米国株」が非常に優秀</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* 3章: 注文方法の基本（成行 vs 指値） */}
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.3rem, 3.5vw, 1.6rem)', fontWeight: '900', color: 'var(--primary-dark)', borderBottom: '2px solid var(--bg-warm)', paddingBottom: '0.8rem', marginTop: '3rem', marginBottom: '1.5rem' }}>
            3. 初心者が知っておくべき注文方法（指値注文 vs 成行注文）
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
            注文を送信する際、価格の指定方法として**「指値（さしね）注文」**と**「成行（なりゆき）注文」**の2つの選択肢があります。
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.2rem', marginBottom: '2rem' }}>
            <div style={{ padding: '1.2rem 1.5rem', background: 'var(--bg-warm)', borderRadius: '12px', borderLeft: '4px solid var(--primary)' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.4rem' }}>
                ・指値（さしね）注文【初心者におすすめ！】
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', margin: 0, lineHeight: '1.7' }}>
                「1株150ドル以下になったら買いたい」というように、自分の買いたい上限価格を指定して注文する方法です。<br />
                指定した価格より高値で買わされる心配がないため、米国株の注文では<strong>指値注文を基本とするのが鉄則</strong>です。
              </p>
            </div>

            <div style={{ padding: '1.2rem 1.5rem', background: 'var(--bg-warm)', borderRadius: '12px', borderLeft: '4px solid #e53e3e' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '800', color: '#c53030', marginBottom: '0.4rem' }}>
                ・成行（なりゆき）注文【初心者は注意】
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', margin: 0, lineHeight: '1.7' }}>
                価格を指定せず、「いくらでもいいから今すぐ買いたい」という注文方法です。<br />
                米国株にはストップ高・ストップ安などの値幅制限がないため、開場直後に成行注文を出すと思いがけない異常な高値で約定してしまう（高値掴み）リスクがあります。
              </p>
            </div>
          </div>

          <div style={{ padding: '1.2rem 1.5rem', border: '1px solid rgba(0,0,0,0.08)', borderRadius: '12px', background: 'white', marginBottom: '2.5rem' }}>
            <h4 style={{ fontSize: '1rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.4rem' }}>
              💡 注文の有効期限「GTC（Good 'Til Canceled）」とは？
            </h4>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', margin: 0, lineHeight: '1.7' }}>
              指値注文を出す際、有効期限を「当日中」だけでなく「期間指定（GTC）」に設定できます。これを選択しておけば、希望の指値価格になるまで最大数ヶ月間、毎夜自動的に注文を出し続けてくれるため、何度も注文し直す手間が省けます。
            </p>
          </div>

          {/* 4章: 円貨決済 vs 外貨決済の違い */}
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.3rem, 3.5vw, 1.6rem)', fontWeight: '900', color: 'var(--primary-dark)', borderBottom: '2px solid var(--bg-warm)', paddingBottom: '0.8rem', marginTop: '3rem', marginBottom: '1.5rem' }}>
            4. 「円貨決済」と「外貨決済」のどちらを選ぶべきか？
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
            米国株を購入するとき、支払方法として「円貨決済」と「外貨決済」を選択する画面が表示されます。それぞれの特徴は以下の通りです。
          </p>

          <div style={{ overflowX: 'auto', marginBottom: '2.5rem', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.08)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '480px', fontSize: '0.95rem', fontFamily: 'var(--font-body)' }}>
              <thead>
                <tr style={{ backgroundColor: 'var(--bg-warm)', borderBottom: '2px solid rgba(0,0,0,0.08)' }}>
                  <th style={{ padding: '0.8rem 1rem', fontWeight: '800' }}>区分</th>
                  <th style={{ padding: '0.8rem 1rem', fontWeight: '800' }}>仕組み</th>
                  <th style={{ padding: '0.8rem 1rem', fontWeight: '800' }}>メリット</th>
                  <th style={{ padding: '0.8rem 1rem', fontWeight: '800' }}>おすすめ対象</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                  <td style={{ padding: '0.8rem 1rem', fontWeight: '700' }}>円貨決済</td>
                  <td style={{ padding: '0.8rem 1rem' }}>日本円口座から直接引落し。約定時に自動両替。</td>
                  <td style={{ padding: '0.8rem 1rem', fontWeight: '700', color: 'var(--primary)' }}>事前のドル両替が不要でとにかく手軽！</td>
                  <td style={{ padding: '0.8rem 1rem' }}>初心者・手間をかけたくない方</td>
                </tr>
                <tr>
                  <td style={{ padding: '0.8rem 1rem', fontWeight: '700' }}>外貨決済</td>
                  <td style={{ padding: '0.8rem 1rem' }}>事前に両替した米ドル（外貨口座）から購入。</td>
                  <td style={{ padding: '0.8rem 1rem', fontWeight: '700', color: 'var(--primary)' }}>配当金の再投資で二重両替手数料がかからない！</td>
                  <td style={{ padding: '0.8rem 1rem' }}>高配当株投資家・中上級者</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* 5章: 初心者が最初に買うべきおすすめ銘柄・ETF */}
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.3rem, 3.5vw, 1.6rem)', fontWeight: '900', color: 'var(--primary-dark)', borderBottom: '2px solid var(--bg-warm)', paddingBottom: '0.8rem', marginTop: '3rem', marginBottom: '1.5rem' }}>
            5. 初心者が最初に購入すべきおすすめ銘柄・ETF
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
            口座と注文方法を理解したら、いよいよ購入です。初心者が失敗しないための王道の投資先を紹介します。
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', marginBottom: '2.5rem' }}>
            <div style={{ padding: '1.2rem 1.5rem', border: '1px solid rgba(0,0,0,0.08)', borderRadius: '12px', background: 'white' }}>
              <h3 style={{ fontSize: '1.05rem', fontWeight: '800', color: 'var(--primary)', marginBottom: '0.4rem' }}>
                ① 米国株全体に丸ごと投資できる王道ETF（VOO / IVV）
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', margin: 0, lineHeight: '1.7' }}>
                米国の主要大企業500社に一括投資できる「S&P500指数」に連動するETFです。1株購入するだけで、アップル、マイクロソフト、アマゾンなどに自動的に分散投資ができ、過去の長期リターンも非常に安定しています。
              </p>
            </div>

            <div style={{ padding: '1.2rem 1.5rem', border: '1px solid rgba(0,0,0,0.08)', borderRadius: '12px', background: 'white' }}>
              <h3 style={{ fontSize: '1.05rem', fontWeight: '800', color: 'var(--primary)', marginBottom: '0.4rem' }}>
                ② 米国高配当株ETF（VYM / HDV）
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', margin: 0, lineHeight: '1.7' }}>
                配当利回りが高い米国の優良企業数百社を集めたETFです。経費率が極めて低く、年4回の配当金を安定して受け取ることができるため、不労所得を作りたい方に最適な選択肢です。
              </p>
            </div>

            <div style={{ padding: '1.2rem 1.5rem', border: '1px solid rgba(0,0,0,0.08)', borderRadius: '12px', background: 'white' }}>
              <h3 style={{ fontSize: '1.05rem', fontWeight: '800', color: 'var(--primary)', marginBottom: '0.4rem' }}>
                ③ 圧倒的な競争力を持つ超大型個別株（ビッグテック・配当王）
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', margin: 0, lineHeight: '1.7' }}>
                個別株にチャレンジしたい場合は、世界中で使われている製品を持つビッグテック（マイクロソフトやアップル）や、50年以上連続増配している超安定企業（コカ・コーラやP&Gなど）から少額で1株ずつ買い増していくのが安全です。
              </p>
            </div>
          </div>

          {/* 6章: 口座区分の選び方（特定口座 vs 一般口座 vs NISA口座） */}
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.3rem, 3.5vw, 1.6rem)', fontWeight: '900', color: 'var(--primary-dark)', borderBottom: '2px solid var(--bg-warm)', paddingBottom: '0.8rem', marginTop: '3rem', marginBottom: '1.5rem' }}>
            6. 購入時に迷う「口座区分」の正しい選び方
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
            注文画面で「特定口座」「一般口座」「NISA口座（成長投資枠）」の選択を求められます。確定申告の手間や節税効果が大きく変わるため、以下の原則を守って選択してください。
          </p>

          <div style={{ overflowX: 'auto', marginBottom: '2.5rem', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.08)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '480px', fontSize: '0.95rem', fontFamily: 'var(--font-body)' }}>
              <thead>
                <tr style={{ backgroundColor: 'var(--bg-warm)', borderBottom: '2px solid rgba(0,0,0,0.08)' }}>
                  <th style={{ padding: '0.8rem 1rem', fontWeight: '800' }}>口座区分</th>
                  <th style={{ padding: '0.8rem 1rem', fontWeight: '800' }}>税金・非課税の取り扱い</th>
                  <th style={{ padding: '0.8rem 1rem', fontWeight: '800' }}>確定申告の必要性</th>
                  <th style={{ padding: '0.8rem 1rem', fontWeight: '800' }}>おすすめ優先度</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                  <td style={{ padding: '0.8rem 1rem', fontWeight: '700', color: 'var(--primary)' }}>NISA口座（成長投資枠）</td>
                  <td style={{ padding: '0.8rem 1rem', fontWeight: '700' }}>利益・配当金が完全非課税（年間240万まで）</td>
                  <td style={{ padding: '0.8rem 1rem', color: 'var(--primary)', fontWeight: '700' }}>不要（申告不要）</td>
                  <td style={{ padding: '0.8rem 1rem', fontWeight: '800', color: 'var(--primary)' }}>【最優先】（非課税枠がある限り）</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                  <td style={{ padding: '0.8rem 1rem', fontWeight: '700' }}>特定口座（源泉徴収あり）</td>
                  <td style={{ padding: '0.8rem 1rem' }}>約20.315%の税金が自動的に引かれる</td>
                  <td style={{ padding: '0.8rem 1rem', color: 'var(--primary)', fontWeight: '700' }}>不要（証券会社が自動計算・納税）</td>
                  <td style={{ padding: '0.8rem 1rem', fontWeight: '700' }}>【第二優先】（NISA枠を使い切った後）</td>
                </tr>
                <tr>
                  <td style={{ padding: '0.8rem 1rem', fontWeight: '700' }}>一般口座</td>
                  <td style={{ padding: '0.8rem 1rem' }}>約20.315%の税金がかかる</td>
                  <td style={{ padding: '0.8rem 1rem', color: '#e53e3e', fontWeight: '700' }}>必要（自分で損益計算・確定申告）</td>
                  <td style={{ padding: '0.8rem 1rem', color: 'var(--text-muted)' }}>【非推奨】（使うメリットなし）</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* 7章: 購入後のポートフォリオ管理と買い増しルール */}
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.3rem, 3.5vw, 1.6rem)', fontWeight: '900', color: 'var(--primary-dark)', borderBottom: '2px solid var(--bg-warm)', paddingBottom: '0.8rem', marginTop: '3rem', marginBottom: '1.5rem' }}>
            7. 米国株を購入した後の賢い管理と買い増しルール
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
            株を購入して「終わり」ではありません。長期資産形成を成功させるための購入後の管理ルールを解説します。
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', marginBottom: '2.5rem' }}>
            <div style={{ padding: '1.2rem 1.5rem', background: 'var(--bg-warm)', borderRadius: '12px', borderLeft: '4px solid var(--primary)' }}>
              <h3 style={{ fontSize: '1.05rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.4rem' }}>
                ・配当金（分配金）の自動再投資（複利効果）
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', margin: 0, lineHeight: '1.7' }}>
                米国株やETFから入金された年4回の配当金（米ドル）は、そのまま放置せず次の1株の購入資金に充てる（再投資する）ことで、雪だるま式に資産が増える「複利の魔力」を最大限に引き出すことができます。
              </p>
            </div>
            <div style={{ padding: '1.2rem 1.5rem', background: 'var(--bg-warm)', borderRadius: '12px', borderLeft: '4px solid var(--primary)' }}>
              <h3 style={{ fontSize: '1.05rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.4rem' }}>
                ・定期的な「定額買い増し（ドル・コスト平均法）」
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', margin: 0, lineHeight: '1.7' }}>
                「株価が下がったら買おう」と待ち続けると、機会損失になりがちです。毎月給料日に決まった額（数万円など）を機械的に指値で買い増していくルールを作ることで、高値掴みを防ぎながら平均取得単価を自然に下げることができます。
              </p>
            </div>
          </div>

          {/* 6章: 米国株の買い方FAQ */}
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.3rem, 3.5vw, 1.6rem)', fontWeight: '900', color: 'var(--primary-dark)', borderBottom: '2px solid var(--bg-warm)', paddingBottom: '0.8rem', marginTop: '3rem', marginBottom: '1.5rem' }}>
            6. 米国株の買い方に関するよくある質問 (FAQ)
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginBottom: '3rem' }}>
            <div>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.5rem' }}>
                Q. 米国株は日本株のように100株単位で買う必要がありますか？
              </h4>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', lineHeight: '1.7', color: 'var(--text-muted)', margin: 0 }}>
                A. いいえ、米国株は原則として「1株単位」から購入することができます。日本株のように100株単位（数十万円〜）のまとまった資金を用意する必要はなく、アップルやコカ・コーラなどの超有名企業でも数千円〜数万円程度から手軽に購入できます。
              </p>
            </div>
            <div>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.5rem' }}>
                Q. 「円貨決済」と「外貨決済」はどちらを選べばいいですか？
              </h4>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', lineHeight: '1.7', color: 'var(--text-muted)', margin: 0 }}>
                A. 初心者の方で手軽に買いたい場合は「円貨決済（日本円で直接購入）」がおすすめです。口座にある日本円から自動的に換算して注文できます。一方、米国株の配当金を米ドルのまま保持して再投資したい場合や、安い為替レートで一括両替しておきたい場合は「外貨決済」がコスト面で有利になります。
              </p>
            </div>
            <div>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.5rem' }}>
                Q. 米国株を購入する際、注文方法は「成行」と「指値」のどちらが良いですか？
              </h4>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', lineHeight: '1.7', color: 'var(--text-muted)', margin: 0 }}>
                A. 基本的には「指値注文（希望する上限価格を指定して買う）」を強くおすすめします。米国株は値幅制限（ストップ高・ストップ安）がないため、成行注文を出すと思いがけない高値で約定してしまうリスクがあるためです。
              </p>
            </div>
            <div>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.5rem' }}>
                Q. 新NISA口座で米国株を購入できますか？
              </h4>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', lineHeight: '1.7', color: 'var(--text-muted)', margin: 0 }}>
                A. はい、新NISAの「成長投資枠（年間最大240万円）」を活用して米国個別株や米国ETFを購入することができます。NISA口座内で購入すれば、本来約20.315%かかる国内の譲渡益・配当金への税金が完全非課税になります。
              </p>
            </div>
            <div>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.5rem' }}>
                Q. 米国株を買った後の配当金はどこに入金されますか？
              </h4>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', lineHeight: '1.7', color: 'var(--text-muted)', margin: 0 }}>
                A. 利用している証券会社（SBI証券や楽天証券など）の口座に、米ドル建てで自動的に入金されます。入金された米ドルは、そのまま別の米国株の購入資金として使うことも、日本円に為替振替して銀行口座へ引き出すことも可能です。
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
              買い方は理解できたけれど、<br />最初の1株を選ぶのに迷っていませんか？
            </h2>

            <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(0.95rem, 2.5vw, 1.1rem)', lineHeight: '1.8', color: 'var(--text-muted)', marginBottom: '1rem' }}>
              自分の予算に合った口座設定、銘柄の選び方、<br className="sp-hide" />
              NISA枠の最も賢い使い方。
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
