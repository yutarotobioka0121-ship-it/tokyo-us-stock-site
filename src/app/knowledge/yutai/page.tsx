import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Gift, ShoppingBag, CreditCard, Sparkles, CheckCircle2, ShieldCheck, HelpCircle, Heart, DollarSign } from 'lucide-react';

export const metadata: Metadata = {
  title: '株主優待とは？仕組み・もらい方・人気の優待・米国株との違いを徹底解説 | 東京米国株クラブ',
  description: '株主優待の基礎知識を初心者向けに徹底解説。人気の優待ジャンル（食事券・QUOカード・自社製品）、権利確定日等の貰い方の条件、総合利回りの計算、優待廃止リスク、米国株に優待がない理由まで網羅。',
  alternates: {
    canonical: 'https://www.tokyo-us-stock.com/knowledge/yutai',
  },
};

export default function YutaiKnowledgePage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: '初心者が株主優待をもらうには、いくらくらいの資金が必要ですか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '株主優待を実施している企業の多くは「100株以上」の保有が条件となります。株価によって異なりますが、およそ「5万円〜30万円程度」の資金があれば人気の優待株（外食チェーン、お菓子、QUOカードなど）を購入することができます。',
        },
      },
      {
        '@type': 'Question',
        name: '株主優待でもらった商品券や食事券に税金はかかりますか？確定申告は必要ですか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '株主優待で受け取った品物や金券は税法上「雑所得」に分類されます。ただし、一般的な個人投資家が受け取る年間数万円程度の優待であれば、他の雑所得と合わせて年間20万円を超えない限り、確定申告を行う必要はありません。',
        },
      },
      {
        '@type': 'Question',
        name: '米国株（アメリカ株）にも株主優待はありますか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '米国株には原則として日本のような「株主優待制度」はありません。アメリカ企業は、世界中の株主に対して等しく報いるため、モノや優待券を贈るのではなく「現金配当（年4回）」や「自社株買い（株価上昇）」という形で直接利益を還元する文化が定着しています。',
        },
      },
      {
        '@type': 'Question',
        name: 'NISA口座で株を買っても、株主優待はちゃんともらえますか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'はい、NISA口座で購入した株でも特定口座と全く同様に株主優待を受け取ることができます。さらにNISA口座であれば、同時に受け取る配当金も非課税になるため、大変相性が良い投資方法です。',
        },
      },
      {
        '@type': 'Question',
        name: '1株（単元未満株）持っているだけでもらえる「端株優待」とは何ですか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '一部の企業では、100株揃えなくても「1株（数百円〜数千円）」保有しているだけで、自社 EC サイトの割引クーポンやカレンダー、施設割引券などを進呈する「端株優待」を実施しています。小額から優待を楽しみたい方に人気があります。',
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
            株主優待とは？仕組み・もらい方・人気の優待・米国株との違いを徹底解説
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section style={{ background: 'white', padding: 'clamp(3rem, 8vw, 5rem) 0' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'left' }}>

          {/* プロローグ */}
          <div style={{ marginBottom: '3rem' }}>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
              「テレビで話題の株主優待生活を楽しんでみたい」「食事券や割引券がもらえるって本当？」と株主優待に興味をお持ちではありませんか？
            </p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
              株主優待とは、**企業が自社の株を買ってくれた株主に対して、感謝の気持ちを込めて自社商品、食事券、ギフトカードなどをプレゼントする日本特有の魅力的な制度**です。
            </p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: 0 }}>
              本ページでは、株主優待の仕組み、もらうための条件、人気の優待ジャンル、失敗しない注意点、そして「米国株にはなぜ株主優待がないのか？」という比較まで、初心者向けに分かりやすく徹底解説します。
            </p>
          </div>

          {/* 1章: 株主優待とは何か？基本的な仕組み */}
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.3rem, 3.5vw, 1.6rem)', fontWeight: '900', color: 'var(--primary-dark)', borderBottom: '2px solid var(--bg-warm)', paddingBottom: '0.8rem', marginTop: '3rem', marginBottom: '1.5rem' }}>
            1. 株主優待とは何か？基本的な仕組み
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
            株主優待（かぶぬしゆうたい）は、配当金（現金）とは別に、**企業から直接「プレゼント（モノやサービス券）」が自宅に届く株主還元制度**です。
          </p>

          <div style={{ padding: '1.5rem', background: 'var(--bg-warm)', borderRadius: '16px', border: '1px solid var(--glass-border)', marginBottom: '2.5rem' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.8rem' }}>
              💡 企業が株主優待を実施する3つのメリット
            </h3>
            <ul style={{ paddingLeft: '1.2rem', margin: 0, color: 'var(--text-main)', fontSize: '0.95rem', display: 'flex', flexDirection: 'column', gap: '0.6rem', lineHeight: '1.7' }}>
              <li><strong>個人投資家（ファン）を増やせる</strong>: 自社の店舗や商品を実際に利用してもらうことで、企業のファンになってもらえます。</li>
              <li><strong>株を長期間保有してもらいやすくなる</strong>: 優待目的の個人投資家は、多少の株価変動では株を売らないため、株価が安定します。</li>
              <li><strong>自社商品の宣伝・PR効果がある</strong>: 新商品や自社サービスを直接体験してもらう最高のPR機会になります。</li>
            </ul>
          </div>

          {/* 2章: 人気の株主優待ジャンル4選 */}
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.3rem, 3.5vw, 1.6rem)', fontWeight: '900', color: 'var(--primary-dark)', borderBottom: '2px solid var(--bg-warm)', paddingBottom: '0.8rem', marginTop: '3rem', marginBottom: '1.5rem' }}>
            2. 初心者に大人気！株主優待のジャンル4選
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
            日本国内で株主優待を実施している企業は約1,500社以上存在します。特に人気が高い4つのジャンルをご紹介します。
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.2rem', marginBottom: '2.5rem' }}>
            <div style={{ padding: '1.2rem 1.5rem', background: 'var(--bg-warm)', borderRadius: '12px', borderLeft: '4px solid var(--primary)' }}>
              <h3 style={{ fontSize: '1.05rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.4rem' }}>
                ① 外食チェーンの「お食事券・優待カード」
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', margin: 0, lineHeight: '1.7' }}>
                すかいらーく、吉野家、日本マクドナルド、コロワイドなど。店舗でそのまま使えるお食事券や割引カードが定期的に届き、生活費（外食費）を直接節約できるため不動の人気を誇ります。
              </p>
            </div>

            <div style={{ padding: '1.2rem 1.5rem', background: 'var(--bg-warm)', borderRadius: '12px', borderLeft: '4px solid var(--primary)' }}>
              <h3 style={{ fontSize: '1.05rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.4rem' }}>
                ② 使い勝手抜群の「QUOカード・ギフトカード」
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', margin: 0, lineHeight: '1.7' }}>
                全国のコンビニやドラッグストア、書店で現金同様に使える「QUOカード（500円〜3,000円分）」を進呈する企業です。使い道に困らないため、非常に人気の高い優待ジャンルです。
              </p>
            </div>

            <div style={{ padding: '1.2rem 1.5rem', background: 'var(--bg-warm)', borderRadius: '12px', borderLeft: '4px solid var(--primary)' }}>
              <h3 style={{ fontSize: '1.05rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.4rem' }}>
                ③ 充実の「自社製品・オリジナル詰合せ」
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', margin: 0, lineHeight: '1.7' }}>
                食品メーカーや化粧品会社が自社のお菓子、清涼飲料水、ビール、化粧品セットなどを箱詰めで送ってくれる優待です。新商品がいち早く試せる楽しみもあります。
              </p>
            </div>

            <div style={{ padding: '1.2rem 1.5rem', background: 'var(--bg-warm)', borderRadius: '12px', borderLeft: '4px solid var(--primary-dark)' }}>
              <h3 style={{ fontSize: '1.05rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.4rem' }}>
                ④ カタログギフト・施設パスポート（映画・テーマパーク）
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', margin: 0, lineHeight: '1.7' }}>
                オリックスやKDDI（過去優待）のような特産品が選べるWEBカタログや、サンリオやオリエンタルランド（ディズニーリゾート）、イオンシネマ等の施設利用・鑑賞チケットです。
              </p>
            </div>
          </div>

          {/* 3章: 株主優待をもらうための3つの条件 */}
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.3rem, 3.5vw, 1.6rem)', fontWeight: '900', color: 'var(--primary-dark)', borderBottom: '2px solid var(--bg-warm)', paddingBottom: '0.8rem', marginTop: '3rem', marginBottom: '1.5rem' }}>
            3. 株主優待をもらうための3つの必須条件
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
            株主優待は、ただ株を買っただけではすぐにもらえない場合があります。以下の3つの条件を必ず確認しましょう。
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', marginBottom: '2.5rem' }}>
            <div style={{ padding: '1.2rem 1.5rem', border: '1px solid rgba(0,0,0,0.08)', borderRadius: '12px', background: 'white' }}>
              <h3 style={{ fontSize: '1.05rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.4rem' }}>
                条件①：必要株数（単元株＝100株以上が一般的）を保有すること
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', margin: 0, lineHeight: '1.7' }}>
                優待が進呈される最低条件は「100株以上」に設定されている企業が9割以上です。一部、1株保有でもらえる「端株優待」や、株数に応じて段階的に豪華になる優待（500株、1,000株など）もあります。
              </p>
            </div>

            <div style={{ padding: '1.2rem 1.5rem', border: '1px solid rgba(0,0,0,0.08)', borderRadius: '12px', background: 'white' }}>
              <h3 style={{ fontSize: '1.05rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.4rem' }}>
                条件②：「権利付き最終日」の時点で株を保有していること
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', margin: 0, lineHeight: '1.7' }}>
                決算月（3月や9月など）の「権利確定日」の2営業日前である**「権利付き最終日」の取引終了時点**で株を保有していれば、翌日に売却しても優待をもらう権利が得られます。
              </p>
            </div>

            <div style={{ padding: '1.2rem 1.5rem', border: '1px solid rgba(0,0,0,0.08)', borderRadius: '12px', background: 'white' }}>
              <h3 style={{ fontSize: '1.05rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.4rem' }}>
                条件③：長期保有条件（1年以上・3年以上など）のクリア
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', margin: 0, lineHeight: '1.7' }}>
                近年、直前にだけ株を買う投資家を防ぐため「1年以上株主名簿に連続で記載されていること」という長期保有条件をつける企業が増加しています。継続保有で優待額がアップする企業も多いため事前確認が必要です。
              </p>
            </div>
          </div>

          {/* 4章: 米国株に株主優待はあるのか？ */}
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.3rem, 3.5vw, 1.6rem)', fontWeight: '900', color: 'var(--primary-dark)', borderBottom: '2px solid var(--bg-warm)', paddingBottom: '0.8rem', marginTop: '3rem', marginBottom: '1.5rem' }}>
            4. 米国株（アメリカ株）に株主優待はあるのか？
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
            結論から申し上げますと、**米国株には原則として株主優待制度はありません。**
          </p>

          <div style={{ padding: '1.5rem', background: 'var(--bg-warm)', borderRadius: '16px', border: '1px solid var(--glass-border)', marginBottom: '2.5rem' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.8rem' }}>
              🌐 なぜ米国企業は優待を行わないのか？（公平性の文化）
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', lineHeight: '1.7', margin: 0 }}>
              米国企業には「世界中のすべての株主に対して、公平に還元するべきである」という強い思想があります。<br />
              自国（アメリカ）の株主にしか届かないような商品券や物券を配ることは、日本やヨーロッパの株主に対して「不公平（差別）」になってしまいます。<br />
              そのため、米国企業は国籍を問わず全員に均等に行き渡る<strong>「現金配当（年4回）」</strong>および株価を引き上げる<strong>「自社株買い」</strong>にすべての還元資金を集中させているのです。
            </p>
          </div>

          {/* 5章: 株主優待投資で大損しないための3つの注意点 */}
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.3rem, 3.5vw, 1.6rem)', fontWeight: '900', color: 'var(--primary-dark)', borderBottom: '2px solid var(--bg-warm)', paddingBottom: '0.8rem', marginTop: '3rem', marginBottom: '1.5rem' }}>
            5. 株主優待投資で失敗しないための3つの注意点
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
            株主優待は楽しい制度ですが、知識なしに飛び込むと大きな損失を被ることがあります。
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', marginBottom: '2.5rem' }}>
            <div style={{ padding: '1.2rem 1.5rem', background: '#fff5f5', borderLeft: '4px solid #e53e3e', borderRadius: '8px' }}>
              <h3 style={{ fontSize: '1.05rem', fontWeight: '800', color: '#c53030', marginBottom: '0.4rem' }}>
                注意点①：「優待廃止・改悪」による株価暴落リスク
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', margin: 0, lineHeight: '1.7' }}>
                企業の業績が悪化した場合、優待が廃止・縮小（改悪）されることがあります。優待目当ての個人投資家が一斉に売却するため、株価が急降下して「3,000円の優待をもらうために、株価下落で10万円損をした」という本末転倒の事態が起こります。
              </p>
            </div>

            <div style={{ padding: '1.2rem 1.5rem', background: '#fff5f5', borderLeft: '4px solid #e53e3e', borderRadius: '8px' }}>
              <h3 style={{ fontSize: '1.05rem', fontWeight: '800', color: '#c53030', marginBottom: '0.4rem' }}>
                注意点②：「総合利回り（配当利回り ＋ 優待利回り）」で判断する
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', margin: 0, lineHeight: '1.7' }}>
                優待の価値を金額に換算し、配当金と足し合わせた「総合利回り」が4%以上あるかを確認しましょう。優待だけが豪華で配当金がゼロのような業績不振企業は危険です。
              </p>
            </div>

            <div style={{ padding: '1.2rem 1.5rem', background: '#fff5f5', borderLeft: '4px solid #e53e3e', borderRadius: '8px' }}>
              <h3 style={{ fontSize: '1.05rem', fontWeight: '800', color: '#c53030', marginBottom: '0.4rem' }}>
                注意点③：有効期限の切れと転売（売却）のルール
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', margin: 0, lineHeight: '1.7' }}>
                お食事券や施設割引券には有効期限（半年〜1年間程度）が定められていることが多いため、使い切れずに失効させないよう注意が必要です。また、金券類や優待券をフリマアプリ等で転売することを規約で禁止している企業もあるためルールを確認しましょう。
              </p>
            </div>

            <div style={{ padding: '1.2rem 1.5rem', background: '#fff5f5', borderLeft: '4px solid #e53e3e', borderRadius: '8px' }}>
              <h3 style={{ fontSize: '1.05rem', fontWeight: '800', color: '#c53030', marginBottom: '0.4rem' }}>
                注意点④：権利付き最終日直後の「権利落ち」による値下がり
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', margin: 0, lineHeight: '1.7' }}>
                権利付き最終日の翌日（権利落ち日）には、優待狙いの買い手が引くため一時的に株価が落ちやすくなります。優待額以上の株価下落に焦って即座に損切りしないよう、長期目線で捉えることが肝心です。
              </p>
            </div>
          </div>

          {/* 6章: NISA口座と株主優待の関係 */}
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.3rem, 3.5vw, 1.6rem)', fontWeight: '900', color: 'var(--primary-dark)', borderBottom: '2px solid var(--bg-warm)', paddingBottom: '0.8rem', marginTop: '3rem', marginBottom: '1.5rem' }}>
            6. NISA口座で株主優待をもらうメリット
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
            NISA口座（成長投資枠）で購入した日本株でも、通常通り株主優待を受け取ることができます。同時に配当金も非課税（税金ゼロ）になるため、株主優待株をNISA口座で保有するのは非常に人気の戦略です。
          </p>

          {/* 7章: 株価下落リスクをゼロにする「優待クロス取引（繋ぎ売り）」とは？ */}
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.3rem, 3.5vw, 1.6rem)', fontWeight: '900', color: 'var(--primary-dark)', borderBottom: '2px solid var(--bg-warm)', paddingBottom: '0.8rem', marginTop: '3rem', marginBottom: '1.5rem' }}>
            7. 株価下落リスクなしで優待を得る「クロス取引」と注意点
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
            投資経験者の間で人気の高い裏ワザが、**「優待クロス取引（繋ぎ売り）」**です。
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', marginBottom: '2.5rem' }}>
            <div style={{ padding: '1.2rem 1.5rem', border: '1px solid rgba(0,0,0,0.08)', borderRadius: '12px', background: 'white' }}>
              <h3 style={{ fontSize: '1.05rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.4rem' }}>
                ・クロス取引（繋ぎ売り）の基本的な仕組み
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', margin: 0, lineHeight: '1.7' }}>
                権利付き最終日の直前に、同じ銘柄の「現物買い」と「信用売り（空売り）」を同じ株数・同じ価格で同時に発注する方法です。株価が上がっても下がっても損益が相殺されてゼロになるため、株価下落リスクを一切負わずに優待の権利だけを獲得できます。
              </p>
            </div>

            <div style={{ padding: '1.2rem 1.5rem', background: '#fff5f5', borderLeft: '4px solid #e53e3e', borderRadius: '8px' }}>
              <h3 style={{ fontSize: '1.05rem', fontWeight: '800', color: '#c53030', marginBottom: '0.4rem' }}>
                ⚠️ 思わぬ大損を招く「逆日歩（ぎゃくひぶ）」リスク
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', margin: 0, lineHeight: '1.7' }}>
                制度信用取引でクロス取引を行うと、人気の優待銘柄では「株不足」が発生し、高額なレンタル料（逆日歩）が請求されることがあります。最悪の場合「1,000円の食事券をもらうために5,000円の逆日歩を払った」という大損に繋がるため、初心者は必ず逆日歩が発生しない**「一般信用取引」**を利用するのが鉄則です。
              </p>
            </div>
          </div>

          {/* 8章: 日本株の優待と米国株の連続配当のバランス投資 */}
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.3rem, 3.5vw, 1.6rem)', fontWeight: '900', color: 'var(--primary-dark)', borderBottom: '2px solid var(--bg-warm)', paddingBottom: '0.8rem', marginTop: '3rem', marginBottom: '1.5rem' }}>
            8. 日本株の優待 ✕ 米国株の増配を組み合わせたハイブリッド投資
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
            資産運用の満足度を極限まで高めるおすすめのやり方が、**「日本株の優待」と「米国株の配当」のハイブリッド運用**です。
          </p>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '2.5rem' }}>
            資産形成の主軸は成長性の高い「米国株インデックス（S&P500）や連続増配株・高配当ETF（年4回現金収入）」でしっかりと固めつつ、お気に入りの日本企業数社の優待株（外食券やQUOカード）をスパイスとして保有するスタイルです。日々の生活の中で身近な楽しみを感じながら、世界レベルの資産成長も同時に手に入れることができます。
          </p>

          {/* 7章: 優待に関するFAQ */}
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.3rem, 3.5vw, 1.6rem)', fontWeight: '900', color: 'var(--primary-dark)', borderBottom: '2px solid var(--bg-warm)', paddingBottom: '0.8rem', marginTop: '3rem', marginBottom: '1.5rem' }}>
            7. 株主優待に関するよくある質問 (FAQ)
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginBottom: '3rem' }}>
            <div>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.5rem' }}>
                Q. 初心者が株主優待をもらうには、いくらくらいの資金が必要ですか？
              </h4>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', lineHeight: '1.7', color: 'var(--text-muted)', margin: 0 }}>
                A. 株主優待を実施している企業の多くは「100株以上」の保有が条件となります。株価によって異なりますが、およそ「5万円〜30万円程度」の資金があれば人気の優待株（外食チェーン、お菓子、QUOカードなど）を購入することができます。
              </p>
            </div>
            <div>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.5rem' }}>
                Q. 株主優待でもらった商品券や食事券に税金はかかりますか？確定申告は必要ですか？
              </h4>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', lineHeight: '1.7', color: 'var(--text-muted)', margin: 0 }}>
                A. 株主優待で受け取った品物や金券は税法上「雑所得」に分類されます。ただし、一般的な個人投資家が受け取る年間数万円程度の優待であれば、他の雑所得と合わせて年間20万円を超えない限り、確定申告を行う必要はありません。
              </p>
            </div>
            <div>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.5rem' }}>
                Q. 米国株（アメリカ株）にも株主優待はありますか？
              </h4>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', lineHeight: '1.7', color: 'var(--text-muted)', margin: 0 }}>
                A. 米国株には原則として日本のような「株主優待制度」はありません。アメリカ企業は、世界中の株主に対して等しく報いるため、モノや優待券を贈るのではなく「現金配当（年4回）」や「自社株買い（株価上昇）」という形で直接利益を還元する文化が定着しています。
              </p>
            </div>
            <div>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.5rem' }}>
                Q. NISA口座で株を買っても、株主優待はちゃんともらえますか？
              </h4>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', lineHeight: '1.7', color: 'var(--text-muted)', margin: 0 }}>
                A. はい、NISA口座で購入した株でも特定口座と全く同様に株主優待を受け取ることができます。さらにNISA口座であれば、同時に受け取る配当金も非課税になるため、大変相性が良い投資方法です。
              </p>
            </div>
            <div>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.5rem' }}>
                Q. 1株（単元未満株）持っているだけでもらえる「端株優待」とは何ですか？
              </h4>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', lineHeight: '1.7', color: 'var(--text-muted)', margin: 0 }}>
                A. 一部の企業では、100株揃えなくても「1株（数百円〜数千円）」保有しているだけで、自社 EC サイトの割引クーポンやカレンダー、施設割引券などを進呈する「端株優待」を実施しています。小額から優待を楽しみたい方に人気があります。
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
              日本株の優待と米国株の連続配当、<br />自分にどちらが向いているか迷っていませんか？
            </h2>

            <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(0.95rem, 2.5vw, 1.1rem)', lineHeight: '1.8', color: 'var(--text-muted)', marginBottom: '1rem' }}>
              日常生活を豊かにする優待株の選び方、<br className="sp-hide" />
              資産を効率よく増やす米国株・NISAのベストな組み合わせ。
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
