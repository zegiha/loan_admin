import {Typo} from '@/shared/ui/atoms'
import {TableRow} from '@/shared/ui/molecules'
import {IAdminRegisterReqTableRow} from '@/widgets/user/const/admin/adminRegisterReq/type'

export default function({
  id,
  name,
  authority,
  allowFunc,
  rejectFunc
}: IAdminRegisterReqTableRow) {
  return <TableRow>
    <Typo.Contents width={'fill'}>
      {id}
    </Typo.Contents>
    <Typo.Contents width={'fill'}>
      {name}
    </Typo.Contents>
    <Typo.Contents width={'fill'} color={authority === 'SUPER' ? 'primary' : undefined}>
      {authority === 'SUPER' ? '최고 관리자' : '일반 관리자'}
    </Typo.Contents>
    <Typo.Contents
      width={'fill'}
      color={'green'}
      onClick={() => allowFunc()}
      underline
    >
      승인
    </Typo.Contents>
    <Typo.Contents
      width={'fill'}
      color={'error'}
      onClick={() => rejectFunc()}
      underline
    >
      승인 거부
    </Typo.Contents>
  </TableRow>
}