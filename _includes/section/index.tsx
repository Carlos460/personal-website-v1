import { gestureProps } from 'framer-motion/types/motion/features/gestures';
import * as S from './style';

import { FunctionComponent } from 'react';

type SectionProps = {
  id: string;
};

const Section: FunctionComponent<SectionProps> = ({ id, children }) => {
  return (
    <>
      <S.Container id={id}>{children}</S.Container>
    </>
  );
};

export default Section;
