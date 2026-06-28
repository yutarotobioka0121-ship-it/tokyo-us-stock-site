import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: '株式投資とは？ | 東京 米国株 勉強会 - 東京米国株クラブ',
  description: '東京の初心者向け米国株勉強会「東京米国株クラブ」が、株式投資の基本仕組みやメリットをわかりやすく解説。インフレに負けない資産運用の考え方や、長期・積立・分散投資のリスク管理法を紹介。',
  alternates: {
    canonical: 'https://www.tokyo-us-stock.com/knowledge/stock-investment',
  },
};

export default function StockInvestmentPage() {
  return (
    <div className="knowledge-page" style={{ overflowWrap: 'break-word' }}>
      {/* Header Section */}
      <section className="post-header" style={{ background: 'var(--bg-warm)', padding: '100px 0 2.5rem 0', textAlign: 'left' }}>
        <div className="container">
          <Link href="/" className="btn-link" style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', fontFamily: 'var(--font-body)', fontWeight: '700' }}>
            <ArrowLeft size={18} style={{ marginRight: '0.5rem' }} /> トップへ戻る
          </Link>
          <h1 className="post-title" style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.8rem, 6vw, 2.8rem)', fontWeight: '900', textAlign: 'left', marginLeft: '0', marginRight: 'auto', maxWidth: 'none', marginBottom: '0.5rem', color: 'var(--primary-dark)', lineHeight: '1.3' }}>
            株式投資とは？
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section style={{ background: 'white', padding: 'clamp(3rem, 8vw, 5rem) 0' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>

          {/* 株式投資の定義 */}
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
            株式投資とは、<strong>企業にお金を出して（投資して）、その企業が成長したときに利益の一部を分けてもらう仕組み</strong>のことです。
          </p>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
            銀行にお金を預けておくだけではほとんど増えない今の時代、自分の大切な資産をインフレから守り、堅実に増やしていくための有効な手段として注目されています。
          </p>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '2.5rem' }}>
            難しく聞こえるかもしれませんが、基本となる「仕組み」と「メリット」を理解すれば、決して怖いものではありません。
          </p>

          {/* 株式投資のメリット */}
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.3rem, 3.5vw, 1.6rem)', fontWeight: '900', color: 'var(--primary-dark)', borderBottom: '2px solid var(--bg-warm)', paddingBottom: '0.8rem', marginTop: '2rem', marginBottom: '1.5rem' }}>
            株式投資で得られるメリット
          </h2>

          <div style={{ marginBottom: '2.5rem' }}>
            <div style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.15rem', fontWeight: '800', color: 'var(--primary)', marginBottom: '0.5rem' }}>
                1. 配当金（インカムゲイン）
              </h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', lineHeight: '1.7', color: 'var(--text-main)' }}>
                企業が事業で得た利益の一部を、株主に還元するお金です。定期的に（年1回〜4回程度）保有する株数に応じて受け取ることができます。
              </p>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.15rem', fontWeight: '800', color: 'var(--primary)', marginBottom: '0.5rem' }}>
                2. 値上がり益（キャピタルゲイン）
              </h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', lineHeight: '1.7', color: 'var(--text-main)' }}>
                購入した株の価値（株価）が上がったときに、その株を売却することで得られる利益です。企業が成長すれば、それだけ株価も上昇しやすくなります。
              </p>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.15rem', fontWeight: '800', color: 'var(--primary)', marginBottom: '0.5rem' }}>
                3. インフレに強い資産形成
              </h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', lineHeight: '1.7', color: 'var(--text-main)' }}>
                物価が上がると、現金の価値は相対的に下がってしまいます。しかし、企業の価値や株式は物価の上昇に伴って値上がりする傾向があるため、インフレ対策として有効です。
              </p>
            </div>
          </div>

          {/* リスクとの付き合い方 */}
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.3rem, 3.5vw, 1.6rem)', fontWeight: '900', color: 'var(--primary-dark)', borderBottom: '2px solid var(--bg-warm)', paddingBottom: '0.8rem', marginTop: '2rem', marginBottom: '1.5rem' }}>
            リスクとの付き合い方
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
            株式投資には「元本保証がない」というリスクが確かに存在します。しかし、これはギャンブルとは異なります。
          </p>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '0' }}>
            <strong>「長期投資」「分散投資」「積立投資」</strong>という3つの基本ルールを守ることで、リスクを最小限に抑えながら、堅実に資産を育てていくことが十分に可能です。
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
