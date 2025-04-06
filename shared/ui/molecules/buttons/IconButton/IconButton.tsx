import {IIconButton} from '@/shared/const'
import {getIconSize} from '@/shared/lib'
import {Icon, Typo} from '@/shared/ui/atoms'
import classNames from 'classnames'
import style from './style.module.css'

export default function IconButton({
  size,
  onClick,
  iconKey,
  active,
  fill,
  color,
  deg,
  background='gray',
}: IIconButton) {
  if(size === 'large') throw new Error(`IconButton can be small, medium yet`)
  return (
    <button
      onClick={() => onClick()}
      className={classNames([
        size === 'xsmall' && style.xsmall,
        size === 'small' && style.small,
        size === 'medium' && style.medium,
        background === 'gray' && style.gray,
        background === 'gray' && active && style.grayActive,
        background === 'transparent' && active && style.active,
      ])}
    >
      {typeof iconKey === 'number' ? (
        <Typo.Contents>
          {iconKey}
        </Typo.Contents>
      ) : (
        <Icon
          iconKey={iconKey}
          size={getIconSize(size)}
          fill={fill}
          color={color}
          deg={deg}
        />
      )}
    </button>
  )
}
