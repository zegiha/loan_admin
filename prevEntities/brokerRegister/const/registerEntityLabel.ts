import {BrokerRegisterEntity} from '@/prevEntities'

const registerEntityLabel: {[K in keyof BrokerRegisterEntity]?: string} = {
  id: '아이디',
  password: '비밀번호',
  phone: '전화번호',
  exponentName: '대표자명',
  brokerageNumber: '대부(중개)등록번호',
  advertisementPhone: '대출 광고 전화번호',
  brokerageStartPeriod: '등록 유효기간 시작일',
  brokerageEndPeriod: '등록 유효기간 종료일',
  brokerageRegistrar: '등록기관',
  brokerageRegistrationCertificateUrl: '대부업 등록증',
  businessRegistrationCertificateUrl: '사업자 등록증',
  companyName: '업체명',
  companyPhone: '업체연락처',
  companyLocation: '소재지',
}

export default registerEntityLabel