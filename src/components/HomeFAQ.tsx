const faqs = [
  {
    question: "米国株の始め方がわかりません。何から始めればいいですか？",
    answer:
      "米国株投資の始め方は大きく3ステップです。①SBI証券・楽天証券などのネット証券で口座を開設する、②新NISA口座を設定する、③S&P500などのインデックスファンドを毎月一定額で積立購入する、という流れが初心者におすすめです。当クラブの少人数制セミナーで一つひとつ丁寧に解説しています。",
  },
  {
    question: "初心者に米国株のおすすめ銘柄・商品を教えてください",
    answer:
      "投資初心者には、米国の優良企業500社に分散投資できる「S&P500連動インデックスファンド」が最もおすすめです。代表的な商品は「eMAXIS Slim 米国株式（S&P500）」で、新NISAのつみたて投資枠で購入すれば利益に対する税金が永久にゼロになります。",
  },
  {
    question: "NISAで米国株・S&P500に投資できますか？",
    answer:
      "はい、新NISAの「つみたて投資枠（年間120万円）」と「成長投資枠（年間240万円）」の両方で米国株・S&P500連動ファンドを購入できます。合計年間360万円・生涯1,800万円まで非課税で運用できます。",
  },
];

export default function HomeFAQ() {
  return (
    <section
      style={{
        background: "var(--bg-warm)",
        padding: "clamp(3rem, 6vw, 5rem) 0",
        borderTop: "1px solid rgba(0,0,0,0.05)",
      }}
    >
      <div className="container" style={{ maxWidth: "860px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <span className="section-tag">よくある質問</span>
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(1.4rem, 3.5vw, 2.1rem)",
              fontWeight: "900",
              color: "var(--primary-dark)",
              marginTop: "0.75rem",
              lineHeight: "1.4",
            }}
          >
            米国株投資についてよくある質問
          </h2>
          <p style={{ color: "var(--text-muted)", fontSize: "1rem", marginTop: "0.75rem" }}>
            「米国株 始め方」「おすすめ銘柄」「NISAとの併用」についてお答えします
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          {faqs.map((faq, i) => (
            <div
              key={i}
              style={{
                background: "white",
                borderRadius: "16px",
                border: "1px solid rgba(0,0,0,0.08)",
                padding: "1.5rem",
                boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
              }}
            >
              {/* 質問 Q */}
              <div style={{ display: "flex", alignItems: "flex-start", gap: "0.9rem", marginBottom: "1rem" }}>
                <span
                  style={{
                    background: "var(--primary)",
                    color: "white",
                    fontWeight: "900",
                    fontSize: "0.85rem",
                    borderRadius: "8px",
                    padding: "0.25rem 0.6rem",
                    flexShrink: 0,
                    marginTop: "0.1rem",
                    fontFamily: "var(--font-accent)",
                    letterSpacing: "0.02em",
                  }}
                >
                  Q
                </span>
                <h3
                  style={{
                    fontSize: "clamp(1rem, 2.2vw, 1.1rem)",
                    fontWeight: "800",
                    color: "var(--primary-dark)",
                    lineHeight: "1.6",
                    margin: 0,
                  }}
                >
                  {faq.question}
                </h3>
              </div>

              {/* 回答 A（常時表示・HTMLソースコード内に確実に格納） */}
              <div
                style={{
                  display: "flex",
                  gap: "0.9rem",
                  alignItems: "flex-start",
                  paddingTop: "0.8rem",
                  borderTop: "1px dashed rgba(0,0,0,0.08)",
                }}
              >
                <span
                  style={{
                    background: "var(--bg-warm)",
                    color: "var(--primary)",
                    fontWeight: "900",
                    fontSize: "0.85rem",
                    borderRadius: "8px",
                    padding: "0.25rem 0.6rem",
                    flexShrink: 0,
                    fontFamily: "var(--font-accent)",
                    border: "1px solid rgba(176,58,46,0.2)",
                    marginTop: "0.1rem",
                  }}
                >
                  A
                </span>
                <p
                  style={{
                    fontSize: "0.95rem",
                    color: "var(--text-main)",
                    lineHeight: "1.85",
                    margin: 0,
                  }}
                >
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 免責表記 */}
        <p
          style={{
            fontSize: "0.78rem",
            color: "var(--text-muted)",
            marginTop: "2rem",
            lineHeight: "1.7",
            textAlign: "center",
            padding: "0 1rem",
          }}
        >
          ※上記の回答は一般的な情報提供を目的としており、特定の金融商品への投資を勧誘するものではありません。
          投資には元本割れのリスクが伴います。最終的な投資判断はご自身の責任のもとで行ってください。
        </p>
      </div>
    </section>
  );
}
