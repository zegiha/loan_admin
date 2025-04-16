import {TSetState} from '@/shared/const'
import {Col, Row, Typo} from '@/shared/ui/atoms'
import {CtaButton, Modal, ModalContainer, TextInput} from '@/shared/ui/molecules'
import useBlackListAddModal from '@/widgets/user/model/broker/blackList/useBlackListAddModal'

export default function({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean,
  setIsOpen: TSetState<boolean>
}) {
  const {
    target, setTarget,
    additionalReason, setAdditionalReason,
    selections,
    selectionPlaceholder
  } = useBlackListAddModal()

  return (
    <Modal customKey={'blackListAddModal'} isOpen={isOpen} setIsOpenAction={setIsOpen}>
      <ModalContainer size={'medium'} gap={24}>
        <Typo.Body color={'variable'} emphasize>
          블랙 리스트 추가
        </Typo.Body>
        <Col width={'fill'} gap={8}>
          <TextInput
            label={'사용자 지정'}
            value={target}
            placeholder={'아이디 또는 업체명을 입력해주세요'}
            placeholderIcon={'search'}
            onChangeAction={v => setTarget(v)}
            selectionPlaceholder={selectionPlaceholder}
            selections={selections}
          />
          <TextInput
            label={'추가 사유'}
            value={additionalReason}
            placeholder={'사유를 입력해주세요'}
            onChangeAction={v => setAdditionalReason(v)}
          />
        </Col>
        <Row width={'fill'} justifyContents={'end'} gap={12}>
          <CtaButton onClick={() => {
            setIsOpen(false)
          }} width={'hug'} color={'gray'} height={'normal'}>
            <Typo.Contents>닫기</Typo.Contents>
          </CtaButton>
          <CtaButton onClick={() => {
            // TODO 블랙 등록 API 연결
            setIsOpen(false)
          }} width={'hug'} color={'primary'} height={'normal'}>
            <Typo.Contents color={'onPrimary'}>추가하기</Typo.Contents>
          </CtaButton>
        </Row>
      </ModalContainer>
    </Modal>
  )
}