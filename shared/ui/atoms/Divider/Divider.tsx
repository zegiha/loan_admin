import style from './style.module.css'
import {CSSProperties} from "react";

export default function Divider({
  width,
  height,
  padding,
}: {
  width?: 'fill' | number,
  height?: number,
  padding?: Array<number>,
}) {
  const processPadding = () => {
    if(padding !== undefined) {
      let res = ''
      padding.forEach((v, i) => {
        res += `${v}px`
        if(i !== padding.length-1) res += ' '
      })
      return res === '' ? undefined : res
    } else return undefined
  }
  const wrapperStyle: CSSProperties = {
    width: width === 'fill' || width === undefined ?
      '100%' :
      width,
    padding: processPadding(),
  }

  return <div style={wrapperStyle}>
    <div className={style.divider} style={{height: height === undefined ? 1 : height,}}/>

  </div>
}
