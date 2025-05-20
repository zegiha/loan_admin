'use client'

import { IAdEditTableRow } from '@/widgets/ad/const/adReq/adEdit/type'
import { useState } from 'react'
import { useAdsPrivateControllerFindAllWaitingUpdate } from '@/entities/api/advertisement-private/advertisement-private'

export default function useAdEdit(limit: string) {
  const [target, setTarget] = useState<string | null>(null)
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const queryReq = useAdsPrivateControllerFindAllWaitingUpdate({
    query: {
      select: v => {
        const res: Array<IAdEditTableRow> = []
        v.forEach(v => {
          res.push({
            id: v.user_id ?? '',
            companyName: v.company_id ?? '',
            adName: v.ad_types?.[0] ?? '',
            detailFunc: () => {
              setTarget(v.id ?? '')
              setIsOpen(true)
            },
            // editReqDate:
          })
        })
        return res
      },
    },
  })

  return {
    target,
    setTarget,
    isOpen,
    setIsOpen,
    ...queryReq,
  }
}
