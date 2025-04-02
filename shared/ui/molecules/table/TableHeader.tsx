import {Row} from '@/shared/ui/atoms'
import style from './style.module.css'

export default function TableHeader({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Row
      className={style.tableHeader}
      width={'fill'}
      gap={24}
    >
      {children}
    </Row>
  )
}