import { ArrowLeft, ArrowRight, Compass, BookOpen, Sun, Star } from "lucide-react";
import Link from "next/link";

export default function MissionPage() {
  return (
    <div className="mission-page philosophy-page">
      <section className="post-header">
        <div className="container">
          <Link href="/" className="btn-link" style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
            <ArrowLeft size={18} style={{ marginRight: '0.5rem' }} /> トップへ戻る
          </Link>
          <span className="section-tag">OUR MISSION & PHILOSOPHY</span>
          <h1 className="post-title">理念とビジョン</h1>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="section-padding philosophy-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">PHILOSOPHY</span>
            <h2 className="section-title">私たちの理念</h2>
            <p className="section-subtitle">
              東京米国株クラブは、ただの「勉強コミュニティ」ではありません。<br />
              メンバー一人ひとりが人生の主導権を取り戻し、豊かで実りある未来を自ら描き、実現するための「学びと連帯の場」です。
            </p>
          </div>
          
          <div className="mission-box glass-card">
            <div className="mission-icon"><Star size={40} /></div>
            <div className="mission-content">
              <h3>MISSION</h3>
              <p className="mission-text">一生モノの「経済」と「時間」の自由を、<br className="sp-hide" />仲間と共に創り出す。</p>
            </div>
          </div>
          
          <div className="pillars-grid">
            <div className="pillar-card glass-card">
              <div className="pillar-icon"><Compass size={32} /></div>
              <h4>長く歩み続けるための「投資哲学」を育む</h4>
              <p>一時的な流行や短期的な利益を追う「ギャンブル的な投機」ではなく、一生モノの安定した資産を築くために必要な「長期・積立・分散」の正しい考え方を深く身につけます。</p>
              <span className="pillar-tag">自律の精神</span>
            </div>
            
            <div className="pillar-card glass-card">
              <div className="pillar-icon"><BookOpen size={32} /></div>
              <h4>実戦に基づく「本物」の知見を共有する</h4>
              <p>初心者が不必要な罠に陥らないよう、講師自身が5年で1300%超を達成した「実体験に基づく市場の本質とポートフォリオ戦略」を、専門用語を使わずに分かりやすく共有します。</p>
              <span className="pillar-tag">本質の教育</span>
            </div>
            
            <div className="pillar-card glass-card">
              <div className="pillar-icon"><Sun size={32} /></div>
              <h4>揺るぎない「豊かさ」と「ゆとり」を築く</h4>
              <p>お金のために時間や精神を犠牲にするのではなく、「お金」と「時間」の両方を自分の手でコントロールし、人生の選択肢と心のゆとりを最大限に広げていきます。</p>
              <span className="pillar-tag">自由の実現</span>
            </div>
          </div>
        </div>
      </section>

      {/* Dream Vision Section */}
      <section className="section-padding" style={{ background: 'linear-gradient(135deg, #CD6155 0%, #E74C3C 100%)', color: '#ffffff', position: 'relative', overflow: 'hidden', textAlign: 'center' }}>
        <div style={{ position: 'absolute', top: '-50px', right: '-50px', width: '200px', height: '200px', borderRadius: '50%', background: 'rgba(255, 255, 255, 0.08)' }} />
        <div style={{ position: 'absolute', bottom: '-80px', left: '-80px', width: '300px', height: '300px', borderRadius: '50%', background: 'rgba(255, 255, 255, 0.05)' }} />
        
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '750px', margin: '0 auto' }}>
            <p style={{ fontSize: '1rem', letterSpacing: '3px', fontWeight: '700', color: 'rgba(255, 255, 255, 0.85)', marginBottom: '1.5rem', textTransform: 'uppercase' }}>
              Dream Together
            </p>
            
            <h2 style={{ fontSize: 'clamp(1.8rem, 4.5vw, 2.8rem)', fontWeight: '900', lineHeight: '1.4', marginBottom: '2rem', color: '#ffffff' }}>
              <span className="segment">あなたが手にした資産で、</span><br />
              <span className="segment">どんな夢を叶えたいですか？</span>
            </h2>

            <div style={{ width: '60px', height: '3px', background: '#ffffff', margin: '0 auto 2.5rem', borderRadius: '2px' }} />

            <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', lineHeight: '2', color: '#ffffff', fontWeight: '600', marginBottom: '1.5rem' }}>
              <span className="segment">大切な人との特別な時間、</span>
              <span className="segment">まだ見ぬ景色への冒険、</span>
              <span className="segment">ずっと温めてきた挑戦。</span>
            </p>

            <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.15rem)', lineHeight: '2', color: 'rgba(255, 255, 255, 0.9)', marginBottom: '2rem' }}>
              <span className="segment">投資は、そんな「ワクワクする未来」を</span>
              <span className="segment">現実にするための手段です。</span><br />
              <span className="segment">私たちは、その夢を叶えるお手伝いがしたい。</span>
            </p>

            <div className="glass-card" style={{ background: 'rgba(255, 255, 255, 0.15)', borderRadius: '20px', padding: '2.5rem 2rem', marginBottom: '2.5rem', border: '1px solid rgba(255, 255, 255, 0.2)' }}>
              <p style={{ fontSize: 'clamp(1.1rem, 3vw, 1.4rem)', fontWeight: '800', lineHeight: '1.8', margin: 0, color: '#ffffff' }}>
                <span className="segment">一人で悩まなくて大丈夫。</span><br />
                <span className="segment">仲間と一緒に、</span>
                <span className="segment">ワクワクする未来を描きましょう。</span>
              </p>
            </div>

            <Link href="/seminar" className="btn" style={{ background: '#ffffff', color: '#CD6155', fontSize: '1.15rem', padding: '1.2rem 3rem', fontWeight: '900', borderRadius: '50px', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', boxShadow: '0 4px 20px rgba(255, 255, 255, 0.15)', transition: 'all 0.3s ease' }}>
              まずは勉強会に参加してみる <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
