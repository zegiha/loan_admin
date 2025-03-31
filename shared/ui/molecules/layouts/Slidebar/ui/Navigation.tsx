import {Col, Icon, Row, Typo} from '@/shared/ui/atoms'
import useSidebarControl from '@/shared/ui/molecules/layouts/Slidebar/store/useSidebarControl'
import style from '@/shared/ui/molecules/layouts/Slidebar/ui/style.module.css'
import classNames from 'classnames'
import {AnimatePresence} from 'framer-motion'

function list({children}: {children: React.ReactNode}) {
  return <Col width={'fill'} gap={12}>
    {children}
  </Col>
}

function item({
  index,
  iconKey,
  navigationName,
}: {
  index: number
  iconKey: string
  navigationName: string
}) {
  const {isOpen, activeNavIndex, setActiveNavIndex} = useSidebarControl()

  return (
    <Row
      width={'fill'}
      gap={8}
      className={classNames([style.navItem, activeNavIndex === index && style.navItemActive])}
      alignItems={'center'}
      onClick={() => setActiveNavIndex(index)}
    >

      <Icon
        iconKey={iconKey}
        fill={activeNavIndex === index}
        weight={activeNavIndex === index ? '400' : '300'}
      />
      <AnimatePresence>
        {isOpen && (
          <Row width={'fill'} motion={{
            initial: {opacity: 0},
            animate: {opacity: 1},
            exit: {opacity: 0},
          }}>
            <Typo.Contents width={'fill'} isPre={'nowrap'}>
              {navigationName}
            </Typo.Contents>
          </Row>
        )}
      </AnimatePresence>
    </Row>
  )
}

const Navigation = {
  item,
  list,
}

export default Navigation
