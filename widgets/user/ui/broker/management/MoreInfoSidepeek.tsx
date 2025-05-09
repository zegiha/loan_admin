import {BrokerEntity} from '@/prevEntities'
import {TSetState} from '@/shared/const'
import {Sidepeek, SidepeekHeaderSection, Table, TableLabeledRow} from '@/shared/ui/molecules'
import {Certificate} from '@/shared/ui/organisms'
import fromBrokerEntityToIBrokerInfo from '@/widgets/user/lib/broker/management/fromBrokerEntityToIBrokerInfo'

export default function({
  isOpen,
  setIsOpen,
  targetUser
}: {
  isOpen: boolean
  setIsOpen: TSetState<boolean>
  targetUser: BrokerEntity
}) {
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
                <TableLabeledRow
                  key={i}
                  label={v2.label}
                  contents={v2.contents.includes('http') ?
                    <Certificate src={v2.contents} alt={v2.label}/> :
                    v2.contents
                  }
                />
              ))}
            </Table>
          ))}
      </SidepeekHeaderSection>
    </Sidepeek>
  )
}
