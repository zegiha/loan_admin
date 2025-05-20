import {BrokerEntitySummary} from '@/prevEntities'

export interface ILeaveTableRow extends Omit<BrokerEntitySummary, 'userId'> {
  approveModalFunc: () => void
  rejectModalFunc: () => void
}