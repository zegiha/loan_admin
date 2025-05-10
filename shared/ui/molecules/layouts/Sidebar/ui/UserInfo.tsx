import {useAuth} from '@/shared/model'
import {Col, Icon, Row, Typo} from '@/shared/ui/atoms'
import useSidebarControl from '@/shared/ui/molecules/layouts/Sidebar/store/useSidebarControl'
import {AnimatePresence} from 'framer-motion'
import dynamic from 'next/dynamic'
import {useEffect} from 'react'
import loadingSpinner from '@/public/assets/loadingSpinner.json'

const Player = dynamic(
  () => import('@lottiefiles/react-lottie-player').then(m => m.Player),
  {ssr: false}
)

export default function() {
  const {isOpen} = useSidebarControl()
  const {data: authData, status, setData: setAuthData} = useAuth()

  useEffect(() => {
    if(authData === null) {
      setAuthData()
    }
  }, [])

  return (
    <AnimatePresence>
      {isOpen && (
        status === 'success' ? (
          <Col
            width={'fill'}
            motion={{
              initial: {opacity: 0, height: 0},
              animate: {opacity: 1, height: 'min-content'},
              exit: {opacity: 0, height: 0},
              transition: {
                duration: 0.12,
                ease: [.35,.44,.68,1],
              }
            }}
          >
            <Col width={'fill'} gap={4}>
              <Typo.Contents emphasize isPre={'nowrap'}>
                {authData !== null && authData.id}
              </Typo.Contents>
              {authData !== null && (
                <Row gap={2} alignItems={'center'}>
                  {authData.authority === 'SUPER' && (
                    <Icon
                      iconKey={'star'}
                      size={16}
                      color={'primary'}
                    />
                  )}
                  <Typo.Contents
                    color={authData.authority === 'SUPER' ? 'primary' : 'dim'}
                    isPre={'nowrap'}
                  >
                    {authData.authority === 'SUPER' ?
                      '최고 관리자' : '일반 관리자'}
                  </Typo.Contents>
                </Row>
              )}
            </Col>
          </Col>
        ): status === 'pending' ? (
          <Row width={'fill'} justifyContents={'center'}>
            <Player
              style={{width: 48, height: 48}}
              src={loadingSpinner}
              autoplay
              loop
            />
          </Row>
        ): (
          <Col width={'fill'} alignItems={'center'}>
            <Typo.Caption color={'dim'}>
              문제가 발생했습니다
            </Typo.Caption>
            <Typo.Caption color={'dim'}>
              새로고침 해주세요
            </Typo.Caption>
          </Col>
        )
      )}
    </AnimatePresence>
  )
}