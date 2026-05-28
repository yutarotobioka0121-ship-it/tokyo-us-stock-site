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
          <span className="section-tag">PROFILE</span>
          <h1 className="post-title">運営代表者 プロフィール</h1>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="about-grid">
            <div className="about-image-container">
              <div className="about-image-wrapper glass-card">
                <Image
                  src="/profile.png"
                  alt="とびー"
                  width={500}
                  height={500}
                  style={{ objectFit: 'cover', width: '100%', height: 'auto', aspectRatio: '1/1' }}
                  className="about-image"
                />
              </div>
            </div>
            <div className="about-content-text">
              <h2 className="section-title">とびー</h2>
              <p className="notion-p" style={{ fontWeight: '700', fontSize: '1.1rem', color: 'var(--primary-dark)', marginBottom: '0.5rem' }}>
                米国株長期投資家 / 東京米国株クラブ主宰
              </p>
              <p className="notion-p" style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '2rem', lineHeight: '1.7' }}>
                「投資はギャンブル」と思っていた元・完全な素人が、失敗と学びを経て資産を13倍にするまでの話。
              </p>

              <div className="skills-list" style={{ marginBottom: '2rem' }}>
                <h3 style={{ marginBottom: '1.2rem', color: 'var(--primary)', fontSize: '1rem', fontWeight: '800' }}>📌 経歴・ストーリー</h3>
                <div className="skill-item"><CheckCircle2 color="var(--primary)" size={20} /><span>もともと「投資＝ギャンブル」と思っていた完全な素人からスタート</span></div>
                <div className="skill-item"><CheckCircle2 color="var(--primary)" size={20} /><span>バイナリーオプションで合計100万円近くを失う痛烈な失敗を経験</span></div>
                <div className="skill-item"><CheckCircle2 color="var(--primary)" size={20} /><span>「金持ち父さん貧乏父さん」との出会いをきっかけに投資の本質を学び直す</span></div>
                <div className="skill-item"><CheckCircle2 color="var(--primary)" size={20} /><span>財務諸表の読み方から徹底的に学習し、米国個別株（NVIDIA等）への長期投資を開始</span></div>
                <div className="skill-item"><CheckCircle2 color="var(--primary)" size={20} /><span>ノイズに惑わされない投資マインドセットを確立し、5年で+1300%超（約13倍）を達成</span></div>
                <div className="skill-item"><CheckCircle2 color="var(--primary)" size={20} /><span>現在はサラリーマン・事業主として多忙な毎日を送りながら、投資時間は1日1時間未満</span></div>
              </div>

              <div className="skills-list" style={{ marginBottom: '2rem' }}>
                <h3 style={{ marginBottom: '1.2rem', color: 'var(--primary)', fontSize: '1rem', fontWeight: '800' }}>📝 発信していること</h3>
                <div className="skill-item"><CheckCircle2 color="var(--primary)" size={20} /><span>初心者向けの米国株・NISA・長期投資の基礎知識</span></div>
                <div className="skill-item"><CheckCircle2 color="var(--primary)" size={20} /><span>米国個別株・ETFの選び方・財務諸表の読み方</span></div>
                <div className="skill-item"><CheckCircle2 color="var(--primary)" size={20} /><span>バイナリー損失〜資産13倍まで、失敗から学んだリアルな経験談</span></div>
                <div className="skill-item"><CheckCircle2 color="var(--primary)" size={20} /><span>ギャンブルにならない、堅実な長期資産形成のマインドセット</span></div>
                <div className="skill-item"><CheckCircle2 color="var(--primary)" size={20} /><span>東京・オンラインで初心者向け投資勉強会を主催</span></div>
              </div>

              <div className="skills-list">
                <h3 style={{ marginBottom: '1.2rem', color: 'var(--primary)', fontSize: '1rem', fontWeight: '800' }}>💬 クラブを立ち上げた理由</h3>
                <div className="skill-item"><CheckCircle2 color="var(--primary)" size={20} /><span>「かつての自分のように、知識不足のまま損失を出す人を一人でも減らしたい」</span></div>
                <div className="skill-item"><CheckCircle2 color="var(--primary)" size={20} /><span>小手先のテクニックではなく、一生使える投資哲学を初心者目線でわかりやすく伝えたい</span></div>
                <div className="skill-item"><CheckCircle2 color="var(--primary)" size={20} /><span>一人で悩まず、仲間と一緒に学べる温かいコミュニティをつくりたい</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dream Vision Section */}
      <section className="section-padding" style={{ background: 'var(--bg-warm)', color: 'var(--text-main)', position: 'relative', overflow: 'hidden', textAlign: 'center' }}>
        <div style={{ position: 'absolute', top: '-50px', right: '-50px', width: '200px', height: '200px', borderRadius: '50%', background: 'rgba(176, 58, 46, 0.03)' }} />
        <div style={{ position: 'absolute', bottom: '-80px', left: '-80px', width: '300px', height: '300px', borderRadius: '50%', background: 'rgba(176, 58, 46, 0.02)' }} />
        
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '750px', margin: '0 auto' }}>
            <p style={{ fontSize: '0.95rem', letterSpacing: '3px', fontWeight: '800', color: 'var(--primary)', marginBottom: '1.5rem', textTransform: 'uppercase' }}>
              Dream Together
            </p>
            
            <h2 style={{ fontSize: 'clamp(1.8rem, 4.5vw, 2.8rem)', fontWeight: '900', lineHeight: '1.4', marginBottom: '2.5rem', color: 'var(--text-main)' }}>
              <span className="segment">あなたが手にした資産で、</span><br />
              <span className="segment">どんな夢を叶えたいですか？</span>
            </h2>

            <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', lineHeight: '2', color: 'var(--text-main)', fontWeight: '700', marginBottom: '1.5rem' }}>
              <span className="segment">大切な人との特別な時間、</span>
              <span className="segment">まだ見ぬ景色への冒険、</span>
              <span className="segment">ずっと温めてきた挑戦。</span>
            </p>

            <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.15rem)', lineHeight: '2', color: 'var(--text-muted)', marginBottom: '2rem' }}>
              <span className="segment">投資は、そんな「ワクワクする未来」を</span>
              <span className="segment">現実にするための手段です。</span><br />
              <span className="segment">私たちは、その夢を叶えるお手伝いがしたい。</span>
            </p>

            <div className="glass-card" style={{ background: 'var(--bg-white)', borderRadius: '20px', padding: '2.5rem 2rem', margin: 0, border: '1px solid var(--glass-border)' }}>
              <p style={{ fontSize: 'clamp(1.1rem, 3vw, 1.4rem)', fontWeight: '800', lineHeight: '1.8', margin: 0, color: 'var(--primary-dark)' }}>
                <span className="segment">一人で悩まなくて大丈夫。</span><br />
                <span className="segment">仲間と一緒に、</span>
                <span className="segment">ワクワクする未来を描ましょう。</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
