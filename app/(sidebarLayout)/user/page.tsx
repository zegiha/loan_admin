'use client'

import {useAuth} from '@/shared/model'
import {Divider} from '@/shared/ui/atoms'
import {
  Admin,
  Broker
} from '@/widgets/user'
import {useEffect} from 'react'

export default function Page() {
  const {data, setData} = useAuth()

  useEffect(() => {
    if(data === null) {
      setData()
    }
  }, [])

  return (
    <>
      <Broker/>
      {data !== null && data.authority === 'SUPER' && (
        <>
          <Divider/>
          <Admin/>
        </>
      )}
    </>
  )
}
