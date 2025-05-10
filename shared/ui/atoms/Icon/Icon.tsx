import iconList from '@/shared/const/Icon/iconList'
import {IconHelper as helper} from '@/shared/lib'
import {IIcon} from '@/shared/const/Icon/iconType'
import {CSSProperties} from "react"
import transitionStyle from './style.module.css';
import {motion} from 'framer-motion'

export default function Icon({
  iconKey,
  color = 'normal',
  size = 24,
  fill=true,
  deg=0,
  weight='300',
  motion: motionProps,
}: IIcon) {
  const style: CSSProperties = {
    fontSize: motionProps !== undefined ? undefined : size,
    fontVariationSettings: `'FILL' ${fill ? '1' : '0'}, 'wght' ${weight}`,
    transform: `rotate(${deg}deg)`,
    color: color === 'none' ? 'transparent' : helper.getColor(color),
    userSelect: 'none',
  }
  if(motionProps === true) motionProps = {};
  if(motionProps === undefined) return (
    <div
      className={`material-symbols-rounded ${transitionStyle.transition}`}
      style={style}
    >
      {iconList[iconKey]}
    </div>
  );
  else return (
    <motion.div
      className={`material-symbols-rounded ${transitionStyle.transition}`}
      style={style}
      {...motionProps}
    >
      {iconList[iconKey]}
    </motion.div>
  )
}
