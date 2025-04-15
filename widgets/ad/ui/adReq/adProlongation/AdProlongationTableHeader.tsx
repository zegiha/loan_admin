import {Typo} from '@/shared/ui/atoms'
import {TableHeader} from '@/shared/ui/molecules'

export default function AdProlongationTableHeader() {
  return <TableHeader>
    <Typo.Contents width={'fill'}>아이디</Typo.Contents>
    <Typo.Contents width={'fill'}>업체명</Typo.Contents>
    <Typo.Contents width={'fill'}>광고명</Typo.Contents>
    <Typo.Contents width={'fill'}>입금자명</Typo.Contents>
    <Typo.Contents width={'fill'}>입금될 금액</Typo.Contents>
    <Typo.Contents width={'fill'}>승인 선택</Typo.Contents>
  </TableHeader>
}