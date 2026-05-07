import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, MapPin, MessageCircle, HelpCircle, Users, Target, BookOpen, Coffee } from "lucide-react";
import { getSessions } from "@/lib/microcms";
import { formatSessionDate, formatSessionTime } from "@/lib/utils";

export const dynamic = 'force-dynamic';

export default async function SeminarPage() {
  const sessions = await getSessions();

  return (
    <div className="seminar-page" style={{ textAlign: 'center', wordBreak: 'keep-all', overflowWrap: 'break-word' }}>
      {/* Hero Section */}
      <section className="seminar-hero" style={{ background: 'var(--bg-warm)', padding: '120px 0 60px', textAlign: 'center' }}>
        <div className="container">
          <span className="section-tag">BEGINNER'S SEMINAR</span>
          <h1 className="post-title" style={{ marginBottom: '1rem', fontSize: 'clamp(2rem, 5vw, 3rem)' }}>
            <span style={{ display: 'inline-block' }}>初心者から始める、</span>
            <span style={{ display: 'inline-block' }}>一生モノの米国株投資勉強会</span>
          </h1>
          <p className="hero-subtitle mx-auto" style={{ maxWidth: '600px', marginBottom: '3rem', color: 'var(--text-muted)' }}>
            カフェでお茶を飲むようにリラックスした雰囲気で、投資の「わからない」を「わかった」に変えませんか？
          </p>
          <div className="seminar-hero-image" style={{ borderRadius: '24px', overflow: 'hidden', boxShadow: 'var(--shadow-soft)', maxWidth: '800px', margin: '0 auto', aspectRatio: '16/9', position: 'relative' }}>
            <Image
              src="/workshop.png"
              alt="勉強会の様子"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="section-padding" style={{ background: 'white' }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">こんなお悩み、ありませんか？</h2>
          </div>
          <div className="problems-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', maxWidth: '900px', margin: '0 auto' }}>
            <div className="problem-card glass-card" style={{ padding: '2rem', textAlign: 'center' }}>
              <HelpCircle size={40} color="var(--primary)" style={{ margin: '0 auto 1rem' }} />
              <p style={{ fontWeight: '700', fontSize: '1.1rem' }}>
                <span style={{ display: 'inline-block' }}>投資に興味はあるけど、</span>
                <span style={{ display: 'inline-block' }}>何から始めればいいか分からない…</span>
              </p>
            </div>
            <div className="problem-card glass-card" style={{ padding: '2rem', textAlign: 'center' }}>
              <Target size={40} color="var(--primary)" style={{ margin: '0 auto 1rem' }} />
              <p style={{ fontWeight: '700', fontSize: '1.1rem' }}>
                <span style={{ display: 'inline-block' }}>独学で始めてみたけど、</span>
                <span style={{ display: 'inline-block' }}>ギャンブルみたいになってしまって不安…</span>
              </p>
            </div>
            <div className="problem-card glass-card" style={{ padding: '2rem', textAlign: 'center' }}>
              <Users size={40} color="var(--primary)" style={{ margin: '0 auto 1rem' }} />
              <p style={{ fontWeight: '700', fontSize: '1.1rem' }}>
                <span style={{ display: 'inline-block' }}>同世代で投資について、</span>
                <span style={{ display: 'inline-block' }}>気軽に話せる仲間がいない…</span>
              </p>
            </div>
          </div>
          <p className="text-center mt-10" style={{ fontSize: '1.2rem', fontWeight: '800', color: 'var(--primary-dark)' }}>
            そのお悩み、東京米国株クラブの勉強会で解決できます！
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding" style={{ background: 'var(--bg-warm)' }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">当クラブの勉強会の特徴</h2>
          </div>
          <div className="features-grid" style={{ display: 'grid', gap: '3rem', maxWidth: '800px', margin: '0 auto' }}>
            <div className="feature-item" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'center' }}>
              <div className="feature-icon" style={{ background: 'var(--primary)', color: 'white', padding: '1rem', borderRadius: '16px' }}>
                <Coffee size={32} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', color: 'var(--primary-dark)' }}>リラックスして学べるアットホームな環境</h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>カフェでお茶をするような気軽な雰囲気で進行します。少人数制なので、分からないことがあればその場ですぐに質問できます。一人で参加される方も多いのでご安心ください。</p>
              </div>
            </div>
            <div className="feature-item" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'center' }}>
              <div className="feature-icon" style={{ background: 'var(--primary)', color: 'white', padding: '1rem', borderRadius: '16px' }}>
                <BookOpen size={32} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', color: 'var(--primary-dark)' }}>超初心者向けのカリキュラム</h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>難しい専門用語や複雑なチャート分析は極力使いません。投資の「キホン」から、ギャンブルにならない堅実な資産形成の考え方まで、ステップ・バイ・ステップで丁寧に解説します。</p>
              </div>
            </div>
            <div className="feature-item" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'center' }}>
              <div className="feature-icon" style={{ background: 'var(--primary)', color: 'white', padding: '1rem', borderRadius: '16px' }}>
                <Target size={32} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', color: 'var(--primary-dark)' }}>5年で1300%の実績に基づく「投資哲学」</h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>小手先のテクニックではなく、長く勝ち続けるための「マインドセット（考え方）」をお伝えします。相場に一喜一憂せず、安心して資産を増やしていくための土台を作ります。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="section-padding" style={{ background: 'white' }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">当日の流れ・カリキュラム例</h2>
            <p className="section-subtitle">※約60分のプログラムを予定しています</p>
          </div>
          <div className="timeline" style={{ maxWidth: '600px', margin: '0 auto', position: 'relative' }}>
            <div style={{ padding: '2rem 1.5rem', borderTop: '4px solid var(--primary)', marginBottom: '1.5rem', background: 'var(--bg-warm)', borderRadius: '16px' }}>
              <h4 style={{ color: 'var(--primary)', fontWeight: '800', marginBottom: '0.8rem' }}>1. 自己紹介</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>まずは緊張をほぐすため、参加者同士で簡単な自己紹介を行います。</p>
            </div>
            <div style={{ padding: '2rem 1.5rem', borderTop: '4px solid var(--primary)', marginBottom: '1.5rem', background: 'var(--bg-warm)', borderRadius: '16px' }}>
              <h4 style={{ color: 'var(--primary)', fontWeight: '800', marginBottom: '0.8rem' }}>2. 投資とギャンブルの違いとは？</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>なぜ多くの人が投資で失敗してしまうのか？資産形成において最も重要な「マインドセット」について解説します。</p>
            </div>
            <div style={{ padding: '2rem 1.5rem', borderTop: '4px solid var(--primary)', marginBottom: '1.5rem', background: 'var(--bg-warm)', borderRadius: '16px' }}>
              <h4 style={{ color: 'var(--primary)', fontWeight: '800', marginBottom: '0.8rem' }}>3. なぜ「米国株」なのか？</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>世界経済の中心である米国の強さと、過去のデータに基づいた長期投資の優位性について分かりやすく説明します。</p>
            </div>
            <div style={{ padding: '2rem 1.5rem', borderTop: '4px solid var(--primary)', background: 'var(--bg-warm)', borderRadius: '16px' }}>
              <h4 style={{ color: 'var(--primary)', fontWeight: '800', marginBottom: '0.8rem' }}>4. 質疑応答・交流タイム</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>疑問に思ったことや、これから投資を始める上での不安など、何でも気軽にご質問ください。</p>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="section-padding schedule-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag" style={{ fontSize: '1.1rem', letterSpacing: '1px' }}>初心者向け米国株式投資 勉強会</span>
            <h2 className="section-title">開催スケジュール</h2>
            <p className="section-subtitle">
              次回の開催日程はこちらです。<br className="sp-hide" />少人数制のため、お早めにお申し込みください。
            </p>
          </div>

          <div className="schedule-grid">
            {sessions && sessions.length > 0 ? (
              sessions.map((session) => {
                const status = Array.isArray(session.status) ? session.status[0] : session.status;
                const type = Array.isArray(session.type) ? session.type[0] : session.type;
                const formattedDate = formatSessionDate(session.date);
                const formattedTime = formatSessionTime(session.time || session.date);

                return (
                  <div key={session.id} className={`schedule-card glass-card ${status === 'full' ? 'opacity-60' : ''}`}>
                    <div className="schedule-meta" style={{ marginBottom: '1rem', borderBottom: '1px solid var(--border)', paddingBottom: '0.8rem', justifyContent: 'center' }}>
                      <span className={`badge ${status === 'open' || status === '募集中' ? 'badge-open' : 'badge-full'}`} style={{ fontSize: '1rem', padding: '0.4rem 1rem' }}>
                        {status === 'open' || status === '募集中' ? '募集中' : status === 'full' || status === '満席' ? '満席' : '受付終了'}
                      </span>
                    </div>
                    
                    <dl className="schedule-details">
                      <div className="detail-row">
                        <dt>日程</dt>
                        <dd className="detail-highlight">{formattedDate} {formattedTime}〜</dd>
                      </div>
                      <div className="detail-row">
                        <dt>開催形式</dt>
                        <dd>{type === 'online' || type === 'オンライン' ? 'オンライン' : '対面開催'}</dd>
                      </div>
                      <div className="detail-row">
                        <dt>会場</dt>
                        <dd>
                          {type === 'online' || type === 'オンライン' 
                            ? 'オンライン（Zoomにて実施。URLは別途ご案内します）' 
                            : `${session.location || '都内近郊'}付近（お申し込み後に詳細をご案内します）`}
                        </dd>
                      </div>
                      <div className="detail-row">
                        <dt>費用</dt>
                        <dd className="detail-highlight" style={{ color: 'var(--primary)' }}>無料</dd>
                      </div>
                      <div className="detail-row">
                        <dt>内容</dt>
                        <dd style={{ fontSize: '0.95rem', lineHeight: '1.5' }}>米国株長期投資の基礎と、ギャンブルにしないための投資哲学（マインドセット）について解説します。</dd>
                      </div>
                    </dl>

                    <div className="schedule-footer" style={{ marginTop: '1.5rem' }}>
                      {status === 'open' || status === '募集中' ? (
                        <Link href={`/apply?session=${session.id}`} className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                          この日程で申し込む <ArrowRight size={18} style={{ marginLeft: '0.5rem' }} />
                        </Link>
                      ) : (
                        <button disabled className="btn btn-outline opacity-50 cursor-not-allowed" style={{ width: '100%', justifyContent: 'center' }}>
                          {status === 'full' || status === '満席' ? '満席' : '受付終了'}
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
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding" style={{ background: 'white' }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">よくある質問</h2>
          </div>
          <div className="faq-container" style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div className="faq-item glass-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <h4 style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center', fontSize: '1.1rem', color: 'var(--primary-dark)', marginBottom: '1rem' }}>
                <span style={{ background: 'var(--primary)', color: 'white', padding: '0.2rem 0.8rem', borderRadius: '8px', fontWeight: '800' }}>Q</span>
                投資経験が全くない初心者ですが参加できますか？
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center' }}>
                <span style={{ color: 'var(--text-muted)', padding: '0.2rem 0.8rem', fontWeight: '800', fontSize: '1.1rem' }}>A</span>
                <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', margin: 0 }}>もちろんです！本勉強会は「これから投資を始めたい」「基礎から学び直したい」という方を主な対象としています。専門用語は極力使わず、分かりやすく丁寧にお伝えします。</p>
              </div>
            </div>
            <div className="faq-item glass-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <h4 style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center', fontSize: '1.1rem', color: 'var(--primary-dark)', marginBottom: '1rem' }}>
                <span style={{ background: 'var(--primary)', color: 'white', padding: '0.2rem 0.8rem', borderRadius: '8px', fontWeight: '800' }}>Q</span>
                参加費以外に何か料金はかかりますか？（何か売りつけられませんか？）
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center' }}>
                <span style={{ color: 'var(--text-muted)', padding: '0.2rem 0.8rem', fontWeight: '800', fontSize: '1.1rem' }}>A</span>
                <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', margin: 0 }}>参加費は無料です（対面の場合はご自身のカフェ代のみご負担ください）。強引な勧誘や金融商品の販売は一切行っておりませんので、安心してご参加ください。</p>
              </div>
            </div>
            <div className="faq-item glass-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <h4 style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center', fontSize: '1.1rem', color: 'var(--primary-dark)', marginBottom: '1rem' }}>
                <span style={{ background: 'var(--primary)', color: 'white', padding: '0.2rem 0.8rem', borderRadius: '8px', fontWeight: '800' }}>Q</span>
                一人で参加しても大丈夫ですか？
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center' }}>
                <span style={{ color: 'var(--text-muted)', padding: '0.2rem 0.8rem', fontWeight: '800', fontSize: '1.1rem' }}>A</span>
                <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', margin: 0 }}>はい、参加者の多くがお一人での参加です。アットホームな雰囲気ですので、すぐに馴染んでいただけます。</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
