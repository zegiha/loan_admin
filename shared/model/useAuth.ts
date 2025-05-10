'use client'

import {adminControllerProfile} from '@/entities/api/admin/admin'
import {TAdminAuthority} from '@/shared/const'
import {create} from 'zustand/index'

interface IAuth{
  authority: TAdminAuthority
  id: string
}

interface IUseAuth {
  data: IAuth | null
  status: 'success' | 'pending' | 'error',
  setData: () => Promise<void>
}

const useAuth = create<IUseAuth>(set => ({
  data: null,
  status: 'pending',
  setData: async () => {
    try {
      set(prev => ({...prev, status: 'pending'}))
      const res = await adminControllerProfile()
      set(prev => ({
        ...prev,
        status: 'success',
        data: {
          id: res.id,
          authority: res.role === 'ADMIN' ? 'NORMAL' : 'SUPER'
        }
      }))
    } catch(e) {
      set(prev => ({...prev, status: 'error'}))
    }
  }
}))

export default useAuth