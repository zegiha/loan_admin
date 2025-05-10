'use client'

import {AdminRegisterEntity, getAdminRegister} from '../../../../../prevEntities'
import {IAdminRegisterReqTableRow} from '@/widgets/user/const/admin/adminRegisterReq/type'
import {useQuery} from '@tanstack/react-query'
import {useState} from 'react'

export default function() {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [target, setTarget] = useState<{name?: string, id: string, reqId: string} | null>(null)
  const queryReq = useQuery<Array<AdminRegisterEntity>, Error, Array<IAdminRegisterReqTableRow>>({
    queryKey: ['adminRegister'],
    queryFn: getAdminRegister,
    select: data => {
      const res: Array<IAdminRegisterReqTableRow> = []
      data.forEach(v => {
        res.push({
          ...v,
          allowFunc: () => {
            if(v.authority === 'SUPER') {
              setTarget({...v})
              setIsOpen(true)
              return;
            }
            alert('승인되었습니다')
            setTarget(null)
          },
          rejectFunc: () => {
            alert('거부되었습니다')
            setTarget(null)
          }
        })
      })
      return res
    }
  })

  return {
    isOpen, setIsOpen,
    target, setTarget,
    ...queryReq,
  }
}
