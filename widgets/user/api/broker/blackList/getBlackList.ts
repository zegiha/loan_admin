import {IBlack} from '@/widgets/user/const/broker/blackList/type'

export default function getBlackList(): Array<IBlack> {
  // TODO API 연결
  const dummy: IBlack = {
    userId: '6264d82a-52bf-4d44-aa89-9880891b5050',
    id: 'jureuk7',
    companyName: '언제나 A점 대부중개',
    reason: '범법행위'
  }
  const res: Array<IBlack> = []
  for(let i = 0; i < 77; i++) res.push(dummy);

  return res;
}