import { Metadata } from 'next';
import Image from "next/image";
import { getCFGSchedule, CFGEvent } from "@/lib/microcms";
import CfgApplyForm from "@/components/CfgApplyForm";
import { MapPin, Target, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: 'キャッシュフローゲーム会 | 東京米国株クラブ',
  description: '世界中で愛される「キャッシュフローゲーム」で、ラットレースから抜け出すための第一歩を踏み出しましょう。遊びながらお金の知識を身につける体験会です。',
  alternates: {
    canonical: 'https://www.tokyo-us-stock.com/seminar/cashflow-game',
  },
};

export const dynamic = 'force-dynamic';

export default async function CashflowGamePage() {
  const schedule = await getCFGSchedule();

  const availableEvents = schedule.filter(ev => ev.status === 'open' || ev.status === 'full');

  return (
    <div className="seminar-page" style={{ overflowWrap: 'break-word' }}>
      
      {/* Hero Section */}
      <section className="seminar-hero" style={{ background: 'var(--bg-warm)', padding: '100px 0 3rem', textAlign: 'left' }}>
        <div className="container">
          <h1 className="post-title" style={{ marginBottom: '1.5rem', fontSize: 'clamp(1.8rem, 5vw, 3rem)', textAlign: 'center', lineHeight: '1.3', maxWidth: 'none', color: 'var(--primary-dark)' }}>
            お金の知識を、<br className="sp-hide" />
            <span style={{ color: 'var(--primary)' }}>遊びながら身につける。</span>
          </h1>
          <p className="hero-subtitle" style={{ fontFamily: 'var(--font-body)', maxWidth: '700px', margin: '0 auto 2.5rem', color: 'var(--text-muted)', textAlign: 'center', fontSize: 'clamp(1rem, 3.5vw, 1.15rem)', lineHeight: '1.8' }}>
            世界中で愛される「キャッシュフローゲーム」で、<br />
            ラットレースから抜け出すための第一歩を踏み出しましょう。
          </p>
          <div className="seminar-hero-image" style={{ borderRadius: '24px', overflow: 'hidden', boxShadow: 'var(--shadow-soft)', maxWidth: '900px', margin: '0 auto', aspectRatio: '21/9', position: 'relative' }}>
            <Image
              src="/images/cfg/cfg-hero.jpg"
              alt="キャッシュフローゲーム会の様子"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
        </div>
      </section>

      {/* About CFG Section */}
      <section className="about-cfg" style={{ padding: '5rem 0', background: 'white' }}>
        <div className="container" style={{ maxWidth: '1000px' }}>
          <div className="section-header text-center" style={{ marginBottom: '4rem' }}>
            <h2 className="section-title" style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--primary-dark)' }}>キャッシュフローゲームとは？</h2>
            <p className="section-subtitle" style={{ color: 'var(--text-muted)' }}>お金持ちになるための考え方を、安全なボード上で疑似体験できるゲームです。</p>
          </div>

          <div className="features-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            <div className="feature-card" style={{ background: 'var(--bg-warm)', padding: '2.5rem 2rem', borderRadius: '16px', textAlign: 'center' }}>
              <div className="feature-icon" style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <Image src="/images/cfg/rat-race.png" alt="ラットレース" width={120} height={120} style={{ objectFit: 'contain' }} />
              </div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '1rem', color: 'var(--primary-dark)' }}>ラットレースからの脱出</h3>
              <p style={{ color: 'var(--text-main)', lineHeight: '1.8', fontSize: '0.95rem', wordBreak: 'keep-all' }}>
                給料をもらって支払いをする「ラットレース」。そこから抜け出して「ファーストトラック」に乗る方法を学びます。
              </p>
            </div>
            
            <div className="feature-card" style={{ background: 'var(--bg-warm)', padding: '2.5rem 2rem', borderRadius: '16px', textAlign: 'center' }}>
              <div className="feature-icon" style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <Image src="/images/cfg/financial-statement.png" alt="財務諸表" width={120} height={120} style={{ objectFit: 'contain' }} />
              </div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '1rem', color: 'var(--primary-dark)' }}>財務諸表の書き方</h3>
              <p style={{ color: 'var(--text-main)', lineHeight: '1.8', fontSize: '0.95rem', wordBreak: 'keep-all' }}>
                ゲームを通じて、自分自身の「損益計算書」と「貸借対照表」のつけ方を実践的に身につけます。
              </p>
            </div>

            <div className="feature-card" style={{ background: 'var(--bg-warm)', padding: '2.5rem 2rem', borderRadius: '16px', textAlign: 'center' }}>
              <div className="feature-icon" style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <Image src="/images/cfg/investment.png" alt="投資" width={120} height={120} style={{ objectFit: 'contain' }} />
              </div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '1rem', color: 'var(--primary-dark)' }}>投資のチャンスとリスク</h3>
              <p style={{ color: 'var(--text-main)', lineHeight: '1.8', fontSize: '0.95rem', wordBreak: 'keep-all' }}>
                不動産、株、ビジネスなど、様々な投資機会に直面し、安全な環境でリスクとリターンを体験できます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="schedule-section" style={{ background: 'white', padding: '2rem 0 1.5rem 0' }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">開催スケジュール</h2>
            <p className="section-subtitle">
              次回の開催日程はこちらです。<br className="sp-hide" />少人数制のため、お早めにお申し込みください。
            </p>
          </div>

          {/* Desktop schedule table */}
          <div className="schedule-table-container schedule-desktop-only" style={{ width: '100%', overflowX: 'auto', WebkitOverflowScrolling: 'touch' as any, paddingBottom: '1rem' }}>
            <table className="schedule-table" style={{ width: '100%', minWidth: '700px', borderCollapse: 'collapse', textAlign: 'center', background: 'white', borderRadius: '16px', overflow: 'hidden', boxShadow: 'var(--shadow-soft)', margin: '0 auto' }}>
              <thead style={{ background: 'var(--primary)', color: 'white' }}>
                <tr>
                  <th style={{ padding: '1.2rem 0.5rem', fontWeight: '800' }}>開催日</th>
                  <th style={{ padding: '1.2rem 0.5rem', fontWeight: '800' }}>開催時間</th>
                  <th style={{ padding: '1.2rem 0.5rem', fontWeight: '800' }}>開催場所</th>
                  <th style={{ padding: '1.2rem 0.5rem', fontWeight: '800' }}>参加費</th>
                  <th style={{ padding: '1.2rem 0.5rem', fontWeight: '800' }}>定員</th>
                  <th style={{ padding: '1.2rem 0.5rem', fontWeight: '800' }}>お申し込み</th>
                </tr>
              </thead>
              <tbody>
                {schedule && schedule.length > 0 ? (
                  schedule.map((event, index) => {
                    const isFull = event.status === 'full';
                    const isEnded = event.status === 'closed';

                    return (
                      <tr key={event.id} style={{ borderBottom: index === schedule.length - 1 ? 'none' : '1px solid var(--border)', background: isEnded ? '#f9fafb' : 'white', opacity: isEnded ? 0.6 : 1 }}>
                        <td style={{ padding: '1.2rem 0.5rem', fontWeight: '800', color: 'var(--primary-dark)', wordBreak: 'keep-all' }}>{event.date}</td>
                        <td style={{ padding: '1.2rem 0.5rem', fontWeight: '700', wordBreak: 'keep-all' }}>{event.time}</td>
                        <td style={{ padding: '1.2rem 0.5rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>{event.location}</td>
                        <td style={{ padding: '1.2rem 0.5rem', fontWeight: '800', color: 'var(--primary)' }}>{event.fee}</td>
                        <td style={{ padding: '1.2rem 0.5rem', color: 'var(--text-muted)' }}>{event.capacity}名</td>
                        <td style={{ padding: '1.2rem 0.5rem' }}>
                          {isEnded ? (
                            <button disabled className="btn btn-outline cursor-not-allowed" style={{ width: '100%', padding: '0.6rem 1rem', fontSize: '0.9rem', background: '#f3f4f6', color: '#9ca3af', borderColor: '#d1d5db', whiteSpace: 'nowrap' }}>
                              受付終了
                            </button>
                          ) : isFull ? (
                            <button disabled className="btn btn-outline cursor-not-allowed" style={{ width: '100%', padding: '0.6rem 1rem', fontSize: '0.9rem', opacity: 0.5, whiteSpace: 'nowrap' }}>
                              満席
                            </button>
                          ) : (
                            <a href="#apply" className="btn btn-primary" style={{ width: '100%', padding: '0.6rem 1rem', fontSize: '0.9rem', whiteSpace: 'nowrap', justifyContent: 'center', display: 'inline-flex', textDecoration: 'none' }}>
                              申し込み
                            </a>
                          )}
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td colSpan={6} style={{ padding: '3rem', textAlign: 'center', color: 'var(--text-muted)' }}>
                      現在、予定されているイベントはありません。
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Mobile schedule cards */}
          <div className="schedule-mobile-only">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {schedule && schedule.length > 0 ? (
                schedule.map((event) => {
                  const isFull = event.status === 'full';
                  const isEnded = event.status === 'closed';

                  return (
                    <div
                      key={event.id}
                      className="glass-card"
                      style={{
                        padding: '1.5rem',
                        borderRadius: '16px',
                        border: '1px solid rgba(176, 58, 46, 0.15)',
                        background: isEnded ? '#f9fafb' : 'white',
                        opacity: isEnded ? 0.7 : 1,
                        boxShadow: 'var(--shadow-soft)',
                        textAlign: 'left'
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.2rem' }}>
                        <span className="badge badge-type" style={{ fontSize: '0.8rem', padding: '0.3rem 0.8rem', background: 'var(--primary)', color: 'white', borderRadius: '20px', fontWeight: '800' }}>
                          対面開催
                        </span>
                        {isEnded ? (
                          <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: '700' }}>受付終了</span>
                        ) : isFull ? (
                          <span style={{ fontSize: '0.85rem', color: 'var(--primary)', fontWeight: '700' }}>満席</span>
                        ) : (
                          <span style={{ fontSize: '0.85rem', color: 'var(--accent)', fontWeight: '700' }}>受付中</span>
                        )}
                      </div>

                      <h3 style={{ fontSize: '1.3rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.8rem', fontFamily: 'var(--font-serif)' }}>
                        {event.date}
                      </h3>

                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
                        <div style={{ display: 'flex', gap: '0.5rem', color: 'var(--text-main)' }}>
                          <span style={{ color: 'var(--primary)', fontWeight: '800', minWidth: '60px' }}>時間：</span>
                          <span>{event.time}</span>
                        </div>
                        <div style={{ display: 'flex', gap: '0.5rem', color: 'var(--text-main)' }}>
                          <span style={{ color: 'var(--primary)', fontWeight: '800', minWidth: '60px' }}>場所：</span>
                          <span style={{ color: 'var(--text-muted)' }}>{event.location}</span>
                        </div>
                        <div style={{ display: 'flex', gap: '0.5rem', color: 'var(--text-main)' }}>
                          <span style={{ color: 'var(--primary)', fontWeight: '800', minWidth: '60px' }}>参加費：</span>
                          <span style={{ fontWeight: '800', color: 'var(--primary)' }}>{event.fee}</span>
                        </div>
                        <div style={{ display: 'flex', gap: '0.5rem', color: 'var(--text-main)' }}>
                          <span style={{ color: 'var(--primary)', fontWeight: '800', minWidth: '60px' }}>定員：</span>
                          <span>{event.capacity}名</span>
                        </div>
                      </div>

                      {isEnded ? (
                        <button disabled className="btn btn-outline cursor-not-allowed" style={{ width: '100%', padding: '0.8rem', fontSize: '0.95rem', background: '#f3f4f6', color: '#9ca3af', borderColor: '#d1d5db', justifyContent: 'center' }}>
                          受付終了
                        </button>
                      ) : isFull ? (
                        <button disabled className="btn btn-outline cursor-not-allowed" style={{ width: '100%', padding: '0.8rem', fontSize: '0.95rem', opacity: 0.5, justifyContent: 'center' }}>
                          満席
                        </button>
                      ) : (
                        <a href="#apply" className="btn btn-primary" style={{ width: '100%', padding: '0.8rem', fontSize: '0.95rem', justifyContent: 'center', fontWeight: '800', display: 'inline-flex', textDecoration: 'none' }}>
                          申し込み
                        </a>
                      )}
                    </div>
                  );
                })
              ) : (
                <div className="glass-card" style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-muted)' }}>
                  現在、予定されているイベントはありません。
                </div>
              )}
            </div>
          </div>
        </div>
      </section>


      {/* Details Sections based on Jimdo LP */}
      <section style={{ background: 'var(--bg-light)', padding: '4rem 0 2rem 0' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          
          {/* 1. 主催・講師 */}
          <div className="glass-card" style={{ padding: '1.5rem' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '1.2rem', borderBottom: '2px solid var(--primary-light)', paddingBottom: '0.4rem', display: 'inline-block' }}>【主催・ファシリテーター】</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
                <div style={{ width: '100px', height: '100px', borderRadius: '50%', overflow: 'hidden', border: '3px solid var(--primary)', boxShadow: 'var(--shadow-soft)' }}>
                  <Image
                    src="/profile.png"
                    alt="講師 トビー"
                    width={100}
                    height={100}
                    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                  />
                </div>
                <div>
                  <p style={{ fontSize: '1.1rem', color: 'var(--text-main)', margin: 0, fontWeight: '700' }}>
                    トビー
                  </p>
                  <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', margin: 0, fontWeight: '600', marginTop: '0.2rem' }}>
                    サラリーマン ／ 事業主 ／ 個人投資家
                  </p>
                </div>
              </div>
              <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem', color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.8', fontWeight: '500' }}>
                <li>・2020年に投資をスタート、当初は数十万円の損失を出す失敗を経験</li>
                <li>・その後、投資を基礎から真剣に学び直し、長期投資の本質を習得</li>
                <li>・現在の投資成績は1300%以上（投資歴5年）</li>
                <li>・サラリーマンと事業を並行しながら、1日の投資時間は平均1時間未満</li>
                <li>・「投資で痛い思いをする人を一人でも減らしたい」との想いから初心者向けに発信・教育活動中</li>
              </ul>
            </div>
          </div>

          {/* 2. 会場情報 */}
          <div className="glass-card" style={{ padding: '1.5rem' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '1.2rem', borderBottom: '2px solid var(--primary-light)', paddingBottom: '0.4rem', display: 'inline-block' }}>【会場情報】</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', marginTop: '0.5rem' }}>
              <div>
                <h4 style={{ fontSize: '1.05rem', fontWeight: '700', color: 'var(--text-main)', marginBottom: '0.4rem' }}>● リアル会場（対面）</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', margin: 0, paddingLeft: '0.5rem', lineHeight: '1.8' }}>
                  都内近郊の会議室等にて開催いたします。<br />
                  ※お申込み完了後、詳細な開催場所をメールにてご連絡いたします。
                </p>
              </div>
            </div>
          </div>

          {/* 3. 参加費 */}
          <div className="glass-card" style={{ padding: '1.5rem' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.8rem', borderBottom: '2px solid var(--primary-light)', paddingBottom: '0.4rem', display: 'inline-block' }}>【参加費】</h3>
            <p style={{ fontSize: '1.4rem', fontWeight: '800', color: 'var(--primary)', margin: 0, marginTop: '0.5rem' }}>
              1,000円
            </p>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0, marginTop: '0.3rem', lineHeight: '1.8' }}>
              ※会場や日程により異なる場合があります。詳細は開催日程一覧をご確認ください。
            </p>
          </div>

          {/* 4. 定員 */}
          <div className="glass-card" style={{ padding: '1.5rem' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.8rem', borderBottom: '2px solid var(--primary-light)', paddingBottom: '0.4rem', display: 'inline-block' }}>【定員】</h3>
            <p style={{ fontSize: '1.4rem', fontWeight: '800', color: 'var(--text-main)', margin: 0, marginTop: '0.5rem' }}>
              各回 3 名〜5名
            </p>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0, marginTop: '0.3rem', lineHeight: '1.8' }}>
              ※少人数制のため、質問がしやすい環境です
            </p>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section id="apply" className="form-section" style={{ padding: '5rem 0', background: 'white' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="section-header text-center" style={{ marginBottom: '3rem' }}>
            <h2 className="section-title" style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--primary-dark)' }}>参加申し込み</h2>
            <p className="section-subtitle" style={{ color: 'var(--text-muted)' }}>
              必要事項をご入力の上、「送信する」ボタンを押してください。<br />
              日程や空席状況を確認後、ご案内メールをお送りいたします。
            </p>
          </div>
          
          <div style={{ background: 'white', padding: '2.5rem', borderRadius: '24px', boxShadow: 'var(--shadow-lg)' }}>
            <CfgApplyForm events={availableEvents} />
          </div>
        </div>
      </section>

    </div>
  );
}
