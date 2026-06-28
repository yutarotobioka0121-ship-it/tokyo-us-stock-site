import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'NISA（ニーサ）とは？ | 東京 米国株 勉強会 - 東京米国株クラブ',
  description: '東京の初心者向け米国株勉強会「東京米国株クラブ」が、NISA（少額投資非課税制度）の基本仕組みやメリットを解説。税金をかけずに堅実に資産を増やすための考え方やつみたて枠の活用法を紹介。',
  alternates: {
    canonical: 'https://www.tokyo-us-stock.com/knowledge/nisa',
  },
};

export default function NisaKnowledgePage() {
  return (
    <div className="knowledge-page" style={{ overflowWrap: 'break-word' }}>
      {/* Header Section */}
      <section className="post-header" style={{ background: 'var(--bg-warm)', padding: '100px 0 2.5rem 0', textAlign: 'left' }}>
        <div className="container">
          <Link href="/" className="btn-link" style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', fontFamily: 'var(--font-body)', fontWeight: '700' }}>
            <ArrowLeft size={18} style={{ marginRight: '0.5rem' }} /> トップへ戻る
          </Link>
          <h1 className="post-title" style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.8rem, 6vw, 2.8rem)', fontWeight: '900', textAlign: 'left', marginLeft: '0', marginRight: 'auto', maxWidth: 'none', marginBottom: '0.5rem', color: 'var(--primary-dark)', lineHeight: '1.3' }}>
            NISA（ニーサ）とは？
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section style={{ background: 'white', padding: 'clamp(3rem, 8vw, 5rem) 0' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>

          {/* NISAの定義 */}
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
            NISA（ニーサ・少額投資非課税制度）とは、<strong>投資で得られた利益に税金がかからなくなるお得な制度</strong>のことです。
          </p>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
            通常、株式投資や投資信託で利益（値上がり益や配当金）が出ると、その約20%が税金として差し引かれます。しかし、国が推奨するNISA口座を利用すれば、<strong>税金が完全ゼロ（非課税）</strong>になります。
          </p>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '2.5rem' }}>
            資産運用の利益をそのまま自分の手元に残すことができるため、将来に向けた資産形成には欠かせない制度となっています。
          </p>

          {/* NISAの3つの特徴 */}
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.3rem, 3.5vw, 1.6rem)', fontWeight: '900', color: 'var(--primary-dark)', borderBottom: '2px solid var(--bg-warm)', paddingBottom: '0.8rem', marginTop: '2rem', marginBottom: '1.5rem' }}>
            NISAの大きな3つの特徴
          </h2>

          <div style={{ marginBottom: '2.5rem' }}>
            <div style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.15rem', fontWeight: '800', color: 'var(--primary)', marginBottom: '0.5rem' }}>
                1. 利益に対して税金が「永久にゼロ」
              </h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', lineHeight: '1.7', color: 'var(--text-main)' }}>
                どれだけ投資で利益が出ても、税金を引かれることなく丸ごと受け取ることができます。非課税になる期間は無期限（一生涯）です。
              </p>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.15rem', fontWeight: '800', color: 'var(--primary)', marginBottom: '0.5rem' }}>
                2. 最大1,800万円まで投資が可能
              </h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', lineHeight: '1.7', color: 'var(--text-main)' }}>
                一人あたり、最大1,800万円（うち成長投資枠は1,200万円まで）の投資元本分を非課税枠として利用することができます。
              </p>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.15rem', fontWeight: '800', color: 'var(--primary)', marginBottom: '0.5rem' }}>
                3. いつでも自由に売却・引き出しができる
              </h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', lineHeight: '1.7', color: 'var(--text-main)' }}>
                一部の年金型制度（iDeCoなど）とは異なり、ライフイベントに合わせて必要なときにいつでも株を売却し、現金を引き出すことができます。
              </p>
            </div>
          </div>

          {/* 初心者のおすすめの始め方 */}
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.3rem, 3.5vw, 1.6rem)', fontWeight: '900', color: 'var(--primary-dark)', borderBottom: '2px solid var(--bg-warm)', paddingBottom: '0.8rem', marginTop: '2rem', marginBottom: '1.5rem' }}>
            初心者におすすめの活用方法
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
            NISAには、金融庁が厳選した信頼性の高い投資信託をコツコツ買う<strong>「つみたて投資枠」</strong>と、個別株なども自由に買える<strong>「成長投資枠」</strong>の2つがあります。
          </p>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '0' }}>
            初心者の場合は、無理のない金額（毎月数千円〜数万円）を設定し、つみたて投資枠を使って世界の優良企業（米国株など）に分散投資する商品を自動で積立購入していく方法が、最も堅実で始めやすいためおすすめです。
          </p>

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
