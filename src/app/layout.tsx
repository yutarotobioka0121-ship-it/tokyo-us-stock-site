import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.tokyo-us-stock.com"),
  title: "東京米国株クラブ｜初心者が基礎から学ぶ米国株の投資勉強会",
  description: "東京の米国株・初心者向け投資勉強会なら「東京米国株クラブ」。5年で1300%以上の実績を持つ講師が、ギャンブルにならない堅実な長期投資の基礎をわかりやすく解説。株式投資の第一歩を踏み出しませんか？",
  alternates: {
    canonical: "https://www.tokyo-us-stock.com",
  },
  openGraph: {
    title: "東京米国株クラブ｜初心者が基礎から学ぶ米国株の投資勉強会",
    description: "東京の米国株・初心者向け投資勉強会なら「東京米国株クラブ」。5年で1300%以上の実績を持つ講師が、ギャンブルにならない堅実な長期投資の基礎をわかりやすく解説。株式投資の第一歩を踏み出しませんか？",
    url: "https://www.tokyo-us-stock.com",
    siteName: "東京米国株クラブ",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "https://www.tokyo-us-stock.com/og-image.png",
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
  name: '東京米国株クラブ',
  url: 'https://www.tokyo-us-stock.com',
  logo: 'https://www.tokyo-us-stock.com/icon.png',
  description: '東京の米国株・初心者向け投資勉強会。5年で1300%以上の実績を持つ講師が、堅実な長期投資の基礎を解説。',
  sameAs: [
    'https://www.instagram.com/tobby_us_stock?igsh=czQwaXVzNmU5Y2V3&utm_source=qr',
    'https://note.com/tobby_wellness',
  ],
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
