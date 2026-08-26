import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, ShieldCheck, DollarSign, FileText, CheckCircle2, AlertCircle, HelpCircle, Scale } from 'lucide-react';

export const metadata: Metadata = {
  title: '米国株・米国株式の税金とは？確定申告の必要性・二重課税・NISA節税を徹底解説 | 東京米国株クラブ',
  description: '初心者向けに米国株・米国株式にかかる税金の仕組み（20.315%＋米国10%）を徹底解説。特定口座（源泉徴収あり）の確定申告不要ルール、米国株式の確定申告手順、外国税額控除や新NISA非課税まで網羅。',
  alternates: {
    canonical: 'https://www.tokyo-us-stock.com/knowledge/tax',
  },
  openGraph: {
    title: '米国株・米国株式の税金とは？確定申告の必要性・二重課税・NISA節税を徹底解説 | 東京米国株クラブ',
    description: '初心者向けに米国株・米国株式にかかる税金の仕組み（20.315%＋米国10%）を徹底解説。特定口座（源泉徴収あり）の確定申告不要ルール、米国株式の確定申告手順、外国税額控除や新NISA非課税まで網羅。',
    url: 'https://www.tokyo-us-stock.com/knowledge/tax',
    siteName: '東京米国株クラブ',
    images: [
      {
        url: 'https://www.tokyo-us-stock.com/ogp.png',
        width: 1200,
        height: 630,
        alt: '米国株・米国株式の税金と確定申告解説',
      },
    ],
    locale: 'ja_JP',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: '米国株・米国株式の税金とは？確定申告の必要性・二重課税・NISA節税を徹底解説 | 東京米国株クラブ',
    description: '初心者向けに米国株・米国株式にかかる税金の仕組み（20.315%＋米国10%）を徹底解説。特定口座（源泉徴収あり）の確定申告不要ルール、米国株式の確定申告手順、外国税額控除や新NISA非課税まで網羅。',
    images: ['https://www.tokyo-us-stock.com/ogp.png'],
  },
};

