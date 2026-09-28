import Link from 'next/link';
import { ArrowRight, BookOpen, Users } from 'lucide-react';

export default function BeginnerCta() {
  return (
    <div className="beginner-cta glass-card" style={{ marginTop: '3rem', padding: '2rem', background: 'var(--bg-white)', borderRadius: '16px', border: '2px solid var(--primary)' }}>
      <h3 style={{ fontSize: '1.2rem', fontWeight: '900', color: 'var(--primary-dark)', margin: '0 0 1rem 0' }}>
        これから米国株を始める方へ
      </h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <Link href="/blog/us-stock-beginners-guide" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none', color: 'var(--text-main)', background: '#f8f9fa', padding: '1rem', borderRadius: '12px', transition: 'all 0.2s ease' }} className="hover:bg-gray-100">
          <BookOpen size={20} color="var(--primary)" />
          <span style={{ fontWeight: 'bold' }}>米国株の始め方 完全ガイド（初心者向け）</span>
          <ArrowRight size={16} style={{ marginLeft: 'auto', color: 'var(--primary)' }} />
        </Link>
        <Link href="/seminar" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none', color: 'var(--text-main)', background: '#f8f9fa', padding: '1rem', borderRadius: '12px', transition: 'all 0.2s ease' }} className="hover:bg-gray-100">
          <Users size={20} color="var(--primary)" />
          <span style={{ fontWeight: 'bold' }}>少人数で直接学びたい方は → 米国株セミナーの日程</span>
          <ArrowRight size={16} style={{ marginLeft: 'auto', color: 'var(--primary)' }} />
        </Link>
      </div>
    </div>
  );
}
