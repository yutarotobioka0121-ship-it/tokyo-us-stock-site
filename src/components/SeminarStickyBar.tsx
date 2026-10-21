'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { X, ArrowRight } from 'lucide-react';
import { getSeminarForPath } from '@/lib/seminar-routing';
import type { NextSessionMap } from '@/lib/next-seminar';
import CtaTrackLink from '@/components/CtaTrackLink';

const DISMISS_KEY = 'seminarStickyBarDismissed';
const MOBILE_QUERY = '(max-width: 767.98px)';
const SCROLL_RATIO = 0.25;

/** 固定バーを出すページ：/blog/[slug]（記事）と /knowledge 配下のみ */
function isTargetPath(pathname: string) {
  if (/^\/knowledge(\/.*)?$/.test(pathname)) return true;
  // /blog（一覧）や /blog/page/2 は対象外。/blog/<slug> の記事のみ
  return /^\/blog\/[^/]+\/?$/.test(pathname) && !/^\/blog\/page\/?$/.test(pathname);
}

function readDismissed() {
  try {
    return window.sessionStorage.getItem(DISMISS_KEY) === '1';
  } catch {
    return false;
  }
}

function writeDismissed() {
  try {
    window.sessionStorage.setItem(DISMISS_KEY, '1');
  } catch {
    // 保存できない環境では、このページ表示中だけ閉じる
  }
}

export default function SeminarStickyBar({ nextMap }: { nextMap: NextSessionMap }) {
  const pathname = usePathname() || '';
  const [isMobile, setIsMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dismissed, setDismissed] = useState(true); // 初期描画では出さない（読み込み後に判定）
  const barRef = useRef<HTMLDivElement>(null);

  const target = isTargetPath(pathname);

  // 画面幅と、閉じた記録の判定
  useEffect(() => {
    setDismissed(readDismissed());
    const mq = window.matchMedia(MOBILE_QUERY);
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener?.('change', update);
    return () => mq.removeEventListener?.('change', update);
  }, []);

  // 25% スクロールしたら表示（body が overflow:auto でスクロールする場合と window スクロールの両方に対応）
  useEffect(() => {
    setScrolled(false);
    if (!target) return;
    const onScroll = (e?: Event) => {
      const doc = document.documentElement;
      const body = document.body;

      const winMax = doc.scrollHeight - window.innerHeight;
      const winRatio = winMax > 0 ? window.scrollY / winMax : 0;

      const bodyMax = body ? body.scrollHeight - body.clientHeight : 0;
      const bodyRatio = bodyMax > 0 ? body.scrollTop / bodyMax : 0;

      const docMax = doc.scrollHeight - doc.clientHeight;
      const docRatio = docMax > 0 ? doc.scrollTop / docMax : 0;

      let targetRatio = 0;
      if (e?.target instanceof HTMLElement) {
        const el = e.target;
        const elMax = el.scrollHeight - el.clientHeight;
        if (elMax > 100) {
          targetRatio = el.scrollTop / elMax;
        }
      }

      const contentEl = document.querySelector('main, article, .post-detail, .knowledge-page');
      let rectRatio = 0;
      if (contentEl) {
        const rect = contentEl.getBoundingClientRect();
        const rectMax = rect.height - window.innerHeight;
        if (rectMax > 0) {
          rectRatio = -rect.top / rectMax;
        }
      }

      const ratio = Math.max(winRatio, bodyRatio, docRatio, targetRatio, rectRatio);
      if (ratio >= SCROLL_RATIO) setScrolled(true);
    };
    onScroll();
    document.addEventListener('scroll', onScroll, { capture: true, passive: true });
    window.addEventListener('scroll', onScroll, { passive: true });
    document.body?.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      document.removeEventListener('scroll', onScroll, { capture: true });
      window.removeEventListener('scroll', onScroll);
      document.body?.removeEventListener('scroll', onScroll);
    };
  }, [pathname, target]);

  const visible = target && isMobile && scrolled && !dismissed;

  // 表示中は本文の最後がバーで隠れないよう、同じ高さの余白を入れる
  useEffect(() => {
    if (!visible || !barRef.current) return;
    const el = barRef.current;
    const apply = () => {
      document.body.style.paddingBottom = `${el.offsetHeight}px`;
    };
    apply();
    const ro = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(apply) : null;
    ro?.observe(el);
    return () => {
      ro?.disconnect();
      document.body.style.paddingBottom = '';
    };
  }, [visible]);

  if (!visible) return null;

  const seminar = getSeminarForPath(pathname);
  const next = nextMap[seminar.type];
  const label = next ? `次回 ${next.shortDateLabel}${seminar.name}` : `${seminar.name}の日程を見る`;

  return (
    <div
      ref={barRef}
      className="seminar-sticky-bar"
      style={{
        position: 'fixed',
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 900,
        background: 'white',
        borderTop: '1px solid rgba(176, 58, 46, 0.2)',
        boxShadow: '0 -4px 16px rgba(0, 0, 0, 0.08)',
        paddingBottom: 'env(safe-area-inset-bottom, 0px)',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.6rem 0.6rem 0.6rem 1rem' }}>
        <CtaTrackLink
          href={`${seminar.href}#schedule`}
          ctaLocation="sticky"
          seminarType={seminar.type}
          style={{
            flex: 1,
            minWidth: 0,
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            textDecoration: 'none',
            color: 'var(--primary-dark)',
            fontWeight: 800,
            fontSize: '0.88rem',
          }}
        >
          <span style={{ flex: 1, minWidth: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{label}</span>
          {next && (
            <span
              style={{
                flexShrink: 0,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.2rem',
                background: 'var(--primary)',
                color: 'white',
                borderRadius: '20px',
                padding: '0.4rem 0.8rem',
                fontSize: '0.82rem',
                whiteSpace: 'nowrap',
              }}
            >
              日程を見る <ArrowRight size={14} />
            </span>
          )}
          {!next && <ArrowRight size={16} style={{ flexShrink: 0, color: 'var(--primary)' }} />}
        </CtaTrackLink>
        <button
          type="button"
          aria-label="閉じる"
          onClick={() => {
            writeDismissed();
            setDismissed(true);
          }}
          style={{
            flexShrink: 0,
            width: '36px',
            height: '36px',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'transparent',
            border: 'none',
            color: 'var(--text-muted)',
            cursor: 'pointer',
            padding: 0,
          }}
        >
          <X size={20} />
        </button>
      </div>
    </div>
  );
}
