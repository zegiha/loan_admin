import {TSetState} from '@/shared/const'
import {Col, Row} from '@/shared/ui/atoms'
import {IconButton, Sidepeek, Table, TableLabeledRow} from '@/shared/ui/molecules'
import useRegisterDetail from '@/widgets/user/model/broker/register/useRegisterDetail'
import {Typo} from '@/shared/ui/atoms'
import Certificate from '@/widgets/user/ui/broker/register/Certificate'
import RegisterDetailSubmit from '@/widgets/user/ui/broker/register/RegisterDetailSubmit'

export default function RegisterDetail({
  isOpen,
  setIsOpen,
  registerReqId,
}: {
  isOpen: boolean
  setIsOpen: TSetState<boolean>
  registerReqId: string | null
}) {
  const {
    data,
    processRegisterDetailData,
    approveFunc,
    rejectFunc,
  } = useRegisterDetail(registerReqId)

  return data !== null ? (
    <Sidepeek isOpen={isOpen} setIsOpenAction={setIsOpen}>
      <Col width={'fill'} gap={24}>
        <Row width={'fill'} justifyContents={'space-between'} alignItems={'center'}>
          <Typo.Body emphasize color={'variable'}>
            회원가입 요청 세부정보
          </Typo.Body>
          <IconButton
            iconKey={'close'}
            size={'small'}
            background={'transparent'}
            onClick={() => setIsOpen(false)}
          />
        </Row>
        <Table>
          {processRegisterDetailData(data).map((v, i) => (
            <TableLabeledRow
              key={i}
              label={v.label}
              contents={v.label !== '대부업 등록증' && v.label !== '사업자 등록증' ?
                v.contents :
                <Col gap={2}>
                  <Certificate src={v.contents} alt={v.label}/>
                  <Typo.Caption color={'dim'}>이미지 눌러서 크게 보기</Typo.Caption>
                </Col>
              }
            />
          ))}
        </Table>
        <RegisterDetailSubmit
          rejectFunc={rejectFunc}
          approveFunc={approveFunc}
        />
      </Col>
    </Sidepeek>
  ) : <></>
}