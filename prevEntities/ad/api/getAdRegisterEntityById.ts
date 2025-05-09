import {AdRegisterEntity} from '@/prevEntities'

export default async function(reqId: string): Promise<AdRegisterEntity> {
  return {
    adReqId: reqId,
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
        img: 'https://i.pinimg.com/736x/8c/c7/29/8cc72912d025ebfeb4ba92939da52f9b.jpg',
        option: ['Busan', 'Chungbuk']
      }
    ],
    depositorName: 'name',
    beDepositedTotalAmount: 500000
  }
}