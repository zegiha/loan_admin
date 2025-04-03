import {IBaseTypo} from '@/shared/const'
import {createElement} from "react";
import style from './typo.module.css';
import {TypoHelper as helper} from '@/shared/lib'

export default function BaseTypo({
  textSize,
  isPre,
  emphasize,
  children,
  width,
  textOverflowLine,
  textAlign,
  color='generic',
  userSelect='auto',
  underline,
  style: customStyle,
  className,
  onClick
}:IBaseTypo) {
  return createElement(
    isPre ? 'pre' : helper.getElementType(textSize),
    {
      style: {
        fontSize: helper.getFontSize(textSize, !!emphasize),
        lineHeight: '145%',
        fontWeight: emphasize ? 600 : 400,
        textAlign: textAlign,
        justifyContent: textAlign,
        wordBreak: 'keep-all',
        userSelect: userSelect,
        ...helper.getWidthByStyle(width),
        whiteSpace: isPre === undefined ? undefined : typeof isPre === "boolean" || isPre === 'wrap' ? 'pre-wrap' : 'pre',
        textDecoration: underline ? 'underline' : undefined,
        color: helper.getColor(color),
        cursor: onClick ? 'pointer' : undefined,
        ...customStyle,
      },
      className: `
      ${className}
      ${style.textTransition}
      ${textOverflowLine === 1 ?
        style.overflowLine1 :
        textOverflowLine === 2 ?
          style.overflowLine2 : ''}
      `,
      onClick: onClick ? () => onClick() : undefined,
    },
    children,
  );
}
