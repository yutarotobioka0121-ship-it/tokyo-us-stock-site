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
          「米国株投資に興味はあるけれど、税金や確定申告が難しそう…」「アメリカの税金と日本の税金両方取られるの？」と不安を感じている方も多いのではないでしょうか。
        </p>
        <p>
          結論から言うと、<strong>基本ルールさえ押さえれば米国株の税金は決して難しくありません</strong>。特定口座（源泉徴収あり）や新NISAを活用すれば、面倒な確定申告を一切せずに税金処理を完了させることも可能です。
        </p>
        <p>
          本記事では、米国株投資でかかる税金（譲渡益・配当金）の基礎知識から、米国10%＋日本20.315%の二重課税の仕組み、税金を抑える具体策まで徹底解説します。
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: "900", color: "var(--primary-dark)", borderBottom: "2px solid var(--primary-light)", paddingBottom: "0.5rem", marginTop: "2.5rem", marginBottom: "1.2rem" }}>
          米国株投資でかかる2つの税金
        </h2>
        <p>
          米国株投資で得られる利益は大きく分けて「<strong>譲渡益（値上がり益）</strong>」と「<strong>配当金（インカムゲイン）</strong>」の2種類があり、それぞれ税金の扱いが異なります。
        </p>

        <h3 style={{ fontSize: "1.2rem", fontWeight: "800", color: "var(--primary)", marginTop: "1.8rem", marginBottom: "0.8rem" }}>
          ① 譲渡益（株を売って得た利益）にかかる税金
        </h3>
        <p>
          米国株を買った値段より高く売却して得た利益には、日本の税法に基づき<strong>一律 20.315%（所得税15.315%＋住民税5%）</strong>の税金がかかります。
        </p>
        <p>
          ※売却益に関しては、米国現地での課税はありません。日本国内の税金（約20%）のみが課されます。
        </p>

        <h3 style={{ fontSize: "1.2rem", fontWeight: "800", color: "var(--primary)", marginTop: "1.8rem", marginBottom: "0.8rem" }}>
          ② 配当金（受け取った分配金）にかかる税金
        </h3>
        <p>
          米国企業から配当金を受け取る場合、<strong>米国現地で10%が源泉徴収され、差し引かれた後の金額に対して日本国内で20.315%が課税</strong>されます（いわゆる二重課税）。
        </p>

        <div style={{ background: "var(--bg-warm)", padding: "1.5rem", borderRadius: "16px", margin: "1.5rem 0", border: "1px solid rgba(0,0,0,0.06)" }}>
          <p style={{ fontWeight: "bold", margin: "0 0 0.5rem 0", color: "var(--primary-dark)" }}>【配当金の課税イメージ例：100ドルの配当金の場合】</p>
          <ol style={{ margin: 0, paddingLeft: "1.2rem", lineHeight: "1.8" }}>
            <li>米国現地で10%（10ドル）差し引かれ → 残り90ドル</li>
            <li>90ドルに対して日本の20.315%（約18.28ドル）差し引かれ → 最終手取り約71.72ドル</li>
          </ol>
          <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", margin: "0.5rem 0 0 0" }}>
            ※実際の税率は約28.28%となり、手取り金額は約71.7%となります。
          </p>
        </div>

        <h2 style={{ fontSize: "1.5rem", fontWeight: "900", color: "var(--primary-dark)", borderBottom: "2px solid var(--primary-light)", paddingBottom: "0.5rem", marginTop: "2.5rem", marginBottom: "1.2rem" }}>
          米国株の税金・確定申告を簡単にする3つの解決策
        </h2>

        <h3 style={{ fontSize: "1.2rem", fontWeight: "800", color: "var(--primary)", marginTop: "1.8rem", marginBottom: "0.8rem" }}>
          1. 「特定口座（源泉徴収あり）」を開設する
        </h3>
        <p>
          証券口座を開設する際に「特定口座（源泉徴収あり）」を選べば、売買益や配当金が出るたびに証券会社が税金を自動計算して天引き・納付してくれます。これにより、個人の確定申告は原則として不要になります。詳しくは<Link href="/blog/us-stock-tokutei-koza-guide" style={{ color: "var(--primary)", fontWeight: "bold" }}>特定口座と一般口座の違い解説記事</Link>をご覧ください。
        </p>

        <h3 style={{ fontSize: "1.2rem", fontWeight: "800", color: "var(--primary)", marginTop: "1.8rem", marginBottom: "0.8rem" }}>
          2. 「新NISA」を活用して日本の税金をゼロにする
        </h3>
        <p>
          新NISA口座で米国株やS&P500連動ETFを購入すれば、日本の税金（20.315%）は全額非課税になります。詳細は<Link href="/blog/nisa-us-stock-tax-free" style={{ color: "var(--primary)", fontWeight: "bold" }}>新NISAで米国株を買う場合の税金解説記事</Link>でまとめています。
        </p>

        <h3 style={{ fontSize: "1.2rem", fontWeight: "800", color: "var(--primary)", marginTop: "1.8rem", marginBottom: "0.8rem" }}>
          3. 「外国税額控除」で米国の10%分を取り戻す
        </h3>
        <p>
          特定口座（源泉徴収あり）で配当金を受け取っている場合でも、確定申告で「外国税額控除」を申請すれば、米国で差し引かれた10%分を取り戻すことができます。申請手順は<Link href="/blog/us-stock-gaikoku-zei-kojo" style={{ color: "var(--primary)", fontWeight: "bold" }}>外国税額控除のやり方ガイド</Link>にて解説しています。
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: "900", color: "var(--primary-dark)", borderBottom: "2px solid var(--primary-light)", paddingBottom: "0.5rem", marginTop: "2.5rem", marginBottom: "1.2rem" }}>
          米国株の税金関連記事（シリーズ一覧）
        </h2>
        <p>
          当ブログでは米国株の税金についてテーマ別に詳しく解説しています。気になる項目をチェックしてみてください。
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem", margin: "1.5rem 0" }}>
          <Link href="/blog/us-stock-kakutei-shinkoku" style={{ background: "var(--bg-warm)", padding: "1rem 1.2rem", borderRadius: "12px", textDecoration: "none", color: "var(--primary-dark)", fontWeight: "bold", border: "1px solid rgba(0,0,0,0.06)" }}>
            ▶ 米国株の確定申告は必要？不要？条件と手順を解説
          </Link>
          <Link href="/blog/us-stock-gaikoku-zei-kojo" style={{ background: "var(--bg-warm)", padding: "1rem 1.2rem", borderRadius: "12px", textDecoration: "none", color: "var(--primary-dark)", fontWeight: "bold", border: "1px solid rgba(0,0,0,0.06)" }}>
            ▶ 米国株の外国税額控除とは？確定申告で税金を取り戻す方法
          </Link>
          <Link href="/blog/nisa-us-stock-tax-free" style={{ background: "var(--bg-warm)", padding: "1rem 1.2rem", borderRadius: "12px", textDecoration: "none", color: "var(--primary-dark)", fontWeight: "bold", border: "1px solid rgba(0,0,0,0.06)" }}>
            ▶ 新NISAで米国株を買えば税金はかからない？非課税の仕組み
          </Link>
          <Link href="/blog/us-stock-tokutei-koza-guide" style={{ background: "var(--bg-warm)", padding: "1rem 1.2rem", borderRadius: "12px", textDecoration: "none", color: "var(--primary-dark)", fontWeight: "bold", border: "1px solid rgba(0,0,0,0.06)" }}>
            ▶ 米国株の特定口座とは？一般口座との違いとおすすめ選択
          </Link>
        </div>

        <h2 style={{ fontSize: "1.5rem", fontWeight: "900", color: "var(--primary-dark)", borderBottom: "2px solid var(--primary-light)", paddingBottom: "0.5rem", marginTop: "2.5rem", marginBottom: "1.2rem" }}>
          まとめ
        </h2>
        <p>
          米国株の税金は一見複雑に見えますが、「売買益は日本20%」「配当金は米国10%+日本20%」「基本は特定口座（源泉徴収あり）か新NISA」という全体像を理解すれば怖くありません。
        </p>
        <p>
          税金面も賢くカバーしながら、世界最大の米国市場で確実な資産形成を進めましょう！
        </p>
      </div>
    </StaticBlogPost>
  );
}
