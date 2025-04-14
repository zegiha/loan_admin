import {AdEntity, TAdEntityKeys, TAdEntityValues} from '@/entities'
import {locationMap, productionMap} from '@/shared/const'
import {isTLocation, isTProduction} from '@/shared/lib'

export default function formatAdContentToLabelAndData(data: AdEntity): Array<{label: string, contents: string}> {
  const res: Array<{label: string, contents: string}> = [];

  (Object.entries(data) as Array<[TAdEntityKeys, TAdEntityValues]>)
    .forEach(([key, value]: [TAdEntityKeys, TAdEntityValues]) => {
    if(key !== 'name') {
      if(
        Array.isArray(value) &&
        value.every(item => isTLocation(item))
      ) {
        res.push({
          label: adContentsKeyToKorean(key),
          contents: value.map(v => locationMap[v]).join(', ')
        })
      } else if(
        Array.isArray(value) &&
        value.every(v => isTProduction(v))
      ) {
        res.push({
          label: adContentsKeyToKorean(key),
          contents: value.map(v => productionMap[v]).join(', ')
        })
      } else if(
        !Array.isArray(value)
      ) {
        res.push({
          label: adContentsKeyToKorean(key),
          contents: value
        })
      }
    }
  })

  return res
}

function adContentsKeyToKorean(v: TAdEntityKeys): string {
  switch (v) {
    case 'title': return '제목'
    case 'subTitle': return '부제목'
    case 'contents': return '내용'
    case 'location': return '대출 가능 지역'
    case 'img': return '광고 이미지'
    case 'option': return '광고 옵션'
    case 'name': throw new Error('name이 들어옴(name은 contents의 key가 아닌 구분자입니다)')
    default: throw new Error('등록되지 않은 광고 key')
  }
}
