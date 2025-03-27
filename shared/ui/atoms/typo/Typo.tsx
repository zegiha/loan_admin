import {ITypo, TTextSize} from "@/shared/ui/atoms/typo/type";
import BaseTypo from "@/shared/ui/atoms/typo/BaseTypo";

function createTypoComponent(textSize: TTextSize) {
  return function TypoComponent(props: ITypo) {
    return (
      <BaseTypo textSize={textSize} {...props}>
        {props.children}
      </BaseTypo>
    );
  };
}

const Typo = {
  Display: createTypoComponent('display'),
  Header: createTypoComponent('header'),
  Title: createTypoComponent('title'),
  Body: createTypoComponent('body'),
  SubBody: createTypoComponent('subBody'),
  Contents: createTypoComponent('contents'),
  Caption: createTypoComponent('caption'),
};


export default Typo;
