import {Col, Row} from '@/shared/ui/atoms'
import Sidebar from '@/shared/ui/molecules/layouts/Slidebar/ui/Sidebar'
import {ReactNode} from 'react'
import style from './style.module.css';

export default function SidebarLayout({
  children,
  contentsPaddingVertical=72,
  contentsGap=32,
}: {
  children: ReactNode
  contentsPaddingVertical?: number
  contentsGap?: number
}) {
  return (
    <Row className={style.container} width={'fill'} gap={4}>
      <Sidebar/>
      <Col
        className={style.wrapper}
        width={'fill'}
        gap={contentsGap}
        style={{
          padding: `${contentsPaddingVertical}px 0 ${contentsPaddingVertical}px 0`,
        }}
      >
        {children}
      </Col>
    </Row>
  )
}