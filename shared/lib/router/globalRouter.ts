'use client'

import {useRouter} from 'next/navigation'

export let globalRouter: ReturnType<typeof useRouter> | null = null

export function setGlobalRouter(router: ReturnType<typeof useRouter>) {
  globalRouter = router
}