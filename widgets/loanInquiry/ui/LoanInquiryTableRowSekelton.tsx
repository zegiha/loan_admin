import {TableRow} from '@/shared/ui/molecules'
import {skeleton} from '@/shared/const'

export default function LoanInquiryTableRowSekelton() {
  return <TableRow>
    <div
      className={skeleton.skeleton}
      style={{width: 128, height: 20}}
    />
    <div
      className={skeleton.skeleton}
      style={{width: 40, height: 20}}
    />
    <div
      className={skeleton.skeleton}
      style={{width: '100%', height: 20}}
    />
    <div
      className={skeleton.skeleton}
      style={{width: 90, height: 20}}
    />
    <div
      className={skeleton.skeleton}
      style={{width: 42, height: 20}}
    />
  </TableRow>
}