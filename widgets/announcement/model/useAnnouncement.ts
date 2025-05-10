'use client'

import {useNoticeControllerGetNotices} from '@/entities/api/notice/notice'
import {IAnnouncement} from '@/widgets/announcement/const/type'
import {useState} from 'react'

export default function useAnnouncement() {
  const [isAddOpen, setIsAddOpen] = useState<boolean>(false)
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [targetId, setTargetId] = useState<string | null>(null)

  const queryRes = useNoticeControllerGetNotices({
    query: {
      select: v => {
        const res: Array<IAnnouncement> = []
        v.forEach(v => {
          res.push({
            type: v.type === 'important' ? 'VALUABLE' : 'NORMAL',
            title: v.title,
            writedDate: new Date(v.createdAt),
            detailFunc: () => {
              setTargetId(v.id)
              setIsOpen(true)
            }
          })
        })
        return res
      }
    }
  })

  // const queryRes = useQuery<Array<AnnouncementSummaryEntity>, Error, Array<IAnnouncement>>({
  //   queryKey: ['announcement'],
  //   queryFn: getAnnouncementSummaryEntity,
  //   select: v => {
  //   }
  // })

  return {
    isAddOpen, setIsAddOpen,
    isOpen, setIsOpen,
    targetId, setTargetId,
    ...queryRes,
  }
}
