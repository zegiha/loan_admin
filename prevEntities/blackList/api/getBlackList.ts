import BlackListEntity from '@/prevEntities/blackList/const/BlackListEntity'

export default function getBlackList(): Array<BlackListEntity> {
  // TODO API 연결
  const dummy: BlackListEntity = {
    userId: '6264d82a-52bf-4d44-aa89-9880891b5050',
    id: 'jureuk7',
    companyName: '언제나 A점 대부중개',
  }
  const res: Array<BlackListEntity> = []
  for(let i = 0; i < 77; i++) res.push(dummy);

  return res;
}
