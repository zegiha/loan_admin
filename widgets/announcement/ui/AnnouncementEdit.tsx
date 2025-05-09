import {AnnouncementEntity} from '../../../prevEntities'
import {TSetState} from '@/shared/const'
import {Typo} from '@/shared/ui/atoms'
import {Modal, ModalContainer} from '@/shared/ui/molecules'
import {SubmitSection} from '@/shared/ui/organisms'
import useAnnouncementEdit from '@/widgets/announcement/model/useAnnouncementEdit'
import AnnouncementEditInputSection from '@/widgets/announcement/ui/AnnouncementEditInputSection'

export default function AnnouncementEdit({
  isOpen,
  setIsOpen,
  target,
  submitCallback,
}: {
  isOpen: boolean
  setIsOpen: TSetState<boolean>
  target:
    Omit<AnnouncementEntity, 'viewCount' | 'writedDate'>
  submitCallback: () => void
}) {
  const {
    title, setTitle,
    contents, setContents,
    type, setType,
    editFunc
  } = useAnnouncementEdit(
    target.title,
    target.contents,
    target.type
  )

  return <Modal
    customKey={'announcementEdit'}
    isOpen={isOpen}
    setIsOpenAction={setIsOpen}
  >
    <ModalContainer size={'medium'} gap={24}>
      <Typo.Body color={'variable'} emphasize>
        공지 수정
      </Typo.Body>
      <AnnouncementEditInputSection
        {...{
          title, setTitle,
          contents, setContents,
          type, setType
        }}
      />
      <SubmitSection
        cancelContents={'취소'}
        submitContents={'수정하기'}
        cancelFunc={() => setIsOpen(false)}
        submitFunc={() => {
          editFunc().then((res) => {
            if(!res) return
            alert('수정됐습니다')
            submitCallback()
            setIsOpen(false)
          })
        }}
      />
    </ModalContainer>
  </Modal>
}