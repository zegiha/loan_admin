'use client'

import {TAdminAuthority} from '@/shared/const'
// import {axiosWithToken} from '@/shared/lib'
import {create} from 'zustand/index'

interface IAuth{
  authority: TAdminAuthority
  id: string
  name: string
}

interface IUseAuth {
  data: IAuth | null
  setData: () => Promise<void>
}

const useAuth = create<IUseAuth>(set => ({
  data: null,
  setData: async () => {
    // const axios = await axiosWithToken()
    // const data = await axios.get('')
    // TODO 유저 정보 받아오기
    set(() => ({data: {
      authority: 'SUPER',
      id: 'zegiha',
      name: '이서율',
    }}))
  }
}))

export default useAuth