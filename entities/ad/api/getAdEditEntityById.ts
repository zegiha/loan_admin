import AdEditEntity from '@/entities/ad/const/AdEditEntity'

export default async function getAdEditEntityById(editId: string): Promise<AdEditEntity> {
  return {
    editId: editId,
    userId: '267d257b-58c8-4c25-b2b5-0705394e143e',
    editReqDate: new Date('2025-06-15'),
    adCurrent: {
      name: 'locationBanner',
      title: '인천 제일 대부업체',
      subTitle: '성공적인 생활로 이어집니다!',
      location: ['Incheon', 'Seoul'],
      img: 'https://i.pinimg.com/736x/2d/86/51/2d865167b976f87dbb727998f9429710.jpg',
      option: ['Incheon', 'Seoul', 'Gyeonggi']
    },
    adEdited: {
      name: 'locationBanner',
      title: '인천, 서울, 경기 제일 대부업체',
      subTitle: '성공적인 생활로 이어집니다!',
      location: ['Incheon', 'Seoul', 'Gyeonggi'],
      img: 'https://i.pinimg.com/736x/2d/86/51/2d865167b976f87dbb727998f9429710.jpg',
      option: ['Incheon', 'Seoul', 'Gyeonggi']
    }
  }
}