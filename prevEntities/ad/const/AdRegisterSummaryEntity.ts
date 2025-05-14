import {AdEntity} from '@/prevEntities'
import AdRegisterEntity from '@/prevEntities/ad/const/AdRegisterEntity'

export default interface AdRegisterSummaryEntity extends Omit<AdRegisterEntity, 'ads'> {
  adNames: Array<string>
}
