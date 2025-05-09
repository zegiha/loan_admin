import {useAuth} from '@/shared/model'
import {Icon, Row, Typo} from '@/shared/ui/atoms'
import {CtaButton} from '@/shared/ui/molecules'
import useSidebarControl from '@/shared/ui/molecules/layouts/Sidebar/store/useSidebarControl'
import CreateAdminModal from '@/shared/ui/molecules/layouts/Sidebar/ui/modals/CreateAdminModal'
import {useEffect, useState} from 'react'
import style from './style.module.css'

export default function CreateAdmin() {
  const {isOpen} = useSidebarControl()
  const {
    data,
    setData
  } = useAuth()

  useEffect(() => {
    if(data === null)
      setData()
  }, [])

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  return isOpen && data?.authority === 'SUPER' ? (
    <>
      <Row
        className={style.createAdminContainer}
        width={'fill'}
      >
        <CtaButton
          flex={1}
          onClick={() => setIsModalOpen(true)}
        >
          <Typo.Contents color={'onPrimary'} emphasize>
            관리자 생성하기
          </Typo.Contents>
        </CtaButton>
      </Row>
      <CreateAdminModal
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
      />
    </>
  ) : <></>
}