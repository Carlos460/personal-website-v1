
// Import Styles
import { useState } from 'react';
import {
  Button, ButtonContainer, ProjectCardContainer, ProjectCardTitle,
  TagContainer, DesccriptionContainer, ProjectCardImage, ProjectCardContent
} from './styles'

interface ProjectCardProps {
  github: string;
  link: string;
  imageUrl?: string;
  title: string;
  description: string;
  tags?: object;
}

export default function ProjectCard(props: ProjectCardProps) {
  const [hasGithubLink] = useState(props.github === '');
  const [hasUrlLink] = useState(props.link === '')
  return (
    <ProjectCardContainer>
      <ProjectCardImage image={props.imageUrl}>
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