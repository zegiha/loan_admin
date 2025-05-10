import {TSetState} from '@/shared/const'
import {Col, Typo} from '@/shared/ui/atoms'
import {Sidepeek, SidepeekHeaderSection, Table, TableLabeledRow} from '@/shared/ui/molecules'
import {AdImg, SubmitSection} from '@/shared/ui/organisms'
import useAdEditDetail from '@/widgets/ad/model/adReq/adEdit/useAdEditDetail'

export default function AdEditDetail({
  isOpen,
  setIsOpen,
  target,
  setTarget,
}: {
  isOpen: boolean
  setIsOpen: TSetState<boolean>
  target: {id: string, companyName: string, editId: string}
  setTarget: TSetState<{id: string, companyName: string, editId: string} | null>
}) {
  const {
    status, data, error,
  } = useAdEditDetail(target)

  const closeFunc = () => {
    setIsOpen(false)
    setTarget(null)
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
      {status === 'success' && (
        <>
          <Col width={'fill'} gap={2}>
            <Typo.Caption>요청자 정보</Typo.Caption>
            <Table>
              <TableLabeledRow
                label={'요청자 아이디'}
                contents={data.id}
              />
              <TableLabeledRow
                label={'요청자 업체명'}
                contents={data.companyName}
              />
            </Table>
          </Col>
          <Col width={'fill'} gap={2}>
            <Typo.Caption>현재 광고 정보</Typo.Caption>
            <Table>
              {data.adCurrent.map((v, i) => (
                <TableLabeledRow
                  key={i}
                  label={v.label}
                  contents={v.label !== '광고 이미지' ? v.contents :
                    <AdImg src={v.contents}/>
                  }
                />
              ))}
            </Table>
          </Col>
          <Col width={'fill'} gap={2}>
            <Typo.Caption>수정된 광고 정보</Typo.Caption>
            <Table>
              {data.adEdited.map((v, i) => (
                <TableLabeledRow
                  key={i}
                  label={v.label}
                  contents={v.label !== '광고 이미지' ? v.contents :
                    <AdImg src={v.contents}/>
                  }
                />
              ))}
            </Table>
          </Col>
          <SubmitSection
            submitFunc={() => {
              // TODO API 연결, 광고 수정 승인
              closeFunc()
            }}
            submitContents={'승인'}
            cancelFunc={() => {
              // TODO API 연결, 광고 수정 거절
              closeFunc()
            }}
            cancelContents={'거절'}
          />
        </>
      )}
      {status === 'pending' && <Typo.Contents>로딩중...</Typo.Contents>}
      {status === 'error' && (<Typo.Contents>문제가 발생했습니다 나중에 다시 시도해주세요</Typo.Contents>)}
    </Sidepeek>
  )
}
