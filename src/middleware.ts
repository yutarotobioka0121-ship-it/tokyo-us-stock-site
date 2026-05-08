import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const host = request.headers.get('host');
  
  // 旧Vercelドメインからのアクセスの場合、厳密な 301 (Moved Permanently) でリダイレクトする
  if (host === 'tokyo-us-stock-site.vercel.app') {
    const newUrl = new URL(request.nextUrl.pathname + request.nextUrl.search, 'https://tokyo-us-stock.com');
    return NextResponse.redirect(newUrl, 301);
  }

  return NextResponse.next();
}

export const config = {
  // すべてのパスでミドルウェアを実行する
  matcher: '/:path*',
};
