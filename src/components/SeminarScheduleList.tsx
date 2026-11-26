'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import CtaTrackLink from '@/components/CtaTrackLink';

export interface ScheduleCardItem {
  id: string;
  formattedDate: string;
  formattedTime: string;
  isOnline: boolean;
  locationLabel: string;
  feeDisplay: string;
  isPast: boolean;
  isFull: boolean;
  isEnded: boolean;
}

interface SeminarScheduleListProps {
  items: ScheduleCardItem[];
  seminarType: 'us_stock' | 'nisa';
  applyButtonLabel?: string;
  emptyMessage: string;
}

const INITIAL_VISIBLE_COUNT = 5;

function renderCard(
  item: ScheduleCardItem,
  seminarType: 'us_stock' | 'nisa',
  applyButtonLabel: string
) {
  return (
    <div
      key={item.id}
      className="glass-card seminar-schedule-card"
      style={{
        padding: '1.1rem 1.25rem',
        borderRadius: '14px',
        border: '1px solid rgba(176, 58, 46, 0.15)',
        background: item.isPast ? '#f9fafb' : 'white',
        opacity: item.isPast ? 0.7 : 1,
        boxShadow: 'var(--shadow-soft)',
        textAlign: 'left',
      }}
    >
      <div className="seminar-schedule-card-body">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '0.5rem', marginBottom: '0.55rem' }}>
          <span
            className="badge badge-type"
            style={{
              fontSize: '0.78rem',
              padding: '0.22rem 0.7rem',
              background: item.isOnline ? 'var(--bg-warm)' : 'var(--primary)',
              color: item.isOnline ? 'var(--text-main)' : 'white',
              borderRadius: '20px',
              fontWeight: '800',
              whiteSpace: 'nowrap',
            }}
          >
            {item.isOnline ? 'オンライン' : '対面開催'}
          </span>
          {item.isEnded ? (
            <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontWeight: '700', whiteSpace: 'nowrap' }}>受付終了</span>
          ) : item.isFull ? (
            <span style={{ fontSize: '0.82rem', color: 'var(--primary)', fontWeight: '700', whiteSpace: 'nowrap' }}>満席</span>
          ) : (
            <span style={{ fontSize: '0.82rem', color: 'var(--accent)', fontWeight: '700', whiteSpace: 'nowrap' }}>受付中</span>
          )}
        </div>

        <h3 style={{ fontSize: '1.08rem', fontWeight: '800', color: 'var(--primary-dark)', margin: '0 0 0.45rem 0', lineHeight: '1.4' }}>
          {item.formattedDate} <span style={{ fontWeight: '700', whiteSpace: 'nowrap' }}>{item.formattedTime}</span>
        </h3>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem 1.2rem', fontSize: '0.9rem', color: 'var(--text-main)', lineHeight: '1.5' }}>
          <div>
            <span style={{ color: 'var(--primary)', fontWeight: '800' }}>場所：</span>
            <span style={{ color: 'var(--text-muted)' }}>{item.locationLabel}</span>
          </div>
          <div>
            <span style={{ color: 'var(--primary)', fontWeight: '800' }}>参加費：</span>
            <span style={{ fontWeight: '800', color: 'var(--primary)' }}>{item.feeDisplay}</span>
          </div>
        </div>
      </div>

      <div className="seminar-schedule-card-action">
        {item.isEnded ? (
          <button
            disabled
            className="btn btn-outline cursor-not-allowed"
            style={{
              width: '100%',
              padding: '0.65rem 1rem',
              fontSize: '0.9rem',
              background: '#f3f4f6',
              color: '#9ca3af',
              borderColor: '#d1d5db',
              justifyContent: 'center',
              whiteSpace: 'nowrap',
            }}
          >
            受付終了
          </button>
        ) : item.isFull ? (
          <button
            disabled
            className="btn btn-outline cursor-not-allowed"
            style={{
              width: '100%',
              padding: '0.65rem 1rem',
              fontSize: '0.9rem',
              opacity: 0.5,
              justifyContent: 'center',
              whiteSpace: 'nowrap',
            }}
          >
            満席
          </button>
        ) : (
          <CtaTrackLink
            href={`?event=${item.id}#apply-form-section`}
            ctaLocation="schedule"
            seminarType={seminarType}
            className="btn btn-primary"
            style={{
              width: '100%',
              padding: '0.65rem 1rem',
              fontSize: '0.9rem',
              justifyContent: 'center',
              fontWeight: '800',
              whiteSpace: 'nowrap',
            }}
          >
            {applyButtonLabel}
          </CtaTrackLink>
        )}
      </div>
    </div>
  );
}

export default function SeminarScheduleList({
  items,
  seminarType,
  applyButtonLabel = '申し込み',
  emptyMessage,
}: SeminarScheduleListProps) {
  const [expanded, setExpanded] = useState(false);

  if (!items || items.length === 0) {
    return (
      <div className="glass-card" style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-muted)' }}>
        {emptyMessage}
      </div>
    );
  }

  // 最初は受付中・開催前の回を開催日時の早い順に最大5回選ぶ（5回に満たない場合は残りの回から補完）
  const openIds = new Set<string>();
  const initialItems: ScheduleCardItem[] = [];
  for (const item of items) {
    if (initialItems.length >= INITIAL_VISIBLE_COUNT) break;
    if (!item.isEnded && !item.isFull) {
      initialItems.push(item);
      openIds.add(item.id);
    }
  }
  if (initialItems.length < INITIAL_VISIBLE_COUNT) {
    for (const item of items) {
      if (initialItems.length >= INITIAL_VISIBLE_COUNT) break;
      if (!openIds.has(item.id)) {
        initialItems.push(item);
        openIds.add(item.id);
      }
    }
  }
  const restItems = items.filter((item) => !openIds.has(item.id));

  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
        {initialItems.map((item) => renderCard(item, seminarType, applyButtonLabel))}
      </div>

      {restItems.length > 0 && (
        <>
          <div
            style={{
              display: expanded ? 'flex' : 'none',
              flexDirection: 'column',
              gap: '0.85rem',
              marginTop: '0.85rem',
            }}
            aria-hidden={!expanded}
          >
            {restItems.map((item) => renderCard(item, seminarType, applyButtonLabel))}
          </div>

          <div style={{ marginTop: '1.25rem', textAlign: 'center' }}>
            <button
              type="button"
              onClick={() => setExpanded((prev) => !prev)}
              aria-expanded={expanded}
              className="btn btn-outline"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.4rem',
                padding: '0.75rem 1.5rem',
                fontSize: '0.92rem',
                fontWeight: '800',
                borderRadius: '30px',
                cursor: 'pointer',
                background: 'white',
              }}
            >
              {expanded ? (
                <>
                  日程を閉じる <ChevronUp size={18} />
                </>
              ) : (
                <>
                  すべての日程を見る（全{items.length}回） <ChevronDown size={18} />
                </>
              )}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
