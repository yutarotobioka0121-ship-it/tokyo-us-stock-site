import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
export const dynamic = 'force-dynamic';

export default async function Home() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content-left slide-up">
              <h1 className="hero-title">
                <span className="segment block-segment">東京米国株クラブへようこそ</span>
                <span className="segment-accent">
                  <span className="segment">米国株の長期投資に興味がある仲間が集まる、ゆるくて温かいコミュニティです。</span>
                  <span className="segment">難しく考えなくて大丈夫。</span>
                  <span className="segment">知識ゼロからでも、一緒に学んで一緒に成長できる場所を目指しています。</span>
                </span>
              </h1>

              {/* スマホ用Hero画像：タイトルの直下に配置 */}
              <div className="hero-image-mobile">
                <div className="hero-image-wrapper glass-card">
                  <Image
                    src="/hero.png"
                    alt="米国株 投資勉強会"
                    width={600}
                    height={450}
                    style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
                    priority
                    className="hero-image"
                  />
                </div>
              </div>

              <div className="hero-actions">
                <Link href="/about" className="btn btn-primary">
                  自己紹介 <ArrowRight size={20} />
                </Link>
              </div>
            </div>
            {/* PC用Hero画像 */}
            <div className="hero-image-right hero-image-desktop slide-up delay-1">
              <div className="hero-image-wrapper glass-card">
                <Image
                  src="/hero.png"
                  alt="米国株 投資勉強会"
                  width={600}
                  height={450}
                  style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
                  priority
                  className="hero-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Study Session Section */}
      <section className="featured-section">
        <div className="container">
          <div className="featured-grid">
            <div className="featured-content slide-up">
              <span className="featured-tag">おすすめ勉強会</span>

              <h2 className="featured-title">
                <span className="segment">米国株投資勉強会</span>
              </h2>
              <h3 className="featured-subtitle-line">
                <span className="segment">初心者向けの米国株長期投資勉強会です</span>
              </h3>

              {/* スマホ用Featured画像：タイトルの直下に配置 */}
              <div className="featured-image-mobile">
                <div className="featured-image-wrapper" style={{ borderRadius: '24px', overflow: 'hidden', boxShadow: 'var(--shadow-soft)' }}>
                  <Image
                    src="/workshop.png"
                    alt="Investment Workshop"
                    width={600}
                    height={600}
                    style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
                    className="featured-image"
                  />
                </div>
              </div>
              <p className="featured-desc">
                <span className="featured-lead-text">
                  <span className="segment">米国株を基礎から学べる、初心者歓迎の勉強会です。</span>
                  <span className="segment">難しい専門用語は使いません。</span>
                  <span className="segment">カフェでお茶をするような気軽な雰囲気で、</span>
                  <span className="segment">知識ゼロでも大丈夫。少しずつ、楽しみながらやっていきましょう。</span>
                  <span className="segment">一人で悩まず、仲間と一緒に学びませんか？</span>
                </span>
              </p>
              <div style={{ marginTop: '2rem' }}>
                <Link href="/seminar" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '1rem', padding: '0.8rem 2.2rem', borderRadius: '50px', fontWeight: '800' }}>
                  詳細はこちら <ArrowRight size={20} />
                </Link>
              </div>


            </div>
            
            {/* PC用Featured画像 */}
            <div className="featured-image-container featured-image-desktop slide-up delay-1">
              <div className="featured-image-wrapper">
                <Image
                  src="/workshop.png"
                  alt="Investment Workshop"
                  width={600}
                  height={600}
                  style={{ objectFit: 'cover' }}
                  className="featured-image"
                />
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
              Your Future Starts Here
            </p>
            
            <h2 style={{ fontSize: 'clamp(1.8rem, 4.5vw, 2.8rem)', fontWeight: '900', lineHeight: '1.4', marginBottom: '2rem', color: '#ffffff' }}>
              <span className="segment">投資を学んで、</span>
              <span className="segment">あなたの人生に</span><br />
              <span className="segment">ワクワクしよう。</span>
            </h2>

            <div style={{ width: '60px', height: '3px', background: '#ffffff', margin: '0 auto 2.5rem', borderRadius: '2px' }} />

            <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', lineHeight: '2', color: '#ffffff', fontWeight: '600', marginBottom: '1.5rem' }}>
              <span className="segment">もし、お金の不安がなくなったら</span>
              <span className="segment">あなたは何をしたいですか？</span>
            </p>

            <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.15rem)', lineHeight: '2', color: 'rgba(255, 255, 255, 0.9)', marginBottom: '2rem' }}>
              <span className="segment">家族との時間、好きな場所への旅、</span>
              <span className="segment">夢だったあのチャレンジ ——</span><br />
              <span className="segment">資産を育てることは、</span>
              <span className="segment">未来の選択肢を増やすこと。</span>
            </p>

            <div className="glass-card" style={{ background: 'rgba(255, 255, 255, 0.15)', borderRadius: '20px', padding: '2.5rem 2rem', marginBottom: '2.5rem', border: '1px solid rgba(255, 255, 255, 0.2)' }}>
              <p style={{ fontSize: 'clamp(1.1rem, 3vw, 1.4rem)', fontWeight: '800', lineHeight: '1.8', margin: 0, color: '#ffffff' }}>
                <span className="segment">あなたの夢を叶えるための</span>
                <span className="segment">「はじめの一歩」を、</span><br />
                <span className="segment">一緒に踏み出しませんか？</span>
              </p>
            </div>

            <p style={{ fontSize: '1rem', color: 'rgba(255, 255, 255, 0.85)', marginBottom: '2.5rem', lineHeight: '1.8' }}>
              <span className="segment">難しいことは何もありません。</span>
              <span className="segment">まずは気軽に、</span>
              <span className="segment">仲間と一緒に考えることから始めましょう。</span>
            </p>

            <Link href="/seminar" className="btn" style={{ background: '#ffffff', color: '#CD6155', fontSize: '1.15rem', padding: '1.2rem 3rem', fontWeight: '900', borderRadius: '50px', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', boxShadow: '0 4px 20px rgba(255, 255, 255, 0.15)', transition: 'all 0.3s ease' }}>
              勉強会の詳細を見る <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
