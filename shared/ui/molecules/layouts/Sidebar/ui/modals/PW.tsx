import {TSetState} from '@/shared/const'
import {check_is_typed_when_string, check_password_and_message} from '@/shared/lib'
import {Col, Typo} from '@/shared/ui/atoms'
import {Modal, ModalContainer, TextInput} from '@/shared/ui/molecules'
import {SubmitSection} from '@/shared/ui/organisms'
import {useState} from 'react'
import {adminControllerLogin, adminControllerUpdateProfile, adminControllerVerify} from "@/entities/api/admin/admin";

export default function PW({
  isOpen,
  setIsOpen,
  currentId,
  refetch,
}: {
  isOpen: boolean
  setIsOpen: TSetState<boolean>
  currentId: string
  refetch: () => void
}) {
  const [newPW, setNewPW] = useState<string>('')
  const [checkNewPW, setCheckNewPW] = useState<string>('')
  const [currentPW, setCurrentNewPW] = useState<string>('')

  return <Modal customKey={'editPW'} isOpen={isOpen} setIsOpenAction={setIsOpen}>
    <ModalContainer size={'large'}>
      <Typo.Body color={'variable'} emphasize>
        비밀번호 변경
      </Typo.Body>
      <Col width={'fill'} gap={8}>
        <TextInput
          label={'새 비밀번호'}
          input_type={'password'}
          value={newPW}
          onChangeAction={v => setNewPW(v)}
          placeholder={'새 비밀번호를 입력해주세요'}
          error_checker={[check_password_and_message]}
        />
        <TextInput
          label={'새 비밀번호 확인'}
          input_type={'password'}
          value={checkNewPW}
          onChangeAction={v => setCheckNewPW(v)}
          placeholder={'새 비밀번호를 한번 더 입력해주세요'}
          error_checker={[check_is_typed_when_string]}
        />
        <TextInput
          label={'이전 비밀번호'}
          input_type={'password'}
          value={currentPW}
          onChangeAction={v => setCurrentNewPW(v)}
          placeholder={'변경을 위해 이전 비밀번호를 입력해주세요'}
          error_checker={[check_is_typed_when_string]}
        />
      </Col>
      <SubmitSection
        submitContents={'변경하기'}
        cancelContents={'취소'}
        submitFunc={async () => {
          let message

          message = check_password_and_message(newPW)
          if(message !== null) {
            alert('새로운 비밀번호는 ' + message)
            return
          }
          message = check_is_typed_when_string(checkNewPW)
          if(message !== null) {
            alert('확인 비밀번호는 ' + message)
            return
          }
          message = check_is_typed_when_string(currentPW)
          if(message !== null) {
            alert('이전 비밀번호는 ' + message)
            return
          }
          if(newPW !== checkNewPW) {
            alert('새로운 비밀번호가 확인 비밀번호와 다릅니다')
            return
          }
          adminControllerVerify({password: currentPW})
            .then(() => {
              adminControllerUpdateProfile({
                id: currentId,
                password: newPW,
                name: '',
              })
                .then(() => {
                  adminControllerLogin({
                    id: currentId,
                    password: newPW
                  })
                    .then (() => {
                      alert('비밀번호가 변경됐습니다')
                      refetch()
                      setIsOpen(false)
                    })
                    .catch(() => {
                      alert('다시 로그인해주세요')
                    })
                })
                .catch((err) => {
                  console.error(err)
                  alert('다시 시도해주세요')
                })
            })
            .catch(() => {
              alert('현재 비밀번호가 틀렸습니다')
            })
        }}
        cancelFunc={() => setIsOpen(false)}
      />
    </ModalContainer>
  </Modal>
}
