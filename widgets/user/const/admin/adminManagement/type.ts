import AdminEntity from '@/widgets/user/const/admin/AdminEntity'

export interface IAdminManagementTableRow extends Omit<AdminEntity, 'userId'> {
  deleteFunc: () => void
}