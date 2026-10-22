import type { ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';
import { getSeminarForPath, type SeminarType } from '@/lib/seminar-routing';
import CtaTrackLink from '@/components/CtaTrackLink';

const ib = { display: 'inline-block' as const };

// 記事末尾のセミナー案内（免責文より前に置く）。案内先は記事のテーマで判定する
const FOOTER_TEXT: Record<SeminarType, { linkText: ReactNode; heading: ReactNode; body: ReactNode }> = {
  us_stock: {
    linkText: (
      <span>
        東京・神奈川の初心者向け米国株セミナー<span style={ib}>（無料）</span>
      </span>
    ),
    heading: (
      <>
        <span style={ib}>初心者向け米国株セミナー</span>
        <span style={ib}>開催中！</span>
      </>
    ),
    body: (
      <>
        <span style={ib}>定員4名の少人数制カフェスタイルで、</span>
        <span style={ib}>実践的な資産運用のコツを</span>
        <span style={ib}>質問しながら学べます。</span>
      </>
    ),
  },
  nisa: {
    linkText: (
      <span>
        東京・神奈川の初心者向けNISAセミナー<span style={ib}>（無料）</span>
      </span>
    ),
    heading: (
      <>
        <span style={ib}>初心者向けNISAセミナー</span>
        <span style={ib}>開催中！</span>
      </>
    ),
    body: (
      <>
        <span style={ib}>定員4名の少人数制カフェスタイルで、</span>
        <span style={ib}>新NISAの始め方を</span>
        <span style={ib}>質問しながら学べます。</span>
      </>
    ),
  },
  cashflow_game: {
    linkText: <span>遊びながらお金の考え方を学ぶキャッシュフローゲーム会</span>,
    heading: (
      <>
        <span style={ib}>キャッシュフローゲーム会 </span>
        <span style={ib}>開催中！</span>
      </>
    ),
    body: (
      <>
        <span style={ib}>ボードゲームで遊びながら、</span>
        <span style={ib}>お金の流れを学ぶ</span>
        <span style={ib}>2時間の体験会です。</span>
      </>
    ),
  },
};

interface SeminarFooterCtaProps {
  pathname: string;
  /** notion：Notion記事の「おすすめの勉強会・体験会」ボックス / static：固定記事の案内カード */
  variant: 'notion' | 'static';
}

export default function SeminarFooterCta({ pathname, variant }: SeminarFooterCtaProps) {
  const seminar = getSeminarForPath(pathname);
  const text = FOOTER_TEXT[seminar.type];
  const href = `${seminar.href}#schedule`;

  if (variant === 'notion') {
    return (
      <div className="glass-card seminar-footer-cta" style={{ marginTop: '2rem', marginBottom: '2rem', padding: '1.5rem', background: 'var(--bg-white)', borderRadius: '12px', border: '2px solid var(--primary)' }}>
        <h4 style={{ fontSize: '1.1rem', fontWeight: 'bold', color: 'var(--primary-dark)', marginBottom: '1rem', marginTop: 0, wordBreak: 'keep-all', overflowWrap: 'anywhere', textWrap: 'balance' }}>
          おすすめの勉強会・体験会
        </h4>
        <CtaTrackLink
          href={href}
          ctaLocation="footer"
          seminarType={seminar.type}
          style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', color: 'var(--primary)', fontWeight: 'bold', textDecoration: 'underline', wordBreak: 'keep-all', overflowWrap: 'anywhere' }}
        >
          {text.linkText} <ArrowRight size={16} style={{ flexShrink: 0 }} />
        </CtaTrackLink>
      </div>
    );
  }

  return (
    <div
      className="seminar-footer-cta"
      style={{
        marginTop: '3rem',
        background: 'var(--bg-warm)',
        borderRadius: '20px',
        padding: '2.2rem 1.5rem',
        textAlign: 'center',
        border: '1px solid rgba(176,58,46,0.15)',
      }}
    >
      <h3
        style={{
          fontSize: '1.25rem',
          fontWeight: 900,
          color: 'var(--primary-dark)',
          marginBottom: '0.75rem',
          wordBreak: 'keep-all',
          overflowWrap: 'anywhere',
          textWrap: 'balance',
        }}
      >
        {text.heading}
      </h3>
      <p
        style={{
          fontSize: '0.95rem',
          color: 'var(--text-muted)',
          lineHeight: 1.8,
          marginBottom: '1.5rem',
          wordBreak: 'keep-all',
          overflowWrap: 'anywhere',
          textWrap: 'pretty',
        }}
      >
        {text.body}
      </p>
      <CtaTrackLink
        href={href}
        ctaLocation="footer"
        seminarType={seminar.type}
        className="btn btn-primary"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.4rem',
          padding: '0.85rem 1.8rem',
          borderRadius: '50px',
          fontWeight: 800,
          fontSize: '0.95rem',
          textDecoration: 'none',
          whiteSpace: 'nowrap',
        }}
      >
        日程・詳細を見る <ArrowRight size={18} />
      </CtaTrackLink>
    </div>
  );
}
