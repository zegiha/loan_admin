'use client'

import {Col, Row} from '@/shared/ui/atoms'
import {Swiper} from "@/shared/ui/organisms";
import TableSectionHeader from "@/shared/ui/organisms/layouts/TableSection/TableSectionHeader";
import {ITableSection} from "@/shared/const";

export default function TableSection({
  tableTitle,
  reloadFunc,
  addFunc,
  showRow,
  setShowRowAction,
  children,
}: ITableSection) {

  return (
    <Col width={'fill'} gap={16}>
      <TableSectionHeader
        {...{tableTitle, reloadFunc, addFunc, showRow, setShowRowAction}}
      />
      {Array.isArray(children) ? (
        <Row width={'fill'}>
          <Swiper
            pagination
            navigation
            gap={24}
          >
            {children}
          </Swiper>
        </Row>
      ) : children}
    </Col>
  )
}
