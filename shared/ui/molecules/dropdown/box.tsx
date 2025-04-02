'use client'

import {Col, Icon, Row, Typo} from '@/shared/ui/atoms'
import {AnimatePresence, Variants} from 'framer-motion'
import {ReactNode, useEffect, useRef, useState} from 'react'
import style from './style.module.css'

export default function Box({
  width,
  selectedContents,
  children,
}: {
  width: number
  selectedContents: string
  children: ReactNode
}) {
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef<HTMLDivElement | null>(null)
  const optionContainerVariants: Variants = {
    open: {
      y: '2px',
      opacity: 1,
    },
    close: {
      y: '0.5px',
      opacity: 0,
    }
  }

  useEffect(() => {
    if(ref.current !== null) {
      ref.current.addEventListener('mouseenter', () => setIsOpen(true))
      ref.current.addEventListener('mouseleave', () => setIsOpen(false))
    }

    return () => {
      if(ref.current !== null) {
        ref.current.removeEventListener('mouseenter', () => {})
        ref.current.removeEventListener('mouseleave', () => {})
      }
    }
  }, []);

  return (
    <Row
      ref={ref}
      className={style.wrapper}
    >
      <Row
        className={style.selectContainer}
        width={width}
        justifyContents={'space-between'}
        alignItems={'center'}
        onClick={() => {setIsOpen(prev => !prev)}}
      >
        <Typo.Contents>
          {selectedContents}
        </Typo.Contents>
        <Icon
          iconKey={'arrow'}
          size={16}
          deg={isOpen ? 90 : 270}
        />
        <AnimatePresence>
          {isOpen && (
            <Col
              className={style.optionContainer}
              width={width+48}
              motion={{
                initial: 'close',
                animate: isOpen ? 'open' : 'close',
                variants: optionContainerVariants,
                exit: 'close',
              }}
            >
              {children}
            </Col>
          )}
        </AnimatePresence>
      </Row>
    </Row>
  )
}
