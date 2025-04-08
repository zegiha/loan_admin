import AdminEntity from '@/widgets/user/const/admin/AdminEntity'

export interface AdminRegisterEntity extends Omit<AdminEntity, 'userId'> {
  reqId: string
}