import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, CheckCircle2, ShieldCheck, DollarSign, BookOpen, Layers, Award, HelpCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: '株式投資の始め方完全ガイド！初心者向けの4ステップと失敗しないやり方を解説 | 東京米国株クラブ',
  description: '初心者が失敗せずに株式投資を始めるための手順を徹底解説。目標設定、ネット証券の選び方（SBI証券・楽天証券）、少額投資（100円積立・1株購入）の活用法、長期・分散・積立の3原則まで網羅。',
  alternates: {
    canonical: 'https://www.tokyo-us-stock.com/knowledge/how-to-start',
  },
};

export default function HowToStartPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: '株式投資はいくらから始められますか？元手はいくら必要ですか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'ネット証券（SBI証券や楽天証券など）を利用すれば、投資信託の積立は「100円」からスタートできます。また、米国株も1株単位（数百円〜数万円）、日本株の単元未満株（かぶミニ等）も1株から購入可能です。大金を用意しなくても、お小遣いや余剰資金の範囲で手軽に始められます。',
        },
      },
      {
        '@type': 'Question',
        name: '初心者はまず何を買うのが一番安全ですか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '個別の企業を買うのではなく、世界や米国の代表的企業数百〜数千社に丸ごと分散投資できる「インデックスファンド（S&P500や全世界株式・オルカンなど）」を毎月積立購入することからスタートするのが最も推奨されます。1社の倒産リスクを回避でき、平均点以上の良好な成績が得られます。',
        },
      },
      {
        '@type': 'Question',
        name: '株式投資を始めると、仕事中も株価が気になりませんか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '毎月自動的にクレジットカードなどで積み立てる設定（クレカ積立）にしておけば、日々の株価をチェックする必要は一切ありません。長期投資ではむしろ「画面を見ずに放置する」ほうが高い成果を出せることが証明されています。',
        },
      },
      {
        '@type': 'Question',
        name: '銀行の窓口で投資の相談をしても大丈夫ですか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '銀行や対面証券会社の窓口相談はおすすめできません。人件費が乗った購入手数料の高い商品や、金融機関側の利益率が高い「アクティブファンド」をおすすめされるケースが多いためです。手数料が無料で優良商品が揃っているネット証券を自分で開設するのがベストです。',
        },
      },
      {
        '@type': 'Question',
        name: '投資を始める前の準備として何をすべきですか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'まず突然の病気や失業に備えるための「生活防衛資金（生活費の6ヶ月〜1年分の現金）」を銀行に確保することが第一歩です。その上で、当面使う予定のない完全な「余剰資金」だけを投資に回すことで、暴落時にも焦らずに長期運用を継続できます。',
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
            株式投資の始め方完全ガイド！初心者向けの4ステップと失敗しないやり方
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section style={{ background: 'white', padding: 'clamp(3rem, 8vw, 5rem) 0' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'left' }}>

          {/* プロローグ */}
          <div style={{ marginBottom: '3rem' }}>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
              「将来のために投資を始めてみたいけれど、具体的に何から手を付ければいいのか分からない」「損をするのが怖くて一歩が踏み出せない」と感じていませんか？
            </p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
              かつての投資は「数百万円の大金を持って証券会社に通うプロのもの」でしたが、現代の株式投資は**「スマホで100円から安全に始められる身近な資産形成ツール」**へと劇的に進化しています。
            </p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: 0 }}>
              本ページでは、投資初心者の方が最初の一歩で躓かないよう、準備から証券会社選び、商品の購入手順、リスクを抑える3原則までを分かりやすく体系的に解説します。
            </p>
          </div>

          {/* 1章: 株式投資を始める4ステップ（全体像） */}
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.3rem, 3.5vw, 1.6rem)', fontWeight: '900', color: 'var(--primary-dark)', borderBottom: '2px solid var(--bg-warm)', paddingBottom: '0.8rem', marginTop: '3rem', marginBottom: '1.5rem' }}>
            1. 株式投資を始める4つのステップ（全体像）
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
            株式投資をスタートするまでのステップは非常にシンプルです。以下の4つの手順に従って進めましょう。
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2.5rem' }}>
            <div style={{ padding: '1.2rem 1.5rem', background: 'var(--bg-warm)', borderRadius: '16px', borderLeft: '5px solid var(--primary)' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.4rem' }}>
                STEP 1：投資の「目的」と「ゴール」を明確にする
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', margin: 0, lineHeight: '1.7' }}>
                何のために資産を増やすのか（老後資金、子どもの教育費、住宅頭金、不労所得の確保など）を整理します。目的によって「20年以上の長期投資」なのか「毎月配当を受け取る投資」なのか、とるべき戦略が決まります。
              </p>
            </div>

            <div style={{ padding: '1.2rem 1.5rem', background: 'var(--bg-warm)', borderRadius: '16px', borderLeft: '5px solid var(--primary)' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.4rem' }}>
                STEP 2：大手ネット証券で口座を開設する（無料）
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', margin: 0, lineHeight: '1.7' }}>
                SBI証券や楽天証券などのネット証券口座を開設します。店舗型銀行や対面証券は手数料が高いため避けましょう。同時に非課税制度である「NISA口座」の開設もセットで申し込みます。
              </p>
            </div>

            <div style={{ padding: '1.2rem 1.5rem', background: 'var(--bg-warm)', borderRadius: '16px', borderLeft: '5px solid var(--primary)' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.4rem' }}>
                STEP 3：生活防衛資金を確保し、余剰資金を入金する
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', margin: 0, lineHeight: '1.7' }}>
                全財産を投資に回すのは厳禁です。生活費の6ヶ月〜1年分を銀行口座に「無リスク資産（生活防衛資金）」として残し、当面使わない完全な余剰資金のみを証券口座へ移動します。
              </p>
            </div>

            <div style={{ padding: '1.2rem 1.5rem', background: 'var(--bg-warm)', borderRadius: '16px', borderLeft: '5px solid var(--primary)' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.4rem' }}>
                STEP 4：少額の自動積立・1株購入からスタート
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', margin: 0, lineHeight: '1.7' }}>
                最初は月数千円〜1万円程度の「インデックス投資信託（S&P500やオルカン）」のクレカ積立や、米国株の1株購入から無理なくスタートし、市場の値動きに慣れていきましょう。
              </p>
            </div>
          </div>

          {/* 2章: ネット証券会社の選び方 */}
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.3rem, 3.5vw, 1.6rem)', fontWeight: '900', color: 'var(--primary-dark)', borderBottom: '2px solid var(--bg-warm)', paddingBottom: '0.8rem', marginTop: '3rem', marginBottom: '1.5rem' }}>
            2. 初心者におすすめの証券会社選び（SBI証券 vs 楽天証券）
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
            証券会社選びで迷ったら、国内の2大ネット証券である**「SBI証券」**か**「楽天証券」**を選んでおけば間違いありません。どちらも投資信託の買付手数料が完全無料で、NISA口座での売買手数料も0円です。
          </p>

          <div style={{ overflowX: 'auto', marginBottom: '2.5rem', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.08)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '500px', fontSize: '0.95rem', fontFamily: 'var(--font-body)' }}>
              <thead>
                <tr style={{ backgroundColor: 'var(--bg-warm)', borderBottom: '2px solid rgba(0,0,0,0.08)' }}>
                  <th style={{ padding: '0.8rem 1rem', fontWeight: '800' }}>比較項目</th>
                  <th style={{ padding: '0.8rem 1rem', fontWeight: '800', color: 'var(--primary)' }}>SBI証券</th>
                  <th style={{ padding: '0.8rem 1rem', fontWeight: '800', color: 'var(--primary-dark)' }}>楽天証券</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                  <td style={{ padding: '0.8rem 1rem', fontWeight: '700' }}>口座数・実績</td>
                  <td style={{ padding: '0.8rem 1rem', fontWeight: '700', color: 'var(--primary)' }}>国内No.1（口座数1,200万超）</td>
                  <td style={{ padding: '0.8rem 1rem' }}>国内No.2（若年層・初心者に大人気）</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                  <td style={{ padding: '0.8rem 1rem', fontWeight: '700' }}>クレカ積立ポイント</td>
                  <td style={{ padding: '0.8rem 1rem' }}>三井住友カード（Vポイント）</td>
                  <td style={{ padding: '0.8rem 1rem' }}>楽天カード（楽天ポイント）</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                  <td style={{ padding: '0.8rem 1rem', fontWeight: '700' }}>米国株・外国株</td>
                  <td style={{ padding: '0.8rem 1rem', fontWeight: '700', color: 'var(--primary)' }}>取扱数トップ・為替手数料が安い</td>
                  <td style={{ padding: '0.8rem 1rem' }}>取扱数豊富・アプリの操作性が非常に良い</td>
                </tr>
                <tr>
                  <td style={{ padding: '0.8rem 1rem', fontWeight: '700' }}>おすすめの人</td>
                  <td style={{ padding: '0.8rem 1rem' }}>三井住友カードユーザー、米国株を本格的にやりたい方</td>
                  <td style={{ padding: '0.8rem 1rem' }}>楽天経済圏ユーザー、見やすい画面で手軽にやりたい方</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* 3章: 投資手法の選び方（投信 vs ETF vs 個別株） */}
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.3rem, 3.5vw, 1.6rem)', fontWeight: '900', color: 'var(--primary-dark)', borderBottom: '2px solid var(--bg-warm)', paddingBottom: '0.8rem', marginTop: '3rem', marginBottom: '1.5rem' }}>
            3. 投資対象の選び方（投資信託 vs ETF vs 個別株）
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
            株式投資と一口に言っても、買う商品によってリスクと手軽さが大きく異なります。自分の知識と目的に合わせて選びましょう。
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.2rem', marginBottom: '2.5rem' }}>
            <div style={{ padding: '1.2rem 1.5rem', background: 'var(--bg-warm)', borderRadius: '12px', borderLeft: '4px solid var(--primary)' }}>
              <h3 style={{ fontSize: '1.05rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.4rem' }}>
                ① インデックス投資信託【初心者向け度：★★★★★】
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', margin: 0, lineHeight: '1.7' }}>
                「S&P500」や「全世界株式（オルカン）」など、指数全体に丸ごと自動分散投資するファンドです。100円から自動積立可能で、銘柄の分析や管理の手間が一切かかりません。初心者の最初の土台として最適です。
              </p>
            </div>

            <div style={{ padding: '1.2rem 1.5rem', background: 'var(--bg-warm)', borderRadius: '12px', borderLeft: '4px solid var(--primary)' }}>
              <h3 style={{ fontSize: '1.05rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.4rem' }}>
                ② ETF（上場投資信託・米国高配当株等）【初心者向け度：★★★★☆】
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', margin: 0, lineHeight: '1.7' }}>
                株式市場でリアルタイムに売買できる投資信託です。「VYM」や「HDV」などの米国高配当ETFを買えば、数百社に分散しながら年4回の非課税配当金を得ることができます。
              </p>
            </div>

            <div style={{ padding: '1.2rem 1.5rem', background: 'var(--bg-warm)', borderRadius: '12px', borderLeft: '4px solid var(--primary-dark)' }}>
              <h3 style={{ fontSize: '1.05rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.4rem' }}>
                ③ 個別株投資（米国株・日本株）【初心者向け度：★★★☆☆】
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', margin: 0, lineHeight: '1.7' }}>
                アップルやコカ・コーラなど特定1社の株を買う方法です。企業分析（業績や財務）が必要ですが、株価の大きな上昇や配当金を直接享受できる魅力があります。1株単位で少額から始めるのが鉄則です。
              </p>
            </div>
          </div>

          {/* 4章: 少額投資のメリットとドルコスト平均法 */}
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.3rem, 3.5vw, 1.6rem)', fontWeight: '900', color: 'var(--primary-dark)', borderBottom: '2px solid var(--bg-warm)', paddingBottom: '0.8rem', marginTop: '3rem', marginBottom: '1.5rem' }}>
            4. 少額投資のメリットとドル・コスト平均法
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
            初心者が投資で大失敗を避けるための最良の武器が**「少額からの積立投資（ドル・コスト平均法）」**です。
          </p>

          <div style={{ padding: '1.2rem 1.5rem', border: '1px solid rgba(0,0,0,0.08)', borderRadius: '12px', background: 'white', marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.05rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.5rem' }}>
              💡 ドル・コスト平均法（定額購入）の3大メリット
            </h3>
            <ul style={{ paddingLeft: '1.2rem', margin: 0, color: 'var(--text-main)', fontSize: '0.95rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', lineHeight: '1.7' }}>
              <li><strong>高値掴みを防げる</strong>: 株価が高い時は少なく買え、株価が安く暴落した時には多くの量を自動的に買い込める。</li>
              <li><strong>平均取得単価を自然に下げられる</strong>: 相場の波を味方にして、一括購入よりも安全に運用できる。</li>
              <li><strong>感情を排除できる</strong>: 「買い時が分からない」というストレスから解放され、設定した後は放置できる。</li>
            </ul>
          </div>

          {/* 5章: 失敗しないための3つの鉄則 */}
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.3rem, 3.5vw, 1.6rem)', fontWeight: '900', color: 'var(--primary-dark)', borderBottom: '2px solid var(--bg-warm)', paddingBottom: '0.8rem', marginTop: '3rem', marginBottom: '1.5rem' }}>
            5. 株式投資で失敗しないための3つの鉄則
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
            ノーベル賞を受賞した経済学の研究でも証明されている、資産形成を確実に成功させるための3原則を心に刻みましょう。
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.2rem', marginBottom: '2.5rem' }}>
            <div style={{ padding: '1.2rem 1.5rem', background: '#f8fafc', borderRadius: '12px', borderLeft: '4px solid var(--primary)' }}>
              <h3 style={{ fontSize: '1.05rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.3rem' }}>
                原則①：長期保有（15年以上のスパンで構える）
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', margin: 0, lineHeight: '1.7' }}>
                短期的な1〜2年では暴落でマイナスになることがあっても、世界市場（S&P500等）に15年以上投資し続けた過去のデータでは、元本割れした確率は「ゼロ」です。時間（複利）を味方につけましょう。
              </p>
            </div>
            <div style={{ padding: '1.2rem 1.5rem', background: '#f8fafc', borderRadius: '12px', borderLeft: '4px solid var(--primary)' }}>
              <h3 style={{ fontSize: '1.05rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.3rem' }}>
                原則②：分散投資（卵を一つのカゴに盛るな）
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', margin: 0, lineHeight: '1.7' }}>
                1つの企業や1つの国だけに資金を集中させると、その倒産や景気後退で致命傷を負います。全世界や全米の数百〜数千社に自動分散できるファンドを活用しましょう。
              </p>
            </div>
            <div style={{ padding: '1.2rem 1.5rem', background: '#f8fafc', borderRadius: '12px', borderLeft: '4px solid var(--primary)' }}>
              <h3 style={{ fontSize: '1.05rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.3rem' }}>
                原則③：毎月定額の積立（余剰資金で淡々と）
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', margin: 0, lineHeight: '1.7' }}>
                相場の好調時も暴落時も、感情に左右されずに毎月定額を積み立て続けることが、最も高いリターンを生み出す黄金ルールです。
              </p>
            </div>
          </div>

          {/* 6章: 初心者が直面する3つの心理的障壁と克服法 */}
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.3rem, 3.5vw, 1.6rem)', fontWeight: '900', color: 'var(--primary-dark)', borderBottom: '2px solid var(--bg-warm)', paddingBottom: '0.8rem', marginTop: '3rem', marginBottom: '1.5rem' }}>
            6. 初心者が直面する「3つの不安」と克服メンタル
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
            「投資を始めたいけれど、どうしても不安で動けない」という方が感じる典型的な心理的ハードルと、その解決策です。
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', marginBottom: '2.5rem' }}>
            <div style={{ padding: '1.2rem 1.5rem', border: '1px solid rgba(0,0,0,0.08)', borderRadius: '12px', background: 'white' }}>
              <h3 style={{ fontSize: '1.05rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.4rem' }}>
                不安①：「損をするのが怖い（損失回避バイアス）」
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', margin: 0, lineHeight: '1.7' }}>
                人間は「得をした喜び」よりも「損をした痛み」を2倍強く感じる生き物です。解決策は、最初から大きなお金を入れず「月1,000円〜5,000円」程度の失っても生活に支障のない超少額から始め、値動きに対する耐性を徐々に作ることです。
              </p>
            </div>

            <div style={{ padding: '1.2rem 1.5rem', border: '1px solid rgba(0,0,0,0.08)', borderRadius: '12px', background: 'white' }}>
              <h3 style={{ fontSize: '1.05rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.4rem' }}>
                不安②：「完璧に勉強してから始めようとして永遠に始められない」
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', margin: 0, lineHeight: '1.7' }}>
                本やネットでどれだけ知識を詰め込んでも、実際に1口も買っていなければ投資は上達しません。100円でも実際に自分のお金を投じることで、経済ニュースや株価への関心が飛躍的に高まり、体験を通して最高の学びが得られます。
              </p>
            </div>

            <div style={{ padding: '1.2rem 1.5rem', border: '1px solid rgba(0,0,0,0.08)', borderRadius: '12px', background: 'white' }}>
              <h3 style={{ fontSize: '1.05rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.4rem' }}>
                不安③：「銘柄が多くてどれを選べばいいか分からない」
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', margin: 0, lineHeight: '1.7' }}>
                最初から難解な財務諸表を読んで個別株を選ぶ必要は一切ありません。世界中の専門家が推奨する「全世界株式（オルカン）」または「S&P500」のインデックスファンドを1本選ぶだけで、世界中のトップ企業へ完璧に投資が完了します。
              </p>
            </div>
          </div>

          {/* 7章: 年代・ライフスタイル別のおすすめスタート戦略 */}
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.3rem, 3.5vw, 1.6rem)', fontWeight: '900', color: 'var(--primary-dark)', borderBottom: '2px solid var(--bg-warm)', paddingBottom: '0.8rem', marginTop: '3rem', marginBottom: '1.5rem' }}>
            7. 【タイプ別】自分に合ったおすすめの始め方アプローチ
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
            ライフスタイルや職業によって、無理なく続けられる投資スタイルは異なります。
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', marginBottom: '2.5rem' }}>
            <div style={{ padding: '1.2rem 1.5rem', background: 'var(--bg-warm)', borderRadius: '12px', borderLeft: '4px solid var(--primary)' }}>
              <h3 style={{ fontSize: '1.05rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.4rem' }}>
                ・会社員・公務員の方：完全全自動の「クレカ積立」
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', margin: 0, lineHeight: '1.7' }}>
                日中仕事で忙しい会社員の方は、クレジットカードで毎月給料日に自動買付される「クレカ積立（月5万〜10万円）」を設定し、NISAつみたて投資枠をほったらかし運用するのが最も賢い方法です。毎月ポイントも自動で貯まります。
              </p>
            </div>

            <div style={{ padding: '1.2rem 1.5rem', background: 'var(--bg-warm)', borderRadius: '12px', borderLeft: '4px solid var(--primary)' }}>
              <h3 style={{ fontSize: '1.05rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.4rem' }}>
                ・主婦・主夫・ご家庭をお持ちの方：非課税での配当金（お小遣い）狙い
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', margin: 0, lineHeight: '1.7' }}>
                家計のやりくりや教育費準備を兼ねる場合、NISA成長投資枠で米国高配当株ETF（VYM等）を買い足し、年4回の配当金を家計の足しや家族のレジャー費に充てる「実感が湧きやすい投資」が人気です。
              </p>
            </div>

            <div style={{ padding: '1.2rem 1.5rem', background: 'var(--bg-warm)', borderRadius: '12px', borderLeft: '4px solid var(--primary)' }}>
              <h3 style={{ fontSize: '1.05rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.4rem' }}>
                ・20代・若手社会人・学生の方：1,000円からの超少額投資体験
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', margin: 0, lineHeight: '1.7' }}>
                若い世代最大の武器は「時間」です。月1,000円や少額のポイント投資から始めて値動きに慣れておけば、将来収入が増えた時にスムーズに本格運用へ移行できます。
              </p>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginBottom: '3rem' }}>
            <div>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.5rem' }}>
                Q. 株式投資はいくらから始められますか？元手はいくら必要ですか？
              </h4>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', lineHeight: '1.7', color: 'var(--text-muted)', margin: 0 }}>
                A. ネット証券（SBI証券や楽天証券など）を利用すれば、投資信託の積立は「100円」からスタートできます。また、米国株も1株単位（数百円〜数万円）、日本株の単元未満株（かぶミニ等）も1株から購入可能です。大金を用意しなくても、お小遣いや余剰資金の範囲で手軽に始められます。
              </p>
            </div>
            <div>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.5rem' }}>
                Q. 初心者はまず何を買うのが一番安全ですか？
              </h4>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', lineHeight: '1.7', color: 'var(--text-muted)', margin: 0 }}>
                A. 個別の企業を買うのではなく、世界や米国の代表的企業数百〜数千社に丸ごと分散投資できる「インデックスファンド（S&P500や全世界株式・オルカンなど）」を毎月積立購入することからスタートするのが最も推奨されます。1社の倒産リスクを回避でき、平均点以上の良好な成績が得られます。
              </p>
            </div>
            <div>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.5rem' }}>
                Q. 株式投資を始めると、仕事中も株価が気になりませんか？
              </h4>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', lineHeight: '1.7', color: 'var(--text-muted)', margin: 0 }}>
                A. 毎月自動的にクレジットカードなどで積み立てる設定（クレカ積立）にしておけば、日々の株価をチェックする必要は一切ありません。長期投資ではむしろ「画面を見ずに放置する」ほうが高い成果を出せることが証明されています。
              </p>
            </div>
            <div>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.5rem' }}>
                Q. 銀行の窓口で投資の相談をしても大丈夫ですか？
              </h4>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', lineHeight: '1.7', color: 'var(--text-muted)', margin: 0 }}>
                A. 銀行や対面証券会社の窓口相談はおすすめできません。人件費が乗った購入手数料の高い商品や、金融機関側の利益率が高い「アクティブファンド」をおすすめされるケースが多いためです。手数料が無料で優良商品が揃っているネット証券を自分で開設するのがベストです。
              </p>
            </div>
            <div>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.5rem' }}>
                Q. 投資を始める前の準備として何をすべきですか？
              </h4>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', lineHeight: '1.7', color: 'var(--text-muted)', margin: 0 }}>
                A. まず突然の病気や失業に備えるための「生活防衛資金（生活費の6ヶ月〜1年分の現金）」を銀行に確保することが第一歩です。その上で、当面使う予定のない完全な「余剰資金」だけを投資に回すことで、暴落時にも焦らずに長期運用を継続できます。
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
              始め方は分かったけれど、<br />一人で口座設定や注文をするのに不安はありませんか？
            </h2>

            <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(0.95rem, 2.5vw, 1.1rem)', lineHeight: '1.8', color: 'var(--text-muted)', marginBottom: '1rem' }}>
              自分に合った証券会社の選び方、つみたて設定の操作、<br className="sp-hide" />
              最初にいくらからスタートするのが適切か。
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
