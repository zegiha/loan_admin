'use client'

import {parseToTwoDimensionalArray, statusToTableSectionStatus, useTableSection} from '@/shared/lib'
import {Typo} from '@/shared/ui/atoms'
import {Table} from '@/shared/ui/molecules'
import {TableSection} from '@/shared/ui/organisms'
import useAnnouncement from '@/widgets/announcement/model/useAnnouncement'
import AnnouncementAdd from '@/widgets/announcement/ui/AnnouncementAdd'
import AnnouncementDetail from '@/widgets/announcement/ui/AnnouncementDetail'
import AnnouncementTableHeader from '@/widgets/announcement/ui/AnnouncementTableHeader'
import AnnouncementTableRow from '@/widgets/announcement/ui/AnnouncementTableRow'

export default function() {
  const {showRow, setShowRow} = useTableSection()
  const {
    isAddOpen, setIsAddOpen,
    isOpen, setIsOpen,
    targetId, setTargetId,
    status, data, error, refetch
  } = useAnnouncement()

  return (
    <>
      <TableSection
        tableTitle={'공지사항'}
        showRow={showRow}
        setShowRowAction={setShowRow}
        addFunc={() => setIsAddOpen(true)}
        reloadFunc={refetch}
        status={statusToTableSectionStatus(status, data)}
      >
        {status === 'success' && parseToTwoDimensionalArray(data, showRow).map((v1, i) => (
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
      {targetId !== null && isOpen && <AnnouncementDetail
        {...{isOpen, setIsOpen, targetId, setTargetId, refetch}}
      />}
      {isAddOpen && <AnnouncementAdd
        isOpen={isAddOpen} setIsOpen={setIsAddOpen} refetch={refetch}
      />}
    </>
  )
}
