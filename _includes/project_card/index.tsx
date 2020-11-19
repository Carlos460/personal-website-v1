
// Import Styles
import { useState } from 'react';
import {
  Button, ButtonContainer, ProjectCardContainer, ProjectCardTitle,
  TagContainer, DesccriptionContainer, ProjectCardImage, ProjectCardContent
} from './styles'

export default function ProjectCard(props) {
  const [hasGithubLink] = useState(props.github === null);
  const [hasUrlLink] = useState(props.link === null)
  return (
    <ProjectCardContainer>
      <ProjectCardImage>
      </ProjectCardImage>
      <ProjectCardContent>
        <ProjectCardTitle>{props.title}</ProjectCardTitle>
        <TagContainer>
          {props.tags}
        </TagContainer>
        <DesccriptionContainer>
          {props.description}
        </DesccriptionContainer>
        <ButtonContainer>
          {hasUrlLink
            ? <Button>Offline</Button>
            : <Button href={props.link}>Visit Webstite</Button>
          }
          {hasGithubLink
            ? <Button>Private</Button>
            : <Button href={props.github}>View Github</Button>
          }
        </ButtonContainer>
      </ProjectCardContent>
    </ProjectCardContainer>
  );
}