import classNames from 'classnames'
import {ReactNode} from 'react'
import style from './style.module.css'
import {CtaButtonHelper} from '@/shared/lib'

export default function CtaButton({
  onClick,
  children,
  width,
  height='normal',
  flex,
  color='primary',
}: {
  onClick: () => void
  children: ReactNode
  width?: 'fill' | 'hug' | number
  flex?: number
  height?: 'normal' | 'large' | 'small'
  color?: 'primary' | 'gray'
}) {
  const {
    getWidth,
    getHeight,
    getPadding
  } = CtaButtonHelper

  return <button
    className={classNames([style.default, style[color]])}
    style={{
      height: getHeight(height),
      width: getWidth(width),
      borderRadius: 4,
      padding: width === 'hug' ? getPadding(height) : undefined,
      flex: `${flex} 0 0`,
    }}
    onClick={() => onClick()}
  >
    {children}
  </button>
}