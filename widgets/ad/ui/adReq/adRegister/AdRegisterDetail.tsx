import {BrokerEntitySummary} from '../../../../../prevEntities'
import {TSetState} from '@/shared/const'
import {Col, Typo} from '@/shared/ui/atoms'
import {Sidepeek, SidepeekHeaderSection, Table, TableLabeledRow} from '@/shared/ui/molecules'
import {AdImg, SubmitSection} from '@/shared/ui/organisms'
import useAdRegisterDetail from '@/widgets/ad/model/adReq/adRegister/useAdRegisterDetail'
import {useEffect} from "react";
import {
  adsPrivateControllerApprove,
  adsPrivateControllerReject
} from "@/entities/api/advertisement-private/advertisement-private";

export default function({
  isOpen,
  setIsOpen,
  target,
  setTarget,
  refetch,
}: {
  isOpen: boolean
  setIsOpen: TSetState<boolean>
  target: string
  setTarget: TSetState<string | null>
  refetch: () => void
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
           submitFunc={async () => {
             try {
               await adsPrivateControllerApprove(target)
               refetch()
               setIsOpen(false)
             } catch(e) {
               console.error(e)
               alert('나중에 다시 시도해주세요')
             }
           }}
           cancelContents={'거절'}
           cancelFunc={async () => {
             try {
               await adsPrivateControllerReject(target)
               refetch()
               setIsOpen(false)
             } catch(e) {
               console.error(e)
               alert('나중에 다시 시도해주세요')
             }
           }}
         />
       </SidepeekHeaderSection>
     )}
     {status === 'pending' && <Typo.Contents>로딩중...</Typo.Contents>}
     {status === 'error' && <Typo.Contents>나중에 다시 시도해주세요</Typo.Contents>}
   </Sidepeek>
  )
}
