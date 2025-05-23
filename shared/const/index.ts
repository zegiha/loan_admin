import palette from '@/shared/const/design/palette'
import semantic from '@/shared/const/design/semantic'
import skeleton from '@/shared/const/design/skeleton.module.css'

import transition from '@/shared/const/animation/framerTransition'

import IconList from '@/shared/const/Icon/iconList'
import {TIconListKey, IIcon} from '@/shared/const/Icon/iconType'

import {
  justifyContents,
  width,
  IRowAndCol,
  IFlex
} from '@/shared/const/Flex/type'

import {
  TTextSize,
  TTextWidth,
  TColor,
  ITypo,
  IBaseTypo,
} from '@/shared/const/Typo/type'

import TSetState from '@/shared/const/type/TSetState'
import TAdminAuthority from '@/shared/const/type/TAdminAuthority'

import {
  TIconSize,
  IIconButton,
} from '@/shared/const/buttons/IconButton/type'

import {tableDropdownOptions} from "@/shared/const/TableSection/const";
import {ITableSection, ITableSectionHeader} from "@/shared/const/TableSection/type";

import ITableLabeledRow from '@/shared/const/table/ITableLabeledRow'
import ITableLabeledRowWithoutReactNode from '@/shared/const/table/ITableLabeledRowWithoutReactNode'

import TLocation from '@/shared/const/location/TLocation'
import locationValues from '@/shared/const/location/locationValues'

import TProduction from '@/shared/const/production/TProduction'
import productionValues from '@/shared/const/production/productionValues'


export {
  palette,
  semantic,
  skeleton,
  transition,
  IconList,
  tableDropdownOptions,
  locationValues,
  productionValues,
}
export type {
  TIconListKey,
  IIcon,
  justifyContents,
  width,
  IRowAndCol,
  IFlex,
  TTextSize,
  TTextWidth,
  TColor,
  ITypo,
  IBaseTypo,
  TSetState,
  TAdminAuthority,
  TLocation,
  TProduction,
  TIconSize,
  IIconButton,
  ITableSectionHeader,
  ITableSection,
  ITableLabeledRow,
  ITableLabeledRowWithoutReactNode,
}
