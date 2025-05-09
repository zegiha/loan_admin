'use client'

import {noticeControllerCreateNotice} from '@/entities/api/notice/notice'
import {check_is_typed_when_string} from '@/shared/lib'
import {useState} from 'react'

export default function useAnnouncementAdd() {
  const [type, setType] = useState<number>(0)
  const [title, setTitle] = useState<string>('')
  const [contents, setContents] = useState<string>('')

  const messageSubject = ['제목은', '내용은']

  const createFunc = async () => {
    const data=  [title, contents]
    for(let i = 0; i < 2; i++) {
      const res = check_is_typed_when_string(data[i])
      if(res !== null)
        return `${messageSubject[i]} ${res}`
    }

    try {
      await noticeControllerCreateNotice({
        title,
        contents,
        type: type === 0 ? 'normal' : 'important'
      })
      return 'success'
    } catch (e) {
      return 'error'
    }
  }

  return {
    type, setType,
    title, setTitle,
    contents, setContents,
    createFunc
  }
}