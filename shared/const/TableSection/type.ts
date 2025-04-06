import {ReactNode} from "react";

export interface ITableSectionHeader {
  tableTitle: string
  reloadFunc?: () => void
  addFunc?: () => void
  showRow: number
  setShowRowAction: (newShowRowNumber: number) => void
}

export interface ITableSection extends ITableSectionHeader{
  children: Array<ReactNode> | ReactNode
}
