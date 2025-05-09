'use client'

import {AdEditEntity, getAdEditEntityById} from '../../../../../prevEntities'
import {formatAdContentToLabelAndData} from '@/shared/lib'
import {IAdEditDetailData} from '@/widgets/ad/const/adReq/adEdit/type'
import {useQuery} from '@tanstack/react-query'

export default function useAdEditDetail(target: {id: string, companyName: string, editId: string}) {
  const queryRes = useQuery<AdEditEntity, Error, IAdEditDetailData>({
    queryKey: [`adEditDetail-${target.editId}`],
    queryFn: () => getAdEditEntityById(target.editId),
    select: v => {
      const adCurrent = formatAdContentToLabelAndData(v.adCurrent)
      const adEdited = formatAdContentToLabelAndData(v.adEdited)
      return {
        ...target,
        ...v,
        adCurrent,
        adEdited,
      }
    }
  })

  return {
    ...queryRes
  }
}