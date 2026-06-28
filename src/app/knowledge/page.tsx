import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: '米国株（アメリカ株）とは？ | 東京 米国株 勉強会 - 東京米国株クラブ',
  description: '東京の初心者向け米国株勉強会「東京米国株クラブ」が、米国株の基礎知識をわかりやすく解説。日本株との違いの比較表、1株から買える少額投資、取引時間など初心者向けのメリットを紹介。',
  alternates: {
    canonical: 'https://www.tokyo-us-stock.com/knowledge',
  },
};

export default function KnowledgePage() {
  return (
    <div className="knowledge-page" style={{ overflowWrap: 'break-word' }}>
      {/* Header Section */}
      <section className="post-header" style={{ background: 'var(--bg-warm)', padding: '100px 0 2.5rem 0', textAlign: 'left' }}>
        <div className="container">
          <Link href="/" className="btn-link" style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', fontFamily: 'var(--font-body)', fontWeight: '700' }}>
            <ArrowLeft size={18} style={{ marginRight: '0.5rem' }} /> トップへ戻る
          </Link>
          <h1 className="post-title" style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.8rem, 6vw, 2.8rem)', fontWeight: '900', textAlign: 'left', marginLeft: '0', marginRight: 'auto', maxWidth: 'none', marginBottom: '0.5rem', color: 'var(--primary-dark)', lineHeight: '1.3' }}>
            米国株（アメリカ株）とは？
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section style={{ background: 'white', padding: 'clamp(3rem, 8vw, 5rem) 0' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>

          {/* 米国株の定義 */}
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
            米国株とは、<strong>アメリカの企業が発行する株式</strong>のことです。
          </p>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
            Apple、Google、Amazon、Microsoftなど、私たちが日常的に使っているサービスの多くはアメリカの企業が提供しています。米国株を購入すると、こうした企業の株主になることができます。
          </p>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '2.5rem' }}>
            最近は日本でも米国株への関心が高まっていますが、日本株とはルールが異なる部分がいくつかあります。
          </p>

          {/* 比較表 */}
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.3rem, 3.5vw, 1.6rem)', fontWeight: '900', color: 'var(--primary-dark)', borderBottom: '2px solid var(--bg-warm)', paddingBottom: '0.8rem', marginTop: '2rem', marginBottom: '1.5rem' }}>
            日本株と米国株の主な違い
          </h2>

          <div style={{ overflowX: 'auto', marginBottom: '2rem', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.08)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '480px', fontSize: '0.95rem', fontFamily: 'var(--font-body)' }}>
              <thead>
                <tr style={{ backgroundColor: 'var(--bg-warm)', borderBottom: '2px solid rgba(0,0,0,0.08)' }}>
                  <th style={{ padding: '0.9rem 1rem', fontWeight: '800', color: 'var(--primary-dark)' }}>比較項目</th>
                  <th style={{ padding: '0.9rem 1rem', fontWeight: '800', color: 'var(--primary-dark)' }}>日本株</th>
                  <th style={{ padding: '0.9rem 1rem', fontWeight: '800', color: 'var(--primary-dark)' }}>米国株</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                  <td style={{ padding: '0.9rem 1rem', fontWeight: '700', backgroundColor: 'rgba(0,0,0,0.01)' }}>購入単位</td>
                  <td style={{ padding: '0.9rem 1rem' }}>100株単位</td>
                  <td style={{ padding: '0.9rem 1rem', fontWeight: '700', color: 'var(--primary-dark)' }}>1株から</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                  <td style={{ padding: '0.9rem 1rem', fontWeight: '700', backgroundColor: 'rgba(0,0,0,0.01)' }}>配当回数</td>
                  <td style={{ padding: '0.9rem 1rem' }}>年1〜2回</td>
                  <td style={{ padding: '0.9rem 1rem', fontWeight: '700', color: 'var(--primary-dark)' }}>年4回が一般的</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                  <td style={{ padding: '0.9rem 1rem', fontWeight: '700', backgroundColor: 'rgba(0,0,0,0.01)' }}>取引時間</td>
                  <td style={{ padding: '0.9rem 1rem' }}>日中（9:00〜15:00）</td>
                  <td style={{ padding: '0.9rem 1rem' }}>夜間（23:30〜翌6:00）</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                  <td style={{ padding: '0.9rem 1rem', fontWeight: '700', backgroundColor: 'rgba(0,0,0,0.01)' }}>値幅制限</td>
                  <td style={{ padding: '0.9rem 1rem' }}>あり</td>
                  <td style={{ padding: '0.9rem 1rem' }}>なし</td>
                </tr>
                <tr>
                  <td style={{ padding: '0.9rem 1rem', fontWeight: '700', backgroundColor: 'rgba(0,0,0,0.01)' }}>為替の影響</td>
                  <td style={{ padding: '0.9rem 1rem' }}>なし</td>
                  <td style={{ padding: '0.9rem 1rem' }}>あり</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', lineHeight: '1.8', color: 'var(--text-muted)', marginBottom: '0' }}>
            このように日本株と米国株にはいくつかの違いがありますが、<strong>少額から始められる</strong>点や、<strong>仕事終わりの夜間に取引できる</strong>点など、忙しい方にとって始めやすい仕組みが整っています。
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
