import {Col, Icon, Typo} from "@/shared/ui/atoms";
import style from './style.module.css'
import dynamic from "next/dynamic";
import loadingSpinner from '@/public/assets/loadingSpinner.json'

const Player = dynamic(
  () => import('@lottiefiles/react-lottie-player').then(m => m.Player),
  {ssr: false}
)

export default function ExceptionTable({
  type
}: {
  type: 'error' | 'empty' | 'pending'
}) {
  return (
    <Col
      className={style.exceptionTableContainer}
      width={'fill'}
      justifyContents={'center'}
      alignItems={'center'}
      gap={12}
    >
      {type === 'pending' ? (
        <Player
          className={style.progressRing}
          src={loadingSpinner}
          autoplay
          loop
        />
      ): (
        <NotPending type={type}/>
      )}
    </Col>
  )
}

function NotPending({
  type
}: {
  type: 'error' | 'empty'
}) {
  return (
    <>
      <Icon
        iconKey={type === 'error' ? 'warning' : 'noData'}
        fill={false}
        size={48}
        color={'dim'}
      />
      <Col justifyContents={'center'} alignItems={'center'} gap={4}>
        <Typo.Body color={'dim'} emphasize>
          {type === 'error' ?
            '문제가 발생했습니다!' :
            '아직 업로드된 데이터가 없어요'}
        </Typo.Body>
        <Typo.Contents color={'dim'} isPre={'wrap'} textAlign={'center'}>
          {type === 'error' ?
            '잠시 후 다시 시도해주세요':
            '데이터가 올라오면 표시해드릴게요\n(더 빨리 보고 싶으면 오른쪽 위 새로 고침 버튼을 눌러주세요)'
          }
        </Typo.Contents>
      </Col>
    </>
  )
}
