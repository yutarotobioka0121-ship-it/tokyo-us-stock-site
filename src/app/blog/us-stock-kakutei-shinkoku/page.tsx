import { Metadata } from "next";
import Link from "next/link";
import StaticBlogPost from "@/components/StaticBlogPost";

export const metadata: Metadata = {
  title: "米国株の確定申告は必要？不要？条件と手順を初心者向けに解説 | 東京米国株クラブ",
  description:
    "米国株投資で確定申告が必要なケースと不要なケースを分かりやすく判定。特定口座（源泉あり/なし）、一般口座、年間20万円ルール、申告手順まで丁寧に解説。",
  alternates: {
    canonical: "https://www.tokyo-us-stock.com/blog/us-stock-kakutei-shinkoku",
  },
  openGraph: {
    title: "米国株の確定申告は必要？不要？条件と手順を初心者向けに解説",
    description:
      "米国株投資で確定申告が必要なケースと不要なケースを分かりやすく判定。特定口座（源泉あり/なし）、一般口座、年間20万円ルール、申告手順まで丁寧に解説。",
    url: "https://www.tokyo-us-stock.com/blog/us-stock-kakutei-shinkoku",
    type: "article",
    publishedTime: "2026-08-04",
    authors: ["とびー"],
    images: ["https://www.tokyo-us-stock.com/ogp.png"],
  },
};

