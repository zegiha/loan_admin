'use client'

import {InquiryEntity} from '../../../prevEntities'
import {ITableLabeledRowWithoutReactNode} from '@/shared/const'
import {useState} from 'react'

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

  const answerFunc: () => Promise<boolean> = async () => {
    // TODO 1ㄷ1문의 답변 API
    return true
  }

  return {
    ans, setAns,
    answerFunc,
    parseToTableForm,
  }
}