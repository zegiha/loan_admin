import BrokerRegisterReqSummaryEntity from '@/entities/brokerRegister/const/BrokerRegisterSummary'

export default interface BrokerRegisterEntity extends BrokerRegisterReqSummaryEntity {
  password: string
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
