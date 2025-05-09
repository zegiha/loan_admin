'use client'

import {getInquiryEntityById, InquiryEntity} from '../../../prevEntities'
import {ITableLabeledRowWithoutReactNode} from '@/shared/const'
import {formatDateDotYmd} from '@/shared/lib'
import {IInquiryAnswerModal} from '@/widgets/inquiry/const/type'
import {useQuery} from '@tanstack/react-query'
import {useState} from 'react'

export default function useInquiryAnswerModal(
  targetId: IInquiryAnswerModal['targetId'],
) {
  const queryRes = useQuery<InquiryEntity, Error, Array<ITableLabeledRowWithoutReactNode>>({
    queryKey: [`inquiry-${targetId}`],
    queryFn: async () => getInquiryEntityById(targetId),
    select: v => {
      const res: Array<ITableLabeledRowWithoutReactNode> = []
      res.push({label: '제목', contents: v.title})
      res.push({label: '내용', contents: v.contents})
      res.push({label: '문의일자', contents: formatDateDotYmd(v.createdAt)})
      res.push({label: '작성자 이름', contents: v.authorName})
      res.push({label: '작성자 전화번호', contents: v.authorPhone})
      return res
    }
  })

  const [ans, setAns] = useState<string>('')

  const answerFunc: () => Promise<boolean> = async () => {
    // TODO 1ㄷ1문의 답변 API
    return true
  }

  return {
    ans, setAns,
    answerFunc,
    ...queryRes,
  }
}