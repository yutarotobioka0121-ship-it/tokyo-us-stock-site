import { cache } from 'react';
import { getSessions, getCFGSchedule } from '@/lib/microcms';
import { getSessionStartDateTime, isSessionDeadlinePassed, formatSessionTime } from '@/lib/utils';
import type { SeminarType } from '@/lib/seminar-routing';

// 記事内の案内で使う「次回の開催回」の情報（サーバー専用）
export interface NextSessionInfo {
  /** 例：2026年10月25日(日) */
  dateLabel: string;
  /** 例：10/25（日）  ※固定バー用 */
  shortDateLabel: string;
  /** 例：19:00〜 / 13:00〜15:00 */
  timeLabel: string;
  /** 例：川崎駅周辺 カフェ / オンライン（Zoom） */
  venue: string;
  /** 例：参加費無料・少人数制（定員4名まで） */
  capacityFeeLabel: string;
}

export type NextSessionMap = Record<SeminarType, NextSessionInfo | null>;

// 記事ページは ISR（1時間）なので、日程データも1時間キャッシュで取得する
const REQUEST_INIT = { next: { revalidate: 3600 } };

// 米国株セミナー・NISA初心者セミナーは microCMS に定員・参加費の項目がないため固定文言
const FIXED_CAPACITY_FEE = '参加費無料・少人数制（定員4名まで）';

const WEEKDAYS = ['日', '月', '火', '水', '木', '金', '土'];

function jstParts(d: Date) {
  const jst = new Date(d.getTime() + 9 * 60 * 60 * 1000);
  return { y: jst.getUTCFullYear(), m: jst.getUTCMonth() + 1, day: jst.getUTCDate(), w: WEEKDAYS[jst.getUTCDay()] };
}

function isOpenStatus(status: string) {
  return status === 'open' || status === '募集開始' || status === '受付中';
}

function isNisaSession(s: any) {
  const typeArr = Array.isArray(s.type) ? s.type : [s.type];
  const categoryStr = String(s.category || s.title || '');
  const fullText = (typeArr.join(' ') + ' ' + (s.location || '') + ' ' + categoryStr).toLowerCase();
  return fullText.includes('nisa') || fullText.includes('ニーサ');
}

async function getNextStudySession(kind: 'us_stock' | 'nisa', sessions: any[]): Promise<NextSessionInfo | null> {
  const now = new Date();
  const candidates = sessions
    .filter((s) => (kind === 'nisa' ? isNisaSession(s) : !isNisaSession(s)))
    .filter((s) => {
      const status = Array.isArray(s.status) ? s.status[0] : s.status;
      if (!isOpenStatus(status)) return false;
      return !isSessionDeadlinePassed(s, now);
    })
    .map((s) => ({ s, start: getSessionStartDateTime(s.date, s.time || s.date) }))
    .filter(({ start }) => !isNaN(start.getTime()) && start > now)
    .sort((a, b) => a.start.getTime() - b.start.getTime());

  if (candidates.length === 0) return null;
  const { s, start } = candidates[0];
  const p = jstParts(start);
  const typeArr = Array.isArray(s.type) ? s.type : [s.type];
  const typeStr = typeArr.join(' ').toLowerCase();
  const isOnline = typeStr.includes('online') || typeStr.includes('オンライン');

  return {
    dateLabel: `${p.y}年${p.m}月${p.day}日(${p.w})`,
    shortDateLabel: `${p.m}/${p.day}（${p.w}）`,
    timeLabel: `${formatSessionTime(s.time || s.date)}〜`,
    venue: isOnline ? 'オンライン（Zoom）' : (s.location || '都内近郊').replace(/\u3000/g, ' '),
    capacityFeeLabel: FIXED_CAPACITY_FEE,
  };
}

async function getNextCfgEvent(): Promise<NextSessionInfo | null> {
  const events = await getCFGSchedule(REQUEST_INIT);
  const now = new Date();
  const candidates = events
    .filter((ev) => ev.status === 'open')
    .map((ev) => {
      const m = (ev.date || '').match(/(\d{4})年(\d{1,2})月(\d{1,2})日/);
      if (!m) return null;
      const y = parseInt(m[1], 10);
      const mo = parseInt(m[2], 10);
      const d = parseInt(m[3], 10);
      // 開始時刻（例：13:00〜15:00 の 13:00）。読めない場合はその日の終わりまでを今後扱いにする
      const tm = (ev.time || '').match(/(\d{1,2}):(\d{2})/);
      const hh = tm ? tm[1].padStart(2, '0') : '23';
      const mm = tm ? tm[2] : '59';
      const start = new Date(`${y}-${String(mo).padStart(2, '0')}-${String(d).padStart(2, '0')}T${hh}:${mm}:00+09:00`);
      return { ev, start, y, mo, d };
    })
    .filter((x): x is NonNullable<typeof x> => !!x && !isNaN(x.start.getTime()) && x.start > now)
    .sort((a, b) => a.start.getTime() - b.start.getTime());

  if (candidates.length === 0) return null;
  const { ev, start, y, mo, d } = candidates[0];
  const w = jstParts(start).w;
  const parts: string[] = [];
  if (ev.fee) parts.push(`参加費${ev.fee}`);
  if (ev.capacity) parts.push(`定員${ev.capacity}名`);

  return {
    dateLabel: `${y}年${mo}月${d}日(${w})`,
    shortDateLabel: `${mo}/${d}（${w}）`,
    timeLabel: ev.time || '',
    venue: ev.location || '',
    capacityFeeLabel: parts.join('・'),
  };
}

/** 3種類のセミナーそれぞれの「次回の開催回」をまとめて取得する */
export const getNextSessionMap = cache(async (): Promise<NextSessionMap> => {
  try {
    const [sessions, cfg] = await Promise.all([getSessions(REQUEST_INIT), getNextCfgEvent()]);
    const [usStock, nisa] = await Promise.all([
      getNextStudySession('us_stock', sessions),
      getNextStudySession('nisa', sessions),
    ]);
    return { us_stock: usStock, nisa, cashflow_game: cfg };
  } catch (e) {
    console.error('Failed to build next session map:', e);
    return { us_stock: null, nisa: null, cashflow_game: null };
  }
});
