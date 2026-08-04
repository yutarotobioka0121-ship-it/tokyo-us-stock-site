import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Calendar, ArrowLeft, ArrowRight, ShieldCheck, ChevronRight } from "lucide-react";

interface StaticBlogPostProps {
  title: string;
  date: string;
  summary?: string;
  children: React.ReactNode;
  knowledgeLink?: string;
  knowledgeTitle?: string;
  knowledgeDesc?: string;
  slug: string;
}

export default function StaticBlogPost({
  title,
  date,
  summary,
  children,
  knowledgeLink = "/knowledge/stock-investment",
  knowledgeTitle = "米国株投資の基礎知識",
  knowledgeDesc = "初心者でも安心！米国株の基本の仕組みや日本株との違いを徹底解説しています。",
  slug,
}: StaticBlogPostProps) {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: summary,
    datePublished: date,
    dateModified: date,
    author: {
      "@type": "Person",
      name: "とびー",
      url: "https://www.tokyo-us-stock.com/about",
    },
    publisher: {
      "@type": "Organization",
      name: "東京米国株クラブ",
      logo: {
        "@type": "ImageObject",
        url: "https://www.tokyo-us-stock.com/ogp.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.tokyo-us-stock.com/blog/${slug}`,
    },
  };

  return (
    <div className="blog-detail-page" style={{ overflowWrap: "break-word" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <article className="post-article" style={{ padding: "100px 0 60px" }}>
        <div className="container" style={{ maxWidth: "800px", margin: "0 auto" }}>
          {/* パンくずリスト風・ナビ */}
          <div style={{ marginBottom: "1.5rem" }}>
            <Link
              href="/blog"
              className="btn-link"
              style={{
                display: "inline-flex",
                alignItems: "center",
                fontSize: "0.9rem",
                color: "var(--primary)",
                textDecoration: "none",
                fontWeight: "700",
              }}
            >
              <ArrowLeft size={16} style={{ marginRight: "0.4rem" }} /> ブログ一覧へ戻る
            </Link>
          </div>

          {/* 投稿ヘッダー */}
          <header className="post-header" style={{ marginBottom: "2.5rem" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                background: "var(--bg-warm)",
                padding: "0.3rem 0.8rem",
                borderRadius: "20px",
                fontSize: "0.85rem",
                color: "var(--text-muted)",
                marginBottom: "1rem",
                border: "1px solid rgba(0,0,0,0.06)",
              }}
            >
              <Calendar size={14} />
              <time dateTime={date}>{date}</time>
              <span>•</span>
              <span>著者: とびー</span>
            </div>

            <h1
              className="post-title"
              style={{
                fontSize: "clamp(1.6rem, 5vw, 2.4rem)",
                fontWeight: "900",
                lineHeight: "1.4",
                color: "var(--primary-dark)",
                margin: "0 0 1rem 0",
              }}
            >
              {title}
            </h1>

            {summary && (
              <p
                style={{
                  fontSize: "1.05rem",
                  lineHeight: "1.8",
                  color: "var(--text-muted)",
                  background: "var(--bg-warm)",
                  padding: "1.2rem 1.5rem",
                  borderRadius: "14px",
                  borderLeft: "4px solid var(--primary)",
                  margin: 0,
                }}
              >
                {summary}
              </p>
            )}
          </header>

          {/* 記事本文 */}
          <div
            className="post-content"
            style={{
              fontSize: "1.05rem",
              lineHeight: "2",
              color: "var(--text-main)",
            }}
          >
            {children}

            {/* 投資リスク免責文 */}
            <div
              style={{
                marginTop: "3.5rem",
                padding: "1.2rem 1.5rem",
                background: "#fdfefe",
                border: "1px solid #ebf5fb",
                borderLeft: "4px solid #3498db",
                borderRadius: "12px",
                fontSize: "0.85rem",
                color: "#566573",
                lineHeight: "1.8",
              }}
            >
              <div style={{ fontWeight: "bold", display: "flex", alignItems: "center", gap: "0.4rem", marginBottom: "0.3rem", color: "#2980b9" }}>
                <ShieldCheck size={16} /> 投資に関する免責事項
              </div>
              本記事は情報提供を目的としており、特定の金融商品への投資を勧誘するものではありません。
              投資に関する最終的な判断は、ご自身の責任においてお願いします。投資には元本割れのリスクがあります。
            </div>
          </div>

          {/* ナレッジページへの誘導バナー */}
          <div
            style={{
              marginTop: "3rem",
              background: "linear-gradient(135deg, #1a5276 0%, #2980b9 100%)",
              borderRadius: "20px",
              padding: "2rem",
              color: "white",
              boxShadow: "0 10px 30px rgba(41,128,185,0.2)",
            }}
          >
            <span
              style={{
                background: "rgba(255,255,255,0.2)",
                padding: "0.2rem 0.7rem",
                borderRadius: "20px",
                fontSize: "0.75rem",
                fontWeight: "800",
                letterSpacing: "0.05em",
              }}
            >
              RECOMMENDED KNOWLEDGE
            </span>
            <h3 style={{ fontSize: "1.3rem", fontWeight: "900", margin: "0.75rem 0 0.5rem 0", color: "white" }}>
              {knowledgeTitle}
            </h3>
            <p style={{ fontSize: "0.95rem", lineHeight: "1.7", color: "rgba(255,255,255,0.9)", marginBottom: "1.5rem" }}>
              {knowledgeDesc}
            </p>
            <Link
              href={knowledgeLink}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                background: "white",
                color: "#1a5276",
                padding: "0.75rem 1.6rem",
                borderRadius: "30px",
                fontWeight: "800",
                fontSize: "0.95rem",
                textDecoration: "none",
              }}
            >
              詳しく学ぶ <ChevronRight size={18} />
            </Link>
          </div>

          {/* CTAセクション */}
          <div
            style={{
              marginTop: "2.5rem",
              background: "var(--bg-warm)",
              borderRadius: "20px",
              padding: "2.5rem 2rem",
              textAlign: "center",
              border: "1px solid rgba(176,58,46,0.15)",
            }}
          >
            <h3 style={{ fontSize: "1.3rem", fontWeight: "900", color: "var(--primary-dark)", marginBottom: "0.75rem" }}>
              初心者向け米国株・NISAセミナー開催中！
            </h3>
            <p style={{ fontSize: "0.95rem", color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1.5rem" }}>
              定員4名の少人数制カフェスタイルで、実践的な資産運用のコツを質問しながら学べます。
            </p>
            <Link
              href="/seminar"
              className="btn btn-primary"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.9rem 2.2rem",
                borderRadius: "50px",
                fontWeight: "800",
                fontSize: "1rem",
                textDecoration: "none",
              }}
            >
              セミナーの日程・詳細を見る <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
