import { motion } from 'framer-motion';
// Import Styles
import { useState } from 'react';
import {
  Button,
  ButtonContainer,
  ProjectCardContainer,
  ProjectCardTitle,
  DesccriptionContainer,
  ProjectCardImage,
  ProjectCardContent,
} from './styles';

interface ProjectCardProps {
  github: string;
  link: string;
  imageUrl: string;
  title: string;
  description: string;
  tags?: object;
}

Button.defaultProps = {
  theme: {
    textColor: `var(--white)`,
    border: `solid transparent 2px`,
    bgColor: `var(--blue)`,
  },
};

const disabledButton = {
  textColor: `#8a8a8a`,
  border: `solid #8a8a8a 2px`,
  bgColor: `transparent`,
};

const FadeIn = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};

export default function ProjectCard(props: ProjectCardProps) {
  const [hasGithubLink] = useState(props.github === '');
  const [hasUrlLink] = useState(props.link === '');
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      transition={{ delay: 0.5 }}
      variants={FadeIn}
    >
      <ProjectCardContainer>
        <ProjectCardImage customImage={props.imageUrl}></ProjectCardImage>
        <ProjectCardContent>
          <ProjectCardTitle>{props.title}</ProjectCardTitle>
          <DesccriptionContainer>{props.description}</DesccriptionContainer>
          <ButtonContainer>
            <motion.div whileHover={{ y: -3 }} whileTap={{ y: 2 }}>
              {hasUrlLink ? (
                <Button theme={disabledButton}>Offline</Button>
              ) : (
                <Button href={props.link} target={`_blank`}>
                  Visit Webstite
                </Button>
              )}
            </motion.div>
            <motion.div whileHover={{ y: -3 }} whileTap={{ y: 2 }}>
              {hasGithubLink ? (
                <Button theme={disabledButton}>Private</Button>
              ) : (
                <Button href={props.github} target={`_blank`}>
                  View Github
                </Button>
              )}
            </motion.div>
          </ButtonContainer>
        </ProjectCardContent>
      </ProjectCardContainer>
    </motion.div>
  );
}
