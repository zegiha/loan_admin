import {BlackListEntity} from '../../../../../prevEntities'

export interface IBlackListTableRow extends BlackListEntity {
  excludeModalOpenFunc: () => void
}