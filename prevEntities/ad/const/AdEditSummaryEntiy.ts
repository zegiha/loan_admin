import AdEditEntity from '@/prevEntities/ad/const/AdEditEntity'
import { AdEntity } from '@/prevEntities'

export default interface AdEditSummaryEntity
  extends Omit<AdEditEntity, 'adEdited' | 'adCurrent'> {
  adName: string
}
