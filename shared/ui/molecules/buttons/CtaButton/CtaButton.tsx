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
  disabled,
}: {
  onClick: () => void
  children: ReactNode
  width?: 'fill' | 'hug' | number
  flex?: number
  height?: 'normal' | 'large' | 'small'
  color?: 'primary' | 'gray' | 'red'
  disabled?: boolean
}) {
  const {
    getWidth,
    getHeight,
    getPadding
  } = CtaButtonHelper

  return <button
    className={classNames([
      style.default,
      style[color],
      disabled && style.disabled
    ])}
    style={{
      height: getHeight(height),
      width: getWidth(width),
      borderRadius: 4,
      padding: width === 'hug' ? getPadding(height) : undefined,
      flex: `${flex} 0 0`,
    }}
    onClick={() => {
      if(!disabled) onClick()
    }}
  >
    {children}
  </button>
}