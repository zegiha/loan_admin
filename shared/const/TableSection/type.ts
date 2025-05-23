import {Swiper as SwiperType} from 'swiper'
import {ReactNode} from "react";

export interface ITableSectionHeader {
  tableTitle: string
  reloadFunc?: () => void
  addFunc?: () => void
  showRow: number
  setShowRowAction: (newShowRowNumber: number) => void
}

export interface ITableSection extends ITableSectionHeader{
  status: 'error' | 'success' | 'empty' | 'pending'
  onSlideChangeCallback?: (swiper: SwiperType) => void
  children: Array<ReactNode> | ReactNode
}
