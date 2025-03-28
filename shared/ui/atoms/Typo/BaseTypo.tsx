import {IBaseTypo} from '@/shared/const'
import {createElement} from "react";
import {getColor, getElementType, getFontSize, getWidthByStyle} from "@/shared/lib/Typo/helper";
import style from './typo.module.css';

export default function BaseTypo({
  textSize,
  isPre,
  emphasize,
  children,
  width,
  textOverflowLine,
  textAlign,
  color='generic',
  userSelect='none',
  underline,
  className,
}:IBaseTypo) {
  return createElement(
    isPre ? 'pre' : getElementType(textSize),
    {
      style: {
        fontSize: getFontSize(textSize, !!emphasize),
        lineHeight: '145%',
        fontWeight: emphasize ? 600 : 400,
        textAlign: textAlign,
        justifyContent: textAlign,
        wordBreak: 'keep-all',
        userSelect: userSelect,
        ...getWidthByStyle(width),
        whiteSpace: isPre === undefined ? undefined : typeof isPre === "boolean" || isPre === 'wrap' ? 'pre-wrap' : 'pre',
        textDecoration: underline ? 'underline' : undefined,
        color: getColor(color)
      },
      className: `
      ${className}
      ${style.textTransition}
      ${textOverflowLine === 1 ?
        style.overflowLine1 :
        textOverflowLine === 2 ?
          style.overflowLine2 : ''}
      `,
    },
    children,
  );
}
