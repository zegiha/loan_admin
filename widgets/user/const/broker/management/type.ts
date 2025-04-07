import {BrokerEntitySummary} from '@/widgets/user/const/broker/BrokerEntity'

export interface IManagementTableRow extends Omit<BrokerEntitySummary, 'userId'> {
  moreInfoSidepeekFunc: () => void
  logoutModalFunc: () => void
  deleteUserModalFunc: () => void
}