'use client'

import {parseToTwoDimensionalArray, useTableSection} from '@/shared/lib'
import {Typo} from '@/shared/ui/atoms'
import {Table} from '@/shared/ui/molecules'
import {TableSection} from '@/shared/ui/organisms'
import useAdProlongation from '@/widgets/ad/model/adReq/adProlongation/useAdProlongation'
import AdProlongationPermission from '@/widgets/ad/ui/adReq/adProlongation/AdProlongationPermission'
import AdProlongationTableHeader from '@/widgets/ad/ui/adReq/adProlongation/AdProlongationTableHeader'
import AdProlongationTableRow from '@/widgets/ad/ui/adReq/adProlongation/AdProlongationTableRow'

export default function() {
  const {showRow, setShowRow} = useTableSection()
  const {
    isOpen, setIsOpen,
    targetId, setTargetId,
    status, data, error, refetch,
  } = useAdProlongation()

  return (
    <>
      {status === 'success' && (
        <>
          <TableSection
            tableTitle={'연장'}
            showRow={showRow}
            setShowRowAction={setShowRow}
            reloadFunc={refetch}
          >
            {parseToTwoDimensionalArray(data, showRow).map((v1, i) => (
              <Table
                key={i}
                maxShowingRow={showRow + 1}
              >
                <AdProlongationTableHeader/>
                {v1.map((v2, i) => (
                  <AdProlongationTableRow
                    key={i}
                    {...v2}
                  />
                ))}
              </Table>
            ))}
          </TableSection>
          <AdProlongationPermission
            {...{isOpen, setIsOpen, targetId, setTargetId}}
          />
        </>
      )}
      {status === 'pending' && (<Typo.Contents>로딩중...</Typo.Contents>)}
      {status === 'error' && (<Typo.Contents>{error?.message}</Typo.Contents>)}
    </>
  )
}