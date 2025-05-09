import {AdminEntity} from '../../../../../prevEntities'

export interface IAdminManagementTableRow extends Omit<AdminEntity, 'userId'> {
  deleteFunc: () => void
}