import {BrokerEntity} from '@/widgets/user/const/broker/BrokerEntity'

export default function getBrokerById(userId: string): BrokerEntity {
  return {
    // TODO 추가로 사용자 정보에 들어갈만한거 있으면 넣기
    userId: 'f1eb91d2-c07c-4be0-9efe-be42901cd935',
    id: "ximya_kim",
    password: "securePassword123!",
    phone: "010-1234-5678",
    exponentName: "홍길동",
    brokerageNumber: "BR-20250001",
    advertisementPhone: "010-9876-5432",
    brokerageStartPeriod: new Date("2025-01-01"),
    brokerageEndPeriod: new Date("2026-01-01"),
    brokerageRegistrar: "대한중개사협회",
    brokerageRegistrationCertificateUrl: "https://i.pinimg.com/736x/b2/df/88/b2df88d49add10274010b248987d14a2.jpg",
    businessRegistrationCertificateUrl: "https://i.pinimg.com/736x/b2/df/88/b2df88d49add10274010b248987d14a2.jpg",
    companyName: "Beasts And Natives Alike",
    companyPhone: "02-1234-5678",
    companyLocation: "서울특별시 강남구 테헤란로 123",
    blackListStatus: false
  }
}