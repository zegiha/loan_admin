'use client'

import {useEffect, useState} from 'react'

export default function() {
  const [target, setTarget] = useState<string>('')
  const [additionalReason, setAdditionalReason] = useState<string>('')
  const [selections, setSelections] = useState<Array<string> | undefined>(undefined)
  const [selectionPlaceholder, setSelectionPlaceholder] = useState<string | undefined>(undefined)

  // TODO 타겟에 따라 쿼리, 쿼리 결과 값 textInputSelection으로 가져오기
  const dummyUsers: Array<{id: string, companyName: string}> = [
    {id: 'compy07', companyName: '24시 대부'},
    {id: 'ximya_kim', companyName: 'Beasts And Natives Alike'},
  ]
  const getSimilar = (target: string) => {
    const res: Array<string> = []
    dummyUsers.forEach(user => {
      const targetChars = target.replaceAll(' ', '').split('')
      if (
        targetChars.some(char => user.id.includes(char) || user.companyName.includes(char))
      ) {
        res.push(`${user.id}-${user.companyName}`)
      }
    })
    return res
  }

  useEffect(() => {
    if(target !== '') {
      const similar = getSimilar(target)
      if(similar.length > 0) {
        setSelections(similar)
        setSelectionPlaceholder(undefined)
      } else {
        setSelectionPlaceholder(`${target}과 관련된 아이디, 업체명을 찾지 못했어요`)
        setSelections(undefined)
      }
    } else {
      setSelections(undefined)
      setSelectionPlaceholder(undefined)
    }
  }, [target])

  return {
    target, setTarget,
    additionalReason, setAdditionalReason,
    selections,
    selectionPlaceholder,
  }
}