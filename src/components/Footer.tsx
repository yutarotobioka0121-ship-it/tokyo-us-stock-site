'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Instagram } from 'lucide-react';
import NoteIcon from './NoteIcon';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [showDisclaimer, setShowDisclaimer] = useState(false);

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link href="/" className="logo">
            <span className="logo-title" style={{ whiteSpace: 'nowrap' }}>
              <span className="logo-text">Tokyo US Stock</span>
              <span className="logo-accent">Club</span>
            </span>
            <span className="logo-sub">東京米国株クラブ</span>
          </Link>
          <p className="footer-desc">
            投資をギャンブルにしない、本質的な考え方を初心者の方へ。
          </p>
          <div className="footer-social">
            <a href="https://www.instagram.com/tobby_us_stock?igsh=czQwaXVzNmU5Y2V3&utm_source=qr" target="_blank" rel="noopener noreferrer" className="instagram-link" aria-label="Instagram">
              <Instagram size={24} />
            </a>
            <a href="https://note.com/tobby_wellness" target="_blank" rel="noopener noreferrer" className="note-link" aria-label="Note">
              <NoteIcon size={24} />
            </a>
          </div>
        </div>

        <div className="footer-links">
          <h4 className="footer-title">コンテンツ</h4>
          <ul className="footer-list">
            <li><Link href="/about">自己紹介</Link></li>
            <li><Link href="/mission">理念</Link></li>
            <li><Link href="/seminar">勉強会詳細</Link></li>
            <li><Link href="/blog">ブログ</Link></li>
            <li><Link href="/apply">勉強会申し込み</Link></li>
          </ul>
        </div>

        <div className="footer-links">
          <h4 className="footer-title">サポート</h4>
          <ul className="footer-list">
            <li><Link href="/contact">お問い合わせ</Link></li>
            <li><Link href="/privacy">プライバシーポリシー</Link></li>
            <li>
              <button 
                onClick={() => setShowDisclaimer(!showDisclaimer)} 
                style={{ 
                  background: 'none', 
                  border: 'none', 
                  color: 'var(--text-muted)', 
                  cursor: 'pointer', 
                  padding: 0, 
                  fontFamily: 'inherit', 
                  fontSize: '0.95rem',
                  textAlign: 'left'
                }}
                className="footer-disclaimer-btn"
              >
                免責事項 {showDisclaimer ? '▲' : '▼'}
              </button>
            </li>
          </ul>
        </div>
      </div>

      {showDisclaimer && (
        <div className="container" style={{ marginTop: '2rem', padding: '1.5rem', background: 'rgba(255, 255, 255, 0.05)', borderRadius: '12px', fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.7)', lineHeight: '1.8', textAlign: 'left' }}>
          <h4 style={{ color: 'white', marginBottom: '1rem', fontSize: '0.95rem', fontWeight: '800' }}>免責事項</h4>
          <p style={{ marginBottom: '1rem' }}>
            東京米国株クラブ（以下「当クラブ」）が提供するウェブサイト、勉強会、SNSアカウント、各種コンテンツおよび教材（以下「本サービス」）において提供される情報は、米国株投資や資産形成に関する一般的な知識の普及、学習および情報提供のみを目的としたものであり、特定の金融商品の購入、売却、または特定の投資戦略の勧誘、投資助言、取引の推奨を目的としたものではありません。
          </p>
          <p style={{ marginBottom: '1rem' }}>
            本サービスで紹介する過去の投資実績（5年で1300%超等）や分析データは、特定期間における運営者の実体験に基づくものであり、将来の投資成果や特定の運用利回りを保証または示唆するものではありません。
          </p>
          <p style={{ marginBottom: '1rem' }}>
            投資信託、株式（国内外）、ETF、その他の金融商品は、経済動向、金利、為替レート、個別企業の業績などの様々な要因によって価格が変動し、元本割れが生じるリスク（元本損失リスク）があります。本サービスを利用した、または本サービスの情報を参考にして行われたあらゆる投資判断および取引行為は、お客様ご自身の自己責任と自己判断において行われるものとします。
          </p>
          <p style={{ margin: 0 }}>
            万一、本サービスが提供する情報に基づいて被った直接的・間接的な損害、損失、トラブルについて、当クラブおよび運営者は一切の責任を負いません。実際に投資を行う際は、各種目論見書や公式情報を精査し、必要に応じて金融機関や有資格の専門家（ファイナンシャルプランナー等）にご相談ください。
          </p>
        </div>
      )}

      <div className="container footer-bottom">
        <p>&copy; {currentYear} Tokyo US Stock Club. All rights reserved.</p>
      </div>
    </footer>
  );
}
