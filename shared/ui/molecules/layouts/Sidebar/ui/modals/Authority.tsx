import {AdminEntity} from '@/entities'
import {TSetState} from '@/shared/const'
import {check_is_typed_when_string} from '@/shared/lib'
import {Typo} from '@/shared/ui/atoms'
import {Dropdown, Modal, ModalContainer} from '@/shared/ui/molecules'
import {SubmitSection} from '@/shared/ui/organisms'
import {useState} from 'react'

export default function Authority({
  isOpen,
  setIsOpen,
  currentAuthority
}: {
  isOpen: boolean
  setIsOpen: TSetState<boolean>
  currentAuthority: AdminEntity['authority']
}) {
  const [authority, setAuthority] = useState<AdminEntity['authority']>(currentAuthority)

  const authorityToKorean = (v: AdminEntity['authority']) =>
    v === 'SUPER' ? '최고 관리자' : '일반 관리자'
  const type: Array<AdminEntity['authority']> = ['SUPER', 'NORMAL']

  return <Modal customKey={'editAuthority'} isOpen={isOpen} setIsOpenAction={setIsOpen}>
    <ModalContainer size={'medium'}>
      <Typo.Body color={'variable'} emphasize>권한 변경</Typo.Body>
      <Dropdown.Select
        selectedContents={authorityToKorean(authority)}
        width={'fill'}
      >
        {type.map((v, i) => (
          <Dropdown.Option
            key={i}
            contents={authorityToKorean(v)}
            setSelected={() => setAuthority(v)}
            isSelected={authority === v}
          />
        ))}
      </Dropdown.Select>
      <SubmitSection
        cancelContents={'취소'}
        submitContents={'변경하기'}
        cancelFunc={() => setIsOpen(false)}
        submitFunc={() => {
          const message = check_is_typed_when_string(authority)
          if(message !== null) {
            alert(message)
            return
          }
          // TODO 권한 변경 API
          alert('변경됐습니다')
          setIsOpen(false)
        }}
      />
    </ModalContainer>
  </Modal>
}