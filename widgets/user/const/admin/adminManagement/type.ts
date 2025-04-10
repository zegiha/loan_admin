import AdminEntity from '@/entities/admin/AdminEntity'

export interface IAdminManagementTableRow extends Omit<AdminEntity, 'userId'> {
  deleteFunc: () => void
}