'use client'

import {
  parseToTwoDimensionalArray,
  statusToTableSectionStatus,
  useTableSection,
} from '@/shared/lib'
import { Typo } from '@/shared/ui/atoms'
import { Table } from '@/shared/ui/molecules'
import { TableSection } from '@/shared/ui/organisms'
import useAdProlongation from '@/widgets/ad/model/adReq/adProlongation/useAdProlongation'
import AdProlongationPermission from '@/widgets/ad/ui/adReq/adProlongation/AdProlongationPermission'
import AdProlongationTableHeader from '@/widgets/ad/ui/adReq/adProlongation/AdProlongationTableHeader'
import AdProlongationTableRow from '@/widgets/ad/ui/adReq/adProlongation/AdProlongationTableRow'

export default function () {
  const { showRow, setShowRow } = useTableSection()
  const {
    isOpen,
    setIsOpen,
    targetId,
    setTargetId,
    status,
    data,
    error,
    refetch,
  } = useAdProlongation(`${showRow}`)

  return (
    <>
      {status === 'success' && (
        <>
          <TableSection
            tableTitle={'연장'}
            showRow={showRow}
            setShowRowAction={setShowRow}
            reloadFunc={refetch}
            status={statusToTableSectionStatus(status, data)}
          >
            {parseToTwoDimensionalArray(data, showRow).map((v1, i) => (
              <Table key={i} maxShowingRow={showRow + 1}>
                <AdProlongationTableHeader />
                {v1.map((v2, i) => (
                  <AdProlongationTableRow key={i} {...v2} />
                ))}
              </Table>
            ))}
          </TableSection>
          {isOpen && (
            <AdProlongationPermission
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              targetId={targetId}
              setTargetId={
                setTargetId as React.Dispatch<
                  React.SetStateAction<string | null>
                >
              }
              refetch={refetch}
            />
          )}
        </>
      )}
    </>
  )
}
