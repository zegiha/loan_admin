import {IIcon} from '@/shared/const'

export type TIconSize = 'small' | 'medium' | 'large';

export interface IIconButton extends Omit<IIcon, 'size'> {
  onClick: () => void
  size: TIconSize
}