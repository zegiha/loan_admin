import {TIconSize} from '@/shared/const'

export function getIconSize(size: TIconSize) {
  switch (size) {
    case 'small': return 24;
    default: throw new Error(`IconButton can be small yet`)
  }
}