"use client";

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
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
          <span className="logo-title">
            <span className="logo-text">Tokyo US Stock</span>
            <span className="logo-accent">Club</span>
          </span>
          <span className="logo-sub">東京米国株クラブ</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="desktop-nav">
          <Link href="/" className="nav-link">ホーム</Link>
          <Link href="/about" className="nav-link">自己紹介</Link>
          <Link href="/mission" className="nav-link">理念</Link>
          <div className="nav-dropdown-wrapper">
            <span className="nav-link dropdown-trigger">米国株とは？</span>
            <div className="nav-dropdown">
              <Link href="/knowledge" className="dropdown-item">米国株とは</Link>
              <Link href="/knowledge/stock-investment" className="dropdown-item">株式投資とは</Link>
            </div>
          </div>
          <Link href="/seminar" className="nav-link">勉強会</Link>
          <Link href="/blog" className="nav-link">ブログ</Link>
          <Link href="/contact" className="nav-link">お問い合わせ</Link>
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
          <Link href="/knowledge" className="nav-link" onClick={() => setIsOpen(false)}>米国株とは</Link>
          <Link href="/knowledge/stock-investment" className="nav-link" onClick={() => setIsOpen(false)}>株式投資とは</Link>
          <Link href="/seminar" className="nav-link" onClick={() => setIsOpen(false)}>勉強会</Link>
          <Link href="/blog" className="nav-link" onClick={() => setIsOpen(false)}>ブログ</Link>
          <Link href="/contact" className="nav-link" onClick={() => setIsOpen(false)}>お問い合わせ</Link>
        </nav>
      </div>
    </header>
  );
}
