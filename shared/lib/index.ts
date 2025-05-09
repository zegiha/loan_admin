import {processSortingProp, processWidth} from '@/shared/lib/Flex/helper'

import {getIconSize} from '@/shared/lib/buttons/IconButton/helper'

import {getColor as IconGetColor} from '@/shared/lib/Icon/helper'
const IconHelper = {
  getColor: IconGetColor,
}

import {
  getElementType,
  getFontSize,
  getWidthByStyle,
  getColor as TypoGetColor
} from '@/shared/lib/Typo/helper'
const TypoHelper = {
  getElementType,
  getFontSize,
  getWidthByStyle,
  getColor: TypoGetColor
}

import CtaButtonHelper from '@/shared/lib/buttons/CtaButton/helper'

import axiosWithToken from '@/shared/lib/axios/axiosWithToken'
import axios from '@/shared/lib/axios/customAxios'

import useTableSection from '@/shared/lib/swiper/TableSection/useTableSection'

import check_id_and_message from '@/shared/lib/inputValidation/check_id_and_message'
import check_password_and_message from '@/shared/lib/inputValidation/check_password_and_message'
import check_is_typed_when_string from '@/shared/lib/inputValidation/check_is_typed_when_string'

import formatDateDotYmd from '@/shared/lib/helper/formatDateDotYmd'
import {lockScroll, unlockScroll} from '@/shared/lib/helper/scrollControl'
import parseToTwoDimensionalArray from "@/shared/lib/helper/parseToTwoDimensionalArray";
import toCommaString from '@/shared/lib/helper/toCommaString'
import formatPriceToCommaWithWon from '@/shared/lib/helper/formatPriceToCommaWithWon'
import formatAdContentToLabelAndData from '@/shared/lib/helper/formatAdContentToLabelAndData'
import isTLocation from '@/shared/lib/helper/isTLocation'
import isTProduction from '@/shared/lib/helper/isTProduction'
import adNameToKorean from '@/shared/lib/helper/adNameToKorean'
import numberToStringWithComma from '@/shared/lib/helper/numberToStringWithComma'
import yyyyMmDdToDate from '@/shared/lib/helper/yyyyMmDdToDate'

import {globalRouter, setGlobalRouter} from '@/shared/lib/router/globalRouter'

export {
  processWidth,
  processSortingProp,

  getIconSize,

  IconHelper,

  TypoHelper,

  CtaButtonHelper,

  axiosWithToken,
  axios,

  check_id_and_message,
  check_password_and_message,
  check_is_typed_when_string,

  formatDateDotYmd,
  lockScroll,
  unlockScroll,
  parseToTwoDimensionalArray,
  toCommaString,
  formatPriceToCommaWithWon,
  formatAdContentToLabelAndData,
  isTLocation,
  isTProduction,
  adNameToKorean,
  numberToStringWithComma,
  useTableSection,
  yyyyMmDdToDate,

  globalRouter,
  setGlobalRouter,
}
