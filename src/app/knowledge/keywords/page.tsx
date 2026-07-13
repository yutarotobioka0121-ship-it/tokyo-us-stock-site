import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, BookOpen, Award, TrendingUp, Layers, Activity, Compass, LineChart, Clock, DollarSign } from 'lucide-react';

export const metadata: Metadata = {
  title: '米国株の重要キーワード9選！初心者向け投資用語解説集 | 東京米国株クラブ',
  description: '米国株投資を始める前に知っておくべき「高配当」「取引時間」「時間外」「おすすめ」「モメンタム」などの重要キーワード9選を初心者向けに分かりやすく解説。検索でよく調べられる重要用語を網羅。',
  alternates: {
    canonical: 'https://www.tokyo-us-stock.com/knowledge/keywords',
  },
};

interface KeywordItem {
  keyword: string;
  kana: string;
  icon: React.ReactNode;
  summary: string;
  description: string;
}

export default function KeywordsPage() {
  const keywords: KeywordItem[] = [
    {
      keyword: '米国株 勉強会',
      kana: 'べいこくかぶ べんきょうかい',
      icon: <BookOpen className="text-primary" size={24} />,
      summary: '初心者向けに投資の基本や正しい銘柄選定、新NISA the 仕組みを基礎から学べる少人数の対面・オンラインセミナー。',
      description: '本やネットだけの独学投資には「偏った知識で損をする」「相談相手がいない」というリスクがあります。初心者向けの米国株勉強会は、実績のある講師から体系的な基本マインドや失敗しない始め方を直接学べる場です。「東京米国株クラブ」では、定員4名の少人数制カフェスタイルで、質問しやすいリラックスした勉強会を開催しています。',
    },
    {
      keyword: '米国株 高配当',
      kana: 'べいこくかぶ こうはいとう',
      icon: <Award className="text-primary" size={24} />,
      summary: '企業が利益の一部を多くの現金として株主に還元する仕組み。米国は「増配」への姿勢が非常に強いのが特徴。',
      description: '米国企業は株主還元を重視しており、50年以上連続で配当を増やし続けている「配当王（コカ・コーラやP&G等）」や、25年以上増配の「配当貴族」が多く存在します。これら個別株を組み合わせたり、VYM・HDVなどの米国高配当ETF（上場投資信託）に分散投資することで、年4回の配当金を活用した「毎月配当が振り込まれる不労所得システム」を初心者でも構築できます。',
    },
    {
      keyword: '米国株式',
      kana: 'べいこくかぶしき',
      icon: <DollarSign className="text-primary" size={24} />,
      summary: 'アメリカ合衆国の株式市場（NYSE、NASDAQ）に上場している企業の株式。',
      description: '日本株は原則100株単位（最低数十万円が必要）でしか購入できませんが、米国株式は「1株単位」から手軽に購入できる大きなメリットがあります。世界をリードする巨大IT企業（アップル、マイクロソフトなど）や有名ブランドの株も数千円〜数万円という超少額から購入できるため、自己資金の少ない初心者でも安全に複数銘柄へ分散投資が可能です。',
    },
    {
      keyword: '米国株式市場',
      kana: 'べいこくかぶしきしじょう',
      icon: <Layers className="text-primary" size={24} />,
      summary: 'ニューヨーク証券取引所（NYSE）やNASDAQを代表とする、世界最大の株式取引市場。',
      description: '全世界の株式市場の時価総額のうち、約6割が米国市場に集中しています。日本市場（約5%）と比べて圧倒的な規模と成長力があり、人口が増加し続ける米国経済を背景に、世界中から優秀な企業と多額の資金が集まり続けています。過去100年以上にわたってリーマンショックやコロナショックなどの大暴落を乗り越え、長期で右肩上がりに成長し続けている信頼性の高い市場です。',
    },
    {
      keyword: '米国株 時間外',
      kana: 'べいこくかぶ じかんがい',
      icon: <Activity className="text-primary" size={24} />,
      summary: '通常の取引時間（立会時間）の前後に行われる「プレ・マーケット」および「アフター・マーケット」での取引。',
      description: 'アメリカの市場では、通常取引時間（日本時間の夜間）の前後に「プレ・マーケット（通常時間の5時間半前から開始）」や「アフター・マーケット（通常時間終了後の4時間）」という時間外取引の仕組みが整備されています。米国企業の決算発表は時間外に行われることが多く、日本の主要ネット証券（SBI、楽天、マネックス等）も対応しているため、日中の仕事以外の時間でも注文や値動きの確認が可能です。',
    },
    {
      keyword: '米国株 おすすめ',
      kana: 'べいこくかぶ おすすめ',
      icon: <Compass className="text-primary" size={24} />,
      summary: '初心者が失敗しにくく、中長期で安定した資産形成が期待できる代表的な投資先。',
      description: '初心者におすすめなのは、米国の代表的企業500社をパッケージにしたETFである「S&P500（VOOやIVV）」や、経費率が極めて低く約400社に分散できる高配当ETF「VYM」です。個別株であれば、安定したキャッシュフローと圧倒的ブランド力を持つビッグテック（マイクロソフト、アップルなど）や、生活必需品セクターの超優良ディフェンシブ株（コカ・コーラなど）を長期保有するのが王道です。',
    },
    {
      keyword: '米国株式モメンタムファンド',
      kana: 'べいこくかぶしき もめんたむふぁんど',
      icon: <TrendingUp className="text-primary" size={24} />,
      summary: '直近で株価の上張トレンド（モメンタム）が特に強い銘柄に絞って投資し、高いリターンを目指す投資信託・ファンド。',
      description: '「モメンタム（勢い）」効果という投資理論に基づき、過去数ヶ月〜1年で上昇率の高い「勝ち馬」のような強い銘柄に自動的に資金を配分するファンドです。成長株（グロース株）の上昇相場で市場平均以上の好成績を叩き出しやすい反面、市場全体のトレンドが急落した時のブレが大きくなるリスクもあるため、長期つみたて投資のサブ（サテライト枠）として活用されることがあります。',
    },
    {
      keyword: '米国株 取引時間',
      kana: 'べいこくかぶ とりひきじかん',
      icon: <Clock className="text-primary" size={24} />,
      summary: '米国市場がリアルタイムで開いている日本時間でのスケジュール。日本の夜間に該当。',
      description: '通常時間（11月上旬〜3月上旬の冬時間）は日本時間の「23:30〜翌6:00」、夏時間（サマータイム・3月中旬〜11月上旬）は日本時間の「22:30〜翌5:00」が取引時間（立会時間）です。日本の昼間のように仕事に拘束されず、夕食を済ませて帰宅した落ち着いた夜間の時間にリアルタイムの価格を見ながらゆっくり取引できるため、日本の会社員や事業主にとって非常に相性の良い市場です。',
    },
    {
      keyword: '米国株価',
      kana: 'べいこくかぶか',
      icon: <LineChart className="text-primary" size={24} />,
      summary: '米国個別銘柄の価格や、市場全体の動向を示す代表的な株価指数。',
      description: 'ニュースで耳にする「NYダウ（優良企業30社の平均）」「S&P500（主要500社を時価総額で加重平均）」「NASDAQ100（ハイテク大手100社）」などが、米国全体の株価の健康状態を表す指数（インデックス）です。個別株を買う場合でも、これらの指数のチャートや過去実績（年平均7〜10%の成長）を理解しておくことが、冷静に長期投資を続けるための基礎知識となります。',
    },
  ];

  // FAQ Schema for Search Engine
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: keywords.map(kw => ({
      '@type': 'Question',
      name: `米国株キーワード「${kw.keyword}」とは何ですか？`,
      acceptedAnswer: {
        '@type': 'Answer',
        text: kw.description,
      },
    })),
  };

  return (
    <div className="keywords-page" style={{ overflowWrap: 'break-word' }}>
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Header */}
      <section className="post-header" style={{ background: 'var(--bg-warm)', padding: '100px 0 2.5rem 0', textAlign: 'left' }}>
        <div className="container">
          <Link href="/knowledge" className="btn-link" style={{ marginBottom: '1.5rem', display: 'inline-flex', alignItems: 'center', fontFamily: 'var(--font-body)', fontWeight: '700', textDecoration: 'none' }}>
            <ArrowLeft size={18} style={{ marginRight: '0.5rem' }} /> 基礎知識へ戻る
          </Link>
          <h1 className="post-title" style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.8rem, 5vw, 2.5rem)', fontWeight: '900', textAlign: 'left', margin: '0 0 1rem 0', color: 'var(--primary-dark)', lineHeight: '1.3' }}>
            米国株（アメリカ株）重要キーワード解説集
          </h1>
          <p style={{ fontFamily: 'var(--font-body)', color: 'var(--text-muted)', fontSize: '1.05rem', margin: 0, lineHeight: '1.6', maxWidth: '700px' }}>
            インターネット検索でよく調べられる米国株の重要単語・キーワード9選を、初心者向けに分かりやすく解説しました。投資を始める前の予備知識としてお役立てください。
          </p>
        </div>
      </section>

      {/* Keywords Cards Section */}
      <section style={{ background: 'white', padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }}>
            {keywords.map((kw, index) => (
              <div 
                key={index} 
                className="glass-card" 
                id={encodeURIComponent(kw.keyword)}
                style={{ 
                  padding: '2rem', 
                  borderRadius: '24px', 
                  border: '1px solid rgba(176, 58, 46, 0.12)', 
                  background: 'white', 
                  boxShadow: 'var(--shadow-soft)',
                  textAlign: 'left'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem', borderBottom: '1px solid #f3f4f6', paddingBottom: '1rem' }}>
                  <div style={{ 
                    width: '48px', 
                    height: '48px', 
                    borderRadius: '14px', 
                    background: 'var(--bg-warm)', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center' 
                  }}>
                    {kw.icon}
                  </div>
                  <div>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: '600', display: 'block', marginBottom: '0.2rem' }}>
                      {kw.kana}
                    </span>
                    <h2 style={{ fontSize: 'clamp(1.2rem, 4vw, 1.45rem)', fontWeight: '900', color: 'var(--primary-dark)', margin: 0, fontFamily: 'var(--font-heading)' }}>
                      {kw.keyword}
                    </h2>
                  </div>
                </div>

                <div style={{ marginBottom: '1.2rem', padding: '1rem 1.2rem', background: 'var(--bg-warm)', borderRadius: '14px', borderLeft: '4px solid var(--primary)' }}>
                  <p style={{ margin: 0, fontSize: '0.95rem', fontWeight: '800', color: 'var(--text-main)', lineHeight: '1.6' }}>
                    要約：{kw.summary}
                  </p>
                </div>

                <p style={{ margin: 0, fontSize: '1rem', lineHeight: '1.8', color: 'var(--text-muted)', fontWeight: '500' }}>
                  {kw.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ background: 'var(--bg-warm)', color: 'var(--text-main)', position: 'relative', overflow: 'hidden', textAlign: 'center', padding: '4rem 0' }}>
        <div style={{ position: 'absolute', top: '-50px', right: '-50px', width: '200px', height: '200px', borderRadius: '50%', background: 'rgba(176, 58, 46, 0.03)' }} />
        <div style={{ position: 'absolute', bottom: '-80px', left: '-80px', width: '300px', height: '300px', borderRadius: '50%', background: 'rgba(176, 58, 46, 0.02)' }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '750px', margin: '0 auto' }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.4rem, 4vw, 2rem)', fontWeight: '900', lineHeight: '1.5', marginBottom: '1.5rem', color: 'var(--primary-dark)' }}>
              キーワードの基本は分かったけれど、<br />実際の取引画面や設定に不安はありませんか？
            </h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(0.95rem, 2.5vw, 1.1rem)', lineHeight: '1.8', color: 'var(--text-muted)', marginBottom: '2rem' }}>
              ネットや本で調べるだけでは解決しない「具体的に何を買えばいい？」「証券口座の設定は合っている？」という疑問。
              東京米国株クラブの<strong>少人数制勉強会（定員4名）</strong>なら、カフェのようなリラックスした雰囲気で、疑問をその場で解決できます。
            </p>

            <div className="glass-card" style={{ background: 'white', borderRadius: '24px', padding: '2rem', border: '1px solid var(--glass-border)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <p style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: '800', marginBottom: '1.5rem', color: 'var(--text-main)' }}>
                現在の開催スケジュールおよびお申し込みはこちらから
              </p>
              <Link href="/seminar" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '1rem 2.5rem', borderRadius: '30px', fontWeight: '800', fontSize: '1.05rem', transition: 'all 0.3s ease', textDecoration: 'none' }}>
                勉強会のスケジュールを見る <ArrowRight size={18} style={{ marginLeft: '0.5rem' }} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
