import {BlackListEntity} from '../../../prevEntities'
import {TSetState} from '@/shared/const'

export interface ICertificatedCompanyBlackListTableRow
extends Omit<BlackListEntity, 'userId'> {
  deleteFunc: () => void
}

export interface ICertificatedCompanyBlackListDeleteModal {
  isOpen: boolean
  setIsOpen: TSetState<boolean>
  target: Omit<BlackListEntity, 'reason'>
  setTarget: TSetState<Omit<BlackListEntity, 'reason'> | null>
}