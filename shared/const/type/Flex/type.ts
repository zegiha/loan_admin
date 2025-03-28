import {MotionProps} from 'framer-motion'
import {CSSProperties} from "react";

export type  justifyContents =
  'start' |
  'center' |
  'end' |
  'space-between'

export type alignItems =
  'start' |
  'center' |
  'end'

export type width = 'fill' | number

export interface IRowAndCol {
  justifyContents?: justifyContents
  alignItems?: alignItems
  wrap?: boolean
  gap?: number
  className?: string
  width?: width
  style?: CSSProperties
  children: React.ReactNode
  ref?: React.Ref<HTMLDivElement> | undefined
  onClick?: () => void
  motion?: boolean | MotionProps
}

export interface IFlex extends IRowAndCol {
  flexDirection?: 'row' | 'col'
}
