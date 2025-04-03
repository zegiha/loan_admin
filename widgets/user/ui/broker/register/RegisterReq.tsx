import {Table} from '@/shared/ui/molecules'
import TableSection from '@/shared/ui/molecules/layouts/TableSection'
import useRegisterReq from '@/widgets/user/model/broker/register/useRegisterReq'
import RegisterDetail from '@/widgets/user/ui/broker/register/RegisterDetail'
import RegisterReqTableHeader from '@/widgets/user/ui/broker/register/RegisterReqTableHeader'
import RegisterReqTableRow from '@/widgets/user/ui/broker/register/RegisterReqTableRow'
import {Typo} from '@/shared/ui/atoms'

export default function RegisterReq() {
  const {
    showRow, setShowRow,
    data,
    isOpen, setIsOpen,
    registerReqId,
    fetching
  } = useRegisterReq()

  return (
    <>
      <TableSection
        tableTitle={'회원 가입 요청'}
        reloadFunc={() => fetching()}
        showRow={showRow}
        setShowRowAction={v => setShowRow(v)}
      >
        {data !== null ? (
          <Table maxShowingRow={showRow + 1}>
            <RegisterReqTableHeader/>
            {data.map((v, i) => (
              <RegisterReqTableRow
                key={i}
                {...v}
              />
            ))}
          </Table>
        ) : (
          <Typo.Contents>로딩중...</Typo.Contents>
        )}
      </TableSection>
      {isOpen && (
        <RegisterDetail
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          registerReqId={registerReqId}
        />
      )}
    </>
  )
}