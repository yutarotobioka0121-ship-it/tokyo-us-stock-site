import type { Metadata } from "next";
import { Zen_Maru_Gothic } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";

const zenMaruGothic = Zen_Maru_Gothic({
  variable: "--font-zen-maru",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tokyo-us-stock.com"),
  title: "東京米国株クラブ｜初心者が基礎から学ぶ米国株の投資勉強会",
  description: "東京の米国株・初心者向け投資勉強会なら「東京米国株クラブ」。5年で1300%以上の実績を持つ講師が、ギャンブルにならない堅実な長期投資の基礎をわかりやすく解説。株式投資の第一歩を踏み出しませんか？",
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "h1GE1KQql8w6DMKssY0I_eHZyyN40wec2Wvfpo5mVTM",
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
      <body className={zenMaruGothic.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        <GoogleAnalytics gaId={gaId} />
      </body>
    </html>
  );
}
