'use server'

import {cookies} from "next/headers";
import {redirect} from "next/navigation";

export default async function login_action(
  id: string,
  password: string
) {
  // TODO refreshToken 및 로그인 요청
  const refreshToken = 'testToken'

  // TODO accessToken 요청
  const accessToken = 'testToken'

  const cookieStore = await cookies()
  cookieStore.set('refreshToken', refreshToken, {
    httpOnly: true,
    maxAge: 60*60*24*30
  })
  cookieStore.set('accessToken', accessToken, {
    httpOnly: true,
    maxAge: 60*60*24
  })

  redirect('/user')
}
