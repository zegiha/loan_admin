import {Col} from '@/shared/ui/atoms'
import style from './style.module.css'

export default function Table({
  children,
  maxShowingRow,
}: {
  children: React.ReactNode
  maxShowingRow?: number
}) {
  return (
    <Col
      className={style.table}
      width={'fill'}
      style={{
        height: maxShowingRow ? maxShowingRow * 48 : 'min-content'
      }}
    >
      {children}
    </Col>
  )
}
