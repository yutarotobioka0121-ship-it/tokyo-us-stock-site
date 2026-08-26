import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, ShieldCheck, CheckCircle2, FileText, HelpCircle, AlertCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: '米国株・米国株式の特定口座とは？源泉徴収あり・なしの違いと選び方 | 東京米国株クラブ',
  description: '初心者向けに米国株・米国株式の特定口座の仕組みを徹底解説。「源泉徴収あり」と「源泉徴収なし」の違い、一般口座や新NISAとの比較、SBI・楽天・マネックス各証券の比較、年間取引報告書の見方、外国税額控除の手順まで完全網羅。',
  alternates: {
    canonical: 'https://www.tokyo-us-stock.com/knowledge/tokutei-koza',
  },
  openGraph: {
    title: '米国株・米国株式の特定口座とは？源泉徴収あり・なしの違いと選び方 | 東京米国株クラブ',
    description: '初心者向けに米国株・米国株式の特定口座の仕組みを徹底解説。「源泉徴収あり」と「源泉徴収なし」の違い、一般口座や新NISAとの比較、SBI・楽天・マネックス各証券の比較、年間取引報告書の見方、外国税額控除の手順まで完全網羅。',
    url: 'https://www.tokyo-us-stock.com/knowledge/tokutei-koza',
    siteName: '東京米国株クラブ',
    images: [
      {
        url: 'https://www.tokyo-us-stock.com/ogp.png',
        width: 1200,
        height: 630,
        alt: '米国株・米国株式の特定口座解説ガイド',
      },
    ],
    locale: 'ja_JP',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: '米国株・米国株式の特定口座とは？源泉徴収あり・なしの違いと選び方 | 東京米国株クラブ',
    description: '初心者向けに米国株・米国株式の特定口座の仕組みを徹底解説。「源泉徴収あり」と「源泉徴収なし」の違い、一般口座や新NISAとの比較、SBI・楽天・マネックス各証券の比較、年間取引報告書の見方、外国税額控除の手順まで完全網羅。',
    images: ['https://www.tokyo-us-stock.com/ogp.png'],
  },
};

