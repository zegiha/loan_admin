import BrokerRegisterReqSummaryEntity from '@/entities/brokerRegister/const/BrokerRegisterSummary'

export default function(): Array<BrokerRegisterReqSummaryEntity> {
  // TODO API 연결
  const dummy: BrokerRegisterReqSummaryEntity = {
    reqId: '7069f510-14f3-4756-a852-9b465e47893a',
    id: 'compy07',
    companyName: '24시 대부',
    reqDate: new Date()
  }
  const res: Array<BrokerRegisterReqSummaryEntity> = []
  for(let i = 0; i < 40; i++) {
    res.push(dummy)
  }

  return res
}