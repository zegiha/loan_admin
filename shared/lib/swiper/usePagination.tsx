'use client'

import {useEffect, useState} from "react"
import {ISwiperPagination} from "@/shared/const/swiper/type"

export default function usePagination(
  swiperRef: ISwiperPagination['swiperRef'],
  setUpdateFunc: ISwiperPagination['setUpdateFunc'],
  setSlideChangeFunc: ISwiperPagination['setSlideChangeFunc'],
) {
  const [pagination, setPagination] = useState<Array<number>>([])
  const [activePage, setActivePage] = useState<number>(swiperRef.current ? swiperRef.current.activeIndex + 1 : 1)

  const handlePagination = () => {
    if (swiperRef.current) {
      const slideLength = swiperRef.current.slides.length
      const newPagination: Array<number> = []
      if (slideLength <= 5) {
        for (let i = 1; i <= slideLength; i++)
          newPagination.push(i)
      } else {
        const start = activePage - 2
        const end = activePage + 2
        if (start <= 1) {
          for (let i = 0; i < 5; i++)
            newPagination.push(i + 1)
        } else {
          if (end >= slideLength) {
            for (let i = slideLength - 4; i <= slideLength; i++)
              newPagination.push(i)
          } else {
            for (let i = end - 4; i <= end; i++)
              newPagination.push(i)
          }
        }

      }
      setPagination(newPagination)
    }
  }

  const handleUpdate = () => {
    if(swiperRef.current) {
      setActivePage(swiperRef.current.activeIndex + 1)
    }
  }

  useEffect(() => {
    setUpdateFunc(prev => [
      ...prev,
      () => handlePagination(),
      () => setActivePage(swiperRef.current ? swiperRef.current.activeIndex + 1 : 1)
    ])
    setSlideChangeFunc(prev => [
      ...prev,
      () => handleUpdate()
    ])
  }, [])

  useEffect(() => {
    handlePagination()
  }, [activePage])

  return {
    pagination,
    activePage,
  }
}
