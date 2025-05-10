import {SectionHeader} from '@/shared/ui/molecules'
import AdminManagement from '@/widgets/user/ui/admin/adminManagement/AdminManagement'
import AdminRegisterReq from '@/widgets/user/ui/admin/adminRegisterReq/AdminRegisterReq'

export default function() {
  return (
    <SectionHeader headerContents={'관리자 계정 관리'}>
      {/*<AdminRegisterReq/>*/}
      <AdminManagement/>
    </SectionHeader>
  )
}
