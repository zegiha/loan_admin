'use server'

import axios from 'axios'
import { cookies } from 'next/headers'

export default async function axiosWithToken() {
  const cookieStore = await cookies()
  const accessToken = cookieStore.get('accessToken')?.value

  if (!accessToken) {
    throw new Error('Authentication token not found')
  }

   return axios.create({
    baseURL: process.env.BASE_URL,
    headers: {
      'Authorization': `Bearer ${accessToken}`
    }
  })
}
