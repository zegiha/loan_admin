import {ReactNode} from 'react'

export default interface ITableLabeledRow {
  label: string
  contents: string | ReactNode
}