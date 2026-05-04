import Image from "next/image";
import { ArrowLeft, CheckCircle2, Compass, BookOpen, Sun, Star } from "lucide-react";
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
                  alt="Yutaro Portrait"
                  width={500}
                  height={600}
                  className="about-image"
                />
              </div>
            </div>
            <div className="about-content-text">
              <h2 className="section-title">5年で1300%以上の実績。<br className="sp-hide" />その根本の「考え方」をお伝えしたい。</h2>
              <p className="notion-p">
                「なぜ、ある人は成功し、ある人は失敗するのか？」<br className="sp-hide" />
                米国株投資の世界に足を踏み入れて5年。1300%以上という運用実績を達成するプロセスで、私は一つの真理に辿り着きました。
              </p>
              <p className="notion-p">
                それは、投資の成否を分けるのは、高度なチャート分析や小手先のテクニックではなく、揺るぎない「投資哲学（マインドセット）」であるということです。
              </p>
              <p className="notion-p">
                東京米国株クラブは、初心者の皆様が投資を「ギャンブル」ではなく「堅実な資産形成」として捉え、理想の未来を自らの手でデザインできるよう設立されました。
                私の実体験と実績に基づいた、一生使える長期投資の知見を、惜しみなく共有します。
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
    </div>
  );
}
