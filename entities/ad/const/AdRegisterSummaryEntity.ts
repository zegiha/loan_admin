import {AdEntity} from '@/entities'
import AdRegisterEntity from '@/entities/ad/const/AdRegisterEntity'

export default interface AdRegisterSummaryEntity extends Omit<AdRegisterEntity, 'ads'> {
  adNames: Array<AdEntity['name']>
}