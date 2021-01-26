import { motion } from 'framer-motion';
import * as S from './style';

export default function SkillCard(props: any) {
  return (
    <>
      <motion.div whileHover={{ y: -25 }}>
        <S.Container>
          <S.ImageWrapper>
            <S.ImageLogo
              invertValue={props.invert || 0}
              offSet={props.translateY}
              src={props.imageUrl}
              alt={`skill image`}
            />
          </S.ImageWrapper>

          <S.DescripotionWrapper>{props.children}</S.DescripotionWrapper>
        </S.Container>
      </motion.div>
    </>
  );
}
