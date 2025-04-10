import {AdminRegisterEntity} from '@/entities'

export interface IAdminRegisterReqTableRow extends Omit<AdminRegisterEntity, 'reqId'> {
  allowFunc: () => void
  rejectFunc: () => void
}