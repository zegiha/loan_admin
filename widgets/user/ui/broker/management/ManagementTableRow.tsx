import {Typo} from '@/shared/ui/atoms'
import {TableRow} from '@/shared/ui/molecules'
import {IManagementTableRow} from '@/entities/broker/const/management/type'

export default function({
  id,
  companyName,
  moreInfoSidepeekFunc,
  logoutModalFunc,
  deleteUserModalFunc,
}: IManagementTableRow) {
  return (
    <TableRow>
      <Typo.Contents width={'fill'}>
        {id}
      </Typo.Contents>
      <Typo.Contents width={'fill'}>
        {companyName}
      </Typo.Contents>
      <Typo.Contents
        width={'fill'}
        color={'dim'}
        underline
        onClick={moreInfoSidepeekFunc}
      >
        더보기
      </Typo.Contents>
      <Typo.Contents
        width={'fill'}
        color={'error'}
        underline
        onClick={logoutModalFunc}
      >
        로그아웃하기
      </Typo.Contents>
      <Typo.Contents
        width={'fill'}
        color={'error'}
        underline
        onClick={deleteUserModalFunc}
      >
        삭제하기
      </Typo.Contents>
    </TableRow>
  )
}