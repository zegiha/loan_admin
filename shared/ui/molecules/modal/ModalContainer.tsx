import {transition} from '@/shared/const'
import {Col} from '@/shared/ui/atoms'
import {ReactNode} from 'react'
import style from './style.module.css'
import classNames from 'classnames'

export default function({
  size,
  children,
  gap
}: {
  size: 'small' | 'medium' | 'large'
  children: ReactNode
  gap?: number
}) {
  return (
    <Col
      className={classNames([
        size === 'small' && style.SModalContainer,
        size === 'medium' && style.MModalContainer,
        size === 'large' && style.LModalContainer,
      ])}
      gap={gap}
      onClick={e => e.stopPropagation()}
      motion={{
        initial: { opacity: 0, y: -12 },
        animate: { opacity: 1, y: 0 },
        transition: transition.normal
      }}
    >
      {children}
    </Col>
  )
}