import { Metadata } from "next";
import Link from "next/link";
import StaticBlogPost from "@/components/StaticBlogPost";

export const metadata: Metadata = {
  title: "米国株の外国税額控除とは？確定申告で取り戻せる税金を解説 | 東京米国株クラブ",
  description:
    "米国株の配当金にかかる二重課税（米国10%+日本20%）を解消する「外国税額控除」の仕組み、控除額の計算方法、確定申告での具体的な申請手順までわかりやすく徹底解説します。",
  alternates: {
    canonical: "https://www.tokyo-us-stock.com/blog/us-stock-gaikoku-zei-kojo",
  },
  openGraph: {
    title: "米国株の外国税額控除とは？確定申告で取り戻せる税金を解説",
    description:
      "米国株の配当金にかかる二重課税（米国10%+日本20%）を解消する「外国税額控除」の仕組み、控除額の計算方法、確定申告での具体的な申請手順までわかりやすく徹底解説します。",
    url: "https://www.tokyo-us-stock.com/blog/us-stock-gaikoku-zei-kojo",
    type: "article",
    publishedTime: "2026-08-04",
    authors: ["とびー"],
    images: ["https://www.tokyo-us-stock.com/ogp.png"],
  },
};

export default function UsStockGaikokuZeiKojoPage() {
  return (
    <StaticBlogPost
      title="米国株の外国税額控除とは？確定申告で取り戻せる税金を解説"
      date="2026-08-04"
      summary="米国株の配当金にかかる二重課税（米国10%+日本20%）を解消する「外国税額控除」の仕組み、控除額の計算方法、確定申告での具体的な申請手順までわかりやすく徹底解説します。"
      slug="us-stock-gaikoku-zei-kojo"
      knowledgeLink="/blog/us-stock-tax-guide"
      knowledgeTitle="米国株の税金全体ガイド"
      knowledgeDesc="米国株の税金の基本ルールや特定口座、新NISAでの節税対策を解説しています。"
    >
      <div className="article-body-content">
        <p>
          米国株（アメリカ株）の配当金投資（インカムゲイン投資）を楽しんでいる方の中で、「配当金の明細を見たら思ったより税金がたくさん引かれている…」と感じたことはありませんか？
        </p>
        <p>
          実は、米国株の配当金には<strong>アメリカで10%、日本で約20.315%という二重の税金（二重課税）</strong>がかかっています。この引かれすぎた米国の税金（10%分）の一部または全部を確定申告によって取り戻す制度が「<strong>外国税額控除（がいこくぜいがくこうじょ）</strong>」です。
        </p>
        <p>
          本記事では、外国税額控除の基本的な仕組み、控除限度額の計算方法、国税庁のe-Taxを使った確定申告の申請手順、新NISAとの兼ね合いまで分かりやすく解説します。
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: "900", color: "var(--primary-dark)", borderBottom: "2px solid var(--primary-light)", paddingBottom: "0.5rem", marginTop: "2.5rem", marginBottom: "1.2rem" }}>
          なぜ外国税額控除が必要なのか？（二重課税の仕組み）
        </h2>
        <p>
          日本国内に住んでいる個人が米国株の配当金を受け取ると、以下の順番で2回税金が徴収されます。
        </p>

        <ol style={{ lineHeight: "2" }}>
          <li><strong>米国現地での源泉徴収（10%）</strong>：配当金が支払われる時点で、アメリカ政府に10%が自動徴収されます。</li>
          <li><strong>日本国内での源泉徴収（20.315%）</strong>：10%引かれた残りの金額に対して、日本政府に20.315%がさらに課税されます。</li>
        </ol>

        <p>
          国際的な租税条約のルールに基づき、同じ所得（配当金）に対して2つの国から二重で課税されるのを防ぐために用意されている調整制度が「外国税額控除」です。確定申告を行うことで、米国の10%分を自分の所得税や住民税から差し引いて還付を受けることができます。
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: "900", color: "var(--primary-dark)", borderBottom: "2px solid var(--primary-light)", paddingBottom: "0.5rem", marginTop: "2.5rem", marginBottom: "1.2rem" }}>
          いくら戻ってくる？外国税額控除の計算方法
        </h2>
        <p>
          「アメリカで引かれた10%が全額無条件で戻ってくるのか？」というと、実はそうではありません。年間の所得金額に応じて「控除限度額」が定められています。
        </p>

        <div style={{ background: "var(--bg-warm)", padding: "1.5rem", borderRadius: "16px", margin: "1.5rem 0", border: "1px solid rgba(0,0,0,0.06)" }}>
          <p style={{ fontWeight: "bold", margin: "0 0 0.5rem 0", color: "var(--primary-dark)" }}>【所得税の外国税額控除 限度額の基本数式】</p>
          <div style={{ background: "white", padding: "1rem", borderRadius: "10px", fontWeight: "bold", textAlign: "center", color: "var(--primary)" }}>
            控除限度額 ＝ その年の所得税額 × （国外所得総額 ÷ その年の総所得金額）
          </div>
          <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", margin: "0.8rem 0 0 0", lineHeight: "1.7" }}>
            ※年収（給与所得など）が高く日本の所得税を多く納めている人ほど、米国の10%分を全額取り戻しやすくなります。逆に住宅ローン控除などで所得税がゼロになっている方の場合は、控除しきれない場合があります。
          </p>
        </div>

        <h2 style={{ fontSize: "1.5rem", fontWeight: "900", color: "var(--primary-dark)", borderBottom: "2px solid var(--primary-light)", paddingBottom: "0.5rem", marginTop: "2.5rem", marginBottom: "1.2rem" }}>
          確定申告（e-Tax）での申請手順 4ステップ
        </h2>
        <p>
          特定口座（源泉徴収あり）を使っていても、外国税額控除を受ける場合のみ確定申告が必要です。国税庁の「確定申告書等作成コーナー」での手続きは以下の通りです。
        </p>

        <ol style={{ lineHeight: "2" }}>
          <li><strong>証券会社の「年間取引報告書」をダウンロードする</strong><br /><span style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>配当等の額、国外支払日付、外貨での源泉徴収税額などの記載を確認します。</span></li>
          <li><strong>確定申告書等作成コーナーで「税額控除・その他の項目」に進む</strong></li>
          <li><strong>「外国税額控除等」を選択し、年間取引報告書の数値を入力する</strong><br /><span style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>相手国名「アメリカ」、所得の種類「配当所得」、税額を入力します。</span></li>
          <li><strong>送信して完了（指定口座に数週間〜1ヶ月で還付金が振り込まれます）</strong></li>
        </ol>

        <h2 style={{ fontSize: "1.5rem", fontWeight: "900", color: "var(--primary-dark)", borderBottom: "2px solid var(--primary-light)", paddingBottom: "0.5rem", marginTop: "2.5rem", marginBottom: "1.2rem" }}>
          注意：新NISA口座の配当金は外国税額控除の「対象外」
        </h2>
        <p>
          ここ一つ非常に重要なポイントがあります。<strong>「新NISA口座」で受け取った米国株配当金は、外国税額控除の対象外（申請不可）</strong>です。
        </p>
        <p>
          外国税額控除は「日本の税金（約20%）が課されていること」を前提として二重課税を調整する仕組みです。新NISA口座では日本の税金がそもそも全額非課税（ゼロ）になっているため、二重課税状態ではないとみなされ、米国の10%分を取り戻すことはできません。
        </p>
        <p>
          新NISAでの税金の扱いについては<Link href="/blog/nisa-us-stock-tax-free" style={{ color: "var(--primary)", fontWeight: "bold" }}>新NISA×米国株の税金非課税ガイド</Link>で詳しく解説しています。
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: "900", color: "var(--primary-dark)", borderBottom: "2px solid var(--primary-light)", paddingBottom: "0.5rem", marginTop: "2.5rem", marginBottom: "1.2rem" }}>
          まとめ
        </h2>
        <p>
          特定口座で米国高配当株やETFを運用している方は、「外国税額控除」を申請することで米国で差し引かれた10%分をしっかり取り戻すことができます。
        </p>
        <p>
          年間数千円〜数万円単位の節税になることも多いため、配当金を多く受け取っている方はぜひ確定申告での申請にチャレンジしてみてください。米国株の税金全体のルールは<Link href="/blog/us-stock-tax-guide" style={{ color: "var(--primary)", fontWeight: "bold" }}>米国株の税金全体ガイド</Link>でも学べます。
        </p>
      </div>
    </StaticBlogPost>
  );
}
