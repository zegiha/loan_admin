'use server'

import {cookies} from "next/headers";
import {redirect} from "next/navigation";

export default async function login_action(
  id: string,
  password: string
) {
  const cookie_store = await cookies()
  cookie_store.set('refresh_token', 'test_token')
  redirect('/')
}
