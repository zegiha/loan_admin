'use client'
import {useAdminControllerProfile} from '@/entities/api/admin/admin'
import {authControllerLogout} from '@/entities/api/auth/auth'
import {useRouter} from 'next/navigation'
import {AdminEntity} from '../../../../../../prevEntities'
import {useEffect, useState} from 'react'

export default function useSetting() {
  const [isIdOpen, setIsIdOpen] = useState<boolean>(false)
  const [isAuthorityOpen, setIsAuthorityOpen] = useState<boolean>(false)
  const [isPWOpen, setIsPWOpen] = useState<boolean>(false)
  const [isDeleteOpen, setIsDeleteOpen] = useState<boolean>(false)
  const [userInfo, setUserInfo] = useState<Omit<AdminEntity, 'name'> | null>(null)

  const router = useRouter()

  const queryRes = useAdminControllerProfile({
    query: {
      select: v => {
        return [
          {
            label: '아이디',
            contents: v.id,
            action: {contents: '변경하기', fn: () => setIsIdOpen(true)},
          },
          {
            label: '권한',
            contents: v.role === 'ADMIN' ? '일반 관리자' : '최고 관리자',
            action: {contents: '', fn: () => {}},
          },
          {
            label: '비밀번호',
            contents: '********',
            action: {contents: '변경하기', fn: () => setIsPWOpen(true)},
          },
        ]
      }
    }
  })

  useEffect(() => {
    if(queryRes.status === 'success') {
      setUserInfo({
        id: queryRes.data[0].contents,
        userId: queryRes.data[0].contents,
        authority: queryRes.data[1].contents === '일반 관리자' ? 'NORMAL' : 'SUPER',
      })
    }
  }, [queryRes.status])

  const logoutFunc = () => {
    authControllerLogout()
      .then(() => {
        router.replace('/login')
      })
      .catch(() => {
        alert('나중에 시도해주세요')
      })
  }

  // const queryRes = useQuery<Omit<AdminEntity, 'name'>, Error, Array<ISettingTableRow>>({
  //   queryKey: ['loggedInUserInfo'],
  //   queryFn: async () => {
  //     const dummy: Omit<AdminEntity, 'name'> = {
  //       userId: 'a6f3fff8-9da9-4948-9f34-c3c4bcfb3719',
  //       id: 'zegiha',
  //       authority: 'SUPER',
  //     }
  //
  //     setUserInfo(dummy)
  //
  //     return dummy
  //   },
  //   select: v => {
  //     return [
  //       {
  //         label: '아이디',
  //         contents: v.id,
  //         action: {contents: '변경하기', fn: () => setIsIdOpen(true)},
  //       },
  //       {
  //         label: '권한',
  //         contents: v.authority === 'SUPER' ? '최고 관리자' : '일반 관리자',
  //         action: {contents: '변경하기', fn: () => setIsAuthorityOpen(true)},
  //       },
  //       {
  //         label: '비밀번호',
  //         action: {contents: '변경하기', fn: () => setIsPWOpen(true)},
  //       },
  //     ]
  //   }
  // })

  return {
    ...queryRes,
    userInfo,
    isIdOpen, setIsIdOpen,
    isAuthorityOpen, setIsAuthorityOpen,
    isPWOpen, setIsPWOpen,
    isDeleteOpen, setIsDeleteOpen,
    logoutFunc,
  }
}