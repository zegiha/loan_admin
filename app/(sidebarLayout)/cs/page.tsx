import {SectionHeader} from '@/shared/ui/molecules'
import Announcement from '@/widgets/announcement/ui/Announcement'
import Inquiry from '@/widgets/inquiry/ui/Inquiry'

export default function Page() {
  return (
    <>
      <SectionHeader headerContents={'고객센터 관리'}>
        <Announcement/>
        <Inquiry/>
      </SectionHeader>
    </>
  )
}