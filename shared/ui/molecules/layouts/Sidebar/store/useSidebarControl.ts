'use client'

import {create} from 'zustand/index'

const useSidebarControl = create<{
  isOpen: boolean
  toggleIsOpen: () => void
}>((set) => ({
  isOpen: true,
  toggleIsOpen: () => set((state) => ({...state, isOpen: !state.isOpen})),
}))

export default useSidebarControl