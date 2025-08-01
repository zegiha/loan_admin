import {CSSProperties} from 'react'

export type TTextSize =
  'display' |
  'header' |
  'title' |
  'body' |
  'subBody' |
  'contents' |
  'caption';

export type TTextWidth =
  'fill' |
  'hug' |
  number;

export type TColor =
  'generic' |
  'variable' |
  'dim' |
  'primary' |
  'onPrimary' |
  'onPrimaryDim' |
  'error' |
  'red' |
  'green' |
  undefined;

export interface ITypo {
  children: string | React.ReactNode;
  isPre?: boolean | 'wrap' | 'nowrap';
  emphasize?: boolean;
  width?: TTextWidth;
  textOverflowLine?: number;
  color?: TColor,
  textAlign?: 'start' | 'center' | 'end';
  underline?: boolean;
  style?: CSSProperties;
  className?: string;
  onClick?: () => void;
}

export interface IBaseTypo extends ITypo{
  textSize: TTextSize;
}
