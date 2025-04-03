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

import formatDateDotYmd from '@/shared/lib/helper/formatDateDotYmd'
import {lockScroll, unlockScroll} from '@/shared/lib/helper/scrollControl'

export {
  processWidth,
  processSortingProp,
  getIconSize,
  IconHelper,
  TypoHelper,
  CtaButtonHelper,
  formatDateDotYmd,
  lockScroll,
  unlockScroll,
}