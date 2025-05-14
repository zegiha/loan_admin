'use client'

import {IAdRegisterTableRow} from '@/widgets/ad/const/adReq/adRegister/type'
import {useState} from 'react'
import {
  useAdsPrivateControllerFindAllWaitingRegistration
} from "@/entities/api/advertisement-private/advertisement-private";

export default function(
  limit: string
) {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [target, setTarget] = useState<string | null>(null)

  const queryReq = useAdsPrivateControllerFindAllWaitingRegistration({
    query: {
      select: v => {
        const res: Array<IAdRegisterTableRow> = []
        v.forEach(v => {
          res.push({
            id: v.user_id,
            companyName: v.company_id,
            adNames: v.ad_types ?? [],
            depositorName: v.deposit_name,
            beDepositedTotalAmount: v.deposit_fee,
            detailFunc: () => {
              setTarget(v.group_id)
              setIsOpen(true)
            }
          })
        })
        return res
      }
    }
  })

  // const queryReq = useQuery<Array<IAdRegisterTableRow>, Error>({
  //   queryKey: ['adRegisterSummary'],
  //   queryFn: async () => {
  //     const adRegisterSummary = await getAdRegisterSummaryEntity()
  //     const res: Array<IAdRegisterTableRow> = []
  //     for(let i = 0; i < adRegisterSummary.length; i++) {
  //       const userInfo = await getBrokerSummaryEntityById(adRegisterSummary[i].userId)
  //       res.push({
  //         ...adRegisterSummary[i],
  //         ...userInfo,
  //         detailFunc: () => {
  //           setTarget({...userInfo, ...adRegisterSummary[i]})
  //           setIsOpen(true)
  //         }
  //       })
  //     }
  //     return res
  //   },
  // })

  return {
    isOpen, setIsOpen,
    target, setTarget,
    ...queryReq,
  }
}
