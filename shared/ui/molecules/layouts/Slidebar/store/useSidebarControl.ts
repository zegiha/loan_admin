'use client'

import {create} from 'zustand/index'

const useSidebarControl = create<{
  isOpen: boolean
  toggleIsOpen: () => void
  activeNavIndex: number
  setActiveNavIndex: (newIndex: number) => void
}>((set) => ({
  isOpen: true,
  activeNavIndex: 1,
  toggleIsOpen: () => set((state) => ({...state, isOpen: !state.isOpen})),
  setActiveNavIndex: (newIndex) => set(prev => {
    if(prev.activeNavIndex === newIndex) return {...prev}
    else return {...prev, activeNavIndex: newIndex}
  })
}))

export default useSidebarControl