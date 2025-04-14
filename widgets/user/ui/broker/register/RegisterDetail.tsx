import {Col} from '@/shared/ui/atoms'
import {Sidepeek, SidepeekHeaderSection, Table, TableLabeledRow} from '@/shared/ui/molecules'
import {Certificate, SidepeekSubmitSection} from '@/shared/ui/organisms'
import {IRegisterDetail} from '@/widgets/user/const/broker/register/type'
import useRegisterDetail from '@/widgets/user/model/broker/register/useRegisterDetail'
import {Typo} from '@/shared/ui/atoms'
import processRegisterDetailData from "@/widgets/user/lib/broker/register/processRegisterDetailData";

export default function RegisterDetail({
  isOpen,
  setIsOpen,
  registerReqId,
}: IRegisterDetail) {
  const {
    data,
    approveFunc,
    rejectFunc,
  } = useRegisterDetail(registerReqId)

  return data !== null ? (
    <Sidepeek
      isOpen={isOpen}
      setIsOpenAction={setIsOpen}
      gap={24}
    >
      <SidepeekHeaderSection
        header={'회원가입 요청 세부정보'}
        closeFunc={() => setIsOpen(false)}
      >
        {processRegisterDetailData(data).map((v1, i) => (
          <Col key={i} width={'fill'} gap={2}>
            <Typo.Caption>{v1.subtitle}</Typo.Caption>
            <Table>
              {v1.data.map((v2, i) => (
                <TableLabeledRow
                  key={i}
                  label={v2.label}
                  contents={v2.label !== '대부업 등록증' && v2.label !== '사업자 등록증' ?
                    v2.contents :
                    <Certificate src={v2.contents} alt={v2.label}/>
                  }
                />
              ))}
            </Table>
          </Col>
        ))}
        <SidepeekSubmitSection
          cancelContents={'거절'}
          cancelFunc={rejectFunc}
          submitContents={'승인'}
          submitFunc={approveFunc}
        />
      </SidepeekHeaderSection>
    </Sidepeek>
  ) : <></>
}
