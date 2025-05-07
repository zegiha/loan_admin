'use client'

import {useUserControllerActive} from '@/test/tmp'
import {AxiosError} from 'axios'

export default function useRegisterDetail(id: string) {
  const rejectFunc = () => {
    // TODO API 연결
    console.log('reject')
  }
  const approveMutation = useUserControllerActive({
    mutation: {
      onSuccess: () => {
        console.log('register request approve: success')
      },
      onError: () => {
        console.log('register request approve: error')
      }
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

  return {
    approveMutation,
    approveFunc,
    rejectFunc,
  }
}
