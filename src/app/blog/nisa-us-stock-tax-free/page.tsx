import { Metadata } from "next";
import Link from "next/link";
import StaticBlogPost from "@/components/StaticBlogPost";

export const metadata: Metadata = {
  title: "新NISAで米国株を買えば税金はかからない？非課税の仕組みを解説 | 東京米国株クラブ",
  description:
    "新NISA（つみたて投資枠・成長投資枠）で米国株やS&P500を買うと税金はどうなる？日本の税金約20%が非課税になる仕組み、米国現地10%の注意点、特定口座との使い分けまで分かりやすく解説。",
  alternates: {
    canonical: "https://www.tokyo-us-stock.com/blog/nisa-us-stock-tax-free",
  },
  openGraph: {
    title: "新NISAで米国株を買えば税金はかからない？非課税の仕組みを解説",
    description:
      "新NISA（つみたて投資枠・成長投資枠）で米国株やS&P500を買うと税金はどうなる？日本の税金約20%が非課税になる仕組み、米国現地10%の注意点、特定口座との使い分けまで分かりやすく解説。",
    url: "https://www.tokyo-us-stock.com/blog/nisa-us-stock-tax-free",
    type: "article",
    publishedTime: "2026-08-04",
    authors: ["とびー"],
    images: ["https://www.tokyo-us-stock.com/ogp.png"],
  },
};

