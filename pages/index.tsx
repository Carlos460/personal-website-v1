import Link from 'next/link';
// Component Imports
import DefaultLayout from '@layouts/default'
import ProjectCard from '@includes/project_card/index'
import Tag from '@includes/project_card/tag'
// Import Styles
import {ProjectShowcase, Header, HeaderContent, TitleContainer, 
  ButtonContainer,HeaderButton, ProjectContainer, ProjectShowcaseTitle} from '../public/styles/styles'


const projectCardData = {
  punity: {
    title: `P'Unity`,
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, minima aperiam. 
    Sed quos obcaecati perferendis, exercitationem inventore labore error, veniam rerum explicabo esse quaerat ipsam veritatis, 
    sapiente qui at quibusdam dignissimos minima amet reiciendis adipisci nobis magnam debitis ipsa 
    incidunt! Nisi obcaecati asperiores veniam consectetur earum atque illum fugiat odio.
    `,
  },
  taskit: {
    title: `Task-It`,
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, minima aperiam. 
    Sed quos obcaecati perferendis, exercitationem inventore labore error, veniam rerum explicabo esse quaerat ipsam veritatis, 
    sapiente qui at quibusdam dignissimos minima amet reiciendis adipisci nobis magnam debitis ipsa 
    incidunt! Nisi obcaecati asperiores veniam consectetur earum atque illum fugiat odio.
    `,
  },
  personalwebsite: {
    title: `Web Portfolio`,
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, minima aperiam. 
    Sed quos obcaecati perferendis, exercitationem inventore labore error, veniam rerum explicabo esse quaerat ipsam veritatis, 
    sapiente qui at quibusdam dignissimos minima amet reiciendis adipisci nobis magnam debitis ipsa 
    incidunt! Nisi obcaecati asperiores veniam consectetur earum atque illum fugiat odio.
    `,
  },
  moonbase: {
    title: `Moon Base`,
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, minima aperiam. 
    Sed quos obcaecati perferendis, exercitationem inventore labore error, veniam rerum explicabo esse quaerat ipsam veritatis, 
    sapiente qui at quibusdam dignissimos minima amet reiciendis adipisci nobis magnam debitis ipsa 
    incidunt! Nisi obcaecati asperiores veniam consectetur earum atque illum fugiat odio.
    `,
  },
  tenniswebsite: {
    title: `Tennis Academy`,
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, minima aperiam. 
    Sed quos obcaecati perferendis, exercitationem inventore labore error, veniam rerum explicabo esse quaerat ipsam veritatis, 
    sapiente qui at quibusdam dignissimos minima amet reiciendis adipisci nobis magnam debitis ipsa 
    incidunt! Nisi obcaecati asperiores veniam consectetur earum atque illum fugiat odio.
    `,
  },
};

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
          <ProjectShowcase id='portfolio'>
            <ProjectShowcaseTitle>
              <h1>Latest Projects</h1>
            </ProjectShowcaseTitle>
            <ProjectContainer>
              <ProjectCard 
                title={projectCardData.punity.title}
                description={projectCardData.punity.description}
                isLatestProject={true}
                tags={
                <>
                  <Tag>Front-End</Tag>
                  <Tag>React.js</Tag>
                  <Tag>Styled Components</Tag>
                </>
                }
                />
              <ProjectCard 
                title={projectCardData.taskit.title}
                description={projectCardData.taskit.description}
                tags={
                <>
                  <Tag>Express.js</Tag>
                  <Tag>Ejs Engine</Tag>
                  <Tag>JavaScript</Tag>
                  <Tag>CSS</Tag>
                </>
                }
                />
              <ProjectCard 
                title={projectCardData.personalwebsite.title}
                description={projectCardData.personalwebsite.description}
                tags={
                <>
                  <Tag>Next.js</Tag>
                  <Tag>TypeScript</Tag>
                  <Tag>Styled Components</Tag>
                </>
                }
                />
              <ProjectCard 
                title={projectCardData.moonbase.title}
                description={projectCardData.moonbase.description}
                tags={
                <>
                  <Tag>JavaScript</Tag>
                  <Tag>HTML</Tag>
                  <Tag>CSS</Tag>
                </>
                }
                />
              <ProjectCard 
                title={projectCardData.tenniswebsite.title}
                description={projectCardData.tenniswebsite.description}
                tags={
                <>
                  <Tag>JavaScript</Tag>
                  <Tag>HTML</Tag>
                  <Tag>CSS</Tag>
                </>
                }
                />
 
            </ProjectContainer>
          </ProjectShowcase>
      </DefaultLayout>
  );
}