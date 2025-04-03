export interface IBlack {
  userId: string
  id: string
  companyName: string
  reason: string
}

export interface IBlackListTableRow extends IBlack {
  excludeModalOpenFunc: () => void
}