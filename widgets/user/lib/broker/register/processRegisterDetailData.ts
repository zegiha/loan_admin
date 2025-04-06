import {
  RegisterReqEntity,
  registerReqEntityLabel,
} from "@/widgets/user/const/broker/register/registerEntity";
import {IRegisterDetailData} from "@/widgets/user/const/broker/register/type";
import {formatDateDotYmd} from "@/shared/lib";

export default function processRegisterDetailData(data: RegisterReqEntity | null): Array<IRegisterDetailData> {
  if(data === null) return []

  const res: Array<IRegisterDetailData> = []
  res.push({
    subtitle: '계정 정보',
    data: [
      {label: registerReqEntityLabel['id'] ?? '', contents: data['id']},
      {label: registerReqEntityLabel['password'] ?? '', contents: data['password']},
      {label: registerReqEntityLabel['phone'] ?? '', contents: data['phone']},
      {label: registerReqEntityLabel['exponentName'] ?? '', contents: data['exponentName']},
    ]
  })
  res.push({
    subtitle: '대부업 정보',
    data: [
      {label: registerReqEntityLabel['brokerageNumber'] ?? '', contents: data['brokerageNumber']},
      {label: registerReqEntityLabel['advertisementPhone'] ?? '', contents: data['advertisementPhone']},
      {label: registerReqEntityLabel['brokerageStartPeriod'] ?? '', contents: formatDateDotYmd(data['brokerageStartPeriod'])},
      {label: registerReqEntityLabel['brokerageEndPeriod'] ?? '', contents: formatDateDotYmd(data['brokerageEndPeriod'])},
      {label: registerReqEntityLabel['brokerageRegistrar'] ?? '', contents: data['brokerageRegistrar']},
      {label: registerReqEntityLabel['brokerageRegistrationCertificateUrl'] ?? '', contents: data['brokerageRegistrationCertificateUrl']},
    ]
  })
  res.push({
    subtitle: '업체 정보',
    data: [
      {label: registerReqEntityLabel['companyName'] ?? '', contents: data['companyName']},
      {label: registerReqEntityLabel['companyPhone'] ?? '', contents: data['companyPhone']},
      {label: registerReqEntityLabel['companyLocation'] ?? '', contents: data['companyLocation']},
      {label: registerReqEntityLabel['businessRegistrationCertificateUrl'] ?? '', contents: data['businessRegistrationCertificateUrl']},
    ]
  })

  return res
}
