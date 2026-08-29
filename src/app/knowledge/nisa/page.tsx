import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'NISA（ニーサ）とは？基本から新制度の活用法まで解説 | 東京 米国株 セミナー - 東京米国株クラブ',
  description: '東京の初心者向け米国株セミナー「東京米国株クラブ」が、NISA（少額投資非課税制度）の基本仕組みやメリットを3,000字以上で徹底解説。口座開設手順やつみたて枠・成長投資枠の賢い選び方、出口戦略まで網羅。',
  alternates: {
    canonical: 'https://www.tokyo-us-stock.com/knowledge/nisa',
  },
};

export default function NisaKnowledgePage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'NISA口座からのお金はいつでも引き出せますか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'はい、NISA（ニーサ）はiDeCo（イデコ）などの年金制度とは異なり、ライフイベントや急な出費に合わせていつでも保有している商品を売却し、現金として引き出すことができます。売却した分の非課税枠は翌年に再利用（復活）できるため、非常に柔軟な資産形成が可能です。',
        },
      },
      {
        '@type': 'Question',
        name: '新NISAのつみたて投資枠と成長投資枠は併用できますか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'はい、新NISA制度では「つみたて投資枠」と「成長投資枠」を同じ金融機関で併用して利用することができます。年間最大360万円（つみたて投資枠120万円、成長投資枠240万円）の投資が可能で、両方を組み合わせることで、長期積立と個別株投資のハイブリッド運用が可能です。',
        },
      },
      {
        '@type': 'Question',
        name: 'NISAを始めるにはどの証券会社がおすすめですか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '手数料の安さや投資商品の豊富さ、クレジットカード決済によるポイント還元率などを総合的に判断すると、「SBI証券」または「楽天証券」のネット証券大手のどちらかを選ぶのが強く推奨されます。',
        },
      },
      {
        '@type': 'Question',
        name: '株価が暴落したとき、NISAの商品はお守りすべきですか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '長期の資産形成を前提とする場合、一時的な暴落局面で慌てて売却（損切り）することは避けるべきです。世界の市場は長期的には右肩上がりに成長してきた歴史があります。積立投資をそのまま継続することで、平均購入単価を下げる「ドル・コスト平均法」の効果が最大化され、将来的な回復期に大きなリターンを得やすくなります。',
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
          <Link href="/" className="btn-link" style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', fontFamily: 'var(--font-body)', fontWeight: '700' }}>
            <ArrowLeft size={18} style={{ marginRight: '0.5rem' }} /> トップへ戻る
          </Link>
          <h1 className="post-title" style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.8rem, 6vw, 2.8rem)', fontWeight: '900', textAlign: 'left', marginLeft: '0', marginRight: 'auto', maxWidth: 'none', marginBottom: '0.5rem', color: 'var(--primary-dark)', lineHeight: '1.3' }}>
            NISA（ニーサ）とは？基本から活用方法まで徹底解説
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section style={{ background: 'white', padding: 'clamp(3rem, 8vw, 5rem) 0' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'left' }}>

          {/* プロローグ */}
          <div style={{ marginBottom: '3rem' }}>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
              現在、物価の上昇（インフレ）や金利の低迷により、「銀行にお金を預けておくだけでは資産が目減りしてしまう」という現実に直面しています。その中で、国が個人の資産形成を強力に後押しするために用意した制度が<strong>NISA（少額投資非課税制度）</strong>です。
            </p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
              通常、株式投資や投資信託などで出た利益には<strong>約20.315%の税金</strong>がかかります。例えば、せっかく投資で100万円 of 利益が出ても、約20万円が税金として差し引かれて手元には80万円しか残りません。しかし、NISA口座内で投資を行えば、<strong>得られた利益にかかる税金が完全にゼロ（非課税）</strong>になります。
            </p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '0' }}>
              将来の老後資金や教育資金、結婚資金などを堅実に増やしていくための最も基本的かつ超強力な「ベース（土台）」となる仕組みです。本ページでは、制度の基本から新NISAの仕組み、始め方、出口戦略まで詳しく解説します。
            </p>
          </div>

          {/* 1章: NISAの基本仕組みと旧制度との違い */}
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.3rem, 3.5vw, 1.6rem)', fontWeight: '900', color: 'var(--primary-dark)', borderBottom: '2px solid var(--bg-warm)', paddingBottom: '0.8rem', marginTop: '3rem', marginBottom: '1.5rem' }}>
            1. 新NISA制度の5つの重要ポイント
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
            2024年からスタートした「新NISA」は、従来のNISAに比べて個人の投資家にとって劇的に有利な条件へとアップデートされました。主な特徴は以下の5点です。
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2.5rem' }}>
            <div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.15rem', fontWeight: '800', color: 'var(--primary)', marginBottom: '0.5rem' }}>
                ・非課税保有期間が「無期限化」
              </h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', lineHeight: '1.7', color: 'var(--text-main)', margin: 0 }}>
                旧制度では一般NISAが5年、つみたてNISAが20年という非課税期間の制限がありましたが、新NISAではこれが<strong>一生涯（無期限）</strong>になりました。何十年先でも税金を気にせず長期複利運用を続けることができます。
              </p>
            </div>
            <div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.15rem', fontWeight: '800', color: 'var(--primary)', marginBottom: '0.5rem' }}>
                ・口座開設期間の恒久化
              </h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', lineHeight: '1.7', color: 'var(--text-main)', margin: 0 }}>
                いつでも好きなタイミングでNISA口座を開設し、非課税での投資をスタートできるようになりました。焦る必要はありません。
              </p>
            </div>
            <div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.15rem', fontWeight: '800', color: 'var(--primary)', marginBottom: '0.5rem' }}>
                ・「つみたて枠」と「成長投資枠」の併用が可能
              </h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', lineHeight: '1.7', color: 'var(--text-main)', margin: 0 }}>
                旧制度ではどちらか一方の選択制でしたが、新制度では一つの口座で両方の枠を同時に使うことができます。積立投資をメインに置きつつ、個別株へのスポット購入を一部で行うといった多様な運用が可能です。
              </p>
            </div>
            <div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.15rem', fontWeight: '800', color: 'var(--primary)', marginBottom: '0.5rem' }}>
                ・年間投資上限枠が最大360万円に拡大
              </h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', lineHeight: '1.7', color: 'var(--text-main)', margin: 0 }}>
                年間で投資できる金額が、つみたて投資枠120万円、成長投資枠240万円の合計最大<strong>360万円</strong>まで大幅に拡大されました。
              </p>
            </div>
            <div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.15rem', fontWeight: '800', color: 'var(--primary)', marginBottom: '0.5rem' }}>
                ・生涯非課税限度額が最大1,800万円
              </h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', lineHeight: '1.7', color: 'var(--text-main)', margin: 0 }}>
                一人あたり、投資元本ベースで合計<strong>1,800万円</strong>（うち成長投資枠は1,200万円まで）まで非課税で運用できます。また、商品を売却した場合、その翌年に売却した商品の元本分の枠が空き、<strong>再利用が可能</strong>になるため非常に使いやすくなっています。
              </p>
            </div>
          </div>
          <div className="knowledge-banner glass-card" style={{ padding: '1.5rem', background: 'var(--bg-warm)', borderRadius: '16px', border: '1px solid var(--glass-border)', marginBottom: '3rem' }}>
            <span className="featured-tag" style={{ margin: 0 }}>もっと知りたい</span>
            <p style={{ fontSize: '0.95rem', fontWeight: '800', margin: '0.5rem 0' }}>
              新NISAの基本ルールや、旧NISAとの詳しい対比表などはコラム記事でも徹底解説しています。
            </p>
            <Link href="/blog/nisa-series-01" style={{ fontSize: '0.9rem', fontWeight: '800', color: 'var(--primary)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
              新NISAとは何か？旧NISAとの違いを徹底解説 <ArrowRight size={14} />
            </Link>
          </div>

          {/* 2章: 口座開設手順とネット証券の選び方 */}
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.3rem, 3.5vw, 1.6rem)', fontWeight: '900', color: 'var(--primary-dark)', borderBottom: '2px solid var(--bg-warm)', paddingBottom: '0.8rem', marginTop: '3rem', marginBottom: '1.5rem' }}>
            2. NISAの始め方とおすすめの証券会社
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
            NISA口座は<strong>一人につき1つ</strong>しか所有できません。また、取引にかかるコスト（手数料）や取り扱っている商品数、ポイント還元の条件などは金融機関によって大きく異なります。
          </p>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
            結論から言えば、窓口相談がある銀行や対面の証券会社は手数料が高く、販売している商品が限られているためおすすめできません。投資手数料が完全に無料で、クレジットカード積立でポイントを最も効率よく貯められる<strong>「SBI証券」</strong>または<strong>「楽天証券」</strong>のネット証券大手から選ぶのが基本です。
          </p>
          <div style={{ marginBottom: '2.5rem' }}>
            <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.5rem' }}>
              💡 NISA口座を開設する3ステップ
            </h4>
            <ol style={{ paddingLeft: '1.5rem', lineHeight: '1.8', fontSize: '1rem', color: 'var(--text-main)' }}>
              <li style={{ marginBottom: '0.5rem' }}>
                <strong>ネットから口座開設の申し込み</strong>: スマホと身分証明書（マイナンバーカード等）があれば数分で申請できます。「総合口座」と同時に「NISA口座」の開設にチェックを入れます。
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <strong>税務署による二重開設の審査</strong>: 金融機関から税務署へ申請が回り、他の口座が存在しないかの確認が行われます（通常1〜2週間程度かかります）。
              </li>
              <li>
                <strong>初期設定と積立の開始</strong>: 審査完了の連絡が来たら、証券口座にログインしてクレジットカードや銀行引落を設定し、積立する銘柄（商品）を選んで投資を開始します。
              </li>
            </ol>
          </div>
          <div className="knowledge-banner glass-card" style={{ padding: '1.5rem', background: 'var(--bg-warm)', borderRadius: '16px', border: '1px solid var(--glass-border)', marginBottom: '3rem' }}>
            <span className="featured-tag" style={{ margin: 0 }}>もっと知りたい</span>
            <p style={{ fontSize: '0.95rem', fontWeight: '800', margin: '0.5rem 0' }}>
              SBI証券と楽天証券の詳しい違い、どちらが開設しやすいかなどをステップ順に図解したコラムはこちらです。
            </p>
            <Link href="/blog/nisa-series-02" style={{ fontSize: '0.9rem', fontWeight: '800', color: 'var(--primary)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
              新NISAの口座開設の手順｜SBI証券・楽天証券での始め方 <ArrowRight size={14} />
            </Link>
          </div>

          {/* 3章: つみたて投資枠の選び方（S&P500 vs オルカン） */}
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.3rem, 3.5vw, 1.6rem)', fontWeight: '900', color: 'var(--primary-dark)', borderBottom: '2px solid var(--bg-warm)', paddingBottom: '0.8rem', marginTop: '3rem', marginBottom: '1.5rem' }}>
            3. つみたて投資枠で何を買うべきか？
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
            つみたて投資枠では、金融庁が「手数料が低く、長期投資に適している」と認定した投資信託（インデックスファンド等）から選ぶことになります。
          </p>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
            ここで初心者の大きな壁となるのが、<strong>「S&P500（米国株全体に投資）」</strong>と<strong>「全世界株式（通称オルカン・世界全体に分散）」</strong>のどちらにするかという問題です。どちらも非常に優れた投資信託で、正解はありませんが、それぞれの特徴を理解して納得して選ぶことが重要です。
          </p>
          <div style={{ overflowX: 'auto', marginBottom: '2.5rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '500px', fontSize: '0.95rem', textAlign: 'left' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid rgba(0,0,0,0.1)' }}>
                <th style={{ padding: '0.75rem 0.5rem', fontWeight: '800' }}>比較項目</th>
                <th style={{ padding: '0.75rem 0.5rem', fontWeight: '800', color: 'var(--primary)' }}>S&P500（米国株）</th>
                <th style={{ padding: '0.75rem 0.5rem', fontWeight: '800', color: 'var(--primary-dark)' }}>オルカン（全世界）</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
                <td style={{ padding: '0.75rem 0.5rem', fontWeight: '800' }}>投資対象</td>
                <td style={{ padding: '0.75rem 0.5rem' }}>アメリカを代表する大企業500社</td>
                <td style={{ padding: '0.75rem 0.5rem' }}>全世界（日本含む約47カ国）の約2,800社</td>
              </tr>
              <tr style={{ borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
                <td style={{ padding: '0.75rem 0.5rem', fontWeight: '800' }}>米国比率</td>
                <td style={{ padding: '0.75rem 0.5rem' }}>100%</td>
                <td style={{ padding: '0.75rem 0.5rem' }}>約60%（世界の時価総額に準ずる）</td>
              </tr>
              <tr style={{ borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
                <td style={{ padding: '0.75rem 0.5rem', fontWeight: '800' }}>リターン期待値</td>
                <td style={{ padding: '0.75rem 0.5rem' }}>強気（これまでの米国経済の成長による）</td>
                <td style={{ padding: '0.75rem 0.5rem' }}>中〜強（世界全体の成長に連動）</td>
              </tr>
              <tr style={{ borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
                <td style={{ padding: '0.75rem 0.5rem', fontWeight: '800' }}>こんな人向け</td>
                <td style={{ padding: '0.75rem 0.5rem' }}>米国の圧倒的なイノベーション力を信じる方</td>
                <td style={{ padding: '0.75rem 0.5rem' }}>特定の国に依存せず安全に世界分散したい方</td>
              </tr>
            </tbody>
          </table>
          </div>
          <div className="knowledge-banner glass-card" style={{ padding: '1.5rem', background: 'var(--bg-warm)', borderRadius: '16px', border: '1px solid var(--glass-border)', marginBottom: '3rem' }}>
            <span className="featured-tag" style={{ margin: 0 }}>もっと知りたい</span>
            <p style={{ fontSize: '0.95rem', fontWeight: '800', margin: '0.5rem 0' }}>
              つみたて枠のシミュレーションと、S&P500・全世界株式の細かな投資比率などを徹底的に比較・解説したコラムはこちらです。
            </p>
            <Link href="/blog/nisa-series-03" style={{ fontSize: '0.9rem', fontWeight: '800', color: 'var(--primary)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
              つみたて投資枠で何を買うか｜S&P500 vs オルカン徹底比較 <ArrowRight size={14} />
            </Link>
          </div>

          {/* 4章: 成長投資枠の賢い活用法 */}
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.3rem, 3.5vw, 1.6rem)', fontWeight: '900', color: 'var(--primary-dark)', borderBottom: '2px solid var(--bg-warm)', paddingBottom: '0.8rem', marginTop: '3rem', marginBottom: '1.5rem' }}>
            4. 成長投資枠で投資効率を最大化する
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
            成長投資枠（最大1,200万円まで利用可）は、個別株やETF、REITなどを自由に取引できる枠です。つみたて投資枠だけでは物足りない中級者や、配当金を非課税で受け取りたい高配当株投資家に向いています。
          </p>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
            しかし、この枠の自由度の高さゆえに「流行りの銘柄へ一括投資して大損する」「投機的な短期取引をして非課税枠を無駄にする」といった過ちを犯す初心者が多いのも事実です。
          </p>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '2.5rem' }}>
            成長投資枠を有効に使うためには、<strong>「VYM・HDV などの米国高配当株ETF」</strong>を使って安定的な分配金（不労所得）を非課税で受け取るシステムを作るか、圧倒的な強みを持つ米国の超大企業（ビッグテック）に財務諸表分析をベースに長期保有で投資する戦略をとるのが堅実です。
          </p>
          <div className="knowledge-banner glass-card" style={{ padding: '1.5rem', background: 'var(--bg-warm)', borderRadius: '16px', border: '1px solid var(--glass-border)', marginBottom: '3rem' }}>
            <span className="featured-tag" style={{ margin: 0 }}>もっと知りたい</span>
            <p style={{ fontSize: '0.95rem', fontWeight: '800', margin: '0.5rem 0' }}>
              成長投資枠を使って何にどう投資するのが最も効率が良いのか、罠を回避するルールをまとめたコラムはこちら。
            </p>
            <Link href="/blog/nisa-series-04" style={{ fontSize: '0.9rem', fontWeight: '800', color: 'var(--primary)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
              成長投資枠の活用法｜個別株とETFの選び方 <ArrowRight size={14} />
            </Link>
          </div>

          {/* 5章: 老後に向けた出口戦略と取り崩しルール */}
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.3rem, 3.5vw, 1.6rem)', fontWeight: '900', color: 'var(--primary-dark)', borderBottom: '2px solid var(--bg-warm)', paddingBottom: '0.8rem', marginTop: '3rem', marginBottom: '1.5rem' }}>
            5. 新NISAの「出口戦略」と資産取り崩しの考え方
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
            投資の「始め方（買い方）」を学ぶ人は多いですが、「終わり方（売り方）」を意識して投資している人はごくわずかです。
          </p>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
            新NISAで長期にわたって増やした大切な資産を、いざ老後に使うとき、一気に全て売却してしまうのは最も避けるべき行為です。なぜなら、運用している資産は売却しない限り、<strong>「残った部分が勝手に増え続ける複利効果」</strong>を維持するからです。
          </p>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '2.5rem' }}>
            資産寿命を極限まで延ばすための出口戦略として定説となっているのが、米国のトリニティ大学が提唱した<strong>「4%ルール（定率取り崩し）」</strong>です。毎年、保有する資産総額の4%ずつを定期的に売却して生活費に充てることで、歴史的には高確率で元本を減らすことなく、死ぬまで資産を維持しながら取り崩しが可能になります。
          </p>

          {/* 6章: 年代別・ライフステージ別のNISA活用パターン */}
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.3rem, 3.5vw, 1.6rem)', fontWeight: '900', color: 'var(--primary-dark)', borderBottom: '2px solid var(--bg-warm)', paddingBottom: '0.8rem', marginTop: '3rem', marginBottom: '1.5rem' }}>
            6. 年代別・ライフステージ別の新NISAおすすめ活用シナリオ
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
            年齢やライフプランによって、目指すべき投資スタイルやリスクの取り方は異なります。ご自身の年代に合った活用シナリオを参考にしてください。
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', marginBottom: '2.5rem' }}>
            <div style={{ padding: '1.2rem 1.5rem', border: '1px solid rgba(0,0,0,0.08)', borderRadius: '12px', background: 'white' }}>
              <h3 style={{ fontSize: '1.05rem', fontWeight: '800', color: 'var(--primary)', marginBottom: '0.4rem' }}>
                ・20代〜30代（資産形成期）：つみたて枠メインの全力長期複利運用
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', margin: 0, lineHeight: '1.7' }}>
                運用期間（時間）を最も長く確保できる世代です。毎月の余剰資金をつみたて投資枠の「S&P500」や「全世界株式（オルカン）」に全額投入し、複利効果を最大限に活かして1,800万円の枠を最短（月10万円で15年など）で埋めることを目指すのが王道シナリオです。
              </p>
            </div>
            <div style={{ padding: '1.2rem 1.5rem', border: '1px solid rgba(0,0,0,0.08)', borderRadius: '12px', background: 'white' }}>
              <h3 style={{ fontSize: '1.05rem', fontWeight: '800', color: 'var(--primary)', marginBottom: '0.4rem' }}>
                ・40代（資産拡大・住宅・教育期）：積立＋高配当株ETFのハイブリッド
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', margin: 0, lineHeight: '1.7' }}>
                収入が上がると同時に、子どもの教育費や住宅ローンなどの支出も増える世代です。つみたて枠での積立を継続しつつ、成長投資枠で「VYMなどの米国高配当ETF」を購入し、年間数万円〜数十万円の非課税配当金を得て日々の生活費や家族のレジャー費を潤すバランス運用が効果的です。
              </p>
            </div>
            <div style={{ padding: '1.2rem 1.5rem', border: '1px solid rgba(0,0,0,0.08)', borderRadius: '12px', background: 'white' }}>
              <h3 style={{ fontSize: '1.05rem', fontWeight: '800', color: 'var(--primary)', marginBottom: '0.4rem' }}>
                ・50代〜60代（完成期・定年準備）：リスク抑制と取り崩し準備
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', margin: 0, lineHeight: '1.7' }}>
                老後資金の着地を見据え、現金比率（無リスク資産）を少し高めに確保しながらNISAで運用を行います。成長投資枠を活用して非課税の配当収入（年金の上乗せ）を構築するか、定年退職後に4%ルールで計画的に取り崩す準備を行い、資産の保全と取り崩しを両立させます。
              </p>
            </div>
          </div>

          {/* 7章: NISAとiDeCoの比較・金融機関変更の注意点 */}
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.3rem, 3.5vw, 1.6rem)', fontWeight: '900', color: 'var(--primary-dark)', borderBottom: '2px solid var(--bg-warm)', paddingBottom: '0.8rem', marginTop: '3rem', marginBottom: '1.5rem' }}>
            7. NISAとiDeCo（イデコ）の違い＆口座変更のポイント
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
            非課税制度としてよく比較されるのが<strong>iDeCo（個人型確定拠出年金）</strong>です。両者は役割が大きく異なります。
          </p>
          <div style={{ overflowX: 'auto', marginBottom: '2rem', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.08)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '480px', fontSize: '0.95rem', fontFamily: 'var(--font-body)' }}>
              <thead>
                <tr style={{ backgroundColor: 'var(--bg-warm)', borderBottom: '2px solid rgba(0,0,0,0.08)' }}>
                  <th style={{ padding: '0.8rem 1rem', fontWeight: '800' }}>比較項目</th>
                  <th style={{ padding: '0.8rem 1rem', fontWeight: '800', color: 'var(--primary)' }}>NISA（少額投資非課税制度）</th>
                  <th style={{ padding: '0.8rem 1rem', fontWeight: '800', color: 'var(--primary-dark)' }}>iDeCo（確定拠出年金）</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                  <td style={{ padding: '0.8rem 1rem', fontWeight: '700' }}>引き出し制限</td>
                  <td style={{ padding: '0.8rem 1rem', fontWeight: '700', color: 'var(--primary)' }}>いつでも自由に売却・引き出し可能</td>
                  <td style={{ padding: '0.8rem 1rem' }}>原則60歳まで引き出し不可（年金目的）</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                  <td style={{ padding: '0.8rem 1rem', fontWeight: '700' }}>主な節税メリット</td>
                  <td style={{ padding: '0.8rem 1rem' }}>運用益・配当金が完全非課税</td>
                  <td style={{ padding: '0.8rem 1rem', fontWeight: '700', color: 'var(--primary)' }}>掛金が「全額所得控除」（毎年の税金が減る）</td>
                </tr>
                <tr>
                  <td style={{ padding: '0.8rem 1rem', fontWeight: '700' }}>おすすめの優先順位</td>
                  <td style={{ padding: '0.8rem 1rem', fontWeight: '700', color: 'var(--primary)' }}>第一優先（流動性が高く万能）</td>
                  <td style={{ padding: '0.8rem 1rem' }}>第二優先（余剰資金があり所得税が高い人向け）</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '2.5rem' }}>
            また、すでに銀行などでNISA口座を開設してしまった場合でも、1年単位で「SBI証券」や「楽天証券」などのネット証券へ金融機関を変更することができます。変更手続きは毎年10月1日〜翌年9月30日の間に行うことができ、過去に買い付けた商品を売却する必要はありません。手数料と商品数の観点から、早めにネット証券へ集約することをお勧めします。
          </p>
          <div className="knowledge-banner glass-card" style={{ padding: '1.5rem', background: 'var(--bg-warm)', borderRadius: '16px', border: '1px solid var(--glass-border)', marginBottom: '3rem' }}>
            <span className="featured-tag" style={{ margin: 0 }}>もっと知りたい</span>
            <p style={{ fontSize: '0.95rem', fontWeight: '800', margin: '0.5rem 0' }}>
              4%ルールの具体的なシミュレーションと、新NISA枠から資産を賢く部分売却していく実戦方法についてのコラムはこちら。
            </p>
            <Link href="/blog/nisa-series-05" style={{ fontSize: '0.9rem', fontWeight: '800', color: 'var(--primary)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
              新NISAの出口戦略｜老後に向けた取り崩しの考え方 <ArrowRight size={14} />
            </Link>
          </div>

          {/* 6章: NISAのよくある質問（FAQ） */}
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.3rem, 3.5vw, 1.6rem)', fontWeight: '900', color: 'var(--primary-dark)', borderBottom: '2px solid var(--bg-warm)', paddingBottom: '0.8rem', marginTop: '3rem', marginBottom: '1.5rem' }}>
            6. NISAに関するよくある質問 (FAQ)
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginBottom: '3rem' }}>
            <div>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.5rem' }}>
                Q. NISA口座からのお金はいつでも引き出せますか？
              </h4>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', lineHeight: '1.7', color: 'var(--text-muted)', margin: 0 }}>
                A. はい、NISA口座で保有している株式や投資信託は、いつでも自由に市場で売却して現金として銀行口座へ引き出すことができます。iDeCoのように60歳まで引き出せないなどの制限がないため、結婚・出産・住宅購入・急な医療費などのライフイベントに対しても柔軟に対応可能です。
              </p>
            </div>
            <div>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.5rem' }}>
                Q. 新NISAの「つみたて枠」と「成長投資枠」は併用できますか？
              </h4>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', lineHeight: '1.7', color: 'var(--text-muted)', margin: 0 }}>
                A. はい、新NISA制度では同じ証券会社で両方の枠を同時に併用して取引することが可能です。年間最大でつみたて枠120万円、成長投資枠240万円（年間合計360万円まで）をそれぞれ独立して活用できます。
              </p>
            </div>
            <div>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.5rem' }}>
                Q. NISAを始めるにはどの証券会社がおすすめですか？
              </h4>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', lineHeight: '1.7', color: 'var(--text-muted)', margin: 0 }}>
                A. 手数料が一切無料で、取り扱い商品数が圧倒的に多く、クレジットカードでの自動積立によるポイント還元率が最も高い「SBI証券」または「楽天証券」のどちらかを選択するのがベストです。この2社を選んでおけば間違いありません。
              </p>
            </div>
            <div>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.5rem' }}>
                Q. 株価が大きく暴落したとき、NISA商品は損切りすべきですか？
              </h4>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', lineHeight: '1.7', color: 'var(--text-muted)', margin: 0 }}>
                A. 長期複利による資産形成を目的とする場合、一時的な市場の暴落で焦って売却（損切り）してしまうのは損失を確定させてしまうため絶対に避けるべきです。世界の経済は長期的に右肩上がりに成長してきました。下落局面でも淡々と積立を続けることで、平均購入価格を下げる「ドル・コスト平均法」が機能し、将来的な市場の回復期に大きなリターンを得やすくなります。
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section - セミナーへの誘導 */}
      <section style={{ background: 'var(--bg-warm)', color: 'var(--text-main)', position: 'relative', overflow: 'hidden', textAlign: 'center', padding: 'clamp(3rem, 8vw, 5rem) 0' }}>
        <div style={{ position: 'absolute', top: '-50px', right: '-50px', width: '200px', height: '200px', borderRadius: '50%', background: 'rgba(176, 58, 46, 0.03)' }} />
        <div style={{ position: 'absolute', bottom: '-80px', left: '-80px', width: '300px', height: '300px', borderRadius: '50%', background: 'rgba(176, 58, 46, 0.02)' }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '700px', margin: '0 auto' }}>

            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.4rem, 4vw, 2.2rem)', fontWeight: '900', lineHeight: '1.5', marginBottom: '1.5rem', color: 'var(--text-main)' }}>
              では、何からスタートすれば<br />いいのでしょうか？
            </h2>

            <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(0.95rem, 2.5vw, 1.1rem)', lineHeight: '1.8', color: 'var(--text-muted)', marginBottom: '1rem' }}>
              口座の選び方、最初に何を買えばいいのか、<br className="sp-hide" />
              どのくらいの金額から始めるのが良いのか。
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
