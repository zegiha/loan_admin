import {TSetState} from '@/shared/const'

const handleElevateComponentESC = (e: KeyboardEvent, setIsOpen: TSetState<boolean>) => {
  if (e.key === 'Escape') setIsOpen(false)
}

export default handleElevateComponentESC