import { motion } from 'framer-motion'
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
          <motion.div
            whileHover={{ y: -3 }}
            whileTap={{ y: 2 }}
          >
            {hasUrlLink
              ? <Button>Offline</Button>
              : <Button href={props.link} target={`_blank`}>Visit Webstite</Button>
            }
          </motion.div>
          <motion.div
            whileHover={{ y: -3 }}
            whileTap={{ y: 2 }}
          >
            {hasGithubLink
              ? <Button>Private</Button>
              : <Button href={props.github} target={`_blank`}>View Github</Button>
            }
          </motion.div>
        </ButtonContainer>
      </ProjectCardContent>
    </ProjectCardContainer>
  );
}