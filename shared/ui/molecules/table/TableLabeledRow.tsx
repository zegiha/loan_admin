import {ITableLabeledRow} from '@/shared/const'
import {TableRow} from '@/shared/ui/molecules'
import {Row, Typo} from '@/shared/ui/atoms'

export default function TableLabeledRow({
  label,
  contents,
}: ITableLabeledRow) {
  return (
    <TableRow>
      <Typo.Contents style={{flex: '1 0 0'}}>{label}</Typo.Contents>
      {typeof contents === 'string' ? (
        <Typo.Contents style={{flex: '3 0 0'}}>{contents}</Typo.Contents>
      ):(
        <Row style={{flex: '3 0 0'}}>
          {contents}
        </Row>
      )}
    </TableRow>
  )
}