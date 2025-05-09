import AdEditSummaryEntity from '@/prevEntities/ad/const/AdEditSummaryEntiy'

export default async function getAdEditSummaryEntity(): Promise<Array<AdEditSummaryEntity>> {
  const dummy: AdEditSummaryEntity = {
    editId: '012ae299-81dc-4e04-9378-8f94f457d24c',
    userId: '17fafcf5-ca5b-46ba-bab6-3d9fea17a590',
    editReqDate: new Date('2025-06-15'),
    adName: 'locationBanner',
  }

  const res: Array<AdEditSummaryEntity> = []
  for(let i = 0; i < 44; i++) res.push(dummy)
  return res
}