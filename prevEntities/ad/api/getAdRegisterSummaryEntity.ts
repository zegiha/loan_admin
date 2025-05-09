import {AdRegisterSummaryEntity} from '@/prevEntities'

export default async function(): Promise<Array<AdRegisterSummaryEntity>> {
  const dummy: AdRegisterSummaryEntity = {
    adReqId: 'fe8fac27-eb9f-4fcf-9132-053a6b3e79c0',
    userId: '4996535b-2895-4291-b18c-93baa71c738c',
    adNames: ['premiumBanner', 'locationBanner'],
    depositorName: 'name',
    beDepositedTotalAmount: 90000000
  }

  const res: Array<AdRegisterSummaryEntity> = []
  for(let i = 0; i < 64; i++) res.push(dummy)

  return res
}