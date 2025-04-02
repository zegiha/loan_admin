import {IIconButton} from '@/shared/const'
import {getIconSize} from '@/shared/lib'
import {Icon} from '@/shared/ui/atoms'
import classNames from 'classnames'
import style from './style.module.css'

export default function IconButton({
  size,
  onClick,
  iconKey,
  fill,
  color,
}: IIconButton) {
  if(size !== 'small') throw new Error(`IconButton can be small yet`)
  return (
    <button
      onClick={() => onClick()}
      className={classNames([
        size === 'small' && style.small
      ])}
    >
      <Icon
        iconKey={iconKey}
        size={getIconSize(size)}
        fill={fill}
        color={color}
      />
    </button>
  )
}