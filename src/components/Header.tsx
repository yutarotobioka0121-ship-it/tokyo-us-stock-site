"use client";

import Link from 'next/link';
import { Menu, X, Instagram } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-inner">
        <Link href="/" className="logo">
          <span className="logo-text">Tokyo US Stock</span>
          <span className="logo-accent">Club</span>
          <span className="logo-sub">東京米国株クラブ</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="desktop-nav">
          <Link href="/" className="nav-link">ホーム</Link>
          <Link href="/about" className="nav-link">自己紹介</Link>
          <Link href="/mission" className="nav-link">理念</Link>
          <Link href="/seminar" className="nav-link">勉強会詳細</Link>
          <Link href="/blog" className="nav-link">ブログ</Link>
          <Link href="/contact" className="nav-link">お問い合わせ</Link>
          <a href="#" target="_blank" rel="noopener noreferrer" className="social-icon-link" aria-label="Instagram">
            <Instagram size={22} />
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div className={`mobile-nav ${isOpen ? 'open' : ''}`}>
        <nav className="mobile-nav-inner">
          <Link href="/" className="nav-link" onClick={() => setIsOpen(false)}>ホーム</Link>
          <Link href="/about" className="nav-link" onClick={() => setIsOpen(false)}>自己紹介</Link>
          <Link href="/mission" className="nav-link" onClick={() => setIsOpen(false)}>理念</Link>
          <Link href="/seminar" className="nav-link" onClick={() => setIsOpen(false)}>勉強会詳細</Link>
          <Link href="/blog" className="nav-link" onClick={() => setIsOpen(false)}>ブログ</Link>
          <Link href="/contact" className="nav-link" onClick={() => setIsOpen(false)}>お問い合わせ</Link>
          <div className="mobile-social-links">
            <a href="#" target="_blank" rel="noopener noreferrer" className="social-icon-link" onClick={() => setIsOpen(false)}>
              <Instagram size={28} /> <span>Instagram</span>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
