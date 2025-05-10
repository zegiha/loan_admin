'use client'

import {useUserControllerDeactive} from '@/entities/api/user/user'
import {yyyyMmDdToDate} from '@/shared/lib'
import {IRegisterReqTableRow} from '@/widgets/user/const/broker/register/type'
import axios from 'axios'
import {useEffect, useState} from 'react'

export default function useRegisterReq() {
  const [showRow, setShowRow] = useState(10)
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const [registerReqData, setRegisterReqData] = useState<Omit<IRegisterReqTableRow, 'moreInfoFunc'> | null>(null)

  const queryReq = useUserControllerDeactive({
    query: {
      select: v => {
        const res: Array<IRegisterReqTableRow> = []
        v.forEach(v => {
          console.log(v)
          const registerData: Omit<IRegisterReqTableRow, 'moreInfoFunc'> = {
            ...v,
            brokerageNumber: v.registeredNumber,
            phone: v.tel,
            brokerageRegistrar: v.registrar,
            advertisementPhone: v.advertisementTel,
            brokerageStartPeriod: yyyyMmDdToDate(v.registerPeriodStart),
            brokerageEndPeriod: yyyyMmDdToDate(v.registerPeriodEnd),
            brokerageRegistrationCertificateUrl: v.loanRegistrationCertificate ?? '',
            businessRegistrationCertificateUrl: v.businessRegistrationCertificate ?? '',
            companyPhone: v.companyTel,
            reqDate: new Date(),
          }
          res.push({
            ...registerData,
            moreInfoFunc: () => {
              setRegisterReqData({...registerData})
              setIsOpen(true)
            }
          })
        })
        return res
      },
    }
  })

  return {
    showRow, setShowRow,
    isOpen, setIsOpen,
    registerReqData, setRegisterReqData,
    ...queryReq
  }
}
