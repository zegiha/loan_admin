'use client'

import {userEntities} from '@/entities'
import {userFeature} from '@/features'
import {formatDateDotYmd} from '@/shared/lib'
import {Typo} from '@/shared/ui/atoms'
import {SectionHeader, Table, TableHeader, TableRow} from '@/shared/ui/molecules'
import TableSection from '@/shared/ui/molecules/layouts/TableSection'
import {useEffect, useState} from 'react'

export default function Broker() {
  return (
    <SectionHeader
      headerContents={'대부 중개 업자'}
      contentsGap={24}
    >
      <RegisterReq/>
    </SectionHeader>
  )
}

function RegisterReq() {
  const [showRow, setShowRow] = useState(10)
  const [data, setData] = useState<Array<userEntities['IRegisterReq']> | null>(null)

  useEffect(() => {
    setData(userFeature.getRegisterReq)
  }, [])

  return (
    <TableSection
      tableTitle={'회원 가입 요청'}
      reloadFunc={() => {}}
      showRow={showRow}
      setShowRowAction={v => setShowRow(v)}
    >
      {data !== null ? (
        <Table maxShowingRow={showRow}>
          <RegisterReqTableHeader/>
          {data.map((v, i) => (
            <RegisterReqTableRow
              key={i}
              {...v}
            />
          ))}
        </Table>
      ) : (
        <Typo.Contents>로딩중...</Typo.Contents>
      )}
    </TableSection>
  )
}

function RegisterReqTableHeader() {
  return <TableHeader>
    <Typo.Contents width={'fill'}>
      아이디
    </Typo.Contents>
    <Typo.Contents width={'fill'}>
      업체명
    </Typo.Contents>
    <Typo.Contents width={'fill'}>
      요청일
    </Typo.Contents>
    <Typo.Contents width={'fill'}>
      요청 정보
    </Typo.Contents>
  </TableHeader>
}

function RegisterReqTableRow({
  id,
  companyName,
  reqDate,
  moreInfoFunc
}: userEntities['IRegisterReq']) {
  return <TableRow>
    <Typo.Contents width={'fill'}>
      {id}
    </Typo.Contents>
    <Typo.Contents width={'fill'}>
      {companyName}
    </Typo.Contents>
    <Typo.Contents width={'fill'}>
      {formatDateDotYmd(reqDate)}
    </Typo.Contents>
    <Typo.Contents
      width={'fill'}
      color={'dim'}
      onClick={() => {moreInfoFunc()}}
      underline
    >
      더보기
    </Typo.Contents>
  </TableRow>
}