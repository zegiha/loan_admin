import {formatDateDotYmd} from '@/shared/lib'
import {Typo} from '@/shared/ui/atoms'
import {TableRow, TextButton} from '@/shared/ui/molecules'
import {IInquiryTableRow} from '@/widgets/inquiry/const/type'

export default function InquiryTableRow({
  title,
  createdAt,
  detailFunc,
}: IInquiryTableRow) {
  return <TableRow>
    <Typo.Contents
      width={'fill'}
      textOverflowLine={1}
    >
      {title}
    </Typo.Contents>
    <Typo.Contents width={84}>{formatDateDotYmd(createdAt)}</Typo.Contents>
    <TextButton width={60} onClick={detailFunc}>
      상세보기
    </TextButton>
  </TableRow>
}