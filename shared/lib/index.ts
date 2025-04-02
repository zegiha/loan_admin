import {processSortingProp, processWidth} from '@/shared/lib/Flex/helper'

import {getIconSize} from '@/shared/lib/buttons/IconButton/helper'

import {getColor as IconGetColor} from '@/shared/lib/Icon/helper'
const Icon = {
  getColor: IconGetColor,
}

import {
  getElementType,
  getFontSize,
  getWidthByStyle,
  getColor as TypoGetColor
} from '@/shared/lib/Typo/helper'
const Typo = {
  getElementType,
  getFontSize,
  getWidthByStyle,
  getColor: TypoGetColor
}

import formatDateDotYmd from '@/shared/lib/helper/formatDateDotYmd'

export {
  processWidth,
  processSortingProp,
  getIconSize,
  Icon,
  Typo,
  formatDateDotYmd,
}