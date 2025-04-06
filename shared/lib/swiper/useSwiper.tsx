'use client'

import {Swiper as SwiperType} from 'swiper'
import {useRef, useState} from "react";

export default function useSwiper() {
  const swiperRef = useRef<SwiperType | null>(null)
  const [updateFunc, setUpdateFunc] = useState<Array<() => void>>([])
  const [slideChangeFunc, setSlideChangeFunc] = useState<Array<() => void>>([])

  const initSwiper = (swiper: SwiperType) => {
    swiperRef.current = swiper
  }
  const onUpdate = (swiper: SwiperType) => {
    swiperRef.current = swiper
    updateFunc.forEach(func => func())
  }
  const onSlideChange = () => {
    slideChangeFunc.forEach(func => func())
  }

  return {
    swiperRef,
    initSwiper,
    setUpdateFunc,
    onUpdate,
    setSlideChangeFunc,
    onSlideChange
  }
}
