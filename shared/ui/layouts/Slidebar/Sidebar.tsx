'use client'

import {useEffect} from 'react'
import {create} from 'zustand'
import {motion, Variants} from 'framer-motion'
import style from './style.module.css'

const useSidebarControl = create<{isOpen: boolean, toggleIsOpen: () => void}>((set) => ({
  isOpen: true,
  toggleIsOpen: () => set((state) => ({...state, isOpen: !state.isOpen})),
}))

export default function Sidebar() {
  const {isOpen, toggleIsOpen} = useSidebarControl()
  useEffect(() => {
    console.log(isOpen)
  }, [isOpen])
  const variants: Variants = {
    open: {
      width: 260,
      gap: 12,
    },
    close: {
      width: 96,
      gap: 0,
    }
  }
  return (
    <motion.div
      className={style.container}
      variants={variants}
      animate={isOpen ? 'open' : 'close'}
      transition={{
        type: 'tween',
        duration: 0.24,
        ease: [.13,-0.01,.41,1],
      }}
      onClick={toggleIsOpen}
    >

    </motion.div>
  )
}