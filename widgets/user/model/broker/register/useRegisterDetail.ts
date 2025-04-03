'use client'

import {formatDateDotYmd} from '@/shared/lib'
import getRegisterReqById from '@/widgets/user/api/broker/register/getRegisterReqById'
import {
  RegisterReqEntity,
  registerReqEntityKeyList,
  registerReqEntityLabel, TRegisterReqEntityKey
} from '@/widgets/user/const/broker/register/registerEntity'
import {useEffect, useState} from 'react'

export default function useRegisterDetail(registerReqId: string | null) {
  const [data, setData] = useState<RegisterReqEntity | null>(null)
  const fetching = () => {
    if(registerReqId === null)
      throw new Error('상세조회용 아이디가 없습니다')
    else
      setData(getRegisterReqById(registerReqId))
  }

  useEffect(() => {
    fetching()
  }, [registerReqId])

  const processRegisterDetailData = (data: RegisterReqEntity | null):
  Array<{label: string, contents: string}> => {
    if(data === null) return []
    const res: Array<{label: string, contents: string}> = []
    registerReqEntityKeyList.forEach((v: TRegisterReqEntityKey) => {
      res.push({label: registerReqEntityLabel[v] ?? '', contents: typeof data[v] === 'string' ? data[v] : formatDateDotYmd(data[v])})
    })
    return res
  }

  const rejectFunc = () => {
    // TODO API 연결
    console.log('reject')
  }
  const approveFunc = () => {
    // TODO API 연결
    console.log('approve')
  }

  return {
    data, setData,
    processRegisterDetailData,
    approveFunc,
    rejectFunc,
  }
}