import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, ShieldCheck, CheckCircle2, FileText, HelpCircle, AlertCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: '米国株・米国株式の特定口座とは？源泉徴収あり・なしの違いと選び方 | 東京米国株クラブ',
  description: '初心者向けに米国株・米国株式の特定口座の仕組みを徹底解説。「源泉徴収あり」と「源泉徴収なし」の違い、一般口座や新NISAとの比較、年間取引報告書の見方、確定申告の手間を無くす方法まで完全網羅。',
  alternates: {
    canonical: 'https://www.tokyo-us-stock.com/knowledge/tokutei-koza',
  },
  openGraph: {
    title: '米国株・米国株式の特定口座とは？源泉徴収あり・なしの違いと選び方 | 東京米国株クラブ',
    description: '初心者向けに米国株・米国株式の特定口座の仕組みを徹底解説。「源泉徴収あり」と「源泉徴収なし」の違い、一般口座や新NISAとの比較、年間取引報告書の見方、確定申告の手間を無くす方法まで完全網羅。',
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
    description: '初心者向けに米国株・米国株式の特定口座の仕組みを徹底解説。「源泉徴収あり」と「源泉徴収なし」の違い、一般口座や新NISAとの比較、年間取引報告書の見方、確定申告の手間を無くす方法まで完全網羅。',
    images: ['https://www.tokyo-us-stock.com/ogp.png'],
  },
};

