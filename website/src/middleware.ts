import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Allow access to password page, API routes, and static assets
  if (
    pathname.startsWith('/password') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/_next') ||
    pathname.startsWith('/favicon') ||
    pathname === '/robots.txt' ||
    pathname.match(/\.(png|jpg|jpeg|gif|svg|ico|webp|txt)$/)
  ) {
    return NextResponse.next()
  }

  // Check for access cookie
  const hasAccess = request.cookies.get('site_access')?.value === 'granted'

  if (!hasAccess) {
    return NextResponse.redirect(new URL('/password', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
}

