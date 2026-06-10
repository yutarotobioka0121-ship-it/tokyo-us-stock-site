import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, CheckCircle, AlertTriangle, TrendingUp, DollarSign, Clock, Layers, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: '【初心者向け】米国株とは？日本株との違いや4つの特徴をわかりやすく解説 | 東京米国株クラブ',
  description: '米国株（アメリカ株）の基礎知識を初心者向けにわかりやすく解説！日本株との違いや、1株から買える仕組み、高い成長性、配当の魅力など、これから投資を始める20〜30代の方が知っておくべき4つの特徴を紹介します。',
};

export default function KnowledgePage() {
  return (
    <div className="knowledge-page" style={{ overflowWrap: 'break-word' }}>
      {/* Header Section */}
      <section className="post-header" style={{ background: 'var(--bg-warm)', padding: '100px 0 2.5rem 0', textAlign: 'left' }}>
        <div className="container">
          <Link href="/" className="btn-link" style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', fontFamily: 'var(--font-body)', fontWeight: '700' }}>
            <ArrowLeft size={18} style={{ marginRight: '0.5rem' }} /> トップへ戻る
          </Link>
          <span className="section-tag" style={{ fontFamily: 'var(--font-accent)', display: 'inline-block', marginBottom: '0.5rem' }}>KNOWLEDGE</span>
          <h1 className="post-title" style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.8rem, 6vw, 2.8rem)', fontWeight: '900', textAlign: 'left', marginLeft: '0', marginRight: 'auto', maxWidth: 'none', marginBottom: '0.5rem', color: 'var(--primary-dark)', lineHeight: '1.3' }}>
            米国株（アメリカ株）とは？
          </h1>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(0.95rem, 3vw, 1.1rem)', color: 'var(--text-muted)', margin: '0', lineHeight: '1.6' }}>
            投資初心者に向けて、日本株との違いや魅力的な4つの特徴をわかりやすく解説します。
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section style={{ background: 'white', padding: 'clamp(3rem, 8vw, 5rem) 0' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
            「将来のために投資を始めてみたいけれど、なぜ今みんな『米国株』に注目しているんだろう？」<br />
            「なんとなく難しそうだし、日本に住んでいるから日本株の方が安心なのでは？」
          </p>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
            そう思うのはごく自然なことです。しかし実は、**米国株には投資初心者（特にこれから中長期で資産を築いていきたい20代〜30代の方）にとって、日本株以上に始めやすく魅力的な仕組みがたくさん揃っています。**
          </p>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '2.5rem' }}>
            このページでは、米国株が注目される理由や、日本株との決定的な違い、そして初心者が最初の一歩を踏み出すための知識を、専門用語をできるだけ使わずにわかりやすく整理しました。
          </p>

          {/* Comparison Table Section */}
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.4rem, 4vw, 1.8rem)', fontWeight: '900', color: 'var(--primary-dark)', borderBottom: '2px solid var(--bg-warm)', paddingBottom: '0.8rem', marginTop: '3rem', marginBottom: '1.5rem' }}>
            一目でわかる！米国株と日本株の5つの違い
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', lineHeight: '1.6', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
            まずは、日本株と米国株の基本的なルールの違いを比較表で見てみましょう。
          </p>
          
          <div style={{ overflowX: 'auto', marginBottom: '3rem', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.08)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '500px', fontSize: '0.95rem', fontFamily: 'var(--font-body)' }}>
              <thead>
                <tr style={{ backgroundColor: 'var(--bg-warm)', borderBottom: '2px solid rgba(0,0,0,0.08)' }}>
                  <th style={{ padding: '1rem', fontWeight: '800', color: 'var(--primary-dark)' }}>比較項目</th>
                  <th style={{ padding: '1rem', fontWeight: '800', color: 'var(--primary-dark)' }}>日本株</th>
                  <th style={{ padding: '1rem', fontWeight: '800', color: 'var(--primary-dark)' }}>米国株（アメリカ株）</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                  <td style={{ padding: '1rem', fontWeight: '800', backgroundColor: 'rgba(0,0,0,0.01)' }}>最低購入単位</td>
                  <td style={{ padding: '1rem' }}>原則 **100株** 単位<br /><span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>（数万〜数十万円が必要）</span></td>
                  <td style={{ padding: '1rem', color: 'var(--primary-dark)', fontWeight: '700' }}>**1株** から購入可能<br /><span style={{ fontSize: '0.8rem', color: 'var(--primary-dark)' }}>（数百〜数千円で始められる）</span></td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                  <td style={{ padding: '1rem', fontWeight: '800', backgroundColor: 'rgba(0,0,0,0.01)' }}>主な配当回数</td>
                  <td style={{ padding: '1rem' }}>年 1〜2 回 が一般的</td>
                  <td style={{ padding: '1rem', color: 'var(--primary-dark)', fontWeight: '700' }}>年 **4回** が一般的<br /><span style={{ fontSize: '0.8rem', color: 'var(--primary-dark)' }}>（3ヶ月に1度配当金が入る）</span></td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                  <td style={{ padding: '1rem', fontWeight: '800', backgroundColor: 'rgba(0,0,0,0.01)' }}>主な取引時間（日本時間）</td>
                  <td style={{ padding: '1rem' }}>9:00 〜 15:00<br /><span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>（日中の仕事中に重なる）</span></td>
                  <td style={{ padding: '1rem' }}>**23:30 〜 翌6:00**<br /><span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>※サマータイムは 22:30 〜 翌5:00</span></td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                  <td style={{ padding: '1rem', fontWeight: '800', backgroundColor: 'rgba(0,0,0,0.01)' }}>値幅制限</td>
                  <td style={{ padding: '1rem' }}>あり（ストップ高・ストップ安）</td>
                  <td style={{ padding: '1rem' }}>**なし**<br /><span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>（急な値動きに注意が必要）</span></td>
                </tr>
                <tr>
                  <td style={{ padding: '1rem', fontWeight: '800', backgroundColor: 'rgba(0,0,0,0.01)' }}>為替の影響</td>
                  <td style={{ padding: '1rem' }}>なし</td>
                  <td style={{ padding: '1rem' }}>**あり**（円建てでの価値が変動）</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* 4 Features Section */}
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.4rem, 4vw, 1.8rem)', fontWeight: '900', color: 'var(--primary-dark)', borderBottom: '2px solid var(--bg-warm)', paddingBottom: '0.8rem', marginTop: '3.5rem', marginBottom: '1.5rem' }}>
            初心者に米国株をおすすめする「4つの特徴（メリット）」
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '2rem' }}>
            上記の比較表を踏まえ、米国株がなぜ初心者におすすめなのか、4つの魅力を深掘りしてみましょう。
          </p>

          {/* Feature 1 */}
          <div className="glass-card" style={{ padding: '1.8rem', borderRadius: '16px', background: 'var(--bg-warm)', border: '1px solid rgba(176, 58, 46, 0.05)', marginBottom: '1.5rem', display: 'flex', gap: '1.2rem', alignItems: 'flex-start', textAlign: 'left' }}>
            <div style={{ color: 'var(--primary)', flexShrink: 0, marginTop: '0.2rem' }}><DollarSign size={28} /></div>
            <div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', fontWeight: '800', color: 'var(--primary-dark)', margin: '0 0 0.5rem 0', lineHeight: '1.4' }}>
                1. 1株から、数百〜数千円で有名企業の株主になれる
              </h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', lineHeight: '1.7', color: 'var(--text-main)', margin: '0' }}>
                日本株は基本的に100株単位での購入となるため、数万円〜数十万円のまとまった初期資金が必要です。一方、米国株は**すべての銘柄を1株から購入可能**です。数千円から投資をスタートできるため、お小遣いの範囲で気軽にAppleやNVIDIA、Amazonといった世界最高峰の企業の株主になることができます。
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="glass-card" style={{ padding: '1.8rem', borderRadius: '16px', background: 'var(--bg-warm)', border: '1px solid rgba(176, 58, 46, 0.05)', marginBottom: '1.5rem', display: 'flex', gap: '1.2rem', alignItems: 'flex-start', textAlign: 'left' }}>
            <div style={{ color: 'var(--primary)', flexShrink: 0, marginTop: '0.2rem' }}><TrendingUp size={28} /></div>
            <div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', fontWeight: '800', color: 'var(--primary-dark)', margin: '0 0 0.5rem 0', lineHeight: '1.4' }}>
                2. 世界をリードする巨大企業と、高い「長期成長性」
              </h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', lineHeight: '1.7', color: 'var(--text-main)', margin: '0' }}>
                私たちが日常的に使っているスマートフォン（Apple）、検索エンジン（Google）、OSやAIツール（Microsoft）、ネット通販（Amazon）、SNS（Meta）などは、すべて米国企業です。これらの企業は世界中から資金と優秀な人材を集め、イノベーションを起こし続けています。米国市場全体（S&P500など）の株価は、一時的な下落はありつつも、過去数十年にわたり長期的に右肩上がりの成長を続けています。
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="glass-card" style={{ padding: '1.8rem', borderRadius: '16px', background: 'var(--bg-warm)', border: '1px solid rgba(176, 58, 46, 0.05)', marginBottom: '1.5rem', display: 'flex', gap: '1.2rem', alignItems: 'flex-start', textAlign: 'left' }}>
            <div style={{ color: 'var(--primary)', flexShrink: 0, marginTop: '0.2rem' }}><Layers size={28} /></div>
            <div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', fontWeight: '800', color: 'var(--primary-dark)', margin: '0 0 0.5rem 0', lineHeight: '1.4' }}>
                3. 配当金が年4回！「連続増配」を誇る企業も多数
              </h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', lineHeight: '1.7', color: 'var(--text-main)', margin: '0' }}>
                日本株の配当は年に1〜2回が一般的ですが、米国株は**年に4回（3ヶ月に1度）**配当が支払われる銘柄が主流です。また、株主還元への意識が非常に高く、何十年にもわたって毎年配当金を増やし続けている「連続増配企業」（コカ・コーラやプロクター・アンド・ギャンブルなど）が数多く存在します。3ヶ月に1度、定期的に配当が口座へ入る体験は、モチベーションを維持するのにも最適です。
              </p>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="glass-card" style={{ padding: '1.8rem', borderRadius: '16px', background: 'var(--bg-warm)', border: '1px solid rgba(176, 58, 46, 0.05)', marginBottom: '3rem', display: 'flex', gap: '1.2rem', alignItems: 'flex-start', textAlign: 'left' }}>
            <div style={{ color: 'var(--primary)', flexShrink: 0, marginTop: '0.2rem' }}><Clock size={28} /></div>
            <div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', fontWeight: '800', color: 'var(--primary-dark)', margin: '0 0 0.5rem 0', lineHeight: '1.4' }}>
                4. 日中は忙しいサラリーマンでも、夜間にじっくり取引可能
              </h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', lineHeight: '1.7', color: 'var(--text-main)', margin: '0' }}>
                日本株の取引時間は平日の「9:00〜15:00」であり、日中お仕事をされている方はリアルタイムでの取引が困難です。一方、米国株は日本時間の**「23:30〜翌6:00（サマータイム期は22:30〜翌5:00）」**に開場します。仕事や家事をすべて終え、お風呂に入ってから、自宅のソファでリラックスしながらリアルタイムの市場状況を確認し、じっくり取引することができます。
              </p>
            </div>
          </div>

          {/* Risks/Warnings Section */}
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.4rem, 4vw, 1.8rem)', fontWeight: '900', color: 'var(--primary-dark)', borderBottom: '2px solid var(--bg-warm)', paddingBottom: '0.8rem', marginTop: '3.5rem', marginBottom: '1.5rem' }}>
            あらかじめ知っておくべき「2つの注意点（リスク）」
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '2rem' }}>
            投資である以上、当然リスクも存在します。始める前に、以下の注意点を正しく理解しておきましょう。
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3rem' }}>
            <div style={{ borderLeft: '4px solid var(--primary)', paddingLeft: '1.2rem' }}>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: '800', color: 'var(--primary-dark)', margin: '0 0 0.5rem 0', display: 'flex', alignItems: 'center' }}>
                <AlertTriangle size={18} style={{ marginRight: '0.5rem', color: 'var(--primary)' }} /> 1. 為替リスク（為替変動）
              </h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', lineHeight: '1.7', color: 'var(--text-muted)', margin: '0' }}>
                米国株は米ドル建てで購入します。そのため、個別企業の株価が変わらなくても、「1ドル＝150円」から「1ドル＝140円」のように円高が進むと、円建てでの評価額が下がってしまいます。逆に円安が進めば、為替差益によってプラスになります。
              </p>
            </div>

            <div style={{ borderLeft: '4px solid var(--primary)', paddingLeft: '1.2rem' }}>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: '800', color: 'var(--primary-dark)', margin: '0 0 0.5rem 0', display: 'flex', alignItems: 'center' }}>
                <AlertTriangle size={18} style={{ marginRight: '0.5rem', color: 'var(--primary)' }} /> 2. 値幅制限（ストップ高・ストップ安）がない
              </h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', lineHeight: '1.7', color: 'var(--text-muted)', margin: '0' }}>
                日本市場には急激な高騰・暴落を防ぐ「値幅制限」がありますが、米国市場にはこれがありません。企業の業績悪化や不祥事などのニュースがあれば、1日で株価が大きく下落することがあります。特定の1社だけに集中して大金を投じるのではなく、幅広く分散させることが重要です。
              </p>
            </div>
          </div>

          {/* Investment Method Section */}
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.4rem, 4vw, 1.8rem)', fontWeight: '900', color: 'var(--primary-dark)', borderBottom: '2px solid var(--bg-warm)', paddingBottom: '0.8rem', marginTop: '3.5rem', marginBottom: '1.5rem' }}>
            初心者はどうやって始めるのが正解？
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
            初心者がリスクを抑えながら安全に米国株投資を始めるための基本ルールは、非常にシンプルです。それは**「インデックス投資（分散）」**と**「ドルコスト平均法（時間の分散）」**の組み合わせです。
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3rem' }}>
            <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'flex-start' }}>
              <div style={{ color: 'var(--primary)', flexShrink: 0, marginTop: '0.1rem' }}><CheckCircle size={20} /></div>
              <div>
                <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem', fontWeight: '800', color: 'var(--text-main)', margin: '0 0 0.3rem 0' }}>S&P500などのインデックス（指数）を買う</h4>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', lineHeight: '1.7', color: 'var(--text-muted)', margin: '0' }}>
                  個別企業を分析して選ぶのが難しい場合は、米国を代表する500企業に丸ごと投資できる「S&P500」などのインデックス型ETF・投資信託を選びましょう。これだけで自動的に超優秀な500社へ分散投資している状態を作ることができます。
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'flex-start' }}>
              <div style={{ color: 'var(--primary)', flexShrink: 0, marginTop: '0.1rem' }}><CheckCircle size={20} /></div>
              <div>
                <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem', fontWeight: '800', color: 'var(--text-main)', margin: '0 0 0.3rem 0' }}>ドルコスト平均法（毎月定額での積み立て）で買う</h4>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', lineHeight: '1.7', color: 'var(--text-muted)', margin: '0' }}>
                  一度に大金を投資するのではなく、「毎月定額（例: 3万円）」を淡々と買い続ける手法です。これにより、株価が高いときには少なく、株価が安いときには多く自動的に買い付けることができ、長期的に購入価格を均らす（平均化する）ことができます。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding" style={{ background: 'var(--bg-warm)', color: 'var(--text-main)', position: 'relative', overflow: 'hidden', textAlign: 'center', padding: '4rem 0' }}>
        <div style={{ position: 'absolute', top: '-50px', right: '-50px', width: '200px', height: '200px', borderRadius: '50%', background: 'rgba(176, 58, 46, 0.03)' }} />
        <div style={{ position: 'absolute', bottom: '-80px', left: '-80px', width: '300px', height: '300px', borderRadius: '50%', background: 'rgba(176, 58, 46, 0.02)' }} />
        
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '750px', margin: '0 auto' }}>
            <p style={{ fontFamily: 'var(--font-accent)', fontSize: '0.95rem', letterSpacing: '3px', fontWeight: '800', color: 'var(--primary)', marginBottom: '1.5rem', textTransform: 'uppercase' }}>
              Start Learning
            </p>
            
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.5rem, 4.5vw, 2.5rem)', fontWeight: '900', lineHeight: '1.4', marginBottom: '2rem', color: 'var(--text-main)' }}>
              一人で悩まずに、<br className="sp-hide" />
              まずは少人数でお話ししてみませんか？
            </h2>

            <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(0.95rem, 2.5vw, 1.15rem)', lineHeight: '1.8', color: 'var(--text-muted)', marginBottom: '2.5rem' }}>
              「何から始めればいいかやっぱり不安...」「自分の場合はどのくらい積み立てたらいい？」<br />
              東京米国株クラブでは、アットホームなカフェのような雰囲気の中で、<br className="sp-hide" />
              初心者の方が安心して質問できる少人数（限定4名）の勉強会を開催しています。
            </p>

            <div className="glass-card" style={{ background: 'var(--bg-white)', borderRadius: '24px', padding: '2.5rem 2rem', border: '1px solid var(--glass-border)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <p style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.1rem, 3vw, 1.3rem)', fontWeight: '800', lineHeight: '1.7', marginBottom: '2rem', color: 'var(--primary-dark)' }}>
                初心者向け米国株投資勉強会の詳細・スケジュールはこちらから
              </p>
              
              <Link href="/seminar" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '1rem 2.5rem', borderRadius: '30px', fontWeight: '800', fontSize: '1.05rem', transition: 'all 0.3s ease', textDecoration: 'none' }}>
                勉強会の詳細を見る <ArrowRight size={18} style={{ marginLeft: '0.5rem' }} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
