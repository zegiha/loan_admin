'use client'

import {Col, Row, Typo} from '@/shared/ui/atoms'
import {Dropdown, IconButton} from '@/shared/ui/molecules'
import {ReactNode, useEffect, useState} from 'react'

const tableDropdownOptions = [
  5,
  10,
  15,
  20,
  25,
  50
]

export default function TableSection({
  tableTitle,
  reloadFunc,
  addFunc,
  showRow,
  setShowRowAction,
  children,
}: {
  tableTitle: string
  reloadFunc?: () => void
  addFunc?: () => void
  showRow: number
  setShowRowAction: (newShowRowNumber: number) => void
  children: ReactNode
}) {
  const [selectedIdx, setSelectedIdx] = useState(1)

  useEffect(() => {
    tableDropdownOptions.forEach((v, i) => {
      if(v === showRow) setSelectedIdx(i)
    })
  }, [])
  useEffect(() => {
    if(showRow !== tableDropdownOptions[selectedIdx]) {
      setShowRowAction(tableDropdownOptions[selectedIdx])
    }
  }, [selectedIdx])

  return (
    <Col width={'fill'} gap={16}>
      <Row width={'fill'} justifyContents={'space-between'} alignItems={'center'}>
        <Row gap={8} alignItems={'center'}>
          <Typo.SubBody emphasize>
            {tableTitle}
          </Typo.SubBody>
          <Dropdown.Select
            width={70}
            selectedContents={`${tableDropdownOptions[selectedIdx]}개`}
          >
            {tableDropdownOptions.map((v, i) => (
              <Dropdown.Option
                key={i}
                isSelected={selectedIdx === i}
                setSelected={() => {setSelectedIdx(i)}}
                contents={`${v}개`}
              />
            ))}
          </Dropdown.Select>
        </Row>
        <Row gap={8} alignItems={'center'}>
          {addFunc && (
            <IconButton
              onClick={() => addFunc()}
              iconKey={'add'}
              size={'small'}
            />
          )}
          {reloadFunc && (
            <IconButton
              onClick={() => reloadFunc()}
              iconKey={'reload'}
              fill={false}
              size={'small'}
            />
          )}
        </Row>
      </Row>
      {children}
    </Col>
  )
}