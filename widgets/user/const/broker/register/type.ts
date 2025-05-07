import {BrokerRegisterEntity, BrokerRegisterSummaryEntity} from '@/entities'
import {TSetState} from '@/shared/const'

export interface IRegisterReqTableRow extends BrokerRegisterEntity {
  moreInfoFunc: () => void
}

export interface IRegisterDetail {
  isOpen: boolean
  setIsOpen: TSetState<boolean>
  data: Omit<IRegisterReqTableRow, 'moreInfoFunc'>
}

export interface IRegisterDetailData {
  subtitle: '계정 정보' | '대부업 정보' | '업체 정보'
  data: Array<{label: string, contents: string}>
}
