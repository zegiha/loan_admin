import {Typo} from '@/shared/ui/atoms'
import {TableHeader} from '@/shared/ui/molecules'

export default function() {
  return <TableHeader>
    <Typo.Contents width={32}>분류</Typo.Contents>
    <Typo.Contents width={'fill'}>제목</Typo.Contents>
    <Typo.Contents width={84}>작성일</Typo.Contents>
    <Typo.Contents width={84}>조회수</Typo.Contents>
    <Typo.Contents width={60}>내용 상세</Typo.Contents>
  </TableHeader>
}