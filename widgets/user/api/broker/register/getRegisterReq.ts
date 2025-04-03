import {IRegisterReq} from '@/widgets/user/const/broker/register/type'

export default function getRegisterReq(): Array<IRegisterReq> {
  // TODO API 연결
  const dummy: IRegisterReq = {userId: 'uuid', id: 'compy07', companyName: '24시 대부', reqDate: new Date()}
  const res: Array<IRegisterReq> = []
  for(let i = 0; i < 40; i++) {
    res.push(dummy)
  }

  return res
}