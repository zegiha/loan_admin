import {Typo} from '@/shared/ui/atoms'
import {TableRow} from '@/shared/ui/molecules'
import {ILeaveTableRow} from '@/widgets/user/const/broker/leave/type'

export default function({
  id,
  companyName,
  approveModalFunc,
  rejectModalFunc
}: ILeaveTableRow) {
  return <TableRow>
    <Typo.Contents width={'fill'}>{id}</Typo.Contents>
    <Typo.Contents width={'fill'}>{companyName}</Typo.Contents>
    <Typo.Contents
      onClick={approveModalFunc}
      width={'fill'}
      color={'red'}
      underline
    >
      승인하기
    </Typo.Contents>
    <Typo.Contents
      onClick={rejectModalFunc}
      width={'fill'}
      color={'red'}
      underline
    >
      거절하기
    </Typo.Contents>
  </TableRow>
}