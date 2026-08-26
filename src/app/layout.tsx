import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.tokyo-us-stock.com"),
  title: {
    default: "東京米国株クラブ｜米国株の始め方・おすすめを学ぶ投資セミナー",
    template: "%s | 東京米国株クラブ",
  },
  description: "「米国株の始め方がわからない」初心者向けの東京の投資セミナー。S&P500・新NISAのおすすめ活用法から口座開設まで、5年で資産13倍の講師が少人数制カフェスタイルで丁寧に解説。参加費無料。",
  alternates: {
    canonical: "https://www.tokyo-us-stock.com",
  },
  openGraph: {
    title: "東京米国株クラブ｜米国株の始め方・おすすめを学ぶ東京のセミナー",
    description: "「米国株の始め方がわからない」初心者向けの東京の投資セミナー。S&P500・新NISAのおすすめ活用法から口座開設まで、5年で資産13倍の講師が少人数制カフェスタイルで丁寧に解説。",
    url: "https://www.tokyo-us-stock.com",
    siteName: "東京米国株クラブ",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "https://www.tokyo-us-stock.com/ogp.png",
        width: 1200,
        height: 630,
        alt: "東京米国株クラブ",
      },
    ],
  },
  verification: {
    google: "h1GE1KQql8w6DMKssY0I_eHZyyN40wec2Wvfpo5mVTM",
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://www.tokyo-us-stock.com/#organization',
  name: '東京米国株クラブ',
  url: 'https://www.tokyo-us-stock.com',
  logo: {
    '@type': 'ImageObject',
    url: 'https://www.tokyo-us-stock.com/ogp.png',
  },
  image: 'https://www.tokyo-us-stock.com/ogp.png',
  description: '東京の米国株・初心者向け投資セミナー。5年で1300%以上の実績を持つ講師が、堅実な長期投資の基礎を解説。',
  sameAs: [
    'https://www.instagram.com/tobby_us_stock?igsh=czQwaXVzNmU5Y2V3&utm_source=qr',
    'https://note.com/tobby_wellness',
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: '東京都',
    addressCountry: 'JP',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID || "G-C0VZM64E52";

  return (
    <html lang="ja">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
        <GoogleAnalytics gaId={gaId} />
      </body>
    </html>
  );
}
