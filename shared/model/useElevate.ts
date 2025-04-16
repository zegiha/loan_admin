'use client'

import {lockScroll, unlockScroll} from '@/shared/lib'
import {create} from 'zustand/index'

interface IUseElevate {
  elevate: Set<string>
  prevScroll: null | number
  add: (key: string) => void
  remove: (key: string) => void
}

const useElevate = create<IUseElevate>(set => ({
  elevate: new Set,
  prevScroll: null,
  add: (key) => set(prev => {
    const newData = {...prev}

    if(newData.elevate.size === 0)
      newData.prevScroll = lockScroll()

    if(newData.elevate.has(key)) {
      throw new Error(`same elevate key : ${key}`)
    }
    newData.elevate.add(key)

    return {...newData}
  }),
  remove: (key: string) => set(prev => {
    const newData = {...prev}

    if(!newData.elevate.has(key))
      throw new Error(`key : ${key} does not exist`)

    newData.elevate.delete(key)
    if(newData.elevate.size === 0) {
      if(newData.prevScroll !== null)unlockScroll(newData.prevScroll)
      newData.prevScroll = null
    }

    return {...newData}
  }),
}))

export default useElevate