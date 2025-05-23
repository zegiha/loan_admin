'use client'

import { useAdsPrivateControllerFindAllWaitingExtend } from '@/entities/api/advertisement-private/advertisement-private'
import { IAdProlongation } from '@/widgets/ad/const/adReq/adProlongation/type'
import { useState } from 'react'

export default function useAdProlongation(limit: string) {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [targetId, setTargetId] = useState<string>('')

  const queryRes = useAdsPrivateControllerFindAllWaitingExtend({
    query: {
      select: v => {
        const prolongation = v

        const res: Array<IAdProlongation> = []
        for (let i = 0; i < prolongation.length; i++) {
          res.push({
            user_id: prolongation[i].user_id ?? '',
            company_id: prolongation[i].company_id ?? '',
            ad_types: prolongation[i].ad_types?.[0] ?? '',
            deposit_name: prolongation[i].deposit_name ?? '',
            deposit_fee: prolongation[i].deposit_fee ?? 0,
            permissionFunc: () => {
              setTargetId(prolongation[i].id)
              setIsOpen(true)
            },
          })
        }

        return res
      },
    },
  })

  return {
    isOpen,
    setIsOpen,
    targetId: targetId ?? '',
    setTargetId,
    ...queryRes,
  }
}
