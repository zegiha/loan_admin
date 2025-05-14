import { AdEntity, TAdEntityKeys, TAdEntityValues } from '../../../prevEntities'
import { locationMap, productionMap } from '@/shared/const'
import { isTLocation, isTProduction } from '@/shared/lib'

export default function formatAdContentToLabelAndData(
  data: AdEntity
): Array<{ label: string; contents: string }> {
  const res: Array<{ label: string; contents: string }> = []

  ;(Object.entries(data) as Array<[TAdEntityKeys, TAdEntityValues]>).forEach(
    ([key, value]: [TAdEntityKeys, TAdEntityValues]) => {
      if (
        [
          'title',
          'sub_title',
          'contents',
          'loan_available_location',
          'image_url',
          'ad_name',
        ].includes(key)
      ) {
        if (Array.isArray(value) && value.every(item => isTLocation(item))) {
          res.push({
            label: adContentsKeyToKorean(key),
            contents: value.map(v => locationMap[v]).join(', '),
          })
        } else if (Array.isArray(value) && value.every(v => isTProduction(v))) {
          res.push({
            label: adContentsKeyToKorean(key),
            contents: value.map(v => productionMap[v]).join(', '),
          })
        } else if (!Array.isArray(value)) {
          res.push({
            label: adContentsKeyToKorean(key),
            contents: value,
          })
        }
      }
    }
  )

  return res
}

function adContentsKeyToKorean(v: Omit<TAdEntityKeys, 'ad_name'>): string {
  switch (v) {
    case 'title':
      return '제목'
    case 'sub_title':
      return '부제목'
    case 'contents':
      return '내용'
    case 'loan_available_location':
      return '대출 가능 지역'
    case 'image_url':
      return '광고 이미지'
    case 'ad_name':
      return '광고 옵션'
    default:
      return ''
  }
}
