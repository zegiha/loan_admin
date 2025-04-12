import {productionValues, TProduction} from '@/shared/const'

export default function isTProduction(v: any): v is TProduction {
  return productionValues.has(v)
}