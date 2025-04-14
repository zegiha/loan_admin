'use client'

import {adNameToKorean, AdRegisterEntity, BrokerEntitySummary, getAdRegisterEntityById} from '@/entities'
import formatAdContentToLabelAndData from '@/shared/lib/helper/formatAdContentToLabelAndData'
import {IAdRegisterDetail} from '@/widgets/ad/const/adReq/adRegister/type'
import {useQuery} from '@tanstack/react-query'

export default function (target: BrokerEntitySummary & {adReqId: string}) {
  const queryReq = useQuery<AdRegisterEntity, Error, Array<IAdRegisterDetail>>({
    queryKey: [`adReq_${target.userId}`],
    queryFn: async () => getAdRegisterEntityById(target.adReqId),
    select: v => {
      const res: Array<IAdRegisterDetail> = []
      res.push({
        subTitle: '요청자 정보',
        data: [
          {label: '계정 아이디', contents: target.id},
          {label: '업체명', contents: target.companyName},
          {label: '입금자명', contents: v.depositorName},
          {label: '입금될 금액', contents: v.beDepositedTotalAmount.toLocaleString('ko-kr')},
        ]
      })
      v.ads.forEach(v => {
        res.push({
          subTitle: adNameToKorean(v.name),
          data: formatAdContentToLabelAndData(v)
        })
      })
      return res
    }
  })

  return {
    ...queryReq,
  }
}