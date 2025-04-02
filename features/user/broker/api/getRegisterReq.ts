import {userEntities} from '@/entities'

export default function getRegisterReq(): Array<userEntities['IRegisterReq']> {
  const dummy: userEntities['IRegisterReq'] = {id: 'compy07', companyName: '24시 대부', reqDate: new Date(), moreInfoFunc: () => console.log('more info!')}
  const res: Array<userEntities['IRegisterReq']> = []
  for(let i = 0; i < 40; i++) {
    res.push(dummy)
  }

  return res
}