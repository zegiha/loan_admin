import {MotionProps} from 'framer-motion'
import React, {CSSProperties, MouseEventHandler} from "react";

export type  justifyContents =
  'start' |
  'center' |
  'end' |
  'space-between'

export type alignItems =
  'start' |
  'center' |
  'end'

export type width = 'fill' | number | string

export interface IRowAndCol {
  key?: React.Key | null
  justifyContents?: justifyContents
  alignItems?: alignItems
  wrap?: boolean
  gap?: number
  className?: string
  width?: width
  style?: CSSProperties
  children: React.ReactNode
  ref?: React.Ref<HTMLDivElement> | undefined
  onClick?: MouseEventHandler<HTMLDivElement> | undefined
  motion?: boolean | MotionProps
}

export interface IFlex extends IRowAndCol {
  flexDirection?: 'row' | 'col'
}
