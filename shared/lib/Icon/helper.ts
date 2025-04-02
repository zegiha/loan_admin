import {semantic} from '@/shared/const'
import {TColor} from '@/shared/const/Icon/iconType'

export function getColor(color: TColor): string {
  switch (color) {
    case 'primary': return semantic.onGeneric.onGenericPrimary;
    case 'variable': return semantic.onGeneric.onGenericVariable;
    case 'normal': return semantic.onGeneric.onGeneric;
    case 'white': return semantic.primary.onPrimary;
    default: return semantic.onGeneric.onGenericDim;
  }
}