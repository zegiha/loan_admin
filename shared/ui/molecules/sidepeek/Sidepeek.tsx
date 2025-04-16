'use client'

import {transition, TSetState} from '@/shared/const'
import handleElevateComponentESC from '@/shared/lib/helper/handleElevateComponentESC'
import useElevate from '@/shared/model/useElevate'
import {Col} from '@/shared/ui/atoms'
import {ReactNode, useEffect} from 'react'
import {createPortal} from 'react-dom'
import style from './style.module.css'

export default function Sidepeek(props: {
  customKey: string
  isOpen: boolean
  setIsOpenAction: TSetState<boolean>
  gap?: number
  children: React.ReactNode
}) {
  return props.isOpen ? <SidepeekWrapper
    {...props}
  /> : <></>
}

function SidepeekWrapper({
  customKey,
  setIsOpenAction: setIsOpen,
  gap=24,
  children,
}: {
  customKey: string
  setIsOpenAction: TSetState<boolean>
  gap?: number
  children: React.ReactNode
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
      className={style.sidepeekWrapper}
      onClick={() => {setIsOpen(false)}}
    >
      <SidepeekContainer
        gap={gap}
        children={children}
      />
    </div>,
    document.getElementById('sidepeekRoot') as HTMLElement,
  )
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
