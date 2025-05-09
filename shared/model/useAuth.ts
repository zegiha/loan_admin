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
  setData: () => Promise<void>
}

const useAuth = create<IUseAuth>(set => ({
  data: null,
  setData: async () => {
    try {
      const res = await adminControllerProfile()
      set(prev => ({
        ...prev,
        data: {
          id: res.id,
          authority: res.role === 'ADMIN' ? 'NORMAL' : 'SUPER'
        }
      }))
    } catch(e) {
      console.error(`admin profile: ${e}`)
    }
  }
}))

export default useAuth