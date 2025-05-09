'use client'

import {InquiryEntity} from '../../../prevEntities'
import {ITableLabeledRowWithoutReactNode} from '@/shared/const'
import {useState} from 'react'
import {contactControllerSendReply} from "@/entities/api/contact/contact";
import {check_is_typed_when_string} from "@/shared/lib";

export default function useInquiryAnswerModal() {
  const parseToTableForm = (v: InquiryEntity) => {
    const res: Array<ITableLabeledRowWithoutReactNode> = []
    res.push({label: '제목', contents: v.title})
    res.push({label: '내용', contents: v.contents})
    res.push({label: '작성자 이름', contents: v.authorName})
    res.push({label: '작성자 전화번호', contents: v.authorPhone})
    return res
  }

  const [ans, setAns] = useState<string>('')

  const answerFunc = async (id: string): Promise<string> => {
    try {
      const checkRes = check_is_typed_when_string(ans)
      if(checkRes !== null) return `답변은 ${checkRes}`

      await contactControllerSendReply(
        id,
        {message: ans}
      )
      return 'success'
    } catch (e) {
      return '다시 시도해주세요'
    }
  }

  return {
    ans, setAns,
    answerFunc,
    parseToTableForm,
  }
}
