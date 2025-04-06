import {Table} from '@/shared/ui/molecules'
import useBlackList from '@/widgets/user/model/broker/blackList/useBlackList'
import {Typo} from '@/shared/ui/atoms'
import BlackListTableHeader from '@/widgets/user/ui/broker/blackList/BlackListTableHeader'
import BlackListTableRow from '@/widgets/user/ui/broker/blackList/BlackListTableRow'
import ExcludeModal from '@/widgets/user/ui/broker/blackList/ExcludeModal'
import {TableSection} from "@/shared/ui/organisms";
import {parseToTwoDimensionalArray} from "@/shared/lib";

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
        {data !== null ? (
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
          ))
        ):(
          <Typo.Contents>로딩중...</Typo.Contents>
        )}
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
