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
  switch(width) {
    case 'fill': return '100%';
    case undefined: return undefined;
    default: return `${width}px`;
  }
}
