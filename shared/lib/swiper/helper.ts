import {SwiperType} from "@/shared/const/swiper/type";

export const toNextSlide = (swiperRef: React.RefObject<SwiperType | null>, ) => {
  if (swiperRef.current) {
    if (swiperRef.current.allowSlideNext) {
      swiperRef.current.slideNext(240)
    }
  }
}

export const toPrevSlide = (swiperRef: React.RefObject<SwiperType | null>, ) => {
  if (swiperRef.current) {
    if (swiperRef.current.allowSlidePrev) {
      swiperRef.current.slidePrev(240)
    }
  }
}

export const toFirstSlide = (swiperRef: React.RefObject<SwiperType | null>, ) => {
  if(swiperRef.current)
    swiperRef.current.slideTo(0, 240)
}

export const toLastSlide = (swiperRef: React.RefObject<SwiperType | null>, ) => {
  if(swiperRef.current)
    swiperRef.current.slideTo(swiperRef.current.slides.length - 1, 240)
}

export const toTargetSlide = (swiperRef: React.RefObject<SwiperType | null>, target: number) => {
  if(swiperRef.current) {
    swiperRef.current.slideTo(target - 1, 240)
  }
}
