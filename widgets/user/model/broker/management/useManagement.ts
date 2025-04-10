'use client'


import getBrokerSummary from '@/entities/broker/api/getBrokerSummary'
import {BrokerEntitySummary} from '@/entities/broker/const/BrokerEntity'
import {IManagementTableRow} from '@/entities/broker/const/management/type'
import {useQuery} from '@tanstack/react-query'
import {useState} from 'react'

export default function() {
  const [isLogoutOpen, setIsLogoutOpen] = useState<boolean>(false)
  const [isDeleteOpen, setIsDeleteOpen] = useState<boolean>(false)
  const [isSidepeekOpen, setIsSidepeekOpen] = useState<boolean>(false)
  const [targetUser, setTargetUser] = useState<{id: string, userId: string} | null>(null)
  const queryRes = useQuery<Array<BrokerEntitySummary>, Error, Array<IManagementTableRow>>({
    queryKey: ['brokerList'],
    queryFn: getBrokerSummary,
    select: data => {
      const res: Array<IManagementTableRow> = []
      data.forEach(v => {
        res.push({
          ...v,
          moreInfoSidepeekFunc: () => {
            setTargetUser({...v})
            setIsSidepeekOpen(true)
          },
          logoutModalFunc: () => {
            setTargetUser({...v})
            setIsLogoutOpen(true)
          },
          deleteUserModalFunc: () => {
            setTargetUser({...v})
            setIsDeleteOpen(true)
          }
        })
      })
      return res
    }
  })

  return {
    isLogoutOpen, setIsLogoutOpen,
    isDeleteOpen, setIsDeleteOpen,
    isSidepeekOpen, setIsSidepeekOpen,
    targetUser, setTargetUser,
    ...queryRes,
  }
}