import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: '株式投資とは？初心者のための基礎知識と始め方 | 東京 米国株 勉強会 - 東京米国株クラブ',
  description: '東京の初心者向け米国株勉強会「東京米国株クラブ」が、株式投資の基本仕組みやメリットを3,000字以上で徹底解説。インデックス投資の強み、日本株・外国株との比較、リスク管理、FAQまで完全網羅。',
  alternates: {
    canonical: 'https://www.tokyo-us-stock.com/knowledge/stock-investment',
  },
};

export default function StockInvestmentPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: '初心者が株式投資を始める場合、最初に何を買うべきですか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '初心者の場合は、個別の企業の株を買うのではなく、世界や米国の優良企業全体にまるごと分散投資ができる「インデックス投資信託（S&P500または全世界株式など）」を毎月コツコツ積み立てることからスタートするのが最も推奨されます。これにより、個別の企業が倒産したり株価が暴落したりするリスクを最小限に抑えることができます。',
        },
      },
      {
        '@type': 'Question',
        name: '株式投資は最低いくらから始められますか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'ネット証券（SBI証券や楽天証券など）を利用すれば、投資信託の積立は毎月「100円」というごく少額からスタートすることができます。また、米国個別株も1株単位（数百円〜数万円程度）から購入が可能です。まとまった大金を用意しなくても、お小遣いの範囲で気軽に始めることができます。',
        },
      },
      {
        '@type': 'Question',
        name: '口座開設に必要な書類や条件は何ですか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '日本国内に居住している18歳以上の方であれば誰でも口座開設が可能です。手続きには「マイナンバーカード」または「通知カード＋運転免許証などの本人確認書類」が必要になります。ネット証券であればスマホで必要書類を撮影してアップロードするだけで、数日〜1週間程度で取引口座が開設できます。',
        },
      },
      {
        '@type': 'Question',
        name: '株式投資で絶対に損をしない方法はありますか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '投資である以上、元本保証はなく「絶対に損をしない」と断言できる方法はありません。しかし、15年以上の「長期保有」、世界の幅広い国や業界への「分散投資」、毎月決まった額を買う「積立投資（ドル・コスト平均法）」の3つの基本を徹底することで、歴史的には元本割れのリスクを極めて低い水準（限りなくゼロに近い確率）に抑えながら、堅実に資産を増やしていけることが証明されています。',
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
            株式投資とは？初心者のための基礎知識と安全な資産形成
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section style={{ background: 'white', padding: 'clamp(3rem, 8vw, 5rem) 0' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'left' }}>

          {/* プロローグ */}
          <div style={{ marginBottom: '3rem' }}>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
              「汗水垂らして働いて得たお金は、銀行に貯金しておくのが一番安全」というのは、かつて日本が高金利だった時代の過去の話です。現在の日本は<strong>歴史的な超低金利</strong>であり、普通預金にお金を置いておいても年間で数十円しか増えません。その一方で、物価は上昇（インフレ）を続けているため、<strong>現金のまま眠らせているお金の価値は、年々実質的に目減りしている</strong>のが現状です。
            </p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
              この「現金の目減りリスク」から大切な自分の資産を守り、豊かでワクワクする将来を叶えるための最も強力な武器となるのが<strong>株式投資（株）</strong>です。
            </p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: 0 }}>
              「投資ってなんとなく難しそう」「損をするのが怖いから手が出せない」と感じる方は多いですが、それは株式投資の「正しい仕組み」と「リスクのコントロール法」を知らないからです。本ページでは、初心者の方が堅実に長期運用を成功させるための必須知識を体系的に解説します。
            </p>
          </div>

          {/* 1章: 株式投資の基本原理と世の中の仕組み */}
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.3rem, 3.5vw, 1.6rem)', fontWeight: '900', color: 'var(--primary-dark)', borderBottom: '2px solid var(--bg-warm)', paddingBottom: '0.8rem', marginTop: '3rem', marginBottom: '1.5rem' }}>
            1. 株式投資とは何か？基本的な仕組み
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
            株式投資の本質とは、<strong>「企業にお金を出して（出資して）、共同経営者（株主）としてその企業の成長に伴う果実（利益）を分け合うこと」</strong>です。
          </p>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
            私たちが株式を購入すると、その企業の「所有権（株主権）」の一部を手にすることになります。企業は集めたお金を使って事業を展開し、新しいテクノロジーを生み出したりサービスを提供して大きな利益を出します。その利益が、以下の2つの形（メリット）で株主に還元されます。
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2.5rem' }}>
            <div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.15rem', fontWeight: '800', color: 'var(--primary)', marginBottom: '0.5rem' }}>
                ① 配当金（インカムゲイン）
              </h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', lineHeight: '1.7', color: 'var(--text-main)', margin: 0 }}>
                企業が得た利益の一部をキャッシュとして株主に分配するお金です。基本的には、保有している株数に比例して定期的（年1〜4回）に現金が口座に入ってきます。これを複利（再投資）で回すことで、資産の増加スピードが飛躍的に加速します。
              </p>
            </div>
            <div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.15rem', fontWeight: '800', color: 'var(--primary)', marginBottom: '0.5rem' }}>
                ② 値上がり益（キャピタルゲイン）
              </h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', lineHeight: '1.7', color: 'var(--text-main)', margin: 0 }}>
                購入した時点よりも、企業の価値が高くなって株価が上がったときに、売却して得られる利益のことです。世界にイノベーションを起こす優れた企業（NVIDIAなど）は、数年〜十数年で株価が何十倍にも成長し、投資家に莫大な値上がり益をもたらします。
              </p>
            </div>
          </div>

          {/* 2章: インデックス投資の優位性と詐欺の回避 */}
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.3rem, 3.5vw, 1.6rem)', fontWeight: '900', color: 'var(--primary-dark)', borderBottom: '2px solid var(--bg-warm)', paddingBottom: '0.8rem', marginTop: '3rem', marginBottom: '1.5rem' }}>
            2. 初心者は「インデックス投資」から始めるべき理由
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
            株式投資には、自分自身で特定の企業を分析して株を買う「個別株投資」と、特定の指標（指数）と同じ値動きを目指す「インデックス投資（投資信託やETF）」の2種類があります。
          </p>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
            初心者が最初にとるべき戦略は、圧倒的に<strong>「インデックス投資」</strong>です。なぜなら、1つの企業の業績に依存しないため、倒産による全損リスクがなく、市場全体（米国株全体や全世界株）の成長の波に乗ることができるからです。
          </p>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
            また、投資の世界には「プロの運用会社が目利きして株を選ぶアクティブファンド」もありますが、実は<strong>過去のデータの80%以上で、手数料の安いシンプルなインデックスファンドがアクティブファンドの成績を上回っている</strong>という事実があります。
          </p>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
            初心者を狙った「絶対に月利10%稼げる」「元本保証の特別な裏情報」といった謳い文句のぼったくり商品や投資詐欺は後を絶ちません。これらを防ぐための唯一の防衛策は、ネット証券で金融庁が認めたインデックスファンドを自分で積み立てることです。
          </p>
          <div className="knowledge-banner glass-card" style={{ padding: '1.5rem', background: 'var(--bg-warm)', borderRadius: '16px', border: '1px solid var(--glass-border)', marginBottom: '3rem' }}>
            <span className="featured-tag" style={{ margin: 0 }}>もっと知りたい</span>
            <p style={{ fontSize: '0.95rem', fontWeight: '800', margin: '0.5rem 0' }}>
              インデックスの基本定義や、世の中に蔓延する投資詐欺の手口、ぼったくり商品を完全回避するための考え方はこちらで解説しています。
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <Link href="/blog/what-is-index-investing" style={{ fontSize: '0.9rem', fontWeight: '800', color: 'var(--primary)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
                インデックス投資とは何か？基本的な解説 <ArrowRight size={14} />
              </Link>
              <Link href="/blog/index-investing-and-investment-scams" style={{ fontSize: '0.9rem', fontWeight: '800', color: 'var(--primary)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
                インデックス投資と投資詐欺・ぼったくり商品を避ける方法 <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* 3章: 日本株 vs 米国株、他国との徹底比較 */}
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.3rem, 3.5vw, 1.6rem)', fontWeight: '900', color: 'var(--primary-dark)', borderBottom: '2px solid var(--bg-warm)', paddingBottom: '0.8rem', marginTop: '3rem', marginBottom: '1.5rem' }}>
            3. なぜ「米国株」が最も選ばれているのか？他市場との比較
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
            株式投資をする上で、どの国の市場にお金を置くかは非常に重要です。当クラブでは、日本株よりも<strong>米国株市場への長期投資</strong>を推奨しています。その理由は、アメリカ市場が持つ圧倒的な構造的強みにあります。
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2.5rem' }}>
            <div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.5rem' }}>
                ・日本株 vs 米国株（成長率と株主優先の姿勢）
              </h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', lineHeight: '1.7', color: 'var(--text-main)', margin: 0 }}>
                日本は少子高齢化と人口減少が進むのに対し、アメリカは移民を受け入れ人口が増加し続けている先進国です。さらに、米国の企業は「株主は共同経営者である」という意識が非常に強く、増配や自社株買いなどの還元を極めて重視します。
              </p>
            </div>
            <div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.5rem' }}>
                ・先進国株（欧州等）vs 米国株
              </h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', lineHeight: '1.7', color: 'var(--text-main)', margin: 0 }}>
                ヨーロッパの企業（ブランドや自動車など）も優秀ですが、高負担な規制や労働人口の硬直性があり、アメリカのような爆発的なイノベーション（GAFAMやNVIDIAなど）を生み出す力には大きな差があります。
              </p>
            </div>
            <div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.5rem' }}>
                ・新興国株（インド・中国等）vs 米国株
              </h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', lineHeight: '1.7', color: 'var(--text-main)', margin: 0 }}>
                新興国は人口やGDP成長率の伸びしろがありますが、通貨の不安定さ、法整備の脆弱さ（カントリーリスク）、株主軽視の傾向があり、初心者には非常にリスクが高い投資先となります。
              </p>
            </div>
          </div>
          <div className="knowledge-banner glass-card" style={{ padding: '1.5rem', background: 'var(--bg-warm)', borderRadius: '16px', border: '1px solid var(--glass-border)', marginBottom: '3rem' }}>
            <span className="featured-tag" style={{ margin: 0 }}>もっと知りたい</span>
            <p style={{ fontSize: '0.95rem', fontWeight: '800', margin: '0.5rem 0' }}>
              日本株・ヨーロッパ先進国株・インド新興国株と、米国株とのデータに基づく徹底比較コラムはこちらです。
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <Link href="/blog/investment-comparison-02" style={{ fontSize: '0.9rem', fontWeight: '800', color: 'var(--primary)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
                日本株 vs 米国株｜それぞれのメリット・デメリットを比較 <ArrowRight size={14} />
              </Link>
              <Link href="/blog/investment-comparison-03" style={{ fontSize: '0.9rem', fontWeight: '800', color: 'var(--primary)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
                先進国株（米国以外）vs 米国株｜投資するべきか <ArrowRight size={14} />
              </Link>
              <Link href="/blog/investment-comparison-04" style={{ fontSize: '0.9rem', fontWeight: '800', color: 'var(--primary)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
                新興国株 vs 米国株｜インド・中国の成長性とリスク <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* 4章: 他の投資（FX・暗号資産等）との比較 */}
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.3rem, 3.5vw, 1.6rem)', fontWeight: '900', color: 'var(--primary-dark)', borderBottom: '2px solid var(--bg-warm)', paddingBottom: '0.8rem', marginTop: '3rem', marginBottom: '1.5rem' }}>
            4. FX・暗号資産（仮想通貨）と株式投資の違い
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
            「投資」と一括りにされますが、アセットクラス（投資対象）によってその性質は完全に異なります。
          </p>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
            <strong>FX（外国為替証拠金取引）</strong>は、通貨の相対価値の変動を狙う「ゼロサムゲーム（誰かが得をすれば誰かが損をする）」であり、ハイレバレッジによる一発退場リスクが非常に高く、資産を増やす資産形成には全く適しません。
          </p>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
            <strong>暗号資産（ビットコイン等）</strong>は、デジタルゴールドとしての価値保存機能や爆発的な値上がり益が魅力ですが、キャッシュフロー（配当）を生まない資産であり、価格変動（ボラティリティ）が激しすぎるため、ポートフォリオの主役にはできません。
          </p>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '2.5rem' }}>
            これらに対し、<strong>「株式投資」</strong>は、世界中の人々が働く経済活動そのもの（プラスサムゲーム・全体の価値が増加する）に投資するため、最も安全で堅実に右肩上がりの複利恩恵を受けられます。
          </p>
          <div className="knowledge-banner glass-card" style={{ padding: '1.5rem', background: 'var(--bg-warm)', borderRadius: '16px', border: '1px solid var(--glass-border)', marginBottom: '3rem' }}>
            <span className="featured-tag" style={{ margin: 0 }}>もっと知りたい</span>
            <p style={{ fontSize: '0.95rem', fontWeight: '800', margin: '0.5rem 0' }}>
              FXや仮想通貨がなぜ資産形成に適さないのか、株式投資との根本的な設計の違いについての分析コラムはこちら。
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <Link href="/blog/investment-comparison-05-fx" style={{ fontSize: '0.9rem', fontWeight: '800', color: 'var(--primary)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
                FX vs 米国株｜レバレッジの魔力と落とし穴 <ArrowRight size={14} />
              </Link>
              <Link href="/blog/investment-comparison-06-crypto" style={{ fontSize: '0.9rem', fontWeight: '800', color: 'var(--primary)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
                暗号資産（仮想通貨）vs 米国株｜ビットコインの可能性 <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* 5章: リスク管理と自己分析（リスク許容度） */}
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.3rem, 3.5vw, 1.6rem)', fontWeight: '900', color: 'var(--primary-dark)', borderBottom: '2px solid var(--bg-warm)', paddingBottom: '0.8rem', marginTop: '3rem', marginBottom: '1.5rem' }}>
            5. リスク許容度を知り、ギャンブルを回避する
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
            投資を成功させるための最大の障壁は、市場の株価ではなく、<strong>自分自身の「感情」</strong>です。
          </p>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
            どれだけ優秀な商品（S&P500など）を買っていても、暴落局面で自分の「リスク許容度（マイナスを精神的・経済的に耐えられる限界値）」を超えてしまうと、恐怖に耐えきれずに底値で売却（狼狽売り）してしまい、大損を被ることになります。
          </p>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '2.5rem' }}>
            投資を始める前に、自分の年齢、資産構成、収入、何のために投資をするのかを整理し、自分にとって適切なリスク比率（現金と株式の配分）を決めておく必要があります。これこそが、株式投資を安全な「資産形成」にとどめるための究極の知恵です。
          </p>
          <div className="knowledge-banner glass-card" style={{ padding: '1.5rem', background: 'var(--bg-warm)', borderRadius: '16px', border: '1px solid var(--glass-border)', marginBottom: '3rem' }}>
            <span className="featured-tag" style={{ margin: 0 }}>もっと知りたい</span>
            <p style={{ fontSize: '0.95rem', fontWeight: '800', margin: '0.5rem 0' }}>
              自分自身の「リスク許容度」を正確に測定し、それに基づいた失敗しないポートフォリオの作り方はこちら。
            </p>
            <Link href="/blog/risk-tolerance-and-investment-style" style={{ fontSize: '0.9rem', fontWeight: '800', color: 'var(--primary)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
              投資のリスク許容度とは？自分に合った投資スタイルの見つけ方 <ArrowRight size={14} />
            </Link>
          </div>

          {/* 6章: 株式投資のよくある質問（FAQ） */}
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.3rem, 3.5vw, 1.6rem)', fontWeight: '900', color: 'var(--primary-dark)', borderBottom: '2px solid var(--bg-warm)', paddingBottom: '0.8rem', marginTop: '3rem', marginBottom: '1.5rem' }}>
            6. 株式投資に関するよくある質問 (FAQ)
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginBottom: '3rem' }}>
            <div>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.5rem' }}>
                Q. 初心者が株式投資を始める場合、最初に何を買べきですか？
              </h4>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', lineHeight: '1.7', color: 'var(--text-muted)', margin: 0 }}>
                A. 初心者の方は、特定の企業の株（個別株）をいきなり買うのではなく、何千もの企業に丸ごと自動で分散投資を行ってくれる「S&P500」や「全世界株式（オルカン）」などの優れたインデックス投資信託を積立購入することをおすすめします。倒産リスクが事実上ゼロになり、手間をかけずに平均点以上の良好な成績を得ることができます。
              </p>
            </div>
            <div>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.5rem' }}>
                Q. 株式投資は最低いくらから始められますか？
              </h4>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', lineHeight: '1.7', color: 'var(--text-muted)', margin: 0 }}>
                A. 大手のネット証券会社（SBI証券や楽天証券など）を利用すれば、投資信託の積立は毎月わずか「100円」から設定可能です。また、米国株も1株単位（数百円〜数万円程度）で手軽に購入できます。まとまった大金を持っていなくても、毎月のお小遣いの範囲で資産運用を開始できます。
              </p>
            </div>
            <div>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.5rem' }}>
                Q. 口座開設に必要な書類や条件は何ですか？
              </h4>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', lineHeight: '1.7', color: 'var(--text-muted)', margin: 0 }}>
                A. 国内に住所を持つ18歳以上の方であれば原則誰でも開設可能です。本人確認書類として「マイナンバーカード」があればスマホから数分で申し込み手続きが完了します。カードをお持ちでない場合は、通知カード＋運転免許証やパスポートなどの顔写真付き本人確認書類で代用可能です。
              </p>
            </div>
            <div>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.5rem' }}>
                Q. 株式投資で絶対に損をしない方法はありますか？
              </h4>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', lineHeight: '1.7', color: 'var(--text-muted)', margin: 0 }}>
                A. 投資という性質上、元本保証はありませんので「絶対に損をしない方法」はありません。しかし、15年以上の「長期投資」、世界中に投資先を分ける「分散投資」、毎月決まった額を買い続ける「積立投資（ドル・コスト平均法）」を徹底すれば、歴史的には元本割れの確率を限りなくゼロに近い状態に抑えながら、複利効果で手堅く利益を出せることが歴史的に証明されています。
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section - 勉強会への誘導 */}
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
