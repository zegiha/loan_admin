'use client'

import {parseToTwoDimensionalArray, statusToTableSectionStatus, useTableSection} from '@/shared/lib'
import {Typo} from '@/shared/ui/atoms'
import {Table} from '@/shared/ui/molecules'
import {TableSection, WarningModal} from '@/shared/ui/organisms'
import useAdminManagement from '@/widgets/user/model/admin/adminManagement/useAdminManagement'
import AdminManagementTableHeader from '@/widgets/user/ui/admin/adminManagement/AdminManagementTableHeader'
import AdminManagementTableRow from '@/widgets/user/ui/admin/adminManagement/AdminManagementTableRow'
import {adminControllerDelete} from "@/entities/api/admin/admin";

export default function() {
  const {showRow, setShowRow} = useTableSection()
  const {
    isOpen, setIsOpen,
    target, setTarget,
    status, data, refetch
  } = useAdminManagement()

  return (
    <>
      <TableSection
        tableTitle={'관리자 관리'}
        showRow={showRow}
        setShowRowAction={setShowRow}
        reloadFunc={refetch}
        status={statusToTableSectionStatus(status, data)}
      >
        {status === 'success' && parseToTwoDimensionalArray(data, showRow).map((v1, i) => (
          <Table
            key={i}
            maxShowingRow={showRow + 1}
          >
            <AdminManagementTableHeader/>
            {v1.map((v2, i) => (
              <AdminManagementTableRow
                key={i}
                {...v2}
              />
            ))}
          </Table>
        ))}
      </TableSection>
      {target !== null && isOpen && (
        <WarningModal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          title={`${target.id}님의 계정을 삭제할까요?`}
          subtitle={'한번 더 확인해주세요'}
          submitContents={'삭제하기'}
          submitFunc={() => {
            // TODO 어드민 삭제
            adminControllerDelete(target.id)
              .then(() => {
                refetch()
                setTarget(null)
                alert('삭제되었습니다')
              })
              .catch(() => {
                alert('다시 시도해주세요')
              })
          }}
          cancelFunc={() => setTarget(null)}
        />
      )}
    </>
  )
}
