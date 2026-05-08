import Image from "next/image";
import { ArrowLeft, ArrowRight, CheckCircle2, Compass, BookOpen, Sun, Star } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="about-page">
      <section className="post-header">
        <div className="container">
          <Link href="/" className="btn-link" style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <ArrowLeft size={18} style={{ marginRight: '0.5rem' }} /> トップへ戻る
          </Link>
          <span className="section-tag">ABOUT OUR COMMUNITY</span>
          <h1 className="post-title">東京米国株クラブについて</h1>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="about-grid">
            <div className="about-image-container">
              <div className="about-image-wrapper glass-card">
                <Image
                  src="/profile.png"
                  alt="トビー"
                  width={500}
                  height={500}
                  style={{ objectFit: 'cover', width: '100%', height: 'auto', aspectRatio: '1/1' }}
                  className="about-image"
                />
              </div>
            </div>
            <div className="about-content-text">
              <h2 className="section-title">5年で1300%以上の実績。<br className="sp-hide" />その根本の「投資哲学」をお伝えしたい。</h2>
              <p className="notion-p" style={{ fontWeight: '700', fontSize: '1.1rem', color: 'var(--primary-dark)', marginBottom: '1.5rem' }}>
                運営代表者：Yutaro Tobioka（トビー）<br />
                <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: 'normal' }}>5年で資産1300%超を達成した個人投資家 / 東京米国株クラブ主宰</span>
              </p>
              <p className="notion-p">
                2020年、右も左も分からない状態から投資の世界に足を踏み入れました。当初は「投資」と「ギャンブル」の区別すらつかず、短期的な値動きに一喜一憂し、数十万円の損失を出す手痛い失敗を経験。一時は市場からの退場も真剣に考えました。
              </p>
              <p className="notion-p">
                しかし、「このままではいけない」と一念発起し、投資の本質、特に「米国株を活用した長期・積立・分散投資」を基礎から徹底的に学び直しました。ノイズに惑わされない投資マインドセットと、強固なポートフォリオ戦略を確立してからは成績が一変。5年で累積リターン1300%以上（13倍超）という実績を達成するに至りました。
              </p>
              <p className="notion-p">
                現在もサラリーマンとして多忙な日々を送り、同時に事業主としての活動も並行しながら、投資にかける時間は1日平均1時間未満。それでも、精神的なゆとりを保ちながら資産を確実に育て続ける「ストレスフリーな長期投資スタイル」を実践しています。
              </p>
              <p className="notion-p">
                「かつての自分のように、知識がないために手痛い損失を出し、投資そのものを嫌いになってしまう人を一人でも減らしたい」<br />
                この強い想いから、東京米国株クラブを立ち上げました。本クラブでは、小手先のトレードテクニックではなく、一生使える「本質的な資産形成のマインドセット」を、完全な初心者目線で分かりやすくお伝えしています。
              </p>
              
              <div className="skills-list">
                <h3 style={{ marginBottom: '1.5rem', color: 'var(--primary)' }}>私たちのコミットメント</h3>
                <div className="skill-item">
                  <CheckCircle2 color="var(--primary)" size={20} />
                  <span>5年1300%以上の実績に裏打ちされた本物の投資哲学</span>
                </div>
                <div className="skill-item">
                  <CheckCircle2 color="var(--primary)" size={20} />
                  <span>初心者が迷わない、長期投資の核心を突いた教育</span>
                </div>
                <div className="skill-item">
                  <CheckCircle2 color="var(--primary)" size={20} />
                  <span>変化の激しい米国市場を読み解くリテラシーの提供</span>
                </div>
                <div className="skill-item">
                  <CheckCircle2 color="var(--primary)" size={20} />
                  <span>共に成長し、励まし合える投資仲間のコミュニティ</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Philosophy Section */}
      <section className="section-padding philosophy-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">PHILOSOPHY</span>
            <h2 className="section-title">私たちの理念</h2>
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
              <h4>永く歩み続けるための「投資哲学」を育む</h4>
              <p>一時的な利益を追うのではなく、一生モノの資産を築くために必要な「長期・分散」の考え方を深く身につけます。</p>
              <span className="pillar-tag">自律の精神</span>
            </div>
            
            <div className="pillar-card glass-card">
              <div className="pillar-icon"><BookOpen size={32} /></div>
              <h4>実戦に基づく「本物」の知見を共有する</h4>
              <p>初心者がギャンブルに陥らないよう、実体験から得た市場の本質と分析手法を体系的に共有します。</p>
              <span className="pillar-tag">本質の教育</span>
            </div>
            
            <div className="pillar-card glass-card">
              <div className="pillar-icon"><Sun size={32} /></div>
              <h4>揺るぎない「豊かさ」と「ゆとり」を築く</h4>
              <p>「お金」と「時間」を自分の手に取り戻し、人生の選択肢を最大限に広げていきます。</p>
              <span className="pillar-tag">自由の実現</span>
            </div>
          </div>
        </div>
      </section>

      {/* Dream Vision Section */}
      <section className="section-padding" style={{ background: 'linear-gradient(135deg, var(--primary-dark) 0%, var(--primary) 50%, #c0392b 100%)', color: 'white', position: 'relative', overflow: 'hidden', textAlign: 'center' }}>
        <div style={{ position: 'absolute', top: '-50px', right: '-50px', width: '200px', height: '200px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)' }} />
        <div style={{ position: 'absolute', bottom: '-80px', left: '-80px', width: '300px', height: '300px', borderRadius: '50%', background: 'rgba(255,255,255,0.03)' }} />
        
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '750px', margin: '0 auto' }}>
            <p style={{ fontSize: '1rem', letterSpacing: '3px', fontWeight: '700', opacity: 0.8, marginBottom: '1.5rem', textTransform: 'uppercase' }}>
              Dream Together
            </p>
            
            <h2 style={{ fontSize: 'clamp(1.8rem, 4.5vw, 2.8rem)', fontWeight: '900', lineHeight: '1.4', marginBottom: '2rem' }}>
              <span style={{ display: 'inline-block' }}>あなたが手にした資産で、</span><br />
              <span style={{ display: 'inline-block', color: '#ffd700' }}>どんな夢を叶えたいですか？</span>
            </h2>

            <div style={{ width: '60px', height: '3px', background: '#ffd700', margin: '0 auto 2.5rem', borderRadius: '2px' }} />

            <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', lineHeight: '2', opacity: 0.95, marginBottom: '1.5rem' }}>
              <span style={{ display: 'inline-block' }}>大切な人との特別な時間、</span>
              <span style={{ display: 'inline-block' }}>まだ見ぬ景色への冒険、</span>
              <span style={{ display: 'inline-block' }}>ずっと温めてきた挑戦。</span>
            </p>

            <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.15rem)', lineHeight: '2', opacity: 0.9, marginBottom: '2rem' }}>
              <span style={{ display: 'inline-block' }}>投資は、そんな「ワクワクする未来」を</span>
              <span style={{ display: 'inline-block' }}>現実にするための手段です。</span><br />
              <span style={{ display: 'inline-block' }}>私たちは、その夢を叶えるお手伝いがしたい。</span>
            </p>

            <div style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', borderRadius: '20px', padding: '2.5rem 2rem', marginBottom: '2.5rem', border: '1px solid rgba(255,255,255,0.15)' }}>
              <p style={{ fontSize: 'clamp(1.1rem, 3vw, 1.4rem)', fontWeight: '800', lineHeight: '1.8', margin: 0 }}>
                <span style={{ display: 'inline-block' }}>一人で悩まなくて大丈夫。</span><br />
                <span style={{ display: 'inline-block' }}>仲間と一緒に、</span>
                <span style={{ display: 'inline-block', color: '#ffd700' }}>ワクワクする未来を描きましょう。</span>
              </p>
            </div>

            <Link href="/seminar" className="btn" style={{ background: '#ffd700', color: 'var(--primary-dark)', fontSize: '1.15rem', padding: '1.2rem 3rem', fontWeight: '900', borderRadius: '50px', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', boxShadow: '0 4px 20px rgba(255, 215, 0, 0.3)' }}>
              まずは勉強会に参加してみる <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
