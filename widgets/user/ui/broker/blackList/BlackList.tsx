import {Table} from '@/shared/ui/molecules'
import TableSection from '@/shared/ui/molecules/layouts/TableSection'
import useBlackList from '@/widgets/user/model/broker/blackList/useBlackList'
import {Typo} from '@/shared/ui/atoms'
import BlackListTableHeader from '@/widgets/user/ui/broker/blackList/BlackListTableHeader'
import BlackListTableRow from '@/widgets/user/ui/broker/blackList/BlackListTableRow'
import ExcludeModal from '@/widgets/user/ui/broker/blackList/ExcludeModal'

export default function BlackList() {
  const {
    showRow, setShowRow,
    data, fetching,
    targetUser,
    isOpen, setIsOpen,
    excludeFunc,
  } = useBlackList()

  return (
    <>
      <TableSection
        tableTitle={'블랙 리스트'}
        reloadFunc={() => fetching()}
        showRow={showRow}
        setShowRowAction={v => setShowRow(v)}
      >
        <Table maxShowingRow={showRow + 1}>
          {data !== null ? (
            <>
              <BlackListTableHeader/>
              {data.map((v, i) => (
                <BlackListTableRow
                  key={i}
                  {...v}
                />
              ))}
            </>
          ):(
            <Typo.Contents>로딩중...</Typo.Contents>
          )}
        </Table>
      </TableSection>
      <ExcludeModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        targetUser={targetUser}
        excludeFunc={excludeFunc}
      />
    </>
  )
}