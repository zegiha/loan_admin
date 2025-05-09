import AnnouncementEntity from '@/prevEntities/announcement/const/AnnouncementEntity'

export default interface AnnouncementSummaryEntity extends Omit<AnnouncementEntity, 'contents'>{}