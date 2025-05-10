import {TSetState} from '@/shared/const'
import {check_id_and_message, check_password_and_message} from '@/shared/lib'
import {Col, Typo} from '@/shared/ui/atoms'
import {Modal, ModalContainer, TextInput} from '@/shared/ui/molecules'
import {SubmitSection} from '@/shared/ui/organisms'
import {useState} from 'react'
import {adminControllerLogin, adminControllerUpdateProfile, adminControllerVerify} from "@/entities/api/admin/admin";

export default function Id({
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
  const [id, setId] = useState<string>(currentId)
  const [password, setPassword] = useState<string>('')

  const handleSubmit = async () => {
    let message = check_id_and_message(id)
    if(message !== null) {
      alert('아이디는 ' + message)
      return
    }
    message = check_password_and_message(password)
    if(message !== null) {
      alert('비밀번호는 ' + message)
      return
    }
    adminControllerVerify({password})
      .then(() => {
        adminControllerUpdateProfile({
          id,
          password,
          name: ''
        })
          .then(() => {
            adminControllerLogin({
              id,
              password,
            }).then(() => {
              refetch()
              setIsOpen(false)
            })
          })
          .catch(() => {
            alert('다시 시도해주세요')
          })
      })
      .catch(err => {
        if(err.status === 401)
          alert('비밀번호가 틀렸습니다')
        else
          alert('다시 시도해주세요')
      })
  }

  return <Modal customKey={'editId'} isOpen={isOpen} setIsOpenAction={setIsOpen}>
    <ModalContainer size={'medium'}>
      <Typo.Body color={'variable'} emphasize>아이디 변경</Typo.Body>
      <Col width={'fill'} gap={8}>
        <TextInput
          label={'아이디'}
          value={id}
          onChangeAction={v => setId(v)}
          placeholder={'아이디를 변경해주세요'}
          error_checker={[check_id_and_message]}
        />
        <TextInput
          label={'확인 비밀번호'}
          input_type={'password'}
          value={password}
          onChangeAction={v => setPassword(v)}
          placeholder={'비밀번호를 입력해주세요'}
          error_checker={[check_password_and_message]}
        />
      </Col>
      <SubmitSection
        cancelContents={'취소'}
        submitContents={'변경하기'}
        cancelFunc={() => setIsOpen(false)}
        submitFunc={() => handleSubmit()}
      />
    </ModalContainer>
  </Modal>
}
