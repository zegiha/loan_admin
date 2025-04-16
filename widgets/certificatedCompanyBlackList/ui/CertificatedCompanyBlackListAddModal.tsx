import {TSetState} from '@/shared/const'
import {Modal, ModalContainer, TextInput} from '@/shared/ui/molecules'
import {Col, Typo} from '@/shared/ui/atoms'
import {SubmitSection} from '@/shared/ui/organisms'
import useCertificatedCompanyBlackListAddModal
  from '@/widgets/certificatedCompanyBlackList/model/useCertificatedCompanyBlackListAddModal'

export default function CertificatedCompanyBlackListAddModal({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean,
  setIsOpen: TSetState<boolean>
}) {
  const {
    target, setTarget,
    selectionPlaceholder,
    selections,
    additionalReason, setAdditionalReason,
    addFunc,
  } = useCertificatedCompanyBlackListAddModal()

  return (
    <Modal customKey={'certificatedCompanyBlackListAddModal'} isOpen={isOpen} setIsOpenAction={setIsOpen}>
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
        <SubmitSection
          cancelContents={'닫기'}
          submitContents={'추가하기'}
          cancelFunc={() => setIsOpen(false)}
          submitFunc={() => {
            addFunc()
              .then(res => {
                if(res) {
                  setIsOpen(false)
                } else {
                  alert('추가 도중 문제가 발생했습니다 다시 시도해주세요')
                }
              })
          }}
        />
      </ModalContainer>
    </Modal>
  )
}