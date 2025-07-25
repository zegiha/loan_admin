'use client'

import {parseToTwoDimensionalArray, statusToTableSectionStatus, useTableSection} from '@/shared/lib'
import {Typo} from '@/shared/ui/atoms'
import {Table} from '@/shared/ui/molecules'
import {TableSection} from '@/shared/ui/organisms'
import useAdRegister from '@/widgets/ad/model/adReq/adRegister/useAdRegister'
import AdRegisterDetail from '@/widgets/ad/ui/adReq/adRegister/AdRegisterDetail'
import AdRegisterTableHeader from '@/widgets/ad/ui/adReq/adRegister/AdRegisterTableHeader'
import AdRegisterTableRow from '@/widgets/ad/ui/adReq/adRegister/AdRegisterTableRow'

export default function() {
  const {showRow, setShowRow} = useTableSection()
  const {
    isOpen, setIsOpen,
    target, setTarget,
    data, status, error, refetch
  } = useAdRegister(`${showRow}`)

  return (
    <>
      <TableSection
        tableTitle={'등록'}
        showRow={showRow}
        setShowRowAction={setShowRow}
        reloadFunc={() => refetch()}
        status={statusToTableSectionStatus(status, data)}
      >
        {status === 'success' &&
          parseToTwoDimensionalArray(data, showRow).map((v1, i) => (
          <Table
            key={i}
            maxShowingRow={showRow + 1}
          >
            <AdRegisterTableHeader/>
            {v1.map((v2, i) => (
              <AdRegisterTableRow
                key={i}
                {...v2}
              />
            ))}
          </Table>
        ))}
      </TableSection>
      {target !== null && isOpen && (
        <AdRegisterDetail
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          target={target}
          setTarget={setTarget}
          refetch={refetch}
        />
      )}
    </>
  )
}
