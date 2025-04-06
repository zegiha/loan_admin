import {ISwiperPagination} from "@/shared/const/swiper/type";
import {IconButton} from "@/shared/ui/molecules";
import usePagination from "@/shared/lib/swiper/usePagination";
import {toTargetSlide} from "@/shared/lib/swiper/helper";

export default function SwiperPagination({
  swiperRef,
  setUpdateFunc,
  setSlideChangeFunc,
  buttonColor
}: ISwiperPagination) {
  const {
    pagination,
    activePage,
  } = usePagination(swiperRef, setUpdateFunc, setSlideChangeFunc)
  return (
    <>
      {pagination.map((v, i) => (
        <IconButton
          key={i}
          iconKey={v}
          onClick={() => {toTargetSlide(swiperRef, v)}}
          size={'xsmall'}
          active={activePage === v}
          background={buttonColor}
        />
      ))}
    </>
  )
}
