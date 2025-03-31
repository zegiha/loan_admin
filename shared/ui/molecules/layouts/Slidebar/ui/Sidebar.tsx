'use client'

import useSidebarControl from '@/shared/ui/molecules/layouts/Slidebar/store/useSidebarControl'
import SidebarControl from '@/shared/ui/molecules/layouts/Slidebar/ui/SidebarControl'
import UserInfo from '@/shared/ui/molecules/layouts/Slidebar/ui/UserInfo'
import {Variants} from 'framer-motion'
import style from './style.module.css'
import {Col, Divider} from "@/shared/ui/atoms";
import Navigation from '@/shared/ui/molecules/layouts/Slidebar/ui/Navigation'

const navigationInfo: Array<{iconKey: string, navigationName: string}> = [
  {iconKey: 'account_circle', navigationName: '유저'},
  {iconKey: 'ad_group', navigationName: '광고'},
  {iconKey: 'support_agent', navigationName: '고객센터'},
  {iconKey: 'article', navigationName: '실시간 대출 문의'},
  {iconKey: 'verified', navigationName: '정식업체'}
]

export default function Sidebar() {
  const {isOpen} = useSidebarControl()

  const variants: Variants = {
    open: {
      width: 260,
    },
    close: {
      width: 82
    }
  }
  return (
    <Col
      className={style.container}
      motion={{
        initial: 'open',
        variants: variants,
        animate: isOpen ? 'open' : 'close',
        transition: {
          duration: 0.24,
          ease: [.35,.44,.68,1],
          delayChildren: 0
        }
      }}
      gap={isOpen ? 12 : 0}
    >
      <SidebarControl/>
      <UserInfo/>
      <Divider padding={[12, 4]}/>
      <Navigation.list>
        {navigationInfo.map((v, i) => (
          <Navigation.item
            key={i}
            index={i}
            {...v}
          />
        ))}
      </Navigation.list>
    </Col>
  )
}
