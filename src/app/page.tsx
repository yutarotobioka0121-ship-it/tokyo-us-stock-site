import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, Users, TrendingUp, ShieldCheck, Zap, Target, PieChart, Clock, Calendar, MapPin } from "lucide-react";
export const dynamic = 'force-dynamic';

export default async function Home() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg">
          <Image
            src="/hero.jpg"
            alt="Hero Background"
            fill
            style={{ objectFit: 'cover' }}
            priority
            className="hero-image"
          />
          <div className="hero-overlay"></div>
        </div>
        
        <div className="container hero-content">
          <h1 className="hero-title slide-up">
            5年で1300%以上の運用実績。<br />
            <span>米国株・株式投資で、<br />理想の未来をデザインする。</span>
          </h1>
          <p className="hero-subtitle slide-up delay-1">
            株式投資をギャンブルにしない。長期投資で成功し続ける人と、そうでない人の「考え方の違い」を、株式初心者の方へ分かりやすく伝えます。
          </p>
          <div className="hero-actions slide-up delay-2">
            <Link href="/seminar" className="btn btn-primary">
              勉強会に参加する <ArrowRight size={20} />
            </Link>
            <Link href="/about" className="btn btn-outline">
              私たちの想い
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Study Session Section */}
      <section className="featured-section">
        <div className="container">
          <div className="featured-grid">
            <div className="featured-content slide-up">
              <span className="featured-tag">SPECIAL WORKSHOP</span>
              <h2 className="featured-title">
                「1300%以上の実績」を支える、負けない投資家の思考回路。
              </h2>
              <h3 className="featured-subtitle-line">一生モノの米国株長期投資勉強会</h3>
              <p className="featured-desc">
                「知識を得るだけでは、1円も増えません。」<br className="sp-hide" />
                5年で1300%以上という圧倒的な実績を叩き出した米国株投資の思考法を、株式初心者の方でも一歩ずつ着実に学べるステップに整理してお伝えします。労働収入の壁を超え、真の自由を手にするための「第一歩」を共に踏み出しましょう。
              </p>
              
              <div className="benefit-list">
                <div className="benefit-item">
                  <div className="benefit-icon"><Zap size={24} /></div>
                  <div className="benefit-text">
                    <h4>労働から資本へ。時間の解放</h4>
                    <p>自分の時間を切り売りする生活を卒業し、お金に働いてもらう「投資家としての視点」を構築。</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon"><Target size={24} /></div>
                  <div className="benefit-text">
                    <h4>米国という唯一無二の選択</h4>
                    <p>世界のインフラを支配する企業に投資し、地球規模の収益を自分の財布へ取り込む。</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon"><PieChart size={24} /></div>
                  <div className="benefit-text">
                    <h4>15年の壁を超える確率の思考</h4>
                    <p>テクニックではなく統計。15年以上で負けなしのデータが証明する「数学的勝利」の掴み方。</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon"><ShieldCheck size={24} /></div>
                  <div className="benefit-text">
                    <h4>暴落は「ボーナス確定演出」</h4>
                    <p>株価ではなく価値を見る。パニックを「タイムセール」に変える、強靭なマインドを構築。</p>
                  </div>
                </div>
              </div>

            </div>
            
            <div className="featured-image-container slide-up delay-1">
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
      
      {/* Seminar CTA Section */}
      <section className="section-padding" style={{ background: 'var(--bg-white)', textAlign: 'center' }}>
        <div className="container">
          <div className="glass-card" style={{ padding: '4rem 2rem', maxWidth: '800px', margin: '0 auto', border: '2px solid var(--primary-light)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <span className="section-tag" style={{ fontSize: '1.1rem', letterSpacing: '1px' }}>初心者向け米国株式投資 勉強会</span>
            <h2 className="section-title" style={{ marginBottom: '1.5rem', wordBreak: 'keep-all' }}>勉強会のカリキュラムや詳細はこちら</h2>
            <p className="text-muted" style={{ marginBottom: '2.5rem', fontSize: '1.1rem', lineHeight: '1.8', wordBreak: 'keep-all', overflowWrap: 'break-word' }}>
              当クラブの勉強会は、投資未経験の方でも安心してご参加いただけるよう、<br className="sp-hide" />
              分かりやすく丁寧な解説を心がけています。<br />
              具体的なカリキュラム内容や、開催スケジュールの確認、お申し込みは詳細ページをご覧ください。
            </p>
            <Link href="/seminar" className="btn btn-primary" style={{ fontSize: '1.2rem', padding: '1.2rem 3rem', width: '100%', maxWidth: '400px', justifyContent: 'center' }}>
              勉強会の詳細を見る <ArrowRight size={20} style={{ marginLeft: '0.5rem' }} />
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding about-section">
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
            <div className="about-text">
              <span className="section-tag">MISSION</span>
              <h2 className="section-title">情熱と実績をもって、<br className="sp-hide" />投資家の第一歩を支える。</h2>
              <p className="about-desc">
                米国株投資を始めて約5年。私は1300%以上という圧倒的な実績を出す中で、多くの成功と失敗を経験してきました。
                その中で確信したのは、投資の成果を分けるのは分析手法ではなく、長期的な「考え方（マインドセット）」であるということです。
                初心者の方が迷わず、着実に資産を築けるよう、実体験に基づいた本物の知見を共有します。
              </p>
              <div className="about-stats">
                <div className="stat-item">
                  <span className="stat-num">1300%+</span>
                  <span className="stat-label">運用実績</span>
                </div>
                <div className="stat-item">
                  <span className="stat-num">5年</span>
                  <span className="stat-label">実戦経験</span>
                </div>
              </div>
              <Link href="/about" className="btn btn-link">
                コミュニティの詳細を見る <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding services-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">提供する価値</h2>
            <p className="section-subtitle">「成功し続ける投資家」への道を、私たちは共に歩みます。</p>
          </div>
          
          <div className="services-grid">
            <div className="service-card glass-card slide-up delay-1">
              <div className="service-icon"><Users size={32} /></div>
              <h3>投資家コミュニティ</h3>
              <p>独りで悩まない。志を同じくした仲間と出会い、知見を共有。長期投資を楽しく続けるための安心できる居場所です。</p>
              <Link href="/about" className="service-link">コミュニティの詳細 <ArrowRight size={16} /></Link>
            </div>
            
            <div className="service-card glass-card slide-up delay-2">
              <div className="service-icon"><TrendingUp size={32} /></div>
              <h3>特別ミートアップ</h3>
              <p>不定期で開催されるオフラインの交流会。投資の話はもちろん、人生を豊かにするための刺激的な出会いを提供します。</p>
              <Link href="#schedule" className="service-link">開催予定を見る <ArrowRight size={16} /></Link>
            </div>
            
            <div className="service-card glass-card slide-up delay-3">
              <div className="service-icon"><BookOpen size={32} /></div>
              <h3>投資家のリアルな日常（ブログ）</h3>
              <p>投資の最新ニュースから、日々のふとした気づきまで。肩の力を抜いて、投資家のリアルな頭の中をゆるくお届けします。</p>
              <Link href="/blog" className="service-link">記事を読む <ArrowRight size={16} /></Link>
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
              Your Future Starts Here
            </p>
            
            <h2 style={{ fontSize: 'clamp(1.8rem, 4.5vw, 2.8rem)', fontWeight: '900', lineHeight: '1.4', marginBottom: '2rem' }}>
              <span style={{ display: 'inline-block' }}>投資を学んで、</span>
              <span style={{ display: 'inline-block' }}>自分の人生に</span><br />
              <span style={{ display: 'inline-block', color: '#ffd700' }}>ワクワクしよう。</span>
            </h2>

            <div style={{ width: '60px', height: '3px', background: '#ffd700', margin: '0 auto 2.5rem', borderRadius: '2px' }} />

            <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', lineHeight: '2', opacity: 0.95, marginBottom: '1.5rem' }}>
              <span style={{ display: 'inline-block' }}>もし、お金の不安がなくなったら</span>
              <span style={{ display: 'inline-block' }}>あなたは何をしたいですか？</span>
            </p>

            <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.15rem)', lineHeight: '2', opacity: 0.9, marginBottom: '2rem' }}>
              <span style={{ display: 'inline-block' }}>家族との時間、好きな場所への旅、</span>
              <span style={{ display: 'inline-block' }}>夢だったあのチャレンジ ——</span><br />
              <span style={{ display: 'inline-block' }}>資産を育てることは、</span>
              <span style={{ display: 'inline-block' }}>未来の選択肢を増やすこと。</span>
            </p>

            <div style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', borderRadius: '20px', padding: '2.5rem 2rem', marginBottom: '2.5rem', border: '1px solid rgba(255,255,255,0.15)' }}>
              <p style={{ fontSize: 'clamp(1.1rem, 3vw, 1.4rem)', fontWeight: '800', lineHeight: '1.8', margin: 0 }}>
                <span style={{ display: 'inline-block' }}>あなたの夢を叶えるための</span>
                <span style={{ display: 'inline-block' }}>「はじめの一歩」を、</span><br />
                <span style={{ display: 'inline-block', color: '#ffd700' }}>一緒に踏み出しませんか？</span>
              </p>
            </div>

            <p style={{ fontSize: '1rem', opacity: 0.85, marginBottom: '2.5rem', lineHeight: '1.8' }}>
              <span style={{ display: 'inline-block' }}>難しいことは何もありません。</span>
              <span style={{ display: 'inline-block' }}>まずは気軽に、仲間と一緒に考えることから始めましょう。</span>
            </p>

            <Link href="/seminar" className="btn" style={{ background: '#ffd700', color: 'var(--primary-dark)', fontSize: '1.15rem', padding: '1.2rem 3rem', fontWeight: '900', borderRadius: '50px', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', boxShadow: '0 4px 20px rgba(255, 215, 0, 0.3)' }}>
              勉強会の詳細を見る <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
