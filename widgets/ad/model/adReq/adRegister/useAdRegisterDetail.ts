'use client'

import {AdRegisterEntity, BrokerEntitySummary, getAdRegisterEntityById} from '../../../../../prevEntities'
import {adNameToKorean} from '@/shared/lib'
import formatAdContentToLabelAndData from '@/shared/lib/helper/formatAdContentToLabelAndData'
import {IAdRegisterDetail} from '@/widgets/ad/const/adReq/adRegister/type'
import {useQuery} from '@tanstack/react-query'
import {useAdsPrivateControllerFindAllByGroupId} from "@/entities/api/advertisement-private/advertisement-private";
import {AdResponseDto} from "@/entities/const";
import {AdEntity} from "@/prevEntities";
import {useEffect} from "react";

export default function (target: string) {
  const adResposeDtoToIAdRegisterDetail = (v: AdResponseDto): IAdRegisterDetail['data'] => {
    const res: IAdRegisterDetail['data'] = []

    const usingKey = [
    'title',
    'sub_title',
    'contents',
    'image_url',
    'loan_available_location',
    'cover_img',
    'loan_limit',
    'product_type',
    ] as const;

    type UsingKey = typeof usingKey[number];

    const keyDescriptionMap: Record<UsingKey, string> = {
    title: '제목',
    sub_title: '부제목',
    contents: '본문',
    image_url: '광고 이미지',
    loan_available_location: '지역',
    cover_img: '광고 이미지',
    loan_limit: '대출 한도',
    product_type: '상품',
    };

    Object.entries(v).map(([k, v]) => {
      console.log(`${k}: ${v}`)
      const typedKey = k as UsingKey
      if(v !== null && v !== undefined && usingKey.includes(typedKey)) {
        if(Array.isArray(v)) {
          if(v.length > 0) {
            res.push({
              label: keyDescriptionMap[typedKey],
              contents: v.join(', '),
            })
          }
        } else {
          const getStringifyValue = () => {
            if(typeof v === 'string') return v
            if(Array.isArray(v) && v.length > 0) return v.join(', ')
            if(typeof v === 'number') return v.toLocaleString('ko-kr')
            return ''
          }
          res.push({
            label: keyDescriptionMap[typedKey],
            contents: getStringifyValue(),
          })
        }
      }
    })

    return res
  }

  const queryReq = useAdsPrivateControllerFindAllByGroupId(target, {
    query: {
      select: v => {
        console.log(v)
        const firstContents = v[0]
        const res: Array<IAdRegisterDetail> = []
        res.push({
          subTitle: `요청자 정보`,
          data: [
            {label: '계정 아이디', contents: firstContents.user_id},
            {label: '업체명', contents: firstContents.company_id},
            {label: '입금자명', contents: firstContents.deposit_name},
            {label: '입금될 금액', contents: firstContents.deposit_fee.toLocaleString('ko-kr')},
          ]
        })
        v.forEach(v => {
          if(
            v.ad_name !== '실시간 대출문의 업체 등록' &&
            v.ad_name !== '줄광고 점프 추가 사용'
          ) {
            res.push({
              subTitle: v.ad_name,
              data: adResposeDtoToIAdRegisterDetail(v)
            })
          } else {
            res.push({
              subTitle: v.ad_name,
                data: [{label: '입력 정보 없음', contents: ''}]
            })
          }
        })
        return res
      },
    }
  })

  return {
    ...queryReq,
  }
}
