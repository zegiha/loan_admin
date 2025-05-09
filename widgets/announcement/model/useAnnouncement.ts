'use client'

import {AnnouncementSummaryEntity, getAnnouncementSummaryEntity} from '../../../prevEntities'
import {IAnnouncement} from '@/widgets/announcement/const/type'
import {useQuery} from '@tanstack/react-query'
import {useState} from 'react'

export default function useAnnouncement() {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [targetId, setTargetId] = useState<string | null>(null)

  const queryRes = useQuery<Array<AnnouncementSummaryEntity>, Error, Array<IAnnouncement>>({
    queryKey: ['announcement'],
    queryFn: getAnnouncementSummaryEntity,
    select: v => {
      const res: Array<IAnnouncement> = []
      v.forEach(v => {
        res.push({
          ...v,
          detailFunc: () => {
            setTargetId(v.announcementId)
            setIsOpen(true)
          }
        })
      })
      return res
    }
  })

  return {
    isOpen, setIsOpen,
    targetId, setTargetId,
    ...queryRes,
  }
}