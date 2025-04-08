'use client'


import getBroker from '@/widgets/user/api/broker/getBroker'
import {BrokerEntitySummary} from '@/widgets/user/const/broker/BrokerEntity'
import {IManagementTableRow} from '@/widgets/user/const/broker/management/type'
import {useQuery} from '@tanstack/react-query'
import {useState} from 'react'

export default function() {
  const [isLogoutOpen, setIsLogoutOpen] = useState<boolean>(false)
  const [isDeleteOpen, setIsDeleteOpen] = useState<boolean>(false)
  const [isSidepeekOpen, setIsSidepeekOpen] = useState<boolean>(false)
  const [targetUser, setTargetUser] = useState<{id: string, userId: string} | null>(null)
  const queryRes = useQuery<Array<BrokerEntitySummary>, Error, Array<IManagementTableRow>>({
    queryKey: ['brokerList'],
    queryFn: getBroker,
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