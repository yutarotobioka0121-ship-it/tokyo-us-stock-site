import type { Metadata } from "next";
import { Kosugi_Maru } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const kosugiMaru = Kosugi_Maru({
  variable: "--font-kosugi-maru",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "東京米国株カレッジ｜米国株・株式投資を初心者から学ぶ",
  description: "5年で1300%以上の実績を持つ米国株長期投資コミュニティ。株式投資の基礎から、投資初心者でも迷わず資産を築ける考え方を共有します。",
  verification: {
    google: "uPPhCDKZb278y7qY5uJ76kC0Vd1YEEe972xDjb9bkx0",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${kosugiMaru.variable}`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
