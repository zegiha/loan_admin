import {AdProlongationEntity} from '@/prevEntities'

export default async function getAdProlongationEntity(): Promise<Array<AdProlongationEntity>> {
  const dummy: AdProlongationEntity = {
    prolongationId: '1324714f-6936-483c-9eab-6c556eed2e4c',
    userId: 'bd055966-e91e-45af-b031-53487ea713a7',
    adName: 'mainTopBanner',
    depositorName: '김민지',
    beDepositedTotalAmount: 2500000,
  }
  const res: Array<AdProlongationEntity> = []
  for(let i = 0; i < 54; i++) res.push(dummy)

  return res
}