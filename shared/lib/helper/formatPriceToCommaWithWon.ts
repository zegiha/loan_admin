import numberToStringWithComma from '@/shared/lib/helper/numberToStringWithComma'

export default function (value: string | number): string {
  return numberToStringWithComma(value) + '원'
}
