import {ITypo} from '@/shared/const'
import {Typo} from '@/shared/ui/atoms'

export default function({
  color='dim',
  width='fill',
  onClick,
  children
}: {
  color?: ITypo['color']
  width?: ITypo['width']
  onClick: ITypo['onClick']
  children: ITypo['children']
}) {
  return <Typo.Contents
    color={color}
    width={width}
    onClick={onClick}
    underline
  >
    {children}
  </Typo.Contents>
}