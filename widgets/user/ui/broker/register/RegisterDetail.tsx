import {Col} from '@/shared/ui/atoms'
import {Sidepeek, SidepeekHeaderSection, Table, TableLabeledRow} from '@/shared/ui/molecules'
import useRegisterDetail from '@/widgets/user/model/broker/register/useRegisterDetail'
import {Typo} from '@/shared/ui/atoms'
import Certificate from '@/widgets/user/ui/broker/register/Certificate'
import RegisterDetailSubmit from '@/widgets/user/ui/broker/register/RegisterDetailSubmit'
import {IRegisterDetail} from "@/widgets/user/const/broker/register/type";
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
                    <Col gap={2}>
                      <Certificate src={v2.contents} alt={v2.label}/>
                      <Typo.Caption color={'dim'}>이미지 눌러서 크게 보기</Typo.Caption>
                    </Col>
                  }
                />
              ))}
            </Table>
          </Col>
        ))}
        <RegisterDetailSubmit
          rejectFunc={rejectFunc}
          approveFunc={approveFunc}
        />
      </SidepeekHeaderSection>
    </Sidepeek>
  ) : <></>
}
