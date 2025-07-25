import {TIconSize} from '@/shared/const'

export function getIconSize(size: TIconSize) {
  switch (size) {
    case 'xsmall': return 20;
    case 'small': return 24;
    case 'medium': return 32;
    default: throw new Error(`IconButton can be small yet`)
  }
}
