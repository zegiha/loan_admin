// import {axiosWithToken} from '@/shared/lib'

import BrokerEntitySummary from '@/entities/broker/const/BrokerSummaryEntity'

export default async function getBrokerSummary(): Promise<Array<BrokerEntitySummary>> {
  // TODO API 연결 시 이용
  // const axios = await axiosWithToken()
  // return axios.get('')
  const dummy: BrokerEntitySummary = {
    userId: 'f1eb91d2-c07c-4be0-9efe-be42901cd935',
    id: 'ximya_kim',
    companyName: 'Beasts And Natives Alike',
  }
  const res: Array<BrokerEntitySummary> = []
  for(let i = 0; i < 72; i++) res.push(dummy)

  return res
}