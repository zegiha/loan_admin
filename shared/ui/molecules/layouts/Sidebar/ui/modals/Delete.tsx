import {TSetState} from '@/shared/const'
import {check_is_typed_when_string} from '@/shared/lib'
import {Col, Icon, Typo} from '@/shared/ui/atoms'
import {Modal, ModalContainer, TextInput} from '@/shared/ui/molecules'
import deleteAccount from '@/shared/ui/molecules/layouts/Sidebar/api/deleteAccount'
import {SubmitSection} from '@/shared/ui/organisms'
import {useRouter} from 'next/navigation'
import {useState} from 'react'
import {adminControllerDelete, adminControllerVerify} from "@/entities/api/admin/admin";
import {AxiosError} from "axios";

export default function Delete({
  isOpen,
  setIsOpen,
  id
}: {
  isOpen: boolean
  setIsOpen: TSetState<boolean>
  id: string
}) {
  const router = useRouter()
  const [PW, setPW] = useState<string>('')

  return <Modal customKey={'deleteAccount'} isOpen={isOpen} setIsOpenAction={setIsOpen}>
    <ModalContainer size={'medium'}>
      <Col gap={8}>
        <Icon
          iconKey={'warning'}
          color={'primary'}
          size={48}
          fill={true}
        />
        <Col gap={4}>
          <Typo.Body color={'variable'} isPre={'wrap'} emphasize>
            계정을 삭제할까요?
          </Typo.Body>
          <Typo.Contents color={'dim'}>
            되돌릴 수 없으니 신중하게 결정해주세요
          </Typo.Contents>
        </Col>
      </Col>
      <TextInput
        label={'비밀번호'}
        input_type={'password'}
        value={PW}
        onChangeAction={v => setPW(v)}
        placeholder={'확인을 위해 비밀번호를 작성해주세요'}
        error_checker={[check_is_typed_when_string]}
      />
      <SubmitSection
        submitContents={'제거하기'}
        cancelContents={'취소'}
        submitFunc={() => {
          const message = check_is_typed_when_string(PW)
          if(message !== null) {
            alert('비밀번호는' + message)
            return
          }
          adminControllerVerify({password: PW})
            .then(() => {
              adminControllerDelete(id)
                .then(() => {
                  alert('계정이 삭제됐습니다')
                  router.replace('/login')
                })
                .catch((err) => {
                  console.log(err)
                  alert('다시 시도해주세요')
                })
            })
            .catch((e) => {
              if(e instanceof AxiosError && e.status === 401)
                alert('비밀번호가 틀렸습니다')
              else
                alert('다시 시도해주세요')
            })
        }}
        cancelFunc={() => setIsOpen(false)}
      />
    </ModalContainer>
  </Modal>
}
