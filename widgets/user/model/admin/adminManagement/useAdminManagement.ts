'use client'

import getAdmin from '@/entities/admin/adminManagement/getAdmin'
import AdminEntity from '@/entities/admin/AdminEntity'
import {IAdminManagementTableRow} from '@/widgets/user/const/admin/adminManagement/type'
import {useQuery} from '@tanstack/react-query'
import {useState} from 'react'

export default function() {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [target, setTarget] = useState<{id: string, name: string, userId: string} | null>(null)
  const queryReq = useQuery<Array<AdminEntity>, Error, Array<IAdminManagementTableRow>>({
    queryKey: ['admin'],
    queryFn: getAdmin,
    select: data => {
      const res: Array<IAdminManagementTableRow> = []
      data.forEach(v => {
        res.push({
          ...v,
          deleteFunc: v.authority === 'SUPER' ?
            () => alert('최고관리자는 삭제할 수 없습니다') :
            () => {
              setTarget({...v})
              setIsOpen(true)
            }
        })
      })
      return res
    }
  })

  return {
    isOpen, setIsOpen,
    target, setTarget,
    ...queryReq
  }
}