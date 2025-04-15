'use client'

import {AnnouncementEntity} from '@/entities'
import {check_is_typed_when_string} from '@/shared/lib'
import {useState} from 'react'

export default function useAnnouncementEdit(
  currentTitle: string,
  currentContents: string,
  currentType: AnnouncementEntity['type']
) {
  const [title, setTitle] = useState<string>(currentTitle)
  const [contents, setContents] = useState<string>(currentContents)
  const [type, setType] = useState<AnnouncementEntity['type']>(currentType)

  const editFunc = async () => {
    if(
      check_is_typed_when_string(title) === null &&
      check_is_typed_when_string(contents) === null &&
      check_is_typed_when_string(type) === null
    ) {
      // TODO 공지 수정 API
      return true
    } else {
      alert('잘못된 입력이 있습니다')
      return false
    }
  }

  return {
    title, setTitle,
    contents, setContents,
    type, setType,
    editFunc,
  }
}