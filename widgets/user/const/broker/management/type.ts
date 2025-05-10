import {BrokerEntitySummary} from '../../../../../prevEntities'

export interface IManagementTableRow extends Omit<BrokerEntitySummary, 'userId'> {
  moreInfoSidepeekFunc: () => void
  // logoutModalFunc: () => void
  deleteUserModalFunc: () => void
}

export interface IBrokerInfo {
  title: string
  content: Array<{
    label: string
    contents: string
  }>
}
