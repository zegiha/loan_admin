'use client'

import {useContactControllerFindAll} from '@/entities/api/contact/contact'
import {InquiryEntity} from '@/prevEntities'
import {IInquiryTableRow} from '@/widgets/inquiry/const/type'
import {useState} from 'react'

export default function useInquiry() {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [target, setTarget] = useState<InquiryEntity | null>(null)

  const queryRes = useContactControllerFindAll({
    query: {
      select: v => {
        const res: Array<IInquiryTableRow> = []
        v.forEach(v => {
          res.push({
            ...v,
            createdAt: new Date(v.createdAt),
            detailFunc: () => {
              setTarget({
                ...v,
                inquiryId: v.id,
                authorPhone: v.tel,
                authorName: v.author,
              })
              setIsOpen(true)
            }
          })
        })
        return res
      }
    }
  })

  return {
    isOpen, setIsOpen,
    target, setTarget,
    ...queryRes
  }
}