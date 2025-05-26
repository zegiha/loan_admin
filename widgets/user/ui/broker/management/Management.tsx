'use client'

import {userControllerDeleteProfile} from '@/entities/api/user/user'
import {parseToTwoDimensionalArray, statusToTableSectionStatus, useTableSection} from '@/shared/lib'
import {Table} from '@/shared/ui/molecules'
import {TableSection, WarningModal} from '@/shared/ui/organisms'
import useManagement from '@/widgets/user/model/broker/management/useManagement'
import ManagementTableHeader from '@/widgets/user/ui/broker/management/ManagementTableHeader'
import ManagementTableRow from '@/widgets/user/ui/broker/management/ManagementTableRow'
import MoreInfoSidepeek from '@/widgets/user/ui/broker/management/MoreInfoSidepeek'

export default function Management() {
  const {showRow, setShowRow} = useTableSection()
  const {
    // isLogoutOpen, setIsLogoutOpen,
    isDeleteOpen, setIsDeleteOpen,
    isSidepeekOpen, setIsSidepeekOpen,
    targetUser,
    closeFunc,
    status, data, error, refetch
  } = useManagement()

  return (
    <>
      <TableSection
        tableTitle={'대부업자 관리'}
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
              <ManagementTableHeader/>
              {v1.map((v2, i) => (
                <ManagementTableRow
                  key={i}
                  {...v2}
                />
              ))}
            </Table>
          ))
        )}
      </TableSection>
      {/*{targetUser !== null && isLogoutOpen && (*/}
      {/*  <WarningModal*/}
      {/*    isOpen={isLogoutOpen}*/}
      {/*    setIsOpen={setIsLogoutOpen}*/}
      {/*    title={`${targetUser.id}님의 계정을 전체 로그아웃 할까요?`}*/}
      {/*    subtitle={`${targetUser.id}님이 맞는지 한번 더 확인해주세요`}*/}
      {/*    submitContents={'강제 로그아웃'}*/}
      {/*    submitFunc={() => setIsLogoutOpen(false)}*/}
      {/*  />*/}
      {/*)}*/}
      {targetUser !== null && isDeleteOpen && (
        <WarningModal
          isOpen={isDeleteOpen}
          setIsOpen={(v) => {
            if(!v) closeFunc()
            setIsDeleteOpen(v)
          }}
          title={`${targetUser.id}님의 계정을 삭제할까요?`}
          subtitle={`${targetUser.id}님이 맞는지 한번 더 확인해주세요`}
          submitContents={'계정 삭제'}
          submitFunc={async () => {
            userControllerDeleteProfile(targetUser.id)
              .then(() => {
                refetch()
                setIsDeleteOpen(false)
              })
              .catch((err) => {
                alert('다시시도해주세요')
              })
          }}
        />
      )}
      {targetUser !== null && isSidepeekOpen && <MoreInfoSidepeek
        isOpen={isSidepeekOpen}
        setIsOpen={(v) => {
          if(!v) closeFunc()
          setIsSidepeekOpen(v)
        }}
        targetUser={targetUser}
      />}
    </>
  )
}
