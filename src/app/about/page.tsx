import Image from "next/image";
import { ArrowLeft, ArrowRight, CheckCircle2, Compass, BookOpen, Sun, Star } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="about-page profile-page">
      <section className="post-header">
        <div className="container">
          <Link href="/" className="btn-link" style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
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
                運営代表者：トビー<br />
                <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: 'normal' }}>5年で資産1300%超を達成した個人投資家 / 東京米国株クラブ主宰</span>
              </p>
              <p className="notion-p">
                2020年、右も左も分からない状態から投資の世界に足を踏み入れました。当初は「投資」と「ギャンブル」の区別すらつかず、短期的な値動きに一喜一憂し、数十万円の損失を出す手痛い失敗を経験。一時は市場からの退場も真剣に考えました。
              </p>
              <p className="notion-p">
                しかし、「このままではいけない」と一念発起し、投資の本質、特に「米国株を活用した長期・積立・分散投資」を基礎から徹底的に学び直しました。
              </p>
              <p className="notion-p">
                ノイズに惑わされない投資マインドセットと、強固なポートフォリオ戦略を確立してからは成績が一変。5年で累積リターン1300%以上（13倍超）という実績を達成するに至りました。
              </p>
              <p className="notion-p">
                現在もサラリーマンとして多忙な日々を送り、同時に事業主としての活動も並行しながら、投資にかける時間は1日1時間未満。それでも、精神的なゆとりを保ちながら資産を確実に育て続ける「長期投資のスタイル」を実践しています。
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
                <span className="segment">ワクワクする未来を描ましょう。</span>
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
