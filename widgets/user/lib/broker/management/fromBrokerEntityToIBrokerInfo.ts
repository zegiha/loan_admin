import {BrokerEntity} from '@/widgets/user/const/broker/BrokerEntity'
import {IBrokerInfo} from '@/widgets/user/const/broker/management/type'


export default function(data: BrokerEntity): Array<IBrokerInfo> {
  return [
    {
      title: '계정정보',
      content: [
        { label: '아이디', contents: data.id },
        { label: '비밀번호', contents: data.password },
        { label: '블랙리스트 등록 여부', contents: data.blackListStatus ? '예' : '아니오' },
        { label: '전화번호', contents: data.phone },
        { label: '광고용 전화번호', contents: data.advertisementPhone },

      ],
    },
    {
      title: '업체정보',
      content: [
        { label: '업체명', contents: data.companyName },
        { label: '업체연락처', contents: data.companyPhone },
        { label: '소재지', contents: data.companyLocation },
        { label: '사업자 등록증', contents: data.businessRegistrationCertificateUrl },
      ],
    },
    {
      title: '대부업정보',
      content: [
        { label: '대표자명', contents: data.exponentName },
        { label: '대부(중개)등록번호', contents: data.brokerageNumber },
        { label: '대출 광고 전화번호', contents: data.advertisementPhone },
        { label: '등록 유효기간 시작일', contents: data.brokerageStartPeriod.toISOString().split('T')[0] },
        { label: '등록 유효기간 종료일', contents: data.brokerageEndPeriod.toISOString().split('T')[0] },
        { label: '등록기관', contents: data.brokerageRegistrar },
        { label: '대부업 등록증', contents: data.brokerageRegistrationCertificateUrl },
      ],
    },
  ];
}
