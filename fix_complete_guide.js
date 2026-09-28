const fs = require('fs');

const content = `import { Metadata } from "next";
import Link from "next/link";
import StaticBlogPost from "@/components/StaticBlogPost";

export const metadata: Metadata = {
  title: '米国株の税金・確定申告 完全ガイド｜特定口座・NISA・外国税額控除を初心者向けに解説',
  description: '米国株の税金と確定申告を初心者向けに完全解説。譲渡益・配当への課税の仕組み、特定口座と一般口座の違い、新NISAでの非課税、外国税額控除で二重課税を取り戻す方法までわかりやすくまとめました。',
  alternates: { canonical: 'https://www.tokyo-us-stock.com/blog/us-stock-tax-complete-guide' },
  openGraph: { 
    title: '米国株の税金・確定申告 完全ガイド｜初心者向け', 
    description: '譲渡益・配当の課税、特定口座、NISA非課税、外国税額控除まで完全解説。', 
    url: 'https://www.tokyo-us-stock.com/blog/us-stock-tax-complete-guide', 
    type: 'article',
    publishedTime: "2026-08-04",
    authors: ["とびー"],
    images: ["https://www.tokyo-us-stock.com/ogp.png"],
  },
};

export default function UsStockTaxCompleteGuide() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "特定口座（源泉徴収あり）なら本当に確定申告は不要ですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "はい、原則として確定申告は不要です。証券会社があなたの代わりに税金を計算し、利益から自動的に天引きして納税してくれます。ただし、複数の証券口座間で損益通算を行いたい場合や、外国税額控除を適用して配当金の二重課税を取り戻したい場合は、あえて確定申告を行う必要があります。"
        }
      },
      {
        "@type": "Question",
        "name": "配当金の外国税額控除は必ず確定申告すべきですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "義務ではありませんが、確定申告をすることで米国で源泉徴収された10%の税金の一部または全額を取り戻すことができます。配当金額が大きい場合や、他に控除できる項目がある場合は、確定申告を行った方が手取り額が増えるためおすすめです。"
        }
      },
      {
        "@type": "Question",
        "name": "会社員ですが、確定申告をすると会社に副業としてバレますか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "株式投資は一般的に副業（就業規則違反）とはみなされません。ただし、住民税の金額が変わることで会社に投資していることが知られる可能性はあります。確定申告の際、住民税の徴収方法を「自分で納付（普通徴収）」に選択することで、会社に通知が行くのを防ぐことが可能です。"
        }
      },
      {
        "@type": "Question",
        "name": "損失が出た場合も確定申告は必要ですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "損失が出た場合、確定申告の義務はありませんが、申告することで「譲渡損失の繰越控除」を利用できます。これにより、今年の損失を翌年以降3年間にわたって利益と相殺することができ、将来の税負担を軽減できるため、申告することをおすすめします。"
        }
      },
      {
        "@type": "Question",
        "name": "新NISAで米国株を買った場合、配当金の二重課税はどうなりますか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "新NISA口座で米国株を保有している場合、日本の税金（約20%）は非課税になりますが、米国の現地税（10%）は通常通り課税されます。また、NISA口座はそもそも日本国内で非課税であるため、外国税額控除の対象外となり、米国で引かれた10%の税金を取り戻すことはできません。"
        }
      },
      {
        "@type": "Question",
        "name": "為替差益（為替による利益）にも税金はかかりますか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "米ドル建てで取引する場合、株の売買損益の中に為替変動分（円安・円高の影響）が最初から含まれて円換算で利益計算されるため、売買益の一部として約20.315%の税金が引かれます。なお、株式を売却して得た米ドルのまま口座に保有し続け、後日円安が進んだタイミングで円に戻した場合は「雑所得」として総合課税の対象になるケースがあります。"
        }
      },
      {
        "@type": "Question",
        "name": "日本株の赤字（損失）と米国株の利益を相殺することはできますか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "はい、可能です！日本株と米国株は同じ「上場株式等のグループ」に分類されているため、確定申告（損益通算）を行うことで、日本株で出た赤字と米国株の黒字（または配当金）を相殺して納め過ぎた税金を還付させることができます。"
        }
      }
    ]
  };

  return (
    <StaticBlogPost
      title="米国株の税金・確定申告 完全ガイド｜特定口座・NISA・外国税額控除を初心者向けに解説"
      date="2026-08-04"
      summary="米国株投資でかかる税金の全体像を初心者向けに分かりやすく解説。配当金と値上がり益（譲渡益）の税率、国内約20%と米国10%の二重課税、確定申告や新NISAでの税金対策まで網羅。"
      slug="us-stock-tax-complete-guide"
      knowledgeLink="/knowledge/tax"
      knowledgeTitle="米国株の税金ナレッジ"
      knowledgeDesc="米国株の税率や控除手続きについて図解付きで分かりやすくまとめています。"
      aioSummary={[
        "米国株の利益（譲渡益と配当金）には原則として約20.315%の税金がかかる",
        "配当金は米国で10%引かれた後に日本で課税される「二重課税」となる",
        "新NISAを利用すれば日本の税金はゼロになり、特定口座なら確定申告の手間を省ける"
      ]}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="article-body-content">
        <p>
          米国株投資を始めるにあたって、多くの人が壁に感じるのが「税金」と「確定申告」の仕組みです。<Link href="/blog/us-stock-beginners-guide" style={{ color: "var(--primary)", textDecoration: "underline", fontWeight: "bold" }}>米国株投資の始め方</Link>をマスターした次に直面する大きな課題と言えるでしょう。
          日本株と異なり、米国株の場合は為替の計算や、アメリカ現地での課税など、特有のルールが存在します。しかし、基本的な仕組みさえ理解してしまえば、決して難しいものではありません。
        </p>
        <p>
          本記事では、米国株投資で発生する利益に対する課税の仕組み、特定口座の活用方法、新NISAでの非課税メリット、そして二重課税を取り戻すための外国税額控除まで、初心者の方に向けて徹底的にわかりやすく解説します。
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: "900", color: "var(--primary-dark)", borderBottom: "2px solid var(--primary-light)", paddingBottom: "0.5rem", marginTop: "2.5rem", marginBottom: "1.2rem" }}>
          1. 米国株にかかる税金の基礎知識
        </h2>
        <p>
          米国株投資で得られる利益は、大きく分けて「譲渡益（キャピタルゲイン）」と「配当金（インカムゲイン）」の2種類があります。それぞれの利益に対してどのように税金がかかるのかを理解することが、税金対策の第一歩です。
        </p>

        <h3 style={{ fontSize: "1.2rem", fontWeight: "800", color: "var(--primary)", marginTop: "1.8rem", marginBottom: "0.8rem" }}>
          譲渡益（キャピタルゲイン）に対する課税
        </h3>
        <p>
          米国株を買った時の価格よりも高い価格で売却した際に生じる利益には、日本の税法に基づき<strong>一律 20.315%（所得税15.315%＋復興特別所得税＋住民税5%）</strong>の申告分離課税が適用されます。米国株の場合、売却時にアメリカ現地での税金はかかりません。つまり、譲渡益に関しては日本国内でのみ課税されることになります。
        </p>
        <p>
          ※注意すべきは「為替差益」も譲渡益に含まれるという点です。例えば、株価自体は変わらなくても、購入時よりも円安が進んだタイミングで売却した場合、円換算での利益が発生し、その利益に対しても20.315%の税金がかかります。
        </p>

        <h3 style={{ fontSize: "1.2rem", fontWeight: "800", color: "var(--primary)", marginTop: "1.8rem", marginBottom: "0.8rem" }}>
          配当金（インカムゲイン）に対する課税と「二重課税」
        </h3>
        <p>
          米国企業から支払われる配当金に対しても税金がかかりますが、譲渡益とは異なり、<strong>アメリカと日本の両方で課税される「二重課税」</strong>となります。
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
          2. 特定口座と一般口座の違い：初心者はどれを選ぶべき？
        </h2>
        <p>
          証券口座を開設する際、「特定口座（源泉徴収あり）」「特定口座（源泉徴収なし）」「一般口座」の3つから選ぶ必要があります。<Link href="/blog/us-stock-tokutei-koza-guide" style={{ color: "var(--primary)", fontWeight: "bold", textDecoration: "underline" }}>特定口座の選び方</Link>は非常に重要で、その後の確定申告の手間を大きく左右します。
        </p>

        <div style={{ overflowX: "auto", marginTop: "1.5rem", marginBottom: "1.5rem" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", border: "1px solid #cbd5e1" }}>
            <thead style={{ background: "#f1f5f9" }}>
              <tr>
                <th style={{ padding: "1rem", border: "1px solid #cbd5e1", textAlign: "left" }}>口座の種類</th>
                <th style={{ padding: "1rem", border: "1px solid #cbd5e1", textAlign: "left" }}>年間取引報告書</th>
                <th style={{ padding: "1rem", border: "1px solid #cbd5e1", textAlign: "left" }}>確定申告の必要性</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: "1rem", border: "1px solid #cbd5e1", fontWeight: "bold" }}>特定口座（源泉徴収あり）</td>
                <td style={{ padding: "1rem", border: "1px solid #cbd5e1" }}>証券会社が作成</td>
                <td style={{ padding: "1rem", border: "1px solid #cbd5e1", color: "var(--primary)", fontWeight: "bold" }}>原則不要（初心者におすすめ）</td>
              </tr>
              <tr>
                <td style={{ padding: "1rem", border: "1px solid #cbd5e1", fontWeight: "bold" }}>特定口座（源泉徴収なし）</td>
                <td style={{ padding: "1rem", border: "1px solid #cbd5e1" }}>証券会社が作成</td>
                <td style={{ padding: "1rem", border: "1px solid #cbd5e1" }}>必要</td>
              </tr>
              <tr>
                <td style={{ padding: "1rem", border: "1px solid #cbd5e1", fontWeight: "bold" }}>一般口座</td>
                <td style={{ padding: "1rem", border: "1px solid #cbd5e1" }}>自分で作成</td>
                <td style={{ padding: "1rem", border: "1px solid #cbd5e1" }}>必要</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 style={{ fontSize: "1.5rem", fontWeight: "900", color: "var(--primary-dark)", borderBottom: "2px solid var(--primary-light)", paddingBottom: "0.5rem", marginTop: "2.5rem", marginBottom: "1.2rem" }}>
          3. 新NISAでの非課税の仕組みと注意点
        </h2>
        <p>
          2024年から始まった新NISAを活用すれば、米国株の投資効率を劇的に高めることができます。<Link href="/blog/nisa-us-stock-tax-free" style={{ color: "var(--primary)", fontWeight: "bold" }}>新NISAでの非課税解説</Link>でも解説している通り、最大のメリットは日本国内での税金（20.315%）が完全に非課税になる点です。
        </p>
        <p>
          しかし、配当金については注意が必要です。新NISA口座であっても、アメリカ現地での10%の税金は源泉徴収されます。日本国内の20.315%は非課税となりますが、完全な無税になるわけではありません。また、NISA口座では「外国税額控除」を利用することができないため、この10%の税金は取り戻せないコストとして認識しておく必要があります。
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: "900", color: "var(--primary-dark)", borderBottom: "2px solid var(--primary-light)", paddingBottom: "0.5rem", marginTop: "2.5rem", marginBottom: "1.2rem" }}>
          4. 外国税額控除で二重課税を取り戻す
        </h2>
        <p>
          特定口座や一般口座で米国株から配当金を受け取った場合、アメリカと日本で二重に税金を引かれています。この二重課税を解消するための制度が「外国税額控除」です。確定申告で「外国税額控除」を申請すれば、米国で差し引かれた10%分の一部を取り戻すことができます。申請手順や注意点は<Link href="/blog/us-stock-gaikoku-zei-kojo" style={{ color: "var(--primary)", fontWeight: "bold" }}>外国税額控除のやり方ガイド</Link>にて解説しています。
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: "900", color: "var(--primary-dark)", borderBottom: "2px solid var(--primary-light)", paddingBottom: "0.5rem", marginTop: "2.5rem", marginBottom: "1.2rem" }}>
          5. 確定申告が必要か迷った場合の判定
        </h2>
        <p>
          米国株投資において確定申告が必要なケースと不要なケースを整理しておきましょう。当サイトの<Link href="/blog/us-stock-kakutei-shinkoku" style={{ color: "var(--primary)", fontWeight: "bold" }}>確定申告判定ガイド</Link>で条件をチェックしてみてください。
        </p>
        
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", marginTop: "1.5rem", marginBottom: "2rem" }}>
          <div style={{ background: "#ecfdf5", padding: "1.5rem", borderRadius: "8px", border: "1px solid #10b981" }}>
            <h3 style={{ color: "#047857", marginTop: 0, fontSize: "1.1rem" }}>確定申告が不要なケース</h3>
            <ul style={{ margin: 0, paddingLeft: "1.5rem", lineHeight: "1.8", fontSize: "0.95rem" }}>
              <li>特定口座（源泉徴収あり）で取引を完結させる場合</li>
              <li>新NISA口座のみで取引している場合</li>
            </ul>
          </div>
          
          <div style={{ background: "#fef2f2", padding: "1.5rem", borderRadius: "8px", border: "1px solid #ef4444" }}>
            <h3 style={{ color: "#b91c1c", marginTop: 0, fontSize: "1.1rem" }}>申告が必要・お得なケース</h3>
            <ul style={{ margin: 0, paddingLeft: "1.5rem", lineHeight: "1.8", fontSize: "0.95rem" }}>
              <li>外国税額控除で配当金の税金を取り戻したい</li>
              <li>複数口座の損益通算や、損失の繰越控除をしたい</li>
            </ul>
          </div>
        </div>

        <h2 style={{ fontSize: "1.5rem", fontWeight: "900", color: "var(--primary-dark)", borderBottom: "2px solid var(--primary-light)", paddingBottom: "0.5rem", marginTop: "2.5rem", marginBottom: "1.2rem" }}>
          米国株税金シリーズ（全記事一覧）
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
            <h3 style={{ fontSize: "1.05rem", fontWeight: "800", color: "var(--primary-dark)", margin: "0 0 0.5rem 0" }}>Q. 特定口座（源泉徴収あり）なら本当に確定申告は不要ですか？</h3>
            <p style={{ fontSize: "0.95rem", lineHeight: "1.8", margin: 0, color: "var(--text-main)" }}>はい、原則として確定申告は不要です。証券会社があなたの代わりに税金を計算し、利益から自動的に天引きして納税してくれます。ただし、複数の証券口座間で損益通算を行いたい場合や、外国税額控除を適用したい場合は申告が必要です。</p>
          </div>
          <div style={{ background: "#fdfefe", border: "1px solid #e5e7e9", borderRadius: "14px", padding: "1.2rem 1.4rem" }}>
            <h3 style={{ fontSize: "1.05rem", fontWeight: "800", color: "var(--primary-dark)", margin: "0 0 0.5rem 0" }}>Q. 配当金の外国税額控除は必ず確定申告すべきですか？</h3>
            <p style={{ fontSize: "0.95rem", lineHeight: "1.8", margin: 0, color: "var(--text-main)" }}>義務ではありませんが、確定申告をすることで米国で源泉徴収された10%の税金の一部を取り戻すことができます。配当金額が大きい場合は申告をおすすめします。</p>
          </div>
          <div style={{ background: "#fdfefe", border: "1px solid #e5e7e9", borderRadius: "14px", padding: "1.2rem 1.4rem" }}>
            <h3 style={{ fontSize: "1.05rem", fontWeight: "800", color: "var(--primary-dark)", margin: "0 0 0.5rem 0" }}>Q. 為替差益（為替による利益）にも税金はかかりますか？</h3>
            <p style={{ fontSize: "0.95rem", lineHeight: "1.8", margin: 0, color: "var(--text-main)" }}>はい。米ドル建てで取引する場合、株の売買損益の中に為替変動分が含まれて円換算で利益計算されるため、売買益の一部として約20.315%の税金が引かれます。</p>
          </div>
          <div style={{ background: "#fdfefe", border: "1px solid #e5e7e9", borderRadius: "14px", padding: "1.2rem 1.4rem" }}>
            <h3 style={{ fontSize: "1.05rem", fontWeight: "800", color: "var(--primary-dark)", margin: "0 0 0.5rem 0" }}>Q. 日本株の赤字（損失）と米国株の利益を相殺することはできますか？</h3>
            <p style={{ fontSize: "0.95rem", lineHeight: "1.8", margin: 0, color: "var(--text-main)" }}>はい、可能です！同じ「上場株式等のグループ」に分類されているため、確定申告（損益通算）を行うことで、日本株の赤字と米国株の黒字（または配当金）を相殺して納め過ぎた税金を還付させることができます。</p>
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
`
fs.writeFileSync('src/app/blog/us-stock-tax-complete-guide/page.tsx', content);
