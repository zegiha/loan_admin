'use client'

import {parseToTwoDimensionalArray, useTableSection} from '@/shared/lib'
import {Typo} from '@/shared/ui/atoms'
import {Table} from '@/shared/ui/molecules'
import {TableSection} from '@/shared/ui/organisms'
import useAnnouncement from '@/widgets/announcement/model/useAnnouncement'
import AnnouncementDetail from '@/widgets/announcement/ui/AnnouncementDetail'
import AnnouncementTableHeader from '@/widgets/announcement/ui/AnnouncementTableHeader'
import AnnouncementTableRow from '@/widgets/announcement/ui/AnnouncementTableRow'

export default function() {
  const {showRow, setShowRow} = useTableSection()
  const {
    isOpen, setIsOpen,
    targetId, setTargetId,
    status, data, error, refetch
  } = useAnnouncement()

  return (
    <>
      {status === 'success' && (
        <TableSection
          tableTitle={'공지사항'}
          showRow={showRow}
          setShowRowAction={setShowRow}
          reloadFunc={refetch}
        >
          {parseToTwoDimensionalArray(data, showRow).map((v1, i) => (
            <Table
              key={i}
              maxShowingRow={showRow+1}
            >
              <AnnouncementTableHeader/>
              {v1.map((v2, i) => (
                <AnnouncementTableRow
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
      {targetId !== null && <AnnouncementDetail
        {...{isOpen, setIsOpen, targetId, setTargetId}}
      />}
    </>
  )
}