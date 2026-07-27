"use client";

import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
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

          {/* 知識ドロップダウン */}
          <div className="nav-dropdown-wrapper">
            <span className="nav-link dropdown-trigger" style={{ display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
              米国株とは <ChevronDown size={14} />
            </span>
            <div className="nav-dropdown">
              <Link href="/knowledge" className="dropdown-item">米国株とは</Link>
              <Link href="/knowledge/stock-investment" className="dropdown-item">株式投資とは</Link>
              <Link href="/knowledge/nisa" className="dropdown-item">NISAとは</Link>
            </div>
          </div>

          {/* 勉強会ドロップダウン */}
          <div className="nav-dropdown-wrapper">
            <Link href="/seminar" className="nav-link dropdown-trigger" style={{ display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
              勉強会 <ChevronDown size={14} />
            </Link>
            <div className="nav-dropdown" style={{ minWidth: '200px' }}>
              <Link href="/seminar" className="dropdown-item">米国株式勉強会</Link>
              <Link href="/seminar/nisa" className="dropdown-item">NISA初心者勉強会</Link>
              <Link href="/seminar/consultation" className="dropdown-item">マンツーマン個別相談</Link>
            </div>
          </div>

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
          
          <div style={{ padding: '0.5rem 0', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: '800', color: 'var(--primary)', display: 'block', marginBottom: '0.4rem' }}>米国株を知る</span>
            <Link href="/knowledge" className="nav-link" onClick={() => setIsOpen(false)} style={{ paddingLeft: '0.75rem', fontSize: '0.95rem' }}>米国株とは</Link>
            <Link href="/knowledge/stock-investment" className="nav-link" onClick={() => setIsOpen(false)} style={{ paddingLeft: '0.75rem', fontSize: '0.95rem' }}>株式投資とは</Link>
            <Link href="/knowledge/nisa" className="nav-link" onClick={() => setIsOpen(false)} style={{ paddingLeft: '0.75rem', fontSize: '0.95rem' }}>NISAとは</Link>
          </div>

          <div style={{ padding: '0.5rem 0', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: '800', color: 'var(--primary)', display: 'block', marginBottom: '0.4rem' }}>勉強会・個別相談</span>
            <Link href="/seminar" className="nav-link" onClick={() => setIsOpen(false)} style={{ paddingLeft: '0.75rem', fontSize: '0.95rem' }}>米国株式勉強会</Link>
            <Link href="/seminar/nisa" className="nav-link" onClick={() => setIsOpen(false)} style={{ paddingLeft: '0.75rem', fontSize: '0.95rem' }}>NISA初心者勉強会</Link>
            <Link href="/seminar/consultation" className="nav-link" onClick={() => setIsOpen(false)} style={{ paddingLeft: '0.75rem', fontSize: '0.95rem' }}>マンツーマン個別相談</Link>
          </div>

          <Link href="/blog" className="nav-link" onClick={() => setIsOpen(false)}>ブログ</Link>
          <Link href="/contact" className="nav-link" onClick={() => setIsOpen(false)}>お問い合わせ</Link>
        </nav>
      </div>
    </header>
  );
}
