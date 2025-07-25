import {Typo} from '@/shared/ui/atoms'
import {TableHeader} from '@/shared/ui/molecules'

export default function CertificatedCompanyBlackListTableHeader() {
  return <TableHeader>
    <Typo.Contents width={'fill'}>아이디</Typo.Contents>
    <Typo.Contents width={'fill'}>업체명</Typo.Contents>
    <Typo.Contents width={'fill'}>제외</Typo.Contents>
  </TableHeader>
}
