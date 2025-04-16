import {TableHeader} from '@/shared/ui/molecules'
import {Typo} from '@/shared/ui/atoms'

export default function BlackListTableHeader() {
  return (
    <TableHeader>
      <Typo.Contents width={'fill'}>아이디</Typo.Contents>
      <Typo.Contents width={'fill'}>업체명</Typo.Contents>
      <Typo.Contents width={'fill'}>사유</Typo.Contents>
      <Typo.Contents width={'fill'}>제외</Typo.Contents>
    </TableHeader>
  )
}
