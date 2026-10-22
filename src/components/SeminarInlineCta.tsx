import type { ReactNode } from 'react';
import { ArrowRight, CalendarDays, Clock, MapPin, Users, Coins } from 'lucide-react';
import { getSeminarForPath, type SeminarType } from '@/lib/seminar-routing';
import { getNextSessionMap } from '@/lib/next-seminar';
import CtaTrackLink from '@/components/CtaTrackLink';

interface SeminarInlineCtaProps {
  /** 表示しているページのパス（例：/blog/nisa-us-stock-tax-free） */
  pathname: string;
}

const ib = { display: 'inline-block' as const, whiteSpace: 'nowrap' as const };

/** 見出し（「か」「す」などが1文字だけ次の行に落ちないよう語句ごとに inline-block 化） */
function renderHeading(type: SeminarType): ReactNode {
  if (type === 'cashflow_game') {
    return (
      <>
        <span style={ib}>この考え方を、</span>
        <span style={ib}>ゲームで体験してみませんか</span>
      </>
    );
  }
  if (type === 'nisa') {
    return (
      <>
        <span style={ib}>新NISAの始め方を、</span>
        <span style={ib}>少人数で直接学べます</span>
      </>
    );
  }
  return (
    <>
      <span style={ib}>この記事の内容を、</span>
      <span style={ib}>少人数で直接学べます</span>
    </>
  );
}

/** 1行説明（「です」などが1文字だけ落ちないよう語句ごとに inline-block 化） */
function renderDescription(type: SeminarType): ReactNode {
  if (type === 'cashflow_game') {
    return (
      <>
        <span style={ib}>ボードゲームで遊びながら、</span>
        <span style={ib}>お金の流れを学ぶ</span>
        <span style={ib}>2時間の体験会です</span>
      </>
    );
  }
  return (
    <>
      <span style={ib}>初心者向け・</span>
      <span style={ib}>少人数制・</span>
      <span style={ib}>金融商品の勧誘はありません</span>
    </>
  );
}

/** 会場名・かっこ書き（「貸し会議室」「（定員4名まで）」など）が途中で改行されないようにする */
function renderKeepTogether(text: string): ReactNode {
  if (!text) return null;
  const tokens = text
    .split(/(貸し会議室|（[^）]+）|\([^)]+\)|\s+)/g)
    .filter((t) => t.length > 0);
  return tokens.map((token, idx) => {
    if (/^\s+$/.test(token)) return ' ';
    return (
      <span key={idx} style={ib}>
        {token}
      </span>
    );
  });
}

/**
 * 記事内のセミナー案内（本文の2つ目のH2の直前に1つだけ置く）
 * 案内先は getSeminarForPath で記事のテーマから判定し、次回の開催回は日程データから表示する
 */
export default async function SeminarInlineCta({ pathname }: SeminarInlineCtaProps) {
  const seminar = getSeminarForPath(pathname);
  const nextMap = await getNextSessionMap();
  const next = nextMap[seminar.type];

  const rowStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    wordBreak: 'keep-all' as const,
    overflowWrap: 'anywhere' as const,
  };

  return (
    <aside
      className="seminar-inline-cta"
      aria-label={`${seminar.name}のご案内`}
      style={{
        margin: '2.5rem 0',
        padding: '1.25rem 1.1rem 1.35rem',
        background: 'var(--bg-warm)',
        border: '1px solid rgba(176, 58, 46, 0.18)',
        borderLeft: '4px solid var(--primary)',
        borderRadius: '14px',
        lineHeight: 1.65,
      }}
    >
      <p style={{ margin: '0 0 0.3rem 0', fontSize: '0.8rem', fontWeight: 800, color: 'var(--primary)', letterSpacing: '0.04em' }}>
        {seminar.name}のご案内
      </p>
      <p
        style={{
          margin: '0 0 0.45rem 0',
          fontSize: 'clamp(0.95rem, 4.2vw, 1.12rem)',
          fontWeight: 900,
          color: 'var(--primary-dark)',
          lineHeight: 1.5,
          wordBreak: 'keep-all',
          overflowWrap: 'anywhere',
          textWrap: 'balance',
        }}
      >
        {renderHeading(seminar.type)}
      </p>
      <p
        style={{
          margin: '0 0 1rem 0',
          fontSize: 'clamp(0.84rem, 3.6vw, 0.9rem)',
          color: 'var(--text-muted)',
          lineHeight: 1.6,
          wordBreak: 'keep-all',
          overflowWrap: 'anywhere',
          textWrap: 'pretty',
        }}
      >
        {renderDescription(seminar.type)}
      </p>

      {next ? (
        <div
          style={{
            background: 'white',
            borderRadius: '10px',
            padding: '0.8rem 0.85rem',
            marginBottom: '1.1rem',
            fontSize: 'clamp(0.84rem, 3.6vw, 0.9rem)',
            color: 'var(--text-main)',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.4rem',
          }}
        >
          <div style={rowStyle}>
            <CalendarDays size={16} color="var(--primary)" style={{ flexShrink: 0 }} />
            <span style={ib}>
              <span style={{ fontWeight: 800, color: 'var(--primary)', marginRight: '0.35rem' }}>次回</span>
              <span style={{ fontWeight: 800 }}>{next.dateLabel}</span>
            </span>
          </div>
          {next.timeLabel && (
            <div style={rowStyle}>
              <Clock size={16} color="var(--primary)" style={{ flexShrink: 0 }} />
              <span style={ib}>{next.timeLabel}</span>
            </div>
          )}
          {next.venue && (
            <div style={rowStyle}>
              <MapPin size={16} color="var(--primary)" style={{ flexShrink: 0 }} />
              <span>{renderKeepTogether(next.venue)}</span>
            </div>
          )}
          {next.capacityLabel && (
            <div style={rowStyle}>
              <Users size={16} color="var(--primary)" style={{ flexShrink: 0 }} />
              <span>{renderKeepTogether(next.capacityLabel)}</span>
            </div>
          )}
          {next.feeLabel && (
            <div style={rowStyle}>
              <Coins size={16} color="var(--primary)" style={{ flexShrink: 0 }} />
              <span style={{ ...ib, fontWeight: 700 }}>{renderKeepTogether(next.feeLabel)}</span>
            </div>
          )}
        </div>
      ) : (
        <p style={{ margin: '0 0 1.1rem 0', fontSize: '0.9rem', color: 'var(--text-main)', background: 'white', borderRadius: '10px', padding: '0.8rem 1rem' }}>
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
          padding: '0.75rem 1.6rem',
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
