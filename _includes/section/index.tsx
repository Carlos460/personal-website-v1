import { gestureProps } from 'framer-motion/types/motion/features/gestures';
import * as S from './style';

import { FunctionComponent } from 'react';

type SectionProps = {
  id: string;
  bgColor?: string;
  bgImage?: string;
};

const Section: FunctionComponent<SectionProps> = ({
  bgImage,
  bgColor,
  id,
  children,
}) => {
  return (
    <>
      <S.Container bgImage={bgImage} bgColor={bgColor} id={id}>
        {children}
      </S.Container>
    </>
  );
};

export default Section;
