import AnnouncementEntity from '@/entities/announcement/const/AnnouncementEntity'

export default interface AnnouncementSummaryEntity extends Omit<AnnouncementEntity, 'contents'>{}