export default function UsStockKakuteiShinkokuPage() {
  return (
    <StaticBlogPost
      title="米国株の確定申告は必要？不要？条件と手順を初心者向けに解説"
      date="2026-08-04"
      summary="米国株投資で確定申告が必要なケースと不要なケースを分かりやすく判定。特定口座（源泉あり/なし）、一般口座、年間20万円ルール、申告手順まで丁寧に解説。"
      slug="us-stock-kakutei-shinkoku"
      knowledgeLink="/blog/us-stock-tax-guide"
      knowledgeTitle="米国株の税金全体ガイド"
      knowledgeDesc="米国株の税金の基本ルール、二重課税や新NISAでの税金対策について解説しています。"
    >
      <div className="article-body-content">
        <p>
          米国株（アメリカ株）を始めた方が最も気になる疑問の一つが「<strong>米国株で利益が出たら確定申告をしなければいけないのか？</strong>」という問題です。
        </p>
        <p>
          結論から言うと、<strong>ほとんどの方は確定申告を行う必要がありません</strong>。口座の種類や利益の金額によって「必要」「不要」が明確に決まっています。
        </p>
        <p>
          本記事では、確定申告が必要なケースと不要なケースの判定条件、会社員に関係する「20万円ルール」、あえて確定申告した方が得するパターン（外国税額控除・損益通算）まで分かりやすく解説します。
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: "900", color: "var(--primary-dark)", borderBottom: "2px solid var(--primary-light)", paddingBottom: "0.5rem", marginTop: "2.5rem", marginBottom: "1.2rem" }}>
          【判定】米国株の確定申告が必要な人・不要な人
        </h2>

        <div style={{ background: "var(--bg-warm)", padding: "1.5rem", borderRadius: "16px", margin: "1.5rem 0", border: "1px solid rgba(0,0,0,0.06)" }}>
          <h3 style={{ fontSize: "1.1rem", fontWeight: "800", color: "#27ae60", margin: "0 0 0.8rem 0" }}>
            ✅ 確定申告が「不要」なケース
          </h3>
          <ul style={{ margin: 0, paddingLeft: "1.2rem", lineHeight: "1.8" }}>
            <li><strong>特定口座（源泉徴収あり）で取引している場合</strong>（税金が自動天引きされるため原則不要）</li>
            <li><strong>新NISA口座（つみたて投資枠・成長投資枠）で取引している場合</strong>（全額非課税のため不要）</li>
            <li><strong>会社員で、特定口座（源泉なし）や一般口座の利益が年間20万円以下の場合</strong></li>
          </ul>

          <h3 style={{ fontSize: "1.1rem", fontWeight: "800", color: "#c0392b", margin: "1.5rem 0 0.8rem 0" }}>
            ⚠️ 確定申告が「必須」なケース
          </h3>
          <ul style={{ margin: 0, paddingLeft: "1.2rem", lineHeight: "1.8" }}>
            <li><strong>特定口座（源泉徴収なし）で年間20万円を超える利益が出た場合</strong>（会社員の場合）</li>
            <li><strong>一般口座で年間20万円を超える利益が出た場合</strong>（会社員の場合）</li>
            <li><strong>個人事業主・フリーランスや無職の方で、利益が出た場合</strong>（基礎控除等を超える場合）</li>
          </ul>
        </div>

        <h2 style={{ fontSize: "1.5rem", fontWeight: "900", color: "var(--primary-dark)", borderBottom: "2px solid var(--primary-light)", paddingBottom: "0.5rem", marginTop: "2.5rem", marginBottom: "1.2rem" }}>
          会社員の「年間20万円ルール」とは？
        </h2>
        <p>
          会社員や給与所得者の場合、副業や株式投資（特定口座源泉なし・一般口座）で得た年間利益が「20万円以下」であれば、所得税の確定申告を行わなくてもよい特例（20万円ルール）が存在します。
        </p>
        <p>
          ただし注意が必要なのは、<strong>「所得税」は申告不要でも「住民税」の申告は別途自治体に必要な場合がある</strong>点です。余計なトラブルを防ぐためにも、やはり最初から「特定口座（源泉徴収あり）」を選んでおくのが最も安全で確実です。口座選びの詳細は<Link href="/blog/us-stock-tokutei-koza-guide" style={{ color: "var(--primary)", fontWeight: "bold" }}>特定口座ガイド</Link>をご参照ください。
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: "900", color: "var(--primary-dark)", borderBottom: "2px solid var(--primary-light)", paddingBottom: "0.5rem", marginTop: "2.5rem", marginBottom: "1.2rem" }}>
          確定申告した方が「得する」2つのケース
        </h2>
        <p>
          特定口座（源泉徴収あり）を使っていて本来は申告不要な人でも、あえて確定申告を行うことで手元にお金が戻ってくるケースがあります。
        </p>

        <h3 style={{ fontSize: "1.2rem", fontWeight: "800", color: "var(--primary)", marginTop: "1.8rem", marginBottom: "0.8rem" }}>
          ケース①：配当金の二重課税を取り戻す（外国税額控除）
        </h3>
        <p>
          米国株の配当金は米国で10%、日本で約20%の二重課税がされています。確定申告を行って「外国税額控除」を申請することで、米国の10%相当額を取り戻すことができます。やり方は<Link href="/blog/us-stock-gaikoku-zei-kojo" style={{ color: "var(--primary)", fontWeight: "bold" }}>外国税額控除のやり方解説</Link>をご覧ください。
        </p>

        <h3 style={{ fontSize: "1.2rem", fontWeight: "800", color: "var(--primary)", marginTop: "1.8rem", marginBottom: "0.8rem" }}>
          ケース②：株の赤字を繰り越す・相殺する（損益通算・繰越控除）
        </h3>
        <p>
          もし米国株取引で年間トータルで損失（赤字）が出た場合、確定申告（申告分離課税）をすることで、他の証券会社の利益や配当金と相殺（損益通算）したり、赤字を最大3年間繰り越して将来の税金を減らしたり（繰越控除）することができます。
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: "900", color: "var(--primary-dark)", borderBottom: "2px solid var(--primary-light)", paddingBottom: "0.5rem", marginTop: "2.5rem", marginBottom: "1.2rem" }}>
          米国株の確定申告のやり方・準備物
        </h2>
        <p>
          もし確定申告を行う場合の基本的な流れは以下の通りです。現在ではマイナンバーカードを使った国税庁の「e-Tax（電子申告）」を使えばスマホやPCから簡単に提出できます。
        </p>

        <ol style={{ lineHeight: "2" }}>
          <li><strong>年間取引報告書を準備する</strong>：毎年1月中旬頃に証券会社のマイページから電子交付（PDFダウンロード）できます。</li>
          <li><strong>国税庁「確定申告書等作成コーナー」にアクセスする</strong></li>
          <li><strong>「収入金額・所得金額の入力」画面で特定口座の年間取引報告書データを入力する</strong></li>
          <li><strong>外国税額控除を受ける場合は「外国税額控除の入力」欄を埋める</strong></li>
          <li><strong>マイナンバーカードで送信（電子申告）して完了</strong></li>
        </ol>

        <h2 style={{ fontSize: "1.5rem", fontWeight: "900", color: "var(--primary-dark)", borderBottom: "2px solid var(--primary-light)", paddingBottom: "0.5rem", marginTop: "2.5rem", marginBottom: "1.2rem" }}>
          まとめ
        </h2>
        <p>
          米国株の確定申告は、「特定口座（源泉徴収あり）」または「新NISA」を使っている限り原則として不要です。
        </p>
        <p>
          配当金の税金を取り戻したい場合や損失が出た場合のみ、確定申告を上手く活用して節税につなげましょう！税金の疑問や不安がある方は、当サイトの<Link href="/blog/us-stock-tax-guide" style={{ color: "var(--primary)", fontWeight: "bold" }}>米国株の税金全体ガイド</Link>や<Link href="/seminar" style={{ color: "var(--primary)", fontWeight: "bold" }}>初心者セミナー</Link>もお役立てください。
        </p>
      </div>
    </StaticBlogPost>
  );
}
