import {BrokerRegisterEntity} from '@/prevEntities'
import BrokerEntitySummary from '@/prevEntities/broker/const/BrokerSummaryEntity'

export default interface BrokerEntity
  extends BrokerEntitySummary,
    Omit<BrokerRegisterEntity,
      'reqId' |
      'reqDate' |
      'brokerageRegistrationCertificateUrl' |
      'businessRegistrationCertificateUrl'
    > {
  // TODO 추가로 사용자 정보에 들어갈만한거 있으면 넣기

  brokerageRegistrationCertificateUrl?: string
  businessRegistrationCertificateUrl?: string
  blackListStatus: boolean
}
