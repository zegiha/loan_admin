import {BrokerEntity, getBrokerById} from '@/entities'
import {TSetState} from '@/shared/const'
import {Typo} from '@/shared/ui/atoms'
import {Sidepeek, SidepeekHeaderSection, Table, TableLabeledRow} from '@/shared/ui/molecules'
import {Certificate} from '@/shared/ui/organisms'
import {IBrokerInfo} from '@/widgets/user/const/broker/management/type'
import fromBrokerEntityToIBrokerInfo from '@/widgets/user/lib/broker/management/fromBrokerEntityToIBrokerInfo'
import {useQuery} from '@tanstack/react-query'

export default function({
  isOpen,
  setIsOpen,
  userId,
}: {
  isOpen: boolean
  setIsOpen: TSetState<boolean>
  userId: string
}) {
  const {status, data, error} = useQuery<BrokerEntity, Error, Array<IBrokerInfo>>({
    queryKey: [`broker${userId}`],
    queryFn: () => getBrokerById(userId),
    select: data => fromBrokerEntityToIBrokerInfo(data),
  })
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
        {status === 'pending' && <Typo.Contents>로딩중...</Typo.Contents>}
        {status === 'success' && (
          data?.map((v1, i) => (
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
          ))
        )}
        {status === 'pending' && <Typo.Contents>로딩중...</Typo.Contents>}
        {status === 'error' && <Typo.Contents>{error?.message}</Typo.Contents>}
      </SidepeekHeaderSection>
    </Sidepeek>
  )
}