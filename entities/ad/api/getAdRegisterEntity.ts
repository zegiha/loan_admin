import {adRegisterEntity} from '@/entities'

export default async function(): Promise<adRegisterEntity> {
  return {
    adId: 'fe8fac27-eb9f-4fcf-9132-053a6b3e79c0',
    userId: '4996535b-2895-4291-b18c-93baa71c738c',
    ads: [
      {
        name: 'premiumBanner',
        title: 'haha',
        location: ['All'],
      },
      {
        name: 'locationBanner',
        title: 'haha',
        subTitle: 'tmp',
        location: ['Busan', 'Chungbuk'],
        img: 'hoho',
        option: ['Busan', 'Chungbuk']
      }
    ],
    depositorName: 'name',
    beDepositedTotalAmount: 500000
  }
}