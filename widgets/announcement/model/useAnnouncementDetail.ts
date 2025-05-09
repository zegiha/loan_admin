'use client'

import {
  noticeControllerDeleteNotice,
  useNoticeControllerGetNotice
} from '@/entities/api/notice/notice'
import {formatDateDotYmd} from '@/shared/lib'
import {useEffect, useState} from 'react'

export default function useAnnouncementDetail(announcementId: string) {
  const [isEditOpen, setIsEditOpen] = useState<boolean>(false)

  const queryRes = useNoticeControllerGetNotice(announcementId, {
    query: {
      select: v => {
        return [
          {label: '분류', contents: v.type === 'important' ? '중요' : '일반'},
          {label: '작성일', contents: formatDateDotYmd(new Date(v.createdAt)),},
          {label: '제목', contents: v.title},
          {label: '내용', contents: v.contents},
        ]
      }
    }
  })

  useEffect(() => {
    console.log(queryRes.data)
  }, [queryRes.data])

  // const queryRes = useQuery<AnnouncementEntity, Error, Array<{label: string, contents: string}>>({
  //   queryKey: [`announcement-${announcementId}`],
  //   queryFn: async () => getAnnouncementEntityById(announcementId),
  //   select: v => {
  //     return [
  //       {label: '분류', contents: v.type === 'VALUABLE' ? '중요' : '일반'},
  //       {label: '조회수', contents: numberToStringWithComma(v.viewCount)},
  //       {label: '작성일', contents: formatDateDotYmd(v.writedDate)},
  //       {label: '제목', contents: v.title},
  //       {label: '내용', contents: v.contents},
  //     ]
  //   }
  // })

  const deleteAnnouncement = async (announcementId: string) => {
    try {
      await noticeControllerDeleteNotice(announcementId)
      return 'success'
    } catch (e) {
      return 'error'
    }
  }

  return {
    ...queryRes,
    isEditOpen, setIsEditOpen,
    deleteAnnouncement,
  }
}