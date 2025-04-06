'use client'

import {Col, Row} from "@/shared/ui/atoms";
import {Swiper as NormalSwiper, SwiperSlide} from "swiper/react";
import useSwiper from "@/shared/lib/swiper/useSwiper";
import SwiperPagination from "@/shared/ui/organisms/swipers/SwiperPagination";
import {ISwiper} from "@/shared/const/swiper/type";
import {Autoplay} from "swiper/modules";
import SwiperNavigation from "@/shared/ui/organisms/swipers/SwiperNavigation";

export default function Swiper({
  children,
  navigation,
  pagination,
  autoplay,
  loop,
  gap=0,
  direction,
  buttonColor
}: ISwiper) {
  const {
    swiperRef,
    initSwiper,
    setUpdateFunc,
    onUpdate,
    setSlideChangeFunc,
    onSlideChange
  } = useSwiper()
  return (
    <Col width={'fill'} gap={12}>
      <NormalSwiper
        modules={[Autoplay]}
        onSwiper={initSwiper}
        onUpdate={onUpdate}
        onSlideChange={onSlideChange}
        autoplay={autoplay}
        loop={loop}
        spaceBetween={gap}
        direction={direction}
      >
        {children.map((v, i) => (
          <SwiperSlide key={i}>
            {v}
          </SwiperSlide>
        ))}
      </NormalSwiper>

      <Row
        width={'fill'}
        justifyContents={'center'}
        alignItems={'center'}
        gap={8}
      >
        {navigation && (
          <SwiperNavigation
            swiperRef={swiperRef}
            buttonColor={buttonColor}
          >
            {pagination && <SwiperPagination
                swiperRef={swiperRef}
                setUpdateFunc={setUpdateFunc}
                setSlideChangeFunc={setSlideChangeFunc}
                buttonColor={buttonColor}
            />}
          </SwiperNavigation>
        )}

        {!navigation && pagination && <SwiperPagination
            swiperRef={swiperRef}
            setUpdateFunc={setUpdateFunc}
            setSlideChangeFunc={setSlideChangeFunc}
            buttonColor={buttonColor}
        />}
      </Row>
    </Col>
  )
}
