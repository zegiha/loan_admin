import { AdEntity, TAdEntityKeys, TAdEntityValues } from '../../../prevEntities'
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
          'product_type',
          'loan_available_location',
          'image_url',
          'cover_img',
          'loan_limit',
        ].includes(key)
      ) {
        if (Array.isArray(value) && value.length > 0 && value.every(item => isTLocation(item))) {
          console.log(value)
          res.push({
            label: adContentsKeyToKorean(key),
            contents: value.join(', '),
          })
        } else if (Array.isArray(value) && value.length > 0 && value.every(v => isTProduction(v))) {
          res.push({
            label: adContentsKeyToKorean(key),
            contents: value.join(', '),
          })
        } else if (!Array.isArray(value) && !!value) {
          if(typeof value === 'number')
            res.push({
              label: adContentsKeyToKorean(key),
              contents: value.toLocaleString('ko-KR'),
            })
          else
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
    case 'product_type':
      return '대출 가능 상품'
    case 'image_url':
      return '광고 이미지'
    case 'cover_img':
      return '광고 이미지'
    case 'ad_name':
      return '광고 옵션'
    case 'loan_limit':
      return '대출 한도'
    default:
      return ''
  }
}
