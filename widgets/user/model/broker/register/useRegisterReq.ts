'use client'

import getRegisterReq from '@/widgets/user/api/broker/register/getRegisterReq'
import {IRegisterReqTableRow} from '@/widgets/user/const/broker/register/type'
import {useEffect, useState} from 'react'

export default function useRegisterReq() {
  const [showRow, setShowRow] = useState(10)
  const [data, setData] = useState<Array<IRegisterReqTableRow> | null>(null)
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [registerReqId, setRegisterReqId] = useState<string | null>(null)

  const fetching = () => {
    const newData = getRegisterReq()
    setData(() => {
      const res: Array<IRegisterReqTableRow> = []
      newData.forEach(v => {
        res.push({
          ...v,
          moreInfoFunc: () => {
            setRegisterReqId(v.userId)
            setIsOpen(true)
          }
        })
      })
      return [...res]
    })
  }

  useEffect(() => {
    fetching()
  }, [])

  return {
    showRow, setShowRow,
    data, setData,
    isOpen, setIsOpen,
    registerReqId, setRegisterReqId,
    fetching,
  }
}