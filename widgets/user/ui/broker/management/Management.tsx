'use client'

import {parseToTwoDimensionalArray} from '@/shared/lib'
import {Typo} from '@/shared/ui/atoms'
import {Table} from '@/shared/ui/molecules'
import {TableSection, WarningModal} from '@/shared/ui/organisms'
import getBroker from '@/widgets/user/api/broker/getBroker'
import {IManagementTableRow} from '@/widgets/user/const/broker/management/type'
import ManagementTableHeader from '@/widgets/user/ui/broker/management/ManagementTableHeader'
import ManagementTableRow from '@/widgets/user/ui/broker/management/ManagementTableRow'
import MoreInfoSidepeek from '@/widgets/user/ui/broker/management/MoreInfoSidepeek'
import {useEffect, useState} from 'react'

export default function Management() {
  const [showRow, setShowRow] = useState<number>(10)
  const [data, setData] = useState<Array<IManagementTableRow> | null>(null)
  const [isLogoutOpen, setIsLogoutOpen] = useState<boolean>(false)
  const [isDeleteOpen, setIsDeleteOpen] = useState<boolean>(false)
  const [isSidepeekOpen, setIsSidepeekOpen] = useState<boolean>(false)
  const [targetUser, setTargetUser] = useState<{id: string, userId: string} | null>(null)

  useEffect(() => {
    setData(() => {
      const newData: Array<IManagementTableRow> = []
      getBroker().forEach(v => {
        newData.push({
          ...v,
          moreInfoSidepeekFunc: () => {
            setTargetUser({...v})
            setIsSidepeekOpen(true)
          },
          logoutModalFunc: () => {
            setTargetUser({...v})
            setIsLogoutOpen(true)
          },
          deleteUserModalFunc: () => {
            setTargetUser({...v})
            setIsDeleteOpen(true)
          }
        })
      })
      return [...newData]
    })
  }, [])

  return (
    <>
      <TableSection
        tableTitle={'대부업자 관리'}
        showRow={showRow}
        setShowRowAction={setShowRow}
      >
        {data !== null ? (
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
        ) : (<Typo.Contents>로딩중...</Typo.Contents>)}
      </TableSection>
      {targetUser !== null && (
        <WarningModal
          isOpen={isLogoutOpen}
          setIsOpen={setIsLogoutOpen}
          title={`${targetUser.id}님의 계정을 전체 로그아웃 할까요?`}
          subtitle={`${targetUser.id}님이 맞는지 한번 더 확인해주세요`}
          submitContents={'강제 로그아웃'}
          submitFunc={() => setIsLogoutOpen(false)}
        />
      )}
      {targetUser !== null && (
        <WarningModal
          isOpen={isDeleteOpen}
          setIsOpen={setIsDeleteOpen}
          title={`${targetUser.id}님의 계정을 삭제할까요?`}
          subtitle={`${targetUser.id}님이 맞는지 한번 더 확인해주세요`}
          submitContents={'계정 삭제'}
          submitFunc={() => setIsDeleteOpen(false)}
        />
      )}
      {targetUser !== null && <MoreInfoSidepeek
        isOpen={isSidepeekOpen}
        setIsOpen={setIsSidepeekOpen}
        userId={targetUser.userId}
      />}
    </>
  )
}