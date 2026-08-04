import { Metadata } from "next";
import Link from "next/link";
import StaticBlogPost from "@/components/StaticBlogPost";

export const metadata: Metadata = {
  title: "米国株の税金の仕組みを初心者向けに徹底解説｜いくらかかる？ | 東京米国株クラブ",
  description:
    "米国株投資でかかる税金の全体像を初心者向けに分かりやすく解説。配当金と値上がり益（譲渡益）の税率、国内約20%と米国10%の二重課税、確定申告や新NISAでの税金対策まで網羅。",
  alternates: {
    canonical: "https://www.tokyo-us-stock.com/blog/us-stock-tax-guide",
  },
  openGraph: {
    title: "米国株の税金の仕組みを初心者向けに徹底解説｜いくらかかる？",
    description:
      "米国株投資でかかる税金の全体像を初心者向けに分かりやすく解説。配当金と値上がり益の税率、二重課税、確定申告や新NISAでの税金対策まで網羅。",
    url: "https://www.tokyo-us-stock.com/blog/us-stock-tax-guide",
    type: "article",
    publishedTime: "2026-08-04",
    authors: ["とびー"],
    images: ["https://www.tokyo-us-stock.com/ogp.png"],
  },
};

export default function UsStockTaxGuidePage() {
  return (
    <StaticBlogPost
      title="米国株の税金の仕組みを初心者向けに徹底解説｜いくらかかる？"
      date="2026-08-04"
      summary="米国株投資でかかる税金の全体像を初心者向けに分かりやすく解説。配当金と値上がり益（譲渡益）の税率、国内約20%と米国10%の二重課税、確定申告や新NISAでの税金対策まで網羅。"
      slug="us-stock-tax-guide"
      knowledgeLink="/knowledge/tax"
      knowledgeTitle="米国株の税金ナレッジ"
      knowledgeDesc="米国株の税率や控除手続きについて図解付きで分かりやすくまとめています。"
    >
      <div className="article-body-content">
        <p>
          「米国株（アメリカ株）投資に興味はあるけれど、税金や確定申告の仕組みが難しそう…」「アメリカの税金と日本の税金両方が引かれるの？」と不安を感じている投資初心者の方は非常に多いです。
        </p>
        <p>
          結論から言うと、<strong>基本ルールさえ理解すれば米国株の税金は決して難しくありません</strong>。特定口座（源泉徴収あり）や新NISA（非課税制度）を活用すれば、個人で面倒な確定申告をすることなく手軽に運用を完結させることも可能です。
        </p>
        <p>
          本記事では、米国株投資で発生する2種類の税金（譲渡益・配当金）の基礎知識から、米国10%＋日本20.315%の二重課税の仕組み、税金負担を減らす具体策までを詳しく徹底解説します。
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: "900", color: "var(--primary-dark)", borderBottom: "2px solid var(--primary-light)", paddingBottom: "0.5rem", marginTop: "2.5rem", marginBottom: "1.2rem" }}>
          米国株投資で発生する2つの利益と税金
        </h2>
        <p>
          米国株投資で得られる利益は大きく分けて「<strong>譲渡益（キャピタルゲイン＝値上がり益）</strong>」と「<strong>配当金（インカムゲイン＝現金還元）</strong>」の2種類が存在し、それぞれ課税ルールが異なります。
        </p>

        <h3 style={{ fontSize: "1.2rem", fontWeight: "800", color: "var(--primary)", marginTop: "1.8rem", marginBottom: "0.8rem" }}>
          ① 譲渡益（株を売却して得た利益）にかかる税金
        </h3>
        <p>
          米国株を買った時の価格よりも高い価格で売却した際に生じる利益には、日本の税法に基づき<strong>一律 20.315%（所得税15.315%＋復興特別所得税＋住民税5%）</strong>の申告分離課税が適用されます。
        </p>
        <p>
          ※重要：売却益（譲渡益）に関しては、米国現地での課税は一切ありません。日本国内の税金（約20%）のみが課されます。
        </p>

        <h3 style={{ fontSize: "1.2rem", fontWeight: "800", color: "var(--primary)", marginTop: "1.8rem", marginBottom: "0.8rem" }}>
          ② 配当金（企業から受け取る分配金）にかかる税金
        </h3>
        <p>
          米国企業から四半期（年4回）ごとに配当金を受け取る場合、<strong>米国現地で10%が源泉徴収され、その残りの金額に対して日本国内で20.315%が課税</strong>されます。このように日米双方で税金が引かれる現象を「二重課税」と呼びます。
        </p>

        <div style={{ background: "var(--bg-warm)", padding: "1.5rem", borderRadius: "16px", margin: "1.5rem 0", border: "1px solid rgba(0,0,0,0.06)" }}>
          <p style={{ fontWeight: "bold", margin: "0 0 0.5rem 0", color: "var(--primary-dark)" }}>【配当金100ドルの課税計算シミュレーション】</p>
          <ol style={{ margin: 0, paddingLeft: "1.2rem", lineHeight: "1.8" }}>
            <li>米国現地で10%（10ドル）が差し引かれます → 残り 90ドル</li>
            <li>残った90ドルに対して日本の20.315%（約18.28ドル）が差し引かれます → 最終受取 71.72ドル</li>
          </ol>
          <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", margin: "0.5rem 0 0 0" }}>
            ※税金合計で約28.28%が差し引かれ、手元に残る手取り額は約71.7%となります。
          </p>
        </div>

        <h2 style={{ fontSize: "1.5rem", fontWeight: "900", color: "var(--primary-dark)", borderBottom: "2px solid var(--primary-light)", paddingBottom: "0.5rem", marginTop: "2.5rem", marginBottom: "1.2rem" }}>
          米国株の税金・確定申告を劇的に楽にする3つの対策
        </h2>

        <h3 style={{ fontSize: "1.2rem", fontWeight: "800", color: "var(--primary)", marginTop: "1.8rem", marginBottom: "0.8rem" }}>
          対策1: 「特定口座（源泉徴収あり）」を開設する
        </h3>
        <p>
          証券会社で口座を開設する際に「特定口座（源泉徴収あり）」を選択すれば、利益が出るたびに証券会社が税金を自動で源泉徴収して代わりに納付してくれます。個人で確定申告をする手間が完全に不要になります。詳細は<Link href="/blog/us-stock-tokutei-koza-guide" style={{ color: "var(--primary)", fontWeight: "bold" }}>特定口座と一般口座の違い解説記事</Link>をご覧ください。
        </p>

        <h3 style={{ fontSize: "1.2rem", fontWeight: "800", color: "var(--primary)", marginTop: "1.8rem", marginBottom: "0.8rem" }}>
          対策2: 「新NISA」を活用して日本の税金をゼロにする
        </h3>
        <p>
          新NISA口座（つみたて投資枠・成長投資枠）で米国株やS&P500投信を購入すれば、日本の税金（20.315%）は全額非課税になります。詳細は<Link href="/blog/nisa-us-stock-tax-free" style={{ color: "var(--primary)", fontWeight: "bold" }}>新NISAで米国株を買う場合の非課税解説記事</Link>で詳しくまとめています。
        </p>

        <h3 style={{ fontSize: "1.2rem", fontWeight: "800", color: "var(--primary)", marginTop: "1.8rem", marginBottom: "0.8rem" }}>
          対策3: 「外国税額控除」で米国の10%分を取り戻す
        </h3>
        <p>
          特定口座で配当金を受け取っている場合、確定申告で「外国税額控除」を申請すれば、米国で差し引かれた10%分を取り戻すことができます。申請手順や注意点は<Link href="/blog/us-stock-gaikoku-zei-kojo" style={{ color: "var(--primary)", fontWeight: "bold" }}>外国税額控除のやり方ガイド</Link>にて解説しています。
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: "900", color: "var(--primary-dark)", borderBottom: "2px solid var(--primary-light)", paddingBottom: "0.5rem", marginTop: "2.5rem", marginBottom: "1.2rem" }}>
          確定申告が必要か迷った場合の判定
        </h2>
        <p>
          「自分は確定申告をする必要があるのか？」と悩んだ方は、<Link href="/blog/us-stock-kakutei-shinkoku" style={{ color: "var(--primary)", fontWeight: "bold" }}>米国株の確定申告判定ガイド</Link>で条件をチェックしてみてください。また、当サイトの<Link href="/knowledge/tax" style={{ color: "var(--primary)", fontWeight: "bold" }}>米国株の税金ナレッジページ</Link>でも基礎知識を整理しています。
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: "900", color: "var(--primary-dark)", borderBottom: "2px solid var(--primary-light)", paddingBottom: "0.5rem", marginTop: "2.5rem", marginBottom: "1.2rem" }}>
          米国株税金シリーズ（トピッククラスター全記事一覧）
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem", margin: "1rem 0" }}>
          <Link href="/blog/us-stock-tokutei-koza-guide" style={{ color: "var(--primary)", fontWeight: "bold", textDecoration: "underline" }}>
            ▶ 米国株の特定口座とは？一般口座との違いとおすすめ選び方
          </Link>
          <Link href="/blog/us-stock-kakutei-shinkoku" style={{ color: "var(--primary)", fontWeight: "bold", textDecoration: "underline" }}>
            ▶ 米国株の確定申告は必要？不要？条件と手順を解説
          </Link>
          <Link href="/blog/us-stock-gaikoku-zei-kojo" style={{ color: "var(--primary)", fontWeight: "bold", textDecoration: "underline" }}>
            ▶ 米国株の外国税額控除とは？確定申告で税金を取り戻す方法
          </Link>
          <Link href="/blog/nisa-us-stock-tax-free" style={{ color: "var(--primary)", fontWeight: "bold", textDecoration: "underline" }}>
            ▶ 新NISAで米国株を買えば税金はかからない？非課税の仕組み
          </Link>
        </div>

        <h2 style={{ fontSize: "1.5rem", fontWeight: "900", color: "var(--primary-dark)", borderBottom: "2px solid var(--primary-light)", paddingBottom: "0.5rem", marginTop: "2.5rem", marginBottom: "1.2rem" }}>
          米国株の税金に関してよくある質問（FAQ）
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem", margin: "1.5rem 0" }}>
          <div style={{ background: "#fdfefe", border: "1px solid #e5e7e9", borderRadius: "14px", padding: "1.2rem 1.4rem" }}>
            <h3 style={{ fontSize: "1.05rem", fontWeight: "800", color: "var(--primary-dark)", margin: "0 0 0.5rem 0" }}>
              Q. 為替差益（為替による利益）にも税金はかかりますか？
            </h3>
            <p style={{ fontSize: "0.95rem", lineHeight: "1.8", margin: 0, color: "var(--text-main)" }}>
              米ドル建てで取引する場合、株の売買損益の中に為替変動分（円安・円高の影響）が最初から含まれて円換算で利益計算されるため、売買益の一部として約20.315%の税金が引かれます。なお、株式を売却して得た米ドルのまま口座に保有し続け、後日円安が進んだタイミングで円に戻した場合は「雑所得」として総合課税の対象になるケースがあります。
            </p>
          </div>
          <div style={{ background: "#fdfefe", border: "1px solid #e5e7e9", borderRadius: "14px", padding: "1.2rem 1.4rem" }}>
            <h3 style={{ fontSize: "1.05rem", fontWeight: "800", color: "var(--primary-dark)", margin: "0 0 0.5rem 0" }}>
              Q. 日本株の赤字（損失）と米国株の利益を相殺することはできますか？
            </h3>
            <p style={{ fontSize: "0.95rem", lineHeight: "1.8", margin: 0, color: "var(--text-main)" }}>
              はい、可能です！日本株と米国株は同じ「上場株式等のグループ」に分類されているため、確定申告（損益通算）を行うことで、日本株で出た赤字と米国株の黒字（または配当金）を相殺して納め過ぎた税金を還付させることができます。
            </p>
          </div>
        </div>

        <h2 style={{ fontSize: "1.5rem", fontWeight: "900", color: "var(--primary-dark)", borderBottom: "2px solid var(--primary-light)", paddingBottom: "0.5rem", marginTop: "2.5rem", marginBottom: "1.2rem" }}>
          まとめ
        </h2>
        <p>
          米国株の税金は、「売買益は日本20%」「配当金は米国10%+日本20%」「基本は特定口座（源泉徴収あり）か新NISA」という構造さえ理解できれば何も恐れることはありません。
        </p>
        <p>
          適切な口座選びと税金対策を行って、世界最大の米国市場で安心して資産を育てていきましょう。より詳しい疑問解消は、当クラブの<Link href="/seminar" style={{ color: "var(--primary)", fontWeight: "bold" }}>初心者向け米国株・NISAセミナー</Link>でもお気軽にご質問ください！
        </p>
      </div>
    </StaticBlogPost>
  );
}
