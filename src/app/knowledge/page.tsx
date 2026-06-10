import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, CheckCircle, AlertTriangle, TrendingUp, DollarSign, Clock, Layers, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: '【初心者向け】米国株とは？日本株との違いや4つの特徴をわかりやすく解説 | 東京米国株クラブ',
  description: '米国株（アメリカ株）の基礎知識を初心者向けにわかりやすく解説！日本株との違いや、1株から買える仕組み、高い成長性、配当の魅力など、これから投資を始める20〜30代の方が知っておくべき4つの特徴を紹介します。',
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
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(0.95rem, 3vw, 1.1rem)', color: 'var(--text-muted)', margin: '0', lineHeight: '1.6' }}>
            初心者に向けて、米国株の仕組みや特徴をシンプルに解説します。
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section style={{ background: 'white', padding: 'clamp(3rem, 8vw, 5rem) 0' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          
          {/* 米国株の説明（最初に追加） */}
          <div style={{ padding: '1.5rem', background: 'var(--bg-warm)', borderRadius: '16px', borderLeft: '5px solid var(--primary)', marginBottom: '2.5rem', textAlign: 'left' }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.15rem', fontWeight: '800', color: 'var(--primary-dark)', margin: '0 0 0.5rem 0' }}>
              米国株（アメリカ株）の定義
            </h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', lineHeight: '1.7', color: 'var(--text-main)', margin: 0 }}>
              米国株とは、世界最大の経済大国である<strong>アメリカ合衆国の企業が発行する株式</strong>のことです。私たちが普段から利用しているApple（iPhone）やGoogle（検索・YouTube）、Amazon、Microsoftなど、世界中を代表する数多くの有名企業の株が含まれます。
            </p>
          </div>

          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
            「投資を始めてみたいけれど、なぜ米国株が人気なの？」<br />
            「日本株と何が違うの？」
          </p>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '2.5rem' }}>
            米国株には、これから中長期で資産を築いていきたい初心者の方向けに、始めやすくメリットを感じやすい様々なルールがあります。そのポイントを簡潔にまとめました。
          </p>

          {/* Comparison Table Section */}
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.3rem, 3.5vw, 1.6rem)', fontWeight: '900', color: 'var(--primary-dark)', borderBottom: '2px solid var(--bg-warm)', paddingBottom: '0.8rem', marginTop: '3rem', marginBottom: '1.5rem' }}>
            日本株と米国株の主な違い
          </h2>
          
          <div style={{ overflowX: 'auto', marginBottom: '3rem', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.08)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '500px', fontSize: '0.95rem', fontFamily: 'var(--font-body)' }}>
              <thead>
                <tr style={{ backgroundColor: 'var(--bg-warm)', borderBottom: '2px solid rgba(0,0,0,0.08)' }}>
                  <th style={{ padding: '1rem', fontWeight: '800', color: 'var(--primary-dark)' }}>比較項目</th>
                  <th style={{ padding: '1rem', fontWeight: '800', color: 'var(--primary-dark)' }}>日本株</th>
                  <th style={{ padding: '1rem', fontWeight: '800', color: 'var(--primary-dark)' }}>米国株</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                  <td style={{ padding: '1rem', fontWeight: '800', backgroundColor: 'rgba(0,0,0,0.01)' }}>最低購入単位</td>
                  <td style={{ padding: '1rem' }}>原則 <strong>100株</strong> 単位<br /><span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>（まとまった資金が必要）</span></td>
                  <td style={{ padding: '1rem', color: 'var(--primary-dark)', fontWeight: '700' }}><strong>1株</strong> から購入可能<br /><span style={{ fontSize: '0.8rem', color: 'var(--primary-dark)' }}>（数百円〜数千円で開始可能）</span></td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                  <td style={{ padding: '1rem', fontWeight: '800', backgroundColor: 'rgba(0,0,0,0.01)' }}>配当回数</td>
                  <td style={{ padding: '1rem' }}>年 1〜2 回 が一般的</td>
                  <td style={{ padding: '1rem', color: 'var(--primary-dark)', fontWeight: '700' }}>年 <strong>4回</strong> が一般的<br /><span style={{ fontSize: '0.8rem', color: 'var(--primary-dark)' }}>（3ヶ月に一度、配当金を受領）</span></td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                  <td style={{ padding: '1rem', fontWeight: '800', backgroundColor: 'rgba(0,0,0,0.01)' }}>主な取引時間（日本時間）</td>
                  <td style={{ padding: '1rem' }}>9:00 〜 15:00<br /><span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>（日中の時間帯）</span></td>
                  <td style={{ padding: '1rem' }}><strong>23:30 〜 翌6:00</strong><br /><span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>※夏時間は22:30〜翌5:00</span></td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                  <td style={{ padding: '1rem', fontWeight: '800', backgroundColor: 'rgba(0,0,0,0.01)' }}>値幅制限</td>
                  <td style={{ padding: '1rem' }}>あり（ストップ高・ストップ安）</td>
                  <td style={{ padding: '1rem' }}><strong>なし</strong></td>
                </tr>
                <tr>
                  <td style={{ padding: '1rem', fontWeight: '800', backgroundColor: 'rgba(0,0,0,0.01)' }}>為替変動の影響</td>
                  <td style={{ padding: '1rem' }}>なし</td>
                  <td style={{ padding: '1rem' }}><strong>あり</strong>（為替リスク）</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* 4 Features Section */}
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.3rem, 3.5vw, 1.6rem)', fontWeight: '900', color: 'var(--primary-dark)', borderBottom: '2px solid var(--bg-warm)', paddingBottom: '0.8rem', marginTop: '3.5rem', marginBottom: '1.5rem' }}>
            初心者に米国株をおすすめする「4つの特徴」
          </h2>

          {/* Feature 1 */}
          <div className="glass-card" style={{ padding: '1.5rem', borderRadius: '16px', background: 'var(--bg-warm)', border: '1px solid rgba(176, 58, 46, 0.05)', marginBottom: '1.2rem', display: 'flex', gap: '1rem', alignItems: 'flex-start', textAlign: 'left' }}>
            <div style={{ color: 'var(--primary)', flexShrink: 0, marginTop: '0.2rem' }}><DollarSign size={24} /></div>
            <div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: '800', color: 'var(--primary-dark)', margin: '0 0 0.4rem 0', lineHeight: '1.4' }}>
                1. 1株から少額で購入できる
              </h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', lineHeight: '1.6', color: 'var(--text-main)', margin: '0' }}>
                日本株は100株単位で購入する必要がありますが、米国株は<strong>1株単位で少額から購入可能</strong>です。数千円から世界を代表する大手企業の株を購入できます。
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="glass-card" style={{ padding: '1.5rem', borderRadius: '16px', background: 'var(--bg-warm)', border: '1px solid rgba(176, 58, 46, 0.05)', marginBottom: '1.2rem', display: 'flex', gap: '1rem', alignItems: 'flex-start', textAlign: 'left' }}>
            <div style={{ color: 'var(--primary)', flexShrink: 0, marginTop: '0.2rem' }}><TrendingUp size={24} /></div>
            <div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: '800', color: 'var(--primary-dark)', margin: '0 0 0.4rem 0', lineHeight: '1.4' }}>
                2. 世界をリードする企業と長期の成長性
              </h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', lineHeight: '1.6', color: 'var(--text-main)', margin: '0' }}>
                私たちの身の回りにある多くのグローバルサービスを提供する米国企業。米国市場は長期的に右肩上がりの成長を維持している点が魅力です。
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="glass-card" style={{ padding: '1.5rem', borderRadius: '16px', background: 'var(--bg-warm)', border: '1px solid rgba(176, 58, 46, 0.05)', marginBottom: '1.2rem', display: 'flex', gap: '1rem', alignItems: 'flex-start', textAlign: 'left' }}>
            <div style={{ color: 'var(--primary)', flexShrink: 0, marginTop: '0.2rem' }}><Layers size={24} /></div>
            <div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: '800', color: 'var(--primary-dark)', margin: '0 0 0.4rem 0', lineHeight: '1.4' }}>
                3. 配当回数が多く、還元意識が高い
              </h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', lineHeight: '1.6', color: 'var(--text-main)', margin: '0' }}>
                米国株は<strong>年に4回（3ヶ月に一度）</strong>配当が支払われる銘柄が一般的です。また、何十年も連続で配当金を増やしている企業が多いのも特徴です。
              </p>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="glass-card" style={{ padding: '1.5rem', borderRadius: '16px', background: 'var(--bg-warm)', border: '1px solid rgba(176, 58, 46, 0.05)', marginBottom: '3rem', display: 'flex', gap: '1rem', alignItems: 'flex-start', textAlign: 'left' }}>
            <div style={{ color: 'var(--primary)', flexShrink: 0, marginTop: '0.2rem' }}><Clock size={24} /></div>
            <div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: '800', color: 'var(--primary-dark)', margin: '0 0 0.4rem 0', lineHeight: '1.4' }}>
                4. 日中に忙しい方も夜間に取引できる
              </h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', lineHeight: '1.6', color: 'var(--text-main)', margin: '0' }}>
                日本時間の夜間（23:30〜翌6:00等）に市場が開くため、日中の仕事に影響されることなく、仕事終わりにじっくり資産運用が行えます。
              </p>
            </div>
          </div>

          {/* Risks/Warnings Section */}
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.3rem, 3.5vw, 1.6rem)', fontWeight: '900', color: 'var(--primary-dark)', borderBottom: '2px solid var(--bg-warm)', paddingBottom: '0.8rem', marginTop: '3.5rem', marginBottom: '1.5rem' }}>
            あらかじめ知っておくべき注意点
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', marginBottom: '3rem' }}>
            <div style={{ borderLeft: '4px solid var(--primary)', paddingLeft: '1rem' }}>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem', fontWeight: '800', color: 'var(--primary-dark)', margin: '0 0 0.3rem 0', display: 'flex', alignItems: 'center' }}>
                <AlertTriangle size={16} style={{ marginRight: '0.4rem', color: 'var(--primary)' }} /> 為替による影響（為替リスク）
              </h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', lineHeight: '1.6', color: 'var(--text-muted)', margin: '0' }}>
                ドルベースで投資するため、為替相場の変動により円建てでの資産額が増減します。
              </p>
            </div>

            <div style={{ borderLeft: '4px solid var(--primary)', paddingLeft: '1rem' }}>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem', fontWeight: '800', color: 'var(--primary-dark)', margin: '0 0 0.3rem 0', display: 'flex', alignItems: 'center' }}>
                <AlertTriangle size={16} style={{ marginRight: '0.4rem', color: 'var(--primary)' }} /> 1日の制限価格（値幅制限）がない
              </h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', lineHeight: '1.6', color: 'var(--text-muted)', margin: '0' }}>
                ストップ高・ストップ安の仕組みがないため、株価変動幅が大きくなる場合があります。
              </p>
            </div>
          </div>

          {/* Investment Method Section */}
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.3rem, 3.5vw, 1.6rem)', fontWeight: '900', color: 'var(--primary-dark)', borderBottom: '2px solid var(--bg-warm)', paddingBottom: '0.8rem', marginTop: '3.5rem', marginBottom: '1.5rem' }}>
            基本的な投資の進め方
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
            リスクを抑えながら安全に米国株投資を進めるための、最も基本的な投資戦略が以下の2つです。
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', marginBottom: '3rem' }}>
            <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
              <div style={{ color: 'var(--primary)', flexShrink: 0, marginTop: '0.1rem' }}><CheckCircle size={18} /></div>
              <div>
                <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem', fontWeight: '800', color: 'var(--text-main)', margin: '0 0 0.2rem 0' }}>指数（インデックス）に投資して全体へ分散する</h4>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', lineHeight: '1.6', color: 'var(--text-muted)', margin: '0' }}>
                  個別企業の判断が難しい場合は、S&P500など市場全体に幅広く分散投資する手法から開始するのが一般的です。
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
              <div style={{ color: 'var(--primary)', flexShrink: 0, marginTop: '0.1rem' }}><CheckCircle size={18} /></div>
              <div>
                <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem', fontWeight: '800', color: 'var(--text-main)', margin: '0 0 0.2rem 0' }}>ドルコスト平均法（定期的な積立）を活用する</h4>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', lineHeight: '1.6', color: 'var(--text-muted)', margin: '0' }}>
                  一度に投資するのではなく、毎月一定金額を積み立てて買い付けることで、購入単価を平準化しやすくなります。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding" style={{ background: 'var(--bg-warm)', color: 'var(--text-main)', position: 'relative', overflow: 'hidden', textAlign: 'center', padding: '4rem 0' }}>
        <div style={{ position: 'absolute', top: '-50px', right: '-50px', width: '200px', height: '200px', borderRadius: '50%', background: 'rgba(176, 58, 46, 0.03)' }} />
        <div style={{ position: 'absolute', bottom: '-80px', left: '-80px', width: '300px', height: '300px', borderRadius: '50%', background: 'rgba(176, 58, 46, 0.02)' }} />
        
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '750px', margin: '0 auto' }}>
            <p style={{ fontFamily: 'var(--font-accent)', fontSize: '0.95rem', letterSpacing: '3px', fontWeight: '800', color: 'var(--primary)', marginBottom: '1.5rem', textTransform: 'uppercase' }}>
              Start Learning
            </p>
            
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.5rem, 4.5vw, 2.5rem)', fontWeight: '900', lineHeight: '1.4', marginBottom: '2rem', color: 'var(--text-main)' }}>
              実際のルールや、個人の状況に合わせた具体的な進め方は？
            </h2>

            <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(0.95rem, 2.5vw, 1.15rem)', lineHeight: '1.8', color: 'var(--text-muted)', marginBottom: '2.5rem' }}>
              具体的な設定方法や、自分に適した最適な購入比率など、一人では判断しにくい疑問を解消するために、<br className="sp-hide" />
              東京米国株クラブでは少人数（限定4名）のアットホームな勉強会を開催しています。
            </p>

            <div className="glass-card" style={{ background: 'var(--bg-white)', borderRadius: '24px', padding: '2.5rem 2rem', border: '1px solid var(--glass-border)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <p style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.1rem, 3vw, 1.3rem)', fontWeight: '800', lineHeight: '1.7', marginBottom: '2rem', color: 'var(--primary-dark)' }}>
                初心者向け米国株投資勉強会の詳細・スケジュールはこちらから
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
