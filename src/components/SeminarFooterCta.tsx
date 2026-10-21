import { ArrowRight } from 'lucide-react';
import { getSeminarForPath, type SeminarType } from '@/lib/seminar-routing';
import CtaTrackLink from '@/components/CtaTrackLink';

// 記事末尾のセミナー案内（免責文より前に置く）。案内先は記事のテーマで判定する
const FOOTER_TEXT: Record<SeminarType, { linkText: string; heading: string; body: string; button: string }> = {
  us_stock: {
    linkText: '東京・川崎の初心者向け米国株セミナー（無料）',
    heading: '初心者向け米国株セミナー開催中！',
    body: '定員4名の少人数制カフェスタイルで、実践的な資産運用のコツを質問しながら学べます。',
    button: 'セミナーの日程・詳細を見る',
  },
  nisa: {
    linkText: '東京・川崎の初心者向けNISAセミナー（無料）',
    heading: '初心者向けNISAセミナー開催中！',
    body: '定員4名の少人数制カフェスタイルで、新NISAの始め方を質問しながら学べます。',
    button: 'セミナーの日程・詳細を見る',
  },
  cashflow_game: {
    linkText: '遊びながらお金の考え方を学ぶキャッシュフローゲーム会',
    heading: 'キャッシュフローゲーム会 開催中！',
    body: 'ボードゲームで遊びながら、お金の流れを学ぶ2時間の体験会です。',
    button: '体験会の日程・詳細を見る',
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
        <h4 style={{ fontSize: '1.1rem', fontWeight: 'bold', color: 'var(--primary-dark)', marginBottom: '1rem', marginTop: 0 }}>
          おすすめの勉強会・体験会
        </h4>
        <CtaTrackLink
          href={href}
          ctaLocation="footer"
          seminarType={seminar.type}
          style={{ display: 'inline-flex', alignItems: 'center', color: 'var(--primary)', fontWeight: 'bold', textDecoration: 'underline' }}
        >
          {text.linkText} <ArrowRight size={16} style={{ marginLeft: '4px' }} />
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
        padding: '2.5rem 2rem',
        textAlign: 'center',
        border: '1px solid rgba(176,58,46,0.15)',
      }}
    >
      <h3 style={{ fontSize: '1.3rem', fontWeight: 900, color: 'var(--primary-dark)', marginBottom: '0.75rem', wordBreak: 'keep-all', overflowWrap: 'anywhere' }}>
        {text.heading}
      </h3>
      <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
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
          gap: '0.5rem',
          padding: '0.9rem 2.2rem',
          borderRadius: '50px',
          fontWeight: 800,
          fontSize: '1rem',
          textDecoration: 'none',
        }}
      >
        {text.button} <ArrowRight size={18} />
      </CtaTrackLink>
    </div>
  );
}
