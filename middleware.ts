import {userControllerProfile} from '@/test/tmp'
import {NextRequest, NextResponse} from 'next/server'

export default async function middleware(req: NextRequest) {
  // return loginCheck(req)
}

async function loginCheck(req: NextRequest) {
  const {pathname} = req.nextUrl
  try {
    // TODO 유저 로그인 체크
    await userControllerProfile()
    if(pathname === '/login' || pathname === '/') return NextResponse.redirect(new URL('/user', req.url))
    return NextResponse.next()
  } catch (e) {
    if(pathname !== '/login') return NextResponse.redirect(new URL('/login', req.url))
    else return NextResponse.next()
  }
}

export const config = {
  matcher: ['/((?!_next|favicon.ico).*)'],
}
