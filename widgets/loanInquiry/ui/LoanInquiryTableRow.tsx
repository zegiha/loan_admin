import {formatDateDotYmd, formatPhoneWithHyphen} from '@/shared/lib'
import {Typo} from '@/shared/ui/atoms'
import {TableRow} from '@/shared/ui/molecules'
import {ILoanInquiryTalbeRow} from '@/widgets/loanInquiry/const/type'

export default function LoanInquiryTableRow({
  tel,
  available_location,
  title,
  writed_date,
  moreInfoFunc
}: ILoanInquiryTalbeRow) {
  return <TableRow>
    <Typo.Contents width={128}>{formatPhoneWithHyphen(tel)}</Typo.Contents>
    <Typo.Contents width={40}>{available_location}</Typo.Contents>
    <Typo.Contents width={'fill'} textOverflowLine={1}>
      {title}
    </Typo.Contents>
    <Typo.Contents width={90}>
      {formatDateDotYmd(new Date(writed_date))}
    </Typo.Contents>
    <Typo.Contents
      width={42}
      color={'dim'}
      underline
      onClick={moreInfoFunc}
    >
      더보기
    </Typo.Contents>
  </TableRow>
}