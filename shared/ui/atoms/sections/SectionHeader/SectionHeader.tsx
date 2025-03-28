import {Col, Typo} from '@/shared/ui/atoms'
import {ReactNode} from 'react'
import style from './style.module.css'

export default function SectionHeader({
  headerContents,
  contentsGap=0,
  children,
}: {
  headerContents: ReactNode
  contentsGap?: number
  children: ReactNode
}) {
  return (
    <Col className={style.section} width={'fill'} gap={24}>
      <Typo.Title color={'variable'} emphasize>
        {headerContents}
      </Typo.Title>
      <Col width={'fill'} gap={contentsGap}>
        {children}
      </Col>
    </Col>
  )
}