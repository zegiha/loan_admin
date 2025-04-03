'use client'

import {transition} from '@/shared/const'
import {Row} from '@/shared/ui/atoms'
import {IconButton, Modal} from '@/shared/ui/molecules'
import {useState} from 'react'
import Image from 'next/image'
import style from './style.module.css'

export default function Certificate({
  src,
  alt
}: {
  src: string
  alt: string
}) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Image
        src={src}
        alt={alt}
        width={100}
        height={141.4}
        className={style.certificatePreview}
        onClick={() => setIsOpen(true)}
      />
      <Modal
        isOpen={isOpen}
        setIsOpenAction={setIsOpen}
        padding={8}
        keepLocked={true}
      >
        <Row
          className={style.certificateModalContainer}
          onClick={e => e.stopPropagation()}
          motion={{
            initial: {opacity: 0},
            animate: {opacity: 1},
            transition: transition.fast
          }}
        >
          <div className={style.certificateModalWrapper}>
            <Row
              className={style.certificateModalControlBox}
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
              alt={alt}
              fill
              className={style.certificate}
            />
          </div>
        </Row>
      </Modal>
    </>
  )
}