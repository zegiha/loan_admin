'use client'

import {IAdRegisterTableRow} from '@/widgets/ad/const/adReq/adRegister/type'
import {useQuery} from '@tanstack/react-query'

export default function() {
  const queryReq = useQuery<IAdRegisterTableRow, Error>({
    queryKey: ['adRegisterSummary'],
    queryFn: async () => {
      const adRegisterSummaryEntity = await getAdRegisterSummary()
      const userInfo = await getBrokerSummaryById(adRegisterSummaryEntity.userId)
      return {
        ...adRegisterSummaryEntity,
        ...userInfo,
      }
    },
    select: data => {
      return {
        ...data,
        detailFunc: () => {}
      }
    }
  })
}