'use client'

import {transition, TSetState} from '@/shared/const'
import {lockScroll, unlockScroll} from '@/shared/lib'
import {Col} from '@/shared/ui/atoms'
import {ReactNode, useEffect} from 'react'
import {createPortal} from 'react-dom'
import style from './style.module.css'

export default function Sidepeek({
  isOpen,
  setIsOpenAction: setIsOpen,
  gap,
  keepLocked,
  children,
}: {
  isOpen: boolean
  setIsOpenAction: TSetState<boolean>
  gap?: number
  keepLocked?: boolean
  children: React.ReactNode
}) {
  useEffect(() => {
    if(isOpen) {
      const prevScroll = lockScroll()
      return () => {if(!keepLocked) unlockScroll(prevScroll)}
    }
  }, [isOpen])

  return isOpen ? createPortal(
    <div
      className={style.sidepeekWrapper}
      onClick={() => {setIsOpen(false)}}
    >
      <SidepeekContainer
        gap={gap}
        children={children}
      />
    </div>,
    document.getElementById('sidepeekRoot') as HTMLElement,
  ) : <></>
}

function SidepeekContainer({
  gap,
  children,
}: {
  gap?: number
  children: ReactNode
}) {
  return (
    <Col
      className={style.sidepeekContainer}
      gap={gap}
      onClick={e => {e.stopPropagation()}}
      motion={{
        initial: {x: '40%', opacity: 0},
        animate: {x: 0, opacity: 1},
        transition: transition.fast
      }}
    >
      {children}
    </Col>
  )
}
