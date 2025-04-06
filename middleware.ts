import {NextRequest, NextResponse} from 'next/server'

export default async function middleware(req: NextRequest) {
  return loginCheck(req)
}

function loginCheck(req: NextRequest) {
  const {pathname} = req.nextUrl
  if(pathname === '/login') return NextResponse.next()
  const refreshToken = req.cookies.get('refreshToken')
  if(refreshToken === undefined) return NextResponse.redirect(new URL('/login', req.url))
  if(false) {
    // TODO refreshToken 만료 체크 및 만료 시 로그인으로 이동
  }

  const accessToken = req.cookies.get('accessToken')
  if(false) {
    // TODO accessToken 만료 체크 및 만료 시 재요청
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next|favicon.ico|login).*)'],
}
