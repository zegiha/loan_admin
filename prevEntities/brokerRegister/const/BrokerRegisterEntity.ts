import BrokerRegisterReqSummaryEntity from '@/prevEntities/brokerRegister/const/BrokerRegisterSummary'

export default interface BrokerRegisterEntity extends BrokerRegisterReqSummaryEntity {
  phone: string
  exponentName: string
  brokerageNumber : string
  advertisementPhone: string
  brokerageStartPeriod: Date
  brokerageEndPeriod: Date
  brokerageRegistrar: string
  brokerageRegistrationCertificateUrl: string
  businessRegistrationCertificateUrl: string
  companyPhone: string
  companyLocation: string
}
