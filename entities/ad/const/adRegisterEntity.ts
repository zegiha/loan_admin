import {adEntity} from '@/entities'

export default interface adRegisterEntity {
  adId: string
  userId: string
  ads: Array<adEntity>
  depositorName: string
  beDepositedTotalAmount: number
}