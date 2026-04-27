import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, Users, TrendingUp, ShieldCheck, Zap, Target, PieChart, Clock, Calendar, MapPin } from "lucide-react";
import { getSessions } from "@/lib/microcms";
import { formatSessionDate, formatSessionTime } from "@/lib/utils";

export const dynamic = 'force-dynamic';

export default async function Home() {
  const sessions = await getSessions();
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg">
          <Image
            src="/hero.png"
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
            株式投資をギャンブルにしない。長期投資で成功し続ける人と、<br />
            そうでない人の「考え方の違い」を、株式初心者の方へ分かりやすく伝えます。
          </p>
          <div className="hero-actions slide-up delay-2">
            <Link href="#schedule" className="btn btn-primary">
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
              <span className="featured-tag">MAIN PRODUCT</span>
              <h2 className="featured-title">
                「1300%以上の実績」を支える、負けない投資家の思考回路。<br />
                <span>一生モノの米国株長期投資術</span>
              </h2>
              <p className="featured-desc">
                「知識を得るだけでは、1円も増えません。」<br />
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
      
      {/* Upcoming Schedule Section */}
      <section id="schedule" className="section-padding schedule-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">SCHEDULE</span>
            <h2 className="section-title">開催スケジュール</h2>
            <p className="section-subtitle">
              次回の開催日程はこちらです。少人数制のため、お早めにお申し込みください。
            </p>
          </div>

          <div className="schedule-grid">
            {sessions && sessions.length > 0 ? (
              sessions.map((session) => {
                // MicroCMSのセレクトフィールドの正規化
                const status = Array.isArray(session.status) ? session.status[0] : session.status;
                const type = Array.isArray(session.type) ? session.type[0] : session.type;

                // 日付と時間のフォーマット
                const formattedDate = formatSessionDate(session.date);
                const formattedTime = formatSessionTime(session.time || session.date);

                return (
                  <div key={session.id} className={`schedule-card glass-card ${status === 'full' ? 'opacity-60' : ''}`}>
                    <div className="schedule-meta">
                      <span className={`badge ${status === 'open' || status === '募集中' ? 'badge-open' : 'badge-full'}`}>
                        {status === 'open' || status === '募集中' ? '募集中' : status === 'full' || status === '満席' ? '満席' : '終了'}
                      </span>
                      <span className="badge badge-type">
                        {type === 'online' || type === 'オンライン' ? 'オンライン' : '対面開催'}
                      </span>
                    </div>
                    <h3 className="schedule-date">{formattedDate}</h3>
                    <div className="schedule-time">
                      <Clock size={18} /> {formattedTime}〜
                    </div>
                    {type !== 'online' && type !== 'オンライン' && session.location && (
                      <div className="schedule-location" style={{ marginTop: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                        <MapPin size={18} /> {session.location}付近
                      </div>
                    )}
                    <div className="schedule-footer">
                      {status === 'open' || status === '募集中' ? (
                        <Link href={`/apply?session=${session.id}`} className="btn btn-primary" style={{ width: '100%' }}>
                          この日程で申し込む <ArrowRight size={18} />
                        </Link>
                      ) : (
                        <button disabled className="btn btn-outline opacity-50 cursor-not-allowed" style={{ width: '100%' }}>
                          {status === 'full' ? '満席' : '受付終了'}
                        </button>
                      )}
                    </div>
                  </div>
                );
              })
            ) : (
              <p className="text-center w-full py-10 text-muted">現在、予定されている勉強会はありません。</p>
            )}
          </div>

          <div className="schedule-notes mt-10 text-center">
            <p className="text-muted text-sm">
              ※ オンライン開催の場合は、お申し込み後に別途メールにて参加用URLをご案内いたします。<br />
              ※ 対面開催の場合は都内近郊での開催となります。詳細な場所は別途メールにてご案内いたします。
            </p>
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
              <h2 className="section-title">情熱と実績をもって、<br />投資家の第一歩を支える。</h2>
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
    </div>
  );
}
