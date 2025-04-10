import BrokerRegisterReqSummaryEntity from '@/entities/brokerRegister/const/BrokerRegisterSummary'

export default interface BrokerEntitySummary extends Omit<BrokerRegisterReqSummaryEntity, 'reqId' | 'reqDate'> {
  userId: string
}