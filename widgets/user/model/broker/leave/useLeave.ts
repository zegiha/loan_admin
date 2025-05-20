'use client'

import {userControllerApproveWithdrawal, useUserControllerGetWithdrawalRequests} from '@/entities/api/user/user'
import {ILeaveTableRow} from '@/widgets/user/const/broker/leave/type'
import {useState} from 'react'

export default function useLeave() {
  const [approveModal, setApproveModal] = useState<boolean>(false)
  const [rejectModal, setRejectModal] = useState<boolean>(false)
  const [target, setTarget] = useState<string | null>(null)

  const queryRes = useUserControllerGetWithdrawalRequests({
    query: {
      select: v => {
        const res: Array<ILeaveTableRow> = []

        v.forEach(v => {
          res.push({
            id: v.id,
            companyName: v.companyName,
            approveModalFunc: () => {
              setTarget(v.id)
              setApproveModal(true)
            },
            rejectModalFunc: () => {
              setTarget(v.id)
              setRejectModal(true)
            }
          })
        })

        return res
      }
    }
  })

  const approveFunc = async (id: string) => {
    try {
      await userControllerApproveWithdrawal(id)
      queryRes.refetch()
      setTarget(null)
      setApproveModal(false)
    } catch(e) {
      console.error(e)
      alert('다시 시도해주세요')
      setApproveModal(false)
    }
  }

  const rejectFunc = async (id: string) => {
    try {
      // TODO 요청 삭제하는거 추가
      // await userControllerRe(id)
      queryRes.refetch()
      setTarget(null)
      setApproveModal(false)
    } catch(e) {
      console.error(e)
      alert('다시 시도해주세요')
      setApproveModal(false)
    }
  }

  return {
    approveModal, setApproveModal,
    rejectModal, setRejectModal,
    target, setTarget,
    ...queryRes,
    approveFunc,
    rejectFunc,
  }
}