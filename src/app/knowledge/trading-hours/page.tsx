import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Clock, Sun, Moon, Calendar, AlertTriangle, ShieldCheck, CheckCircle2, HelpCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: '米国株（アメリカ株）の取引時間は日本時間の何時？夏時間・冬時間・時間外取引・祝日を徹底解説 | 東京米国株クラブ',
  description: '米国株（アメリカ株）の取引時間を日本時間で分かりやすく徹底解説。夏時間（サマータイム 22:30〜）と冬時間（23:30〜）の違い、プレ・マーケットやアフター・マーケットなどの時間外取引、年間祝日（休場日）、日本のサラリーマンに最適な取引ルーティンまで網羅。',
  alternates: {
    canonical: 'https://www.tokyo-us-stock.com/knowledge/trading-hours',
  },
};

export default function TradingHoursPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: '米国株の取引時間は日本時間の何時から何時までですか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '夏時間（サマータイム：3月第2日曜日〜11月第1日曜日）は日本時間の「22:30〜翌5:00」、冬時間（標準時：11月第1日曜日〜3月第2日曜日）は日本時間の「23:30〜翌6:00」です。日本の夜間に開場するため、会社員の方でも仕事が終わった後にリアルタイムで取引できます。',
        },
      },
      {
        '@type': 'Question',
        name: '日本の昼間（日中）に米国株の注文を出しておくことはできますか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'はい、可能です。SBI証券や楽天証券などの主要ネット証券を使えば、日本の昼間であっても事前に指値注文や成行注文を出しておくことができます。出した注文は、夜間に米国市場が開場したタイミングで自動的に執行されます。',
        },
      },
      {
        '@type': 'Question',
        name: '米国株の「時間外取引（プレ・マーケット／アフター・マーケット）」とは何ですか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '通常の立会時間の前後に行われる取引のことです。通常の開場前に行われる「プレ・マーケット」と、閉場後に行われる「アフター・マーケット」があります。米国企業の決算発表は多くが時間外に行われるため、この時間帯に株価が急変動することがあります。',
        },
      },
      {
        '@type': 'Question',
        name: '夏時間（サマータイム）と冬時間はいつ切り替わりますか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '夏時間（サマータイム）への切り替えは「3月の第2日曜日」、冬時間（標準時）への切り替えは「11月の第1日曜日」に行われます。切り替え時期は開場時間が1時間前後するため、取引の際には注意が必要です。',
        },
      },
      {
        '@type': 'Question',
        name: '米国株式市場は土日やアメリカの祝日も開いていますか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'いいえ、土曜日・日曜日およびアメリカの祝日（ホリデー）は休場となります。主な祝日には元日、プレジデンツデー、独立記念日、レイバーデー、感謝祭、クリスマスなどがあります。また、感謝祭の翌日など半日取引（13:00早期閉場）となる日もあります。',
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
            米国株の取引時間は日本時間の何時？夏時間・冬時間・時間外取引・祝日を完全解説
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section style={{ background: 'white', padding: 'clamp(3rem, 8vw, 5rem) 0' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'left' }}>

          {/* プロローグ */}
          <div style={{ marginBottom: '3rem' }}>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
              「米国株（アメリカ株）に興味があるけれど、地球の反対側だから取引時間がよく分からない」「仕事中に株価を気にしたくないけれど、夜間にどう取引すればいいの？」といった疑問をお持ちではありませんか？
            </p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
              結論から言えば、<strong>米国株の主要な取引時間は、日本時間で「夜の22:30（冬時間は23:30）〜翌朝の5:00（冬時間は6:00）」</strong>です。
            </p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: 0 }}>
              日本の株式市場は平日の昼間（9:00〜15:00）にしか開いていないため、サラリーマンや公務員の方は勤務中にリアルタイムの株価を見ることができません。それに対し、米国株は**「仕事から帰宅し、夕食や入浴を済ませたプライベートな夜の時間帯」**に市場が開きます。そのため、実は日本の働く世代にとって最もライフスタイルに合致した投資先と言えます。
            </p>
          </div>

          {/* 1章: メイン取引時間（立会時間）と夏時間・冬時間 */}
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.3rem, 3.5vw, 1.6rem)', fontWeight: '900', color: 'var(--primary-dark)', borderBottom: '2px solid var(--bg-warm)', paddingBottom: '0.8rem', marginTop: '3rem', marginBottom: '1.5rem' }}>
            1. 米国株のメイン取引時間（立会時間）と夏時間・冬時間の違い
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
            ニューヨーク証券取引所（NYSE）やNASDAQなどの米国主要株式市場の現物取引時間（立会時間：Regular Trading Hours）は、現地時間で**「9:30 〜 16:00」**です。これを日本時間に換算すると、**夏時間（サマータイム）**と**冬時間（標準時）**の2つの期間に分かれます。
          </p>

          {/* 時間比較表 */}
          <div style={{ overflowX: 'auto', marginBottom: '2rem', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.08)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '500px', fontSize: '0.95rem', fontFamily: 'var(--font-body)' }}>
              <thead>
                <tr style={{ backgroundColor: 'var(--bg-warm)', borderBottom: '2px solid rgba(0,0,0,0.08)' }}>
                  <th style={{ padding: '0.9rem 1rem', fontWeight: '800', color: 'var(--primary-dark)' }}>区分</th>
                  <th style={{ padding: '0.9rem 1rem', fontWeight: '800', color: 'var(--primary-dark)' }}>適用期間（米国現地基準）</th>
                  <th style={{ padding: '0.9rem 1rem', fontWeight: '800', color: 'var(--primary)' }}>日本時間での取引時間</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                  <td style={{ padding: '0.9rem 1rem', fontWeight: '700', backgroundColor: 'rgba(0,0,0,0.01)' }}>夏時間（サマータイム）</td>
                  <td style={{ padding: '0.9rem 1rem' }}>3月第2日曜日 〜 11月第1日曜日</td>
                  <td style={{ padding: '0.9rem 1rem', fontWeight: '800', color: 'var(--primary)' }}>22:30 〜 翌朝 5:00</td>
                </tr>
                <tr>
                  <td style={{ padding: '0.9rem 1rem', fontWeight: '700', backgroundColor: 'rgba(0,0,0,0.01)' }}>冬時間（標準時）</td>
                  <td style={{ padding: '0.9rem 1rem' }}>11月第1日曜日 〜 3月第2日曜日</td>
                  <td style={{ padding: '0.9rem 1rem', fontWeight: '800', color: 'var(--primary-dark)' }}>23:30 〜 翌朝 6:00</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2.5rem' }}>
            <div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.5rem' }}>
                ・なぜ「夏時間（サマータイム）」があるのか？
              </h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', lineHeight: '1.7', color: 'var(--text-main)', margin: 0 }}>
                欧米諸国では、日照時間が長い春から秋にかけて、時計の針を1時間進めて日中の明るい時間を有効活用する制度（サマータイム制度）が導入されています。そのため、米国株の取引時間も季節によってぴったり1時間シフトします。
              </p>
            </div>
            <div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.5rem' }}>
                ・切り替え時期に注意すべきポイント
              </h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', lineHeight: '1.7', color: 'var(--text-main)', margin: 0 }}>
                毎年**「3月の第2日曜日」**に夏時間へ切り替わり、**「11月の第1日曜日」**に冬時間へ戻ります。切り替え直後の週は「開場時間を1時間勘違いして注文を出していなかった」「経済指標の発表時間を間違えていた」というミスが起きやすいため注意しましょう。
              </p>
            </div>
          </div>

          {/* 2章: 時間外取引（プレ・マーケット＆アフター・マーケット） */}
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.3rem, 3.5vw, 1.6rem)', fontWeight: '900', color: 'var(--primary-dark)', borderBottom: '2px solid var(--bg-warm)', paddingBottom: '0.8rem', marginTop: '3rem', marginBottom: '1.5rem' }}>
            2. 時間外取引（プレ・マーケット＆アフター・マーケット）とは？
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
            米国株式市場には、通常取引（9:30〜16:00）の前後に**「時間外取引（Extended Hours Trading）」**と呼ばれる時間帯が存在します。
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.2rem', marginBottom: '2rem' }}>
            <div style={{ padding: '1.2rem 1.5rem', background: 'var(--bg-warm)', borderRadius: '12px', borderLeft: '4px solid var(--primary)' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.4rem' }}>
                ① プレ・マーケット（Pre-market Trading）
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', margin: 0, lineHeight: '1.7' }}>
                通常取引が始まる前の時間帯です（現地時間 4:00〜9:30）。<br />
                <strong>日本時間（夏時間）：17:00 〜 22:30</strong>（冬時間：18:00 〜 23:30）<br />
                日本の夕方から夜にかけての時間帯にあたり、市場開場前のニュースや材料を織り込んだ取引が行われます。
              </p>
            </div>

            <div style={{ padding: '1.2rem 1.5rem', background: 'var(--bg-warm)', borderRadius: '12px', borderLeft: '4px solid var(--primary-dark)' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.4rem' }}>
                ② アフター・マーケット（After-hours Trading）
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', margin: 0, lineHeight: '1.7' }}>
                通常取引が終了した直後の時間帯です（現地時間 16:00〜20:00）。<br />
                <strong>日本時間（夏時間）：5:00 〜 9:00</strong>（冬時間：6:00 〜 10:00）<br />
                米国の超一流企業（GAFAMやNVIDIAなど）の四半期決算発表は、取引終了後のこのアフター・マーケットの時間帯に発表されることが多く、株価が10%〜20%以上急乱高下することがよくあります。
              </p>
            </div>
          </div>

          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', lineHeight: '1.7', color: 'var(--text-main)', marginBottom: '2.5rem' }}>
            日本の主要ネット証券（SBI証券、楽天証券、マネックス証券）でも、プレ・マーケットおよびアフター・マーケットでの注文・取引に対応しています。時間外取引は流動性が低く値動きが荒くなりやすいため、初心者は無理に手を出さず「通常取引時間（立会時間）」での取引を基本とするのが安全です。
          </p>

          {/* 3章: 米国株式市場の休業日（祝日・ホリデー） */}
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.3rem, 3.5vw, 1.6rem)', fontWeight: '900', color: 'var(--primary-dark)', borderBottom: '2px solid var(--bg-warm)', paddingBottom: '0.8rem', marginTop: '3rem', marginBottom: '1.5rem' }}>
            3. 米国株式市場の年間休業日（祝日）と短縮取引
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
            日本の株式市場が日本の祝日に休場となるのと同様に、米国市場もアメリカの連邦祝日（Federal Holidays）は休場となります。
          </p>

          <div style={{ overflowX: 'auto', marginBottom: '2rem', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.08)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '480px', fontSize: '0.95rem', fontFamily: 'var(--font-body)' }}>
              <thead>
                <tr style={{ backgroundColor: 'var(--bg-warm)', borderBottom: '2px solid rgba(0,0,0,0.08)' }}>
                  <th style={{ padding: '0.8rem 1rem', fontWeight: '800' }}>米国祝日（休場日）</th>
                  <th style={{ padding: '0.8rem 1rem', fontWeight: '800' }}>時期の目安</th>
                  <th style={{ padding: '0.8rem 1rem', fontWeight: '800' }}>備考</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                  <td style={{ padding: '0.8rem 1rem', fontWeight: '700' }}>New Year&apos;s Day（元日）</td>
                  <td style={{ padding: '0.8rem 1rem' }}>1月1日</td>
                  <td style={{ padding: '0.8rem 1rem' }}>終日休場</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                  <td style={{ padding: '0.8rem 1rem', fontWeight: '700' }}>Martin Luther King Jr. Day</td>
                  <td style={{ padding: '0.8rem 1rem' }}>1月第3月曜日</td>
                  <td style={{ padding: '0.8rem 1rem' }}>キング牧師記念日</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                  <td style={{ padding: '0.8rem 1rem', fontWeight: '700' }}>Washington&apos;s Birthday</td>
                  <td style={{ padding: '0.8rem 1rem' }}>2月第3月曜日</td>
                  <td style={{ padding: '0.8rem 1rem' }}>大統領の日（プレジデンツデー）</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                  <td style={{ padding: '0.8rem 1rem', fontWeight: '700' }}>Good Friday（受難日）</td>
                  <td style={{ padding: '0.8rem 1rem' }}>3月〜4月の金曜日</td>
                  <td style={{ padding: '0.8rem 1rem' }}>復活祭（イースター）直前</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                  <td style={{ padding: '0.8rem 1rem', fontWeight: '700' }}>Memorial Day（戦没将兵追悼記念日）</td>
                  <td style={{ padding: '0.8rem 1rem' }}>5月最終月曜日</td>
                  <td style={{ padding: '0.8rem 1rem' }}>終日休場</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                  <td style={{ padding: '0.8rem 1rem', fontWeight: '700' }}>Juneteenth（奴隷解放記念日）</td>
                  <td style={{ padding: '0.8rem 1rem' }}>6月19日</td>
                  <td style={{ padding: '0.8rem 1rem' }}>終日休場</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                  <td style={{ padding: '0.8rem 1rem', fontWeight: '700' }}>Independence Day（独立記念日）</td>
                  <td style={{ padding: '0.8rem 1rem' }}>7月4日</td>
                  <td style={{ padding: '0.8rem 1rem' }}>前日は早期閉場（13:00終了）</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                  <td style={{ padding: '0.8rem 1rem', fontWeight: '700' }}>Labor Day（労働感謝の日）</td>
                  <td style={{ padding: '0.8rem 1rem' }}>9月第1月曜日</td>
                  <td style={{ padding: '0.8rem 1rem' }}>夏休みの終わりを意味する節目</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                  <td style={{ padding: '0.8rem 1rem', fontWeight: '700' }}>Thanksgiving Day（感謝祭）</td>
                  <td style={{ padding: '0.8rem 1rem' }}>11月第4木曜日</td>
                  <td style={{ padding: '0.8rem 1rem' }}>翌日金曜日は早期閉場（13:00終了）</td>
                </tr>
                <tr>
                  <td style={{ padding: '0.8rem 1rem', fontWeight: '700' }}>Christmas Day（クリスマス）</td>
                  <td style={{ padding: '0.8rem 1rem' }}>12月25日</td>
                  <td style={{ padding: '0.8rem 1rem' }}>前日イブは早期閉場（13:00終了）</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', lineHeight: '1.7', color: 'var(--text-muted)', marginBottom: '2.5rem' }}>
            ※独立記念日の前日、感謝祭の翌日（ブラックフライデー）、クリスマスイブなどは、現地時間 13:00（日本時間 翌1:00〜2:00頃）で終了する**「早期閉場（半日営業）」**となります。
          </p>

          {/* 4章: 日本の会社員に最適な注文ルーティン */}
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.3rem, 3.5vw, 1.6rem)', fontWeight: '900', color: 'var(--primary-dark)', borderBottom: '2px solid var(--bg-warm)', paddingBottom: '0.8rem', marginTop: '3rem', marginBottom: '1.5rem' }}>
            4. 昼間の予約注文を活用した会社員のおすすめルーティン
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
            「夜中まで起きて相場を監視しなければいけないの？」と心配する必要はまったくありません。国内の主要ネット証券（SBI証券、楽天証券等）を使えば、**日本の昼間の時間帯に夜間の注文を予約しておくこと**が可能です。
          </p>

          <div style={{ padding: '1.5rem', background: 'var(--bg-warm)', borderRadius: '16px', border: '1px solid var(--glass-border)', marginBottom: '2.5rem' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.8rem' }}>
              💡 夜更かし不要！おすすめの放置投資手順
            </h3>
            <ol style={{ paddingLeft: '1.2rem', margin: 0, color: 'var(--text-main)', fontSize: '0.95rem', display: 'flex', flexDirection: 'column', gap: '0.6rem', lineHeight: '1.7' }}>
              <li><strong>昼間（通勤時間や昼休み）</strong>: 欲しい銘柄を選び、指値（いくら以下で買いたいか）と購入株数を決定して注文を入れておく。</li>
              <li><strong>有効期間の設定</strong>: 注文の有効期限を「当日中」または「GTC（キャンセルするまで有効・最大期間指定）」に設定。</li>
              <li><strong>夜間（市場開場時）</strong>: 就寝している間に、指定した指値価格に達すれば自動的に約定（注文成立）。</li>
              <li><strong>翌朝（起床時）</strong>: スマホアプリの約定通知やメールで結果を確認するだけ。</li>
            </ol>
          </div>

          {/* 5章: 主要ネット証券での取扱時間と決済（円貨 vs 外貨）の比較 */}
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.3rem, 3.5vw, 1.6rem)', fontWeight: '900', color: 'var(--primary-dark)', borderBottom: '2px solid var(--bg-warm)', paddingBottom: '0.8rem', marginTop: '3rem', marginBottom: '1.5rem' }}>
            5. 国内主要ネット証券での取り扱いと決済タイミングの違い
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
            SBI証券、楽天証券、マネックス証券などの大手ネット証券会社では、基本的に全社で通常取引およびプレ・アフターマーケットの時間外取引に対応しています。
          </p>
          <div style={{ overflowX: 'auto', marginBottom: '2rem', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.08)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '500px', fontSize: '0.95rem', fontFamily: 'var(--font-body)' }}>
              <thead>
                <tr style={{ backgroundColor: 'var(--bg-warm)', borderBottom: '2px solid rgba(0,0,0,0.08)' }}>
                  <th style={{ padding: '0.8rem 1rem', fontWeight: '800' }}>証券会社</th>
                  <th style={{ padding: '0.8rem 1rem', fontWeight: '800' }}>通常取引の対応</th>
                  <th style={{ padding: '0.8rem 1rem', fontWeight: '800' }}>時間外取引（プレ・アフター）</th>
                  <th style={{ padding: '0.8rem 1rem', fontWeight: '800' }}>決済方法の選択</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                  <td style={{ padding: '0.8rem 1rem', fontWeight: '700' }}>SBI証券</td>
                  <td style={{ padding: '0.8rem 1rem' }}>完全対応（注文24時間受付）</td>
                  <td style={{ padding: '0.8rem 1rem' }}>プレ・アフターともに対応</td>
                  <td style={{ padding: '0.8rem 1rem' }}>円貨決済 / 外貨決済 両対応</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                  <td style={{ padding: '0.8rem 1rem', fontWeight: '700' }}>楽天証券</td>
                  <td style={{ padding: '0.8rem 1rem' }}>完全対応（注文24時間受付）</td>
                  <td style={{ padding: '0.8rem 1rem' }}>プレ・アフターともに対応</td>
                  <td style={{ padding: '0.8rem 1rem' }}>円貨決済 / 外貨決済 両対応</td>
                </tr>
                <tr>
                  <td style={{ padding: '0.8rem 1rem', fontWeight: '700' }}>マネックス証券</td>
                  <td style={{ padding: '0.8rem 1rem' }}>完全対応（注文24時間受付）</td>
                  <td style={{ padding: '0.8rem 1rem' }}>プレ・アフターともに対応</td>
                  <td style={{ padding: '0.8rem 1rem' }}>円貨決済 / 外貨決済 両対応</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', marginBottom: '2.5rem' }}>
            <div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.4rem' }}>
                ・円貨決済（日本円で直接注文）のタイミング
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', margin: 0, lineHeight: '1.7' }}>
                証券口座にある「日本円」をそのまま使って米国株を購入する方法です。注文時に自動で為替換算が行われるため手軽ですが、証券会社ごとに設定された為替スプレッド（為替手数料）が適用されます。初心者が最初に取引する際は円貨決済が簡単です。
              </p>
            </div>
            <div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.4rem' }}>
                ・外貨決済（事前に米ドルに換金）のタイミング
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', margin: 0, lineHeight: '1.7' }}>
                あらかじめ安い為替レートのタイミングで日本円を米ドルに両替（為替取引）しておき、保有している「米ドル」で株を購入する方法です。米国株を売却した代金を米ドルのまま保持し、次の銘柄の買い付けに再投資できるため、無駄な為替手数料の発生を抑えられます。
              </p>
            </div>
          </div>

          {/* 6章: 決算期・イベント時の取引時間帯における注意点 */}
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.3rem, 3.5vw, 1.6rem)', fontWeight: '900', color: 'var(--primary-dark)', borderBottom: '2px solid var(--bg-warm)', paddingBottom: '0.8rem', marginTop: '3rem', marginBottom: '1.5rem' }}>
            6. 決算発表シーズンと経済指標発表時の注意点
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
            取引時間に関連して、市場全体や特定銘柄が大きく動く特別な時間帯が存在します。
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', marginBottom: '2.5rem' }}>
            <div style={{ padding: '1.2rem 1.5rem', background: '#fff5f5', borderLeft: '4px solid #e53e3e', borderRadius: '8px' }}>
              <h3 style={{ fontSize: '1.05rem', fontWeight: '800', color: '#c53030', marginBottom: '0.4rem' }}>
                ① 四半期決算の発表（アフター・マーケット）
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', margin: 0, lineHeight: '1.7' }}>
                1月、4月、7月、10月の後半からスタートする米国の決算シーズンでは、市場取引終了後の16:00以降（日本時間 5:00/6:00〜）に一斉に業績が発表されます。事前予想（コンセンサス）を上回ったか下回ったかによって、翌日の取引開始時に株価が乱高下します。決算直前のハイリスクな成行注文は避けましょう。
              </p>
            </div>
            <div style={{ padding: '1.2rem 1.5rem', background: '#fff5f5', borderLeft: '4px solid #e53e3e', borderRadius: '8px' }}>
              <h3 style={{ fontSize: '1.05rem', fontWeight: '800', color: '#c53030', marginBottom: '0.4rem' }}>
                ② 米国経済指標の発表（開場前・日本時間 21:30 / 22:30）
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', margin: 0, lineHeight: '1.7' }}>
                米国CPI（消費者物価指数）や雇用統計、FOMC（連邦公開市場委員会）の金利発表などの超重要指標は、通常取引の直前や夜中に公表されます。これらの発表直後は相場全体が一時的に大きく荒れることがあるため、長期投資家は一喜一憂せず静観するのが正解です。
              </p>
            </div>
          </div>

          {/* 5章: 取引時間に関するFAQ */}
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.3rem, 3.5vw, 1.6rem)', fontWeight: '900', color: 'var(--primary-dark)', borderBottom: '2px solid var(--bg-warm)', paddingBottom: '0.8rem', marginTop: '3rem', marginBottom: '1.5rem' }}>
            5. 米国株の取引時間に関するよくある質問 (FAQ)
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginBottom: '3rem' }}>
            <div>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.5rem' }}>
                Q. 米国株の取引時間は日本時間の何時から何時までですか？
              </h4>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', lineHeight: '1.7', color: 'var(--text-muted)', margin: 0 }}>
                A. 夏時間（サマータイム：3月第2日曜日〜11月第1日曜日）は日本時間の「22:30〜翌5:00」、冬時間（標準時：11月第1日曜日〜3月第2日曜日）は日本時間の「23:30〜翌6:00」です。日本の夜間に開場するため、会社員の方でも仕事が終わった後にリアルタイムで取引できます。
              </p>
            </div>
            <div>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.5rem' }}>
                Q. 日本の昼間（日中）に米国株の注文を出しておくことはできますか？
              </h4>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', lineHeight: '1.7', color: 'var(--text-muted)', margin: 0 }}>
                A. はい、可能です。SBI証券や楽天証券などの主要ネット証券を使えば、日本の昼間であっても事前に指値注文や成行注文を出しておくことができます。出した注文は、夜間に米国市場が開場したタイミングで自動的に執行されます。
              </p>
            </div>
            <div>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.5rem' }}>
                Q. 米国株の「時間外取引（プレ・マーケット／アフター・マーケット）」とは何ですか？
              </h4>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', lineHeight: '1.7', color: 'var(--text-muted)', margin: 0 }}>
                A. 通常の立会時間の前後に行われる取引のことです。通常の開場前に行われる「プレ・マーケット」と、閉場後に行われる「アフター・マーケット」があります。米国企業の決算発表は多くが時間外に行われるため、この時間帯に株価が急変動することがあります。
              </p>
            </div>
            <div>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.5rem' }}>
                Q. 夏時間（サマータイム）と冬時間はいつ切り替わりますか？
              </h4>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', lineHeight: '1.7', color: 'var(--text-muted)', margin: 0 }}>
                A. 夏時間（サマータイム）への切り替えは「3月の第2日曜日」、冬時間（標準時）への切り替えは「11月の第1日曜日」に行われます。切り替え時期は開場時間が1時間前後するため、取引の際には注意が必要です。
              </p>
            </div>
            <div>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.5rem' }}>
                Q. 米国株式市場は土日やアメリカの祝日も開いていますか？
              </h4>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', lineHeight: '1.7', color: 'var(--text-muted)', margin: 0 }}>
                A. いいえ、土曜日・日曜日およびアメリカの祝日（ホリデー）は休場となります。主な祝日には元日、プレジデンツデー、独立記念日、レイバーデー、感謝祭、クリスマスなどがあります。また、感謝祭の翌日など半日取引（13:00早期閉場）となる日もあります。
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
              取引時間は分かったけれど、<br />具体的な注文画面の操作に不安はありませんか？
            </h2>

            <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(0.95rem, 2.5vw, 1.1rem)', lineHeight: '1.8', color: 'var(--text-muted)', marginBottom: '1rem' }}>
              口座の選び方、指値と成行の使い分け、<br className="sp-hide" />
              最初に買うべき優良銘柄の選び方。
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
