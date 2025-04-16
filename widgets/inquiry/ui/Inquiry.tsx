'use client'

import {parseToTwoDimensionalArray, useTableSection} from '@/shared/lib'
import {Typo} from '@/shared/ui/atoms'
import {Table} from '@/shared/ui/molecules'
import {TableSection} from '@/shared/ui/organisms'
import useInquiry from '@/widgets/inquiry/model/useInquiry'
import InquiryAnswerModal from '@/widgets/inquiry/ui/InquiryAnswerModal'
import InquiryTableHeader from '@/widgets/inquiry/ui/InquiryTableHeader'
import InquiryTableRow from '@/widgets/inquiry/ui/InquiryTableRow'

export default function Inquiry() {
  const {showRow, setShowRow} = useTableSection()
  const {
    isOpen, setIsOpen,
    targetId, setTargetId,
    status, data, error, refetch
  } = useInquiry()

  return (
    <>
      {status === 'success' && (
        <TableSection
          tableTitle={'문의'}
          showRow={showRow}
          setShowRowAction={setShowRow}
          reloadFunc={refetch}
        >
          {parseToTwoDimensionalArray(data, showRow).map((v1, i) => (
            <Table key={i} maxShowingRow={showRow + 1}>
              <InquiryTableHeader/>
              {v1.map((v2, i) => (
                <InquiryTableRow
                  key={i}
                  {...v2}
                />
              ))}
            </Table>
          ))}
        </TableSection>
      )}
      {status === 'pending' && (<Typo.Contents>로딩중...</Typo.Contents>)}
      {status === 'error' && (<Typo.Contents>{error?.message}</Typo.Contents>)}
      {targetId !== null && (
        <InquiryAnswerModal
          {...{
            isOpen, setIsOpen,
            targetId, setTargetId,
          }}
        />
      )}
    </>
  )
}