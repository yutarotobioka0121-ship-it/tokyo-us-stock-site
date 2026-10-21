import { ArrowRight, CalendarDays, MapPin, Users } from 'lucide-react';
import { getSeminarForPath } from '@/lib/seminar-routing';
import { getNextSessionMap } from '@/lib/next-seminar';
import CtaTrackLink from '@/components/CtaTrackLink';

interface SeminarInlineCtaProps {
  /** 表示しているページのパス（例：/blog/nisa-us-stock-tax-free） */
  pathname: string;
}

/**
 * 記事内のセミナー案内（本文の2つ目のH2の直前に1つだけ置く）
 * 案内先は getSeminarForPath で記事のテーマから判定し、次回の開催回は日程データから表示する
 */
export default async function SeminarInlineCta({ pathname }: SeminarInlineCtaProps) {
  const seminar = getSeminarForPath(pathname);
  const nextMap = await getNextSessionMap();
  const next = nextMap[seminar.type];

  const nowrap = { whiteSpace: 'nowrap' as const };

  return (
    <aside
      className="seminar-inline-cta"
      aria-label={`${seminar.name}のご案内`}
      style={{
        margin: '2.5rem 0',
        padding: '1.5rem 1.5rem 1.6rem',
        background: 'var(--bg-warm)',
        border: '1px solid rgba(176, 58, 46, 0.18)',
        borderLeft: '4px solid var(--primary)',
        borderRadius: '14px',
        lineHeight: 1.7,
      }}
    >
      <p style={{ margin: '0 0 0.3rem 0', fontSize: '0.8rem', fontWeight: 800, color: 'var(--primary)', letterSpacing: '0.04em' }}>
        {seminar.name}のご案内
      </p>
      <p style={{ margin: '0 0 0.4rem 0', fontSize: '1.15rem', fontWeight: 900, color: 'var(--primary-dark)', lineHeight: 1.5, wordBreak: 'keep-all', overflowWrap: 'anywhere' }}>
        {seminar.heading}
      </p>
      <p style={{ margin: '0 0 1rem 0', fontSize: '0.92rem', color: 'var(--text-muted)', wordBreak: 'keep-all', overflowWrap: 'anywhere' }}>
        {seminar.description}
      </p>

      {next ? (
        <div
          style={{
            background: 'white',
            borderRadius: '10px',
            padding: '0.9rem 1rem',
            marginBottom: '1.1rem',
            fontSize: '0.92rem',
            color: 'var(--text-main)',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.35rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
            <CalendarDays size={17} color="var(--primary)" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
            <span>
              <span style={{ fontWeight: 800, color: 'var(--primary)', marginRight: '0.4rem' }}>次回</span>
              <span style={{ ...nowrap, fontWeight: 800 }}>{next.dateLabel}</span>{' '}
              {next.timeLabel && <span style={nowrap}>{next.timeLabel}</span>}
            </span>
          </div>
          {next.venue && (
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
              <MapPin size={17} color="var(--primary)" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
              <span>{next.venue}</span>
            </div>
          )}
          {next.capacityFeeLabel && (
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
              <Users size={17} color="var(--primary)" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
              <span>{next.capacityFeeLabel}</span>
            </div>
          )}
        </div>
      ) : (
        <p style={{ margin: '0 0 1.1rem 0', fontSize: '0.92rem', color: 'var(--text-main)', background: 'white', borderRadius: '10px', padding: '0.8rem 1rem' }}>
          日程は近日公開予定です
        </p>
      )}

      <CtaTrackLink
        href={`${seminar.href}#schedule`}
        ctaLocation="inline"
        seminarType={seminar.type}
        className="btn btn-primary"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.4rem',
          padding: '0.75rem 1.8rem',
          borderRadius: '30px',
          fontWeight: 800,
          fontSize: '0.95rem',
          textDecoration: 'none',
          whiteSpace: 'nowrap',
        }}
      >
        日程を見て申し込む <ArrowRight size={16} />
      </CtaTrackLink>
    </aside>
  );
}
