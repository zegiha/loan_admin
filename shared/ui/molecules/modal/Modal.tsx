'use client'

import {TSetState} from '@/shared/const'
import handleElevateComponentESC from '@/shared/lib/helper/handleElevateComponentESC'
import useElevate from '@/shared/model/useElevate'
import {ReactNode, useEffect} from 'react'
import {createPortal} from 'react-dom'
import style from './style.module.css'

export default function Modal(props : {
  customKey: string
  isOpen: boolean,
  setIsOpenAction: TSetState<boolean>
  padding?: number
  children: ReactNode
}) {
  return props.isOpen ? <ModalWrapper
    {...props}
  /> : <></>
}

function ModalWrapper({
  customKey,
  setIsOpenAction: setIsOpen,
  padding,
  children
}: {
  customKey: string
  setIsOpenAction: TSetState<boolean>
  padding?: number
  children: ReactNode
}) {
  const {add, remove} = useElevate()

  useEffect(() => {
    add(customKey)
    document.addEventListener('keydown', e => handleElevateComponentESC(e, setIsOpen))

    return () => {
      remove(customKey)
      document.removeEventListener('keydown', e => handleElevateComponentESC(e, setIsOpen))
    }
  }, [])

  return createPortal(
    <div
      className={style.modal}
      style={{padding}}
      onClick={() => setIsOpen(false)}
    >
      {children}
    </div>,
    document.getElementById('modalRoot') as HTMLElement
  )
}