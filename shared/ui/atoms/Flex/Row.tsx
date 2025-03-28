import Flex from '@/shared/ui/atoms/Flex/Flex'
import {IRowAndCol} from '@/shared/const/type/Flex/type'

export default function Row(props: IRowAndCol) {
  return <Flex flexDirection={'row'} {...props}/>
}