import {Col, Row, Typo} from '@/shared/ui/atoms'
import {IconButton, Sidepeek, SidepeekHeaderSection, Table, TableLabeledRow} from '@/shared/ui/molecules'
import {IAnnouncementDetailProps} from '@/widgets/announcement/const/type'
import useAnnouncementDetail from '@/widgets/announcement/model/useAnnouncementDetail'
import AnnouncementEdit from '@/widgets/announcement/ui/AnnouncementEdit'

export default function({
  isOpen,
  setIsOpen,
  targetId,
  setTargetId
}: IAnnouncementDetailProps) {
  const {
    isEditOpen, setIsEditOpen,
    status, data, error
  } = useAnnouncementDetail(targetId)

  const closeFunc = () => {
    setTargetId(null)
    setIsOpen(false)
  }

  return <Sidepeek
    customKey={'announcementDetail'}
    isOpen={isOpen}
    setIsOpenAction={setIsOpen}
  >
    {status === 'success' && (
      <>
        <SidepeekHeaderSection
          header={'공지 상세 정보'}
          closeFunc={closeFunc}
        />
        <Col width={'fill'} gap={4}>
          <Row width={'fill'} justifyContents={'end'} gap={8}>
            <IconButton
              iconKey={'edit'}
              size={'small'}
              fill={false}
              onClick={() => {setIsEditOpen(true)}}
            />
            <IconButton
              iconKey={'delete'}
              size={'small'}
              fill={false}
              onClick={() => {
                // TODO 공지 삭제 API
                alert('삭제됐습니다')
                closeFunc()
              }}
            />
          </Row>
          {status === 'success' && (
            <Table>
              {data.map((v1, i) => (
                <TableLabeledRow key={i} {...v1}/>
              ))}
            </Table>
          )}
        </Col>
        <AnnouncementEdit
          isOpen={isEditOpen}
          setIsOpen={setIsEditOpen}
          target={{
            announcementId: targetId,
            title: data.filter(v => v.label === '제목')[0].contents,
            contents: data.filter(v => v.label === '내용')[0].contents,
            type: data.filter(v => v.label === '분류')[0]
              .contents === '중요' ? 'VALUABLE' : 'NORMAL',
          }}
          submitCallback={() => {
            setIsOpen(false)
          }}
        />
      </>
    )}
    {status === 'pending' && (<Typo.Contents>로딩중...</Typo.Contents>)}
    {status === 'error' && (<Typo.Contents>{error?.message}</Typo.Contents>)}
  </Sidepeek>
}