import { adNameToKorean, formatPriceToCommaWithWon } from '@/shared/lib'
import { Typo } from '@/shared/ui/atoms'
import { TableRow, TextButton } from '@/shared/ui/molecules'
import { IAdProlongation } from '@/widgets/ad/const/adReq/adProlongation/type'

export default function AdProlongationTableRow({
  user_id,
  company_id,
  ad_types,
  deposit_name,
  deposit_fee,
  permissionFunc,
}: IAdProlongation) {
  return (
    <TableRow>
      <Typo.Contents width={'fill'}>{user_id}</Typo.Contents>
      <Typo.Contents width={'fill'}>{company_id}</Typo.Contents>
      <Typo.Contents width={'fill'}>{ad_types}</Typo.Contents>
      <Typo.Contents width={'fill'}>{deposit_name}</Typo.Contents>
      <Typo.Contents width={'fill'}>
        {formatPriceToCommaWithWon(deposit_fee)}
      </Typo.Contents>
      <TextButton onClick={permissionFunc}>선택하기</TextButton>
    </TableRow>
  )
}
