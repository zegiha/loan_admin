import {IIcon, TIconListKey} from '@/shared/const'

export type TIconSize = 'xsmall' | 'small' | 'medium' | 'large';

export interface IIconButton extends Omit<IIcon, 'size' | 'iconKey'> {
  iconKey: TIconListKey | number
  onClick: () => void
  active?: boolean
  size: TIconSize
  background?: 'transparent' | 'gray'
}
