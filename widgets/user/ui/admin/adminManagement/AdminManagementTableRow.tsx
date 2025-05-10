import {Typo} from '@/shared/ui/atoms'
import {TableRow} from '@/shared/ui/molecules'
import {IAdminManagementTableRow} from '@/widgets/user/const/admin/adminManagement/type'

export default function({
  id,
  authority,
  deleteFunc,
}: IAdminManagementTableRow) {
  return <TableRow>
    <Typo.Contents width={'fill'}>{id}</Typo.Contents>
    <Typo.Contents
      width={'fill'}
      color={authority === 'SUPER' ? 'primary' : undefined}
    >
      {authority === 'SUPER' ? '최고 관리자' : '일반 관리자'}
    </Typo.Contents>
    <Typo.Contents
      width={'fill'}
      color={'red'}
      underline
      onClick={deleteFunc}
    >
      삭제하기
    </Typo.Contents>
  </TableRow>
}
