import {SectionHeader} from '@/shared/ui/molecules'
import {Announcement} from '@/widgets/announcement'
import {Inquiry} from '@/widgets/inquiry'

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