import { Metadata } from "next";
import Link from "next/link";
import StaticBlogPost from "@/components/StaticBlogPost";

export const metadata: Metadata = {
  title: "米国株のスクリーニングとは？初心者向けに銘柄の絞り込み方を徹底解説 | 東京米国株クラブ",
  description:
    "米国株のスクリーニング（銘柄スクリーニング）の基本と、初心者でも使えるSBI・楽天証券の無料ツールを使った具体的な絞り込み方をわかりやすく解説します。",
  alternates: {
    canonical: "https://www.tokyo-us-stock.com/blog/us-stock-screening-guide",
  },
  openGraph: {
    title: "米国株のスクリーニングとは？初心者向けに銘柄の絞り込み方を徹底解説",
    description:
      "米国株のスクリーニング（銘柄スクリーニング）の基本と、初心者でも使えるSBI・楽天証券の無料ツールを使った具体的な絞り込み方をわかりやすく解説します。",
    url: "https://www.tokyo-us-stock.com/blog/us-stock-screening-guide",
    type: "article",
    publishedTime: "2026-08-04",
    authors: ["とびー"],
    images: ["https://www.tokyo-us-stock.com/ogp.png"],
  },
};

export default function UsStockScreeningGuidePage() {
  return (
    <StaticBlogPost
      title="米国株のスクリーニングとは？初心者向けに銘柄の絞り込み方を徹底解説"
      date="2026-08-04"
      summary="米国株のスクリーニング（銘柄スクリーニング）の基本と、初心者でも使えるSBI・楽天証券の無料ツールを使った具体的な絞り込み方をわかりやすく解説します。"
      slug="us-stock-screening-guide"
      knowledgeLink="/knowledge/stock-investment"
      knowledgeTitle="株式投資の基本"
      knowledgeDesc="株式投資の基礎知識やリスク管理法、長期投資で失敗しない考え方をわかりやすく解説しています。"
    >
      <div className="article-body-content">
        <p>
          米国株（アメリカ株）投資を始めようとしたとき、最初に直面する壁が「<strong>どの銘柄を選べばいいかわからない</strong>」という悩みです。米国市場にはAppleやMicrosoft、NVIDIAなどの有名企業をはじめ、約6,000社以上の膨大な上場企業が存在します。
        </p>
        <p>
          そこでおすすめなのが「<strong>米国株 スクリーニング</strong>」という手法です。スクリーニング（銘柄スクリーニング）を活用すれば、自分の投資スタイルや希望する条件（売上成長率、配当利回り、株価指標など）に合った企業を瞬時に絞り込むことができます。
        </p>
        <p>
          本記事では、銘柄スクリーニングの基本的な考え方から、初心者でも無料で使える証券会社のツール活用法、最初に設定すべきおすすめ条件5選までをわかりやすく解説します。
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: "900", color: "var(--primary-dark)", borderBottom: "2px solid var(--primary-light)", paddingBottom: "0.5rem", marginTop: "2.5rem", marginBottom: "1.2rem" }}>
          米国株スクリーニングとは何か？
        </h2>
        <p>
          <strong>米国株 スクリーニング</strong>（銘柄スクリーニング）とは、膨大な数の上場企業の中から、特定の条件（業績、株価指標、配当金、時価総額など）を指定して条件に合致する銘柄を自動的にフィルター抽出する手法のことです。
        </p>
        <p>
          例えば、「配当利回りが3%以上で、過去5年間の売上が毎年伸びている企業」や「S&P500に含まれる大企業のうち、株価が割安な銘柄」といった条件を入力するだけで、数千社の中から対象となる数十社〜数社を数秒で抽出できます。
        </p>

        <h3 style={{ fontSize: "1.2rem", fontWeight: "800", color: "var(--primary)", marginTop: "1.8rem", marginBottom: "0.8rem" }}>
          なぜ初心者にスクリーニングが必要なのか？
        </h3>
        <p>
          初心者がやりがちな失敗として、「ニュースで話題になっているから」「SNSでおすすめと聞いたから」という理由だけで感で売買してしまうことが挙げられます。しかし、理由のない売買は短期的な株価変動に振り回されやすく、失敗につながります。
        </p>
        <p>
          スクリーニングを活用することで、感情に左右されず、根拠を持った<strong>米国株 銘柄選び</strong>が可能になります。また、無数にある企業から投資候補を絞り込む時間を大幅に短縮できるため、効率的な個別株リサーチには欠かせないプロセスです。
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: "900", color: "var(--primary-dark)", borderBottom: "2px solid var(--primary-light)", paddingBottom: "0.5rem", marginTop: "2.5rem", marginBottom: "1.2rem" }}>
          無料で使える米国株スクリーニングツール3選
        </h2>
        <p>
          米国株のスクリーニングは高額な有料ソフトを買う必要はありません。大手ネット証券の提供する無料ツールやWebサイトで高精度な銘柄スクリーニングが可能です。
        </p>

        <h3 style={{ fontSize: "1.2rem", fontWeight: "800", color: "var(--primary)", marginTop: "1.8rem", marginBottom: "0.8rem" }}>
          ① SBI証券の米国株スクリーナー
        </h3>
        <p>
          SBI証券の「米国株スクリーナー」は、スマホアプリ（米国株アプリ）やPCウェブサイトから無料で利用できます。日本語対応でインターフェースがわかりやすく、「配当利回り」「PER（株価収益率）」「売上高変化率」などの一般的な指標を直感的に組み合わせて検索できます。
        </p>

        <h3 style={{ fontSize: "1.2rem", fontWeight: "800", color: "var(--primary)", marginTop: "1.8rem", marginBottom: "0.8rem" }}>
          ② 楽天証券のスーパースクリーナー
        </h3>
        <p>
          楽天証券の「スーパースクリーナー」も非常に強力なツールです。「大型成長株」「連続増配株」といった使いやすいプリセット条件が標準で用意されているため、条件入力に慣れていない初心者でもワンタップで条件検索を実行できます。
        </p>

        <h3 style={{ fontSize: "1.2rem", fontWeight: "800", color: "var(--primary)", marginTop: "1.8rem", marginBottom: "0.8rem" }}>
          ③ Finviz（フィンプラグ）
        </h3>
        <p>
          本格的なリサーチを行いたい投資家に世界中で愛用されているのが、海外サイトの「Finviz（Finviz.com）」です。英語サイトではありますが、Google翻訳等を使えば問題なく操作できます。PBR、ROE、配当性向、RSI（テクニカル指標）など非常に細かい指標を無料で高度に掛け合わせることが可能です。
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: "900", color: "var(--primary-dark)", borderBottom: "2px solid var(--primary-light)", paddingBottom: "0.5rem", marginTop: "2.5rem", marginBottom: "1.2rem" }}>
          初心者が設定すべきスクリーニング条件5つ
        </h2>
        <p>
          スクリーナーを開いても、どんな条件を入力すればよいか迷う方も多いでしょう。初心者の方が堅実な<strong>長期投資</strong>に適した企業を探すための基本的なおすすめ設定条件を5つ紹介します。
        </p>

        <div style={{ background: "var(--bg-warm)", padding: "1.5rem", borderRadius: "16px", margin: "1.5rem 0", border: "1px solid rgba(0,0,0,0.06)" }}>
          <ol style={{ paddingLeft: "1.2rem", margin: 0, lineHeight: "2" }}>
            <li><strong>時価総額：100億ドル（約1.5兆円）以上</strong><br /><span style={{ color: "var(--text-muted)", fontSize: "0.95rem" }}>→ 業績や株価が安定している大型企業に絞り込みます。</span></li>
            <li><strong>売上高成長率（過去3年・5年）：プラス成長（年率5%以上）</strong><br /><span style={{ color: "var(--text-muted)", fontSize: "0.95rem" }}>→ 時代の波に乗って事業拡大を続けている企業かをチェックします。</span></li>
            <li><strong>PER（株価収益率）：15倍〜30倍程度</strong><br /><span style={{ color: "var(--text-muted)", fontSize: "0.95rem" }}>→ 株価があまりにも高値放置されていないか（過度なバブルでないか）を確認します。</span></li>
            <li><strong>連続増配年数：10年以上（配当狙いの場合）</strong><br /><span style={{ color: "var(--text-muted)", fontSize: "0.95rem" }}>→ リーマンショックやコロナショックを乗り越えて配当を増やし続けた強固な経営力を測ります。</span></li>
            <li><strong>対象指数：S&P500構成銘柄</strong><br /><span style={{ color: "var(--text-muted)", fontSize: "0.95rem" }}>→ 厳格な採用基準をクリアした米国を代表する500社の中から探します。</span></li>
          </ol>
        </div>

        <h2 style={{ fontSize: "1.5rem", fontWeight: "900", color: "var(--primary-dark)", borderBottom: "2px solid var(--primary-light)", paddingBottom: "0.5rem", marginTop: "2.5rem", marginBottom: "1.2rem" }}>
          スクリーニング結果を見てどう判断するか
        </h2>
        <p>
          ここで一つ非常に重要な注意点があります。<strong>「スクリーニングで1位に出たからといって即買いしてはいけない」</strong>ということです。
        </p>
        <p>
          数値条件だけで抽出された銘柄は、あくまで「一次審査を通過した候補リスト」に過ぎません。例えば配当利回りが10%と表示されている企業は、業績悪化によって株価が急落した結果として一時的に利回りが跳ね上がっているだけの危険なトラップ（配当トラップ）である可能性もあります。
        </p>

        <h3 style={{ fontSize: "1.2rem", fontWeight: "800", color: "var(--primary)", marginTop: "1.8rem", marginBottom: "0.8rem" }}>
          必ず確認すべき2つのステップ
        </h3>
        <ul>
          <li><strong>企業の事業内容（何で稼いでいるか）を調べる</strong>：自分が理解できないビジネスモデルの企業には投資しないのが堅実な鉄則です。</li>
          <li><strong>過去決算のトレンドを確認する</strong>：一回限りの特別利益で数値が良く見えているだけではないか、決算書や IR ニュースを確認します。</li>
        </ul>
        <p>
          米国株投資の基本的な考え方や基礎知識については、当サイトの<Link href="/knowledge/stock-investment" style={{ color: "var(--primary)", fontWeight: "bold" }}>米国株投資の基礎解説ページ</Link>でも詳しく解説していますので、合わせて参考にしてください。
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: "900", color: "var(--primary-dark)", borderBottom: "2px solid var(--primary-light)", paddingBottom: "0.5rem", marginTop: "2.5rem", marginBottom: "1.2rem" }}>
          東京米国株クラブでのスクリーニング活用法
        </h2>
        <p>
          当クラブ「東京米国株クラブ」が主催する少人数制セミナーでは、投資初心者の方が「S&P500のインデックス積立投資」から一歩進んで、「自分で自信を持って優良企業を見つけられるようになる」ためのスクリーニング実践ワークを行っています。
        </p>
        <p>
          「ツールを開いてもどの指標を見ればいいか分からない」「自分の選んだ銘柄に自信が持てない」という方のために、実際のネット証券画面を操作しながら、講師が横について丁寧にアドバイスしています。
        </p>
        <p>
          スクリーニングの実践や疑問解消については、ぜひ当クラブの<Link href="/seminar" style={{ color: "var(--primary)", fontWeight: "bold" }}>初心者向け米国株・NISAセミナー</Link>で気軽に体験してみてください。
        </p>
        <p>
          また、新NISAのつみたて投資枠や成長投資枠をどう組み合わせて効率よく資産形成を進めるかについては、こちらの<Link href="/blog/nisa-series-01" style={{ color: "var(--primary)", fontWeight: "bold" }}>新NISAシリーズ解説記事</Link>でも詳しくご紹介しています。
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: "900", color: "var(--primary-dark)", borderBottom: "2px solid var(--primary-light)", paddingBottom: "0.5rem", marginTop: "2.5rem", marginBottom: "1.2rem" }}>
          まとめ
        </h2>
        <p>
          <strong>米国株 スクリーニング</strong>は、約6,000社の中から自分の希望に合う魅力的な企業を素早く抽出し、科学的で根拠のある<strong>米国株 銘柄選び</strong>を行うための強力なパートナーです。
        </p>
        <p>
          最初は「時価総額」「S&P500」「売上成長率」などのシンプルな基本条件から始めて、抽出された企業の事業内容をじっくり調べる習慣をつけましょう。堅実な分析と適切なリスク管理を行うことが、失敗しない<strong>長期投資</strong>を成功させる第一歩です。
        </p>
      </div>
    </StaticBlogPost>
  );
}
