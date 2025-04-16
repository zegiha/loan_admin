'use client'

import {parseToTwoDimensionalArray, useTableSection} from '@/shared/lib'
import {Typo} from '@/shared/ui/atoms'
import {Table} from '@/shared/ui/molecules'
import {TableSection} from '@/shared/ui/organisms'
import useAdEdit from '@/widgets/ad/model/adReq/adEdit/useAdEdit'
import AdEditDetail from '@/widgets/ad/ui/adReq/adEdit/AdEditDetail'
import AdEditTableHeader from '@/widgets/ad/ui/adReq/adEdit/AdEditTableHeader'
import AdEditTableRow from '@/widgets/ad/ui/adReq/adEdit/AdEditTableRow'

export default function AdEdit() {
  const {showRow, setShowRow} = useTableSection()
  const {
    target, setTarget,
    isOpen, setIsOpen,
    status, data, error, refetch
  } = useAdEdit()

  return (
    <>
      {status === 'success' && (
        <TableSection
          tableTitle={'수정'}
          showRow={showRow}
          setShowRowAction={setShowRow}
          reloadFunc={refetch}
        >
          {parseToTwoDimensionalArray(data, showRow).map((v1, i) => (
            <Table key={i} maxShowingRow={showRow + 1}>
              <AdEditTableHeader/>
              {v1.map((v2, i) => (
                <AdEditTableRow
                  key={i}
                  {...v2}
                />
              ))}
            </Table>
          ))}
        </TableSection>
      )}
      {status === 'pending' && <Typo.Contents>로딩중...</Typo.Contents>}
      {status === 'error' && <Typo.Contents>{error?.message}</Typo.Contents>}
      {target !== null && isOpen && (
        <AdEditDetail
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          target={target}
          setTarget={setTarget}
        />
      )}
    </>
  )
}