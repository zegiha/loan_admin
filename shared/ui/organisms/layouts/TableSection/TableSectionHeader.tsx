'use client'

import {Row, Typo} from "@/shared/ui/atoms";
import {Dropdown, IconButton} from "@/shared/ui/molecules";
import {useEffect, useState} from "react";
import {ITableSectionHeader, tableDropdownOptions} from "@/shared/const";

export default function TableSectionHeader({
  tableTitle,
  reloadFunc,
  addFunc,
  showRow,
  setShowRowAction,
}: ITableSectionHeader) {
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
    <Row width={'fill'} justifyContents={'space-between'} alignItems={'center'}>
      <Row width={'fill'} gap={8} alignItems={'center'}>
        <Typo.SubBody emphasize>
          {tableTitle}
        </Typo.SubBody>
        <Dropdown.Select
          width={70}
          hoverOpen
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
  )
}
