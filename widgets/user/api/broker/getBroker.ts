import {BrokerEntitySummary} from '@/widgets/user/const/broker/BrokerEntity'

export default function getBroker() {
  const dummy: BrokerEntitySummary = {
    userId: 'f1eb91d2-c07c-4be0-9efe-be42901cd935',
    id: 'ximya_kim',
    companyName: 'Beasts And Natives Alike',
  }
  const res: Array<BrokerEntitySummary> = []
  for(let i = 0; i < 72; i++) res.push(dummy)

  return res
}