import {TSetState} from '@/shared/const'
import {Sidepeek, SidepeekHeaderSection} from '@/shared/ui/molecules'

export default function({
  isOpen,
  setIsOpen,
  userId,
}: {
  isOpen: boolean
  setIsOpen: TSetState<boolean>
  userId: string
}) {
  return (
    <Sidepeek
      isOpen={isOpen}
      setIsOpenAction={setIsOpen}
      gap={24}
    >
      <SidepeekHeaderSection
        header={'사용자 상세정보'}
        closeFunc={() => setIsOpen(false)}
      >
        haha
      </SidepeekHeaderSection>
    </Sidepeek>
  )
}