export default function TokuteiKozaKnowledgePage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '米国株・米国株式の特定口座とは？源泉徴収あり・なしの違いと初心者におすすめの選び方',
    description: '米国株・米国株式投資を始める際の必須知識である「特定口座」について、源泉徴収の仕組みから外国税額控除の手順、年間取引報告書の読み方まで詳細に解説します。',
    author: {
      '@type': 'Organization',
      name: '東京米国株クラブ'
    },
    publisher: {
      '@type': 'Organization',
      name: '東京米国株クラブ',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.tokyo-us-stock.com/logo.png'
      }
    },
    url: 'https://www.tokyo-us-stock.com/knowledge/tokutei-koza',
    image: 'https://www.tokyo-us-stock.com/ogp.png',
    datePublished: '2024-01-01T00:00:00+09:00',
    dateModified: new Date().toISOString()
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: '米国株・米国株式の特定口座（源泉徴収あり）を選べば確定申告は不要ですか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '原則として確定申告は不要です。証券会社が取引のたびに利益から約20.315%の税金を自動で天引き（源泉徴収）して国に納めてくれるため、面倒な計算や確定申告の手間が一切かかりません。ただし、米国株配当金の二重課税を取り戻す（外国税額控除）場合や、他の証券会社の赤字と相殺する（損益通算）場合のみ、任意で確定申告を行うことができます。'
        },
      },
      {
        '@type': 'Question',
        name: '途中で「源泉徴収あり」から「源泉徴収なし」に変更できますか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'はい、年単位で変更が可能です。ただし、その年に一度でも特定口座内で株式の売買や配当金の受け取りがあった場合は、その年の途中で変更することはできません。翌年の最初の取引前までにネット証券のマイページから変更手続きを行う必要があります。'
        },
      },
      {
        '@type': 'Question',
        name: '扶養に入っている主婦や学生でも特定口座（源泉あり）なら扶養から外れませんか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'はい、扶養から外れる心配はありません。特定口座（源泉徴収あり）で得た株式の利益や配当金は、確定申告をしない限り「合計所得金額」に含まれない仕組みになっています。そのため、どれだけ大きな利益が出ても配偶者控除や親の扶養控除に影響を与えることはありません。'
        },
      },
      {
        '@type': 'Question',
        name: '新NISA口座があれば特定口座は作らなくてもいいですか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '基本的には新NISAを最優先で使うのがおすすめですが、証券会社で口座開設する際は特定口座も一緒に開設しておくのが標準的です。新NISAの年間投資枠（最大360万円）を超えて投資したい場合や、NISA対象外の銘柄に投資したい場合に、特定口座が受け皿として必要になるためです。'
        },
      }
    ],
  };

  return (
    <div className="knowledge-page" style={{ overflowWrap: 'break-word' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([articleSchema, faqSchema]) }}
      />

      {/* Header Section */}
      <section className="post-header" style={{ background: 'var(--bg-warm)', padding: '100px 0 2.5rem 0', textAlign: 'left' }}>
        <div className="container">
          <Link href="/knowledge/stock-investment" className="btn-link" style={{ marginBottom: '1.5rem', display: 'inline-flex', alignItems: 'center', justifyContent: 'flex-start', fontFamily: 'var(--font-body)', fontWeight: '700', textDecoration: 'none' }}>
            <ArrowLeft size={18} style={{ marginRight: '0.5rem' }} /> 株式投資とは？のページへ戻る
          </Link>
          <h1 className="post-title" style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.8rem, 6vw, 2.8rem)', fontWeight: '900', textAlign: 'left', marginLeft: '0', marginRight: 'auto', maxWidth: 'none', marginBottom: '0.5rem', color: 'var(--primary-dark)', lineHeight: '1.3' }}>
            米国株・米国株式の特定口座とは？源泉徴収あり・なしの違いと初心者におすすめの選び方
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section style={{ background: 'white', padding: 'clamp(3rem, 8vw, 5rem) 0' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'left' }}>

          <div style={{ marginBottom: '3rem' }}>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
              ネット証券（SBI証券や楽天証券など）で米国株・米国株式口座を開設する際、誰もが最初につまずく選択肢が「<strong>特定口座（源泉徴収あり）</strong>」「<strong>特定口座（源泉徴収なし）</strong>」「<strong>一般口座</strong>」のどれを選ぶかという問題です。特に米国株投資においては、為替の変動（為替差益・差損）や外国税などが絡むため、口座の選び方が極めて重要になります。
            </p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
              「選択肢の意味が難しくてよく分からない」「選び方を間違えたら確定申告で大変な目にあうのでは…」と不安を感じる方も多いでしょう。米国株式 特定口座の仕組みを正しく理解していないと、意図せず税金を払い過ぎてしまったり、逆に申告漏れでペナルティを受けてしまったりするリスクがあります。
            </p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: 0 }}>
              結論から申し上げますと、<strong>米国株・米国株式投資の初心者は迷わず「特定口座（源泉徴収あり）」を選ぶのが一番安全で確実な正解</strong>です。本ページでは、米国株・米国株式の特定口座の基本的な仕組みから「源泉あり/なし」の違い、主要ネット証券の比較、年間取引報告書の読み方、さらには外国税額控除の手順まで分かりやすく徹底解説します。
            </p>
          </div>

          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.3rem, 3.5vw, 1.6rem)', fontWeight: '900', color: 'var(--primary-dark)', borderBottom: '2px solid var(--bg-warm)', paddingBottom: '0.8rem', marginTop: '3rem', marginBottom: '1.5rem' }}>
            1. 米国株・米国株式の特定口座とは何か？基本的な仕組み
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
            <strong>特定口座（とくていこうざ）</strong>とは、一言で言えば「<strong>証券会社が投資家に代わって年間の売買損益や配当金を自動で計算し、専用の年間取引報告書を作成してくれる口座</strong>」のことです。
          </p>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
            日本国内の居住者が株式投資で得た利益（譲渡益や配当金）には、日本の法律に基づき一律で<strong>約20.315%（所得税15.315%＋住民税5%）</strong>の税金がかかります。これは日本株であっても米国株であっても同じです。米国株式の場合はさらに米国側で10%の税金が源泉徴収されるケースがありますが、日本国内の税金計算においては特定口座が非常に重要な役割を果たします。
          </p>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '2.5rem' }}>
            昔は、株取引をするすべての人が1年分の購入価格（為替レートも含む）と売却価格を手計算して国税庁に確定申告をしていました。米国株の場合、購入時と売却時のドル円レートをすべて記録し、日本円ベースでの損益を計算しなければならず、極めて煩雑でした。しかし、特定口座制度の導入により、証券会社がこの面倒な円貨決済・外貨決済の計算を含めたすべての税金計算を代わりに処理してくれるようになりました。
          </p>

          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.3rem, 3.5vw, 1.6rem)', fontWeight: '900', color: 'var(--primary-dark)', borderBottom: '2px solid var(--bg-warm)', paddingBottom: '0.8rem', marginTop: '3rem', marginBottom: '1.5rem' }}>
            2. 「源泉徴収あり」と「源泉徴収なし」の決定的な違い
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
            特定口座には「源泉徴収あり」と「源泉徴収なし」の2つの種類があります。最大の違いは、<strong>「税金を自動で天引きしてくれるかどうか」</strong>です。米国株 特定口座においては、為替差益なども含めて自動で天引きされるかどうかがポイントになります。
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '2.5rem' }}>
            <div style={{ background: 'var(--bg-warm)', padding: '1.8rem', borderRadius: '18px', border: '1px solid rgba(176,58,46,0.15)' }}>
              <span className="featured-tag" style={{ marginBottom: '0.5rem', display: 'inline-block', background: 'var(--primary)', color: 'white', padding: '0.2rem 0.8rem', borderRadius: '12px', fontSize: '0.8rem', fontWeight: 'bold' }}>一番おすすめ</span>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '900', color: 'var(--primary-dark)', margin: '0.5rem 0 0.8rem 0' }}>
                特定口座（源泉徴収あり）
              </h3>
              <p style={{ fontSize: '0.95rem', lineHeight: '1.8', margin: 0, color: 'var(--text-main)' }}>
                米国株式を売却して利益が出たり、配当金を受け取ったりするたびに、証券会社が自動で約20%の税金を天引きして代わりに国へ納めてくれます。為替レートの計算もすべて証券会社が行います。<br />
                <strong>確定申告の手間が完全にゼロになり、税金の知識がない初心者でも安心して取引が完結します。</strong>
              </p>
            </div>

            <div style={{ background: '#f8f9f9', padding: '1.8rem', borderRadius: '18px', border: '1px solid #d5dbdb' }}>
              <span className="featured-tag" style={{ background: '#7f8c8d', color: 'white', padding: '0.2rem 0.8rem', borderRadius: '12px', fontSize: '0.8rem', fontWeight: 'bold', marginBottom: '0.5rem', display: 'inline-block' }}>自分で申告</span>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '900', color: '#34495e', margin: '0.5rem 0 0.8rem 0' }}>
                特定口座（源泉徴収なし）
              </h3>
              <p style={{ fontSize: '0.95rem', lineHeight: '1.8', margin: 0, color: 'var(--text-main)' }}>
                証券会社が年間の損益計算書（年間取引報告書）を作成してくれますが、税金の自動天引きは行われません。<br />
                そのため、年間の利益が一定額（会社員なら20万円）を超える場合、<strong>自分で確定申告をして納付する手続きが必要</strong>です。申告漏れのリスクがあります。
              </p>
            </div>
          </div>

          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.3rem, 3.5vw, 1.6rem)', fontWeight: '900', color: 'var(--primary-dark)', borderBottom: '2px solid var(--bg-warm)', paddingBottom: '0.8rem', marginTop: '3rem', marginBottom: '1.5rem' }}>
            3. 特定口座・一般口座・新NISA口座の比較表
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
            証券会社で扱われている3つの主要な口座形式の特徴を比較表にまとめました。米国株投資においても、新NISAが最も有利であることは変わりません。
          </p>

          <div style={{ overflowX: 'auto', marginBottom: '2.5rem', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.08)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '600px', fontSize: '0.95rem', fontFamily: 'var(--font-body)' }}>
              <thead>
                <tr style={{ backgroundColor: 'var(--bg-warm)', borderBottom: '2px solid rgba(0,0,0,0.08)' }}>
                  <th style={{ padding: '0.9rem 1rem', fontWeight: '800', color: 'var(--primary-dark)' }}>口座の種類</th>
                  <th style={{ padding: '0.9rem 1rem', fontWeight: '800', color: 'var(--primary-dark)' }}>年間損益の計算</th>
                  <th style={{ padding: '0.9rem 1rem', fontWeight: '800', color: 'var(--primary-dark)' }}>税金天引き</th>
                  <th style={{ padding: '0.9rem 1rem', fontWeight: '800', color: 'var(--primary-dark)' }}>確定申告</th>
                  <th style={{ padding: '0.9rem 1rem', fontWeight: '800', color: 'var(--primary-dark)' }}>非課税枠</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid rgba(0,0,0,0.05)', backgroundColor: 'rgba(176,58,46,0.03)' }}>
                  <td style={{ padding: '0.9rem 1rem', fontWeight: '800', color: 'var(--primary)' }}>新NISA口座</td>
                  <td style={{ padding: '0.9rem 1rem' }}>不要（非課税）</td>
                  <td style={{ padding: '0.9rem 1rem' }}>なし（税金0円）</td>
                  <td style={{ padding: '0.9rem 1rem', fontWeight: '700', color: '#27ae60' }}>不要</td>
                  <td style={{ padding: '0.9rem 1rem', fontWeight: '700', color: 'var(--primary)' }}>最大1,800万円</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                  <td style={{ padding: '0.9rem 1rem', fontWeight: '700', color: 'var(--primary-dark)' }}>特定口座（源泉あり）</td>
                  <td style={{ padding: '0.9rem 1rem' }}>証券会社が自動計算</td>
                  <td style={{ padding: '0.9rem 1rem' }}>あり（自動徴収）</td>
                  <td style={{ padding: '0.9rem 1rem', fontWeight: '700', color: '#27ae60' }}>原則不要</td>
                  <td style={{ padding: '0.9rem 1rem' }}>なし（全額課税）</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                  <td style={{ padding: '0.9rem 1rem', fontWeight: '700' }}>特定口座（源泉なし）</td>
                  <td style={{ padding: '0.9rem 1rem' }}>証券会社が自動計算</td>
                  <td style={{ padding: '0.9rem 1rem' }}>なし</td>
                  <td style={{ padding: '0.9rem 1rem', color: '#e67e22' }}>必要</td>
                  <td style={{ padding: '0.9rem 1rem' }}>なし（全額課税）</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                  <td style={{ padding: '0.9rem 1rem', fontWeight: '700' }}>一般口座</td>
                  <td style={{ padding: '0.9rem 1rem' }}>自力で計算（極めて大変）</td>
                  <td style={{ padding: '0.9rem 1rem' }}>なし</td>
                  <td style={{ padding: '0.9rem 1rem', color: '#c0392b' }}>必要</td>
                  <td style={{ padding: '0.9rem 1rem' }}>なし（全額課税）</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.3rem, 3.5vw, 1.6rem)', fontWeight: '900', color: 'var(--primary-dark)', borderBottom: '2px solid var(--bg-warm)', paddingBottom: '0.8rem', marginTop: '3rem', marginBottom: '1.5rem' }}>
            4. 各証券会社（SBI・楽天・マネックス）の特定口座比較・対応状況
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
            米国株式 特定口座の取り扱いにおいて、国内の主要ネット証券（SBI証券、楽天証券、マネックス証券）はすべて「特定口座」に対応しています。過去には米国株は一般口座のみという時代もありましたが、現在はどの証券会社でも特定口座（源泉徴収あり・なし）を選択可能です。以下に各社の特徴や確認方法を比較します。
          </p>

          <div style={{ overflowX: 'auto', marginBottom: '2.5rem', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.08)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '600px', fontSize: '0.95rem', fontFamily: 'var(--font-body)' }}>
              <thead>
                <tr style={{ backgroundColor: 'var(--bg-warm)', borderBottom: '2px solid rgba(0,0,0,0.08)' }}>
                  <th style={{ padding: '0.9rem 1rem', fontWeight: '800', color: 'var(--primary-dark)' }}>証券会社</th>
                  <th style={{ padding: '0.9rem 1rem', fontWeight: '800', color: 'var(--primary-dark)' }}>米国株特定口座</th>
                  <th style={{ padding: '0.9rem 1rem', fontWeight: '800', color: 'var(--primary-dark)' }}>為替差損益の自動計算</th>
                  <th style={{ padding: '0.9rem 1rem', fontWeight: '800', color: 'var(--primary-dark)' }}>特定口座設定の確認・変更方法</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                  <td style={{ padding: '0.9rem 1rem', fontWeight: '800', color: '#004098' }}>SBI証券</td>
                  <td style={{ padding: '0.9rem 1rem' }}>対応済</td>
                  <td style={{ padding: '0.9rem 1rem' }}>対応（円貨決済・外貨決済ともに）</td>
                  <td style={{ padding: '0.9rem 1rem' }}>ログイン後「口座管理」＞「お客様情報設定・変更」＞「お取引関連・口座情報」から確認・変更</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                  <td style={{ padding: '0.9rem 1rem', fontWeight: '800', color: '#bf0000' }}>楽天証券</td>
                  <td style={{ padding: '0.9rem 1rem' }}>対応済</td>
                  <td style={{ padding: '0.9rem 1rem' }}>対応（円貨決済・外貨決済ともに）</td>
                  <td style={{ padding: '0.9rem 1rem' }}>ログイン後「マイメニュー」＞「お客様情報の設定・変更」＞「口座（NISA・特定・FX等）」から確認</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                  <td style={{ padding: '0.9rem 1rem', fontWeight: '800', color: '#f39c12' }}>マネックス証券</td>
                  <td style={{ padding: '0.9rem 1rem' }}>対応済</td>
                  <td style={{ padding: '0.9rem 1rem' }}>対応（米国株取引のパイオニア）</td>
                  <td style={{ padding: '0.9rem 1rem' }}>ログイン後「保有残高・口座管理」＞「お客様情報」から特定口座の状況を確認</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '2.5rem' }}>
            ※注意点：外貨決済（米ドル建て）で米国株を購入・売却した場合でも、特定口座内であれば証券会社が「受渡日の為替レート」を用いて自動的に日本円ベースでの損益を計算してくれます。為替差益の計算を自力で行う必要はありません。
          </p>

          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.3rem, 3.5vw, 1.6rem)', fontWeight: '900', color: 'var(--primary-dark)', borderBottom: '2px solid var(--bg-warm)', paddingBottom: '0.8rem', marginTop: '3rem', marginBottom: '1.5rem' }}>
            5. 特定口座の年間取引報告書の読み方
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
            特定口座を開設していると、翌年の1月中旬ごろに証券会社から「<strong>特定口座年間取引報告書</strong>」という書類が電子交付（または郵送）されます。米国株式 特定口座での取引内容もすべてここに記載されます。確定申告を行う場合は、この書類を見ながら入力することになります。
          </p>

          <div style={{ background: '#fdfefe', border: '1px solid #e5e7e9', borderRadius: '16px', padding: '1.8rem', marginBottom: '2.5rem' }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: '900', color: 'var(--primary-dark)', margin: '0 0 1rem 0' }}>
              年間取引報告書でチェックすべき3つのポイント
            </h3>
            <ul style={{ lineHeight: '2', color: 'var(--text-main)', paddingLeft: '1.5rem', marginBottom: 0 }}>
              <li>
                <strong>①「譲渡の対価の額（収入金額）」と「取得費及び譲渡に要した費用の額等」</strong><br />
                1年間に売却した米国株などの合計売却額（収入金額）と、それを買うためにかかった合計費用（取得費）です。この差額が「差引金額（譲渡益）」となります。
              </li>
              <li>
                <strong>②「源泉徴収税額（所得税・住民税）」</strong><br />
                特定口座（源泉あり）の場合、すでに証券会社が天引きして納付した税金の額が記載されています。確定申告不要の場合はここを確認するだけでOKです。
              </li>
              <li>
                <strong>③「配当等の額」と「国外株式等（外国税額）」</strong><br />
                米国株から受け取った配当金の総額と、米国で源泉徴収された税額（10%分）が記載されています。後述する「外国税額控除」を行う際に、この「外国税額」の金額を確定申告書に入力します。
              </li>
            </ul>
          </div>

          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.3rem, 3.5vw, 1.6rem)', fontWeight: '900', color: 'var(--primary-dark)', borderBottom: '2px solid var(--bg-warm)', paddingBottom: '0.8rem', marginTop: '3rem', marginBottom: '1.5rem' }}>
            6. 特定口座での外国税額控除の具体的な手順
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
            米国株 特定口座（源泉徴収あり）を選んでいても、米国株の配当金にかかる「二重課税」を取り戻すためには、自分で確定申告をして<strong>外国税額控除</strong>を申請する必要があります。
          </p>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
            米国株の配当金は、まず米国で10%の税金が引かれ、その残りの90%に対して日本で約20.315%の税金が引かれます。合計で約28%も税金が引かれてしまうため、確定申告を行うことで米国で引かれた10%分を日本の所得税から差し引く（還付を受ける）ことができます。
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', background: 'var(--bg-warm)', padding: '1.5rem', borderRadius: '12px' }}>
              <div style={{ minWidth: '40px', height: '40px', borderRadius: '50%', background: 'var(--primary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', marginRight: '1rem' }}>1</div>
              <div>
                <h4 style={{ margin: '0 0 0.5rem 0', fontWeight: 'bold', color: 'var(--primary-dark)' }}>年間取引報告書を準備する</h4>
                <p style={{ margin: 0, fontSize: '0.95rem', lineHeight: '1.7', color: 'var(--text-main)' }}>証券会社のマイページから、該当年の「特定口座年間取引報告書」をダウンロードまたは印刷します。配当金の明細が記載されていることを確認してください。</p>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', background: 'var(--bg-warm)', padding: '1.5rem', borderRadius: '12px' }}>
              <div style={{ minWidth: '40px', height: '40px', borderRadius: '50%', background: 'var(--primary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', marginRight: '1rem' }}>2</div>
              <div>
                <h4 style={{ margin: '0 0 0.5rem 0', fontWeight: 'bold', color: 'var(--primary-dark)' }}>国税庁の確定申告書作成コーナーにアクセス</h4>
                <p style={{ margin: 0, fontSize: '0.95rem', lineHeight: '1.7', color: 'var(--text-main)' }}>スマホやPCから国税庁のサイトにアクセスし、収入金額の入力画面で「株式等の譲渡所得等」「配当所得等」の項目を選択します。特定口座（源泉徴収あり）として年間取引報告書の内容を入力します。</p>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', background: 'var(--bg-warm)', padding: '1.5rem', borderRadius: '12px' }}>
              <div style={{ minWidth: '40px', height: '40px', borderRadius: '50%', background: 'var(--primary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', marginRight: '1rem' }}>3</div>
              <div>
                <h4 style={{ margin: '0 0 0.5rem 0', fontWeight: 'bold', color: 'var(--primary-dark)' }}>外国税額控除の入力</h4>
                <p style={{ margin: 0, fontSize: '0.95rem', lineHeight: '1.7', color: 'var(--text-main)' }}>税額控除の画面に進み、「外国税額控除」を選択します。年間取引報告書に記載されている「国外所得（配当金総額）」と「外国所得税額」を入力します。自動で控除限度額が計算され、還付される金額が確定します。</p>
              </div>
            </div>
          </div>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '2.5rem', padding: '1rem', background: '#fdf2e9', borderRadius: '8px', borderLeft: '4px solid #e67e22' }}>
            ※注意: 新NISA口座で受け取った米国株の配当金については、日本国内の税金が非課税（0%）となっているため、二重課税が発生しておらず「外国税額控除」の対象外となります。米国での10%課税のみとなります。
          </p>

          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.3rem, 3.5vw, 1.6rem)', fontWeight: '900', color: 'var(--primary-dark)', borderBottom: '2px solid var(--bg-warm)', paddingBottom: '0.8rem', marginTop: '3rem', marginBottom: '1.5rem' }}>
            7. 米国株・米国株式投資で特定口座を使う場合の注意点
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
            米国株・米国株式を特定口座で取引する場合、新NISA口座との優先順位を整理しておくことが重要です。
          </p>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '2.5rem' }}>
            新NISA口座であれば日本の税金（約20%）が全額非課税になります。そのため、<strong>まずは「新NISA」の非課税枠（生涯枠最大1,800万円、年間最大360万円）を最優先で使い切り、溢れた分やNISA対象外の銘柄投資に「特定口座（源泉あり）」を活用する</strong>のが効率的な資産運用の黄金パターンです。
          </p>

          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.3rem, 3.5vw, 1.6rem)', fontWeight: '900', color: 'var(--primary-dark)', borderBottom: '2px solid var(--bg-warm)', paddingBottom: '0.8rem', marginTop: '3rem', marginBottom: '1.5rem' }}>
            8. 米国株・米国株式の特定口座についてよくある質問（FAQ）
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', marginBottom: '3rem' }}>
            <div style={{ background: '#fdfefe', border: '1px solid #e5e7e9', borderRadius: '14px', padding: '1.3rem 1.5rem' }}>
              <h3 style={{ fontSize: '1.05rem', fontWeight: '800', color: 'var(--primary-dark)', margin: '0 0 0.5rem 0' }}>
                Q. 米国株・米国株式の特定口座（源泉徴収あり）を選べば確定申告は不要ですか？
              </h3>
              <p style={{ fontSize: '0.95rem', lineHeight: '1.8', margin: 0, color: 'var(--text-main)' }}>
                原則として確定申告は不要です。証券会社が自動で税金を天引きして納付してくれます。ただし、前述の通り米国株配当金の外国税額控除を受ける場合や、他の証券会社の赤字と損益通算をする場合のみ、任意で申告をして税金を取り戻すことができます。
              </p>
            </div>

            <div style={{ background: '#fdfefe', border: '1px solid #e5e7e9', borderRadius: '14px', padding: '1.3rem 1.5rem' }}>
              <h3 style={{ fontSize: '1.05rem', fontWeight: '800', color: 'var(--primary-dark)', margin: '0 0 0.5rem 0' }}>
                Q. 途中で「源泉あり」から「源泉なし」に変更できますか？
              </h3>
              <p style={{ fontSize: '0.95rem', lineHeight: '1.8', margin: 0, color: 'var(--text-main)' }}>
                はい、年単位で変更可能です。ただし、その年に一度でも株式の売買や配当の受け取りがあった場合は翌年まで変更ができませんのでご注意ください。変更手続きは各証券会社のマイページから可能です。
              </p>
            </div>

            <div style={{ background: '#fdfefe', border: '1px solid #e5e7e9', borderRadius: '14px', padding: '1.3rem 1.5rem' }}>
              <h3 style={{ fontSize: '1.05rem', fontWeight: '800', color: 'var(--primary-dark)', margin: '0 0 0.5rem 0' }}>
                Q. 扶養に入っている主婦や学生でも特定口座（源泉あり）なら大丈夫ですか？
              </h3>
              <p style={{ fontSize: '0.95rem', lineHeight: '1.8', margin: 0, color: 'var(--text-main)' }}>
                はい、特定口座（源泉あり）で得た利益は、確定申告をしない限り「合計所得金額」に含まれません。そのため、いくら大きな利益が出ても配偶者控除や扶養控除から外れる心配はありません。安心して投資を始められます。
              </p>
            </div>
          </div>

          <div style={{ background: 'var(--bg-warm)', padding: '2rem', borderRadius: '20px', textAlign: 'center', border: '1px solid rgba(176,58,46,0.12)' }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.8rem' }}>
              関連知識・併せて読みたいガイド
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: '1.7' }}>
              米国株投資の税金ルールや、さらに詳しい実践的な知識を学べる関連記事です。
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Link href="/knowledge/tax" className="btn btn-outline" style={{ borderRadius: '30px', fontSize: '0.95rem', padding: '0.6rem 1.2rem', textDecoration: 'none', background: 'white', color: 'var(--primary-dark)', border: '1px solid var(--primary)' }}>
                米国株の税金ガイドを詳しく見る
              </Link>
              <Link href="/seminar" className="btn btn-outline" style={{ borderRadius: '30px', fontSize: '0.95rem', padding: '0.6rem 1.2rem', textDecoration: 'none', background: 'white', color: 'var(--primary-dark)', border: '1px solid var(--primary)' }}>
                初心者向け米国株セミナー情報
              </Link>
              <Link href="/knowledge/nisa" className="btn btn-outline" style={{ borderRadius: '30px', fontSize: '0.95rem', padding: '0.6rem 1.2rem', textDecoration: 'none', background: 'white', color: 'var(--primary-dark)', border: '1px solid var(--primary)' }}>
                NISAの基本
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section style={{ background: 'var(--bg-warm)', color: 'var(--text-main)', position: 'relative', overflow: 'hidden', textAlign: 'center', padding: 'clamp(3rem, 8vw, 5rem) 0' }}>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '700px', margin: '0 auto' }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.4rem, 4vw, 2.2rem)', fontWeight: '900', lineHeight: '1.5', marginBottom: '1.5rem', color: 'var(--text-main)' }}>
              特定口座の選び方や米国株の始め方に<br />お悩みですか？
            </h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(0.95rem, 2.5vw, 1.1rem)', lineHeight: '1.8', color: 'var(--text-muted)', marginBottom: '2.5rem' }}>
              東京米国株クラブでは、定員4名の少人数カフェスタイルで、証券口座の設定から米国株の買い方、税金の疑問まで直接質問しながら学べる初心者セミナーを定期開催しています。
            </p>

            <div className="glass-card" style={{ background: 'var(--bg-white)', borderRadius: '24px', padding: '2rem 1.5rem', border: '1px solid var(--glass-border)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Link href="/seminar" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '1rem 2.5rem', borderRadius: '30px', fontWeight: '800', fontSize: '1.05rem', textDecoration: 'none', background: 'var(--primary)', color: 'white' }}>
                初心者セミナーの日程を見る <ArrowRight size={18} style={{ marginLeft: '0.5rem' }} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
