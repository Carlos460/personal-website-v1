import Link from 'next/link';

import { motion } from 'framer-motion';

import * as S from './styles';

function HeaderSection() {
  return (
    <S.Header>
      <S.HeaderContent>
        <motion.div>
          <S.TitleContainer>
            <h1>Hello there!</h1>
            <h2>{`I'm a JavaScript Developer, Building Modern and Responsive Web Apps.`}</h2>
          </S.TitleContainer>
          <S.LogoLinkContainer>
            <S.LogoLink
              yShift={`0px`}
              logo={`url(./icons/linkedin.svg)`}
              target="_blank"
              href="https://www.linkedin.com/in/carlos-flores-1795981b6/"
            />
            <S.LogoLink
              yShift={`0px`}
              logo={`url(./icons/github.svg)`}
              target="_blank"
              href="https://github.com/Carlos460"
            />
            <S.LogoLink
              yShift={`3px`}
              logo={`url(./icons/mail.svg)`}
              target="_blank"
              href="mailto:carlosfloresalex@gmail.com?subject=Greetings from:"
            />
          </S.LogoLinkContainer>
          <S.ButtonContainer>
            <Link href="#portfolio">
              <motion.div whileHover={{ y: -5 }} whileTap={{ y: 5 }}>
                <S.HeaderButton>
                  <h2>Portfolio</h2>
                </S.HeaderButton>
              </motion.div>
            </Link>
          </S.ButtonContainer>
        </motion.div>
      </S.HeaderContent>
    </S.Header>
  );
}

export default HeaderSection;
