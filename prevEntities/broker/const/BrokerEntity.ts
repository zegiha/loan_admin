import {BrokerRegisterEntity} from '@/prevEntities'
import BrokerEntitySummary from '@/prevEntities/broker/const/BrokerSummaryEntity'

export default interface BrokerEntity
  extends BrokerEntitySummary,
    Omit<BrokerRegisterEntity,
      'reqId' |
      'reqDate'
    > {
  // TODO 추가로 사용자 정보에 들어갈만한거 있으면 넣기

  remainJump: number
  remainAvailableCompany: number

  blackListStatus: boolean
}
