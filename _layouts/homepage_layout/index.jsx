import Link from 'next/link';
// Import Layout Components
import DefaultLayout from '@layouts/default_template'
import PortfolioSection from '@layouts/homepage_layout/portfolio_section'
// Import Styles
import {
  ProjectShowcaseContainer, Header, HeaderContent, TitleContainer,
  ButtonContainer, HeaderButton
} from './styles'
// Import Libries
import { motion } from 'framer-motion'

function HomepageLayout() {
  return (
    <div>
      <DefaultLayout title={`Carlos Flores`}>
        <Header>
          <HeaderContent>
            <motion.div >
              <TitleContainer>
                <h1>Hello there!</h1>
                <h2>{`I'm a JavaScript Developer, Building Modern and Responsive Web Apps.`}</h2>
              </TitleContainer>
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
        <PortfolioSection />
      </DefaultLayout>
    </div>
  );
}

export default HomepageLayout;