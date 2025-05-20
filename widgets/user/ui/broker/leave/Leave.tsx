import {parseToTwoDimensionalArray, statusToTableSectionStatus, useTableSection} from '@/shared/lib'
import {Table} from '@/shared/ui/molecules'
import {TableSection, WarningModal} from '@/shared/ui/organisms'
import useLeave from '@/widgets/user/model/broker/leave/useLeave'
import LeaveTableHeader from '@/widgets/user/ui/broker/leave/LeaveTableHeader'
import LeaveTableRow from '@/widgets/user/ui/broker/leave/LeaveTableRow'

export default function Leave() {
  const {showRow, setShowRow} = useTableSection()
  const {
    approveModal, setApproveModal,
    rejectModal, setRejectModal,
    target,
    data, status, error, refetch,
    approveFunc,
    rejectFunc,
  } = useLeave()

  return (
    <>
      <TableSection
        tableTitle={'회원 탈퇴'}
        showRow={showRow}
        setShowRowAction={setShowRow}
        reloadFunc={refetch}
        status={statusToTableSectionStatus(status, data)}
      >
        {status === 'success' && (
          parseToTwoDimensionalArray(data, showRow).map((v1, i) => (
            <Table
              key={i}
              maxShowingRow={showRow + 1}
            >
              <LeaveTableHeader/>
              {v1.map((v2, i) => (
                <LeaveTableRow
                  key={i}
                  {...v2}
                />
              ))}
            </Table>
          ))
        )}
      </TableSection>
      {target && approveModal && (
        <WarningModal
          isOpen={approveModal}
          setIsOpen={setApproveModal}
          title={`${target}님의 계정 삭제를 승인할까요?`}
          subtitle={'되돌릴 수 없으니 한번 더 확인해주세요'}
          submitContents={'계정 삭제'}
          submitFunc={() => approveFunc(target)}
        />
      )}
      {target && rejectModal && (
        <WarningModal
          isOpen={rejectModal}
          setIsOpen={setRejectModal}
          title={`${target}님의 계정 삭제를 거부할까요?`}
          subtitle={'한번 더 확인해주세요'}
          submitContents={'계정 삭제 거절'}
          submitFunc={() => rejectFunc(target)}
        />
      )}
    </>
  )
}