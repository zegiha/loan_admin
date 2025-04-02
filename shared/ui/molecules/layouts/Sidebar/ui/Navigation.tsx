'use client'

import {TIconListKey} from '@/shared/const'
import {Col, Icon, Row, Typo} from '@/shared/ui/atoms'
import useSidebarControl from '@/shared/ui/molecules/layouts/Sidebar/store/useSidebarControl'
import style from '@/shared/ui/molecules/layouts/Sidebar/ui/style.module.css'
import classNames from 'classnames'
import {AnimatePresence} from 'framer-motion'
import {useRouter, usePathname} from 'next/navigation'
import {useEffect, useState} from 'react'

function list({children}: {children: React.ReactNode}) {
  return <Col width={'fill'} gap={12}>
    {children}
  </Col>
}

function item({
  iconKey,
  navigationName,
  pathname
}: {
  iconKey: TIconListKey
  navigationName: string
  pathname: string
}) {
  const {isOpen} = useSidebarControl()
  const router = useRouter()
  const [isActive, setIsActive] = useState(false)
  const currentPathname = usePathname()

  useEffect(() => {
    if(currentPathname === pathname) setIsActive(true)
    else setIsActive(false)
  }, [currentPathname])

  return (
    <Row
      width={'fill'}
      gap={8}
      className={classNames([style.navItem, isActive && style.navItemActive])}
      alignItems={'center'}
      onClick={() => {
        router.push(pathname)
      }}
    >

      <Icon
        iconKey={iconKey}
        color={isOpen ? 'variable' : 'normal'}
        fill={isActive}
        weight={isActive ? '400' : '300'}
      />
      <AnimatePresence>
        {isOpen && (
          <Row width={'fill'} motion={{
            initial: {opacity: 0},
            animate: {opacity: 1},
            exit: {opacity: 0},
          }}>
            <Typo.Contents
              color={isOpen ? 'variable' : 'generic'}
              width={'fill'}
              isPre={'nowrap'}
            >
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
