'use client'

import { useAdsPublicControllerFindOne } from '@/entities/api/advertisement-public/advertisement-public'
import { AdEditEntity, getAdEditEntityById } from '../../../../../prevEntities'
import { formatAdContentToLabelAndData } from '@/shared/lib'
import { IAdEditDetailData } from '@/widgets/ad/const/adReq/adEdit/type'
import { useQuery } from '@tanstack/react-query'

export default function useAdEditDetail(target: string) {
  const queryRes = useAdsPublicControllerFindOne(target, {
    query: {
      select: v => {
        const adCurrent = formatAdContentToLabelAndData(v.ad)
        const adEdited = formatAdContentToLabelAndData(v.ad.pendingUpdateData)
        return {
          ...v,
          adCurrent,
          adEdited,
        }
      },
    },
  })

  console.log(queryRes.data)

  return {
    ...queryRes,
  }
}
