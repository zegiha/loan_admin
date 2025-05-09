'use client'

import {getAdEditSummaryEntity, getBrokerSummaryEntityById} from '../../../../../prevEntities'
import {IAdEditTableRow} from '@/widgets/ad/const/adReq/adEdit/type'
import {useQuery} from '@tanstack/react-query'
import {useState} from 'react'

export default function useAdEdit() {
  const [target, setTarget] = useState<{id: string, companyName: string, editId: string} | null>(null)
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const queryReq = useQuery<Array<IAdEditTableRow>, Error>({
    queryKey: ['adEdit'],
    queryFn: async () => {
      const adEdit = await getAdEditSummaryEntity()
      const res: Array<IAdEditTableRow> = []

      for(let i = 0; i < adEdit.length; i++) {
        const user = await getBrokerSummaryEntityById(adEdit[i].userId)
        res.push({
          ...adEdit[i],
          ...user,
          detailFunc: () => {
            setTarget({...user, ...adEdit[i]})
            setIsOpen(true)
          }
        })
      }

      return res
    },
  })

  return {
    target, setTarget,
    isOpen, setIsOpen,
    ...queryReq,
  }
}