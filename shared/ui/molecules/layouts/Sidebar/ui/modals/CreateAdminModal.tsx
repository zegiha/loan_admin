import {TSetState} from '@/shared/const'
import {check_id_and_message, check_is_typed_when_string, check_password_and_message} from '@/shared/lib'
import {Col, Typo} from '@/shared/ui/atoms'
import {CtaButton, Dropdown, Modal, ModalContainer, TextInput} from '@/shared/ui/molecules'
import useCreateAdminModal from '@/shared/ui/molecules/layouts/Sidebar/model/useCreateAdminModal'
import dropdownOption from '@/shared/ui/molecules/layouts/Sidebar/const/createAdminDropdownOption'

export default function CreateAdminModal({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean
  setIsOpen: TSetState<boolean>
}) {
  const {
    name, setName,
    id, setId,
    password, setPassword,
    authority, setAuthority,
    createAccount
  } = useCreateAdminModal()

  return (
    <Modal
      customKey={'createAdminModal'}
      isOpen={isOpen}
      setIsOpenAction={setIsOpen}
    >
      <ModalContainer
        gap={24}
        size={'large'}
      >
        <Typo.Body color={'variable'} emphasize>
          관리자 계정 생성
        </Typo.Body>
        <Col width={'fill'} gap={8}>
          <TextInput
            label={'계정 이름'}
            value={name}
            placeholder={'계정 이름을 입력해주세요'}
            onChangeAction={v => setName(v)}
            error_checker={[check_is_typed_when_string]}
          />
          <TextInput
            label={'아이디'}
            value={id}
            placeholder={'아이디를 입력해주세요'}
            onChangeAction={v => setId(v)}
            error_checker={[check_id_and_message]}
          />
          <TextInput
            label={'비밀번호'}
            value={password}
            placeholder={'비밀번호를 입력해주세요'}
            onChangeAction={v => setPassword(v)}
            error_checker={[check_password_and_message]}
          />
          <Col width={'fill'} gap={2}>
            <Typo.Contents color={'dim'}>
              관리자 권한
            </Typo.Contents>
            <Dropdown.Select
              width={'fill'}
              selectedContents={dropdownOption[authority]}
            >
              {dropdownOption.map((v, i) => (
                <Dropdown.Option
                  key={i}
                  isSelected={authority === i}
                  setSelected={() => setAuthority(i)}
                  contents={v}
                />
              ))}
            </Dropdown.Select>
          </Col>
        </Col>
        <CtaButton
          width={'fill'}
          height={'normal'}
          onClick={() => {
            createAccount()
              .then(res => {
                if(res === 'success')
                  setIsOpen(false)
                else if(res === 'error')
                  alert('문제가 발생했습니다 다시 시도해주세요')
                else
                  alert(res)
              })
          }}
        >
          <Typo.Contents
            color={'onPrimary'}
            emphasize
          >
            생성하기
          </Typo.Contents>
        </CtaButton>
      </ModalContainer>
    </Modal>
  )
}