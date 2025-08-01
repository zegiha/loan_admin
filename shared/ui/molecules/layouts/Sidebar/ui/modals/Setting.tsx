import {ITypo, TSetState} from '@/shared/const'
import {Col, Row, Typo} from '@/shared/ui/atoms'
import {CtaButton, Modal, ModalContainer, Table, TableHeader, TableRow, TextButton} from '@/shared/ui/molecules'
import useSetting from '@/shared/ui/molecules/layouts/Sidebar/model/useSetting'
import Authority from '@/shared/ui/molecules/layouts/Sidebar/ui/modals/Authority'
import Delete from '@/shared/ui/molecules/layouts/Sidebar/ui/modals/Delete'
import Id from '@/shared/ui/molecules/layouts/Sidebar/ui/modals/Id'
import PW from '@/shared/ui/molecules/layouts/Sidebar/ui/modals/PW'
import {useAuth} from "@/shared/model";

export interface ISettingTableRow {
  label?: string
  contents?: string
  action?: {
    contents: string
    fn: () => void
    color?: ITypo['color']
  }
}

export default function({
  isOpen,
  setIsOpen
}: {
  isOpen: boolean
  setIsOpen: TSetState<boolean>
}) {
  const {
    data, status, error, refetch,
    userInfo,
    isIdOpen, setIsIdOpen,
    isAuthorityOpen, setIsAuthorityOpen,
    isPWOpen, setIsPWOpen,
    isDeleteOpen, setIsDeleteOpen,
    logoutFunc,
  } = useSetting()

  const {
    setData
  } = useAuth()

  return <Modal customKey={'setting'} isOpen={isOpen} setIsOpenAction={setIsOpen}>
    <ModalContainer size={'large'}>
      <Typo.Body emphasize>설정</Typo.Body>
      {status === 'success' && (
        <Col width={'fill'} gap={16}>
          <Table>
            <SettingTableHeader/>
            {data.map((v, i) => (
              <SettingTableRow
                key={i}
                {...v}
              />
            ))}
          </Table>
          <Row width={'fill'} justifyContents={'end'} gap={8}>
            <CtaButton
              width={'hug'}
              onClick={logoutFunc}
              color={'gray'}
            >
              <Typo.Contents>로그아웃</Typo.Contents>
            </CtaButton>
            <CtaButton
              width={'hug'}
              onClick={() => setIsDeleteOpen(true)}
              color={'red'}
            >
              <Typo.Contents color={'onPrimary'}>계정 삭제</Typo.Contents>
            </CtaButton>
          </Row>
        </Col>
      )}
      {status === 'pending' && (<Typo.Contents>로딩중...</Typo.Contents>)}
      {status === 'error' && (<Typo.Contents>문제가 발생했습니다 나중에 다시 시도해주세요</Typo.Contents>)}
      {userInfo !== null && isIdOpen && (<Id
        isOpen={isIdOpen}
        setIsOpen={setIsIdOpen}
        currentId={userInfo.id}
        refetch={() => {
          refetch()
          setData()
        }}
      />)}
      {userInfo !== null && isAuthorityOpen && (<Authority
        isOpen={isAuthorityOpen}
        setIsOpen={setIsAuthorityOpen}
        currentAuthority={userInfo.authority}
      />)}
      {isPWOpen && userInfo !== null && (<PW
        isOpen={isPWOpen}
        setIsOpen={setIsPWOpen}
        currentId={userInfo.id}
        refetch={() => {
          refetch()
          setData()
        }}
      />)}
      {isDeleteOpen && userInfo !== null && (<Delete
        id={userInfo.id}
        isOpen={isDeleteOpen}
        setIsOpen={setIsDeleteOpen}
      />)}
    </ModalContainer>
  </Modal>
}

function SettingTableRow({
  label='',
  contents='',
  action,
}: ISettingTableRow) {
  return <TableRow>
    <Typo.Contents width={'fill'}>{label}</Typo.Contents>
    <Typo.Contents width={'fill'}>{contents}</Typo.Contents>
    <Row style={{flex: '1 0 0 '}}>
      {action && (
        <TextButton color={action.color} onClick={action.fn}>
          {action.contents}
        </TextButton>
      )}
    </Row>
  </TableRow>
}

function SettingTableHeader() {
  return <TableHeader>
    <Typo.Contents width={'fill'}>종류</Typo.Contents>
    <Typo.Contents width={'fill'}>내용</Typo.Contents>
    <Typo.Contents width={'fill'}>변경</Typo.Contents>
  </TableHeader>
}
