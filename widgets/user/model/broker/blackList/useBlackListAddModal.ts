'use client'

import {getUserControllerFindAllQueryOptions, userControllerBlack, userControllerSearch} from '@/entities/api/user/user'
import {useEffect, useState} from 'react'

export default function() {
  const [target, setTarget] = useState<string>('')
  // const [additionalReason, setAdditionalReason] = useState<string>('')
  const [selections, setSelections] = useState<Array<string> | undefined>(undefined)
  const [selectionPlaceholder, setSelectionPlaceholder] = useState<string | undefined>(undefined)

  // TODO 타겟에 따라 쿼리, 쿼리 결과 값 textInputSelection으로 가져오기
  const dummyUsers: Array<{id: string, companyName: string}> = [
    {id: 'compy07', companyName: '24시 대부'},
    {id: 'ximya_kim', companyName: 'Beasts And Natives Alike'},
  ]
  const getSimilar = async (target: string) => {
    return await userControllerSearch(target)
      .then(data => {
        return data.map(v => `${v.id}-${v.companyName}`)
      })
  }

  const handleSimilar = async () => {
    if(target !== '' && !target.includes('-')) {
      const similar = await getSimilar(target)
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
  }

  useEffect(() => {
    handleSimilar()
  }, [target])

  const addToBlack = async (id: string) => {
    try {
      await userControllerBlack({id})
      return true
    } catch (e) {
      alert('문제가 발생했습니다 다시 시도해주세요')
      return false
    }
  }

  return {
    target, setTarget,
    // additionalReason, setAdditionalReason,
    selections,
    selectionPlaceholder,
    addToBlack,
  }
}
