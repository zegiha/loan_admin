import {IFlex} from '@/shared/ui/atoms/Flex/type'
import {CSSProperties} from "react";
import {processSortingProp, processWidth} from '@/shared/ui/atoms/Flex/helper'
import {motion} from 'framer-motion'

export default function Flex({
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
      style={{
        ...genericStyle,
        ...style
      }}
      className={className}
      ref={ref}
      onClick={onClick}
    >
      {children}
    </motion.div>;
  } else {
    return <div
      style={{
        ...genericStyle,
        ...style
      }}
      className={className}
      ref={ref}
      onClick={onClick}
    >
      {children}
    </div>;
  }
}