export default function TokuteiKozaKnowledgePage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: '米国株・米国株式の特定口座（源泉徴収あり）を選べば確定申告は不要ですか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '原則として確定申告は不要です。証券会社が取引のたびに利益から約20.315%の税金を自動で天引き（源泉徴収）して国に納めてくれるため、面倒な計算や確定申告の手間が一切かかりません。ただし、米国株配当金の二重課税を取り戻す（外国税額控除）場合や、他の証券会社の赤字と相殺する（損益通算）場合のみ、任意で確定申告を行うことができます。',
        },
      },
      {
        '@type': 'Question',
        name: '途中で「源泉徴収あり」から「源泉徴収なし」に変更できますか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'はい、年単位で変更が可能です。ただし、その年に一度でも特定口座内で株式の売買や配当金の受け取りがあった場合は、その年の途中で変更することはできません。翌年の最初の取引前までにネット証券のマイページから変更手続きを行う必要があります。',
        },
      },
      {
        '@type': 'Question',
        name: '扶養に入っている主婦や学生でも特定口座（源泉あり）なら扶養から外れませんか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'はい、扶養から外れる心配はありません。特定口座（源泉徴収あり）で得た株式の利益や配当金は、確定申告をしない限り「合計所得金額」に含まれない仕組みになっています。そのため、どれだけ大きな利益が出ても配偶者控除や親の扶養控除に影響を与えることはありません。',
        },
      },
      {
        '@type': 'Question',
        name: '新NISA口座があれば特定口座は作らなくてもいいですか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '基本的には新NISAを最優先で使うのがおすすめですが、証券会社で口座開設する際は特定口座も一緒に開設しておくのが標準的です。新NISAの年間投資枠（最大360万円）を超えて投資したい場合や、NISA対象外の銘柄に投資したい場合に、特定口座が受け皿として必要になるためです。',
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

          {/* プロローグ */}
          <div style={{ marginBottom: '3rem' }}>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
              ネット証券（SBI証券や楽天証券など）で米国株・米国株式口座を開設する際、誰もが最初につまずく選択肢が「<strong>特定口座（源泉徴収あり）</strong>」「<strong>特定口座（源泉徴収なし）</strong>」「<strong>一般口座</strong>」のどれを選ぶかという問題です。
            </p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
              「選択肢の意味が難しくてよく分からない」「選び方を間違えたら確定申告で大変な目にあうのでは…」と不安を感じる方も多いでしょう。
            </p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: 0 }}>
              結論から申し上げますと、<strong>米国株・米国株式投資の初心者は迷わず「特定口座（源泉徴収あり）」を選ぶのが一番安全で確実な正解</strong>です。本ページでは、米国株・米国株式の特定口座の基本的な仕組みから「源泉あり/なし」の違い、新NISAや一般口座との比較、確定申告の手間を省くポイントまで分かりやすく徹底解説します。
            </p>
          </div>

          {/* 1章: 米国株・米国株式の特定口座とは何か？ */}
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.3rem, 3.5vw, 1.6rem)', fontWeight: '900', color: 'var(--primary-dark)', borderBottom: '2px solid var(--bg-warm)', paddingBottom: '0.8rem', marginTop: '3rem', marginBottom: '1.5rem' }}>
            1. 米国株・米国株式の特定口座とは何か？基本的な仕組み
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
            <strong>特定口座（とくていこうざ）</strong>とは、一言で言えば「<strong>証券会社が投資家に代わって年間の売買損益や配当金を自動で計算し、専用の年間取引報告書を作成してくれる口座</strong>」のことです。
          </p>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
            株式投資で得た利益（値上がり益や配当金）には、日本の法律に基づき一律で<strong>約20.315%（所得税15.315%＋住民税5%）</strong>の税金がかかります。
          </p>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '2.5rem' }}>
            昔は、株取引をするすべての人が1年分の購入価格と売却価格を手計算して国税庁に確定申告をしていました。しかし、個人の負担を軽減するために導入されたのが特定口座制度です。証券会社が面倒な税金計算をすべて代わりに処理してくれます。
          </p>

          {/* 2章: 源泉徴収あり・なしの違い比較 */}
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.3rem, 3.5vw, 1.6rem)', fontWeight: '900', color: 'var(--primary-dark)', borderBottom: '2px solid var(--bg-warm)', paddingBottom: '0.8rem', marginTop: '3rem', marginBottom: '1.5rem' }}>
            2. 「源泉徴収あり」と「源泉徴収なし」の決定的な違い
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
            特定口座には「源泉徴収あり」と「源泉徴収なし」の2つの種類があります。最大の違いは、<strong>「税金を自動で天引きしてくれるかどうか」</strong>です。
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '2.5rem' }}>
            <div style={{ background: 'var(--bg-warm)', padding: '1.8rem', borderRadius: '18px', border: '1px solid rgba(176,58,46,0.15)' }}>
              <span className="featured-tag" style={{ marginBottom: '0.5rem' }}>一番おすすめ</span>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '900', color: 'var(--primary-dark)', margin: '0.5rem 0 0.8rem 0' }}>
                特定口座（源泉徴収あり）
              </h3>
              <p style={{ fontSize: '0.95rem', lineHeight: '1.8', margin: 0, color: 'var(--text-main)' }}>
                株式を売却して利益が出たり、配当金を受け取ったりするたびに、証券会社が自動で約20%の税金を天引きして代わりに国へ納めてくれます。<br />
                <strong>確定申告の手間が完全にゼロになり、税金の知識がない初心者でも安心して取引が完結します。</strong>
              </p>
            </div>

            <div style={{ background: '#f8f9f9', padding: '1.8rem', borderRadius: '18px', border: '1px solid #d5dbdb' }}>
              <span className="featured-tag" style={{ background: '#7f8c8d', color: 'white', marginBottom: '0.5rem' }}>自分で申告</span>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '900', color: '#34495e', margin: '0.5rem 0 0.8rem 0' }}>
                特定口座（源泉徴収なし）
              </h3>
              <p style={{ fontSize: '0.95rem', lineHeight: '1.8', margin: 0, color: 'var(--text-main)' }}>
                証券会社が年間の損益計算書（年間取引報告書）を作成してくれますが、税金の自動天引きは行われません。<br />
                そのため、年間の利益が一定額（会社員なら20万円）を超える場合、<strong>自分で確定申告をして納付する手続きが必要</strong>です。
              </p>
            </div>
          </div>

          {/* 3章: 口座種別の比較表 */}
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.3rem, 3.5vw, 1.6rem)', fontWeight: '900', color: 'var(--primary-dark)', borderBottom: '2px solid var(--bg-warm)', paddingBottom: '0.8rem', marginTop: '3rem', marginBottom: '1.5rem' }}>
            3. 特定口座・一般口座・新NISA口座の比較表
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
            証券会社で扱われている3つの主要な口座形式（特定口座・一般口座・新NISA口座）の特徴を比較表にまとめました。
          </p>

          <div style={{ overflowX: 'auto', marginBottom: '2.5rem', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.08)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '550px', fontSize: '0.95rem', fontFamily: 'var(--font-body)' }}>
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
                  <td style={{ padding: '0.9rem 1rem' }}>自力で計算（大変）</td>
                  <td style={{ padding: '0.9rem 1rem' }}>なし</td>
                  <td style={{ padding: '0.9rem 1rem', color: '#c0392b' }}>必要</td>
                  <td style={{ padding: '0.9rem 1rem' }}>なし（全額課税）</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* 4章: 初心者が「特定口座（源泉あり）」を選ぶべき3つの理由 */}
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.3rem, 3.5vw, 1.6rem)', fontWeight: '900', color: 'var(--primary-dark)', borderBottom: '2px solid var(--bg-warm)', paddingBottom: '0.8rem', marginTop: '3rem', marginBottom: '1.5rem' }}>
            4. 初心者が「特定口座（源泉あり）」を選ぶべき3つのメリット
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2.5rem' }}>
            <div style={{ background: 'var(--bg-warm)', padding: '1.5rem', borderRadius: '16px', borderLeft: '4px solid var(--primary)' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '900', color: 'var(--primary-dark)', margin: '0 0 0.5rem 0' }}>
                理由①：確定申告の手間・計算ミスが一切なくなる
              </h3>
              <p style={{ fontSize: '0.975rem', lineHeight: '1.8', margin: 0, color: 'var(--text-main)' }}>
                確定申告書を作成するために過去の売買履歴をエクセルに入力して計算するような面倒な作業が不要です。税理士に頼むコストや申告漏れの追徴課税リスクもゼロになります。
              </p>
            </div>

            <div style={{ background: 'var(--bg-warm)', padding: '1.5rem', borderRadius: '16px', borderLeft: '4px solid var(--primary)' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '900', color: 'var(--primary-dark)', margin: '0 0 0.5rem 0' }}>
                理由②：会社や職場に副業・投資の利益がバレない
              </h3>
              <p style={{ fontSize: '0.975rem', lineHeight: '1.8', margin: 0, color: 'var(--text-main)' }}>
                会社員の方が確定申告を行うと、副収入として住民税額が変動し、会社の経理に知られることがあります。特定口座（源泉徴収あり）なら証券会社が税金を完結させて納付するため、会社に通知がいくことはありません。
              </p>
            </div>

            <div style={{ background: 'var(--bg-warm)', padding: '1.5rem', borderRadius: '16px', borderLeft: '4px solid var(--primary)' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '900', color: 'var(--primary-dark)', margin: '0 0 0.5rem 0' }}>
                理由③：扶養に入っている主婦・学生が扶養から外れない
              </h3>
              <p style={{ fontSize: '0.975rem', lineHeight: '1.8', margin: 0, color: 'var(--text-main)' }}>
                特定口座（源泉あり）で出た利益は、確定申告をしない限り税法上の「合計所得金額」にカウントされません。どれだけ大きな利益が出ても、配偶者控除や親の扶養控除から外れる心配がありません。
              </p>
            </div>
          </div>

          {/* 5章: 主要ネット証券（SBI・楽天・マネックス）での設定確認・変更方法 */}
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.3rem, 3.5vw, 1.6rem)', fontWeight: '900', color: 'var(--primary-dark)', borderBottom: '2px solid var(--bg-warm)', paddingBottom: '0.8rem', marginTop: '3rem', marginBottom: '1.5rem' }}>
            5. 主要ネット証券（SBI証券・楽天証券）での特定口座確認と変更手順
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
            「自分がどの口座を選んだか忘れてしまった」「今の設定を変更したい」という場合、各ネット証券のマイページから簡単に確認・変更が可能です。
          </p>

          <ul style={{ lineHeight: '1.9', marginBottom: '2.5rem' }}>
            <li style={{ marginBottom: '1rem' }}>
              <strong>SBI証券での確認方法：</strong><br />
              ログイン後、画面上部メニューの「口座管理」＞「お客様情報設定・変更」＞「お取引関連・口座情報」をクリック。「特定口座」の欄で「源泉徴収あり」か「源泉徴収なし」かが確認できます。変更する場合は同一画面の変更手続きボタンから年末までに申請します。
            </li>
            <li style={{ marginBottom: '1rem' }}>
              <strong>楽天証券での確認方法：</strong><br />
              ログイン後、「マイメニュー」＞「お客様情報の設定・変更」＞「口座（NISA・特定・FX等）」を選択。「特定口座区分」で現在の源泉徴収設定が確認できます。
            </li>
          </ul>

          {/* 6章: 特定口座（源泉あり）でもあえて確定申告した方が得するケース */}
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.3rem, 3.5vw, 1.6rem)', fontWeight: '900', color: 'var(--primary-dark)', borderBottom: '2px solid var(--bg-warm)', paddingBottom: '0.8rem', marginTop: '3rem', marginBottom: '1.5rem' }}>
            6. あえて確定申告した方が得する2つのパターン
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
            特定口座（源泉あり）は原則確定申告が不要ですが、以下の条件に該当する場合は任意で申告することで税金が戻ってくる（還付される）可能性があります。
          </p>

          <div style={{ background: '#fdfefe', border: '1px solid #e5e7e9', borderRadius: '16px', padding: '1.5rem', marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: '800', color: 'var(--primary-dark)', marginTop: 0, marginBottom: '0.5rem' }}>
              パターン①：外国税額控除を受ける場合（二重課税の取り戻し）
            </h3>
            <p style={{ fontSize: '0.95rem', lineHeight: '1.8', color: 'var(--text-main)', margin: 0 }}>
              米国株の配当金は米国で10%が天引きされ、残りに日本の約20%がかかります。確定申告で「外国税額控除」を申請すると、米国の10%分を取り戻すことができます。
            </p>
          </div>

          <div style={{ background: '#fdfefe', border: '1px solid #e5e7e9', borderRadius: '16px', padding: '1.5rem', marginBottom: '2.5rem' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: '800', color: 'var(--primary-dark)', marginTop: 0, marginBottom: '0.5rem' }}>
              パターン②：複数証券会社の損益通算や赤字の3年間繰越
            </h3>
            <p style={{ fontSize: '0.95rem', lineHeight: '1.8', color: 'var(--text-main)', margin: 0 }}>
              「A証券でプラス50万円、B証券でマイナス30万円」のように損益が分かれている場合、確定申告で合算（損益通算）すれば、納め過ぎた税金が還付されます。また、年間で赤字が出た場合、3年間損失を繰り越して翌年以降の利益と相殺できます。
            </p>
          </div>

          {/* 6章: 米国株投資で特定口座を使う場合の注意点 */}
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.3rem, 3.5vw, 1.6rem)', fontWeight: '900', color: 'var(--primary-dark)', borderBottom: '2px solid var(--bg-warm)', paddingBottom: '0.8rem', marginTop: '3rem', marginBottom: '1.5rem' }}>
            6. 米国株・米国株式投資で特定口座を使う場合の注意点
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
            米国株・米国株式を特定口座で取引する場合、新NISA口座との優先順位を整理しておくことが重要です。
          </p>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '2.5rem' }}>
            新NISA口座であれば日本の税金（20%）が全額非課税になります。そのため、<strong>まずは「新NISA」の非課税枠（最大1,800万円）を最優先で使い切り、溢れた分やNISA対象外の銘柄投資に「特定口座（源泉あり）」を活用する</strong>のが効率的な資産運用の黄金パターンです。
          </p>

          {/* 7章: よくある質問（FAQ） */}
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.3rem, 3.5vw, 1.6rem)', fontWeight: '900', color: 'var(--primary-dark)', borderBottom: '2px solid var(--bg-warm)', paddingBottom: '0.8rem', marginTop: '3rem', marginBottom: '1.5rem' }}>
            7. 米国株・米国株式の特定口座についてよくある質問（FAQ）
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', marginBottom: '3rem' }}>
            <div style={{ background: '#fdfefe', border: '1px solid #e5e7e9', borderRadius: '14px', padding: '1.3rem 1.5rem' }}>
              <h3 style={{ fontSize: '1.05rem', fontWeight: '800', color: 'var(--primary-dark)', margin: '0 0 0.5rem 0' }}>
                Q. 米国株・米国株式の特定口座（源泉徴収あり）を選べば確定申告は不要ですか？
              </h3>
              <p style={{ fontSize: '0.95rem', lineHeight: '1.8', margin: 0, color: 'var(--text-main)' }}>
                原則として確定申告は不要です。証券会社が自動で税金を天引きして納付してくれます。ただし、米国株配当金の外国税額控除を受ける場合や、他の証券会社の赤字と損益通算をする場合のみ、任意で申告ができます。
              </p>
            </div>

            <div style={{ background: '#fdfefe', border: '1px solid #e5e7e9', borderRadius: '14px', padding: '1.3rem 1.5rem' }}>
              <h3 style={{ fontSize: '1.05rem', fontWeight: '800', color: 'var(--primary-dark)', margin: '0 0 0.5rem 0' }}>
                Q. 途中で「源泉あり」から「源泉なし」に変更できますか？
              </h3>
              <p style={{ fontSize: '0.95rem', lineHeight: '1.8', margin: 0, color: 'var(--text-main)' }}>
                はい、年単位で変更可能です。ただし、その年に一度でも株式の売買や配当の受け取りがあった場合は翌年まで変更ができませんのでご注意ください。
              </p>
            </div>

            <div style={{ background: '#fdfefe', border: '1px solid #e5e7e9', borderRadius: '14px', padding: '1.3rem 1.5rem' }}>
              <h3 style={{ fontSize: '1.05rem', fontWeight: '800', color: 'var(--primary-dark)', margin: '0 0 0.5rem 0' }}>
                Q. 扶養に入っている主婦や学生でも特定口座（源泉あり）なら大丈夫ですか？
              </h3>
              <p style={{ fontSize: '0.95rem', lineHeight: '1.8', margin: 0, color: 'var(--text-main)' }}>
                はい、確定申告をしない限り利益が所得金額に含まれないため、いくら大きな利益が出ても配偶者控除や扶養控除から外れる心配はありません。
              </p>
            </div>
          </div>

          {/* ナレッジナビゲーションリンク */}
          <div style={{ background: 'var(--bg-warm)', padding: '2rem', borderRadius: '20px', textAlign: 'center', border: '1px solid rgba(176,58,46,0.12)' }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.8rem' }}>
              関連知識・併せて読みたいガイド
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: '1.7' }}>
              株式投資の全体像や証券口座の開設手順、税金のルールをさらに詳しく学べる関連記事です。
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Link href="/knowledge/stock-investment" className="btn btn-outline" style={{ borderRadius: '30px', fontSize: '0.9rem' }}>
                株式投資とは？
              </Link>
              <Link href="/knowledge/account-setup" className="btn btn-outline" style={{ borderRadius: '30px', fontSize: '0.9rem' }}>
                口座開設の手順
              </Link>
              <Link href="/knowledge/tax" className="btn btn-outline" style={{ borderRadius: '30px', fontSize: '0.9rem' }}>
                米国株の税金ガイド
              </Link>
              <Link href="/knowledge/nisa" className="btn btn-outline" style={{ borderRadius: '30px', fontSize: '0.9rem' }}>
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
              口座の選び方や投資の始め方に<br />お悩みですか？
            </h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(0.95rem, 2.5vw, 1.1rem)', lineHeight: '1.8', color: 'var(--text-muted)', marginBottom: '2.5rem' }}>
              東京米国株クラブでは、定員4名の少人数カフェスタイルで、口座設定から米国株の買い方まで直接質問しながら学べる初心者セミナーを定期開催しています。
            </p>

            <div className="glass-card" style={{ background: 'var(--bg-white)', borderRadius: '24px', padding: '2rem 1.5rem', border: '1px solid var(--glass-border)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Link href="/seminar" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '1rem 2.5rem', borderRadius: '30px', fontWeight: '800', fontSize: '1.05rem', textDecoration: 'none' }}>
                初心者セミナーの日程を見る <ArrowRight size={18} style={{ marginLeft: '0.5rem' }} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
