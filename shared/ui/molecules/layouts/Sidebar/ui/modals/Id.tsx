import {TSetState} from '@/shared/const'
import {check_id_and_message, check_is_typed_when_string} from '@/shared/lib'
import {Typo} from '@/shared/ui/atoms'
import {Modal, ModalContainer, TextInput} from '@/shared/ui/molecules'
import {SubmitSection} from '@/shared/ui/organisms'
import {useState} from 'react'

export default function Id({
  isOpen,
  setIsOpen,
  currentId,
}: {
  isOpen: boolean
  setIsOpen: TSetState<boolean>
  currentId: string
}) {
  const [id, setId] = useState<string>(currentId)

  return <Modal customKey={'editId'} isOpen={isOpen} setIsOpenAction={setIsOpen}>
    <ModalContainer size={'medium'}>
      <Typo.Body color={'variable'} emphasize>아이디 변경</Typo.Body>
     <TextInput
       value={id}
       onChangeAction={v => setId(v)}
       placeholder={'아이디를 변경해주세요'}
       error_checker={[check_is_typed_when_string]}
     />
      <SubmitSection
        cancelContents={'취소'}
        submitContents={'변경하기'}
        cancelFunc={() => setIsOpen(false)}
        submitFunc={() => {
          const message = check_id_and_message(id)
          if(message !== null) {
            alert(message)
            return
          }
          // TODO ID 변경 API
          alert('변경됐습니다')
          setIsOpen(false)
        }}
      />
    </ModalContainer>
  </Modal>
}