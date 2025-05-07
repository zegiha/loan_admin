'use client'

import {yyyyMmDdToDate} from '@/shared/lib'
import {userControllerDeactive, useUserControllerDeactive} from '@/test/tmp'
import {IRegisterReqTableRow} from '@/widgets/user/const/broker/register/type'
import axios from 'axios'
import {useEffect, useState} from 'react'

export default function useRegisterReq() {
  const [showRow, setShowRow] = useState(10)
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const [registerReqData, setRegisterReqData] = useState<Omit<IRegisterReqTableRow, 'moreInfoFunc'> | null>(null)

  // const queryReq = useUserControllerDeactive({
  //   query: {
  //     select: v => {
  //       const res: Array<IRegisterReqTableRow> = []
  //       v.forEach(v => {
  //         const registerData: Omit<IRegisterReqTableRow, 'moreInfoFunc'> = {
  //           id: v.id,
  //           password: v.password,
  //           phone: v.tel,
  //           exponentName: v.exponentName,
  //           brokerageNumber: v.registeredNumber,
  //           advertisementPhone: v.advertisementTel,
  //           brokerageRegistrar: v.registrar,
  //           brokerageStartPeriod: yyyyMmDdToDate(v.registerPeriodStart),
  //           brokerageEndPeriod: yyyyMmDdToDate(v.registerPeriodEnd),
  //           brokerageRegistrationCertificateUrl: v.loanRegistrationCertificate,
  //           businessRegistrationCertificateUrl: v.businessRegistrationCertificate,
  //           companyName: v.companyName,
  //           companyPhone: v.companyTel,
  //           companyLocation: v.companyLocation,
  //           reqDate: new Date(),
  //         }
  //         res.push({
  //           ...registerData,
  //           moreInfoFunc: () => {
  //             setRegisterReqData({...registerData})
  //           }
  //         })
  //       })
  //       return res
  //     }
  //   }
  // })

  useEffect(() => {
    const tmp = async () => {
      console.log('start')
      const res = await userControllerDeactive()
      console.log(res)
    }
    tmp()
  }, [])

  return {
    showRow, setShowRow,
    isOpen, setIsOpen,
    registerReqData, setRegisterReqData,
    status: 'pending'
    // ...queryReq
  }
}