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
  background='gray',
}: IIconButton) {
  if(size === 'large') throw new Error(`IconButton can be small, medium yet`)
  return (
    <button
      onClick={() => onClick()}
      className={classNames([
        size === 'small' && style.small,
        size === 'medium' && style.medium,
        background === 'gray' && style.gray,
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