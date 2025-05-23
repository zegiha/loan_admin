'use client'

import {TIconListKey, transition} from '@/shared/const'
import useSidebarControl from '@/shared/ui/molecules/layouts/Sidebar/store/useSidebarControl'
import CreateAdmin from '@/shared/ui/molecules/layouts/Sidebar/ui/CreateAdmin'
import SidebarControl from '@/shared/ui/molecules/layouts/Sidebar/ui/SidebarControl'
import UserInfo from '@/shared/ui/molecules/layouts/Sidebar/ui/UserInfo'
import {Variants} from 'framer-motion'
import style from './style.module.css'
import {Col, Divider, Row} from "@/shared/ui/atoms";
import Navigation from '@/shared/ui/molecules/layouts/Sidebar/ui/Navigation'

const navigationInfo: Array<{iconKey: TIconListKey, navigationName: string, pathname: string}> = [
  {iconKey: 'userNavigationIcon', navigationName: '유저', pathname: '/user'},
  {iconKey: 'advertisementNavigationIcon', navigationName: '광고', pathname: '/ad'},
  {iconKey: 'customerCenterNavigationIcon', navigationName: '고객센터', pathname: '/cs'},
  {iconKey: 'loanInquiryNavigationIcon', navigationName: '실시간 대출 문의', pathname: '/loan/inquiry'},
  // {iconKey: 'certifiedCompanyNavigationIcon', navigationName: '정식업체', pathname: '/company/certified'}
]

export default function Sidebar() {
  const {isOpen} = useSidebarControl()

  const variants: Variants = {
    open: {
      width: 244,
    },
    close: {
      width: 80,
    }
  }
  return (
    <Col
      className={style.container}
      motion={{
        initial: isOpen ? 'open' : 'close',
        variants: variants,
        animate: isOpen ? 'open' : 'close',
        transition: transition.normal
      }}
    >
      <Col
        className={style.wrapper}
        width={'fill'}
        gap={isOpen ? 12 : 0}
      >
        <SidebarControl/>
        <UserInfo/>
        <Divider padding={[12, 4]}/>
        <Navigation.list>
          {navigationInfo.map((v, i) => (
            <Navigation.item
              key={i}
              {...v} />
          ))}
        </Navigation.list>
        <CreateAdmin/>
      </Col>
    </Col>
  )
}
