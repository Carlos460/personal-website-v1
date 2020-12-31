import { gestureProps } from 'framer-motion/types/motion/features/gestures';
import * as S from './style';

function Section(props: any) {
  return (
    <>
      <S.Container>{props.children}</S.Container>
    </>
  );
}

export default Section;
