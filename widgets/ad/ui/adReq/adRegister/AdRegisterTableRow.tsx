import {adNameToKorean} from '@/entities'
import {formatPriceToCommaWithWon, toCommaString} from '@/shared/lib'
import {Typo} from '@/shared/ui/atoms'
import {TableRow, TextButton} from '@/shared/ui/molecules'
import {IAdRegisterTableRow} from '@/widgets/ad/const/adReq/adRegister/type'

export default function({
  id,
  companyName,
  adNames,
  depositorName,
  beDepositedTotalAmount,
  detailFunc
}: IAdRegisterTableRow) {
  return <TableRow>
    <Typo.Contents width={100} textOverflowLine={1}>{id}</Typo.Contents>
    <Typo.Contents width={100} textOverflowLine={1}>{companyName}</Typo.Contents>
    <Typo.Contents width={'fill'}>{toCommaString(
      adNames.map(v => adNameToKorean(v))
    )}</Typo.Contents>
    <Typo.Contents width={72}>{depositorName}</Typo.Contents>
    <Typo.Contents width={100}>{formatPriceToCommaWithWon(beDepositedTotalAmount)}</Typo.Contents>
    <TextButton
      width={42}
      onClick={() => detailFunc()}
    >
      더보기
    </TextButton>
  </TableRow>
}