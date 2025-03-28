import {MotionProps} from 'framer-motion'

export type TIconListKey =
  'sidebarArrow' |
  'setting' |
  'userNavigationIcon' |
  'advertisementNavigationIcon' |
  'customerCenterNavigationIcon' |
  'certifiedCompanyNavigationIcon' |
  'star'
;

export type TColor = 'dim' | 'normal' | 'variable' | 'primary' | 'none' | 'white';

export interface IIcon {
  iconKey: TIconListKey;
  color?: TColor;
  size?: number;
  fill?: boolean;
  deg?: number;
  weight?: '300' | '400'
  motion?: MotionProps | boolean;
}