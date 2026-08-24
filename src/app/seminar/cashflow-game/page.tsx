import { Metadata } from 'next';
import Image from "next/image";
import { getCFGSchedule, CFGEvent } from "@/lib/microcms";
import CfgApplyForm from "@/components/CfgApplyForm";
import { MapPin, Target, BookOpen, Target as TargetIcon } from "lucide-react";

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
              src="/images/cfg/hero-bg.png"
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
      <section id="schedule" className="schedule-section" style={{ background: 'var(--bg-light)', padding: '5rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <div className="section-header text-center" style={{ marginBottom: '3rem' }}>
            <h2 className="section-title" style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--primary-dark)' }}>開催日程・場所</h2>
            <p className="section-subtitle" style={{ color: 'var(--text-muted)' }}>
              ご都合の良い日程を選んでお申し込みください。<br />※各回定員に達し次第、締め切らせていただきます。
            </p>
          </div>

          <div className="schedule-list" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {schedule && schedule.length > 0 ? (
              schedule.map((event) => (
                <div key={event.id} style={{ background: 'white', borderRadius: '16px', padding: '1.5rem 2rem', boxShadow: 'var(--shadow-soft)', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', border: event.status === 'open' ? '2px solid transparent' : '2px solid transparent', transition: 'var(--transition)' }}>
                  
                  <div style={{ flex: '1 1 300px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                      <h3 style={{ fontSize: '1.4rem', fontWeight: '800', color: 'var(--primary-dark)', margin: 0 }}>{event.date}</h3>
                      {event.status === 'open' ? (
                        <span className="badge" style={{ background: 'var(--primary)', color: 'white', padding: '4px 12px', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 'bold' }}>募集中</span>
                      ) : event.status === 'full' ? (
                        <span className="badge" style={{ background: '#fee2e2', color: '#b91c1c', padding: '4px 12px', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 'bold' }}>満席</span>
                      ) : (
                        <span className="badge" style={{ background: '#e5e7eb', color: '#4b5563', padding: '4px 12px', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 'bold' }}>受付終了</span>
                      )}
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', color: 'var(--text-main)', fontSize: '0.95rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><BookOpen size={16} /> <span>{event.time}</span></div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><MapPin size={16} /> <span>{event.location}</span></div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', flex: '1 1 200px', padding: '1rem', background: 'var(--bg-warm)', borderRadius: '12px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem' }}>
                      <span style={{ color: 'var(--text-muted)' }}>参加費:</span>
                      <strong style={{ color: 'var(--primary-dark)' }}>{event.fee}</strong>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem' }}>
                      <span style={{ color: 'var(--text-muted)' }}>定員:</span>
                      <strong style={{ color: 'var(--primary-dark)' }}>{event.capacity}名</strong>
                    </div>
                  </div>

                </div>
              ))
            ) : (
              <div style={{ textAlign: 'center', padding: '3rem', background: 'white', borderRadius: '16px', color: 'var(--text-muted)' }}>
                現在、予定されている開催日程はありません。<br />次回開催のお知らせをお待ちください。
              </div>
            )}
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
