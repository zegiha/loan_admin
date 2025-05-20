import { AdEditEntity, AdEditSummaryEntity } from '../../../../../prevEntities'

export interface IAdEditTableRow
  extends Omit<AdEditSummaryEntity, 'editId' | 'userId' | 'editReqDate'> {
  id: string
  companyName: string
  detailFunc: () => void
  adName: string
}

export interface IAdEditDetailData {
  id: string
  companyName: string
  editReqDate: AdEditEntity['editReqDate']
  adCurrent: Array<{ label: string; contents: string }>
  adEdited: Array<{ label: string; contents: string }>
  adName: string
}
