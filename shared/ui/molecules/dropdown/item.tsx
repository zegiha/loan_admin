import {Icon, Row, Typo} from '@/shared/ui/atoms'
import classNames from 'classnames'
import {AnimatePresence} from 'framer-motion'
import style from './style.module.css'

export default function item({
  isSelected,
  setSelected,
  contents,
}: {
  isSelected: boolean
  setSelected: () => void
  contents: string
}) {
  return (
    <Row
      className={classNames([style.itemContainer, isSelected && style.itemContainerActive])}
      width={'fill'}
      justifyContents={'space-between'}
      onClick={e => {
        e.stopPropagation()
        setSelected()
      }}
    >
      <Typo.Contents>
        {contents}
      </Typo.Contents>
      <AnimatePresence>
        {isSelected && (
          <Icon
            iconKey={'check'}
            color={'primary'}
            motion={{
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              exit: { opacity: 0 },
            }}
          />
        )}
      </AnimatePresence>
    </Row>
  )
}