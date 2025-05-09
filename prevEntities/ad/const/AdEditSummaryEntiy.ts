import {AdEntity} from '../.'
import AdEditEntity from '@/prevEntities/ad/const/AdEditEntity'

export default interface AdEditSummaryEntity extends Omit<AdEditEntity, 'adEdited' | 'adCurrent'>{
  adName: AdEntity['name']
}