import {AdEntity} from '@/entities'

export default interface AdRegisterEntity {
  adReqId: string
  userId: string
  ads: Array<AdEntity>
  depositorName: string
  beDepositedTotalAmount: number
}