import {IFlex} from '@/shared/const'
import {processSortingProp, processWidth} from '@/shared/lib'
import {CSSProperties} from "react";
import {motion} from 'framer-motion'

export default function Flex({
  key,
  width,
  flexDirection,
  justifyContents,
  alignItems,
  wrap,
  gap,
  className,
  style,
  children,
  ref,
  onClick,
  motion: motionProps
}: IFlex) {
  const genericStyle: CSSProperties = {
    display: 'flex',
    width: processWidth(width),
    flexDirection: flexDirection === undefined ? undefined :
      flexDirection === 'row' ? 'row' : 'column',
    justifyContent: processSortingProp(justifyContents),
    alignItems: processSortingProp(alignItems),
    flexWrap: wrap ? 'wrap' : undefined,
    gap: gap,
  };
  if(motionProps !== undefined) {
    return <motion.div
      key={key}
      style={{
        ...genericStyle,
        ...style
      }}
      className={className}
      ref={ref}
      onClick={onClick}
      {...typeof motionProps === 'boolean' ? {} : motionProps}
    >
      {children}
    </motion.div>
  } else {
    return <div
      key={key}
      style={{
        ...genericStyle,
        ...style
      }}
      className={className}
      ref={ref}
      onClick={onClick}
    >
      {children}
    </div>
  }
}
