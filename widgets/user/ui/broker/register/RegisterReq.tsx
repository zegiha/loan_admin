import {Table} from '@/shared/ui/molecules'
import useRegisterReq from '@/widgets/user/model/broker/register/useRegisterReq'
import RegisterDetail from '@/widgets/user/ui/broker/register/RegisterDetail'
import RegisterReqTableHeader from '@/widgets/user/ui/broker/register/RegisterReqTableHeader'
import RegisterReqTableRow from '@/widgets/user/ui/broker/register/RegisterReqTableRow'
import {Typo} from '@/shared/ui/atoms'
import {TableSection} from "@/shared/ui/organisms";
import {parseToTwoDimensionalArray} from "@/shared/lib";

export default function RegisterReq() {
  const {
    showRow, setShowRow,
    isOpen, setIsOpen,
    registerReqData,
    status, data, error, refetch
  } = useRegisterReq()

  return (
    <>
      <TableSection
        tableTitle={'회원 가입 요청'}
        reloadFunc={() => refetch()}
        showRow={showRow}
        setShowRowAction={v => setShowRow(v)}
      >
        {status === 'success' ? (
          parseToTwoDimensionalArray(data, showRow).map((v1, i) => (
            <Table
              key={i}
              maxShowingRow={showRow + 1}
            >
              <RegisterReqTableHeader/>
              {v1.map((v2, i) => (
                <RegisterReqTableRow
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
      {isOpen && registerReqData !== null && (
        <RegisterDetail
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          data={registerReqData}
        />
      )}
    </>
  )
}
