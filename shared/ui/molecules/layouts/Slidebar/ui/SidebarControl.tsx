import {Icon, Row} from '@/shared/ui/atoms'
import useSidebarControl from '@/shared/ui/molecules/layouts/Slidebar/store/useSidebarControl'
import style from '@/shared/ui/molecules/layouts/Slidebar/ui/style.module.css'
import {Variants} from 'framer-motion'

export default function() {
  const {isOpen, toggleIsOpen} = useSidebarControl()

  const iconButtonVariants: Variants = {
    open: {
      padding: 4
    },
    close: {
      padding: 12
    },
    hidden: {
      opacity: 0,
      display: 'none'
    }
  }

  return (
    <Row
      justifyContents={'space-between'}
      width={'fill'}
    >
      <Row
        className={style.iconButton32}
        motion={{
          variants: iconButtonVariants,
          animate: isOpen ? 'open' : 'close',
        }}
        onClick={toggleIsOpen}
      >
        <Icon
          iconKey={'double_arrow'}
          color={'dim'}
          fill={false}
          deg={isOpen ? -180 : 0}
        />
      </Row>
      <Row
        className={style.iconButton32}
        motion={{
          variants: iconButtonVariants,
          animate: isOpen ? 'open' : 'hidden',
        }}
      >
        <Icon
          iconKey={'settings'}
          color={'dim'}
          fill={false}
        />
      </Row>
    </Row>
  )
}