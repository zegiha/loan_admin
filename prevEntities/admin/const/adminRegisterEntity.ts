import AdminEntity from '@/prevEntities/admin/const/adminEntity'

export default interface AdminRegisterEntity extends Omit<AdminEntity, 'userId'> {
  reqId: string
}