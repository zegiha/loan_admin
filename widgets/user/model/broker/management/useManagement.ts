'use client'

import {IManagementTableRow} from '@/widgets/user/const/broker/management/type'
import {useState} from 'react'
import {useUserControllerActives} from "@/entities/api/user/user";
import {BrokerEntity} from "@/prevEntities";

export default function() {
  const [isDeleteOpen, setIsDeleteOpen] = useState<boolean>(false)
  const [isSidepeekOpen, setIsSidepeekOpen] = useState<boolean>(false)
  const [targetUser, setTargetUser] = useState<BrokerEntity | null>(null)

  const queryRes = useUserControllerActives({
    query: {
      select: v => {
        const res: Array<IManagementTableRow> = []
        v.forEach(v => {
          const broker: BrokerEntity = {
            ...v,
            userId: v.id,
            phone: v.tel,
            brokerageNumber: v.registeredNumber,
            advertisementPhone: v.advertisementTel,
            brokerageStartPeriod: new Date(v.registerPeriodStart),
            brokerageEndPeriod: new Date(v.registerPeriodEnd),
            brokerageRegistrar: v.registrar,
            brokerageRegistrationCertificateUrl: v.loanRegistrationCertificate ?? '',
            businessRegistrationCertificateUrl: v.businessRegistrationCertificate ?? '',
            companyPhone: v.companyTel,
            blackListStatus: v.isBlacklist,
            remainJump: 'remainScrollAdJumpCount' in v ? v.remainScrollAdJumpCount as number : -1,
            remainAvailableCompany: 'remainRealTimeLoanInquiryCompanyRegistration' in v ? v.remainRealTimeLoanInquiryCompanyRegistration as number : -1,
          }
          res.push({
            ...broker,
            moreInfoSidepeekFunc: () => {
              setTargetUser({...broker})
              setIsSidepeekOpen(true)
            },
            deleteUserModalFunc: () => {
              setTargetUser({...broker})
              setIsDeleteOpen(true)
            }
          })
        })
        return res
      }
    }
  })

  const closeFunc = () => {
    setTargetUser(null)
    queryRes.refetch()
  }

  return {
    isDeleteOpen, setIsDeleteOpen,
    isSidepeekOpen, setIsSidepeekOpen,
    targetUser, setTargetUser,
    closeFunc,
    ...queryRes,
  }
}
