'use client'

import {getInquirySummaryEntity, InquirySummaryEntity} from '@/entities'
import {IInquiryTableRow} from '@/widgets/inquiry/const/type'
import {useQuery} from '@tanstack/react-query'
import {useState} from 'react'

export default function useInquiry() {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [targetId, setTargetId] = useState<string | null>(null)

  const queryRes = useQuery<Array<InquirySummaryEntity>, Error, Array<IInquiryTableRow>>({
    queryKey: ['inquiry'],
    queryFn: getInquirySummaryEntity,
    select: v => {
      const res: Array<IInquiryTableRow> = []
      v.forEach(v => {
        res.push({
          ...v,
          detailFunc: () => {
            setTargetId(v.inquiryId)
            setIsOpen(true)
          }
        })
      })
      return res
    }
  })

  return {
    isOpen, setIsOpen,
    targetId, setTargetId,
    ...queryRes,
  }
}