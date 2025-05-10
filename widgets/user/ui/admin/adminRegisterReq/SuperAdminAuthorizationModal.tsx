import {TSetState} from '@/shared/const'
import {WarningModal} from '@/shared/ui/organisms'

export default function({
  isOpen,
  setIsOpen,
  target,
  setTarget,
}: {
  isOpen: boolean
  setIsOpen: TSetState<boolean>
  target: {id: string, reqId: string}
  setTarget: TSetState<{name: string, id: string, reqId: string} | null>
}) {
  return (
    <WarningModal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      title={`${target.id}님\n최고 관리자 계정 생성을 승인할까요?`}
      subtitle={`최고 관리자 계정은 삭제할 수 없으니 한번 더 확인해주세요`}
      submitContents={'승인'}
      cancelContents={'거절'}
      submitFunc={() => {
        // TODO 회원가입 승인
        alert('승인되었습니다')
        setTarget(null)
      }}
      cancelFunc={() => {
        //TODO 회원가입 거절
        alert('거부되었습니다')
        setTarget(null)
      }}
    />
  )
}
