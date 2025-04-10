export default interface BlackListEntity {
  userId: string
  id: string
  companyName: string
  reason: string
}

export interface IBlackListTableRow extends IBlack {
  excludeModalOpenFunc: () => void
}