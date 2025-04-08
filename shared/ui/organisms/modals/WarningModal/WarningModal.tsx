import {transition, TSetState} from '@/shared/const'
import {Col, Icon, Row, Typo} from '@/shared/ui/atoms'
import {CtaButton, Modal} from '@/shared/ui/molecules'
import style from './style.module.css'

export default function WarningModal({
  isOpen,
  setIsOpen,
  title,
  subtitle,
  submitContents,
  cancelContents,
  submitFunc,
  cancelFunc,
}: {
  isOpen: boolean
  setIsOpen: TSetState<boolean>
  title: string
  subtitle: string
  submitContents: string
  cancelContents?: string
  submitFunc: () => void
  cancelFunc?: () => void
}) {
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
            <Typo.Body color={'variable'} isPre={'wrap'} emphasize>
              {title}
            </Typo.Body>
            <Typo.Contents color={'dim'}>
              {subtitle}
            </Typo.Contents>
          </Col>
        </Col>
        <Row width={'fill'} gap={8}>
          <CtaButton
            flex={1}
            color={'gray'}
            onClick={() => {
              if(cancelFunc !== undefined) cancelFunc()
              setIsOpen(false)
            }}
          >
            <Typo.Contents>{cancelContents ?? '취소'}</Typo.Contents>
          </CtaButton>
          <CtaButton
            flex={2}
            onClick={() => {
              submitFunc()
              setIsOpen(false)
            }}
          >
            <Typo.Contents color={'onPrimary'} emphasize>
              {submitContents}
            </Typo.Contents>
          </CtaButton>
        </Row>
      </Col>
    </Modal>
  )
}