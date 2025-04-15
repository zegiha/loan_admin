'use client'

import {parseToTwoDimensionalArray, useTableSection} from '@/shared/lib'
import {Typo} from '@/shared/ui/atoms'
import {Table} from '@/shared/ui/molecules'
import {TableSection} from '@/shared/ui/organisms'
import useAdRegister from '@/widgets/ad/model/adReq/adRegister/useAdRegister'
import AdRegisterDetail from '@/widgets/ad/ui/adReq/adRegister/AdRegisterDetail'
import AdRegisterTableHeader from '@/widgets/ad/ui/adReq/adRegister/AdRegisterTableHeader'
import AdRegisterTableRow from '@/widgets/ad/ui/adReq/adRegister/AdRegisterTableRow'

export default function() {
  // TODO 더보기 제작
  const {showRow, setShowRow} = useTableSection()
  const {
    isOpen, setIsOpen,
    target, setTarget,
    data, status, error, refetch
  } = useAdRegister()

  return (
    <>
      <TableSection
        tableTitle={'등록'}
        showRow={showRow}
        setShowRowAction={setShowRow}
        reloadFunc={() => refetch()}
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
      {status === 'pending' && (<Typo.Contents>로딩중...</Typo.Contents>)}
      {status === 'error' && (<Typo.Contents>{error?.message}</Typo.Contents>)}
      {target !== null && (
        <AdRegisterDetail
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          target={target}
          setTarget={setTarget}
        />
      )}
    </>
  )
}