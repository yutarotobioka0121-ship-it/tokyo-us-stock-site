import { Metadata } from 'next';
import Image from "next/image";
import { ArrowLeft, ArrowRight, CheckCircle2, Compass, BookOpen, Sun, Star } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: '運営代表者 プロフィール | 東京米国株クラブ',
  description: '東京米国株クラブの運営代表者「とびー」のプロフィール。投資を「ギャンブル」だと思っていた完全な初心者から、失敗を乗り越えて5年で資産13倍を達成したストーリーと当クラブへの想いを紹介。',
  alternates: {
    canonical: 'https://www.tokyo-us-stock.com/about',
  },
  openGraph: {
    title: '運営代表者 プロフィール | 東京米国株クラブ',
    description: '投資初心者から5年で資産13倍を達成した運営者「とびー」のプロフィールと当クラブへの想い。',
    url: 'https://www.tokyo-us-stock.com/about',
    siteName: '東京米国株クラブ',
    images: [
      {
        url: 'https://www.tokyo-us-stock.com/ogp.png',
        width: 1200,
        height: 630,
        alt: '東京米国株クラブ 運営代表者プロフィール',
      },
    ],
    locale: 'ja_JP',
    type: 'profile',
  },
  twitter: {
    card: 'summary_large_image',
    title: '運営代表者 プロフィール | 東京米国株クラブ',
    description: '投資初心者から5年で資産13倍を達成した運営者「とびー」のプロフィールと当クラブへの想い。',
    images: ['https://www.tokyo-us-stock.com/ogp.png'],
  },
};

