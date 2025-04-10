import {adEntity} from '@/entities'
import adRegisterEntity from '@/entities/ad/const/adRegisterEntity'

export default interface adRegisterSummaryEntity extends Omit<adRegisterEntity, 'ads'> {
  adNames: Array<adEntity['name']>
}