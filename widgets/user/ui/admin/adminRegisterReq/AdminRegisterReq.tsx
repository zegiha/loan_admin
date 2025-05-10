'use client'

import {parseToTwoDimensionalArray, statusToTableSectionStatus, useTableSection} from '@/shared/lib'
import {Typo} from '@/shared/ui/atoms'
import {Table} from '@/shared/ui/molecules'
import {TableSection} from '@/shared/ui/organisms'
import useAdminRegisterReq from '@/widgets/user/model/admin/adminRegisterReq/useAdminRegisterReq'
import AdminRegisterReqTableHeader from '@/widgets/user/ui/admin/adminRegisterReq/AdminRegisterReqTableHeader'
import AdminRegisterReqTableRow from '@/widgets/user/ui/admin/adminRegisterReq/AdminRegisterReqTableRow'
import SuperAdminAuthorizationModal from '@/widgets/user/ui/admin/adminRegisterReq/SuperAdminAuthorizationModal'

export default function() {
  const {showRow, setShowRow} = useTableSection()
  const {
    isOpen, setIsOpen,
    target, setTarget,
    status, data, error, refetch
  } = useAdminRegisterReq()

  return (
    <>
      <TableSection
        tableTitle={'관리자 요청'}
        reloadFunc={refetch}
        showRow={showRow}
        setShowRowAction={setShowRow}
        status={statusToTableSectionStatus(status, data)}
      >
        {status === 'success' && (
          parseToTwoDimensionalArray(data, showRow).map((v1, i) => (
            <Table key={i} maxShowingRow={showRow + 1}>
              <AdminRegisterReqTableHeader/>
              {v1.map((v2, i) => (
                <AdminRegisterReqTableRow
                  key={i}
                  {...v2}
                />
              ))}
            </Table>
          ))
        )}
      </TableSection>
      {target !== null && isOpen && (
        <SuperAdminAuthorizationModal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          target={target}
          setTarget={setTarget}
        />
      )}
    </>
  )
}
