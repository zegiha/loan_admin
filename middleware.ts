import {NextRequest, NextResponse} from 'next/server'

export default async function middleware(req: NextRequest) {
  const {pathname} = req.nextUrl
  if(pathname === '/') return NextResponse.redirect(new URL('/user', req.url))
  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next|favicon.ico).*)'],
}
