const WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS = 5; // 5 requests per 10 minutes per IP

interface RateLimitEntry {
  timestamps: number[];
}

const ipStore = new Map<string, RateLimitEntry>();

export function getClientIp(request: Request): string {
  const forwardedFor = request.headers.get('x-forwarded-for');
  if (forwardedFor) {
    const firstIp = forwardedFor.split(',')[0]?.trim();
    if (firstIp) return firstIp;
  }
  const realIp = request.headers.get('x-real-ip')?.trim();
  if (realIp) return realIp;
  return 'unknown';
}

export function checkRateLimit(request: Request): {
  allowed: boolean;
  remaining: number;
  retryAfterSec: number;
} {
  const ip = getClientIp(request);
  const now = Date.now();
  const windowStart = now - WINDOW_MS;

  // Periodic cleanup when map grows
  if (ipStore.size > 1000) {
    for (const [key, entry] of ipStore.entries()) {
      const recent = entry.timestamps.filter((t) => t > windowStart);
      if (recent.length === 0) {
        ipStore.delete(key);
      } else {
        entry.timestamps = recent;
      }
    }
  }

  const existing = ipStore.get(ip) || { timestamps: [] };
  const recentTimestamps = existing.timestamps.filter((t) => t > windowStart);

  if (recentTimestamps.length >= MAX_REQUESTS) {
    const oldestInWindow = recentTimestamps[0];
    const retryAfterSec = Math.max(1, Math.ceil((oldestInWindow + WINDOW_MS - now) / 1000));
    ipStore.set(ip, { timestamps: recentTimestamps });
    return {
      allowed: false,
      remaining: 0,
      retryAfterSec,
    };
  }

  recentTimestamps.push(now);
  ipStore.set(ip, { timestamps: recentTimestamps });

  return {
    allowed: true,
    remaining: MAX_REQUESTS - recentTimestamps.length,
    retryAfterSec: 0,
  };
}

const EMAIL_REGEX = /^[^\s@<>;,\\"\r\n]+@[^\s@<>;,\\"\r\n]+\.[^\s@<>;,\\"\r\n]+$/;

export function sanitizeSingleLine(value: unknown, maxLen: number): string {
  if (typeof value !== 'string') return '';
  return value.replace(/[\r\n\0]/g, ' ').trim().slice(0, maxLen);
}

export function sanitizeMultiLine(value: unknown, maxLen: number): string {
  if (typeof value !== 'string') return '';
  return value.replace(/\0/g, '').trim().slice(0, maxLen);
}

export function isValidEmail(email: string): boolean {
  if (!email || email.length < 3 || email.length > 254) return false;
  return EMAIL_REGEX.test(email);
}
