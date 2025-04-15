import {MotionProps} from 'framer-motion'

export type TIconListKey =
  'sidebarArrow' |
  'setting' |
  'userNavigationIcon' |
  'advertisementNavigationIcon' |
  'customerCenterNavigationIcon' |
  'certifiedCompanyNavigationIcon' |
  'loanInquiryNavigationIcon' |
  'arrow' |
  'check' |
  'star' |
  'reload' |
  'add' |
  'search' |
  'close' |
  'warning' |
  'toFirst' |
  'toLast' |
  'permission'
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
