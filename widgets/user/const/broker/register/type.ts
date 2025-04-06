import {TSetState} from "@/shared/const";

export interface IRegisterReq {
  userId: string
  id: string
  companyName: string
  reqDate: Date
}


export interface IRegisterReqTableRow extends IRegisterReq {
  moreInfoFunc: () => void
}

export interface IRegisterDetail {
  isOpen: boolean
  setIsOpen: TSetState<boolean>
  registerReqId: string | null
}

export interface IRegisterDetailData {
  subtitle: '계정 정보' | '대부업 정보' | '업체 정보'
  data: Array<{label: string, contents: string}>
}
