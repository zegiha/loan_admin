import {InquirySummaryEntity} from '../../../prevEntities'
import {TSetState} from '@/shared/const'

export interface IInquiryTableRow extends Omit<InquirySummaryEntity, 'inquiryId'>{
  detailFunc: () => void
}

export interface IInquiryAnswerModal {
  isOpen: boolean
  setIsOpen: TSetState<boolean>
  targetId: string
  setTargetId: TSetState<string | null>
}
