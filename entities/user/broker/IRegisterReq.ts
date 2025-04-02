export default interface IRegisterReq {
  id: string
  companyName: string
  reqDate: Date
  moreInfoFunc: () => void
}
