import {isEmpty} from "@/shared/lib";

export default function statusToTableSectionStatus(
  status: 'success' | 'pending' | 'error',
  data: any
) {
  return status === 'success' ?
    isEmpty(data) ? 'empty' : 'success':
    status
}
