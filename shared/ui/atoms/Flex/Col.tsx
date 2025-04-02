import Flex from '@/shared/ui/atoms/Flex/Flex'
import {IRowAndCol} from '@/shared/const/Flex/type'

export default function Col(props: IRowAndCol) {
  return <Flex flexDirection={'col'} {...props}/>
}
