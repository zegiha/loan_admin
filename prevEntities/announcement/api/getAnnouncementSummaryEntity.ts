import {AnnouncementSummaryEntity} from '@/prevEntities'

export default async function getAnnouncementSummaryEntity(): Promise<Array<AnnouncementSummaryEntity>> {
  const dummy: AnnouncementSummaryEntity = {
    announcementId: '228fac55-e947-46a0-ba26-c21effd2c45d',
    type: 'VALUABLE',
    title: '휴대폰 사기 피해 주의 요망',
    viewCount: 369,
    writedDate: new Date('2025-04-15'),
  }

  const res: Array<AnnouncementSummaryEntity> = []
  for(let i = 0; i < 31; i++) res.push(dummy)

  return res
}