'use client'

import { useAdsPublicControllerFindOne } from '@/entities/api/advertisement-public/advertisement-public'
import { formatAdContentToLabelAndData } from '@/shared/lib'

export default function useAdEditDetail(target: string) {
  const queryRes = useAdsPublicControllerFindOne(target, {
    query: {
      select: v => {

        const adCurrent = formatAdContentToLabelAndData(v)
        const adEdited = formatAdContentToLabelAndData(v.pendingUpdateData)

        return {
          ...v,
          adCurrent,
          adEdited,
        }
      },
    },
  })

  return {
    ...queryRes,
  }
}
