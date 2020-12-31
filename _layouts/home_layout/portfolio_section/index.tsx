// Import Components
import ProjectCard from '@includes/project_card/index';
// Import Styled Components
import { ProjectContainer, Portfolio, ProjectShowcaseTitle } from './styles';

function PortfolioSection(props: { projectList: Array<object> }) {
  return (
    <>
      <Portfolio id="portfolio">
        <ProjectShowcaseTitle>
          <h1>Recent Work</h1>
        </ProjectShowcaseTitle>

        <ProjectContainer>
          {props.projectList.map((project: any, index: number) => {
            return (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                github={project.github}
                link={project.url}
                imageUrl={project.img}
              />
            );
          })}
        </ProjectContainer>
      </Portfolio>
    </>
  );
}

export default PortfolioSection;
