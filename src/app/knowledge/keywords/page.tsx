import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, BookOpen, Award, TrendingUp, Layers, Activity, Compass, LineChart, Clock, DollarSign, ShieldCheck, Calculator, BarChart2, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: '米国株の重要用語キーワード15選！初心者向け完全用語解説集 | 東京米国株クラブ',
  description: '米国株投資を始める前に知っておくべき「S&P500」「PER・PBR」「高配当・配当貴族」「特定口座」「時間外取引」「ドル・コスト平均法」「FOMC」など重要キーワード15選を初心者向けに分かりやすく徹底解説。',
  alternates: {
    canonical: 'https://www.tokyo-us-stock.com/knowledge/keywords',
  },
  openGraph: {
    title: '米国株の重要用語キーワード15選！初心者向け完全用語解説集 | 東京米国株クラブ',
    description: '米国株投資を始める前に知っておくべき「S&P500」「PER・PBR」「高配当・配当貴族」「特定口座」「時間外取引」「ドル・コスト平均法」「FOMC」など重要キーワード15選を初心者向けに分かりやすく徹底解説。',
    url: 'https://www.tokyo-us-stock.com/knowledge/keywords',
    siteName: '東京米国株クラブ',
    images: [
      {
        url: 'https://www.tokyo-us-stock.com/ogp.png',
        width: 1200,
        height: 630,
        alt: '米国株重要キーワード解説集',
      },
    ],
    locale: 'ja_JP',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: '米国株の重要用語キーワード15選！初心者向け完全用語解説集 | 東京米国株クラブ',
    description: '米国株投資を始める前に知っておくべき重要キーワード15選を初心者向けに分かりやすく徹底解説。',
    images: ['https://www.tokyo-us-stock.com/ogp.png'],
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
      keyword: '米国株 セミナー',
      kana: 'べいこくかぶ せみなー',
      icon: <BookOpen className="text-primary" size={24} />,
      summary: '初心者向けに投資の基本や正しい銘柄選定、新NISAの仕組みを基礎から学べる少人数の対面・オンラインセミナー。',
      description: '本やネットだけの独学投資には「偏った知識で損をする」「相談相手がいない」というリスクがあります。初心者向けの米国株セミナーは、実績のある講師から体系的な基本マインドや失敗しない始め方を直接学べる場です。「東京米国株クラブ」では、定員4名の少人数制カフェスタイルで、質問しやすいリラックスしたセミナーを開催しています。',
    },
    {
      keyword: '米国株 高配当（配当貴族・配当王）',
      kana: 'べいこくかぶ こうはいとう',
      icon: <Award className="text-primary" size={24} />,
      summary: '企業が利益の一部を多くの現金として株主に還元する仕組み。米国は25年以上増配する「配当貴族」が多い。',
      description: '米国企業は株主還元を非常に重視しており、50年以上連続で配当を増やし続けている「配当王（コカ・コーラやP&G等）」や、25年以上増配の「配当貴族」が多く存在します。これら個別株を組み合わせたり、VYM・HDVなどの米国高配当ETF（上場投資信託）に分散投資することで、年4回の配当金を活用した「毎月配当が振り込まれる不労所得システム」を初心者でも構築できます。',
    },
    {
      keyword: '米国株式（米国株）',
      kana: 'べいこくかぶしき',
      icon: <DollarSign className="text-primary" size={24} />,
      summary: 'アメリカ合衆国の株式市場（NYSE、NASDAQ）に上場している企業の株式。',
      description: '日本株は原則100株単位（最低数十万円が必要）でしか購入できませんが、米国株式は「1株単位」から手軽に購入できる大きなメリットがあります。世界をリードする巨大IT企業（アップル、マイクロソフトなど）や有名ブランドの株も数千円〜数万円という超少額から購入できるため、自己資金の少ない初心者でも安全に複数銘柄へ分散投資が可能です。',
    },
    {
      keyword: '米国株式市場（NYSE・NASDAQ）',
      kana: 'べいこくかぶしきしじょう',
      icon: <Layers className="text-primary" size={24} />,
      summary: 'ニューヨーク証券取引所（NYSE）やNASDAQを代表とする、世界最大の株式取引市場。',
      description: '全世界の株式市場の時価総額のうち、約6割が米国市場に集中しています。日本市場（約5%）と比べて圧倒的な規模と成長力があり、人口が増加し続ける米国経済を背景に、世界中から優秀な企業と多額の資金が集まり続けています。過去100年以上にわたってリーマンショックやコロナショックなどの大暴落を乗り越え、長期で右肩上がりに成長し続けている信頼性の高い市場です。',
    },
    {
      keyword: 'S&P500指数',
      kana: 'えすあんどぴー ごひゃく',
      icon: <BarChart2 className="text-primary" size={24} />,
      summary: '米国市場を代表する主要優良企業500社で構成される株価指数。長期で最高値を更新し続ける投資の王道。',
      description: 'S&P500はアメリカの主要業種の上位優良企業500社を時価総額加重平均で選出した指数です。GAFAMなどの巨大ITからヘルスケア・消費財までバランスよく分散されており、過去30年間の平均年間利回りは約9〜10%と極めて優秀です。ウォーレン・バフェットをはじめ多くのプロが「初心者はS&P500インデックスファンドを毎月積立購入するのが最善」と推奨しています。',
    },
    {
      keyword: 'PER（株価収益率）・PBR（株価純資産倍率）',
      kana: 'ぴーいーあーる / ぴーびーあーる',
      icon: <Calculator className="text-primary" size={24} />,
      summary: '企業の株価が割安か割高かを客観的な数値で判定するための代表的な指標。',
      description: 'PER（Price Earnings Ratio）は「現在の株価が1株当たり純利益（EPS）の何倍か」を表し、数値が低いほど株価は割安と判断されます（米国株全体平均は約18〜22倍）。PBR（Price Book-value Ratio）は「株価が1株当たり純資産の何倍か」を示します。成長企業の多い米国株ではPERだけでなく売上高成長率（PSR）なども併せて総合評価することが大切です。',
    },
    {
      keyword: '特定口座（源泉あり・源泉なし）',
      kana: 'とくていこうざ',
      icon: <ShieldCheck className="text-primary" size={24} />,
      summary: '証券会社が投資家に代わって年間の売買損益や税金を自動計算してくれる便利な口座区分。',
      description: '証券口座を開設する際、「特定口座（源泉徴収あり）」「特定口座（源泉徴収なし）」「一般口座」の3つから選択します。初心者は迷わず「特定口座（源泉あり）」を選ぶのが正解です。売買益や配当金が出るたびに証券会社が約20.315%の税金を自動で天引き（源泉徴収）して国へ納付してくれるため、面倒な確定申告の手間が完全に不要になります。',
    },
    {
      keyword: 'ドル・コスト平均法',
      kana: 'どる・こすとへいきんほう',
      icon: <TrendingUp className="text-primary" size={24} />,
      summary: '株価が高いときも低いときも、毎月一定額（例: 月3万円）を継続して買い続ける安全な投資手法。',
      description: '相場の価格変動リスクを回避するための時間分散テクニックです。価格が高いときには少ない株数を購入し、株価が安く暴落しているときには自動的に多くの株数を買い付けることができるため、平均購入単価を低く抑えることができます。感情に左右されず機械的に積立を行えるため、初心者が長期投資を成功させる最大の武器になります。',
    },
    {
      keyword: '新NISA（つみたて投資枠・成長投資枠）',
      kana: 'しんにーさ',
      icon: <CheckCircle2 className="text-primary" size={24} />,
      summary: '年間最大360万円、一生涯で最大1,800万円までの投資で得た利益が全額永久非課税になる神制度。',
      description: '2024年からスタートした新しいNISA制度です。通常、株の利益には約20%の税金がかかりますが、新NISA口座で購入した米国株インデックスファンドや米国株の売却益・配当金はすべて非課税（税金0円）になります。初心者の方はまず「つみたて投資枠」でS&P500連動ファンドを毎月積立設定することから始めるのが定石です。',
    },
    {
      keyword: '米国株 時間外取引（プレ・アフター）',
      kana: 'べいこくかぶ じかんがいとりひき',
      icon: <Activity className="text-primary" size={24} />,
      summary: '通常取引（立会時間）の前後に行われる「プレ・マーケット」および「アフター・マーケット」での取引。',
      description: 'アメリカの市場では、通常取引時間（日本時間の夜間）の前後に「プレ・マーケット（通常時間の5時間半前から開始）」や「アフター・マーケット（通常時間終了後の4時間）」という時間外取引の仕組みが整備されています。米国企業の決算発表は時間外に行われることが多く、日本の主要ネット証券も対応しているため、仕事終わりの時間でも値動きの確認や注文が可能です。',
    },
    {
      keyword: '米国株 取引時間（夏時間・冬時間）',
      kana: 'べいこくかぶ とりひきじかん',
      icon: <Clock className="text-primary" size={24} />,
      summary: '米国株式市場の通常取引時間。日本時間の夜間にオープンするため日中仕事の人でもリアルタイム取引可能。',
      description: '米国市場は日本時間で「夏時間（3月第2日曜日〜11月第1日曜日）：22:30〜翌5:00」「冬時間（11月第1日曜日〜3月第2日曜日）：23:30〜翌6:00」に開きます。日本の東京証券取引所（9:00〜15:30）と異なり、夜間に取引が行われるため、日中仕事をしている会社員や主婦の方でも帰宅後のリラックスした時間帯にリアルタイムな株価を確認しながら取引できるメリットがあります。',
    },
    {
      keyword: 'キャピタルゲインとインカムゲイン',
      kana: 'きゃぴたるげいん / いんかむげいん',
      icon: <LineChart className="text-primary" size={24} />,
      summary: '株式投資で得られる2種類の利益。値上がり益（キャピタル）と配当・利息収入（インカム）。',
      description: 'キャピタルゲインとは、購入した株が値上がりした際に売却して得られる差額利益（値上がり益）のことです。一方、インカムゲインとは株を保有し続けることで定期的に受け取れる配当金収入のことです。米国株投資では、株価の長期的な成長によるキャピタルゲインと、年4回支払われる安定したインカムゲインの両方を狙うことができます。',
    },
    {
      keyword: 'FOMC（連邦公開市場委員会）・FRB',
      kana: 'えふおーえむしー / えふあーるびー',
      icon: <Compass className="text-primary" size={24} />,
      summary: 'アメリカの政策金利（利上げ・利下げ）を決定する最高意志決定機関。世界の株式市場に絶大な影響を与える。',
      description: 'FRB（連邦準備制度理事会）はアメリカの中央銀行であり、FOMCは年8回開催される金利方針の決定会合です。FOMCで「利上げ」が発表されると景気抑制のため株価が一時下落しやすく、「利下げ」が発表されると市場に資金が流れて株価が上昇しやすくなります。米国株投資家にとって最も注目すべき経済イベントの一つです。',
    },
    {
      keyword: '米国株 スクリーニング',
      kana: 'べいこくかぶ すくりーにんぐ',
      icon: <BarChart2 className="text-primary" size={24} />,
      summary: '約6,000社以上ある米国上場企業の中から、希望の数値条件を指定して銘柄を自動絞り込みする手法。',
      description: '膨大な米国企業から自分の投資スタイルに合った優良企業を探すための必須ツールです。「配当利回り3%以上」「過去5年売上成長率10%以上」「時価総額100億ドル以上」などのフィルター条件を設定することで、条件に合致する銘柄をわずか数秒で抽出できます。SBI証券や楽天証券の銘柄スクリーナー機能を使えば無料で利用可能です。',
    },
    {
      keyword: '米国株 確定申告',
      kana: 'べいこくかぶ かくていしんこく',
      icon: <Calculator className="text-primary" size={24} />,
      summary: '1年間の株の売買損益や配当金を国税庁に申告する手続き。「特定口座（源泉あり）」なら原則不要。',
      description: '特定口座（源泉徴収あり）を利用していれば証券会社が税金を自動納付するため確定申告は不要です。ただし、米国株配当金の「二重課税（米国10%＋日本20%）」を取り戻す「外国税額控除」の申請や、他社の株の赤字と相殺する「損益通算」を行う場合は、任意で確定申告を行うことで納め過ぎた税金を取り戻す（還付を受ける）ことができます。',
    },
  ];

  return (
    <div className="knowledge-page" style={{ overflowWrap: 'break-word' }}>
      {/* Header Section */}
      <section className="post-header" style={{ background: 'var(--bg-warm)', padding: '100px 0 2.5rem 0', textAlign: 'left' }}>
        <div className="container">
          <Link href="/knowledge" className="btn-link" style={{ marginBottom: '1.5rem', display: 'inline-flex', alignItems: 'center', justifyContent: 'flex-start', fontFamily: 'var(--font-body)', fontWeight: '700', textDecoration: 'none' }}>
            <ArrowLeft size={18} style={{ marginRight: '0.5rem' }} /> 米国株とは？のページへ戻る
          </Link>
          <h1 className="post-title" style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.8rem, 6vw, 2.8rem)', fontWeight: '900', textAlign: 'left', marginLeft: '0', marginRight: 'auto', maxWidth: 'none', marginBottom: '0.5rem', color: 'var(--primary-dark)', lineHeight: '1.3' }}>
            米国株の重要用語キーワード15選！初心者向け完全用語解説集
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section style={{ background: 'white', padding: 'clamp(3rem, 8vw, 5rem) 0' }}>
        <div className="container" style={{ maxWidth: '850px', margin: '0 auto', textAlign: 'left' }}>
          
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '2.5rem' }}>
            米国株投資を始めようとすると、英語や専門的な金融用語が数多く出てきて戸惑ってしまう方も少なくありません。<br />
            ここでは、初心者の方が最初に押さえておくべき<strong>米国株の必須重要用語15選</strong>を、平易な日本語とイラストアイコンで分かりやすく解説しています。気になったキーワードからチェックしてみましょう。
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {keywords.map((item, index) => (
              <div 
                key={index}
                style={{ 
                  background: 'var(--bg-warm)', 
                  padding: '1.8rem', 
                  borderRadius: '20px', 
                  border: '1px solid rgba(0,0,0,0.06)',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.02)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '0.6rem' }}>
                  <div style={{ background: 'white', padding: '0.6rem', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {item.icon}
                  </div>
                  <div>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block', fontWeight: '600' }}>
                      {item.kana}
                    </span>
                    <h2 style={{ fontSize: '1.25rem', fontWeight: '900', color: 'var(--primary-dark)', margin: 0, fontFamily: 'var(--font-heading)' }}>
                      {item.keyword}
                    </h2>
                  </div>
                </div>

                <div style={{ background: 'white', padding: '1rem 1.2rem', borderRadius: '12px', marginBottom: '1rem', borderLeft: '4px solid var(--primary)' }}>
                  <p style={{ margin: 0, fontWeight: '700', fontSize: '0.95rem', color: 'var(--primary-dark)', lineHeight: '1.6' }}>
                    💡 概要: {item.summary}
                  </p>
                </div>

                <p style={{ margin: 0, fontSize: '0.95rem', lineHeight: '1.8', color: 'var(--text-main)', fontFamily: 'var(--font-body)' }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* ナレッジナビゲーション */}
          <div style={{ marginTop: '3.5rem', background: 'var(--bg-warm)', padding: '2rem', borderRadius: '20px', textAlign: 'center', border: '1px solid rgba(176,58,46,0.12)' }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.8rem' }}>
              さらに詳しく体系的に学びたい方へ
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: '1.7' }}>
              用語だけでなく、実際の投資の始め方や新NISA・税金対策を体系的に学べるガイドページをご用意しています。
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Link href="/knowledge" className="btn btn-outline" style={{ borderRadius: '30px', fontSize: '0.9rem' }}>
                米国株とは？総合ガイド
              </Link>
              <Link href="/knowledge/tokutei-koza" className="btn btn-outline" style={{ borderRadius: '30px', fontSize: '0.9rem' }}>
                特定口座の選び方
              </Link>
              <Link href="/knowledge/nisa" className="btn btn-outline" style={{ borderRadius: '30px', fontSize: '0.9rem' }}>
                新NISA活用法
              </Link>
              <Link href="/seminar" className="btn btn-primary" style={{ borderRadius: '30px', fontSize: '0.9rem' }}>
                初心者セミナーを見る
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section style={{ background: 'var(--bg-warm)', color: 'var(--text-main)', position: 'relative', overflow: 'hidden', textAlign: 'center', padding: 'clamp(3rem, 8vw, 5rem) 0' }}>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '700px', margin: '0 auto' }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.4rem, 4vw, 2.2rem)', fontWeight: '900', lineHeight: '1.5', marginBottom: '1.5rem', color: 'var(--text-main)' }}>
              用語や投資の疑問を<br />直接解決してみませんか？
            </h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(0.95rem, 2.5vw, 1.1rem)', lineHeight: '1.8', color: 'var(--text-muted)', marginBottom: '2.5rem' }}>
              東京米国株クラブでは、定員4名の少人数カフェスタイルで、質問しながら学べる初心者セミナーを定期開催しています。
            </p>

            <div className="glass-card" style={{ background: 'var(--bg-white)', borderRadius: '24px', padding: '2rem 1.5rem', border: '1px solid var(--glass-border)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Link href="/seminar" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '1rem 2.5rem', borderRadius: '30px', fontWeight: '800', fontSize: '1.05rem', textDecoration: 'none' }}>
                初心者セミナーの日程を見る <ArrowRight size={18} style={{ marginLeft: '0.5rem' }} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
