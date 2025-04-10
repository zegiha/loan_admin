import {AdEntity} from '@/entities'

export default interface AdRegisterEntity {
  adId: string
  userId: string
  ads: Array<AdEntity>
  depositorName: string
  beDepositedTotalAmount: number
}