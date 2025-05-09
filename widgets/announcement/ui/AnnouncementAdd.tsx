import {TSetState} from '@/shared/const'
import {check_is_typed_when_string} from '@/shared/lib'
import {Col, Row, Typo} from '@/shared/ui/atoms'
import {CtaButton, Dropdown, Modal, ModalContainer, TextInput} from '@/shared/ui/molecules'
import useAnnouncementAdd from '@/widgets/announcement/model/useAnnouncementAdd'

const dropdownOption = [
  '일반',
  '중요',
]

export default function AnnouncementAdd({
  isOpen,
  setIsOpen,
  refetch
}: {
  isOpen: boolean
  setIsOpen: TSetState<boolean>
  refetch: () => void
}) {
  const {
    type, setType,
    title, setTitle,
    contents, setContents,
    createFunc
  } = useAnnouncementAdd()

  return (
    <Modal
      customKey={'announcementAdd'}
      isOpen={isOpen}
      setIsOpenAction={setIsOpen}
    >
      <ModalContainer
        size={'large'}
        gap={24}
      >
        <Typo.Body color={'variable'} emphasize>
          공지사항 추가
        </Typo.Body>
        <Col width={'fill'} gap={8}>
          <TextInput
            label={'제목'}
            value={title}
            onChangeAction={v => setTitle(v)}
            placeholder={'제목을 입력해주세요'}
            error_checker={[check_is_typed_when_string]}
          />
          <TextInput
            input_type={'textarea'}
            height={320}
            label={'내용'}
            value={contents}
            onChangeAction={v => setContents(v)}
            placeholder={'내용을 입력해주세요'}
            error_checker={[check_is_typed_when_string]}
          />
          <Col width={'fill'} gap={2}>
            <Typo.Caption color={'dim'}>
              중요도(분류)
            </Typo.Caption>
            <Dropdown.Select
              width={'fill'}
              selectedContents={dropdownOption[type]}
            >
              {dropdownOption.map((v, i) => (
                <Dropdown.Option
                  key={i}
                  isSelected={type === i}
                  setSelected={() => setType(i)}
                  contents={v}
                />
              ))}
            </Dropdown.Select>
          </Col>
        </Col>
        <Row width={'fill'}>
          <CtaButton
            flex={1}
            height={'normal'}
            color={'gray'}
            onClick={() => {
              setIsOpen(false)
            }}
          >
            <Typo.Contents>
              최소
            </Typo.Contents>
          </CtaButton>
          <CtaButton
            flex={2}
            height={'normal'}
            onClick={() => {
              createFunc()
                .then(res => {
                  if(res === 'success') {
                    refetch()
                    setIsOpen(false)
                  }
                  else if(res === 'error')
                    alert('다시 시도해주세요')
                  else
                    alert(res)
                })
            }}
          >
            <Typo.Contents color={'onPrimary'} emphasize>
              작성하기
            </Typo.Contents>
          </CtaButton>
        </Row>
      </ModalContainer>
    </Modal>
  )
}