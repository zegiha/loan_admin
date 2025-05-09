import {InquiryEntity, InquirySummaryEntity} from '../../../prevEntities'
import {TSetState} from '@/shared/const'

export interface IInquiryTableRow extends Omit<InquirySummaryEntity, 'inquiryId'>{
  detailFunc: () => void
}

export interface IInquiryAnswerModal {
  isOpen: boolean
  setIsOpen: TSetState<boolean>
  target: InquiryEntity
  setTarget: TSetState<InquiryEntity | null>
  refetch: () => void
}
