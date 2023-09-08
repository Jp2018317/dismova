import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
import { NextResponse } from 'next/server';

import type { NextRequest } from 'next/server';
import { ROUTES } from '@/config';

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  // if user is signed in and the current path is / redirect the user to /account
  if (user && req.nextUrl.pathname === ROUTES.auth.login) {
    return NextResponse.redirect(new URL(ROUTES.root, req.url));
  }

  if (user && req.nextUrl.pathname === ROUTES.auth.signup) {
    return NextResponse.redirect(new URL(ROUTES.root, req.url));
  }

  return res;
}

export const config = {
  matcher: ['/', '/auth/:path*'],
};
