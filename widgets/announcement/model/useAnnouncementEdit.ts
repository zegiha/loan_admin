'use client'

import {noticeControllerUpdateNotice} from '@/entities/api/notice/notice'
import {AnnouncementEntity} from '../../../prevEntities'
import {check_is_typed_when_string} from '@/shared/lib'
import {useState} from 'react'

export default function useAnnouncementEdit(
  targetId: string,
  currentTitle: string,
  currentContents: string,
  currentType: AnnouncementEntity['type']
) {
  const [title, setTitle] = useState<string>(currentTitle)
  const [contents, setContents] = useState<string>(currentContents)
  const [type, setType] = useState<AnnouncementEntity['type']>(currentType)

  const messageSubject = ['제목은', '내용은']

  const editFunc = async () => {
    const target = [title, contents]
    for(let i = 0; i < 2; i++) {
      const res = check_is_typed_when_string(target[i])
      if(res !== null)
        return `${messageSubject[i]} ${res}`
    }

    try {
      await noticeControllerUpdateNotice(
        targetId,
        {
          title,
          contents,
          type: type === 'NORMAL' ? 'normal' : 'important'
        }
      )
      return 'success'
    } catch(e) {
      return 'error'
    }
  }

  return {
    title, setTitle,
    contents, setContents,
    type, setType,
    editFunc,
  }
}