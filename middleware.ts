import {NextRequest, NextResponse} from 'next/server'

export default async function middleware(req: NextRequest) {
  return loginCheck(req)
}

function loginCheck(req: NextRequest) {
  const {pathname} = req.nextUrl
  const refreshToken = req.cookies.get('refreshToken')
  const isLogin = refreshToken !== undefined;
  // TODO refreshToken 만료 체크 및 만료 시 로그인으로 이동
  // TODO accessToken 만료 체크 및 만료 시 재요청


  if(!isLogin) {
    if(pathname !== '/login') return NextResponse.redirect(new URL('/login', req.url))
    else return NextResponse.next()
  } else {
    if(pathname === '/login' || pathname === '/') return NextResponse.redirect(new URL('/user', req.url))
    return NextResponse.next()
  }
}

export const config = {
  matcher: ['/((?!_next|favicon.ico).*)'],
}
