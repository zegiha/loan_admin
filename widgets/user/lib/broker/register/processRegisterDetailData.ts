import {BrokerRegisterEntity, registerEntityLabel} from '../../../../../prevEntities'
import {formatDateDotYmd} from "@/shared/lib";
import {IRegisterDetailData} from '@/widgets/user/const/broker/register/type'

export default function processRegisterDetailData(data: BrokerRegisterEntity | null): Array<IRegisterDetailData> {
  if(data === null) return []

  const res: Array<IRegisterDetailData> = []
  res.push({
    subtitle: '계정 정보',
    data: [
      {label: registerEntityLabel['id'] ?? '', contents: data['id']},
      {label: registerEntityLabel['phone'] ?? '', contents: data['phone']},
      {label: registerEntityLabel['exponentName'] ?? '', contents: data['exponentName']},
    ]
  })
  res.push({
    subtitle: '대부업 정보',
    data: [
      {label: registerEntityLabel['brokerageNumber'] ?? '', contents: data['brokerageNumber']},
      {label: registerEntityLabel['advertisementPhone'] ?? '', contents: data['advertisementPhone']},
      {label: registerEntityLabel['brokerageStartPeriod'] ?? '', contents: formatDateDotYmd(data['brokerageStartPeriod'])},
      {label: registerEntityLabel['brokerageEndPeriod'] ?? '', contents: formatDateDotYmd(data['brokerageEndPeriod'])},
      {label: registerEntityLabel['brokerageRegistrar'] ?? '', contents: data['brokerageRegistrar']},
      {label: registerEntityLabel['brokerageRegistrationCertificateUrl'] ?? '', contents: data['brokerageRegistrationCertificateUrl']},
    ]
  })
  res.push({
    subtitle: '업체 정보',
    data: [
      {label: registerEntityLabel['companyName'] ?? '', contents: data['companyName']},
      {label: registerEntityLabel['companyPhone'] ?? '', contents: data['companyPhone']},
      {label: registerEntityLabel['companyLocation'] ?? '', contents: data['companyLocation']},
      {label: registerEntityLabel['businessRegistrationCertificateUrl'] ?? '', contents: data['businessRegistrationCertificateUrl']},
    ]
  })

  return res
}
