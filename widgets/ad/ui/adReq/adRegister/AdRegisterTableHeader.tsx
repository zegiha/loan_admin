import {Typo} from '@/shared/ui/atoms'
import {TableHeader} from '@/shared/ui/molecules'

export default function() {
  return <TableHeader>
    <Typo.Contents width={100}>아이디</Typo.Contents>
    <Typo.Contents width={100}>업체명</Typo.Contents>
    <Typo.Contents width={'fill'}>선택 광고</Typo.Contents>
    <Typo.Contents width={72}>입금자명</Typo.Contents>
    <Typo.Contents width={100}>입금될 금액</Typo.Contents>
    <Typo.Contents width={42}>더보기</Typo.Contents>
  </TableHeader>
}