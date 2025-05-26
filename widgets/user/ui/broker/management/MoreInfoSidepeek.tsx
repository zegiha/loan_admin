import {
  userControllerRegAvailableCompanySet,
  userControllerSetJumpCount
} from '@/entities/api/user/user'
import {BrokerEntity} from '@/prevEntities'
import {TSetState} from '@/shared/const'
import {Col, Row, Typo} from '@/shared/ui/atoms'
import {
  CtaButton, IconButton,
  Sidepeek,
  SidepeekHeaderSection,
  Table,
  TableLabeledRow,
  TableRow,
  TextInput
} from '@/shared/ui/molecules'
import {Certificate} from '@/shared/ui/organisms'
import fromBrokerEntityToIBrokerInfo from '@/widgets/user/lib/broker/management/fromBrokerEntityToIBrokerInfo'
import {useState} from 'react'

export default function({
  isOpen,
  setIsOpen,
  targetUser
}: {
  isOpen: boolean
  setIsOpen: TSetState<boolean>
  targetUser: BrokerEntity
}) {
  const applyJump = async (value: number) => {
    try {
      await userControllerSetJumpCount(targetUser.id, value)
      targetUser.remainJump = value
      alert('적용됐습니다')
    } catch(e) {
      alert('나중에 다시 시도해주세요')
      setIsOpen(false)
    }
  }

  const applyAvailableCompany = async (value: number) => {
    try {
      await userControllerRegAvailableCompanySet(targetUser.id, value)
      targetUser.remainAvailableCompany = value
      alert('적용됐습니다')
    } catch(e) {
      alert('나중에 다시 시도해주세요')
      setIsOpen(false)
    }
  }

  return (
    <Sidepeek
      customKey={'moreInfoSidepeek'}
      isOpen={isOpen}
      setIsOpenAction={setIsOpen}
      gap={24}
    >
      <SidepeekHeaderSection
        header={'사용자 상세정보'}
        closeFunc={() => setIsOpen(false)}
      >
        {fromBrokerEntityToIBrokerInfo(targetUser).map((v1, i) => (
            <Table key={i}>
              {v1.content.map((v2, i) => (
                v1.title !== '소모성 광고' ? (
                  <TableLabeledRow
                    key={i}
                    label={v2.label}
                    contents={v2.contents.includes('http') ?
                      <Certificate src={v2.contents} alt={v2.label}/> :
                      v2.contents
                    }
                  />
                ):(
                  v2.contents !== '불러오기에 실패했어요' ? (
                    <ConsumableAdsTableLabeledRow
                      key={i}
                      label={v2.label}
                      remained={Number(v2.contents)}
                      applyFunc={i === 0 ? applyJump : applyAvailableCompany}
                    />
                  ):(
                    <TableLabeledRow
                      key={i}
                      {...v2}
                    />
                  )
                )
              ))}
            </Table>
          ))}
      </SidepeekHeaderSection>
    </Sidepeek>
  )
}

function ConsumableAdsTableLabeledRow({
  label,
  remained,
  applyFunc,
}:{
  label: string
  remained: number
  applyFunc: (value: number) => Promise<void>
}) {
  const [value, setValue] = useState<number>(remained)

  return <TableRow>
    <Typo.Contents style={{flex: '1 0 0'}}>{label}</Typo.Contents>
    <Row style={{flex: '3 0 0'}} alignItems={'center'} gap={8}>
      <TextInput
        // placeholder={'사용자가 가지고 있는 광고가 없습니다'}
        value={value >= 0 ? value.toLocaleString('ko-KR') : ''}
        onChangeAction={v => setValue(p => {
          const newValue = Number(v.replaceAll(',',''))
          if(Number.isNaN(newValue)) return p
          return newValue
        })}
      />
      <Col gap={4}>
        <IconButton
          iconKey={'arrow'}
          size={'xsmall'}
          onClick={() => {setValue(p => p + 1)}}
          deg={90}
        />
        <IconButton
          iconKey={'arrow'}
          size={'xsmall'}
          onClick={() => {setValue(p => Math.max(0, p - 1))}}
          deg={-90}
        />
      </Col>
      <CtaButton
        color={'gray'}
        width={'hug'}
        height={'small'}
        onClick={() => applyFunc(value)}
        disabled={value < 0 || value === remained}
      >
        <Typo.Contents>적용하기</Typo.Contents>
      </CtaButton>
    </Row>
  </TableRow>
}
