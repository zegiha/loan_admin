import {SidebarLayout} from '@/shared/ui/molecules'
import {ReactNode} from 'react'

export default function Layout({
  children
}: {
  children: ReactNode
}) {
  return (
    <SidebarLayout>
      {children}
    </SidebarLayout>
  )
}