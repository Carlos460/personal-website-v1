import Link from 'next/link';
// Component Imports
import DefaultLayout from '@layouts/default'
// Import Styles
import {ProjectShowcase, Header, HeaderContent, TitleContainer, ButtonContainer,HeaderButton} from '../public/styles/styles'

export default function Home() {
  return (
      <DefaultLayout>
          <Header>
            <HeaderContent>
              <TitleContainer>
                <h1>Hello, my name is Carlos</h1>
                <h2>I'm a Front-End Developer, proficient with JavaScript and working with other web-technologies!</h2>
              </TitleContainer>
              <ButtonContainer>
                <Link href="#portfolio">
                  <HeaderButton>LATEST PROJECTS!</HeaderButton>
                </Link>
              </ButtonContainer>
            </HeaderContent>
          </Header>
          <ProjectShowcase>
            <TitleContainer>
              <h1>Latest Projects</h1>
            </TitleContainer>
          </ProjectShowcase>
      </DefaultLayout>
  );
}