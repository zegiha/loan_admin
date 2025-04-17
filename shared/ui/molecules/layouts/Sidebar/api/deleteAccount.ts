'use server'

import {cookies} from 'next/headers'

export default async function deleteAccount() {
  // TODO API 계정 삭제
  const cookieStore = await cookies()
  cookieStore.delete('refreshToken')
  cookieStore.delete('accessToken')
}