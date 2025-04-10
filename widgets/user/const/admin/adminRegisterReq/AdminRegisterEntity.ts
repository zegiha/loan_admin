import AdminEntity from '@/entities/admin/AdminEntity'

export interface AdminRegisterEntity extends Omit<AdminEntity, 'userId'> {
  reqId: string
}