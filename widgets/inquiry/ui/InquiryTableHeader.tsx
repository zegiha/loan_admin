import {Typo} from '@/shared/ui/atoms'
import {TableHeader} from '@/shared/ui/molecules'

export default function InquiryTableHeader() {
  return <TableHeader>
    <Typo.Contents width={'fill'}>제목</Typo.Contents>
    <Typo.Contents width={84}>문의일자</Typo.Contents>
    <Typo.Contents width={60}>내용 상세</Typo.Contents>
  </TableHeader>
}