"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "米国株の始め方がわかりません。何から始めればいいですか？",
    answer:
      "米国株投資の始め方は大きく3ステップです。①SBI証券・楽天証券などのネット証券で口座を開設する、②新NISA口座を設定する、③S&P500などのインデックスファンドを毎月一定額で積立購入する、という流れが初心者におすすめです。「何を買えばいいかわからない」「口座の設定が不安」という方は、当クラブの少人数制セミナーで一つひとつ丁寧に解説しています。",
  },
  {
    question: "初心者に米国株のおすすめ銘柄・商品を教えてください",
    answer:
      "投資初心者には、米国の優良企業500社に分散投資できる「S&P500連動インデックスファンド」が最もおすすめです。代表的な商品は「eMAXIS Slim 米国株式（S&P500）」で、信託報酬が年率0.09%台と業界最安水準。新NISAのつみたて投資枠で購入すれば、利益に対する税金（約20%）が永久にゼロになります。個別株（NVIDIA・Apple・Microsoftなど）は、インデックスに慣れてからステップアップする形がリスクを抑えやすくおすすめです。",
  },
  {
    question: "NISAで米国株・S&P500に投資できますか？",
    answer:
      "はい、新NISAの「つみたて投資枠（年間120万円）」と「成長投資枠（年間240万円）」の両方で、米国株・米国ETF・S&P500連動ファンドを購入できます。合計年間360万円・生涯1,800万円まで非課税で運用できるため、長期の米国株投資との相性は抜群です。口座の選び方・設定手順まで、当クラブのNISA初心者セミナーでわかりやすく解説しています。",
  },
];

export default function HomeFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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
          <span className="section-tag">FAQ</span>
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

        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                style={{
                  background: "white",
                  borderRadius: "16px",
                  border: `1px solid ${isOpen ? "rgba(176,58,46,0.25)" : "rgba(0,0,0,0.07)"}`,
                  overflow: "hidden",
                  boxShadow: isOpen ? "0 4px 20px rgba(176,58,46,0.08)" : "0 1px 4px rgba(0,0,0,0.04)",
                  transition: "box-shadow 0.25s ease, border-color 0.25s ease",
                }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  style={{
                    width: "100%",
                    background: "none",
                    border: "none",
                    padding: "1.3rem 1.5rem",
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    gap: "1rem",
                    cursor: "pointer",
                    textAlign: "left",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "0.9rem", flex: 1 }}>
                    <span
                      style={{
                        background: "var(--primary)",
                        color: "white",
                        fontWeight: "900",
                        fontSize: "0.85rem",
                        borderRadius: "8px",
                        padding: "0.2rem 0.55rem",
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
                        fontSize: "clamp(0.95rem, 2.2vw, 1.05rem)",
                        fontWeight: "800",
                        color: "var(--text-main)",
                        lineHeight: "1.6",
                        margin: 0,
                      }}
                    >
                      {faq.question}
                    </h3>
                  </div>
                  <ChevronDown
                    size={20}
                    style={{
                      color: "var(--primary)",
                      flexShrink: 0,
                      transition: "transform 0.25s ease",
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      marginTop: "0.1rem",
                    }}
                  />
                </button>

                {isOpen && (
                  <div
                    style={{
                      padding: "0 1.5rem 1.5rem",
                      display: "flex",
                      gap: "0.9rem",
                      alignItems: "flex-start",
                    }}
                  >
                    <span
                      style={{
                        background: "var(--bg-warm)",
                        color: "var(--primary)",
                        fontWeight: "900",
                        fontSize: "0.85rem",
                        borderRadius: "8px",
                        padding: "0.2rem 0.55rem",
                        flexShrink: 0,
                        fontFamily: "var(--font-accent)",
                        border: "1px solid rgba(176,58,46,0.2)",
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
                )}
              </div>
            );
          })}
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
