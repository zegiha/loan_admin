import {useLoanboardControllerDelete} from '@/entities/api/loanboard/loanboard'
import {LoanboardResponseDto} from '@/entities/const'
import {TSetState} from '@/shared/const'
import {Typo} from '@/shared/ui/atoms'
import {CtaButton, Sidepeek, SidepeekHeaderSection, Table, TableLabeledRow} from '@/shared/ui/molecules'
import {formatLoanboardResponseToTableLabeledRow} from '@/widgets/loanInquiry/lib/helper'
import dynamic from 'next/dynamic'
import loadingSpinner from '@/public/assets/loadingSpinner.json'

const Player = dynamic(
  () => import('@lottiefiles/react-lottie-player').then(m => m.Player),
  {ssr: false}
)

export default function({
  isOpen,
  setIsOpen,
  target,
  setTarget,
  refetch
}:{
  isOpen: boolean
  setIsOpen: TSetState<boolean>
  target: LoanboardResponseDto
  setTarget: TSetState<LoanboardResponseDto | null>
  refetch: () => void
}) {
  const closeFunc = () => {
    setTarget(null)
    refetch()
    setIsOpen(false)
  }

  const {
    status,
    mutate
  } = useLoanboardControllerDelete({
    mutation: {
      onError: () => {
        alert('다시 시도해주세요')
        closeFunc()
      },
      onSuccess: () => {
        closeFunc()
      }
    }
  })

  return (
    <Sidepeek
      customKey={'moreInfoLoanInquirySidepeek'}
      isOpen={isOpen}
      setIsOpenAction={setIsOpen}
      gap={24}
    >
      <SidepeekHeaderSection
        header={'대출 문의 상세'}
        closeFunc={closeFunc}
      >
        {formatLoanboardResponseToTableLabeledRow(target).map((v, i) => (
          <Table key={i}>
            {v.map((v, i) => (
              <TableLabeledRow
                key={i}
                {...v}
              />
            ))}
          </Table>
        ))}
        <CtaButton
          width={'fill'}
          onClick={() => {mutate({id: target.id})}}
          color={'red'}
        >
          {status === 'idle' && (
            <Typo.SubBody color={'onPrimary'} emphasize>
              삭제하기
            </Typo.SubBody>
          )}
          {status === 'pending' && (
            <Player
              src={loadingSpinner}
              autoplay
              loop
              style={{width: 92, height: 92}}
            />
          )}
          {status === 'success' && (
            <Typo.SubBody color={'onPrimary'} emphasize>
              완료됐습니다!
            </Typo.SubBody>
          )}
        </CtaButton>
      </SidepeekHeaderSection>
    </Sidepeek>
  )
}