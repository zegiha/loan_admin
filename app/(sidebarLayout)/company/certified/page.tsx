import {SectionHeader} from '@/shared/ui/molecules'
import {CertificatedCompanyBlackList} from '@/widgets/certificatedCompanyBlackList'

export default function Page() {
  return (
    <>
      <SectionHeader headerContents={'정식업체 관리'}>
        <CertificatedCompanyBlackList/>
      </SectionHeader>
    </>
  )
}