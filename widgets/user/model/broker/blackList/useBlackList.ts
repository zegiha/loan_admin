'use client'

import getBlackList from '@/entities/blackList/api/getBlackList'
import {IBlackListTableRow} from '@/widgets/user/const/broker/blackList/type'
import {useEffect, useState} from 'react'

export default function useBlackList() {
  const [showRow, setShowRow] = useState<number>(1)
  const [data, setData] = useState<Array<IBlackListTableRow> | null>(null)
  const [targetUser, setTargetUser] = useState<{userId: string, name: string} | null>(null)
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false)
  const [isAddModalOpen, setIsAddModalOpen] = useState<boolean>(false)

  const fetching = () => {
    const fetchData = getBlackList()
    const newData: Array<IBlackListTableRow> = []
    fetchData.forEach(v => {
      newData.push({...v, excludeModalOpenFunc: () => {
          setTargetUser({userId: v.userId, name: v.id})
          setIsDeleteModalOpen(true)
        }})
    })
    setData([...newData])
  }

  useEffect(() => {
    fetching()
  }, [])

  const excludeFunc = () => {
    // TODO 블랙리스트 제외
    setIsDeleteModalOpen(false)
  }

  return {
    showRow, setShowRow,
    data, fetching,
    targetUser, setTargetUser,
    isDeleteModalOpen, setIsDeleteModalOpen,
    isAddModalOpen, setIsAddModalOpen,
    excludeFunc
  }
}