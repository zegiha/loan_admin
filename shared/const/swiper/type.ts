import {Swiper as SwiperType} from 'swiper'
import {ReactNode} from "react";
import {AutoplayOptions} from "swiper/types";

export interface ISwiper {
  children: Array<ReactNode>
  navigation?: boolean
  pagination?: boolean
  buttonColor?: 'transparent' | 'gray'
  autoplay?: AutoplayOptions
  loop?: boolean
  gap?: number
  direction?: "horizontal" | "vertical"
}

export interface ISwiperDefault {
  swiperRef: React.RefObject<SwiperType | null>
  buttonColor?: 'gray' | 'transparent'
}

export interface ISwiperPagination extends ISwiperDefault {
  setUpdateFunc: React.Dispatch<React.SetStateAction<Array<() => void>>>
  setSlideChangeFunc: React.Dispatch<React.SetStateAction<Array<() => void>>>
}

export interface ISwiperNavigation extends ISwiperDefault {
  children: ReactNode
}

export {
  SwiperType
}
