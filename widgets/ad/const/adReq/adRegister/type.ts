import {AdRegisterSummaryEntity} from '../../../../../prevEntities'

export interface IAdRegisterTableRow extends Omit<AdRegisterSummaryEntity, 'userId' | 'adReqId'> {
  id: string
  companyName: string
  detailFunc: () => void
}

export interface IAdRegisterDetail {
  subTitle: string,
  data: Array<{label: string, contents: string}>
}