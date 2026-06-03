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
              <h1 className="hero-title" style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.5rem, 5vw, 2.8rem)', color: 'var(--primary-dark)', lineHeight: '1.3', fontWeight: '900', marginBottom: '1.5rem' }}>
                東京米国株クラブへようこそ
              </h1>

              {/* スマホ用Hero画像：タイトルの直下に配置 */}
              <div className="hero-image-mobile" style={{ margin: '2rem auto', width: '100%', position: 'relative' }}>
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
                <div className="hero-character-badge">
                  <Image
                    src="/character.png"
                    alt="とびーキャラクター"
                    width={100}
                    height={133}
                    style={{ objectFit: 'contain' }}
                  />
                </div>
              </div>

              <p className="hero-subtitle-text" style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(0.95rem, 2.2vw, 1.15rem)', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '2rem' }}>
                米国株投資に興味がある仲間が集まる、ゆるくて温かいコミュニティです。<br className="sp-hide" />
                難しく考えなくて大丈夫です。<br className="sp-hide" />
                知識ゼロからでも、一緒に学んで一緒に成長する、誰でも参加できる場所を目指しています。
              </p>

              <div className="hero-actions">
                <Link href="/about" className="btn btn-primary">
                  自己紹介 <ArrowRight size={20} />
                </Link>
              </div>
            </div>
            {/* PC用Hero画像 */}
            <div className="hero-image-right hero-image-desktop slide-up delay-1" style={{ position: 'relative' }}>
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
              <div className="hero-character-badge">
                <Image
                  src="/character.png"
                  alt="とびーキャラクター"
                  width={150}
                  height={200}
                  style={{ objectFit: 'contain' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Study Session Section */}
      <section className="featured-section section-padding">
        <div className="container">
          <div className="featured-grid">
            <div className="featured-content slide-up">
              <span className="featured-tag">おすすめ勉強会</span>

              <h2 className="featured-title" style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.8rem, 5vw, 2.8rem)', color: 'var(--primary-dark)', lineHeight: '1.3', fontWeight: '900', marginBottom: '0.75rem' }}>
                米国株投資勉強会
              </h2>
              <h3 className="featured-subtitle-line" style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.1rem, 3.5vw, 1.6rem)', color: 'var(--primary-light)', marginBottom: '1.5rem', fontWeight: '900', lineHeight: '1.3' }}>
                初心者向けの米国株投資勉強会です
              </h3>

              {/* スマホ用Featured画像：タイトルの直下に配置 */}
              <div className="featured-image-mobile" style={{ margin: '2rem auto', width: '100%' }}>
                <div className="featured-image-wrapper glass-card">
                  <Image
                    src="/workshop.png"
                    alt="Investment Workshop"
                    width={600}
                    height={450}
                    style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
                    className="featured-image"
                  />
                </div>
              </div>
              <p className="featured-desc" style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(0.95rem, 2.2vw, 1.15rem)', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '2rem' }}>
                米国株を基礎から学べる、初心者歓迎の勉強会です。<br className="sp-hide" />
                難しい専門用語は使いません。<br className="sp-hide" />
                カフェでお茶をするような気軽な雰囲気で、<br className="sp-hide" />
                知識ゼロでも大丈夫。少しずつ、楽しみながらやっていきましょう。<br className="sp-hide" />
                一人で悩まず、仲間と一緒に学びませんか？
              </p>
              <div style={{ marginTop: '2rem' }}>
                <Link href="/seminar" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '1rem', padding: '0.8rem 2.2rem', borderRadius: '50px', fontWeight: '800' }}>
                  詳細はこちら <ArrowRight size={20} />
                </Link>
              </div>


            </div>
            
            {/* PC用Featured画像 */}
            <div className="featured-image-container featured-image-desktop slide-up delay-1">
              <div className="featured-image-wrapper glass-card">
                <Image
                  src="/workshop.png"
                  alt="Investment Workshop"
                  width={600}
                  height={450}
                  style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
                  className="featured-image"
                />
              </div>
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
            <p style={{ fontFamily: 'var(--font-accent)', fontSize: '0.95rem', letterSpacing: '3px', fontWeight: '800', color: 'var(--primary)', marginBottom: '1rem', textTransform: 'uppercase' as const }}>
              Your Future Starts Here
            </p>
            
            <h2 style={{ fontSize: 'clamp(1.5rem, 4.5vw, 2.8rem)', fontWeight: '900', lineHeight: '1.4', marginBottom: '2rem', color: 'var(--text-main)' }}>
              投資を学んで、あなたの人生に<br className="sp-hide" />
              ワクワクしよう。
            </h2>
 
            <p className="responsive-center-left" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', lineHeight: '2', color: 'var(--text-main)', fontWeight: '700', marginBottom: '1.5rem' }}>
              もし、お金の不安がなくなったら、あなたは何をしたいですか？
            </p>
 
            <p className="responsive-center-left" style={{ fontSize: 'clamp(0.95rem, 2.5vw, 1.15rem)', lineHeight: '2', color: 'var(--text-muted)', marginBottom: '2rem' }}>
              家族との時間、好きな場所への旅、夢だったあのチャレンジ ——<br className="sp-hide" />
              資産を育てることは、未来の選択肢を増やすこと。
            </p>
 
            <div className="glass-card" style={{ background: 'var(--bg-white)', borderRadius: '20px', padding: '2.5rem 2rem', marginBottom: '2.5rem', border: '1px solid var(--glass-border)' }}>
              <p className="responsive-center-left" style={{ fontSize: 'clamp(1.1rem, 3vw, 1.4rem)', fontWeight: '800', lineHeight: '1.8', margin: 0, color: 'var(--primary-dark)' }}>
                あなたの夢を叶えるための「はじめの一歩」を、<br className="sp-hide" />
                一緒に踏み出しませんか？
              </p>
            </div>
 
            <p className="responsive-center-left" style={{ fontSize: 'clamp(0.95rem, 2.5vw, 1.15rem)', color: 'var(--text-muted)', margin: 0, lineHeight: '2' }}>
              難しいことは何もありません。まずは気軽に、<br className="sp-hide" />
              仲間と一緒に考えることから始めましょう。
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
