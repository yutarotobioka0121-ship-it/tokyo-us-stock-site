'use client';

import Link from 'next/link';
import type { CSSProperties, ReactNode } from 'react';
import type { SeminarType } from '@/lib/seminar-routing';

export type CtaLocation = 'inline' | 'sticky' | 'footer' | 'schedule';

/** GA4 にセミナー案内のクリックを送る */
export function sendCtaClick(ctaLocation: CtaLocation, seminarType: SeminarType) {
  try {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'cta_click', {
        cta_location: ctaLocation,
        seminar_type: seminarType,
        page_path: window.location.pathname,
      });
    }
  } catch {
    // 計測の失敗で画面遷移を止めない
  }
}

interface CtaTrackLinkProps {
  href: string;
  ctaLocation: CtaLocation;
  seminarType: SeminarType;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}

/** クリック時に cta_click を送るリンク */
export default function CtaTrackLink({ href, ctaLocation, seminarType, className, style, children }: CtaTrackLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    sendCtaClick(ctaLocation, seminarType);

    if (
      typeof window !== 'undefined' &&
      href.startsWith('?event=') &&
      !e.metaKey &&
      !e.ctrlKey &&
      !e.shiftKey &&
      !e.altKey
    ) {
      e.preventDefault();
      const [queryPart, hashPart] = href.split('#');
      const eventId = new URLSearchParams(queryPart).get('event') || '';
      window.history.replaceState(null, '', `${window.location.pathname}${queryPart}${hashPart ? `#${hashPart}` : ''}`);
      window.dispatchEvent(new CustomEvent('seminar-select-event', { detail: eventId }));
      if (hashPart) {
        const targetEl = document.getElementById(hashPart);
        if (targetEl) {
          targetEl.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <Link href={href} className={className} style={style} onClick={handleClick}>
      {children}
    </Link>
  );
}
