import {Col, Icon, Typo} from '@/shared/ui/atoms'
import {Modal, ModalContainer} from '@/shared/ui/molecules'
import {SubmitSection} from '@/shared/ui/organisms'
import {IAdProlongationPermission} from '@/widgets/ad/const/adReq/adProlongation/type'

export default function AdProlongationPermission({
  isOpen,
  setIsOpen,
  targetId,
  setTargetId,
}: IAdProlongationPermission) {
  const closeFunc = () => {
    setTargetId(null)
    setIsOpen(false)
  }

  return <Modal
    isOpen={isOpen}
    setIsOpenAction={setIsOpen}
  >
    <ModalContainer size={'small'} gap={24}>
      <Col gap={8}>
        <Icon
          iconKey={'permission'}
          color={'primary'}
          size={48}
          fill
        />
        <Col gap={4}>
          <Typo.Body emphasize color={'variable'}>
            광고 연장 요청을 승인할까요?
          </Typo.Body>
          <Typo.Contents color={'dim'}>
            입금을 한번 더 확인해주세요
          </Typo.Contents>
        </Col>
      </Col>
      <SubmitSection
        submitContents={'승인'}
        submitFunc={() => {
          // TODO 광고 요청 승인 API
          closeFunc()
        }}
        cancelContents={'거절'}
        cancelFunc={() => {
          // TODO 광고 요청 승인 거절 API
          closeFunc()
        }}
      />
    </ModalContainer>
  </Modal>
}