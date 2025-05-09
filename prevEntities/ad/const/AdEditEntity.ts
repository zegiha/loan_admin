import {AdEntity} from '@/prevEntities'

export default interface AdEditEntity {
  editId: string
  userId: string
  editReqDate: Date
  adCurrent: AdEntity
  adEdited: AdEntity
}