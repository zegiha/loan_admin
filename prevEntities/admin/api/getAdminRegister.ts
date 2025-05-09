import AdminRegisterEntity from '@/prevEntities/admin/const/adminRegisterEntity'

export default async function(): Promise<Array<AdminRegisterEntity>> {
  const dummyNormal: AdminRegisterEntity = {
    reqId: 'ca8a9359-f9f3-46d1-ab1a-583573599b61',
    id: 'the_1975',
    name: '한지연',
    authority: 'NORMAL'
  }
  const dummySuper: AdminRegisterEntity = {
    reqId: 'ca8a9359-f9f3-46d1-ab1a-583573599b61',
    id: 'the_1975',
    name: '한지연',
    authority: 'SUPER'
  }

  const res: Array<AdminRegisterEntity> = []
  for(let i = 0; i < 32; i++) {
    if((i % 2 === 0 && i % 3 === 0 && i % 5 === 3) || (i === 3)) res.push(dummySuper)
    else res.push(dummyNormal)
  }

  return res;
}