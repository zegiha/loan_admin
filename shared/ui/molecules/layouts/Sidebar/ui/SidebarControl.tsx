import {Icon, Row} from '@/shared/ui/atoms'
import useSidebarControl from '@/shared/ui/molecules/layouts/Sidebar/store/useSidebarControl'
import Setting from '@/shared/ui/molecules/layouts/Sidebar/ui/modals/Setting'
import style from '@/shared/ui/molecules/layouts/Sidebar/ui/style.module.css'
import {Variants} from 'framer-motion'
import {useState} from 'react'

export default function() {
  const {isOpen, toggleIsOpen} = useSidebarControl()
  const [isSettingOpen, setIsSettingOpen] = useState<boolean>(false)

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
          iconKey={'sidebarArrow'}
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
        onClick={() => setIsSettingOpen(true)}
      >
        <Icon
          iconKey={'setting'}
          color={'dim'}
          fill={false}
        />
      </Row>
      {isSettingOpen && (
        <Setting
          isOpen={isSettingOpen}
          setIsOpen={setIsSettingOpen}
        />
      )}
    </Row>
  )
}