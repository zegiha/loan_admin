import {Divider} from '@/shared/ui/atoms'
import {Admin, Broker} from '@/widgets/user'

export default function Page() {
  return (
    <>
      <Broker/>
      <Divider/>
      <Admin/>
    </>
  )
}