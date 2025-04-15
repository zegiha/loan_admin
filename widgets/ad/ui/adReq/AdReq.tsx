import {SectionHeader} from '@/shared/ui/molecules'
import AdEdit from '@/widgets/ad/ui/adReq/adEdit/AdEdit'
import AdProlongation from '@/widgets/ad/ui/adReq/adProlongation/AdProlongation'
import AdRegister from '@/widgets/ad/ui/adReq/adRegister/AdRegister'

export default function() {
  return (
    <SectionHeader headerContents={'광고 요청 관리'}>
      <AdRegister/>
      <AdEdit/>
      <AdProlongation/>
    </SectionHeader>
  )
}