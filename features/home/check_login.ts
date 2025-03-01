'use server'

import {cookies} from "next/headers";
import {redirect} from "next/navigation";

export default async function check_login() {
  const cookie_store = await cookies()
  const refresh_token = cookie_store.get('refresh_token')
  if(refresh_token) {
    console.log(refresh_token)
    // TODO access_token 요청하기
  } else {
    redirect('/login')
  }
}
