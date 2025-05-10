'use client'

import {parseToTwoDimensionalArray, statusToTableSectionStatus, useTableSection} from '@/shared/lib'
import {Typo} from '@/shared/ui/atoms'
import {Table} from '@/shared/ui/molecules'
import {TableSection, WarningModal} from '@/shared/ui/organisms'
import useCertificatedCompanyBlackList
  from '@/widgets/certificatedCompanyBlackList/model/useCertificatedCompanyBlackList'
import CertificatedCompanyBlackListAddModal
  from '@/widgets/certificatedCompanyBlackList/ui/CertificatedCompanyBlackListAddModal'
import CertificatedCompanyBlackListTableHeader
  from '@/widgets/certificatedCompanyBlackList/ui/CertificatedCompanyBlackListTableHeader'
import CertificatedCompanyBlackListTableRow
  from '@/widgets/certificatedCompanyBlackList/ui/CertificatedCompanyBlackListTableRow'

export default function CertificatedCompanyBlackList() {
  const {showRow, setShowRow} = useTableSection()
  const {
    isAddOpen, setIsAddOpen,
    isDeleteOpen, setIsDeleteOpen,
    target, setTarget,
    deleteFunc,
    status, data, error, refetch,
  } = useCertificatedCompanyBlackList()

  return (
    <>
      {status === 'success' && (
        <TableSection
          tableTitle={'정식업체 블랙리스트'}
          showRow={showRow}
          setShowRowAction={setShowRow}
          reloadFunc={refetch}
          addFunc={() => setIsAddOpen(true)}
          status={statusToTableSectionStatus(status, data)}
        >
          {parseToTwoDimensionalArray(data, showRow).map((v1, i) => (
            <Table key={i} maxShowingRow={showRow + 1}>
              <CertificatedCompanyBlackListTableHeader/>
              {v1.map((v2, i) => (
                <CertificatedCompanyBlackListTableRow
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
      {target !== null && isDeleteOpen && (
        <WarningModal
          isOpen={isDeleteOpen}
          setIsOpen={setIsDeleteOpen}
          title={`${target.id}(${target.companyName})님을 블랙리스트에서 제외할까요?`}
          subtitle={`${target.id}(${target.companyName})님을 제외해야하는지 한번 더 확인해주세요`}
          submitContents={'제외하기'}
          submitFunc={deleteFunc}
          cancelFunc={() => setTarget(null)}
        />
      )}
      {isAddOpen && (
        <CertificatedCompanyBlackListAddModal
          isOpen={isAddOpen}
          setIsOpen={setIsAddOpen}
        />
      )}
    </>
  )
}
