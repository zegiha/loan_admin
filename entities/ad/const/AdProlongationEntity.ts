import {AdEntity} from '@/entities'

export default interface AdProlongationEntity {
  prolongationId: string
  userId: string
  adName: AdEntity['name']
  depositorName: string
  beDepositedTotalAmount: number
}