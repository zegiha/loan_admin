'use client'

import {TSetState} from '@/shared/const'
import {lockScroll, unlockScroll} from '@/shared/lib'
import {ReactNode, useEffect} from 'react'
import {createPortal} from 'react-dom'
import style from './style.module.css'

export default function Modal({
  isOpen,
  setIsOpenAction: setIsOpen,
  padding,
  keepLocked,
  children
}: {
  isOpen: boolean,
  setIsOpenAction: TSetState<boolean>
  padding?: number
  keepLocked?: boolean
  children: ReactNode
}) {
  useEffect(() => {
    if(isOpen)  {
      const prevScroll = lockScroll()
      return () => {if(!keepLocked) unlockScroll(prevScroll)}
    }
  }, [isOpen])

  return isOpen ? createPortal(
    <div
      className={style.modal}
      style={{padding}}
      onClick={() => setIsOpen(false)}
    >
      {children}
    </div>,
    document.getElementById('modalRoot') as HTMLElement
  ) : <></>
}