import {adNameToKorean} from '@/shared/lib'
import {Typo} from '@/shared/ui/atoms'
import {TableRow, TextButton} from '@/shared/ui/molecules'
import {IAdEditTableRow} from '@/widgets/ad/const/adReq/adEdit/type'

export default function AdEditTableRow({
  id,
  companyName,
  adName,
  detailFunc,
}: IAdEditTableRow){
  return <TableRow>
    <Typo.Contents width={'fill'}>
      {id}
    </Typo.Contents>
    <Typo.Contents width={'fill'}>
      {companyName}
    </Typo.Contents>
    <Typo.Contents width={'fill'}>
      {adNameToKorean(adName)}
    </Typo.Contents>
    <TextButton onClick={detailFunc}>
      더보기
    </TextButton>
  </TableRow>
}