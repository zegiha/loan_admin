import Flex from '@/shared/ui/atoms/Flex/Flex'
import {IRowAndCol} from '@/shared/const/Flex/type'

export default function Row(props: IRowAndCol) {
  return <Flex flexDirection={'row'} {...props}/>
}