import InquirySummaryEntity from '@/prevEntities/inquiry/const/InquirySummaryEntity'

export default async function getInquirySummaryEntity(): Promise<Array<InquirySummaryEntity>> {
  const dummy: InquirySummaryEntity = {
    inquiryId: '33f222e0-e17a-40ba-85c4-6be601884a97',
    title: '사기 당했습니다',
    createdAt: new Date('2024-04-12'),
  }
  const res: Array<InquirySummaryEntity> = []
  for(let i = 0; i < 54; i++) res.push(dummy)

  return res
}