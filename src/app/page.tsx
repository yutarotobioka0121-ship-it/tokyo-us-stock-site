import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, Users, TrendingUp, ShieldCheck, Zap, Target, PieChart, Clock, Calendar, MapPin } from "lucide-react";
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
                  <span className="segment">初心者のための</span>
                  <span className="segment">米国株 投資勉強会で、</span>
                  <span className="segment">理想の未来を</span>
                  <span className="segment">デザインする。</span>
                </span>
              </h1>
              <p className="hero-subtitle">
                <span className="segment">株式投資をギャンブルにしない。</span>
                <span className="segment">長期投資で成功し続ける人と、</span>
                <span className="segment">そうでない人の「考え方の違い」を、</span>
                <span className="segment">株式初心者の方へ分かりやすく伝えます。</span>
              </p>
              <div className="hero-actions">
                <Link href="/about" className="btn btn-primary">
                  東京米国株クラブについて <ArrowRight size={20} />
                </Link>
              </div>
            </div>
            <div className="hero-image-right slide-up delay-1">
              <div className="hero-image-wrapper glass-card">
                <Image
                  src="/hero.jpg"
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
              <span className="featured-tag">SPECIAL WORKSHOP</span>
              <h2 className="featured-title">
                <span className="segment">米国株投資勉強会</span>
              </h2>
              <h3 className="featured-subtitle-line">
                <span className="segment">20〜30代から始める、</span>
                <span className="segment">もう迷わない「正しい米国株の長期投資」</span>
              </h3>
              <p className="featured-desc">
                <span className="featured-lead-text">
                  <span className="segment">「独学でうまくいかなかった方」も安心。</span>
                  <span className="segment">専門用語なしのロードマップで一から学べる。</span>
                </span>
                <span className="segment">「将来のために投資を始めたいけれど、</span>
                <span className="segment">何から手をつければいいか分からない」</span>
                <span className="segment">「ネットの情報で買ってみたけれど、</span>
                <span className="segment">損をして怖くなってしまった……」</span>
                <span className="segment">そんな20〜30代の方へ。</span><br />
                <span className="segment">当クラブでは、</span>
                <span className="segment">5年で1300%以上の運用実績を持つ講師が、</span>
                <span className="segment">投資の「本当の基礎」を</span>
                <span className="segment">分かりやすく整理してお伝えします。</span>
                <span className="segment">難しい数式や専門用語は一切使いません。</span>
                <span className="segment">失敗する理由が理解できれば、</span>
                <span className="segment">不安は「楽しさ」に変わります。</span>
                <span className="segment">焦らず、一歩ずつ、</span>
                <span className="segment">安心できる資産作りの土台を</span>
                <span className="segment">一緒に作りましょう。</span>
              </p>
              
              <div className="benefit-list">
                <div className="benefit-item">
                  <div className="benefit-icon"><Zap size={24} /></div>
                  <div className="benefit-text">
                    <h4>20代・30代からの着実な資産形成</h4>
                    <p>大きな資金は必要ありません。「少額から始めて、時間を味方につけて複利で育てる」長期投資の本質を教えます。</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon"><Target size={24} /></div>
                  <div className="benefit-text">
                    <h4>なぜ「米国株」なのかをシンプルに解説</h4>
                    <p>AppleやAmazonなど、私たちの身近にある世界の超優良企業に投資するメリットと、「米国の圧倒的な強さ」を明快に伝えます。</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon"><PieChart size={24} /></div>
                  <div className="benefit-text">
                    <h4>「損する恐怖」をなくす考え方</h4>
                    <p>独学で挫折する一番の原因は「日々の値動きでのストレス」です。統計データから「負けないための確率」を学び、心のゆとりを手に入れます。</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon"><ShieldCheck size={24} /></div>
                  <div className="benefit-text">
                    <h4>質問しやすい、温かな少人数カフェ勉強会</h4>
                    <p>一方的な講義ではなく、カフェでお茶を飲むような和やかな雰囲気。少人数制なので、分からないことはその場でなんでも質問できます。</p>
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
            <h2 className="section-title" style={{ fontSize: 'clamp(2.2rem, 6vw, 2.8rem)', color: 'var(--primary)', fontWeight: '900', marginBottom: '0.8rem' }}>
              <span className="segment">米国株式投資勉強会</span>
            </h2>
            <p style={{ fontSize: 'clamp(1.1rem, 3.5vw, 1.4rem)', color: 'var(--text-main)', fontWeight: '700', marginBottom: '2rem' }}>
              <span className="segment">勉強会のカリキュラムや</span>
              <span className="segment">詳細はこちら</span>
            </p>
            <p className="text-muted" style={{ marginBottom: '2.5rem', fontSize: '1.1rem', lineHeight: '1.8', overflowWrap: 'break-word' }}>
              <span className="segment">当クラブの勉強会は、</span>
              <span className="segment">投資未経験の方でも安心してご参加いただけるよう、</span>
              <span className="segment">分かりやすく丁寧な解説を心がけています。</span><br />
              <span className="segment">具体的なカリキュラム内容や、</span>
              <span className="segment">開催スケジュールの確認、</span>
              <span className="segment">お申し込みは詳細ページをご覧ください。</span>
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
                  alt="トビー"
                  width={500}
                  height={500}
                  style={{ objectFit: 'cover', width: '100%', height: 'auto', aspectRatio: '1/1' }}
                  className="about-image"
                />
              </div>
            </div>
            <div className="about-text">
              <span className="section-tag">MISSION</span>
              <h2 className="section-title">
                <span className="segment">情熱と実績をもって、</span>
                <span className="segment">投資家の第一歩を支える。</span>
              </h2>
              <p className="about-desc">
                <span className="segment">米国株投資を始めて約5年。</span>
                <span className="segment">私は1300%以上という圧倒的な実績を出す中で、</span>
                <span className="segment">多くの成功と失敗を経験してきました。</span>
                <span className="segment">その中で確信したのは、</span>
                <span className="segment">投資の成果を分けるのは分析手法ではなく、</span>
                <span className="segment">長期的な「考え方（マインドセット）」であるということです。</span>
                <span className="segment">初心者の方が迷わず、</span>
                <span className="segment">着実に資産を築けるよう、</span>
                <span className="segment">実体験に基づいた本物の知見を共有します。</span>
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
              <p>
                <span className="segment">独りで悩まない。</span>
                <span className="segment">志を同じくした仲間と出会い、</span>
                <span className="segment">知見を共有。</span>
                <span className="segment">長期投資を楽しく続けるための</span>
                <span className="segment">安心できる居場所です。</span>
              </p>
              <Link href="/about" className="service-link">コミュニティの詳細 <ArrowRight size={16} /></Link>
            </div>
            
            <div className="service-card glass-card slide-up delay-2">
              <div className="service-icon"><TrendingUp size={32} /></div>
              <h3>特別ミートアップ</h3>
              <p>
                <span className="segment">不定期で開催される</span>
                <span className="segment">オフラインの交流会。</span>
                <span className="segment">投資の話はもちろん、</span>
                <span className="segment">人生を豊かにするための</span>
                <span className="segment">刺激的な出会いを提供します。</span>
              </p>
              <Link href="#schedule" className="service-link">開催予定を見る <ArrowRight size={16} /></Link>
            </div>
            
            <div className="service-card glass-card slide-up delay-3">
              <div className="service-icon"><BookOpen size={32} /></div>
              <h3>投資家のリアルな日常（ブログ）</h3>
              <p>
                <span className="segment">投資の最新ニュースから、</span>
                <span className="segment">日々のふとした気づきまで。</span>
                <span className="segment">肩の力を抜いて、</span>
                <span className="segment">投資家のリアルな頭の中を</span>
                <span className="segment">ゆるくお届けします。</span>
              </p>
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
              <span className="segment">投資を学んで、</span>
              <span className="segment">あなたの人生に</span><br />
              <span className="segment" style={{ color: '#ffd700' }}>ワクワクしよう。</span>
            </h2>

            <div style={{ width: '60px', height: '3px', background: '#ffd700', margin: '0 auto 2.5rem', borderRadius: '2px' }} />

            <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', lineHeight: '2', opacity: 0.95, marginBottom: '1.5rem' }}>
              <span className="segment">もし、お金の不安がなくなったら</span>
              <span className="segment">あなたは何をしたいですか？</span>
            </p>

            <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.15rem)', lineHeight: '2', opacity: 0.9, marginBottom: '2rem' }}>
              <span className="segment">家族との時間、好きな場所への旅、</span>
              <span className="segment">夢だったあのチャレンジ ——</span><br />
              <span className="segment">資産を育てることは、</span>
              <span className="segment">未来の選択肢を増やすこと。</span>
            </p>

            <div style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', borderRadius: '20px', padding: '2.5rem 2rem', marginBottom: '2.5rem', border: '1px solid rgba(255,255,255,0.15)' }}>
              <p style={{ fontSize: 'clamp(1.1rem, 3vw, 1.4rem)', fontWeight: '800', lineHeight: '1.8', margin: 0 }}>
                <span className="segment">あなたの夢を叶えるための</span>
                <span className="segment">「はじめの一歩」を、</span><br />
                <span className="segment" style={{ color: '#ffd700' }}>一緒に踏み出しませんか？</span>
              </p>
            </div>

            <p style={{ fontSize: '1rem', opacity: 0.85, marginBottom: '2.5rem', lineHeight: '1.8' }}>
              <span className="segment">難しいことは何もありません。</span>
              <span className="segment">まずは気軽に、</span>
              <span className="segment">仲間と一緒に考えることから始めましょう。</span>
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
