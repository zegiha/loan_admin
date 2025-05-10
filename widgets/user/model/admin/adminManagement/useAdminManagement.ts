'use client'

import {AdminEntity, getAdmin} from '../../../../../prevEntities'
import {IAdminManagementTableRow} from '@/widgets/user/const/admin/adminManagement/type'
import {useQuery} from '@tanstack/react-query'
import {useState} from 'react'
import {useAdminControllerFindAll} from "@/entities/api/admin/admin";

export default function() {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [target, setTarget] = useState<Omit<AdminEntity, 'authority'> | null>(null)

  const queryRes = useAdminControllerFindAll({
    query: {
      select: data => {
        return data.map((v): IAdminManagementTableRow => {
          const admin: AdminEntity = {
            userId: v.id,
            id: v.id,
            authority: v.role === 'ADMIN' ? 'NORMAL' : 'SUPER',
          }
          return {
            ...admin,
            deleteFunc: () => {
              setTarget({...admin})
              setIsOpen(true)
            }
          }
        })
      }
    }
  })

  return {
    isOpen, setIsOpen,
    target, setTarget,
    ...queryRes
  }
}
