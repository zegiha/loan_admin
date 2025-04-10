import {BrokerRegisterEntity} from '@/entities'
import BrokerEntitySummary from '@/entities/broker/const/BrokerSummaryEntity'

export default interface BrokerEntity
  extends BrokerEntitySummary, Omit<BrokerRegisterEntity, 'reqId' | 'reqDate'> {
  // TODO 추가로 사용자 정보에 들어갈만한거 있으면 넣기
  blackListStatus: boolean
}