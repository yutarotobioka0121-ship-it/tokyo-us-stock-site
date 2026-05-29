import { ArrowLeft, Compass, BookOpen, Sun, Star } from "lucide-react";
import Link from "next/link";

export default function MissionPage() {
  return (
    <div className="mission-page philosophy-page" style={{ overflowWrap: 'break-word' }}>
      <section className="post-header" style={{ background: 'var(--bg-warm)', padding: '100px 0 2.5rem 0', textAlign: 'left' }}>
        <div className="container">
          <Link href="/" className="btn-link" style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', fontFamily: 'var(--font-body)', fontWeight: '700' }}>
            <ArrowLeft size={18} style={{ marginRight: '0.5rem' }} /> トップへ戻る
          </Link>
          <h1 className="post-title" style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.8rem, 6vw, 2.8rem)', fontWeight: '900', textAlign: 'left', marginLeft: '0', marginRight: 'auto', maxWidth: 'none', marginBottom: '0', color: 'var(--primary-dark)' }}>
            理念とビジョン
          </h1>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="philosophy-section" style={{ background: 'white', padding: 'clamp(3.5rem, 10vw, 6rem) 0' }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'left', marginBottom: '3rem' }}>
            <span className="section-tag" style={{ fontFamily: 'var(--font-accent)', display: 'inline-block' }}>PHILOSOPHY</span>
            <h2 className="section-title" style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.8rem, 5vw, 2.5rem)', fontWeight: '900', color: 'var(--primary-dark)', marginTop: '0.5rem', marginBottom: '1.5rem', textAlign: 'left' }}>私たちの理念</h2>
            <p className="section-subtitle" style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(1rem, 3.5vw, 1.15rem)', lineHeight: '1.8', color: 'var(--text-muted)', textAlign: 'left', margin: '0', maxWidth: '800px' }}>
              東京米国株クラブは、ただの「勉強コミュニティ」ではありません。<br className="sp-hide" />
              メンバー一人ひとりが人生の主導権を取り戻し、豊かで実りある未来を自ら描き、実現するための「学びと連帯の場」です。
            </p>
          </div>
          
          <div className="mission-box glass-card" style={{ background: 'var(--bg-warm)', padding: '2rem', borderRadius: '24px', border: '1px solid rgba(176, 58, 46, 0.08)', display: 'flex', gap: '1.5rem', alignItems: 'center', marginBottom: '3rem', textAlign: 'left' }}>
            <div className="mission-icon" style={{ color: 'var(--primary)', flexShrink: 0 }}><Star size={40} /></div>
            <div className="mission-content">
              <h3 style={{ fontFamily: 'var(--font-accent)', fontSize: '0.9rem', letterSpacing: '2px', fontWeight: '800', color: 'var(--primary)', margin: '0 0 0.5rem 0' }}>MISSION</h3>
              <p className="mission-text" style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.1rem, 4vw, 1.4rem)', fontWeight: '800', lineHeight: '1.8', color: 'var(--text-main)', margin: '0' }}>一生モノの「経済」と「時間」の自由を、<br className="sp-hide" />仲間と共に創り出す。</p>
            </div>
          </div>
          
          <div className="pillars-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            <div className="pillar-card glass-card" style={{ padding: '2rem', borderRadius: '20px', background: 'white', border: '1px solid rgba(0, 0, 0, 0.05)', boxShadow: 'var(--shadow-soft)', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left' }}>
              <div className="pillar-icon" style={{ color: 'var(--primary)', marginBottom: '1.2rem' }}><Compass size={32} /></div>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '1rem', lineHeight: '1.4' }}>長く歩み続けるための「投資哲学」を育む</h4>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', lineHeight: '1.8', color: 'var(--text-muted)', marginBottom: '1.5rem', flexGrow: 1 }}>一時的な流行や短期的な利益を追う「ギャンブル的な投機」ではなく、一生モノの安定した資産を築くために必要な「長期・積立・分散」の正しい考え方を深く身につけます。</p>
              <span className="pillar-tag" style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', fontWeight: '700', padding: '0.3rem 0.8rem', background: 'var(--bg-warm)', color: 'var(--text-main)', borderRadius: '20px' }}>自律の精神</span>
            </div>
            
            <div className="pillar-card glass-card" style={{ padding: '2rem', borderRadius: '20px', background: 'white', border: '1px solid rgba(0, 0, 0, 0.05)', boxShadow: 'var(--shadow-soft)', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left' }}>
              <div className="pillar-icon" style={{ color: 'var(--primary)', marginBottom: '1.2rem' }}><BookOpen size={32} /></div>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '1rem', lineHeight: '1.4' }}>実戦に基づく「本物」の知見を共有する</h4>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', lineHeight: '1.8', color: 'var(--text-muted)', marginBottom: '1.5rem', flexGrow: 1 }}>初心者が不必要な罠に陥らないよう、講師自身が5年で1300%超を達成した「実体験に基づく市場の本質とポートフォリオ戦略」を、専門用語を使わずに分かりやすく共有します。</p>
              <span className="pillar-tag" style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', fontWeight: '700', padding: '0.3rem 0.8rem', background: 'var(--bg-warm)', color: 'var(--text-main)', borderRadius: '20px' }}>本質の教育</span>
            </div>
            
            <div className="pillar-card glass-card" style={{ padding: '2rem', borderRadius: '20px', background: 'white', border: '1px solid rgba(0, 0, 0, 0.05)', boxShadow: 'var(--shadow-soft)', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left' }}>
              <div className="pillar-icon" style={{ color: 'var(--primary)', marginBottom: '1.2rem' }}><Sun size={32} /></div>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '1rem', lineHeight: '1.4' }}>揺るぎない「豊かさ」と「ゆとり」を築く</h4>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', lineHeight: '1.8', color: 'var(--text-muted)', marginBottom: '1.5rem', flexGrow: 1 }}>お金のために時間や精神を犠牲にするのではなく、「お金」と「時間」の両方を自分の手でコントロールし、人生の選択肢と心のゆとりを最大限に広げていきます。</p>
              <span className="pillar-tag" style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', fontWeight: '700', padding: '0.3rem 0.8rem', background: 'var(--bg-warm)', color: 'var(--text-main)', borderRadius: '20px' }}>自由の実現</span>
            </div>
          </div>
        </div>
      </section>

      {/* Dream Vision Section */}
      <section className="section-padding" style={{ background: 'var(--bg-warm)', color: 'var(--text-main)', position: 'relative', overflow: 'hidden', textAlign: 'center', padding: '2.5rem 0' }}>
        <div style={{ position: 'absolute', top: '-50px', right: '-50px', width: '200px', height: '200px', borderRadius: '50%', background: 'rgba(176, 58, 46, 0.03)' }} />
        <div style={{ position: 'absolute', bottom: '-80px', left: '-80px', width: '300px', height: '300px', borderRadius: '50%', background: 'rgba(176, 58, 46, 0.02)' }} />
        
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '750px', margin: '0 auto' }}>
            <p style={{ fontFamily: 'var(--font-accent)', fontSize: '0.95rem', letterSpacing: '3px', fontWeight: '800', color: 'var(--primary)', marginBottom: '1.5rem', textTransform: 'uppercase' }}>
              Dream Together
            </p>
            
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.5rem, 4.5vw, 2.8rem)', fontWeight: '900', lineHeight: '1.4', marginBottom: '2.5rem', color: 'var(--text-main)' }}>
              あなたが手にした資産で、<br className="sp-hide" />
              どんな夢を叶えたいですか？
            </h2>

            <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', lineHeight: '2', color: 'var(--text-main)', fontWeight: '700', marginBottom: '1.5rem' }}>
              大切な人との特別な時間、まだ見ぬ景色への冒険、ずっと温めてきた挑戦。
            </p>

            <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(0.95rem, 2.5vw, 1.15rem)', lineHeight: '2', color: 'var(--text-muted)', marginBottom: '2rem' }}>
              投資は、そんな「ワクワクする未来」を現実にするための手段です。<br className="sp-hide" />
              私たちは、その夢を叶えるお手伝いがしたい。
            </p>

            <div className="glass-card" style={{ background: 'var(--bg-white)', borderRadius: '20px', padding: '2.5rem 2rem', margin: 0, border: '1px solid var(--glass-border)' }}>
              <p style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.1rem, 3vw, 1.4rem)', fontWeight: '800', lineHeight: '1.8', margin: 0, color: 'var(--primary-dark)' }}>
                一人で悩まなくて大丈夫。<br className="sp-hide" />
                仲間と一緒に、ワクワクする未来を描きましょう。
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
