import InquiryEntity from '@/prevEntities/inquiry/const/InquiryEntity'

export default interface InquirySummaryEntity
  extends Omit<InquiryEntity, 'contents' | 'authorName' | 'authorPhone'>{}