import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link href="/" className="logo">
            <span className="logo-text">Tokyo US Stock</span>
            <span className="logo-accent">Club</span>
            <span className="logo-sub">東京米国株クラブ</span>
          </Link>
          <p className="footer-desc">
            5年で1300%以上の実績に基づいた、米国株長期投資の知見を共有するコミュニティ。
            投資をギャンブルにしない、本質的な考え方を初心者の方へ。
          </p>
        </div>

        <div className="footer-links">
          <h4 className="footer-title">コンテンツ</h4>
          <ul className="footer-list">
            <li><Link href="/about">自己紹介</Link></li>
            <li><Link href="/blog">ブログ</Link></li>
            <li><Link href="/apply">勉強会申し込み</Link></li>
          </ul>
        </div>

        <div className="footer-links">
          <h4 className="footer-title">サポート</h4>
          <ul className="footer-list">
            <li><Link href="/contact">お問い合わせ</Link></li>
            <li><Link href="/privacy">プライバシーポリシー</Link></li>
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>&copy; {currentYear} Tokyo US Stock Club. All rights reserved.</p>
      </div>
    </footer>
  );
}
