import {Row} from '@/shared/ui/atoms'
import style from './style.module.css'

export default function TableRow({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Row
      className={style.tableRow}
      // alignItems={'center'}
      width={'fill'}
      gap={24}
    >
      {children}
    </Row>
  )
}