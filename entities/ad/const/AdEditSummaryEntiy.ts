import {AdEntity} from '@/entities'
import AdEditEntity from '@/entities/ad/const/AdEditEntity'

export default interface AdEditSummaryEntity extends Omit<AdEditEntity, 'adEdited' | 'adCurrent'>{
  adName: AdEntity['name']
}