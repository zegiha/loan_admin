'use client'

import {getAdProlongationEntity, getBrokerSummaryEntityById} from '../../../../../prevEntities'
import {IAdProlongation} from '@/widgets/ad/const/adReq/adProlongation/type'
import {useQuery} from '@tanstack/react-query'
import {useState} from 'react'

export default function useAdProlongation() {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [targetId, setTargetId] = useState<string | null>(null)

  const queryRes = useQuery<Array<IAdProlongation>, Error>({
    queryKey: ['adProlongation'],
    queryFn: async () => {
      const prolongation = await getAdProlongationEntity()

      const res: Array<IAdProlongation> = []
      for(let i = 0; i < prolongation.length; i++) {
        const user = await getBrokerSummaryEntityById(prolongation[i].userId)
        res.push({
          ...prolongation[i],
          ...user,
          permissionFunc: () => {
            setTargetId(prolongation[i].prolongationId)
            setIsOpen(true)
          }
        })
      }

      return res
    }
  })

  return {
    isOpen, setIsOpen,
    targetId, setTargetId,
    ...queryRes,
  }
}