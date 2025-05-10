import {Typo} from '@/shared/ui/atoms'
import {TableRow, TextButton} from '@/shared/ui/molecules'
import {ICertificatedCompanyBlackListTableRow} from '@/widgets/certificatedCompanyBlackList/const/type'

export default function CertificatedCompanyBlackListTableRow({
  id,
  companyName,
  deleteFunc,
}: ICertificatedCompanyBlackListTableRow) {
  return <TableRow>
    <Typo.Contents width={'fill'}>{id}</Typo.Contents>
    <Typo.Contents width={'fill'}>{companyName}</Typo.Contents>
    <TextButton color={'red'} onClick={deleteFunc}>
      제외하기
    </TextButton>
  </TableRow>
}
