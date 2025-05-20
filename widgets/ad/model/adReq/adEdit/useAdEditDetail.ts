'use client'

import {
  useAdsPublicControllerFindLineAds, useAdsPublicControllerFindLineOne,
  useAdsPublicControllerFindOne
} from '@/entities/api/advertisement-public/advertisement-public'
import { formatAdContentToLabelAndData } from '@/shared/lib'
import {useEffect, useState} from "react";

export default function useAdEditDetail(target: string) {
  const [data, setData] = useState<{
    id: string,
    user_id: string,
    company_id: string,
    adCurrent: Array<{ label: string; contents: string }>,
    adEdited: Array<{ label: string; contents: string }>
  } | undefined>(undefined)
  const [status, setStatus] = useState<'success' | 'pending' | 'error'>('pending')

  const common = useAdsPublicControllerFindOne(target, {
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

  const line = useAdsPublicControllerFindLineOne(target, {
    query: {
      select: v => {
        const adCurrent = formatAdContentToLabelAndData(v)
        const adEdited = formatAdContentToLabelAndData(v.pendingUpdateData)

        return {
          ...v,
          adCurrent,
          adEdited,
        }
      }
    }
  })

  useEffect(() => {
    if(line.status === 'success') {
      setData(line.data)
      setStatus('success')
    }
    if(common.status === 'success') {
      setData(common.data)
      setStatus('success')
    }

    if(line.status === 'error' && common.status === 'error') {
      setStatus('error')
    }
  }, [line.status, common.status])

  return {
    data,
    status,
  }
}
