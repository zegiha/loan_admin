const getWidth = (width: 'fill' | 'hug' | number | undefined) => {
  if(width === undefined) return undefined
  switch(width) {
    case 'fill': return '100%'
    case 'hug': return 'auto'
    default: return width
  }
}
const getHeight = (height: 'normal' | 'large') => {
  switch(height) {
    case 'normal': return 48
    case 'large': return 56
  }
}
const getRadius = (height: 'normal' | 'large') => {
  switch(height) {
    case 'normal': return 4
    case 'large': return 6
  }
}

const CtaButtonHelper = {
  getWidth,
  getHeight,
  getRadius,
}

export default CtaButtonHelper