export default function TaxKnowledgePage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: '米国株・米国株式で得た利益にかかる税金は何パーセントですか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '米国株・米国株式の売却益（譲渡益）にかかる税率は日本国内で一律「20.315%」です。配当金に関しては、米国現地で10%が引かれた後、残りに対して日本で20.315%が課税されます。',
        },
      },
      {
        '@type': 'Question',
        name: '「特定口座（源泉徴収あり）」を選べば米国株式の確定申告は不要ですか？会社にバレますか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'はい、「特定口座（源泉徴収あり）」を選択しておけば、証券会社が利益から税金を自動的に差し引いて代わりに納税してくれるため、米国株式の確定申告は原則として一切不要です。また、会社に株式投資の収入が通知されることもないため安心です。',
        },
      },
      {
        '@type': 'Question',
        name: '米国株・米国株式の配当金にかかる「外国税額控除」とは何ですか？',
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
        name: 'NISA口座で取引すれば米国株の税金は完全にかかりませんか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'はい、NISA口座内で得られた株式の売却益や配当金（国内分）に対する約20.315%の税金は完全非課税になります。ただし、米国株の配当金に対する現地での10%課税は引かれます（NISA口座では外国税額控除の対象外となります）。',
        },
      },
    ],
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://www.tokyo-us-stock.com/knowledge/tax',
    },
    headline: '米国株・米国株式の税金とは？確定申告の必要性・二重課税・NISA節税を徹底解説',
    description: '初心者向けに米国株・米国株式にかかる税金の仕組み（20.315%＋米国10%）を徹底解説。特定口座（源泉徴収あり）の確定申告不要ルール、米国株式の確定申告手順、外国税額控除や新NISA非課税まで網羅。',
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
  };

  return (
    <div className="knowledge-page" style={{ overflowWrap: 'break-word' }}>
      {/* JSON-LD FAQPage & Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([faqSchema, articleSchema]) }}
      />

      {/* Header Section */}
      <section className="post-header" style={{ background: 'var(--bg-warm)', padding: '100px 0 2.5rem 0', textAlign: 'left' }}>
        <div className="container">
          <Link href="/knowledge/stock-investment" className="btn-link" style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', fontFamily: 'var(--font-body)', fontWeight: '700', textDecoration: 'none' }}>
            <ArrowLeft size={18} style={{ marginRight: '0.5rem' }} /> 株式投資とはへ戻る
          </Link>
          <h1 className="post-title" style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.8rem, 6vw, 2.8rem)', fontWeight: '900', textAlign: 'left', marginLeft: '0', marginRight: 'auto', maxWidth: 'none', marginBottom: '0.5rem', color: 'var(--primary-dark)', lineHeight: '1.3' }}>
            米国株・米国株式にかかる税金とは？税率の仕組みと確定申告・二重課税対策
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section style={{ background: 'white', padding: 'clamp(3rem, 8vw, 5rem) 0' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'left' }}>

          {/* プロローグ */}
          <div style={{ marginBottom: '3rem' }}>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
              「米国株・米国株式で利益が出たら、税金はいくら引かれるの？」「米国株式の確定申告は会社員でも必要なの？」といった税金面の疑問をお持ちではありませんか？
            </p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
              結論から言えば、<strong>米国株・米国株式投資で得られた利益には、日本国内で一律約20.315%の税金</strong>がかかり、配当金には米国現地での10%課税も発生します。しかし、口座開設時に**「特定口座（源泉徴収あり）」を選択しておけば、米国株式の確定申告の手間は原則不要**となり、会社に知られることもありません。
            </p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
              さらに「新NISA制度」を活用すれば国内の税金を完全にゼロ（非課税）に抑えることが可能です。本ページでは、初心者の方が押さえるべき**米国株・米国株式の税金ルール**、米国株式の確定申告で得するケース、外国税額控除のやり方を分かりやすく網羅的に解説します。
            </p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: 0 }}>
              より実践的な税金対策のテクニックや裏ワザを知りたい方は、当サイトの<Link href="/blog/us-stock-tax-guide" style={{ color: 'var(--primary)', fontWeight: 'bold' }}>米国株ブログの税金ガイド</Link>も併せてご参照ください。本記事が米国株式の税務に関するナレッジの「中心（ハブ）」として、あなたの資産形成を強力にサポートします。
            </p>
          </div>

          {/* 1章: 税金の基本ルール（20.315%の内訳） */}
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.3rem, 3.5vw, 1.6rem)', fontWeight: '900', color: 'var(--primary-dark)', borderBottom: '2px solid var(--bg-warm)', paddingBottom: '0.8rem', marginTop: '3rem', marginBottom: '1.5rem' }}>
            1. 米国株・米国株式にかかる税金の基本原理（国内20.315%＋米国10%）
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
            課税口座（特定口座や一般口座）で米国株式投資を行って得た利益には、給料などの所得とは切り離して計算される**「申告分離課税」**が適用されます。税率はいくら儲かっても日本国内で一律**20.315%**です。
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
                購入した米国株式を売却し、値上がりによって得られた利益（譲渡益）に対して20.315%がかかります。売却して確定した利益のみが対象であり、保有中の含み益には税金は一切かかりません。
              </p>
            </div>
            <div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.4rem' }}>
                ・配当金・分配金（インカムゲイン）への二重課税
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', margin: 0, lineHeight: '1.7' }}>
                米国企業から支払われる配当金や米国ETFの分配金については、まず米国現地で10%が源泉徴収されます。その後、残りの90%に対して日本国内で20.315%が源泉徴収（引かれた状態）で振り込まれます。この仕組みを「二重課税」と呼びます。
              </p>
            </div>
          </div>

          {/* 新規セクション：具体的な税額シミュレーション */}
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.3rem, 3.5vw, 1.6rem)', fontWeight: '900', color: 'var(--primary-dark)', borderBottom: '2px solid var(--bg-warm)', paddingBottom: '0.8rem', marginTop: '3rem', marginBottom: '1.5rem' }}>
            2. 具体的な税額シミュレーション（米国株の売却益と配当金）
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
            実際に米国株で利益が出た場合、手元にいくら残るのか計算してみましょう。
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', marginBottom: '2.5rem' }}>
            <div style={{ padding: '1.5rem', background: '#f8f9fa', borderRadius: '12px', borderLeft: '4px solid var(--primary)' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.8rem' }}>
                シミュレーション①：米国株式の売却で「50万円」の利益が出た場合
              </h3>
              <ul style={{ fontSize: '0.95rem', color: 'var(--text-main)', lineHeight: '1.7', margin: 0, paddingLeft: '1.5rem' }}>
                <li style={{ marginBottom: '0.5rem' }}>売却益：<strong>500,000円</strong></li>
                <li style={{ marginBottom: '0.5rem' }}>日本の税金（20.315%）：500,000円 × 20.315% = <strong>101,575円</strong></li>
                <li>手元に残る金額：500,000円 - 101,575円 = <strong style={{ color: 'var(--primary)' }}>398,425円</strong></li>
              </ul>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', margin: '0.8rem 0 0 0', lineHeight: '1.7' }}>
                ※売却益には米国での10%課税はかかりません。日本国内の税金のみが適用されます。
              </p>
            </div>

            <div style={{ padding: '1.5rem', background: '#f8f9fa', borderRadius: '12px', borderLeft: '4px solid var(--primary)' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.8rem' }}>
                シミュレーション②：米国株式の配当金「10万円」を受け取った場合
              </h3>
              <ul style={{ fontSize: '0.95rem', color: 'var(--text-main)', lineHeight: '1.7', margin: 0, paddingLeft: '1.5rem' }}>
                <li style={{ marginBottom: '0.5rem' }}>配当金額（額面）：<strong>100,000円</strong></li>
                <li style={{ marginBottom: '0.5rem' }}>米国での税金（10%）：100,000円 × 10% = <strong>10,000円</strong></li>
                <li style={{ marginBottom: '0.5rem' }}>日本の税金（残り9万円の20.315%）：90,000円 × 20.315% = <strong>18,283円</strong></li>
                <li>手元に残る金額：100,000円 - 10,000円 - 18,283円 = <strong style={{ color: 'var(--primary)' }}>71,717円</strong></li>
              </ul>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', margin: '0.8rem 0 0 0', lineHeight: '1.7' }}>
                ※配当金には日米で合計約28.3%の税金がかかります。後述する「外国税額控除」を活用することで、米国で引かれた10,000円の一部を取り戻すことが可能です。
              </p>
            </div>
          </div>

          {/* 3章: 口座区分の比較と確定申告不要の仕組み（図解テキスト追加） */}
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.3rem, 3.5vw, 1.6rem)', fontWeight: '900', color: 'var(--primary-dark)', borderBottom: '2px solid var(--bg-warm)', paddingBottom: '0.8rem', marginTop: '3rem', marginBottom: '1.5rem' }}>
            3. 図解でわかる！米国株式の口座タイプ別・税金フローと「確定申告不要」の仕組み
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
            証券会社で口座を開設する際、税金の納め方によって3種類の口座区分（＋NISA）から選択します。口座タイプによって税金の流れや確定申告の必要性が大きく異なります。詳細は<Link href="/knowledge/tokutei-koza" style={{ color: 'var(--primary)', fontWeight: 'bold' }}>特定口座の解説ページ</Link>も併せてご確認ください。
          </p>

          <div style={{ padding: '1.5rem', background: '#fff', border: '1px solid var(--glass-border)', borderRadius: '12px', marginBottom: '2.5rem' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '1rem', textAlign: 'center' }}>
              【口座タイプ別】税金と確定申告のフロー
            </h3>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
              {/* フロー1 */}
              <div style={{ background: '#f8f9fa', padding: '1.2rem', borderRadius: '8px' }}>
                <h4 style={{ fontWeight: '700', color: 'var(--primary)', marginBottom: '0.8rem', fontSize: '1.05rem' }}>① 特定口座（源泉徴収あり）</h4>
                <div style={{ fontSize: '0.9rem', color: 'var(--text-main)', lineHeight: '1.6' }}>
                  <p style={{ margin: '0 0 0.5rem 0' }}>証券会社が利益と税金を自動計算</p>
                  <div style={{ textAlign: 'center', color: '#ccc', margin: '0.2rem 0' }}>↓</div>
                  <p style={{ margin: '0 0 0.5rem 0' }}>利益から20.315%を天引き</p>
                  <div style={{ textAlign: 'center', color: '#ccc', margin: '0.2rem 0' }}>↓</div>
                  <p style={{ margin: '0 0 0.5rem 0' }}>証券会社が代わりに納税</p>
                  <div style={{ textAlign: 'center', color: 'var(--primary)', margin: '0.2rem 0', fontWeight: 'bold' }}>↓</div>
                  <p style={{ margin: '0', fontWeight: 'bold', color: 'var(--primary)' }}>【原則 確定申告 不要】<br/>※会社にもバレません</p>
                </div>
              </div>

              {/* フロー2 */}
              <div style={{ background: '#f8f9fa', padding: '1.2rem', borderRadius: '8px' }}>
                <h4 style={{ fontWeight: '700', color: 'var(--text-main)', marginBottom: '0.8rem', fontSize: '1.05rem' }}>② 特定口座（源泉徴収なし）</h4>
                <div style={{ fontSize: '0.9rem', color: 'var(--text-main)', lineHeight: '1.6' }}>
                  <p style={{ margin: '0 0 0.5rem 0' }}>証券会社が年間損益を自動計算</p>
                  <div style={{ textAlign: 'center', color: '#ccc', margin: '0.2rem 0' }}>↓</div>
                  <p style={{ margin: '0 0 0.5rem 0' }}>「年間取引報告書」が送られてくる</p>
                  <div style={{ textAlign: 'center', color: '#ccc', margin: '0.2rem 0' }}>↓</div>
                  <p style={{ margin: '0 0 0.5rem 0' }}>報告書を見て自分で税金計算</p>
                  <div style={{ textAlign: 'center', color: '#e53e3e', margin: '0.2rem 0', fontWeight: 'bold' }}>↓</div>
                  <p style={{ margin: '0', fontWeight: 'bold', color: '#e53e3e' }}>【自分で 確定申告 必要】<br/>※利益20万円超の場合</p>
                </div>
              </div>
              
              {/* フロー3 */}
              <div style={{ background: '#f8f9fa', padding: '1.2rem', borderRadius: '8px' }}>
                <h4 style={{ fontWeight: '700', color: 'var(--text-main)', marginBottom: '0.8rem', fontSize: '1.05rem' }}>③ 一般口座</h4>
                <div style={{ fontSize: '0.9rem', color: 'var(--text-main)', lineHeight: '1.6' }}>
                  <p style={{ margin: '0 0 0.5rem 0' }}>自分で1年分の売買履歴を集計</p>
                  <div style={{ textAlign: 'center', color: '#ccc', margin: '0.2rem 0' }}>↓</div>
                  <p style={{ margin: '0 0 0.5rem 0' }}>自分で損益をすべて計算</p>
                  <div style={{ textAlign: 'center', color: '#ccc', margin: '0.2rem 0' }}>↓</div>
                  <p style={{ margin: '0 0 0.5rem 0' }}>税額を自分で計算して申告書類作成</p>
                  <div style={{ textAlign: 'center', color: '#e53e3e', margin: '0.2rem 0', fontWeight: 'bold' }}>↓</div>
                  <p style={{ margin: '0', fontWeight: 'bold', color: '#e53e3e' }}>【非常に手間がかかり非推奨】</p>
                </div>
              </div>
            </div>
          </div>

          <div style={{ padding: '1.2rem 1.5rem', background: 'var(--bg-warm)', borderRadius: '12px', borderLeft: '4px solid var(--primary)', marginBottom: '2.5rem' }}>
            <h3 style={{ fontSize: '1.05rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.4rem' }}>
              💡 「特定口座（源泉徴収あり）」を選べば会社にもバレない！
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', margin: 0, lineHeight: '1.7' }}>
              源泉徴収あり口座の場合、米国株の売却益が発生するたびに証券会社が20.315%分を事前に天引きして直接国に納めてくれます。確定申告が不要となるため、勤務先に「住民税の決定通知書」を通じて株式投資の所得が通知されることもありません。副業規制が気になる方でも安心です。
            </p>
          </div>

          {/* 4章: 確定申告すると得する3つのケース */}
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.3rem, 3.5vw, 1.6rem)', fontWeight: '900', color: 'var(--primary-dark)', borderBottom: '2px solid var(--bg-warm)', paddingBottom: '0.8rem', marginTop: '3rem', marginBottom: '1.5rem' }}>
            4. 米国株式であえて確定申告を行うと「得をする」3つのケース
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
                米国株の売却で赤字が出た場合、確定申告をすれば「配当金の利益」と相殺（損益通算）して、払いすぎた税金の還付を受けられます。また、相殺しきれなかった赤字は**最長3年間繰り越し**て、将来の利益から控除できます。
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

          {/* 新規セクション：2024年〜2025年の最新動向 */}
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.3rem, 3.5vw, 1.6rem)', fontWeight: '900', color: 'var(--primary-dark)', borderBottom: '2px solid var(--bg-warm)', paddingBottom: '0.8rem', marginTop: '3rem', marginBottom: '1.5rem' }}>
            5. 米国株の税金に関する最新動向（2024年〜2025年の税制と新NISA）
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
            2024年からスタートした「新NISA制度」は、米国株式の税金にも非常に大きな影響を与えています。最新の税制動向として以下のポイントを押さえておきましょう。
          </p>

          <div style={{ padding: '1.5rem', background: 'var(--bg-warm)', borderRadius: '16px', border: '1px solid var(--glass-border)', marginBottom: '2.5rem' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.8rem' }}>
              ✨ 新NISAによる国内課税（20.315%）の恒久非課税化
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', lineHeight: '1.7', margin: 0 }}>
              新NISAの「成長投資枠」を使えば、米国株式（個別株やETF）の売却益および配当金にかかる日本国内の税金20.315%が<strong>無期限で非課税</strong>になります。<br />
              特定口座で投資して1,000万円の利益が出た場合、約203万円が税金として引かれますが、NISA口座内であれば税金ゼロです。生涯投資枠1,800万円まで活用可能であり、まずは新NISA枠を優先的に埋めることが最大の米国株節税対策となります。
            </p>
            <div style={{ marginTop: '1rem', padding: '1rem', background: '#fff5f5', borderLeft: '4px solid #e53e3e', borderRadius: '4px' }}>
              <p style={{ fontSize: '0.9rem', color: '#c53030', margin: 0, fontWeight: 'bold' }}>
                ※注意：米国での10%課税はNISAでも引かれます。また、NISA口座は「外国税額控除」の対象外となるため、米国で引かれた10%を取り戻すことはできません。
              </p>
            </div>
          </div>
          
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '2.5rem' }}>
            さらに今後の税制改正の議論においては、金融所得課税の強化（現行の20.315%から税率を引き上げる案）などが度々政治的テーマに上がっています。将来的な増税リスクに備える意味でも、NISA制度の積極的な活用がますます重要になっています。
          </p>

          {/* 6章: NISAで配当金を非課税にする必須設定「株式数比例配分方式」 */}
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.3rem, 3.5vw, 1.6rem)', fontWeight: '900', color: 'var(--primary-dark)', borderBottom: '2px solid var(--bg-warm)', paddingBottom: '0.8rem', marginTop: '3rem', marginBottom: '1.5rem' }}>
            6. 【超重要】NISAで配当金を非課税にするための必須設定
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
            NISA口座で株を買っていても、証券会社の配当金受取設定を間違えていると、**国内の配当金に20.315%の税金が引かれてしまう落とし穴**が存在します。（※主に国内株式や国内ETFに関する注意点ですが、証券口座全体の設定として非常に重要です）
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

          {/* 7章: 株の税金で絶対に注意すべき3つのポイント */}
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.3rem, 3.5vw, 1.6rem)', fontWeight: '900', color: 'var(--primary-dark)', borderBottom: '2px solid var(--bg-warm)', paddingBottom: '0.8rem', marginTop: '3rem', marginBottom: '1.5rem' }}>
            7. 米国株の税金で初心者が陥りがちな「3つの落とし穴」
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
                NISA口座内で発生した米国株の損失（売却損）は、特定口座などの他の課税口座の利益と相殺（損益通算）することができません。また、繰越控除の対象にもならないため、NISA枠ではあまりにハイリスクな銘柄への集中投資は避けるのが安全です。
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
          
          <div style={{ margin: '3rem 0', padding: '2rem', background: 'white', borderRadius: '12px', border: '1px solid var(--glass-border)', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '1rem' }}>
              もっと詳しく知りたい方へ：米国株式の税金ガイド＆関連ブログ記事
            </h3>
            <p style={{ fontSize: '1rem', color: 'var(--text-main)', marginBottom: '1.5rem', lineHeight: '1.7' }}>
              米国株投資におけるさらなる節税テクニックや、ケース別の詳細な確定申告のやり方については、当サイトのブログ記事でも詳しく解説しています。合わせてお読みいただき、知識を深めてください。
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <li>
                <Link href="/blog/us-stock-tax-guide" style={{ display: 'flex', alignItems: 'center', color: 'var(--primary)', fontWeight: 'bold', textDecoration: 'none', fontSize: '1.05rem' }}>
                  <ArrowRight size={18} style={{ marginRight: '0.5rem' }} /> 【ブログ】米国株の税金ガイド完全版：二重課税から外国税額控除まで
                </Link>
              </li>
              <li>
                <Link href="/knowledge/tokutei-koza" style={{ display: 'flex', alignItems: 'center', color: 'var(--primary)', fontWeight: 'bold', textDecoration: 'none', fontSize: '1.05rem' }}>
                  <ArrowRight size={18} style={{ marginRight: '0.5rem' }} /> 【ナレッジ】特定口座とは？源泉徴収あり・なしの選び方
                </Link>
              </li>
              <li>
                <Link href="/blog" style={{ display: 'flex', alignItems: 'center', color: 'var(--primary)', fontWeight: 'bold', textDecoration: 'none', fontSize: '1.05rem' }}>
                  <ArrowRight size={18} style={{ marginRight: '0.5rem' }} /> 【ブログ】米国株投資に役立つ最新記事一覧を見る
                </Link>
              </li>
            </ul>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginBottom: '3rem' }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.3rem, 3.5vw, 1.6rem)', fontWeight: '900', color: 'var(--primary-dark)', borderBottom: '2px solid var(--bg-warm)', paddingBottom: '0.8rem', marginBottom: '1.5rem' }}>
              よくある質問（FAQ）
            </h2>
            <div>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.5rem' }}>
                Q. 米国株・米国株式で得た利益にかかる税金は何パーセントですか？
              </h4>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', lineHeight: '1.7', color: 'var(--text-muted)', margin: 0 }}>
                A. 米国株・米国株式の売却益（譲渡益）にかかる税率は日本国内で一律「20.315%」です。配当金に関しては、米国現地で10%が引かれた後、残りに対して日本で20.315%が課税されます。
              </p>
            </div>
            <div>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.5rem' }}>
                Q. 「特定口座（源泉徴収あり）」を選べば米国株式の確定申告は不要ですか？会社にバレますか？
              </h4>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', lineHeight: '1.7', color: 'var(--text-muted)', margin: 0 }}>
                A. はい、「特定口座（源泉徴収あり）」を選択しておけば、証券会社が利益から税金を自動的に差し引いて代わりに納税してくれるため、米国株式の確定申告は原則として一切不要です。また、会社に株式投資の収入が通知されることもないため安心です。
              </p>
            </div>
            <div>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.5rem' }}>
                Q. 米国株・米国株式の配当金にかかる「外国税額控除」とは何ですか？
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
                Q. NISA口座で取引すれば米国株の税金は完全にかかりませんか？
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
              外国税額控除の手続き方法、新NISA枠の最大活用、<br className="sp-hide" />
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