export default function NisaUsStockTaxFreePage() {
  return (
    <StaticBlogPost
      title="新NISAで米国株を買えば税金はかからない？非課税の仕組みを解説"
      date="2026-08-04"
      summary="新NISA（つみたて投資枠・成長投資枠）で米国株やS&P500を買うと税金はどうなる？日本の税金約20%が非課税になる仕組み、米国現地10%の注意点、特定口座との使い分けまで分かりやすく解説。"
      slug="nisa-us-stock-tax-free"
      knowledgeLink="/knowledge/nisa"
      knowledgeTitle="NISAの基礎ガイド"
      knowledgeDesc="新NISA制度の全体像、つみたて投資枠と成長投資枠の具体的なおすすめ活用方法を解説しています。"
    >
      <div className="article-body-content">
        <p>
          2024年から大きくパワーアップした「新NISA（少額投資非課税制度）」。
        </p>
        <p>
          「新NISAで米国株（アメリカ株）やS&P500に投資すれば、税金は一切かからず完全ゼロになるの？」という疑問を持つ方は非常に多いです。
        </p>
        <p>
          結論から言うと、<strong>日本の税金（約20.315%）は完全にゼロ（非課税）になりますが、米国現地での配当金にかかる税金（10%）は例外的に発生する</strong>という注意点があります。
        </p>
        <p>
          本記事では、新NISAで米国株やS&P500連動ファンドを運用した際の非課税の仕組み、米国現地10%の注意点、投資信託と個別株の違いまで徹底解説します。
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: "900", color: "var(--primary-dark)", borderBottom: "2px solid var(--primary-light)", paddingBottom: "0.5rem", marginTop: "2.5rem", marginBottom: "1.2rem" }}>
          新NISAで米国株を買った場合の税金の仕組み
        </h2>
        <p>
          通常、課税口座（特定口座や一般口座）で株式投資を行うと、得られた売却益（譲渡益）や配当金に対して国内で20.315%の税金が課されます。
        </p>
        <p>
          新NISA口座を利用した場合、この<strong>国内の約20.315%の税金が全額ゼロ（無期限で非課税）</strong>になります。
        </p>

        <h3 style={{ fontSize: "1.2rem", fontWeight: "800", color: "var(--primary)", marginTop: "1.8rem", marginBottom: "0.8rem" }}>
          ① 売却益（値上がり益）：完全に税金ゼロ（100%非課税）
        </h3>
        <p>
          例えば、米国株やS&P500投資信託を100万円で購入し、300万円に値上がりした状態で売却した場合、通常であれば約40万円（利益200万円の20.315%）の税金が取られます。新NISA口座であれば税金は0円となり、利益200万円を丸々手元に残すことができます。
        </p>

        <h3 style={{ fontSize: "1.2rem", fontWeight: "800", color: "var(--primary)", marginTop: "1.8rem", marginBottom: "0.8rem" }}>
          ② 配当金（分配金）：米国現地税10%のみ発生
        </h3>
        <p>
          個別の米国株や米国現地ETF（VYMやHDVなど）を新NISAで保有し配当金を受け取る場合、<strong>日本の税金（20.315%）は非課税になりますが、米国現地で徴収される10%の税金はかかります</strong>。
        </p>

        <div style={{ background: "var(--bg-warm)", padding: "1.5rem", borderRadius: "16px", margin: "1.5rem 0", border: "1px solid rgba(0,0,0,0.06)" }}>
          <p style={{ fontWeight: "bold", margin: "0 0 0.5rem 0", color: "var(--primary-dark)" }}>【口座ごとの配当金にかかる税金比較】</p>
          <ul style={{ margin: 0, paddingLeft: "1.2rem", lineHeight: "1.8" }}>
            <li><strong>特定口座（課税）</strong>：米国税10% ＋ 日本税20.315%（合計約28.2%引かれる）</li>
            <li><strong>新NISA口座（非課税）</strong>：米国税10% ＋ 日本税0%（合計10%のみ引かれる）★お得！</li>
          </ul>
        </div>

        <h2 style={{ fontSize: "1.5rem", fontWeight: "900", color: "var(--primary-dark)", borderBottom: "2px solid var(--primary-light)", paddingBottom: "0.5rem", marginTop: "2.5rem", marginBottom: "1.2rem" }}>
          米国株インデックスファンド（eMAXIS Slim S&P500など）の場合は？
        </h2>
        <p>
          日本で大人気の「eMAXIS Slim 米国株式（S&P500）」や「楽天・S&P500」などの<strong>投資信託（インデックスファンド）</strong>を新NISAのつみたて投資枠で購入している場合はどうでしょうか？
        </p>

        <p>
          この場合、投資信託がファンド内部で組み入れ企業の配当金を受け取る段階で米国現地税10%が差し引かれますが、ファンド内部でそのまま自動で再投資されます。個人の手元に直接配当金が分配されないため、個人が確定申告や複雑な税金計算を行う必要は一切ありません。
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: "900", color: "var(--primary-dark)", borderBottom: "2px solid var(--primary-light)", paddingBottom: "0.5rem", marginTop: "2.5rem", marginBottom: "1.2rem" }}>
          注意：新NISAの米国10%分は「外国税額控除」が使えない
        </h2>
        <p>
          前の章でも触れましたが、特定口座であれば確定申告で「外国税額控除」を使って米国の10%分を取り戻すことができます。しかし、<strong>新NISA口座は日本国内の税金がゼロになっているため、外国税額控除の対象外</strong>となります。
        </p>
        <p>
          「外国税額控除が使えないなら損では？」と思うかもしれませんが、日本の約20%分が丸々浮くメリットの方が圧倒的に大きいため、基本的には新NISAを優先するのが最も効率的な税金対策になります。
        </p>
        <p>
          特定口座と新NISA口座の詳しい使い分けルールについては、<Link href="/blog/us-stock-tokutei-koza-guide" style={{ color: "var(--primary)", fontWeight: "bold" }}>特定口座と新NISAの使い分け解説記事</Link>をご覧ください。
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: "900", color: "var(--primary-dark)", borderBottom: "2px solid var(--primary-light)", paddingBottom: "0.5rem", marginTop: "2.5rem", marginBottom: "1.2rem" }}>
          まとめ
        </h2>
        <p>
          新NISAを活用した米国株投資は、値上がり益も配当金も日本の税金（約20%）がゼロになる圧倒的にお得な神制度です。
        </p>
        <p>
          生涯非課税枠1,800万円（うち成長投資枠1,200万円）を最大限に活かして、長期的な資産形成を最短ルートで進めましょう！
        </p>
        <p>
          米国株の税金ルール全体について復習したい方は、<Link href="/blog/us-stock-tax-guide" style={{ color: "var(--primary)", fontWeight: "bold" }}>米国株の税金全体ガイド</Link>も合わせてご確認ください。
        </p>
      </div>
    </StaticBlogPost>
  );
}
