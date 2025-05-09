import AdminEntity from '@/prevEntities/admin/const/adminEntity'

export default async function(): Promise<Array<AdminEntity>> {
  const dummySuper: AdminEntity = {
    userId: '71596114-e63b-452f-981f-d6c8dcb6a591',
    id: 'wonderful',
    name: 'stevie wonder',
    authority: 'SUPER',
  }
  const dummyNormal: AdminEntity = {
    userId: '71596114-e63b-452f-981f-d6c8dcb6a591',
    id: 'wonderful',
    name: 'stevie wonder',
    authority: 'NORMAL',
  }
  const res: Array<AdminEntity> = []
  for(let i = 0; i < 24; i++) {
    if(i % 4 === 0 || i % 6 === 0) res.push(dummySuper)
    else res.push(dummyNormal)
  }

  return res
}