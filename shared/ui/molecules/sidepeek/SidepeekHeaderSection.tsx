import {TIconListKey, TIconSize} from '@/shared/const'
import {Col, Row, Typo} from '@/shared/ui/atoms'
import {IconButton} from '@/shared/ui/molecules'
import {ReactNode} from 'react'

export default function({
  header,
  closeFunc,
  buttons,
  children,
}: {
  header: string
  closeFunc: () => void
  buttons?: Array<{iconKey: TIconListKey, size: TIconSize, onClick: () => void}>
  children?: ReactNode
}) {
  return (
    <>
      <Row width={'fill'} justifyContents={'space-between'} alignItems={'center'}>
        <Typo.Body emphasize color={'variable'}>
          {header}
        </Typo.Body>
        <Col>
          <IconButton
            iconKey={'close'}
            size={'small'}
            background={'transparent'}
            onClick={closeFunc}
          />
          {buttons && buttons.map((v, i) => (
            <IconButton
              key={i}
              {...v}
              background={'transparent'}
            />
          ))}
        </Col>
      </Row>
      {children}
    </>
  )
}