import {Typo} from '@/shared/ui/atoms'
import {TableHeader} from '@/shared/ui/molecules'

export default function() {
  return <TableHeader>
    <Typo.Contents width={'fill'}>아이디</Typo.Contents>
    <Typo.Contents width={'fill'}>업체명</Typo.Contents>
    <Typo.Contents width={'fill'}>승인</Typo.Contents>
    <Typo.Contents width={'fill'}>거절</Typo.Contents>
  </TableHeader>
}