export default function AboutPage() {
  return (
    <div className="about-page profile-page">
      <section className="seminar-hero" style={{ background: 'var(--bg-warm)', padding: '120px 0 40px', textAlign: 'left' }}>
        <div className="container">
          <Link href="/" className="btn-link" style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', fontFamily: 'var(--font-body)', fontSize: '0.95rem' }}>
            <ArrowLeft size={18} style={{ marginRight: '0.5rem' }} /> トップへ戻る
          </Link>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.5rem, 6vw, 2.8rem)', color: 'var(--primary-dark)', lineHeight: '1.3', textAlign: 'left', marginBottom: '1rem', fontWeight: '900' }}>
            運営代表者 プロフィール
          </h1>
        </div>
      </section>

      <section style={{ padding: 'clamp(2.5rem, 6vw, 4rem) 0 clamp(3.5rem, 10vw, 6rem) 0', background: 'white' }}>
        <div className="container">
          <div className="profile-intro-header" style={{ marginBottom: '2.5rem', maxWidth: '800px', textAlign: 'left' }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.5rem, 5vw, 2.4rem)', marginBottom: '0.75rem', lineHeight: '1.4', color: 'var(--primary-dark)', fontWeight: '900' }}>
              とびー
            </h2>
            <p style={{ fontFamily: 'var(--font-body)', fontWeight: '700', fontSize: '1.1rem', color: 'var(--primary)', marginBottom: '0.5rem', lineHeight: '1.8' }}>
              米国株長期投資家 / 東京米国株クラブ主宰
            </p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', color: 'var(--text-muted)', marginBottom: 0, lineHeight: '1.8' }}>
              「投資はギャンブル」と思っていた元・完全な素人が、失敗と学びを経て資産を13倍にするまでの話。
            </p>
          </div>

          <div className="about-grid" style={{ alignItems: 'flex-start' }}>
            <div className="about-image-container" style={{ maxWidth: '380px', width: '100%', margin: '0 auto' }}>
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

              <div className="skills-list" style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontFamily: 'var(--font-heading)', marginBottom: '1rem', color: 'var(--primary)', fontSize: '1rem', fontWeight: '800', lineHeight: '1.8' }}>📌 経歴・ストーリー</h3>
                <div className="skill-item"><CheckCircle2 color="var(--primary)" size={20} /><span style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', lineHeight: '1.8' }}>もともと「投資＝ギャンブル」と思っていた完全な素人からスタート</span></div>
                <div className="skill-item"><CheckCircle2 color="var(--primary)" size={20} /><span style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', lineHeight: '1.8' }}>バイナリーオプションで合計100万円近くを失う痛烈な失敗を経験</span></div>
                <div className="skill-item"><CheckCircle2 color="var(--primary)" size={20} /><span style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', lineHeight: '1.8' }}>「金持ち父さん貧乏父さん」との出会いをきっかけに投資の本質を学び直す</span></div>
                <div className="skill-item"><CheckCircle2 color="var(--primary)" size={20} /><span style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', lineHeight: '1.8' }}>財務諸表の読み方から徹底的に学習し、米国個別株（NVIDIA等）への長期投資を開始</span></div>
                <div className="skill-item"><CheckCircle2 color="var(--primary)" size={20} /><span style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', lineHeight: '1.8' }}>ノイズに惑わされない投資マインドセットを確立し、5年で+1300%超（約13倍）を達成</span></div>
                <div className="skill-item"><CheckCircle2 color="var(--primary)" size={20} /><span style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', lineHeight: '1.8' }}>現在はサラリーマン・事業主として多忙な毎日を送りながら、投資時間は1日1時間未満</span></div>
              </div>

              <div className="skills-list" style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontFamily: 'var(--font-heading)', marginBottom: '1rem', color: 'var(--primary)', fontSize: '1rem', fontWeight: '800', lineHeight: '1.8' }}>📝 発信していること</h3>
                <div className="skill-item"><CheckCircle2 color="var(--primary)" size={20} /><span style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', lineHeight: '1.8' }}>初心者向けの米国株・NISA・長期投資の基礎知識</span></div>
                <div className="skill-item"><CheckCircle2 color="var(--primary)" size={20} /><span style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', lineHeight: '1.8' }}>米国個別株・ETFの選び方・財務諸表の読み方</span></div>
                <div className="skill-item"><CheckCircle2 color="var(--primary)" size={20} /><span style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', lineHeight: '1.8' }}>バイナリー損失〜資産13倍まで、失敗から学んだリアルな経験談</span></div>
                <div className="skill-item"><CheckCircle2 color="var(--primary)" size={20} /><span style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', lineHeight: '1.8' }}>ギャンブルにならない、堅実な長期資産形成のマインドセット</span></div>
                <div className="skill-item"><CheckCircle2 color="var(--primary)" size={20} /><span style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', lineHeight: '1.8' }}>東京・オンラインで初心者向け投資勉強会を主催</span></div>
              </div>

              <div className="skills-list">
                <h3 style={{ fontFamily: 'var(--font-heading)', marginBottom: '1rem', color: 'var(--primary)', fontSize: '1rem', fontWeight: '800', lineHeight: '1.8' }}>💬 クラブを立ち上げた理由</h3>
                <div className="skill-item"><CheckCircle2 color="var(--primary)" size={20} /><span style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', lineHeight: '1.8' }}>「かつての自分のように、知識不足のまま損失を出す人を一人でも減らしたい」</span></div>
                <div className="skill-item"><CheckCircle2 color="var(--primary)" size={20} /><span style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', lineHeight: '1.8' }}>小手先のテクニックではなく、一生使える投資哲学を初心者目線でわかりやすく伝えたい</span></div>
                <div className="skill-item"><CheckCircle2 color="var(--primary)" size={20} /><span style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', lineHeight: '1.8' }}>一人で悩まず、仲間と一緒に学べる温かいコミュニティをつくりたい</span></div>
              </div>
            </div>
          </div>


          {/* 実績エビデンス画像セクション（スマホ・PCとも見やすく幅広で表示） */}
          <div className="evidence-section glass-card" style={{ marginTop: '3.5rem', padding: '2rem 1.5rem', background: 'var(--bg-white)', border: '1px solid var(--glass-border)', borderRadius: '25px', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto' }}>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.1rem, 3vw, 1.4rem)', fontWeight: '900', color: 'var(--primary-dark)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.6rem', justifyContent: 'center' }}>
              <Star size={20} color="var(--primary)" /> 実際の運用成績（証券口座の損益グラフ）
            </h3>
            <div style={{ borderRadius: '15px', overflow: 'hidden', border: '1px solid rgba(0,0,0,0.08)', background: '#fff', maxWidth: '640px', margin: '0 auto', boxShadow: '0 4px 20px rgba(0,0,0,0.02)' }}>
              <Image
                src="/performance-evidence.png"
                alt="とびーの投資成績（米国株+1302.55%）"
                width={800}
                height={800}
                style={{ width: '100%', height: 'auto', display: 'block' }}
                priority
              />
            </div>

            {/* 投資実績の詳細・E-E-A-T対策のテキスト */}
            <div style={{ marginTop: '2.5rem', display: 'flex', flexDirection: 'column', gap: '2rem', textAlign: 'left' }}>
              
              {/* NVIDIA実績解説 */}
              <div style={{ borderTop: '1px solid rgba(0,0,0,0.06)', paddingTop: '2rem' }}>
                <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: '800', color: 'var(--primary)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  📈 NVIDIA（エヌビディア）の長期保有実績
                </h4>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: '1.8', margin: 0 }}>
                  主力の運用益+1302.55%（約13倍）を支える大きな要因となったのが、半導体大手<strong>NVIDIA（NVDA）</strong>への長期投資です。2020年のバイナリーオプションでの失敗後、小手先のテクニックを捨て「企業の財務諸表」をベースにしたファンダメンタルズ分析を学び直しました。<br />
                  AI技術の将来的なインフラ化と財務上の圧倒的な強みを見抜き、2022年から保有を開始。一時的な下落局面（2022年のベアマーケット）や金利上昇局面でも売却せずホールドし続けた結果、生成AIブームの恩恵をフルに享受し、10倍株（テンバガー）を超えるリターンへと成長しました。
                </p>
              </div>

              {/* 投資タイムライン */}
              <div style={{ borderTop: '1px solid rgba(0,0,0,0.06)', paddingTop: '2rem' }}>
                <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: '800', color: 'var(--primary)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  ⏳ とびーの投資タイムライン（2020年〜現在）
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', borderLeft: '2px solid rgba(176, 58, 46, 0.15)', paddingLeft: '1.5rem', marginLeft: '0.5rem' }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem', position: 'relative' }}>
                      <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'var(--primary)', position: 'absolute', left: '-31px', top: '50%', transform: 'translateY(-50%)' }} />
                      <span style={{ fontSize: '0.9rem', fontWeight: '900', color: 'var(--primary)' }}>2020年（暗黒期・スタート）</span>
                    </div>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: 0, lineHeight: '1.6' }}>
                      「投資＝すぐに稼げるギャンブル」と勘違いし、バイナリーオプションで約100万円を失う。この痛烈な失敗をきっかけに、「金持ち父さん貧乏父さん」を読み投資の本質を猛勉強。財務諸表を読めるようになるまで企業分析を重ねる。
                    </p>
                  </div>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem', position: 'relative' }}>
                      <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'var(--primary)', position: 'absolute', left: '-31px', top: '50%', transform: 'translateY(-50%)' }} />
                      <span style={{ fontSize: '0.9rem', fontWeight: '900', color: 'var(--primary)' }}>2021年（本格的な投資開始・日本株スタート）</span>
                    </div>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: 0, lineHeight: '1.6' }}>
                      まずは日本株の購入から運用をスタート。しかし、市場全体の成長力や企業分析の透明性、そして本質的な価値投資を最大化するためには米国株市場が最適であると確信し、翌年に向けて米国株の調査・準備を進める。
                    </p>
                  </div>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem', position: 'relative' }}>
                      <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'var(--primary)', position: 'absolute', left: '-31px', top: '50%', transform: 'translateY(-50%)' }} />
                      <span style={{ fontSize: '0.9rem', fontWeight: '900', color: 'var(--primary)' }}>2022年（米国株への移行・NVIDIA株保有開始）</span>
                    </div>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: 0, lineHeight: '1.6' }}>
                      日本株から米国株投資へ完全にシフト。FRBの急激な利上げに伴う米国株全体の暴落期だったが、徹底的な財務分析に基づき、<strong>NVIDIA（NVDA）株をはじめとする成長個別株の保有・仕込みを開始</strong>。暴落期でも売らずに買い増しを継続する。
                    </p>
                  </div>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem', position: 'relative' }}>
                      <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'var(--primary)', position: 'absolute', left: '-31px', top: '50%', transform: 'translateY(-50%)' }} />
                      <span style={{ fontSize: '0.9rem', fontWeight: '900', color: 'var(--primary)' }}>2023年〜2024年（急成長と実績達成）</span>
                    </div>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: 0, lineHeight: '1.6' }}>
                      AIブームが本格化し、長期保有していたNVIDIA等が急騰。米国株全体のパフォーマンスが劇的に向上し、<strong>5年未満で+1300%超（約13倍）</strong>を達成。
                    </p>
                  </div>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem', position: 'relative' }}>
                      <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'var(--primary)', position: 'absolute', left: '-31px', top: '50%', transform: 'translateY(-50%)' }} />
                      <span style={{ fontSize: '0.9rem', fontWeight: '900', color: 'var(--primary)' }}>2025年〜現在（コミュニティ活動の本格化）</span>
                    </div>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: 0, lineHeight: '1.6' }}>
                      「かつての自分のように無知なまま大損する人を減らしたい」という思いから、初心者向けに米国株・新NISAを基本から学べる投資コミュニティ「東京米国株クラブ」を設立。
                    </p>
                  </div>
                </div>
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
              Dream Together
            </p>
            
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.5rem, 4.5vw, 2.8rem)', fontWeight: '900', lineHeight: '1.4', marginBottom: '2rem', color: 'var(--text-main)' }}>
              あなたが手にした資産で、<br className="sp-hide" />
              どんな夢を叶えたいですか？
            </h2>

            <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', lineHeight: '1.8', color: 'var(--text-main)', fontWeight: '700', marginBottom: '1.5rem' }}>
              大切な人との特別な時間、まだ見ぬ景色への冒険、ずっと温めてきた挑戦。
            </p>

            <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(0.95rem, 2.5vw, 1.15rem)', lineHeight: '1.8', color: 'var(--text-muted)', marginBottom: '2rem' }}>
              投資は、そんな「ワクワクする未来」を現実にするための手段です。<br className="sp-hide" />
              私たちは、その夢を叶えるお手伝いがしたい。
            </p>

            <div className="glass-card" style={{ background: 'var(--bg-white)', borderRadius: '20px', padding: '2.5rem 2rem', margin: 0, border: '1px solid var(--glass-border)' }}>
              <p style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.1rem, 3vw, 1.4rem)', fontWeight: '800', lineHeight: '1.8', margin: 0, color: 'var(--primary-dark)' }}>
                一人で悩まなくて大丈夫。<br className="sp-hide" />
                仲間と一緒に、ワクワクする未来を描きましょう。
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
