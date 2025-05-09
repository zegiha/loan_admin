'use client'

import {userControllerPardon, useUserControllerBlacklist} from '@/entities/api/user/user'
import {IBlackListTableRow} from '@/widgets/user/const/broker/blackList/type'
import {useState} from 'react'

export default function useBlackList() {
  const [showRow, setShowRow] = useState<number>(1)
  const [targetUser, setTargetUser] = useState<{userId: string, name: string} | null>(null)
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false)
  const [isAddModalOpen, setIsAddModalOpen] = useState<boolean>(false)

  const queryRes = useUserControllerBlacklist({
    query: {
      select: data => {
        return data.map((v => {
          console.log(v)
          const res: Omit<IBlackListTableRow, 'userId'> = {
            ...v,
            excludeModalOpenFunc: () => {
              setTargetUser({
                userId: v.id,
                name: v.exponentName
              })
              setIsDeleteModalOpen(true)
            },
          }
          return res
        }))
      }
    }
  })

  const excludeFunc = async (id: string) => {
    // TODO 블랙리스트 제외
    try {
      await userControllerPardon({id})
      // alert('제외되었습니다')
      setIsDeleteModalOpen(false)
      return 'success'
    } catch (e) {
      alert('문제가 발생했습니다 다시 시도해주세요')
      return 'failed'
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