import {formatDateDotYmd, numberToStringWithComma} from '@/shared/lib'
import {Typo} from '@/shared/ui/atoms'
import {TableRow, TextButton} from '@/shared/ui/molecules'
import {IAnnouncement} from '@/widgets/announcement/const/type'

export default function({
  type,
  title,
  writedDate,
  detailFunc,
}: IAnnouncement) {
  return <TableRow>
    <Typo.Contents width={32} color={type === 'VALUABLE' ? 'primary' : undefined}>
      {type === 'VALUABLE' ? '중요' : '일반'}
    </Typo.Contents>
    <Typo.Contents width={'fill'} textOverflowLine={1} isPre={'nowrap'}>
      {title}
    </Typo.Contents>
    <Typo.Contents width={84}>
      {formatDateDotYmd(writedDate)}
    </Typo.Contents>
    {/*<Typo.Contents width={84}>*/}
    {/*  {numberToStringWithComma(viewCount)}*/}
    {/*</Typo.Contents>*/}
    <TextButton
      width={60}
      onClick={detailFunc}
    >
      상세보기
    </TextButton>
  </TableRow>
}