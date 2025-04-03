export interface IRegisterReq {
  userId: string
  id: string
  companyName: string
  reqDate: Date
}


export interface IRegisterReqTableRow extends IRegisterReq {
  moreInfoFunc: () => void
}

