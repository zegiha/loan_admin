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
        {status === 'success' && (
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
        )}
      </TableSection>
      {status === 'pending' && (
        <Typo.Contents>로딩중...</Typo.Contents>
      )}
      {status === 'error' && (
        <Typo.Contents>{`문제가 발생했습니다 다시 시도해주세요\n${error}`}</Typo.Contents>
      )}
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
