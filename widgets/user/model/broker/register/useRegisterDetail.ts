'use client'

import {
  useUserControllerActive,
  useUserControllerDeleteProfile,
  useUserControllerPardon
} from '@/entities/api/user/user'
import {TSetState} from '@/shared/const'
import {AxiosError} from 'axios'

export default function useRegisterDetail(
  id: string,
  setIsOpen: TSetState<boolean>
) {
  const approveMutation = useUserControllerActive({
    mutation: {
      onSuccess: () => {
        setIsOpen(false)
      },
    }
  })
  const approveFunc = () => {
    try {
      approveMutation.mutate({id})
    } catch (e) {
      if(e instanceof AxiosError) {
        alert(`문제가 발생했습니다 다시시도해주세요 : ${e.status}, ${e.message}`)
      } else {
        alert('예상치 못한 문제가 발생했습니다 다시시도해주세요')
      }
    }
  }

  const rejectMutation = useUserControllerDeleteProfile({
    mutation: {
      onSuccess: () => {
        setIsOpen(false)
      },
    }
  })
  const rejectFunc = async () => {
    try {
      rejectMutation.mutate({id})
    } catch (e) {
      if(e instanceof AxiosError) {
        alert(`문제가 발생했습니다 다시시도해주세요 : ${e.status}, ${e.message}`)
      } else {
        alert('예상치 못한 문제가 발생했습니다 다시시도해주세요')
      }
    }
  }

  return {
    approveFunc,
    rejectFunc,
  }
}
