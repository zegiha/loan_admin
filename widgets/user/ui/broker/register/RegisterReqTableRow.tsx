import {formatDateDotYmd} from '@/shared/lib'
import {TableRow} from '@/shared/ui/molecules'
import {Typo} from '@/shared/ui/atoms'
import {IRegisterReqTableRow} from '@/widgets/user/const/broker/register/type'

export default function RegisterReqTableRow({
  id,
  companyName,
  reqDate,
  moreInfoFunc
}: Omit<IRegisterReqTableRow, 'reqId'>) {
  return <TableRow>
    <Typo.Contents width={'fill'}>
      {id}
    </Typo.Contents>
    <Typo.Contents width={'fill'}>
      {companyName}
    </Typo.Contents>
    <Typo.Contents width={'fill'}>
      {formatDateDotYmd(reqDate)}
    </Typo.Contents>
    <Typo.Contents
      width={'fill'}
      color={'dim'}
      onClick={() => {moreInfoFunc()}}
      underline
    >
      더보기
    </Typo.Contents>
  </TableRow>
}