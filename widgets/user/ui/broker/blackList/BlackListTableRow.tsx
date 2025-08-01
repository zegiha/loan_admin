import {TableRow} from '@/shared/ui/molecules'
import {Typo} from '@/shared/ui/atoms'
import {IBlackListTableRow} from '@/widgets/user/const/broker/blackList/type'

export default function BlackListTableRow({
  id,
  companyName,
  // reason,
  excludeModalOpenFunc
}: Omit<IBlackListTableRow, 'userId'>) {
  return (
    <TableRow>
      <Typo.Contents width={'fill'}>
        {id}
      </Typo.Contents>
      <Typo.Contents width={'fill'}>
        {companyName}
      </Typo.Contents>
      {/*<Typo.Contents width={'fill'}>*/}
      {/*  {reason}*/}
      {/*</Typo.Contents>*/}
      <Typo.Contents
        width={'fill'}
        color={'error'}
        onClick={() => excludeModalOpenFunc()}
        underline
      >
        제외하기
      </Typo.Contents>
    </TableRow>
  )
}