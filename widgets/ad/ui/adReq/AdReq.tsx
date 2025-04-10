import {SectionHeader} from '@/shared/ui/molecules'
import AdRegister from '@/widgets/ad/ui/adReq/adRegister/AdRegister'

export default function() {
  return (
    <SectionHeader headerContents={'요청 관리'}>
      <AdRegister/>
    </SectionHeader>
  )
}