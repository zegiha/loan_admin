import {
  adsPrivateControllerApproveUpdate,
  adsPrivateControllerRejectUpdate,
} from '@/entities/api/advertisement-private/advertisement-private'
import { TSetState } from '@/shared/const'
import { Col, Typo } from '@/shared/ui/atoms'
import {
  Sidepeek,
  SidepeekHeaderSection,
  Table,
  TableLabeledRow,
} from '@/shared/ui/molecules'
import { AdImg, SubmitSection } from '@/shared/ui/organisms'
import useAdEditDetail from '@/widgets/ad/model/adReq/adEdit/useAdEditDetail'

export default function AdEditDetail({
  isOpen,
  setIsOpen,
  target,
  refetch,
}: {
  isOpen: boolean
  setIsOpen: TSetState<boolean>
  target: string
  refetch: () => void
}) {
  const { data, status } = useAdEditDetail(target)

  const closeFunc = () => {
    setIsOpen(false)
  }

  return (
    <Sidepeek
      customKey={'adEdiDetail'}
      isOpen={isOpen}
      setIsOpenAction={setIsOpen}
      gap={24}
    >
      <SidepeekHeaderSection
        header={'수정 요청 상세보기'}
        closeFunc={closeFunc}
      />
      {data && (
        <>
          <Col width={'fill'} gap={2}>
            <Typo.Caption>요청자 정보</Typo.Caption>
            <Table>
              <TableLabeledRow
                label={'요청자 아이디'}
                contents={data.user_id}
              />
              <TableLabeledRow
                label={'요청자 업체명'}
                contents={data.company_id}
              />
            </Table>
          </Col>
          <Col width={'fill'} gap={2}>
            <Typo.Caption>현재 광고 정보</Typo.Caption>
            <Table>
              {data.adCurrent.length > 0 &&
                data.adCurrent.map((v: any, i: any) => (
                  <TableLabeledRow
                    key={i}
                    label={v.label}
                    contents={
                      v.label !== '광고 이미지' ? (
                        v.contents
                      ) : (
                        <AdImg src={v.contents} />
                      )
                    }
                  />
                ))}
            </Table>
          </Col>
          <Col width={'fill'} gap={2}>
            <Typo.Caption>수정된 광고 정보</Typo.Caption>
            <Table>
              {data.adEdited.length > 0 &&
                data.adEdited.map((v: any, i: any) => (
                  <TableLabeledRow
                    key={i}
                    label={v.label}
                    contents={
                      v.label !== '광고 이미지' ? (
                        v.contents
                      ) : (
                        <AdImg src={v.contents} />
                      )
                    }
                  />
                ))}
            </Table>
          </Col>
          <SubmitSection
            submitFunc={async () => {
              try {
                await adsPrivateControllerApproveUpdate(target)
                refetch()
                setIsOpen(false)
              } catch (e) {
                console.error(e)
                alert('나중에 다시 시도해주세요')
              }
            }}
            submitContents={'승인'}
            cancelFunc={async () => {
              try {
                await adsPrivateControllerRejectUpdate(target)
                refetch()
                setIsOpen(false)
              } catch (e) {
                console.error(e)
                alert('나중에 다시 시도해주세요')
              }
            }}
            cancelContents={'거절'}
          />
        </>
      )}
      {status === 'error' && (
        <Typo.Contents>
          문제가 발생했습니다 나중에 다시 시도해주세요
        </Typo.Contents>
      )}
    </Sidepeek>
  )
}
