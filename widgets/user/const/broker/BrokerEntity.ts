import {RegisterReqEntity} from '@/widgets/user/const/broker/register/registerEntity'

export interface BrokerEntitySummary {
  userId: string
  id: string
  companyName: string
}

export interface BrokerEntity extends RegisterReqEntity {
  // TODO 추가로 사용자 정보에 들어갈만한거 있으면 넣기
  userId: string
  blackListStatus: boolean
}