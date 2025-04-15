import {AdProlongationEntity, BrokerEntitySummary} from '@/entities'
import {TSetState} from '@/shared/const'

export interface IAdProlongation
  extends
  Omit<AdProlongationEntity, 'userId'>,
  Omit<BrokerEntitySummary, 'userId'> {
  permissionFunc: () => void
}

export interface IAdProlongationPermission {
  isOpen: boolean
  setIsOpen: TSetState<boolean>
  targetId: string | null
  setTargetId: TSetState<string | null>
}