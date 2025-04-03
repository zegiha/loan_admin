import {transition, TSetState} from '@/shared/const'
import {Col, Icon, Row, Typo} from '@/shared/ui/atoms'
import {CtaButton, Modal} from '@/shared/ui/molecules'
import style from './style.module.css'

export default function ExcludeModal({
  isOpen,
  setIsOpen,
  targetUser,
  excludeFunc,
}: {
  isOpen: boolean
  setIsOpen: TSetState<boolean>
  targetUser: {userId: string, name: string} | null
  excludeFunc: () => void
}) {
  if(targetUser === null) return <></>
  return (
    <Modal
      isOpen={isOpen}
      setIsOpenAction={setIsOpen}
    >
      <Col
        className={style.modalContainer}
        gap={32}
        onClick={e => e.stopPropagation()}
        motion={{
          initial: { opacity: 0, y: -12 },
          animate: { opacity: 1, y: 0 },
          transition: transition.normal
        }}
      >
        <Col gap={8}>
          <Icon
            iconKey={'warning'}
            color={'primary'}
            size={48}
            fill={true}
          />
          <Col gap={4}>
            <Typo.Body color={'variable'} emphasize>
              {targetUser.name}님을 블랙 리스트에서 제외할까요?
            </Typo.Body>
            <Typo.Contents color={'dim'}>
              {targetUser.name}님을 제외해야하는지 한번 더 확인해주세요
            </Typo.Contents>
          </Col>
        </Col>
        <Row width={'fill'} gap={8}>
          <CtaButton
            flex={1}
            color={'gray'}
            onClick={() => setIsOpen(false)}
          >
            <Typo.Contents>취소</Typo.Contents>
          </CtaButton>
          <CtaButton
            flex={2}
            onClick={() => excludeFunc()}
          >
            <Typo.Contents color={'onPrimary'} emphasize>
              제외하기
            </Typo.Contents>
          </CtaButton>
        </Row>
      </Col>
    </Modal>
  )
}