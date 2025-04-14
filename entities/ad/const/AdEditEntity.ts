import {AdEntity} from '@/entities'

export default interface AdEditEntity {
  editId: string
  userId: string
  editReqDate: Date
  adCurrent: AdEntity
  adEdited: AdEntity
}