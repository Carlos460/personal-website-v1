import Link from 'next/link';
// Import Layout Components
import DefaultLayout from '@layouts/default_template'
// Import Styles
import {
  Header, HeaderOverlay, HeaderContent, TitleContainer,
  ButtonContainer, HeaderButton, LogoLinkContainer, LogoLink
} from './styles'
// Import Libries
import { motion } from 'framer-motion'

function HomepageLayout(porps: any) {
  return (
    <div>
      <DefaultLayout title={`Carlos Flores`}>
        <HeaderOverlay></HeaderOverlay>
        <Header>
          <HeaderContent>
            <motion.div >
              <TitleContainer>
                <h1>Hello there!</h1>
                <h2>{`I'm a JavaScript Developer, Building Modern and Responsive Web Apps.`}</h2>
              </TitleContainer>
              <LogoLinkContainer>
                <LogoLink
                  yShift={`0px`}
                  logo={`url(./icons/linkedin.svg)`}
                  target='_blank'
                  href='https://www.linkedin.com/in/carlos-flores-1795981b6/'
                />
                <LogoLink
                  yShift={`0px`}
                  logo={`url(./icons/github.svg)`}
                  target='_blank'
                  href='https://github.com/Carlos460'
                />
                <LogoLink
                  yShift={`3px`}
                  logo={`url(./icons/mail.svg)`}
                  target='_blank'
                  href='mailto:carlosfloresalex@gmail.com?subject=Greetings from:'
                />

              </LogoLinkContainer>
              <ButtonContainer>
                <Link href="#portfolio">
                  <motion.div
                    whileHover={{ y: -5 }}
                    whileTap={{ y: 5 }}
                  >
                    <HeaderButton><h2>Portfolio</h2></HeaderButton>
                  </motion.div>
                </Link>
              </ButtonContainer>
            </motion.div>
          </HeaderContent>
        </Header>
        {porps.children}
      </DefaultLayout>
    </div>
  );
}

export default HomepageLayout;
