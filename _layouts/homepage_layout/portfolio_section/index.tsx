// Import Components
import ProjectCard from '@includes/project_card/index'
import Tag from '@includes/project_card/tag'
// Import Styled Components
import { ProjectContainer, Portfolio, ProjectShowcaseTitle } from './styles'

function PortfolioSection(props: { projectList: Array<object> }) {
  return (
    <>
      <Portfolio id='portfolio'>
        <ProjectShowcaseTitle>
          <h1>Projects that have helped me grow as a Developer</h1>
        </ProjectShowcaseTitle>

        <ProjectContainer>
          {props.projectList.map((project: any, index: number) => {
            return (<ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              github={project.github}
              link={project.url}
              tags={project.tags.map((tag: string, index: number) => {
                return <Tag key={index}>{tag}</Tag>
              })}
              imageUrl={project.img}
            />)
          })
          }
        </ProjectContainer>
      </Portfolio>
    </>
  );
}

export default PortfolioSection;

