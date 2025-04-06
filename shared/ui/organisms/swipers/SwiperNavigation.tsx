import {IconButton} from "@/shared/ui/molecules";
import {ISwiperNavigation} from "@/shared/const/swiper/type";
import {toFirstSlide, toLastSlide, toNextSlide, toPrevSlide} from "@/shared/lib/swiper/helper";

export default function SwiperNavigation({
  swiperRef,
  buttonColor,
  children
}: ISwiperNavigation) {
  return (
    <>
      <IconButton
        iconKey={'toFirst'}
        onClick={() => {toFirstSlide(swiperRef)}}
        size={'small'}
        background={buttonColor}
      />
      <IconButton
        iconKey={'arrow'}
        onClick={() => {toPrevSlide(swiperRef)}}
        size={'xsmall'}
        background={buttonColor}
      />
      {children && children}
      <IconButton
        iconKey={'arrow'}
        deg={180}
        onClick={() => {toNextSlide(swiperRef)}}
        size={'xsmall'}
        background={buttonColor}
      />
      <IconButton
        iconKey={'toLast'}
        onClick={() => {toLastSlide(swiperRef)}}
        size={'small'}
        background={buttonColor}
      />
    </>
  )
}
