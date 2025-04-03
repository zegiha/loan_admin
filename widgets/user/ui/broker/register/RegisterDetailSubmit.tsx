import {Row, Typo} from '@/shared/ui/atoms'
import {CtaButton} from '@/shared/ui/molecules'

export default function RegisterDetailSubmit({
  rejectFunc,
  approveFunc,
}: {
  rejectFunc: () => void
  approveFunc: () => void
}){
  return (
    <Row width={'fill'} gap={8}>
      <CtaButton
        flex={1}
        height={'normal'}
        color={'gray'}
        onClick={() => rejectFunc()}
      >
        <Typo.Contents>
          거절
        </Typo.Contents>
      </CtaButton>
      <CtaButton
        flex={2}
        height={'normal'}
        onClick={() => approveFunc()}
      >
        <Typo.Contents color={'onPrimary'} emphasize>
          승인
        </Typo.Contents>
      </CtaButton>
    </Row>
  )
}