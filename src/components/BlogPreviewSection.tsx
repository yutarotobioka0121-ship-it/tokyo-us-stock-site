"use client";

import Link from "next/link";
import { Calendar, ChevronRight, ArrowRight, TrendingUp } from "lucide-react";

type Post = {
  id: string;
  title: string;
  slug: string;
  date: string;
  summary: string;
  cover: string | null;
};

const ACCENT_COLORS = [
  { bg: 'linear-gradient(135deg, #b03a2e 0%, #e74c3c 100%)' },
  { bg: 'linear-gradient(135deg, #1a5276 0%, #2980b9 100%)' },
  { bg: 'linear-gradient(135deg, #1e8449 0%, #27ae60 100%)' },
];

export default function BlogPreviewSection({ posts }: { posts: Post[] }) {
  if (posts.length === 0) return null;

  return (
    <section className="section-padding" style={{ background: "var(--bg-warm)" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <span className="section-tag">最新ブログ記事</span>
          <h2 className="section-title" style={{ marginTop: "0.75rem" }}>
            最新ブログ記事
          </h2>
          <p style={{ color: "var(--text-muted)", fontSize: "1.05rem", marginTop: "0.75rem" }}>
            投資の考え方・米国株・NISAに関する最新情報をお届けしています
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.5rem",
            marginBottom: "2.5rem",
          }}
        >
          {posts.map((post, index) => {
            const accent = ACCENT_COLORS[index % ACCENT_COLORS.length];
            const readingMins = post.summary ? Math.max(3, Math.ceil(post.summary.length / 200)) : 5;

            return (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                style={{ textDecoration: "none", display: "block" }}
              >
                <article
                  style={{
                    borderRadius: "20px",
                    overflow: "hidden",
                    background: "white",
                    border: "1px solid rgba(0,0,0,0.06)",
                    boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    transition: "transform 0.25s ease, box-shadow 0.25s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-5px)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 16px 40px rgba(0,0,0,0.12)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 12px rgba(0,0,0,0.05)";
                  }}
                >
                  {/* カラーアクセントヘッダー */}
                  <div
                    style={{
                      background: accent.bg,
                      padding: "1.25rem 1.5rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "1rem",
                    }}
                  >
                    <div
                      style={{
                        background: "rgba(255,255,255,0.22)",
                        borderRadius: "8px",
                        padding: "0.3rem 0.7rem",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.4rem",
                      }}
                    >
                      <TrendingUp size={13} style={{ color: "rgba(255,255,255,0.95)" }} />
                      <span style={{ color: "white", fontSize: "0.72rem", fontWeight: "800", letterSpacing: "0.06em" }}>
                        ブログ記事
                      </span>
                    </div>
                    <span style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.75rem", fontWeight: "600", whiteSpace: "nowrap" }}>
                      約{readingMins}分で読める
                    </span>
                  </div>

                  {/* コンテンツ */}
                  <div
                    style={{
                      padding: "1.4rem 1.5rem 1.5rem",
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.75rem",
                      flex: 1,
                    }}
                  >
                    {post.date && (
                      <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", color: "var(--text-muted)", fontSize: "0.78rem" }}>
                        <Calendar size={12} />
                        <span>
                          {new Date(post.date).toLocaleDateString("ja-JP", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </span>
                      </div>
                    )}

                    <h3
                      style={{
                        fontSize: "1rem",
                        fontWeight: "800",
                        lineHeight: "1.65",
                        color: "var(--text-main)",
                        margin: 0,
                        display: "-webkit-box",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {post.title}
                    </h3>

                    {post.summary && (
                      <p
                        style={{
                          fontSize: "0.85rem",
                          color: "var(--text-muted)",
                          lineHeight: "1.75",
                          margin: 0,
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                        }}
                      >
                        {post.summary}
                      </p>
                    )}

                    <div
                      style={{
                        marginTop: "auto",
                        paddingTop: "1rem",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.3rem",
                        color: "var(--primary)",
                        fontSize: "0.875rem",
                        fontWeight: "800",
                        borderTop: "1px solid rgba(0,0,0,0.06)",
                      }}
                    >
                      続きを読む <ChevronRight size={15} />
                    </div>
                  </div>
                </article>
              </Link>
            );
          })}
        </div>

        <div style={{ textAlign: "center" }}>
          <Link
            href="/blog"
            className="btn btn-outline"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.9rem 2.5rem",
              borderRadius: "50px",
              fontSize: "1rem",
              fontWeight: "800",
            }}
          >
            ブログ記事をもっと見る <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
