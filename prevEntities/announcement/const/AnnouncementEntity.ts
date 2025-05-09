export default interface AnnouncementEntity {
  announcementId: string
  type: 'VALUABLE' | 'NORMAL'
  title: string
  contents: string
  writedDate: Date
  // viewCount: number
}