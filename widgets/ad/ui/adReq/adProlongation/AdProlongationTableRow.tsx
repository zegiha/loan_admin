import {adNameToKorean, formatPriceToCommaWithWon} from '@/shared/lib'
import {Typo} from '@/shared/ui/atoms'
import {TableRow, TextButton} from '@/shared/ui/molecules'
import {IAdProlongation} from '@/widgets/ad/const/adReq/adProlongation/type'

export default function AdProlongationTableRow({
  id,
  companyName,
  adName,
  depositorName,
  beDepositedTotalAmount,
  permissionFunc
}: IAdProlongation) {
  return <TableRow>
    <Typo.Contents width={'fill'}>{id}</Typo.Contents>
    <Typo.Contents width={'fill'}>{companyName}</Typo.Contents>
    <Typo.Contents width={'fill'}>
      {adNameToKorean(adName)}
    </Typo.Contents>
    <Typo.Contents width={'fill'}>{depositorName}</Typo.Contents>
    <Typo.Contents width={'fill'}>
      {formatPriceToCommaWithWon(beDepositedTotalAmount)}
    </Typo.Contents>
    <TextButton onClick={permissionFunc}>
      선택하기
    </TextButton>
  </TableRow>
}