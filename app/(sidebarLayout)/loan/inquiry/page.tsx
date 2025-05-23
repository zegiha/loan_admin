import {SectionHeader} from '@/shared/ui/molecules'
import {LoanInquiry} from '@/widgets/loanInquiry'

export default function Page() {
  return (
    <SectionHeader headerContents={'실시간 대출 문의 관리'}>
      <LoanInquiry/>
    </SectionHeader>
  )
}