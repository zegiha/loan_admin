import {TColor, TTextSize, TTextWidth} from "@/shared/ui/atoms/typo/type";
import {CSSProperties} from "react";
import {semantic} from "@/shared/lib";

export function getElementType(textSize: TTextSize): string {
  switch (textSize) {
    case 'display': return 'h1';
    case 'header': return 'h1';
    case 'title': return 'h2';
    case 'body': return 'h3';
    default: return 'p';
  }
}

export function getFontSize(textSize: TTextSize, emphasize: boolean): string {
  switch (textSize) {
    case 'display': return `44px`;
    case 'header': return `${emphasize ? 29 : 28}px`;
    case 'title': return `${emphasize ? 25 : 24}px`;
    case 'body': return `${emphasize ? 20 : 20}px`;
    case 'subBody': return `${emphasize ? 18 : 18}px`;
    case 'contents': return `${emphasize ? 17 : 16}px`;
    case 'caption': return `${emphasize ? 14 : 14}px`;
  }
}

export function getWidthByStyle(width: TTextWidth | undefined): CSSProperties {
  if(width === undefined) return {width: 'auto'};
  switch (width) {
    case 'fill': return {
      flex: '1 0 0',
    };
    case 'hug': return {width: 'max-content'};
    default: return {width: `${width}px`};
  }
}

export function getColor(color: TColor): string {
  switch (color) {
    case 'variable': return semantic.onGeneric.onGenericVariable;
    case 'generic': return semantic.onGeneric.onGeneric;
    case 'dim': return semantic.onGeneric.onGenericDim;
    case 'primary': return semantic.onGeneric.onGenericPrimary;
    case 'onPrimary': return semantic.primary.onPrimary;
    case 'onPrimaryDim': return semantic.primary.onPrimaryDim;
    case 'error': return semantic.errorContainer.onErrorContainer;
    default: return '';
  }
}
