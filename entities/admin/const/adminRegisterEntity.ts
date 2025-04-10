import AdminEntity from '@/entities/admin/const/adminEntity'

export default interface AdminRegisterEntity extends Omit<AdminEntity, 'userId'> {
  reqId: string
}