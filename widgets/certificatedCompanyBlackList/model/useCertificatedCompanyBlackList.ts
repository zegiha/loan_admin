'use client'

import {BlackListEntity, getCertificatedCompanyBlackList} from '@/entities'
import {
  ICertificatedCompanyBlackListDeleteModal,
  ICertificatedCompanyBlackListTableRow
} from '@/widgets/certificatedCompanyBlackList/const/type'
import {useQuery} from '@tanstack/react-query'
import {useState} from 'react'

export default function useCertificatedCompanyBlackList() {
  const [isAddOpen, setIsAddOpen] = useState<boolean>(false)
  const [isDeleteOpen, setIsDeleteOpen] = useState<boolean>(false)
  const [target, setTarget] = useState<ICertificatedCompanyBlackListDeleteModal['target'] | null>(null)

  const queryRes = useQuery<Array<BlackListEntity>, Error, Array<ICertificatedCompanyBlackListTableRow>>({
    queryKey: ['certificatedCompanyBlackList'],
    queryFn: getCertificatedCompanyBlackList,
    select: v => {
      const res: Array<ICertificatedCompanyBlackListTableRow> = []
      v.forEach(v => {
        res.push({
          ...v,
          deleteFunc: () => {
            setTarget({...v})
            setIsDeleteOpen(true)
          }
        })
      })
      return res
    }
  })

  const deleteFunc = async (): Promise<boolean> => {
    // TODO 정식업체 블랙에서 제거 API
    return true
  }

  return {
    isAddOpen, setIsAddOpen,
    isDeleteOpen, setIsDeleteOpen,
    target, setTarget,
    deleteFunc,
    ...queryRes
  }
}