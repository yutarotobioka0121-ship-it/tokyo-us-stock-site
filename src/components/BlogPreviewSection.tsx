"use client";

import Image from "next/image";
import Link from "next/link";
import { BookOpen, Calendar, ChevronRight, ArrowRight } from "lucide-react";

type Post = {
  id: string;
  title: string;
  slug: string;
  date: string;
  summary: string;
  cover: string | null;
};

export default function BlogPreviewSection({ posts }: { posts: Post[] }) {
  if (posts.length === 0) return null;

  return (
    <section className="section-padding" style={{ background: "white" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <span className="section-tag">LATEST BLOG</span>
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
          {posts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              style={{ textDecoration: "none", display: "block" }}
            >
              <article
                className="blog-preview-card"
                style={{
                  borderRadius: "16px",
                  overflow: "hidden",
                  border: "1px solid rgba(176, 58, 46, 0.1)",
                  transition: "transform 0.25s ease, box-shadow 0.25s ease",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  background: "white",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 32px rgba(176,58,46,0.13)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "";
                }}
              >
                {/* サムネイル */}
                <div
                  style={{
                    width: "100%",
                    aspectRatio: "16/9",
                    background: "linear-gradient(135deg, var(--bg-warm) 0%, rgba(176,58,46,0.08) 100%)",
                    position: "relative",
                    overflow: "hidden",
                    flexShrink: 0,
                  }}
                >
                  {post.cover ? (
                    <Image
                      src={post.cover}
                      alt={post.title}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  ) : (
                    <div
                      style={{
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <BookOpen size={36} style={{ color: "var(--primary)", opacity: 0.4 }} />
                    </div>
                  )}
                </div>

                {/* コンテンツ */}
                <div
                  style={{
                    padding: "1.25rem 1.5rem 1.5rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5rem",
                    flex: 1,
                  }}
                >
                  {post.date && (
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.4rem",
                        color: "var(--text-muted)",
                        fontSize: "0.8rem",
                      }}
                    >
                      <Calendar size={13} />
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
                      lineHeight: "1.5",
                      color: "var(--text-main)",
                      margin: 0,
                    }}
                  >
                    {post.title}
                  </h3>
                  {post.summary && (
                    <p
                      style={{
                        fontSize: "0.875rem",
                        color: "var(--text-muted)",
                        lineHeight: "1.7",
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
                      paddingTop: "0.75rem",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.25rem",
                      color: "var(--primary)",
                      fontSize: "0.875rem",
                      fontWeight: "700",
                    }}
                  >
                    続きを読む <ChevronRight size={15} />
                  </div>
                </div>
              </article>
            </Link>
          ))}
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
