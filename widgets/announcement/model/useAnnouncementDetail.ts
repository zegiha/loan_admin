'use client'

import {AnnouncementEntity, getAnnouncementEntityById} from '../../../prevEntities'
import {formatDateDotYmd, numberToStringWithComma} from '@/shared/lib'
import {useQuery} from '@tanstack/react-query'
import {useState} from 'react'

export default function useAnnouncementDetail(announcementId: string) {
  const [isEditOpen, setIsEditOpen] = useState<boolean>(false)

  const queryRes = useQuery<AnnouncementEntity, Error, Array<{label: string, contents: string}>>({
    queryKey: [`announcement-${announcementId}`],
    queryFn: async () => getAnnouncementEntityById(announcementId),
    select: v => {
      return [
        {label: '분류', contents: v.type === 'VALUABLE' ? '중요' : '일반'},
        {label: '조회수', contents: numberToStringWithComma(v.viewCount)},
        {label: '작성일', contents: formatDateDotYmd(v.writedDate)},
        {label: '제목', contents: v.title},
        {label: '내용', contents: v.contents},
      ]
    }
  })

  return {
    isEditOpen, setIsEditOpen,
    ...queryRes,
  }
}