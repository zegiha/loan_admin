import {locationValues, TLocation} from '@/shared/const'

export default function isTLocation(v: any): v is TLocation {
  return locationValues.has(v)
}