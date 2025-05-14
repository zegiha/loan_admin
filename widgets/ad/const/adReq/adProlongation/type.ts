import { AdProlongationEntity } from '../../../../../prevEntities'
import { TSetState } from '@/shared/const'

export interface IAdProlongation extends AdProlongationEntity {
  permissionFunc: () => void
}

export interface IAdProlongationPermission {
  isOpen: boolean
  setIsOpen: TSetState<boolean>
  targetId: string
  setTargetId: TSetState<string | null>
  refetch: () => void
}
