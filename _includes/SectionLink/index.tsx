import { motion } from 'framer-motion';
import { StyledInterface } from 'styled-components';
import * as S from './styles';

import { FunctionComponent } from 'react';

interface SectionLinkProps {
  linkTo: string;
}

const SectionLink: FunctionComponent<SectionLinkProps> = ({
  linkTo,
  children,
}) => {
  return (
    <>
      <S.SkillsLinkContainer>
        <S.SkillsLink href={linkTo}>
          <motion.div whileHover={{ y: -6 }} whileTap={{ y: 1 }}>
            {children}
          </motion.div>
        </S.SkillsLink>
      </S.SkillsLinkContainer>
    </>
  );
};

export default SectionLink;
