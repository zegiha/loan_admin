import {AdminRegisterEntity} from '@/widgets/user/const/admin/adminRegisterReq/AdminRegisterEntity'

export interface IAdminRegisterReqTableRow extends Omit<AdminRegisterEntity, 'reqId'> {
  allowFunc: () => void
  rejectFunc: () => void
}