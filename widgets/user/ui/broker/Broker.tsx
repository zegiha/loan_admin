'use client'

import {
  SectionHeader,
} from '@/shared/ui/molecules'
import BlackList from '@/widgets/user/ui/broker/blackList/BlackList'
import Leave from '@/widgets/user/ui/broker/leave/Leave'
import Management from '@/widgets/user/ui/broker/management/Management'
import RegisterReq from '@/widgets/user/ui/broker/register/RegisterReq'

export default function Broker() {
  return (
    <SectionHeader
      headerContents={'대부 중개 업자'}
      contentsGap={24}
    >
      <RegisterReq/>
      <BlackList/>
      <Management/>
      <Leave/>
    </SectionHeader>
  )
}
