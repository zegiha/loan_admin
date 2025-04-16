import InquiryEntity from '@/entities/inquiry/const/InquiryEntity'

export default interface InquirySummaryEntity
  extends Omit<InquiryEntity, 'contents' | 'authorName' | 'authorPhone'>{}