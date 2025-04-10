import adRegisterSummaryEntity from '@/entities/ad/const/adRegisterSummaryEntity'

export interface IAdRegisterTableRow extends Omit<adRegisterSummaryEntity, 'userId' | 'adId'> {
  id: string
  companyName: string
  detailFunc: () => void
}