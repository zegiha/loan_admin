'use client'

import {parseToTwoDimensionalArray, statusToTableSectionStatus, useTableSection} from '@/shared/lib'
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
    target, setTarget,
    status, data, error, refetch
  } = useInquiry()

  return (
    <>
      <TableSection
        tableTitle={'문의'}
        showRow={showRow}
        setShowRowAction={setShowRow}
        reloadFunc={refetch}
        status={statusToTableSectionStatus(status, data)}
      >
        {status === 'success' && Array.isArray(data) ? (
          parseToTwoDimensionalArray(data, showRow).map((v1, i) => (
            <Table key={i} maxShowingRow={showRow + 1}>
              <InquiryTableHeader/>
              {v1.map((v2, i) => (
                <InquiryTableRow
                  key={i}
                  {...v2}
                />
              ))}
            </Table>
          ))
        ):(
          <Typo.Contents>
            문의가 없어요
          </Typo.Contents>
        )}
      </TableSection>
      {target !== null && isOpen && (
        <InquiryAnswerModal
          {...{
            isOpen, setIsOpen,
            target, setTarget,
            refetch,
          }}
        />
      )}
    </>
  )
}
