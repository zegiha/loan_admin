'use client'

import {transition} from '@/shared/const'
import {Col, Row, Typo} from '@/shared/ui/atoms'
import {IconButton, Modal} from '@/shared/ui/molecules'
import {useState} from 'react'
import Image from 'next/image'
import style from './style.module.css'

export default function AdImg({
  src,
}: {
  src: string
}) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Col gap={2}>
      <Image
        src={src}
        alt={'광고 이미지'}
        width={100}
        height={60}
        className={style.preview}
        onClick={() => setIsOpen(true)}
      />
      <Typo.Caption color={'dim'}>이미지 눌러서 크게 보기</Typo.Caption>
      {isOpen && (
        <Modal
          customKey={`adImg`}
          isOpen={isOpen}
          setIsOpenAction={setIsOpen}
          padding={8}
        >
          <Row
            className={style.modalContainer}
            onClick={e => e.stopPropagation()}
            motion={{
              initial: {opacity: 0},
              animate: {opacity: 1},
              transition: transition.fast
            }}
          >
            <div className={style.modalWrapper}>
              <Row
                className={style.modalControlBox}
                width={'fill'}
                justifyContents={'end'}
              >
                <IconButton
                  iconKey={'close'}
                  size={'medium'}
                  background={'transparent'}
                  onClick={() => setIsOpen(false)}
                />
              </Row>
              <Image
                src={src}
                alt={'광고 이미지'}
                fill
                className={style.adImg}
              />
            </div>
          </Row>
        </Modal>
      )}
    </Col>
  )
}