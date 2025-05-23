'use client'

import {statusToTableSectionStatus, useTableSection} from '@/shared/lib'
import {Table} from '@/shared/ui/molecules'
import {TableSection} from '@/shared/ui/organisms'
import useLoanInquiry from '@/widgets/loanInquiry/model/useLoanInquiry'
import LoanInquirySidepeek from '@/widgets/loanInquiry/ui/LoanInquirySidepeek'
import LoanInquiryTableHeader from '@/widgets/loanInquiry/ui/LoanInquiryTableHeader'
import LoanInquiryTableRow from '@/widgets/loanInquiry/ui/LoanInquiryTableRow'
import LoanInquiryTableRowSekelton from '@/widgets/loanInquiry/ui/LoanInquiryTableRowSekelton'

export default function() {
  const {showRow, setShowRow} = useTableSection()
  const {
    target, setTarget,
    isOpen, setIsOpen,
    data, status, refetch,
    onSlideChangeCallback,
  } = useLoanInquiry(showRow)

  return (
    <>
      <TableSection
        tableTitle={'실시간 대출 문의'}
        showRow={showRow}
        setShowRowAction={setShowRow}
        reloadFunc={refetch}
        status={statusToTableSectionStatus(status, data)}
        onSlideChangeCallback={onSlideChangeCallback}
      >
        {status === 'success' && data.map((v, i) => (
          <Table key={i} maxShowingRow={showRow + 1}>
            <LoanInquiryTableHeader/>
            {v !== null ? (
              v.map((v, i) => (
                <LoanInquiryTableRow
                  key={i}
                  {...v}
                />
              ))
            ):(
              Array.from({length: showRow+1}).map((_, i) => (
                <LoanInquiryTableRowSekelton
                  key={i}
                />
              ))
            )}
          </Table>
        ))}
      </TableSection>
      {target !== null && isOpen && (
        <LoanInquirySidepeek
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