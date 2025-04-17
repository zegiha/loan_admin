import {TSetState} from '@/shared/const'
import {check_is_typed_when_string} from '@/shared/lib'
import {Col, Icon, Typo} from '@/shared/ui/atoms'
import {Modal, ModalContainer, TextInput} from '@/shared/ui/molecules'
import deleteAccount from '@/shared/ui/molecules/layouts/Sidebar/api/deleteAccount'
import {SubmitSection} from '@/shared/ui/organisms'
import {useRouter} from 'next/navigation'
import {useState} from 'react'

export default function Delete({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean
  setIsOpen: TSetState<boolean>
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
          deleteAccount()
            .then(() => {
              alert('삭제됐습니다')
              router.replace('/login')
            })
        }}
        cancelFunc={() => setIsOpen(false)}
      />
    </ModalContainer>
  </Modal>
}
