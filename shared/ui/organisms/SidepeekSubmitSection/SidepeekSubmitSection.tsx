import {Row, Typo} from '@/shared/ui/atoms'
import {CtaButton} from '@/shared/ui/molecules'

export default function SidepeekSubmitSection({
  cancelContents,
  submitContents,
  cancelFunc,
  submitFunc,
}: {
  cancelContents: string
  submitContents: string
  cancelFunc: () => void
  submitFunc: () => void
}){
  return (
    <Row width={'fill'} gap={8}>
      <CtaButton
        flex={1}
        height={'normal'}
        color={'gray'}
        onClick={() => cancelFunc()}
      >
        <Typo.Contents>
          {cancelContents}
        </Typo.Contents>
      </CtaButton>
      <CtaButton
        flex={2}
        height={'normal'}
        onClick={() => submitFunc()}
      >
        <Typo.Contents color={'onPrimary'} emphasize>
          {submitContents}
        </Typo.Contents>
      </CtaButton>
    </Row>
  )
}