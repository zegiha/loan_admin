'use client'

import {BrokerEntitySummary, getAdRegisterSummaryEntity, getBrokerSummaryEntityById} from '../../../../../prevEntities'
import {IAdRegisterTableRow} from '@/widgets/ad/const/adReq/adRegister/type'
import {useQuery} from '@tanstack/react-query'
import {useState} from 'react'

export default function() {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [target, setTarget] = useState<BrokerEntitySummary & {adReqId: string} | null>(null)

  const queryReq = useQuery<Array<IAdRegisterTableRow>, Error>({
    queryKey: ['adRegisterSummary'],
    queryFn: async () => {
      const adRegisterSummary = await getAdRegisterSummaryEntity()
      const res: Array<IAdRegisterTableRow> = []
      for(let i = 0; i < adRegisterSummary.length; i++) {
        const userInfo = await getBrokerSummaryEntityById(adRegisterSummary[i].userId)
        res.push({
          ...adRegisterSummary[i],
          ...userInfo,
          detailFunc: () => {
            setTarget({...userInfo, ...adRegisterSummary[i]})
            setIsOpen(true)
          }
        })
      }
      return res
    },
  })

  return {
    isOpen, setIsOpen,
    target, setTarget,
    ...queryReq,
  }
}