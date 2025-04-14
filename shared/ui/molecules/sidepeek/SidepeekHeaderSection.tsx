import {Row, Typo} from '@/shared/ui/atoms'
import {IconButton} from '@/shared/ui/molecules'
import {ReactNode} from 'react'

export default function({
  header,
  closeFunc,
  children,
}: {
  header: string
  closeFunc: () => void
  children?: ReactNode
}) {
  return (
    <>
      <Row width={'fill'} justifyContents={'space-between'} alignItems={'center'}>
        <Typo.Body emphasize color={'variable'}>
          {header}
        </Typo.Body>
        <IconButton
          iconKey={'close'}
          size={'small'}
          background={'transparent'}
          onClick={closeFunc}
        />
      </Row>
      {children}
    </>
  )
}