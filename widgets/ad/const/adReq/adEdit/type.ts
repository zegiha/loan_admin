import {AdEditEntity, AdEditSummaryEntity} from '@/entities'

export interface IAdEditTableRow extends Omit<AdEditSummaryEntity, 'editId' | 'userId'>{
  id: string
  companyName: string
  detailFunc: () => void
}

export interface IAdEditDetailData {
  id: string
  companyName: string
  editReqDate: AdEditEntity['editReqDate']
  adCurrent: Array<{label: string, contents: string}>
  adEdited: Array<{label: string, contents: string}>
}