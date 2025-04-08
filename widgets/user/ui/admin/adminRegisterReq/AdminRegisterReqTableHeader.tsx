import {Typo} from '@/shared/ui/atoms'
import {TableHeader} from '@/shared/ui/molecules'

export default function() {
  return <TableHeader>
    <Typo.Contents width={'fill'}>아이디</Typo.Contents>
    <Typo.Contents width={'fill'}>요청자</Typo.Contents>
    <Typo.Contents width={'fill'}>권한</Typo.Contents>
    <Typo.Contents width={'fill'}>승인</Typo.Contents>
    <Typo.Contents width={'fill'}>승인 거부</Typo.Contents>
  </TableHeader>
}