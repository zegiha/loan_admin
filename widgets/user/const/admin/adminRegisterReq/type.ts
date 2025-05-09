import {AdminRegisterEntity} from '../../../../../prevEntities'

export interface IAdminRegisterReqTableRow extends Omit<AdminRegisterEntity, 'reqId'> {
  allowFunc: () => void
  rejectFunc: () => void
}