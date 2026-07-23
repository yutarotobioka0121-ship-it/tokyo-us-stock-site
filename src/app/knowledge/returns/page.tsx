import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, TrendingUp, DollarSign, PieChart, CheckCircle2, ShieldCheck, HelpCircle, Repeat, Scale } from 'lucide-react';

export const metadata: Metadata = {
  title: '株式投資の収益とは？キャピタルゲインとインカムゲインの違い・選び方を徹底解説 | 東京米国株クラブ',
  description: '株式投資で得られる2つの収益「キャピタルゲイン（値上がり益）」と「インカムゲイン（配当金）」の仕組み、違い、メリット・リスクを徹底解説。トータルリターンの考え方、米国株の連続増配企業、年代別の収益戦略まで網羅。',
  alternates: {
    canonical: 'https://www.tokyo-us-stock.com/knowledge/returns',
  },
};

export default function ReturnsKnowledgePage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: '資産形成を始めたばかりの初心者は、どちらの収益を狙うべきですか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '資産形成期の初心者（20代〜50代前半）は、まず「キャピタルゲイン（値上がり益）」重視のインデックス投資（S&P500や全世界株式）を軸にするのが賢明です。得られた配当金がファンド内で自動再投資されるため、複利効果が最大化されて効率よく資産を増やせます。',
        },
      },
      {
        '@type': 'Question',
        name: '「キャピタルゲイン」と「インカムゲイン」の最大の違いは何ですか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'キャピタルゲインは「株を売却した時に発生する一回限りの大きな利益（値上がり益）」です。一方、インカムゲインは「株を売らずに保有し続けるだけで定期的（年2〜4回など）に振り込まれる配当金収入」です。',
        },
      },
      {
        '@type': 'Question',
        name: '米国株の配当金は年に何回もらえますか？日本株との違いは？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '日本株の多くの企業は年1回〜2回の配当支払いが主流ですが、米国株のほとんどの主要企業は「年4回（四半期ごと）」配当金を支払います。そのため、3ヶ月ごとに定期的にお小遣いのような現金収入を受け取ることができる大きな魅力があります。',
        },
      },
      {
        '@type': 'Question',
        name: '配当利回り（例：6%や8%）が高い銘柄ほどお得ですか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'いいえ、配当利回りが異常に高い銘柄（高配当の罠）には注意が必要です。業績悪化によって株価が急落した結果として計算上の利回りが高く見えているケースが多く、その後「減配（配当金のカット）」を発表して株価も暴落し、大きな損失を被るリスクがあります。',
        },
      },
      {
        '@type': 'Question',
        name: 'NISA口座で配当金をもらう際、最も重要な注意点は何ですか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '証券会社の配当金受取方法の設定を必ず「株式数比例配分方式（証券口座受け取り）」にしておく必要があります。銀行口座受け取りなどに設定されていると、せっかくのNISA口座でも配当金に約20.315%の税金がかかってしまいます。',
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
            株式投資の収益とは？キャピタルゲインとインカムゲインの違いと選び方
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section style={{ background: 'white', padding: 'clamp(3rem, 8vw, 5rem) 0' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'left' }}>

          {/* プロローグ */}
          <div style={{ marginBottom: '3rem' }}>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
              「株式投資を始めると、どうやってお金が増えるの？」「ニュースで聞く『配当金』や『値上がり益』って具体的にどう違うの？」疑問に感じていませんか？
            </p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
              株式投資から得られる収益（利益）は、大きく分けて**「キャピタルゲイン（値上がり益）」**と**「インカムゲイン（配当金・分配金）」**の2種類しかありません。
            </p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: 0 }}>
              この2つの収益の性質、メリット・デメリット、そして自分の年齢や目的に合わせた使い分けを理解することが、資産形成を大成功させるための決定的な鍵となります。本ページでは、初心者向けに2つの収益の違いから戦略まで徹底的に解説します。
            </p>
          </div>

          {/* 1章: 株式投資で得られる2つの収益（全体比較） */}
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.3rem, 3.5vw, 1.6rem)', fontWeight: '900', color: 'var(--primary-dark)', borderBottom: '2px solid var(--bg-warm)', paddingBottom: '0.8rem', marginTop: '3rem', marginBottom: '1.5rem' }}>
            1. 株式投資で得られる2つの収益（全体比較表）
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
            まずは、2つの収益の基本的な違いを比較表で整理しましょう。
          </p>

          {/* 比較表 */}
          <div style={{ overflowX: 'auto', marginBottom: '2.5rem', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.08)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '520px', fontSize: '0.95rem', fontFamily: 'var(--font-body)' }}>
              <thead>
                <tr style={{ backgroundColor: 'var(--bg-warm)', borderBottom: '2px solid rgba(0,0,0,0.08)' }}>
                  <th style={{ padding: '0.8rem 1rem', fontWeight: '800' }}>比較項目</th>
                  <th style={{ padding: '0.8rem 1rem', fontWeight: '800', color: 'var(--primary)' }}>キャピタルゲイン（値上がり益）</th>
                  <th style={{ padding: '0.8rem 1rem', fontWeight: '800', color: 'var(--primary-dark)' }}>インカムゲイン（配当金・分配金）</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                  <td style={{ padding: '0.8rem 1rem', fontWeight: '700' }}>収益の仕組み</td>
                  <td style={{ padding: '0.8rem 1rem' }}>買った時より株価が上がった時に売却して得る差額利益</td>
                  <td style={{ padding: '0.8rem 1rem' }}>株を保有し続けることで企業から定期的にもらえる現金還元</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                  <td style={{ padding: '0.8rem 1rem', fontWeight: '700' }}>利益のタイミング</td>
                  <td style={{ padding: '0.8rem 1rem' }}>株を売却した瞬間（1回限り）</td>
                  <td style={{ padding: '0.8rem 1rem', fontWeight: '700', color: 'var(--primary-dark)' }}>保有中ずっと定期的（年2回・年4回など）</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                  <td style={{ padding: '0.8rem 1rem', fontWeight: '700' }}>リターンの爆発力</td>
                  <td style={{ padding: '0.8rem 1rem', fontWeight: '700', color: 'var(--primary)' }}>非常に大きい（2倍〜10倍以上の可能性）</td>
                  <td style={{ padding: '0.8rem 1rem' }}>安定・マイルド（年利3%〜5%程度が中心）</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                  <td style={{ padding: '0.8rem 1rem', fontWeight: '700' }}>主なリスク</td>
                  <td style={{ padding: '0.8rem 1rem' }}>値下がりによる損失（キャピタルロス）</td>
                  <td style={{ padding: '0.8rem 1rem' }}>業績悪化による減配・無配リスク</td>
                </tr>
                <tr>
                  <td style={{ padding: '0.8rem 1rem', fontWeight: '700' }}>主な投資対象</td>
                  <td style={{ padding: '0.8rem 1rem' }}>インデックスファンド（S&P500等）、ハイテク成長株</td>
                  <td style={{ padding: '0.8rem 1rem' }}>米国高配当株ETF（VYM等）、連続増配企業</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* 2章: キャピタルゲイン（値上がり益） */}
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.3rem, 3.5vw, 1.6rem)', fontWeight: '900', color: 'var(--primary-dark)', borderBottom: '2px solid var(--bg-warm)', paddingBottom: '0.8rem', marginTop: '3rem', marginBottom: '1.5rem' }}>
            2. キャピタルゲイン（値上がり益）の仕組み・メリット・リスク
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
            キャピタルゲイン（Capital Gain）とは、**株式や投資信託を買い、価格（株価）が上がったタイミングで売却した際に得られる「売買差額の利益」**のことです。
          </p>

          <div style={{ padding: '1.2rem 1.5rem', background: 'var(--bg-warm)', borderRadius: '12px', borderLeft: '4px solid var(--primary)', marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.05rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.4rem' }}>
              💡 キャピタルゲインの具体例
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', margin: 0, lineHeight: '1.7' }}>
              ある企業の株を1株「10,000円」で購入し、数年後に事業が成長して株価が「25,000円」に値上がりした時に売却した場合、差し引いた**15,000円がキャピタルゲイン（値上がり益）**となります。（※売却せずに上がった状態のまま保有している段階の利益は「含み益」と呼びます）
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', marginBottom: '2.5rem' }}>
            <div style={{ padding: '1.2rem 1.5rem', border: '1px solid rgba(0,0,0,0.08)', borderRadius: '12px', background: 'white' }}>
              <h3 style={{ fontSize: '1.05rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.4rem' }}>
                ・メリット：短期間で資産を数倍に爆発拡大できる
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', margin: 0, lineHeight: '1.7' }}>
                最大の特徴はリターンの大きさです。アップルやエヌビディア（NVIDIA）のような成長企業や、S&P500のような長期右肩上がりのインデックスに投資することで、10年〜20年で資産を3倍〜10倍以上へ大きく拡大させることができます。
              </p>
            </div>

            <div style={{ padding: '1.2rem 1.5rem', border: '1px solid rgba(0,0,0,0.08)', borderRadius: '12px', background: 'white' }}>
              <h3 style={{ fontSize: '1.05rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.4rem' }}>
                ・リスク：「売るタイミング」の難しさと下落リスク
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', margin: 0, lineHeight: '1.7' }}>
                株価は日々上下するため、購入価格よりも下回った時点で売却すると「キャピタルロス（譲渡損失）」が発生します。また、「いつ売って利益を確定させるか」という判断（出口戦略）が必要になります。
              </p>
            </div>
          </div>

          {/* 3章: インカムゲイン（配当金・分配金） */}
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.3rem, 3.5vw, 1.6rem)', fontWeight: '900', color: 'var(--primary-dark)', borderBottom: '2px solid var(--bg-warm)', paddingBottom: '0.8rem', marginTop: '3rem', marginBottom: '1.5rem' }}>
            3. インカムゲイン（配当金・分配金）の仕組み・メリット・リスク
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
            インカムゲイン（Income Gain）とは、**資産を売却せずに保有し続けることによって、企業から定期的に受け取る「配当金」や「分配金」などの不労所得**のことです。
          </p>

          <div style={{ padding: '1.2rem 1.5rem', background: 'var(--bg-warm)', borderRadius: '12px', borderLeft: '4px solid var(--primary-dark)', marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.05rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.4rem' }}>
              💡 米国株の大きな魅力：「年4回配当」と「連続増配企業」
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', margin: 0, lineHeight: '1.7' }}>
              日本株の配当は年1回〜2回が一般的ですが、**米国株のほぼ全企業は「年4回（3ヶ月ごと）」配当を支払います。**<br />
              さらに、コカ・コーラやP&G、ジョンソン・エンド・ジョンソンなど、**「50年以上毎年配当金を増やし続けている企業（配当王）」**が米国には多数存在します。持っているだけで毎年受け取れるお小遣いが増えていく仕組みが作れます。
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', marginBottom: '2.5rem' }}>
            <div style={{ padding: '1.2rem 1.5rem', border: '1px solid rgba(0,0,0,0.08)', borderRadius: '12px', background: 'white' }}>
              <h3 style={{ fontSize: '1.05rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.4rem' }}>
                ・メリット：株を売らずに「生活費の足しになる現金」が得られる
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', margin: 0, lineHeight: '1.7' }}>
                株を一切売却する必要がないため、株価の暴落時でも精神的に非常に安定します。毎月または年に数回口座に入金される配当金を、日々の生活費、外食費、旅行代などに直接充てることができます。
              </p>
            </div>

            <div style={{ padding: '1.2rem 1.5rem', border: '1px solid rgba(0,0,0,0.08)', borderRadius: '12px', background: 'white' }}>
              <h3 style={{ fontSize: '1.05rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.4rem' }}>
                ・リスク：企業の業績悪化による「減配（配当カット）」
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', margin: 0, lineHeight: '1.7' }}>
                配当金は企業の利益から還元されるため、業績が悪化すると配当金額が減ったり（減配）、ゼロになったり（無配）するリスクがあります。
              </p>
            </div>
          </div>

          {/* 4章: トータルリターンという重要思考 */}
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.3rem, 3.5vw, 1.6rem)', fontWeight: '900', color: 'var(--primary-dark)', borderBottom: '2px solid var(--bg-warm)', paddingBottom: '0.8rem', marginTop: '3rem', marginBottom: '1.5rem' }}>
            4. トータルリターン（総収益）という必須の考え方
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
            投資成果を正しく評価するために必ず押さえておくべき公式が**「トータルリターン」**です。
          </p>

          <div style={{ padding: '1.5rem', background: 'var(--bg-warm)', borderRadius: '16px', border: '1px solid var(--glass-border)', textAlign: 'center', marginBottom: '2.5rem' }}>
            <p style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.1rem, 3vw, 1.3rem)', fontWeight: '900', color: 'var(--primary-dark)', margin: 0 }}>
              トータルリターン ＝ キャピタルゲイン（値上がり分） ＋ インカムゲイン（配当金分）
            </p>
          </div>

          <div style={{ padding: '1.2rem 1.5rem', background: '#fff5f5', borderLeft: '4px solid #e53e3e', borderRadius: '8px', marginBottom: '2.5rem' }}>
            <h3 style={{ fontSize: '1.05rem', fontWeight: '800', color: '#c53030', marginBottom: '0.4rem' }}>
              ⚠️ 初心者がハマる「高配当貧乏（高配当の罠）」に注意！
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', margin: 0, lineHeight: '1.7' }}>
              例えば、年間5%の高い配当金を出している銘柄があっても、株価自体が年に10%下落してしまった場合、トータルリターンは「＋5% － 10% ＝ **マイナス5%**」となり全体で損をしています。<br />
              配当金の利回り（パーセンテージ）の高さだけに目を奪われず、株価が長期的に維持・成長できる企業であるか（トータルでプラスになるか）を必ず確認しましょう。
            </p>
          </div>

          {/* 5章: 年代・ライフステージ別の組み合わせ戦略 */}
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.3rem, 3.5vw, 1.6rem)', fontWeight: '900', color: 'var(--primary-dark)', borderBottom: '2px solid var(--bg-warm)', paddingBottom: '0.8rem', marginTop: '3rem', marginBottom: '1.5rem' }}>
            5. 年代・目的別の最適な収益戦略
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
            キャピタルゲインとインカムゲインのどちらを重視すべきかは、あなたの年齢と人生の目的によって大きく異なります。
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.2rem', marginBottom: '2.5rem' }}>
            <div style={{ padding: '1.2rem 1.5rem', background: 'var(--bg-warm)', borderRadius: '12px', borderLeft: '4px solid var(--primary)' }}>
              <h3 style={{ fontSize: '1.05rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.4rem' }}>
                ・資産拡大期（20代〜50代前半）：キャピタルゲイン重視【複利で資産最大化】
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', margin: 0, lineHeight: '1.7' }}>
                まだ働く収入があり資産をどんどん増やしたい時期は、S&P500や全世界株式などのインデックス投資信託を軸にします。配当金が自動的にファンド内で再投資されるため、税金が引かれずに最高効率で資産が爆発拡大します。
              </p>
            </div>

            <div style={{ padding: '1.2rem 1.5rem', background: 'var(--bg-warm)', borderRadius: '12px', borderLeft: '4px solid var(--primary-dark)' }}>
              <h3 style={{ fontSize: '1.05rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.4rem' }}>
                ・資産活用期（50代後半〜リタイア世代）：インカムゲイン重視【現金収入で豊かな生活】
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', margin: 0, lineHeight: '1.7' }}>
                定年退職が見えてきたら、徐々に増えた資産の一部を米国高配当株ETF（VYMやSCHD等）へ切り替えていきます。取り崩しの手間をかけずに毎月・年4回の非課税配当金をもらい、年金プラスαの豊かな老後生活を楽しむ戦略が有効です。
              </p>
            </div>
          </div>

          {/* 6章: 配当金再投資の複利効果 */}
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.3rem, 3.5vw, 1.6rem)', fontWeight: '900', color: 'var(--primary-dark)', borderBottom: '2px solid var(--bg-warm)', paddingBottom: '0.8rem', marginTop: '3rem', marginBottom: '1.5rem' }}>
            6. 配当金を再投資する「複利の魔法」
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
            物理学者アインシュタインが「人類最大の発見」と称したのが**「複利（ふくり）」**です。
          </p>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '2.5rem' }}>
            受け取ったインカムゲイン（配当金）を使わずに、そのまま同じ株の買い増しに使う（配当再投資）ことで、「元本＋配当金」の全体に対してさらに新しい配当金がつくようになります。雪だるまが坂道を転がり落ちるように、年数が経つほど資産の増えるスピードが加速度的に早くなっていきます。
          </p>

          {/* 7章: 米国企業 vs 日本企業の株主還元姿勢の違い */}
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.3rem, 3.5vw, 1.6rem)', fontWeight: '900', color: 'var(--primary-dark)', borderBottom: '2px solid var(--bg-warm)', paddingBottom: '0.8rem', marginTop: '3rem', marginBottom: '1.5rem' }}>
            7. 米国株が収益（リターン）面で非常に優れている2つの理由
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
            なぜ世界中の投資家がキャピタルゲイン・インカムゲインの両面で米国株を好むのか、その理由は企業の**株主還元に対する圧倒的な姿勢の違い**にあります。
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', marginBottom: '2.5rem' }}>
            <div style={{ padding: '1.2rem 1.5rem', border: '1px solid rgba(0,0,0,0.08)', borderRadius: '12px', background: 'white' }}>
              <h3 style={{ fontSize: '1.05rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.4rem' }}>
                ・理由①：「自社株買い」による強烈なキャピタルゲイン支援
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', margin: 0, lineHeight: '1.7' }}>
                米国企業は利益が出ると積極的に「自社株買い（発行済み株式を市場から買い取って消却すること）」を行います。市場に出回る株式数が減ることで、1株あたりの価値（EPS）が自動的に跳ね上がり、株価が上昇しやすくなります。
              </p>
            </div>

            <div style={{ padding: '1.2rem 1.5rem', border: '1px solid rgba(0,0,0,0.08)', borderRadius: '12px', background: 'white' }}>
              <h3 style={{ fontSize: '1.05rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.4rem' }}>
                ・理由②：「減配しない経営」と連続増配の歴史
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', margin: 0, lineHeight: '1.7' }}>
                米国では「配当金を減らす（減配する）経営者は失格」とみなされる風潮が強く、不況期であっても配当を維持・増配しようと努力します。日本企業には数年しか続かない増配企業が多いのに対し、米国には25年以上連続増配している企業が100社以上も存在します。
              </p>
            </div>

            <div style={{ padding: '1.2rem 1.5rem', background: 'var(--bg-warm)', borderRadius: '12px', borderLeft: '4px solid var(--primary)' }}>
              <h3 style={{ fontSize: '1.05rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.4rem' }}>
                💡 配当金を受け取るための注意：「権利付き最終日」までに買付が必要
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', margin: 0, lineHeight: '1.7' }}>
                配当金を受け取るには、企業が定める「権利確定日」の2営業日前（権利付き最終日）までに株を保有している必要があります。直前に買って配当金を得た直後に株価が落ちる「権利落ち」が発生することもあるため、長期目線での投資が安心です。
              </p>
            </div>
          </div>

          {/* 7章: 収益に関するFAQ */}
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.3rem, 3.5vw, 1.6rem)', fontWeight: '900', color: 'var(--primary-dark)', borderBottom: '2px solid var(--bg-warm)', paddingBottom: '0.8rem', marginTop: '3rem', marginBottom: '1.5rem' }}>
            7. 株式投資の収益に関するよくある質問 (FAQ)
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginBottom: '3rem' }}>
            <div>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.5rem' }}>
                Q. 資産形成を始めたばかりの初心者は、どちらの収益を狙うべきですか？
              </h4>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', lineHeight: '1.7', color: 'var(--text-muted)', margin: 0 }}>
                A. 資産形成期の初心者（20代〜50代前半）は、まず「キャピタルゲイン（値上がり益）」重視のインデックス投資（S&P500や全世界株式）を軸にするのが賢明です。得られた配当金がファンド内で自動再投資されるため、複利効果が最大化されて効率よく資産を増やせます。
              </p>
            </div>
            <div>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.5rem' }}>
                Q. 「キャピタルゲイン」と「インカムゲイン」の最大の違いは何ですか？
              </h4>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', lineHeight: '1.7', color: 'var(--text-muted)', margin: 0 }}>
                A. キャピタルゲインは「株を売却した時に発生する一回限りの大きな利益（値上がり益）」です。一方、インカムゲインは「株を売らずに保有し続けるだけで定期的（年2〜4回など）に振り込まれる配当金収入」です。
              </p>
            </div>
            <div>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.5rem' }}>
                Q. 米国株の配当金は年に何回もらえますか？日本株との違いは？
              </h4>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', lineHeight: '1.7', color: 'var(--text-muted)', margin: 0 }}>
                A. 日本株の多くの企業は年1回〜2回の配当支払いが主流ですが、米国株のほとんどの主要企業は「年4回（四半期ごと）」配当を支払います。そのため、3ヶ月ごとに定期的にお小遣いのような現金収入を受け取ることができる大きな魅力があります。
              </p>
            </div>
            <div>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.5rem' }}>
                Q. 配当利回り（例：6%や8%）が高い銘柄ほどお得ですか？
              </h4>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', lineHeight: '1.7', color: 'var(--text-muted)', margin: 0 }}>
                A. いいえ、配当利回りが異常に高い銘柄（高配当の罠）には注意が必要です。業績悪化によって株価が急落した結果として計算上の利回りが高く見えているケースが多く、その後「減配（配当金のカット）」を発表して株価も暴落し、大きな損失を被るリスクがあります。
              </p>
            </div>
            <div>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.5rem' }}>
                Q. NISA口座で配当金をもらう際、最も重要な注意点は何ですか？
              </h4>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', lineHeight: '1.7', color: 'var(--text-muted)', margin: 0 }}>
                A. 証券会社の配当金受取方法の設定を必ず「株式数比例配分方式（証券口座受け取り）」にしておく必要があります。銀行口座受け取りなどに設定されていると、せっかくのNISA口座でも配当金に約20.315%の税金がかかってしまいます。
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
              収益の仕組みは理解できたけれど、<br />自分に合った銘柄選びや配当戦略に不安はありませんか？
            </h2>

            <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(0.95rem, 2.5vw, 1.1rem)', lineHeight: '1.8', color: 'var(--text-muted)', marginBottom: '1rem' }}>
              S&P500と高配当株ETFのバランスの取り方、<br className="sp-hide" />
              NISA枠を使った最適なポートフォリオの組み合わせ。
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
