import {TableHeader} from '@/shared/ui/molecules'
import {Typo} from '@/shared/ui/atoms'

export default function RegisterReqTableHeader() {
  return <TableHeader>
    <Typo.Contents width={'fill'}>
      아이디
    </Typo.Contents>
    <Typo.Contents width={'fill'}>
      업체명
    </Typo.Contents>
    <Typo.Contents width={'fill'}>
      요청일
    </Typo.Contents>
    <Typo.Contents width={'fill'}>
      요청 정보
    </Typo.Contents>
  </TableHeader>
}