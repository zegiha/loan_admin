'use client'

import {userControllerPardon, useUserControllerBlacklist} from '@/entities/api/user/user'
import {useState} from 'react'

export default function useBlackList() {
  const [showRow, setShowRow] = useState<number>(1)
  const [targetUser, setTargetUser] = useState<{userId: string, name: string} | null>(null)
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false)
  const [isAddModalOpen, setIsAddModalOpen] = useState<boolean>(false)

  const queryRes = useUserControllerBlacklist()

  const excludeFunc = async (id: string) => {
    // TODO 블랙리스트 제외
    try {
      await userControllerPardon({id})
      alert('제외되었습니다')
      setIsDeleteModalOpen(false)
    } catch (e) {
      alert('문제가 발생했습니다 다시 시도해주세요')
    }
  }

  return {
    ...queryRes,
    showRow, setShowRow,
    targetUser, setTargetUser,
    isDeleteModalOpen, setIsDeleteModalOpen,
    isAddModalOpen, setIsAddModalOpen,
    excludeFunc
  }
}