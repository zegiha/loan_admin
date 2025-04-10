import {AdminEntity} from '@/entities'

export interface IAdminManagementTableRow extends Omit<AdminEntity, 'userId'> {
  deleteFunc: () => void
}