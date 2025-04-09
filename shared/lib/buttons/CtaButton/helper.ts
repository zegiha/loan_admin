type THeight = 'normal' | 'large' | 'small'

const getWidth = (width: 'fill' | 'hug' | number | undefined) => {
  if(width === undefined) return undefined
  switch(width) {
    case 'fill': return '100%'
    case 'hug': return 'auto'
    default: return width
  }
}
const getHeight = (height: THeight) => {
  switch(height) {
    case 'small': return 40
    case 'normal': return 48
    case 'large': return 56
  }
}
const getPadding = (height: THeight) => {
  switch(height) {
    case 'small': return '10px 12px'
    case 'normal': return '12px 16px'
    case 'large': return '14px 22px'
  }
}

const CtaButtonHelper = {
  getWidth,
  getHeight,
  getPadding,
}

export default CtaButtonHelper