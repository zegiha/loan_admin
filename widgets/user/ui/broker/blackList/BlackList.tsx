import {Table} from '@/shared/ui/molecules'
import useBlackList from '@/widgets/user/model/broker/blackList/useBlackList'
import {Typo} from '@/shared/ui/atoms'
import BlackListAddModal from '@/widgets/user/ui/broker/blackList/BlackListAddModal'
import BlackListTableHeader from '@/widgets/user/ui/broker/blackList/BlackListTableHeader'
import BlackListTableRow from '@/widgets/user/ui/broker/blackList/BlackListTableRow'
import {TableSection, WarningModal} from "@/shared/ui/organisms";
import {parseToTwoDimensionalArray, statusToTableSectionStatus} from "@/shared/lib";

export default function BlackList() {
  const {
    showRow, setShowRow,
    status, data, refetch,
    targetUser,
    isDeleteModalOpen, setIsDeleteModalOpen,
    isAddModalOpen, setIsAddModalOpen,
    excludeFunc,
  } = useBlackList()

  return (
    <>
      <TableSection
        tableTitle={'블랙 리스트'}
        reloadFunc={() => refetch()}
        addFunc={() => setIsAddModalOpen(true)}
        showRow={showRow}
        setShowRowAction={v => setShowRow(v)}
        status={statusToTableSectionStatus(status, data)}
      >
        {status === 'success' &&
          parseToTwoDimensionalArray(data, showRow).map((v1, i) => (
            <Table
              key={i}
              maxShowingRow={showRow + 1}
            >
              <BlackListTableHeader/>
              {v1.map((v2, i) => (
                <BlackListTableRow
                  key={i}
                  {...v2}
                />
              ))}
            </Table>
          ))}
      </TableSection>
      {targetUser !== null && (
        <WarningModal
          isOpen={isDeleteModalOpen}
          setIsOpen={setIsDeleteModalOpen}
          title={`${targetUser.name}님을 블랙리스트에서 제외할까요?`}
          subtitle={`${targetUser.name}님을 제외해야하는지 한번 더 확인해주세요`}
          submitContents={'제외하기'}
          submitFunc={() => {
            excludeFunc(targetUser.userId)
              .then(res => {
                if(res === 'success')
                  refetch()
              })
          }}
        />
      )}
      {isAddModalOpen && (
        <BlackListAddModal
          isOpen={isAddModalOpen}
          setIsOpen={setIsAddModalOpen}
          refetch={() => refetch()}
        />
      )}
    </>
  )
}
