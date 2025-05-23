import {Typo} from '@/shared/ui/atoms'
import {TableHeader} from '@/shared/ui/molecules'

export default function LoanInquiryTableHeader() {
  return <TableHeader>
    <Typo.Contents width={128}>작성자 번호</Typo.Contents>
    <Typo.Contents width={40}>지역</Typo.Contents>
    <Typo.Contents width={'fill'}>제목</Typo.Contents>
    <Typo.Contents width={90}>작성일</Typo.Contents>
    <Typo.Contents width={42}>더보기</Typo.Contents>
  </TableHeader>
}