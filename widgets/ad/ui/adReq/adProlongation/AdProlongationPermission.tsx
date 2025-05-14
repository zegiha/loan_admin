import {
  adsPrivateControllerApprove,
  adsPrivateControllerApproveDateExtend,
  adsPrivateControllerRejectDateExtend,
} from '@/entities/api/advertisement-private/advertisement-private'
import { Col, Icon, Typo } from '@/shared/ui/atoms'
import { Modal, ModalContainer } from '@/shared/ui/molecules'
import { SubmitSection } from '@/shared/ui/organisms'
import { IAdProlongationPermission } from '@/widgets/ad/const/adReq/adProlongation/type'

export default function AdProlongationPermission({
  isOpen,
  setIsOpen,
  targetId,
  setTargetId,
  refetch,
}: IAdProlongationPermission) {
  const closeFunc = () => {
    setTargetId('')
    setIsOpen(false)
  }

  return (
    <Modal
      customKey={'adProlongationPermission'}
      isOpen={isOpen}
      setIsOpenAction={setIsOpen}
    >
      <ModalContainer size={'small'} gap={24}>
        <Col gap={8}>
          <Icon iconKey={'permission'} color={'primary'} size={48} fill />
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
          submitFunc={async () => {
            try {
              await adsPrivateControllerApproveDateExtend(targetId)
              refetch()
              closeFunc()
            } catch (e) {
              console.error(e)
              alert('나중에 다시 시도해주세요')
            }
          }}
          cancelContents={'거절'}
          cancelFunc={async () => {
            try {
              await adsPrivateControllerRejectDateExtend(targetId)
              refetch()
              closeFunc()
            } catch (e) {
              console.error(e)
              alert('나중에 다시 시도해주세요')
            }
          }}
        />
      </ModalContainer>
    </Modal>
  )
}
