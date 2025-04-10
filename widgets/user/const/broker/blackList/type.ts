import {BlackListEntity} from '@/entities'

export interface IBlackListTableRow extends BlackListEntity {
  excludeModalOpenFunc: () => void
}