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
              <h2 className="section-title">とびー<br className="sp-hide" />について</h2>
              <p className="notion-p" style={{ fontWeight: '700', fontSize: '1.1rem', color: 'var(--primary-dark)', marginBottom: '2rem' }}>
                運営代表者：とびー<br />
                <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: 'normal' }}>米国株長期投資家 / 東京米国株クラブ主宰</span>
              </p>

              <div className="skills-list" style={{ marginBottom: '2rem' }}>
                <h3 style={{ marginBottom: '1.2rem', color: 'var(--primary)', fontSize: '1rem', fontWeight: '800' }}>📌 経歴・実績</h3>
                <div className="skill-item"><CheckCircle2 color="var(--primary)" size={20} /><span>バイナリーオプションで約100万円を失った苦い経験あり</span></div>
                <div className="skill-item"><CheckCircle2 color="var(--primary)" size={20} /><span>その後、米国株長期投資を基礎から学び直し5年で+1300%超を達成</span></div>
                <div className="skill-item"><CheckCircle2 color="var(--primary)" size={20} /><span>サラリーマン・事業主として多忙な日々を送りながら、投資時間は1日1時間未満</span></div>
                <div className="skill-item"><CheckCircle2 color="var(--primary)" size={20} /><span>東京・オンラインで初心者向け投資勉強会を主催</span></div>
              </div>

              <div className="skills-list" style={{ marginBottom: '2rem' }}>
                <h3 style={{ marginBottom: '1.2rem', color: 'var(--primary)', fontSize: '1rem', fontWeight: '800' }}>📝 発信テーマ</h3>
                <div className="skill-item"><CheckCircle2 color="var(--primary)" size={20} /><span>初心者向けの米国株・NISA・長期投資の基礎知識</span></div>
                <div className="skill-item"><CheckCircle2 color="var(--primary)" size={20} /><span>米国個別株・ETFの選び方・考え方</span></div>
                <div className="skill-item"><CheckCircle2 color="var(--primary)" size={20} /><span>失敗から学んだお金のリアルを正直に発信</span></div>
                <div className="skill-item"><CheckCircle2 color="var(--primary)" size={20} /><span>ギャンブルではない、堅実な資産形成のマインドセット</span></div>
              </div>

              <div className="skills-list">
                <h3 style={{ marginBottom: '1.2rem', color: 'var(--primary)', fontSize: '1rem', fontWeight: '800' }}>💬 クラブ設立の思い</h3>
                <div className="skill-item"><CheckCircle2 color="var(--primary)" size={20} /><span>「かつての自分のように、知識不足で損失を出す人を一人でも減らしたい」</span></div>
                <div className="skill-item"><CheckCircle2 color="var(--primary)" size={20} /><span>小手先のテクニックではなく、一生使える投資哲学をわかりやすくお伝えしたい</span></div>
                <div className="skill-item"><CheckCircle2 color="var(--primary)" size={20} /><span>一人で悩まず、仲間と一緒に学べる場所をつくりたい</span></div>
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
