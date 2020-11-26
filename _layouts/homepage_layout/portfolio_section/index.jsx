// Import Components
import ProjectCard from '@includes/project_card/index'
import Tag from '@includes/project_card/tag'
// Import Styled Components
import { ProjectContainer, Portfolio, ProjectShowcaseTitle } from './styles'


const projectCardData = {
  punity: {
    title: `P'Unity`,
    github: ``,
    link: `https://punity.de/`,
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, minima aperiam. 
    Sed quos obcaecati perferendis, exercitationem inventore labore error, veniam rerum explicabo esse quaerat ipsam veritatis, 
    sapiente qui at quibusdam dignissimos minima amet reiciendis adipisci nobis magnam debitis ipsa 
    incidunt! Nisi obcaecati asperiores veniam consectetur earum atque illum fugiat odio.
    `,
  },
  taskit: {
    title: `Task-It`,
    github: `https://github.com/Carlos460/Task-it`,
    link: ``,
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, minima aperiam. 
    Sed quos obcaecati perferendis, exercitationem inventore labore error, veniam rerum explicabo esse quaerat ipsam veritatis, 
    sapiente qui at quibusdam dignissimos minima amet reiciendis adipisci nobis magnam debitis ipsa 
    incidunt! Nisi obcaecati asperiores veniam consectetur earum atque illum fugiat odio.
    `,
  },
  personalwebsite: {
    title: `Web Portfolio`,
    github: `https://github.com/Carlos460/personal-website`,
    link: `https://carlosflores.vercel.app/`,
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, minima aperiam. 
    Sed quos obcaecati perferendis, exercitationem inventore labore error, veniam rerum explicabo esse quaerat ipsam veritatis, 
    sapiente qui at quibusdam dignissimos minima amet reiciendis adipisci nobis magnam debitis ipsa 
    incidunt! Nisi obcaecati asperiores veniam consectetur earum atque illum fugiat odio.
    `,
  },
  moonbase: {
    title: `Moon Base`,
    github: `https://github.com/esteban0829/nodejs_class_apply_webpage`,
    link: ``,
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, minima aperiam. 
    Sed quos obcaecati perferendis, exercitationem inventore labore error, veniam rerum explicabo esse quaerat ipsam veritatis, 
    sapiente qui at quibusdam dignissimos minima amet reiciendis adipisci nobis magnam debitis ipsa 
    incidunt! Nisi obcaecati asperiores veniam consectetur earum atque illum fugiat odio.
    `,
  },
  tenniswebsite: {
    title: `Tennis Academy`,
    github: ``,
    link: ``,
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, minima aperiam. 
    Sed quos obcaecati perferendis, exercitationem inventore labore error, veniam rerum explicabo esse quaerat ipsam veritatis, 
    sapiente qui at quibusdam dignissimos minima amet reiciendis adipisci nobis magnam debitis ipsa 
    incidunt! Nisi obcaecati asperiores veniam consectetur earum atque illum fugiat odio.
    `,
  },
};

function PortfolioSection() {
  return (
    <>
      <Portfolio id='portfolio'>
        <ProjectShowcaseTitle>
          <h1>Latest Projects</h1>
        </ProjectShowcaseTitle>
        <ProjectContainer>
          <ProjectCard
            title={projectCardData.punity.title}
            imageUrl={`./img/punity.png`}
            description={projectCardData.punity.description}
            github={projectCardData.punity.github}
            link={projectCardData.punity.link}
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
            imageUrl={`./img/taskit.png`}
            description={projectCardData.taskit.description}
            github={projectCardData.taskit.github}
            link={projectCardData.taskit.link}
            tags={
              <>
                <Tag>Express.js</Tag>
                <Tag>Ejs Engine</Tag>
                <Tag>MongoDB</Tag>
                <Tag>Fetch API</Tag>
              </>
            }
          />
          <ProjectCard
            title={projectCardData.personalwebsite.title}
            description={projectCardData.personalwebsite.description}
            github={projectCardData.personalwebsite.github}
            link={projectCardData.personalwebsite.link}
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
            imageUrl={`./img/moonbase.png`}
            description={projectCardData.moonbase.description}
            github={projectCardData.moonbase.github}
            link={projectCardData.moonbase.link}
            tags={
              <>
                <Tag>Express.js</Tag>
                <Tag>MySQL</Tag>
                <Tag>Fetch API</Tag>
              </>
            }
          />
          <ProjectCard
            title={projectCardData.tenniswebsite.title}
            imageUrl={`./img/tennis.png`}
            description={projectCardData.tenniswebsite.description}
            github={projectCardData.tenniswebsite.github}
            link={projectCardData.tenniswebsite.link}
            tags={
              <>
                <Tag>HTML</Tag>
                <Tag>CSS</Tag>
              </>
            }
          />
        </ProjectContainer>
      </Portfolio>
    </>
  );
}

export default PortfolioSection;