import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, ShieldCheck, DollarSign, FileText, CheckCircle2, AlertCircle, HelpCircle, Scale } from 'lucide-react';

export const metadata: Metadata = {
  title: '株式投資にかかる税金とは？税率20.315%の仕組み・確定申告・NISAでの節税を徹底解説 | 東京米国株クラブ',
  description: '株式投資で得た利益にかかる税金（20.315%）の仕組みを初心者向けに徹底解説。特定口座（源泉徴収あり）のメリット、確定申告で得する3パターン（外国税額控除・損益通算）、NISA制度での非課税節税まで網羅。',
  alternates: {
    canonical: 'https://www.tokyo-us-stock.com/knowledge/tax',
  },
};

export default function TaxKnowledgePage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: '株で得た利益にかかる税金は何パーセントですか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '株の売却益（譲渡益）や配当金にかかる税率は一律「20.315%」です。内訳は所得税15%、復興特別所得税0.315%、住民税5%となります。利益の約2割が税金として引かれる計算になります。',
        },
      },
      {
        '@type': 'Question',
        name: '「特定口座（源泉徴収あり）」を選べば確定申告は不要ですか？会社にバレますか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'はい、「特定口座（源泉徴収あり）」を選択しておけば、証券会社が利益から税金を自動的に差し引いて代わりに納税してくれるため、確定申告は一切不要です。また、会社に株式投資の収入が通知されることもないため、副業禁止やプライバシーが気になる方でも安心です。',
        },
      },
      {
        '@type': 'Question',
        name: '米国株の配当金にかかる「外国税額控除」とは何ですか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '米国株の配当金は、アメリカ現地で10%が課税され、残りに対して日本で20.315%が課税される「二重課税」の状態になります。確定申告で「外国税額控除」を申請することで、米国内で支払った10%分の税金の一定額を日本の所得税から取り戻すことができます。',
        },
      },
      {
        '@type': 'Question',
        name: '投資で損（赤字）が出た場合、税金の優遇措置はありますか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'はい、確定申告を行うことで「損益通算」と「繰越控除」が適用できます。他の口座の利益と相殺して税金を安くしたり、引いても残った赤字を最長3年間繰り越して、将来の利益から控除して節税することができます。',
        },
      },
      {
        '@type': 'Question',
        name: 'NISA口座で取引すれば税金は完全にかかりませんか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'はい、NISA口座内で得られた株式の売却益や配当金（国内分）に対する約20.315%の税金は完全非課税になります。ただし、米国株の配当金に対する現地での10%課税は引かれます（NISA口座では外国税額控除の対象外となります）。',
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
            株式投資にかかる税金とは？税率20.315%の仕組みと確定申告・節税対策
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section style={{ background: 'white', padding: 'clamp(3rem, 8vw, 5rem) 0' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'left' }}>

          {/* プロローグ */}
          <div style={{ marginBottom: '3rem' }}>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
              「株で利益が出たら、税金はいくら引かれるの？」「会社員でも確定申告が必要になるの？」といった税金面の不安をお持ちではありませんか？
            </p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
              結論から言えば、日本の株式投資で得られた利益には**一律約20.315%の税金**がかかります。しかし、口座開設時に**「特定口座（源泉徴収あり）」を選択しておけば、確定申告の手間は一切不要**となり、会社に知られることもありません。
            </p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: 0 }}>
              さらに「NISA制度」を活用すれば税金を完全にゼロ（非課税）に抑えることが可能です。本ページでは、初心者の方が押さえるべき税金の基本ルール、確定申告で得するケース、節税の極意を分かりやすく解説します。
            </p>
          </div>

          {/* 1章: 税金の基本ルール（20.315%の内訳） */}
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.3rem, 3.5vw, 1.6rem)', fontWeight: '900', color: 'var(--primary-dark)', borderBottom: '2px solid var(--bg-warm)', paddingBottom: '0.8rem', marginTop: '3rem', marginBottom: '1.5rem' }}>
            1. 株式投資にかかる税金の基本原理（税率20.315%）
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
            課税口座（特定口座や一般口座）で株式投資を行って得た利益には、給料などの所得とは切り離して計算される**「申告分離課税」**が適用されます。税率はいくら儲かっても一律**20.315%**です。
          </p>

          {/* 税金の内訳表 */}
          <div style={{ overflowX: 'auto', marginBottom: '2rem', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.08)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '480px', fontSize: '0.95rem', fontFamily: 'var(--font-body)' }}>
              <thead>
                <tr style={{ backgroundColor: 'var(--bg-warm)', borderBottom: '2px solid rgba(0,0,0,0.08)' }}>
                  <th style={{ padding: '0.8rem 1rem', fontWeight: '800' }}>税金の種類</th>
                  <th style={{ padding: '0.8rem 1rem', fontWeight: '800' }}>税率</th>
                  <th style={{ padding: '0.8rem 1rem', fontWeight: '800' }}>説明</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                  <td style={{ padding: '0.8rem 1rem', fontWeight: '700' }}>所得税</td>
                  <td style={{ padding: '0.8rem 1rem', fontWeight: '700' }}>15%</td>
                  <td style={{ padding: '0.8rem 1rem' }}>国に納める国税の基本税率</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                  <td style={{ padding: '0.8rem 1rem', fontWeight: '700' }}>復興特別所得税</td>
                  <td style={{ padding: '0.8rem 1rem', fontWeight: '700' }}>0.315%</td>
                  <td style={{ padding: '0.8rem 1rem' }}>東日本大震災の復興資金のための加算税（〜2037年まで）</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                  <td style={{ padding: '0.8rem 1rem', fontWeight: '700' }}>住民税</td>
                  <td style={{ padding: '0.8rem 1rem', fontWeight: '700' }}>5%</td>
                  <td style={{ padding: '0.8rem 1rem' }}>お住まいの自治体（地方）に納める地方税</td>
                </tr>
                <tr style={{ backgroundColor: 'var(--bg-warm)' }}>
                  <td style={{ padding: '0.8rem 1rem', fontWeight: '900', color: 'var(--primary)' }}>合計税率</td>
                  <td style={{ padding: '0.8rem 1rem', fontWeight: '900', color: 'var(--primary)' }}>20.315%</td>
                  <td style={{ padding: '0.8rem 1rem', fontWeight: '700' }}>利益が100万円の場合、約20万3,150円が税金となります</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', marginBottom: '2.5rem' }}>
            <div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.4rem' }}>
                ・譲渡益（キャピタルゲイン）への課税
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', margin: 0, lineHeight: '1.7' }}>
                購入した株を売却し、値上がりによって得られた利益（譲渡益）に対して20.315%がかかります。売却して確定した利益のみが対象であり、保有中の含み益には税金は一切かかりません。
              </p>
            </div>
            <div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.4rem' }}>
                ・配当金・分配金（インカムゲイン）への課税
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', margin: 0, lineHeight: '1.7' }}>
                企業から支払われる配当金や投資信託の分配金が口座に入金される際、最初から20.315%が源泉徴収（引かれた状態）で振り込まれます。
              </p>
            </div>
          </div>

          {/* 2章: 口座区分の比較と確定申告不要の仕組み */}
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.3rem, 3.5vw, 1.6rem)', fontWeight: '900', color: 'var(--primary-dark)', borderBottom: '2px solid var(--bg-warm)', paddingBottom: '0.8rem', marginTop: '3rem', marginBottom: '1.5rem' }}>
            2. 口座区分の比較と「確定申告不要」の仕組み
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
            証券会社で口座を開設する際、税金の納め方によって3種類の口座区分から選択します。
          </p>

          <div style={{ overflowX: 'auto', marginBottom: '2.5rem', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.08)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '500px', fontSize: '0.95rem', fontFamily: 'var(--font-body)' }}>
              <thead>
                <tr style={{ backgroundColor: 'var(--bg-warm)', borderBottom: '2px solid rgba(0,0,0,0.08)' }}>
                  <th style={{ padding: '0.8rem 1rem', fontWeight: '800' }}>口座区分</th>
                  <th style={{ padding: '0.8rem 1rem', fontWeight: '800' }}>税金の計算・徴収</th>
                  <th style={{ padding: '0.8rem 1rem', fontWeight: '800' }}>確定申告</th>
                  <th style={{ padding: '0.8rem 1rem', fontWeight: '800' }}>おすすめ対象</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                  <td style={{ padding: '0.8rem 1rem', fontWeight: '700', color: 'var(--primary)' }}>特定口座（源泉徴収あり）</td>
                  <td style={{ padding: '0.8rem 1rem' }}>証券会社が自動計算・差引</td>
                  <td style={{ padding: '0.8rem 1rem', fontWeight: '700', color: 'var(--primary)' }}>【一切不要】</td>
                  <td style={{ padding: '0.8rem 1rem', fontWeight: '800', color: 'var(--primary)' }}>初心者・会社員全員に最適！</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                  <td style={{ padding: '0.8rem 1rem', fontWeight: '700' }}>特定口座（源泉徴収なし）</td>
                  <td style={{ padding: '0.8rem 1rem' }}>証券会社が年間取引報告書を作成</td>
                  <td style={{ padding: '0.8rem 1rem', fontWeight: '700', color: '#e53e3e' }}>必要（自分で申告）</td>
                  <td style={{ padding: '0.8rem 1rem' }}>年収2,000万以下で利益20万以下の会社員など</td>
                </tr>
                <tr>
                  <td style={{ padding: '0.8rem 1rem', fontWeight: '700' }}>一般口座</td>
                  <td style={{ padding: '0.8rem 1rem' }}>自分で損益計算</td>
                  <td style={{ padding: '0.8rem 1rem', fontWeight: '700', color: '#e53e3e' }}>必要（損益計算書も作成）</td>
                  <td style={{ padding: '0.8rem 1rem', color: 'var(--text-muted)' }}>【非推奨】（未公開株等以外使う意味なし）</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div style={{ padding: '1.2rem 1.5rem', background: 'var(--bg-warm)', borderRadius: '12px', borderLeft: '4px solid var(--primary)', marginBottom: '2.5rem' }}>
            <h3 style={{ fontSize: '1.05rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.4rem' }}>
              💡 「特定口座（源泉徴収あり）」を選べば会社にもバレない！
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', margin: 0, lineHeight: '1.7' }}>
              源泉徴収あり口座の場合、利益が発生するたびに証券会社が20.315%分を事前に天引きして直接国に納めてくれます。確定申告が不要となるため、勤務先に「住民税の決定通知書」を通じて株式投資の所得が通知されることもありません。副業規制が気になる方でも安心です。
            </p>
          </div>

          {/* 3章: 確定申告すると得する3つのケース */}
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.3rem, 3.5vw, 1.6rem)', fontWeight: '900', color: 'var(--primary-dark)', borderBottom: '2px solid var(--bg-warm)', paddingBottom: '0.8rem', marginTop: '3rem', marginBottom: '1.5rem' }}>
            3. あえて確定申告を行うと「得をする」3つのケース
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
            「特定口座（源泉あり）」で確定申告が不要な場合でも、あえて確定申告を行うことで手元にお金が戻ってくる（節税できる）ケースが3つあります。
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', marginBottom: '2.5rem' }}>
            <div style={{ padding: '1.2rem 1.5rem', border: '1px solid rgba(0,0,0,0.08)', borderRadius: '12px', background: 'white' }}>
              <h3 style={{ fontSize: '1.05rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.4rem' }}>
                ケース①：米国株の配当金を受け取っている（外国税額控除）
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', margin: 0, lineHeight: '1.7' }}>
                米国株の配当金は、米国内で10%取られた後に日本で20.315%引かれる「二重課税」になります。確定申告で「外国税額控除」を申請すれば、米国で納めた10%分の一部または全額が日本の所得税・住民税から還付（返金）されます。
              </p>
            </div>

            <div style={{ padding: '1.2rem 1.5rem', border: '1px solid rgba(0,0,0,0.08)', borderRadius: '12px', background: 'white' }}>
              <h3 style={{ fontSize: '1.05rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.4rem' }}>
                ケース②：年間で投資の「損（赤字）」が出た（損益通算・繰越控除）
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', margin: 0, lineHeight: '1.7' }}>
                株の売却で赤字が出た場合、確定申告をすれば「配当金の利益」と相殺（損益通算）して、払いすぎた税金の還付を受けられます。また、相殺しきれなかった赤字は**最長3年間繰り越し**て、将来の利益から控除できます。
              </p>
            </div>

            <div style={{ padding: '1.2rem 1.5rem', border: '1px solid rgba(0,0,0,0.08)', borderRadius: '12px', background: 'white' }}>
              <h3 style={{ fontSize: '1.05rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.4rem' }}>
                ケース③：複数の証券会社口座で利益と損失が分かれている
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', margin: 0, lineHeight: '1.7' }}>
                例えば「SBI証券で50万円のプラス」で「楽天証券で30万円のマイナス」が出ている場合、確定申告で損益合算することで、差額の20万円に対してのみ課税される形に修正でき、税金の還付を受けられます。
              </p>
            </div>
          </div>

          {/* 4章: NISAを活用した最強の非課税節税術 */}
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.3rem, 3.5vw, 1.6rem)', fontWeight: '900', color: 'var(--primary-dark)', borderBottom: '2px solid var(--bg-warm)', paddingBottom: '0.8rem', marginTop: '3rem', marginBottom: '1.5rem' }}>
            4. NISA（少額投資非課税制度）を活用した最大の節税対策
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
            株式投資の税金を合法的にゼロにする最も強力な方法が**NISA口座の活用**です。
          </p>

          <div style={{ padding: '1.5rem', background: 'var(--bg-warm)', borderRadius: '16px', border: '1px solid var(--glass-border)', marginBottom: '2.5rem' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.8rem' }}>
              ✨ NISA非課税メリットの絶大な効果
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', lineHeight: '1.7', margin: 0 }}>
              特定口座で投資して1,000万円の利益が出た場合、約203万円が税金として引かれて手元には797万円しか残りません。<br />
              しかし、<strong>NISA口座内で運用していれば1,000万円の利益がまるまる手元に残ります（税金ゼロ）。</strong><br />
              生涯で元本1,800万円まで無期限で非課税運用ができるため、枠がある限りはNISAを最優先で使い倒すことが究極の節税対策となります。
            </p>
          </div>

          {/* 5章: NISAで配当金を非課税にする必須設定「株式数比例配分方式」 */}
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.3rem, 3.5vw, 1.6rem)', fontWeight: '900', color: 'var(--primary-dark)', borderBottom: '2px solid var(--bg-warm)', paddingBottom: '0.8rem', marginTop: '3rem', marginBottom: '1.5rem' }}>
            5. 【超重要】NISAで配当金を非課税にするための必須設定
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
            NISA口座で株を買っていても、証券会社の配当金受取設定を間違えていると、**配当金に20.315%の税金が引かれてしまう落とし穴**が存在します。
          </p>
          <div style={{ padding: '1.2rem 1.5rem', background: '#fff5f5', borderLeft: '4px solid #e53e3e', borderRadius: '8px', marginBottom: '2.5rem' }}>
            <h3 style={{ fontSize: '1.05rem', fontWeight: '800', color: '#c53030', marginBottom: '0.4rem' }}>
              ⚠️ 設定：「株式数比例配分方式」を必ず選択すること！
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', margin: 0, lineHeight: '1.7' }}>
              配当金の受取方法には「株式数比例配分方式（証券口座受け取り）」「登録配当金受領口座方式（銀行口座受け取り）」「配当金領収証方式（郵便局受け取り）」の3種類があります。<br />
              NISAの非課税メリットが適用されるのは**「株式数比例配分方式」のみ**です。銀行口座受け取りなどに設定していると普通に20%課税されますので、証券会社の口座設定画面で必ず「株式数比例配分方式」になっているか確認しましょう。
            </p>
          </div>

          {/* 6章: 配当控除の活用と注意点 */}
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.3rem, 3.5vw, 1.6rem)', fontWeight: '900', color: 'var(--primary-dark)', borderBottom: '2px solid var(--bg-warm)', paddingBottom: '0.8rem', marginTop: '3rem', marginBottom: '1.5rem' }}>
            6. 年収によって得する「配当控除（総合課税）」とは？
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
            特定口座（課税口座）で日本株の配当金を受け取っている場合、確定申告で「総合課税」を選択して「配当控除」を申請すると、税金が安くなるケースがあります。
          </p>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '2.5rem' }}>
            課税所得金額（給与所得から各種控除を引いた額）が**900万円以下（実質的な税率が低い方）**の場合、分離課税（20.315%）よりも総合課税を選択した方が所得税の税率が下がり、配当控除（10%分の控除）が受けられるため、源泉徴収された税金の還付を受けられます。ただし、国民健康保険料の上昇や扶養控除への影響が出る場合があるため、シミュレーションを行ってからの申請が推奨されます。
          </p>

          {/* 7章: 株の税金で絶対に注意すべき3つのポイント */}
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.3rem, 3.5vw, 1.6rem)', fontWeight: '900', color: 'var(--primary-dark)', borderBottom: '2px solid var(--bg-warm)', paddingBottom: '0.8rem', marginTop: '3rem', marginBottom: '1.5rem' }}>
            7. 株の税金で初心者が陥りがちな「3つの落とし穴」
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
            税金面で損をしたり予期せぬペナルティを受けないよう、以下の3点に十分注意しましょう。
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', marginBottom: '2.5rem' }}>
            <div style={{ padding: '1.2rem 1.5rem', background: '#fff5f5', borderLeft: '4px solid #e53e3e', borderRadius: '8px' }}>
              <h3 style={{ fontSize: '1.05rem', fontWeight: '800', color: '#c53030', marginBottom: '0.4rem' }}>
                落とし穴①：NISA口座での損失は「損益通算」ができない
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', margin: 0, lineHeight: '1.7' }}>
                NISA口座内で発生した損失（売却損）は、特定口座などの他の課税口座の利益と相殺（損益通算）することができません。また、繰越控除の対象にもならないため、NISA枠ではあまりにハイリスクな銘柄への集中投資は避けるのが安全です。
              </p>
            </div>

            <div style={{ padding: '1.2rem 1.5rem', background: '#fff5f5', borderLeft: '4px solid #e53e3e', borderRadius: '8px' }}>
              <h3 style={{ fontSize: '1.05rem', fontWeight: '800', color: '#c53030', marginBottom: '0.4rem' }}>
                落とし穴②：扶養に入っている家族の株利益による「配偶者控除・扶養控除」から外れるリスク
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', margin: 0, lineHeight: '1.7' }}>
                扶養されている妻や子どもが「特定口座（源泉徴収なし）」や「一般口座」で株の売却益を出して確定申告をした場合、その利益が合計所得金額にカウントされ、親や配偶者の扶養控除から外れてしまう場合があります。「特定口座（源泉徴収あり）」を選んでおけば、確定申告不要を選択することで扶養から外れるリスクを完全に回避できます。
              </p>
            </div>

            <div style={{ padding: '1.2rem 1.5rem', background: '#fff5f5', borderLeft: '4px solid #e53e3e', borderRadius: '8px' }}>
              <h3 style={{ fontSize: '1.05rem', fontWeight: '800', color: '#c53030', marginBottom: '0.4rem' }}>
                落とし穴③：一般口座を選んでしまうと年間取引報告書が届かない
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', margin: 0, lineHeight: '1.7' }}>
                口座開設時に誤って「一般口座」を選んでしまうと、証券会社から年間の損益をまとめた計算書（年間取引報告書）が発行されません。1年間のすべての買付・売却記録を自分でエクセル等で計算して申告する必要があり非常に大変です。必ず「特定口座（源泉徴収あり）」を選びましょう。
              </p>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginBottom: '3rem' }}>
            <div>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.5rem' }}>
                Q. 株で得た利益にかかる税金は何パーセントですか？
              </h4>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', lineHeight: '1.7', color: 'var(--text-muted)', margin: 0 }}>
                A. 株の売却益（譲渡益）や配当金にかかる税率は一律「20.315%」です。内訳は所得税15%、復興特別所得税0.315%、住民税5%となります。利益の約2割が税金として引かれる計算になります。
              </p>
            </div>
            <div>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.5rem' }}>
                Q. 「特定口座（源泉徴収あり）」を選べば確定申告は不要ですか？会社にバレますか？
              </h4>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', lineHeight: '1.7', color: 'var(--text-muted)', margin: 0 }}>
                A. はい、「特定口座（源泉徴収あり）」を選択しておけば、証券会社が利益から税金を自動的に差し引いて代わりに納税してくれるため、確定申告は一切不要です。また、会社に株式投資の収入が通知されることもないため、副業禁止やプライバシーが気になる方でも安心です。
              </p>
            </div>
            <div>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.5rem' }}>
                Q. 米国株の配当金にかかる「外国税額控除」とは何ですか？
              </h4>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', lineHeight: '1.7', color: 'var(--text-muted)', margin: 0 }}>
                A. 米国株の配当金は、アメリカ現地で10%が課税され、残りに対して日本で20.315%が課税される「二重課税」の状態になります。確定申告で「外国税額控除」を申請することで、米国内で支払った10%分の税金の一定額を日本の所得税から取り戻すことができます。
              </p>
            </div>
            <div>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.5rem' }}>
                Q. 投資で損（赤字）が出た場合、税金の優遇措置はありますか？
              </h4>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', lineHeight: '1.7', color: 'var(--text-muted)', margin: 0 }}>
                A. はい、確定申告を行うことで「損益通算」と「繰越控除」が適用できます。他の口座の利益と相殺して税金を安くしたり、引いても残った赤字を最長3年間繰り越して、将来の利益から控除して節税することができます。
              </p>
            </div>
            <div>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.5rem' }}>
                Q. NISA口座で取引すれば税金は完全にかかりませんか？
              </h4>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', lineHeight: '1.7', color: 'var(--text-muted)', margin: 0 }}>
                A. はい、NISA口座内で得られた株式の売却益や配当金（国内分）に対する約20.315%の税金は完全非課税になります。ただし、米国株の配当金に対する現地での10%課税は引かれます（NISA口座では外国税額控除の対象外となります）。
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
              税金の仕組みは分かったけれど、<br />自分に合った口座設定や確定申告に不安はありませんか？
            </h2>

            <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(0.95rem, 2.5vw, 1.1rem)', lineHeight: '1.8', color: 'var(--text-muted)', marginBottom: '1rem' }}>
              外国税額控除の手続き方法、NISA枠の最大活用、<br className="sp-hide" />
              会社に知られずに安全に運用する設定。
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
