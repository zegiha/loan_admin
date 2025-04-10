'use client'

import {getAdRegisterSummaryEntity, getBrokerSummaryEntityById} from '@/entities'
import {IAdRegisterTableRow} from '@/widgets/ad/const/adReq/adRegister/type'
import {useQuery} from '@tanstack/react-query'

export default function() {
  const queryReq = useQuery<Array<IAdRegisterTableRow>, Error>({
    queryKey: ['adRegisterSummary'],
    queryFn: async () => {
      const adRegisterSummary = await getAdRegisterSummaryEntity()
      const res: Array<IAdRegisterTableRow> = []
      for(let i = 0; i < adRegisterSummary.length; i++) {
        const userInfo = await getBrokerSummaryEntityById(adRegisterSummary[i].userId)
        res.push({
          ...adRegisterSummary[i],
          ...userInfo,
          detailFunc: () => {}
        })
      }
      return res
    },
  })

  return {
    ...queryReq,
  }
}