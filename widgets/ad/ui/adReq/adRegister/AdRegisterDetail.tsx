import {BrokerEntitySummary} from '@/entities'
import {TSetState} from '@/shared/const'
import {Col, Typo} from '@/shared/ui/atoms'
import {Sidepeek, SidepeekHeaderSection, Table, TableLabeledRow} from '@/shared/ui/molecules'
import {AdImg, SubmitSection} from '@/shared/ui/organisms'
import useAdRegisterDetail from '@/widgets/ad/model/adReq/adRegister/useAdRegisterDetail'

export default function({
  isOpen,
  setIsOpen,
  target,
  setTarget,
}: {
  isOpen: boolean
  setIsOpen: TSetState<boolean>
  target: BrokerEntitySummary & {adReqId: string}
  setTarget: TSetState<BrokerEntitySummary & {adReqId: string} | null>
}) {
  const {
    data, status, error
  } = useAdRegisterDetail(target)
  const closeFunc = () => {
    setIsOpen(false)
    setTarget(null)
  }

  return (
   <Sidepeek
     customKey={'adRegisterDetail'}
     isOpen={isOpen}
     setIsOpenAction={closeFunc}
     gap={24}
   >
     {status === 'success' && (
       <SidepeekHeaderSection
         header={'광고 등록 요청 세부 정보'}
         closeFunc={closeFunc}
       >
         {data.map((v, i) => (
           <Col width={'fill'} gap={2} key={i}>
             <Typo.Caption>{v.subTitle}</Typo.Caption>
             <Table>
               {v.data.map((v, i) => (
                 <TableLabeledRow
                   key={i}
                   label={v.label}
                   contents={
                     v.label !== '광고 이미지' ?
                       v.contents :
                       <AdImg src={v.contents}/>
                   }
                 />
               ))}
             </Table>
           </Col>
         ))}
         <SubmitSection
           submitContents={'승인'}
           submitFunc={() => {
             // TODO 광고 등록 요청 승인 API
             setIsOpen(false)
           }}
           cancelContents={'거절'}
           cancelFunc={() => {
             // TODO 광고 등록 거절 API
             setIsOpen(false)
           }}
         />
       </SidepeekHeaderSection>
     )}
     {status === 'pending' && <Typo.Contents>로딩중...</Typo.Contents>}
     {status === 'error' && <Typo.Contents>{error?.message}</Typo.Contents>}
   </Sidepeek>
  )
}