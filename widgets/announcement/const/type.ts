import {AnnouncementSummaryEntity} from '@/entities'
import {TSetState} from '@/shared/const'

export interface IAnnouncement extends Omit<AnnouncementSummaryEntity, 'announcementId'> {
  detailFunc: () => void
}

export interface IAnnouncementDetailProps {
  isOpen: boolean
  setIsOpen: TSetState<boolean>
  targetId: string
  setTargetId: TSetState<string | null>
}
