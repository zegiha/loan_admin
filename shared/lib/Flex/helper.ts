import {justifyContents, width} from '@/shared/const'

export function processSortingProp(justifyContents: justifyContents | undefined): string {
  if(justifyContents === 'start' || justifyContents === 'end') {
    return `flex-${justifyContents}`;
  } else if(justifyContents !== undefined) {
    return justifyContents;
  }
  return 'flex-start';
}

export function processWidth(width: width | undefined): string | undefined {
  if(width === undefined) return undefined
  if(width === 'fill') return '100%'
  if(typeof width === 'number') return `${width}px`
  if(width.includes('calc')) return width
}
