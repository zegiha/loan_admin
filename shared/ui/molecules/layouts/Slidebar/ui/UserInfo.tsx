import {Col, Icon, Row, Typo} from '@/shared/ui/atoms'
import useSidebarControl from '@/shared/ui/molecules/layouts/Slidebar/store/useSidebarControl'
import {AnimatePresence} from 'framer-motion'

export default function() {
  const {isOpen} = useSidebarControl()

  return (
    <AnimatePresence>
      {isOpen && (
        <Col
          width={'fill'}
          motion={{
            initial: {opacity: 0, height: 0},
            animate: {opacity: 1, height: 'min-content'},
            exit: {opacity: 0, height: 0},
            transition: {
              duration: 0.12,
              ease: [.35,.44,.68,1],
            }
          }}
        >
          <Col width={'fill'} gap={4}>
            <Typo.Contents emphasize isPre={'nowrap'}>
              어드민 아이디
            </Typo.Contents>
            <Row gap={2} alignItems={'center'}>
              <Icon
                iconKey={'star'}
                size={16}
                color={'primary'}
              />
              <Typo.Contents color={'primary'} isPre={'nowrap'}>
                최고 관리자
              </Typo.Contents>
            </Row>
          </Col>
        </Col>
      )}
    </AnimatePresence>
  )
}