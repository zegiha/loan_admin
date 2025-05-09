import {TAdminAuthority} from '@/shared/const'

export default interface AdminEntity {
  userId: string
  id: string
  authority: TAdminAuthority
}